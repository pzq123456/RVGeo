class PointProperties {
    constructor(public name: string) {}
}

class Point extends Geometry<PointProperties> {
    constructor(private coordinates: [number, number], properties: PointProperties) {
        super(properties);
    }

    toGeoJSON(): GeoJSONGeometry<PointProperties> {
        return {
            type: "Point",
            coordinates: this.coordinates,
            properties: this.properties
        };
    }

    fromGeoJSON(geoJSON: GeoJSONGeometry<PointProperties>): void {
        if (geoJSON.type !== "Point") {
            throw new Error("Invalid GeoJSON type for Point geometry");
        }
        this.coordinates = geoJSON.coordinates as [number, number];
        this.properties = geoJSON.properties;
    }
}

// 示例用法
const point = new Point([1, 2], new PointProperties("Point A"));
const pointGeoJSON = point.toGeoJSON();
console.log(pointGeoJSON);

const pointFromGeoJSON = new Point([0, 0], new PointProperties(""));
pointFromGeoJSON.fromGeoJSON({ type: "Point", coordinates: [7, 8], properties: { name: "Point B" } });
console.log(pointFromGeoJSON);
