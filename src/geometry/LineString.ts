import { Geometry, GeometryCollection } from "./Geometry";
import { GeoJSONFeature, GeoJSONLineString, GeoJSONMultiLineString } from "./GeoJSON";
import { MultiPoint, Point } from ".";

export class LineString extends Geometry {

    constructor(coordinates: GeoJSONLineString["coordinates"], properties?: any) {
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

    toXY() : GeoJSONLineString["coordinates"] {
        // this.projection.project
        return (this.coordinates as GeoJSONLineString["coordinates"])
            .map(point => this.projection.project(point));
    }

    toMultiPoint(): MultiPoint{
        return new MultiPoint(this.coordinates);
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

    static fromFeature(feature: GeoJSONFeature): LineString {
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

export class MultiLineString extends GeometryCollection{
    coordinates: GeoJSONMultiLineString["coordinates"];

    constructor(geometries: LineString[] | GeoJSONMultiLineString["coordinates"], properties?: any){
        // 判断类型
        if(geometries[0] instanceof LineString){
            super(geometries as LineString[], properties);
            this.coordinates = (geometries as LineString[]).map(geometry => geometry.coordinates);
        }else{
            super((geometries as GeoJSONMultiLineString["coordinates"])
                    .map(coordinates => new LineString(coordinates)),
                    properties);
            this.coordinates = geometries as GeoJSONMultiLineString["coordinates"];
        }
    }

    getCoodinates(): GeoJSONMultiLineString["coordinates"]{
        return this.coordinates;
    }

    toMultiPoint(): MultiPoint{
        return new MultiPoint(this.coordinates.flat());
    }

    toXY() : GeoJSONMultiLineString["coordinates"] {
        return (this.geometries as LineString[])
            .map(lineString => lineString.toXY());
    }

    addGeometry(geometry: LineString | GeoJSONLineString["coordinates"]): void {
        if(geometry instanceof LineString){
            this.geometries.push(geometry);
            this.coordinates.push(geometry.coordinates);
            this.updateBBox(geometry);
        }else{
            this.geometries.push(new LineString(geometry));
            this.coordinates.push(geometry);
            this.updateBBox(this.geometries[this.geometries.length - 1]);
        }
    }

    toGeoJSON(): GeoJSONFeature{
        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: "MultiLineString",
                // 类型断言
                coordinates: this.geometries.map(geometry => (geometry as LineString).coordinates) as GeoJSONMultiLineString["coordinates"]
            },
        } as GeoJSONFeature;
        if (this.properties) {
            feature.properties = this.properties;
        };
        if (this.bbox) {
            feature.bbox = this.bbox;
        };
        return feature;
    }

    static fromFeature(feature: GeoJSONFeature): GeometryCollection{
        const { geometry, properties } = feature;
        if (geometry.type !== "MultiLineString") {
            throw new Error(`The input geometry is not a MultiLineString: ${geometry.type}`);
        }
        
        const multiLineStringGeometry = geometry as GeoJSONMultiLineString; // Type assertion
        return new MultiLineString(multiLineStringGeometry.coordinates, properties);
    }

    static fromGeometry(geometry: GeoJSONMultiLineString): GeometryCollection{
        return new MultiLineString(geometry.coordinates);
    }
}

export function toLineString(points: Point[]): LineString{
    return new LineString(points.map(point => point.coordinates));
}