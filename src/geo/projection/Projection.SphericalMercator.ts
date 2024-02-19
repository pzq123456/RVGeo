import {LatLng} from '../LatLng';
import {toBounds as bounds} from '../../geometry/Bounds';
import {Point} from '../../geometry/Point';

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

const earthRadius = 6378137; // in meters

export const SphericalMercator = {

	R: earthRadius,
	MAX_LATITUDE: 85.0511287798, 
	/**
	 * 将经纬度坐标转换为平面坐标。
	 * @param {LatLng} latlng - 经纬度坐标
	 * @returns {Point} - 平面坐标
	 */
	project(latlng: LatLng) : Point {
		const d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	/**
	 * 将平面坐标转换为经纬度坐标。
	 * @param {Point} point - 平面坐标
	 * @returns {LatLng} - 经纬度坐标
	 */
	unproject(point: Point) : LatLng {
		const d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		// 这个是一个球体的边界
		const d = earthRadius * Math.PI;
		return bounds([[-d, -d], [d, d]]);
	})()
};
