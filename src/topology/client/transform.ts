import { identity } from "./utils";

export interface Transform {
    scale: [number, number];
    translate: [number, number];
}

export function transform(transform ?: Transform) : (input : number[], i? : number) => [number, number] {
  if (!transform) return identity;
  let x0 : number,
      y0 : number,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];

  return function(input, i) : [number, number] {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n) as [number, number];
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
}

export function untransform(transform ?: Transform | null) : (input : number[], i? : number) => [number, number] {
  if (!transform) return identity;
  var x0: number,
      y0: number,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];

  return function(input, i) : [number, number] {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n) as [number, number],
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
}
