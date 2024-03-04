import {sphericalArea} from '../../';
import { Projection } from "../projection";
export interface CRS {
    projection: Projection | null;
    distance: (latlng1: [number, number], latlng2: [number, number]) => number;
    area?: (latlngs: [number, number][]) => number;
    code?: string;
    R: number;
    wrapLng?: [number, number];
    wrapLat?: [number, number];
}

export const Earth: CRS = {
    // Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see https://rosettacode.org/wiki/Haversine_formula
    R : 6371000,
    projection: null,
    /**
     * distance between two geographical points using spherical law of cosines approximation(haversine 公式)
     * @param latlng1 
     * @param latlng2 
     * @returns 
     */
    distance(latlng1: [number, number], latlng2: [number, number]): number {
        let rad = Math.PI / 180,
            lat1 = latlng1[0] * rad,
            lat2 = latlng2[0] * rad,
            sinDLat = Math.sin((latlng2[0] - latlng1[0]) * rad / 2),
            sinDLon = Math.sin((latlng2[1] - latlng1[1]) * rad / 2),
            a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * c;
    },

    area(points: [number, number][]) : number {
        return sphericalArea(points, this.R);
    }
}

