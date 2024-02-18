import {LatLng, toLatLng} from './LatLng';



export class LatLngBounds {
	_southWest!: LatLng;
	_northEast!: LatLng;

	// @class LatLngBounds
	/**
	* @class LatLngBounds
	* Represents a rectangular geographical area on a map.
	*
	* @example
	*
	* ```js
	* var corner1 = L.latLng(40.712, -74.227),
	* corner2 = L.latLng(40.774, -74.125),
	* bounds = L.latLngBounds(corner1, corner2);
	* ```
	*
	* All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
	*
	* ```js
	* map.fitBounds([
	* 	[40.712, -74.227],
	* 	[40.774, -74.125]
	* ]);
	* ```
	*
	* - Caution: if the area crosses the antimeridian (often confused with the International Date Line), 
	* - you must specify corners _outside_ the [-180, 180] degrees longitude range.
	*/
	constructor(corner1: LatLng | LatLng[], corner2?: LatLng ) {
		if (!corner1) { return; }
		let latlngs : LatLng[];
		if (corner2) { // 如果用户已经指定了两个点则直接使用（对于跨越日期变更线的情况，需要用户自己指定）
			this._southWest = toLatLng(corner1 as LatLng);
			this._northEast = toLatLng(corner2);
		}else {
			latlngs = corner1 as LatLng[];
			const swne = this.findSwNe(latlngs);
			this._southWest = swne[0];
			this._northEast = swne[1];
		}
	}

	findSwNe(latlngs: LatLng[]) {
		if (latlngs.length === 0) {
			return [new LatLng(0, 0), new LatLng(0, 0)];
		}else{
			let minLat = latlngs[0].lat;
			let minLng = latlngs[0].lng;
			let maxLat = latlngs[0].lat;
			let maxLng = latlngs[0].lng;
			for (let i = 1; i < latlngs.length; i++) {
				minLat = Math.min(minLat, latlngs[i].lat);
				minLng = Math.min(minLng, latlngs[i].lng);
				maxLat = Math.max(maxLat, latlngs[i].lat);
				maxLng = Math.max(maxLng, latlngs[i].lng);
			}
			return [new LatLng(minLat, minLng), new LatLng(maxLat, maxLng)];
		}
	}


		// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend(obj: LatLng | LatLngBounds): this { // (LatLng) or (LatLngBounds) -> this
		if (obj instanceof LatLng) {
			const latlng = obj;
			this._southWest.lat = Math.min(latlng.lat, this._southWest.lat);
			this._northEast.lat = Math.max(latlng.lat, this._northEast.lat);
			this._southWest.lng = Math.min(latlng.lng, this._southWest.lng);
			this._northEast.lng = Math.max(latlng.lng, this._northEast.lng);
		}else if (obj instanceof LatLngBounds) {
			const bounds = obj;
			this._southWest.lat = Math.min(bounds._southWest.lat, this._southWest.lat);
			this._northEast.lat = Math.max(bounds._northEast.lat, this._northEast.lat);
			this._southWest.lng = Math.min(bounds._southWest.lng, this._southWest.lng);
			this._northEast.lng = Math.max(bounds._northEast.lng, this._northEast.lng);
		}
		return this;
	}

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
	// Negative values will retract the bounds.
	pad(bufferRatio: number): LatLngBounds {
		const sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	}

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter() {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	}

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest() {
		return this._southWest;
	}

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast() {
		return this._northEast;
	}

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest() {
		return new LatLng(this.getNorth(), this.getWest());
	}

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast() {
		return new LatLng(this.getSouth(), this.getEast());
	}

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest() {
		return this._southWest.lng;
	}

		// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth() {
		return this._southWest.lat;
	}

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast() {
		return this._northEast.lng;
	}

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth() {
		return this._northEast.lat;
	}

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains(obj : LatLng | [number, number] | LatLngBounds ) : boolean {
		const sw = this._southWest,
		      ne = this._northEast;
		let sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = toLatLng(obj);
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	}

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects(bounds : LatLngBounds) : boolean {
		bounds = toLatLngBounds(bounds);

		const sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	}

	// @method overlaps(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps(bounds : LatLngBounds) : boolean {
		bounds = toLatLngBounds(bounds);

		const sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	}

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString() {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	}

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
	equals(bounds: LatLngBounds, maxMargin?: number) : boolean {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	}

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid() {
		return !!(this._southWest && this._northEast);
	}
}


  

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
export function toLatLngBounds(a: LatLng | LatLng[] | LatLngBounds | [LatLng, LatLng], b?: LatLng): LatLngBounds {
	if(!a){
		return a;
	}
	if (a instanceof LatLngBounds) {
		return a;
	}
	if (Array.isArray(a)) {
		return new LatLngBounds(a as LatLng[]);
	}
	if (a instanceof LatLng && b instanceof LatLng) {
		return new LatLngBounds(a, b);
	}
	return new LatLngBounds(a);
}
