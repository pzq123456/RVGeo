import { describe, it, expect} from 'vitest';
import { LineString, MultiLineString } from "../../src/geometry/";

describe('LineString', () => {
  it('should create a LineString', () => {
    const line = new LineString([[1, 2], [3, 4]]);
    expect(line.getCoordinates()).toEqual([[1, 2], [3, 4]]);
  });

  it('should create a LineString with properties', () => {
    const line = new LineString([[1, 2], [3, 4]], { name: 'test' });
    expect(line.getProperties()).toEqual({ name: 'test' });
  });

  it('should convert to GeoJSON', () => {
    const line = new LineString([[1, 2], [3, 4]], { name: 'test' });
    const geoJSON = line.toGeoJSON();
    expect(geoJSON).toEqual({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[1, 2], [3, 4]],
      },
      properties: { name: 'test' },
      bbox: [ 1, 2, 3, 4 ]
    });
  });

  it('should convert from GeoJSON', () => {
    const line = LineString.fromGeoJSON({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[1, 2], [3, 4]],
      },
      properties: { name: 'test' },
    });
    expect(line.getCoordinates()).toEqual([[1, 2], [3, 4]]);
    expect(line.getProperties()).toEqual({ name: 'test' });
  });

  // test toXY
  it('should return x and y coordinates', () => {
    const line = new LineString([[0, 0], [1, 1]]);
    console.log(line.toXY());
  });

  // test multiLineString toXY
  it('multiLineString should return x and y coordinates ', () => {
    const multiLine = new MultiLineString([[[0, 0], [1, 1]], [[2, 2], [3, 3]]]);
    console.log(multiLine.toXY());
  });
});