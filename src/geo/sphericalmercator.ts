/**
 * @see https://github.com/mapbox/sphericalmercator/blob/master/sphericalmercator.js
 */

import { isFloat, D2R, R2D, isEPSG3857, isEPSG4326 } from "..";

type cacheLevel = {
    Bc: number[];
    Cc: number[];
    zc: number[];
    Ac: number[];
}

type cache = {
    [key: number]: cacheLevel;
}

let cache = {} as cache; 
// Each instance of the SphericalMercator class 
// has its own instance of the cacheLevel object stored within the shared cache object.

const A: number = 6378137.0;
const MAXEXTENT: number = 20037508.342789244;
const MAXLON: number = 180;
const MAXLAT: number = 85.05112877980659;

export class SphericalMercator {

    private readonly size: number;
    private readonly expansion: number;
    private readonly Bc: number[];
    private readonly Cc: number[];
    private readonly zc: number[];
    private readonly Ac: number[];

    /** SphericalMercator constructor: precaches calculations for fast tile lookups.
     * @param size
     * @param options 
     */
    constructor(options: { size?: number; antimeridian?: boolean } = {}) {
      this.size = options.size || 256;
      this.expansion = options.antimeridian === true ? 2 : 1;
  
        if (!cache[this.size]) {
            var size = this.size;

            let c = cache[this.size] = {
                Bc: [] as number[],
                Cc: [] as number[],
                zc: [] as number[],
                Ac: [] as number[]
            };

            for (var d = 0; d < 30; d++) {
                c.Bc.push(size / 360);
                c.Cc.push(size / (2 * Math.PI));
                c.zc.push(size / 2);
                c.Ac.push(size);
                size *= 2;
            }
        }
        this.Bc = cache[this.size].Bc;
        this.Cc = cache[this.size].Cc;
        this.zc = cache[this.size].zc;
        this.Ac = cache[this.size].Ac;
    }

    /**
     * Convert lon lat to screen pixel value
     * @param  {Array} ll `[lon, lat]` array of geographic coordinates.
     * @param {Number} zoom zoom level.
     * @returns 
     */
    public px(ll: number[], zoom: number): number[] {
        // make ll inside the valid range
        if (ll[0] > MAXLON) {
            ll[0] = MAXLON;
        }
        if (ll[0] < -MAXLON) {
            ll[0] = -MAXLON;
        }
        if (ll[1] > MAXLAT) {
            ll[1] = MAXLAT;
        }
        if (ll[1] < -MAXLAT) {
            ll[1] = -MAXLAT;
        }
        // convert to screen pixel value
        if (isFloat(zoom)) {
            var size = this.size * Math.pow(2, zoom);
            var d = size / 2;
            var bc = (size / 360);
            var cc = (size / (2 * Math.PI));
            var ac = size;
            var f = Math.min(Math.max(Math.sin(D2R * ll[1]), -0.9999), 0.9999);
            var x = d + ll[0] * bc;
            var y = d + 0.5 * Math.log((1 + f) / (1 - f)) * -cc;
            (x > ac * this.expansion) && (x = ac * this.expansion);
            (y > ac) && (y = ac);
            //(x < 0) && (x = 0);
            //(y < 0) && (y = 0);
            return [x, y];
        } else {
            var d = this.zc[zoom];
            var f = Math.min(Math.max(Math.sin(D2R * ll[1]), -0.9999), 0.9999);
            var x = Math.round(d + ll[0] * this.Bc[zoom]);
            var y = Math.round(d + 0.5 * Math.log((1 + f) / (1 - f)) * (-this.Cc[zoom]));
            (x > this.Ac[zoom] * this.expansion) && (x = this.Ac[zoom] * this.expansion);
            (y > this.Ac[zoom]) && (y = this.Ac[zoom]);
            //(x < 0) && (x = 0);
            //(y < 0) && (y = 0);
            return [x, y];
        }
    }

