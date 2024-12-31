import { describe, it, expect} from 'vitest';
import { Polygon, MultiPolygon } from '../../src/geometry/';
  
describe('Point', () => {
    it('should create a polygon', () => {
        const polygon = new Polygon([[[1, 2], [3, 4], [5, 6], [1, 2]]]);
        expect(polygon.coordinates).toEqual([[[1, 2], [3, 4], [5, 6], [1, 2]]]);
    });
    
    it('should create a polygon with properties', () => {
        const polygon = new Polygon([[[1, 2], [3, 4], [5, 6], [1, 2]]], { name: 'test' });
        expect(polygon.properties()).toEqual({ name: 'test' });
    });
    
    it('should convert to GeoJSON', () => {
        const polygon = new Polygon([[[1, 2], [3, 4], [5, 6], [1, 2]]], { name: 'test' });
        const geoJSON = polygon.toGeoJSON();
        // console.log(geoJSON);
        expect(geoJSON).toEqual({
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [[[1, 2], [3, 4], [5, 6], [1, 2]]],
        },
        properties: { name: 'test' },
        bbox: [ 1, 2, 5, 6 ]
        });
    });
    
    it('should convert from GeoJSON', () => {
        const polygon = Polygon.fromGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [[[1, 2], [3, 4], [5, 6], [1, 2]]],
        },
        properties: { name: 'test' },
        });
        expect(polygon.coordinates).toEqual([[[1, 2], [3, 4], [5, 6], [1, 2]]]);
        expect(polygon.properties).toEqual({ name: 'test' });
    });
    
    it('should create a polygon using factory function', () => {
        // @ts-ignore
        const polygon = Polygon.fromGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [[[1, 2], [3, 4], [5, 6], [1, 2]]],
        }
        });
        expect(polygon.coordinates).toEqual([[[1, 2], [3, 4], [5, 6], [1, 2]]]);
    });
});