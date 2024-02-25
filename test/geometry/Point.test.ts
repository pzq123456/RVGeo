import { describe, it, expect, vi } from 'vitest';
import { Point, toPoint } from '../../src/geometry/Point';

describe('Point', () => {
  it('should create a point', () => {
    const point = new Point([1, 2]);
    // console.log(point.getCoordinates());
    expect(point.getCoordinates()).toEqual([1, 2]);
  });

  it('should create a point with properties', () => {
    const point = new Point([1, 2], { name: 'test' });
    expect(point.getProperties()).toEqual({ name: 'test' });
  });

  it('should convert to GeoJSON', () => {
    const point = new Point([1, 2], { name: 'test' });
    const geoJSON = point.toGeoJSON();
    expect(geoJSON).toEqual({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 2],
      },
      properties: { name: 'test' },
    });
  });

  it('should convert from GeoJSON', () => {
    const point = new Point([1, 2]);
    const geoJSON = {
      type: 'Point',
      coordinates: [3, 4],
    };
    point.fromGeoJSON(geoJSON);
    expect(point.getCoordinates()).toEqual([3, 4]);
  });

  it('should create a point using factory function', () => {
    const point = toPoint(1, 2);
    console.log(point.getCoordinates());
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

  it('should create a Point from an object with lon and lat properties', () => {
    const point = toPoint({ lon: 80, lat: 40 });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([80, 40]);
  });

  it('should create a Point from an object with x and y properties', () => {
    const point = toPoint({ x: 70, y: 50 });
    expect(point).toBeInstanceOf(Point);
    expect(point.getCoordinates()).toEqual([70, 50]);
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
    expect(() => toPoint(10)).toThrow('Invalid input');
    expect(() => toPoint([10])).toThrow('Invalid input');
    expect(() => toPoint({ foo: 'bar' })).toThrow('Invalid input');
  });
});