    /**
     * Convert screen pixel value to lon lat
     * @param {Array} px `[x, y]` array of geographic coordinates.
     * @param {Number} zoom zoom level.
     * @returns 
     */
    public ll(px: number[], zoom: number): number[] {
        if (isFloat(zoom)) {
            var size = this.size * Math.pow(2, zoom);
            var bc = (size / 360);
            var cc = (size / (2 * Math.PI));
            var zc = size / 2;
            var g = (px[1] - zc) / -cc;
            var lon = (px[0] - zc) / bc;
            var lat = R2D * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
            return [lon, lat];
          } else {
            var g = (px[1] - this.zc[zoom]) / (-this.Cc[zoom]);
            var lon = (px[0] - this.zc[zoom]) / this.Bc[zoom];
            var lat = R2D * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
            return [lon, lat];
          }
        
    }

   /**
    * Convert tile xyz value to bbox of the form `[w, s, e, n]`
    * @param {Number} x 
    * @param {Number} y 
    * @param {Number} zoom zoom.
    * @param {Boolean} tms_style  to compute using tms-style.
    * @param {String} srs projection for resulting bbox (WGS84|900913).
    * @returns {Array} bbox array of values in form `[w, s, e, n]`. 
    */
    public bbox(x: number, y: number, zoom: number, tms_style?: boolean, srs?: string): number[] {
        // Convert xyz into bbox with srs WGS84
        if (tms_style) {
            y = (Math.pow(2, zoom) - 1) - y;
        }
        // Use +y to make sure it's a number to avoid inadvertent concatenation.
        var ll = [x * this.size, (+y + 1) * this.size]; // lower left
        // Use +x to make sure it's a number to avoid inadvertent concatenation.
        var ur = [(+x + 1) * this.size, y * this.size]; // upper right
        var bbox = this.ll(ll, zoom).concat(this.ll(ur, zoom));

        // If web mercator requested reproject to 900913.
        if (isEPSG3857(srs)) {
            return this.convert(bbox, '900913');
        } else {
            return bbox;
        }
    }

    /**
    * Convert bbox to xyz bounds
    * @param {Number} bbox in the form `[w, s, e, n]`.
    * @param {Number} zoom zoom.
    * @param {Boolean} tms_style whether to compute using tms-style.
    * @param {String} srs projection of input bbox (WGS84|900913).
    * @return {Object} XYZ bounds containing minX, maxX, minY, maxY properties.  
    */
    public xyz(bbox: number[], zoom: number, tms_style?: boolean, srs?: string): { minX: number; minY: number; maxX: number; maxY: number } {
        // If web mercator provided reproject to WGS84.
        if (isEPSG3857(srs)) {
            bbox = this.convert(bbox, 'WGS84'); // convert to wgs84 lonlat
        }

        var ll = [bbox[0], bbox[1]]; // lower left
        var ur = [bbox[2], bbox[3]]; // upper right
        var px_ll = this.px(ll, zoom);
        var px_ur = this.px(ur, zoom);
        // Y = 0 for XYZ is the top hence minY uses px_ur[1].
        var x = [ Math.floor(px_ll[0] / this.size), Math.floor((px_ur[0] - 1) / this.size) ];
        var y = [ Math.floor(px_ur[1] / this.size), Math.floor((px_ll[1] - 1) / this.size) ];
        var bounds = {
            minX: Math.min.apply(Math, x) < 0 ? 0 : Math.min.apply(Math, x),
            minY: Math.min.apply(Math, y) < 0 ? 0 : Math.min.apply(Math, y),
            maxX: Math.max.apply(Math, x),
            maxY: Math.max.apply(Math, y)
        };
        if (tms_style) {
            var tms = {
                minY: (Math.pow(2, zoom) - 1) - bounds.maxY,
                maxY: (Math.pow(2, zoom) - 1) - bounds.minY
            };
            bounds.minY = tms.minY;
            bounds.maxY = tms.maxY;
        }
        return bounds;
    }
    // Convert projection of given bbox.
    //
    // - `bbox` {Number} bbox in the form `[w, s, e, n]`.
    // - `to` {String} projection of output bbox (WGS84|900913). Input bbox
    //   assumed to be the "other" projection.
    // - `@return` {Object} bbox with reprojected coordinates.  
    public convert(bbox: number[], to: string, zoom?: number): number[] {
        if (isEPSG3857(to)) {
            return this.forward(bbox.slice(0, 2)).concat(this.forward(bbox.slice(2,4)));
        }else{
            return this.inverse(bbox.slice(0, 2)).concat(this.inverse(bbox.slice(2,4)));
        }
        // } else {
        //     if(!zoom) throw new Error('SphericalMercator: missing zoom level for conversion');
        //     // convert to px 
        //     var ll = this.px(bbox.slice(0, 2), zoom);
        //     var ur = this.px(bbox.slice(2, 4), zoom);
        //     // convert to to

        // }
    }

