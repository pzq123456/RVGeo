import { MBR } from "../../geometry/MBR";

export interface Projection {
    project(latlng: [number, number]): [number, number];
    unproject(point: [number, number]): [number, number];
    bounds: MBR;
    name?: string;
}
