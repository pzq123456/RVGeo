import { Geometry } from "./Geometry";
import { GeoJSONFeature, defaultProperties, GeoJSONLineString } from "./GeoJSON";

export class LineString extends Geometry<defaultProperties> {
    constructor(coordinates: GeoJSONLineString["coordinates"], properties?: defaultProperties) {
        super(coordinates, properties);
    }

    updateBBox(): void {
        let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
        for (const [x, y] of this.coordinates) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
        this.bbox = [minX, minY, maxX, maxY];
    }

     /**
     * 按照逆时针方向排序点
     */
    // sortPoints(){
    //     let centroid = this.calculateCentroid();
    //     let centroidXY = centroid.toXY();
    //     this.coordinates.sort((a, b) => {
    //         let angleA = getAngle(centroidXY, a.toXY());
    //         let angleB = getAngle(centroidXY, b.toXY());
    //         if(angleA < angleB){
    //             return -1;
    //         }else if(angleA > angleB){
    //             return 1;
    //         }else{
    //             return 0;
    //         }
    //     });
    // }

    static fromGeometry(geometry: GeoJSONLineString): LineString {
        return new LineString(geometry.coordinates);
    }

    static fromFeature(feature: GeoJSONFeature<any>): LineString {
        const { geometry, properties } = feature;
        if (geometry.type !== "LineString") {
            throw new Error(`The input geometry is not a LineString: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONLineString; // Type assertion
        return new LineString(pointGeometry.coordinates, properties);
    }

    static isLineString(lineString: any): lineString is LineString{
        return lineString.type === "LineString";
    }
}