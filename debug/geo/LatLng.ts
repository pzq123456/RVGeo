import * as Util from '../core/Util.js';
import {Earth} from './crs/CRS.Earth';
import {toLatLngBounds, LatLngBounds} from './LatLngBounds';

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lat: 50, lng: 30});
 * map.panTo({lat: 50, lon: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
*/
export class LatLng{

	lat: number;
	lng: number;
	alt?: number;

	constructor(lat: number, lng: number, alt?: number) {
		if (isNaN(lat) || isNaN(lng)) {
			throw new Error(`Invalid LatLng object: (${lat}, ${lng})`);
		}

		// @property lat: Number
		// Latitude in degrees
		// 纬度
		this.lat = +lat;

		// @property lng: Number
		// Longitude in degrees
		// 经度
		this.lng = +lng;

		// @property alt: Number
		// Altitude in meters (optional)
		if (alt !== undefined) {
			this.alt = +alt;
		}
	}

	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
	equals(obj: LatLng, maxMargin?: number): boolean {
		if (!obj) { return false; }

		// obj = toLatLng(obj);
		// 若 obj 不是 LatLng 对象，则返回 false
		if (obj instanceof LatLng) {
			obj = obj;
		}else {
			return false;
		}

		const margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	}

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString(precision?: number): string {
		return `LatLng(${Util.formatNum(this.lat, precision)}, ${Util.formatNum(this.lng, precision)})`;
	}

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
	distanceTo(other: LatLng): number {
		return Earth.distance(this, toLatLng(other));
	}

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap() {
		return Earth.wrapLatLng(this);
	}

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds(sizeInMeters: number): LatLngBounds {
		const latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        toLatLng([this.lat - latAccuracy, this.lng - lngAccuracy]),
		        toLatLng([this.lat + latAccuracy, this.lng + lngAccuracy]));
	}

	clone() {
		return new LatLng(this.lat, this.lng, this.alt);
	}
}


// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
//  You can also use `lon` in place of `lng` in the object form.


/**
 * @function toLatLng - 将输入转换为`LatLng`对象。
 * @param {LatLng|Array<number>|Object} a - 输入值。
 * @param {number} b
 * @param {number} c
 * @returns {LatLng} 返回一个`LatLng`对象。
 * 
 * @example
 * ```js
 * var latlng = toLatLng(50.5, 30.5);
 * var latlng = toLatLng([50.5, 30.5]);
 * var latlng = toLatLng({lat: 50.5, lng: 30.5});
 * var latlng = toLatLng({lat: 50.5, lon: 30.5});
 * var latlng = toLatLng({lat: 50.5, lng: 30.5, alt: 100});
 * ```
 */
export function toLatLng(a: 
	LatLng | [number, number] | [number, number, number] | number 
	|{lat: number, lng: number} | {lat: number, lon: number} | {lat: number, lng: number, alt: number}
	, b?: number, c?: number): LatLng 
{
	// default return value

	if (a === undefined || a === null || a instanceof LatLng) {
		return a;
	}

	if (Array.isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
	}else if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, 'alt' in a ? a.alt : undefined);
	}
	if (b === undefined) {
		throw new Error('Invalid LatLng object: ' + a);
	}
	// 若 a 既不是数组 也不是对象，且 b 不是 undefined，则 a 是一个数字，b 是一个数字
	if (!Array.isArray(a)) {
		return new LatLng(a, b, c);
	}
	throw new Error('Invalid LatLng object: ' + a);
}