    public pxBbox(x: number, y: number, zoom: number): number[] {
        const bbox = this.bbox(x, y, zoom);
        let ll = this.px([bbox[0], bbox[1]], zoom);
        let ur = this.px([bbox[3], bbox[2]], zoom);
        return [ll[0], ll[1], ur[0], ur[1]];
    }

    /**
     * Convert lon/lat values to x/y.
     * - EPSG:4326(WGS84) -> EPSG:3857
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param {Array} ll `[lon, lat]` array of geographic coordinates.
     * @returns 
     */
    public forward(ll: number[]): number[] {
        var xy = [
            A * ll[0] * D2R,
            A * Math.log(Math.tan((Math.PI*0.25) + (0.5 * ll[1] * D2R)))
        ];
        // if xy value is beyond maxextent (e.g. poles), return maxextent.
        (xy[0] > MAXEXTENT) && (xy[0] = MAXEXTENT);
        (xy[0] < -MAXEXTENT) && (xy[0] = -MAXEXTENT);
        (xy[1] > MAXEXTENT) && (xy[1] = MAXEXTENT);
        (xy[1] < -MAXEXTENT) && (xy[1] = -MAXEXTENT);
        return xy;
    }

    /**
     * Convert x/y values to lon/lat.
     * - EPSG:3857 -> EPSG:4326(WGS84)
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param {Array} xy `[x, y]` array of geographic coordinates.
     * @returns 
     */
    public inverse(xy: number[]): number[] {
        return [
            (xy[0] * R2D / A),
            ((Math.PI*0.5) - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D
        ];
    }
}

/**
 * (lonlat -> xy)EPSG:4326(WGS84) -> EPSG:3857
 * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
 * @param {Array} ll `[lon, lat]` array of geographic coordinates.
 * @returns 
 */
export function forward(ll: number[]): number[] {
    var xy = [
        A * ll[0] * D2R,
        A * Math.log(Math.tan((Math.PI*0.25) + (0.5 * ll[1] * D2R)))
    ];
    // if xy value is beyond maxextent (e.g. poles), return maxextent.
    (xy[0] > MAXEXTENT) && (xy[0] = MAXEXTENT);
    (xy[0] < -MAXEXTENT) && (xy[0] = -MAXEXTENT);
    (xy[1] > MAXEXTENT) && (xy[1] = MAXEXTENT);
    (xy[1] < -MAXEXTENT) && (xy[1] = -MAXEXTENT);
    return xy;
}

/**
 * (xy -> lonlat)EPSG:3857 -> EPSG:4326(WGS84)
 * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
 * @param {Array} xy `[x, y]` array of geographic coordinates.
 * @returns 
 */
export function inverse(xy: number[]): number[] {
    return [
        (xy[0] * R2D / A),
        ((Math.PI*0.5) - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D
    ];
}