import { describe, it, expect} from 'vitest';
import { Point, toPoint, MultiPoint } from '../../src/geometry/';
  
describe('Point', () => {
  it('should create a point', () => {
    const point = new Point([1, 2]);
    expect(point.getCoordinates()).toEqual([1, 2]);
  });

  // test toXY
  it('should return x and y coordinates', () => {
    const point = new Point([0, 0]);
    const [x, y] = point.toXY();
    expect(x).toBe(0);
    expect(y).toBe(0);
  });

  it('should create a point with properties', () => {
    const point = new Point([1, 2], { name: 'test' });
    expect(point.getProperties()).toEqual({ name: 'test' });
  });

  it('should convert to GeoJSON', () => {
    const point = new Point([1, 2], { name: 'test' });
    const geoJSON = point.toGeoJSON();
    // console.log(geoJSON);
    expect(geoJSON).toEqual({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 2],
      },
      properties: { name: 'test' },
      bbox: [ 1, 2, 1, 2 ]
    });
  });

  it('should convert from GeoJSON', () => {
    const point = Point.fromGeoJSON({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 2],
      },
      properties: { name: 'test' },
    });
    expect(point.getCoordinates()).toEqual([1, 2]);
    expect(point.getProperties()).toEqual({ name: 'test' });
  });

  it('should create a point using factory function', () => {
    const point = toPoint(1, 2);
    expect(point.getCoordinates()).toEqual([1, 2]);
  });

  it('should create a point using factory function with properties', () => {
    const point = toPoint(1, 2, { name: 'test' });
    expect(point.getProperties()).toEqual({ name: 'test' });
  });

  it('should create a point using factory function with object', () => {
    const point = toPoint({ lon: 1, lat: 2 });
    expect(point.getCoordinates()).toEqual([1, 2]);
  });

  it('should create a point using factory function with object and properties', () => {
    const point = toPoint({ lon: 1, lat: 2 }, { name: 'test' });
    expect(point.getProperties()).toEqual({ name: 'test' });
  });
  it('should create a Point from individual longitude and latitude numbers', () => {
    const point = toPoint(100, 20);
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([100, 20]);
  });

  it('should create a Point from an array of coordinates', () => {
    const point = toPoint([50, 30]);
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([50, 30]);
  });

  it('should create a Point from an array of coordinates with optional properties', () => {
    const point = toPoint([50, 30], { name: 'My Point' });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([50, 30]);
    expect(point.getProperties()).toEqual({ name: 'My Point' });
  });

  it('should create a Point from an object with lon and lat properties and optional properties', () => {
    const point = toPoint({ lon: 80, lat: 40 }, { name: 'My Point' });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([80, 40]);
    expect(point.getProperties()).toEqual({ name: 'My Point' });
  });

  it('should create a Point from an object with x and y properties and optional properties', () => {
    const point = toPoint({ x: 70, y: 50 }, { name: 'My Point' });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([70, 50]);
    expect(point.getProperties()).toEqual({ name: 'My Point' });
  });

  it('should create a Point from an object with lng and lat properties', () => {
    const point = toPoint({ lng: 90, lat: 60 });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([90, 60]);
  });

  it('should create a Point with optional properties', () => {
    const point = toPoint(50, 30, { name: 'My Point' });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([50, 30]);
    expect(point.getProperties()).toEqual({ name: 'My Point' });
  });

  it('should throw an error for invalid input', () => {
    // @ts-ignore
    expect(() => toPoint(10)).toThrow('Invalid input');
    // @ts-ignore
    expect(() => toPoint([10])).toThrow('Invalid input');
    // @ts-ignore
    expect(() => toPoint({ foo: 'bar' })).toThrow('Invalid input');
  });

  // test point clone method
  it('should clone a point', () => {
    const point = toPoint(100, 20, { name: 'My Point' });
    const clone = point.clone();
    expect(clone).toBeInstanceOf(Point);
    expect(clone.getCoordinates()).toEqual([100, 20]);
    expect(clone.getProperties()).toEqual({ name: 'My Point' });
  });

  // test point equals method
  it('should return true for equal points', () => {
    const point1 = toPoint(100, 20, { name: 'My Point' });
    const point2 = toPoint(100, 20, { name: 'My Point' });
    // 记录运行时间
    console.time('equals');
    const result = point1.equals(point2);
    console.timeEnd('equals');
    expect(result).toBe(true);
  });

  // MultiPoint
  it('should create a MultiPoint', () => {
    const multiPoint = new MultiPoint([[1, 2], [3, 4], [5, 6], [3, 3]]);
    // console.log(multiPoint.toGeoJSON());
    // console.log(multiPoint.toXY());
    console.log(multiPoint.centroid());
  });
});