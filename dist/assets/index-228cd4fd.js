var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const myConsoleDiv = document.getElementById("console-output");
const consoleTypes = ["log", "warn", "error", "info", "debug"];
consoleTypes.forEach((type) => {
  const oldConsole = console[type];
  console[type] = function(...args) {
    args.forEach((arg) => {
      if (typeof arg === "object") {
        renderObject(arg, myConsoleDiv);
      } else {
        const div = document.createElement("div");
        div.style.cssText = logStyles[type];
        div.style.borderBottom = `1px dashed ${logStyles[type].split(":")[1]}`;
        div.textContent = arg;
        myConsoleDiv.appendChild(div);
      }
    });
    oldConsole.apply(console, args);
  };
});
window.onerror = function(message, source, lineno, colno, error) {
  console.error(message, source, lineno, colno, error);
  return true;
};
const logStyles = {
  log: "color: #fff",
  warn: "color: #ff0",
  error: "color: #f00",
  info: "color: #0f0",
  debug: "color: #1ff"
};
function renderObject(obj, parent) {
  if (Array.isArray(obj)) {
    renderArray(obj, parent);
    return;
  }
  let button = document.createElement("button");
  button.textContent = "+";
  button.onclick = function() {
    ul.style.display = ul.style.display === "none" ? "block" : "none";
    button.textContent = ul.style.display === "none" ? "+" : "-";
  };
  parent.appendChild(button);
  let span = document.createElement("span");
  span.textContent = "{";
  span.style.cssText = "color: orange";
  parent.appendChild(span);
  let ul = document.createElement("ul");
  ul.style.cssText = "background-color: #3da1ac69";
  ul.style.display = "none";
  ul.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
  parent.appendChild(ul);
  for (let key in obj) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let span3 = document.createElement("span");
    span3.style.cssText = "color: orange";
    span3.textContent = key;
    span3.textContent += ": ";
    li.appendChild(span3);
    if (typeof obj[key] === "object") {
      renderObject(obj[key], li);
    } else if (typeof obj[key] === "function" || typeof obj[key] === "symbol") {
      let pre = document.createElement("pre");
      let code = document.createElement("code");
      code.textContent = obj[key];
      code.className = "language-js";
      pre.appendChild(code);
      li.appendChild(pre);
    } else {
      let span4 = document.createElement("span");
      span4.style.cssText = "color: #fff";
      span4.textContent = obj[key];
      li.appendChild(span4);
    }
  }
  let span2 = document.createElement("span");
  span2.textContent = "}";
  span2.style.cssText = "color: orange";
  parent.appendChild(span2);
}
function renderArray(arr, parent) {
  let button = document.createElement("button");
  button.textContent = "+";
  button.onclick = function() {
    ul.style.display = ul.style.display === "none" ? "block" : "none";
    button.textContent = ul.style.display === "none" ? "+" : "-";
  };
  parent.appendChild(button);
  let ul = document.createElement("ul");
  ul.style.display = "none";
  ul.style.borderBottom = "1px solid rgba(255, 255, 255, 0.8)";
  parent.appendChild(ul);
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let span = document.createElement("span");
    span.style.cssText = "color: orange";
    span.textContent = i;
    span.textContent += ": ";
    li.appendChild(span);
    if (typeof arr[i] === "object") {
      renderObject(arr[i], li);
    } else {
      let span2 = document.createElement("span");
      span2.style.cssText = "color: #fff";
      span2.textContent = arr[i];
      li.appendChild(span2);
    }
  }
}
require.config({
  paths: { "vs": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.27.0/min/vs" }
});
function createEditor() {
  return new Promise((resolve, reject) => {
    require(["vs/editor/editor.main"], function() {
      const runButton = document.getElementById("run");
      const clearButton = document.getElementById("clear");
      const jsCode = document.getElementById("js-code");
      const jsEditor = monaco.editor.create(jsCode, {
        value: `console.log('Hello, world!');`,
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 19
      });
      runButton.addEventListener("click", function() {
        const jsContent = jsEditor.getValue();
        try {
          const executeCode = new Function(jsContent);
          executeCode();
        } catch (error) {
          console.error("Error executing code:", error);
        }
      });
      clearButton.addEventListener("click", function() {
        jsEditor.setValue("");
      });
      resolve(jsEditor);
    });
  });
}
const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;
const earthRadius = 63710088e-1;
const factors = {
  centimeters: earthRadius * 100,
  centimetres: earthRadius * 100,
  degrees: 360 / (2 * Math.PI),
  feet: earthRadius * 3.28084,
  inches: earthRadius * 39.37,
  kilometers: earthRadius / 1e3,
  kilometres: earthRadius / 1e3,
  meters: earthRadius,
  metres: earthRadius,
  miles: earthRadius / 1609.344,
  millimeters: earthRadius * 1e3,
  millimetres: earthRadius * 1e3,
  nauticalmiles: earthRadius / 1852,
  radians: 1,
  yards: earthRadius * 1.0936
};
const factors2 = {
  centimeters: 1 * 100,
  centimetres: 1 * 100,
  degrees: 360 / (2 * Math.PI) * 1 / earthRadius,
  feet: 1 * 3.28084,
  inches: 1 * 39.37,
  kilometers: 1 / 1e3,
  kilometres: 1 / 1e3,
  meters: 1,
  metres: 1,
  miles: 1 / 1609.344,
  millimeters: 1 * 1e3,
  millimetres: 1 * 1e3,
  nauticalmiles: 1 / 1852,
  radians: 1 / earthRadius,
  yards: 1 * 1.0936
};
const areaFactors = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  squaremeters: 1,
  squaremetres: 1,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  squarekilometers: 1e-6,
  squarekilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  nauticalmiles: 29155334959812285e-23,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function radiansToLength(radians, units = "kilometers") {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return radians * factor;
}
function lengthToRadians(distance, units = "kilometers") {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance / factor;
}
function degreesToRadians(degrees) {
  const radians = degrees % 360;
  return radians * Math.PI / 180;
}
function radiansToDegrees(radians) {
  const degrees = radians % (2 * Math.PI);
  return degrees * 180 / Math.PI;
}
function toMeters(distance, units) {
  const factor = factors2[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance / factor;
}
function metersTo(distance, units) {
  const factor = factors2[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance * factor;
}
function unitToUnit(distance, from, to) {
  return metersTo(toMeters(distance, from), to);
}
function toSquareMeters(area, units) {
  const factor = areaFactors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return area / factor;
}
function squareMetersTo(area, units) {
  const factor = areaFactors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return area * factor;
}
function areaToArea(area, from, to) {
  return squareMetersTo(toSquareMeters(area, from), to);
}
function dmsToDeg(d, m, s, direction) {
  let deg = d + m / 60 + s / 3600;
  if (direction === "S" || direction === "W") {
    deg = -deg;
  }
  return deg;
}
function degToDMS(deg) {
  let d = Math.floor(deg);
  let min = Math.floor((deg - d) * 60);
  let sec = ((deg - d) * 60 - min) * 60;
  return [d, min, sec, deg < 0 ? deg < -180 ? "W" : "S" : deg > 180 ? "E" : "N"];
}
const pi = Math.PI;
const halfPi = pi / 2;
const atan2 = Math.atan2;
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const EPSLN = 1e-10;
function equals(a, b, tolerance = EPSLN) {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return Math.abs(a - b) < tolerance;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v2, i) => Math.abs(v2 - b[i]) < tolerance);
  }
  return false;
}
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
  return (x = sin(x / 2)) * x;
}
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2, toRadians = true) {
  if (toRadians) {
    spherical2 = [degreesToRadians(spherical2[0]), degreesToRadians(spherical2[1])];
  }
  const lon = spherical2[0];
  const lat = spherical2[1];
  const cosLat = cos(lat);
  return [cosLat * cos(lon), cosLat * sin(lon), sin(lat)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}
function cartesianNormalize(d) {
  const magnitude = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  return [d[0] / magnitude, d[1] / magnitude, d[2] / magnitude];
}
function cartesianAngle(a, b) {
  let tmp = cartesianDot(a, b) / sqrt(cartesianDot(a, a) * cartesianDot(b, b));
  return acos(tmp);
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}
function add$1(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}
function scale$1(vector, k) {
  return [vector[0] * k, vector[1] * k];
}
function normalize(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1]);
  return [d[0] / l, d[1] / l];
}
function interpolate$1(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t
  ];
}
function interpolate2(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t
  ];
}
function formatNum(num, precision) {
  if (typeof precision === "number" || precision === void 0) {
    const pow = Math.pow(10, precision === void 0 ? 6 : precision);
    return Math.round(num * pow) / pow;
  }
  return num;
}
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
function sphericalArea(points, RADIUS = 1) {
  let coordinates = points.slice();
  if (coordinates.length < 3) {
    return 0;
  }
  let area = 0;
  let len = coordinates.length;
  coordinates.forEach((point, index) => {
    coordinates[index] = point.map((value) => value * D2R);
  });
  for (let i = 0; i < len; i++) {
    let j = (i + 1) % len;
    let k = (i + 2) % len;
    area += (coordinates[i][0] - coordinates[k][0]) * Math.sin(coordinates[j][1]);
  }
  area *= RADIUS * RADIUS / 2;
  return Math.abs(area);
}
function planePolygonArea(points, radius = 1) {
  let coordinates = LineString.isLineString(points) ? points.toXY() : points;
  if (coordinates.length < 3) {
    return 0;
  }
  if (Point.isPoint(coordinates[0])) {
    coordinates = coordinates;
    coordinates.map((item, index) => {
      coordinates[index] = item.toXY();
    });
  }
  coordinates = coordinates;
  let area = 0;
  let j = coordinates.length - 1;
  for (let i = 0; i < coordinates.length; i++) {
    area += (coordinates[j][0] + coordinates[i][0]) * (coordinates[j][1] - coordinates[i][1]);
    j = i;
  }
  area = area * radius * radius / 2;
  return Math.abs(area);
}
function haversine(latlng1, latlng2, R = 1) {
  let rad = Math.PI / 180, lat1 = latlng1[0] * rad, lat2 = latlng2[0] * rad, sinDLat = Math.sin((latlng2[0] - latlng1[0]) * rad / 2), sinDLon = Math.sin((latlng2[1] - latlng1[1]) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function bearing(latlng1, latlng2) {
  let lat1 = latlng1[0] * D2R, lat2 = latlng2[0] * D2R, lon1 = latlng1[1] * D2R, lon2 = latlng2[1] * D2R;
  const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
  const θ = Math.atan2(y, x);
  return (θ * 180 / Math.PI + 360) % 360;
}
function midpoint(latlng1, latlng2) {
  let lat1 = latlng1[0] * D2R, lon1 = latlng1[1] * D2R, lat2 = latlng2[0] * D2R, lon2 = latlng2[1] * D2R;
  const Bx = Math.cos(lat2) * Math.cos(lon2 - lon1);
  const By = Math.cos(lat2) * Math.sin(lon2 - lon1);
  const lat3 = Math.atan2(
    Math.sin(lat1) + Math.sin(lat2),
    Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By)
  );
  const lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);
  return [lat3 / D2R, lon3 / D2R];
}
function intermediatePoint(latlng1, latlng2, fraction) {
  let lat1 = latlng1[0] * D2R, lon1 = latlng1[1] * D2R, lat2 = latlng2[0] * D2R, lon2 = latlng2[1] * D2R, δ = haversine(latlng1, latlng2);
  const a = Math.sin((1 - fraction) * δ) / Math.sin(δ);
  const b = Math.sin(fraction * δ) / Math.sin(δ);
  const x = a * Math.cos(lat1) * Math.cos(lon1) + b * Math.cos(lat2) * Math.cos(lon2);
  const y = a * Math.cos(lat1) * Math.sin(lon1) + b * Math.cos(lat2) * Math.sin(lon2);
  const z = a * Math.sin(lat1) + b * Math.sin(lat2);
  const φ = Math.atan2(z, Math.sqrt(x * x + y * y));
  const λ = Math.atan2(y, x);
  return [φ / D2R, λ / D2R];
}
function sphereIntersection(latlng11, latlng12, latlng21, latlng22) {
  const p11 = cartesian(latlng11);
  const p12 = cartesian(latlng12);
  const p21 = cartesian(latlng21);
  const p22 = cartesian(latlng22);
  const n1 = cartesianCross(p11, p12);
  const n2 = cartesianCross(p21, p22);
  const l = cartesianCross(n1, n2);
  const I1 = cartesianNormalize(l);
  const I2 = cartesianScale(I1, -1);
  if (check(I2, p11, p12)) {
    return spherical(I2);
  }
  if (check(I2, p21, p22)) {
    return spherical(I2);
  }
  if (check(I1, p11, p12)) {
    return spherical(I1);
  }
  if (check(I1, p21, p22)) {
    return spherical(I1);
  }
  return [0, 0];
  function check(I, Ps, Pe) {
    const a1 = cartesianAngle(Ps, I);
    const a2 = cartesianAngle(Pe, I);
    const a3 = cartesianAngle(Ps, Pe);
    return Math.abs(a1 + a2 - a3) < 1e-6;
  }
}
function destination(latlng1, brng, distance) {
  let lat1 = latlng1[0] * D2R, lon1 = latlng1[1] * D2R, θ = brng * D2R, R = 6378137;
  const φ2 = Math.asin(Math.sin(lat1) * Math.cos(distance / R) + Math.cos(lat1) * Math.sin(distance / R) * Math.cos(θ));
  const λ2 = lon1 + Math.atan2(
    Math.sin(θ) * Math.sin(distance / R) * Math.cos(lat1),
    Math.cos(distance / R) - Math.sin(lat1) * Math.sin(φ2)
  );
  return [φ2 / D2R, λ2 / D2R];
}
function planeIntersection(p1, p2, p3, p4, projectionFrom, projectionTo, isInfine = false) {
  if (projectionFrom) {
    p1 = projectionFrom(p1);
    p2 = projectionFrom(p2);
    p3 = projectionFrom(p3);
    p4 = projectionFrom(p4);
  }
  let v1 = [p2[0] - p1[0], p2[1] - p1[1]];
  let v2 = [p4[0] - p3[0], p4[1] - p3[1]];
  let det = cross(v1, v2);
  if (det === 0) {
    console.log("两条线段平行或共线");
    return null;
  }
  let t1 = cross([p3[0] - p1[0], p3[1] - p1[1]], v2) / det;
  let t2 = cross([p3[0] - p1[0], p3[1] - p1[1]], v1) / det;
  if (!isInfine) {
    if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
      console.log("交点不在两条线段上");
      return null;
    }
  }
  if (projectionTo) {
    return projectionTo([p1[0] + v1[0] * t1, p1[1] + v1[1] * t1]);
  }
  return [p1[0] + v1[0] * t1, p1[1] + v1[1] * t1];
}
function sample(f, N, a, b, freq = 1, amp = 1) {
  let X = new Array(N);
  let delta2 = (b - a) / N;
  for (let i = 0; i < N; i++) {
    X[i] = f(2 * Math.PI * freq * (a + i * delta2)) * amp;
  }
  return X;
}
function multiply(a, b) {
  return {
    "real": a.real * b.real - a.imag * b.imag,
    "imag": a.real * b.imag + a.imag * b.real
  };
}
function add(a, b) {
  return {
    "real": a.real + b.real,
    "imag": a.imag + b.imag
  };
}
function subtract(a, b) {
  return {
    "real": a.real - b.real,
    "imag": a.imag - b.imag
  };
}
function euler(kn, N) {
  let x = -2 * Math.PI * kn / N;
  return { "real": Math.cos(x), "imag": Math.sin(x) };
}
function conj(a) {
  a.imag *= -1;
  return a;
}
function constructComplexArray(X, N) {
  let complexArray = [];
  for (let i = 0; i < N; i++) {
    complexArray.push({ "real": X[i], "imag": 0 });
  }
  return complexArray;
}
function bitReverseArray(array) {
  let n = array.length;
  let reversedArray = new Array(n);
  for (let i = 0; i < n; i++) {
    reversedArray[i] = array[bitReverse(i, n)];
  }
  return reversedArray;
}
function bitReverse(i, n) {
  let j = i.toString(2);
  j = j.split("").reverse().join("");
  j = j + "0".repeat(Math.log2(n) - j.length);
  return parseInt(j, 2);
}
function FFT(X) {
  let N = X.length;
  let complexArray = constructComplexArray(X, N);
  let reversedArray = bitReverseArray(complexArray);
  let outputArray = reversedArray.slice();
  for (let i = 1; i < Math.log2(N) + 1; i++) {
    let m = Math.pow(2, i);
    let wm = euler(1, m);
    for (let k = 0; k < N; k += m) {
      let w = { "real": 1, "imag": 0 };
      for (let j = 0; j < m / 2; j++) {
        let t = multiply(w, outputArray[k + j + m / 2]);
        let u2 = outputArray[k + j];
        outputArray[k + j] = add(u2, t);
        outputArray[k + j + m / 2] = subtract(u2, t);
        w = multiply(w, wm);
      }
    }
  }
  return outputArray;
}
function fastFFT2(X) {
  let fft = FFT2(X);
  let fft2 = fft.map((row) => row.map((c) => Math.sqrt(c.real * c.real + c.imag * c.imag)));
  let fft3 = FFTShift(FFT2(fft2, "column"));
  return fft3;
}
function IFFT(X) {
  let N = X.length;
  let reversedArray = bitReverseArray(X);
  let outputArray = reversedArray.slice();
  for (let i = 1; i < Math.log2(N) + 1; i++) {
    let m = Math.pow(2, i);
    let wm = euler(-1, m);
    for (let k = 0; k < N; k += m) {
      let w = { "real": 1, "imag": 0 };
      for (let j = 0; j < m / 2; j++) {
        let t = multiply(w, outputArray[k + j + m / 2]);
        let u2 = outputArray[k + j];
        outputArray[k + j] = add(u2, t);
        outputArray[k + j + m / 2] = subtract(u2, t);
        w = multiply(w, wm);
      }
    }
  }
  for (let i = 0; i < N; i++) {
    outputArray[i].real /= N;
    outputArray[i].imag /= N;
  }
  return outputArray;
}
function FFTImagRow(fftResult) {
  let N = fftResult.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = FFTImag(fftResult[i]);
  }
  return Y;
}
function IFFTReal(ifftResult) {
  let N = ifftResult.length;
  let real = new Array(N);
  for (let i = 0; i < N; i++) {
    real[i] = ifftResult[i].real;
  }
  return real;
}
function IFFTReal2(ifftResult, mode = "row") {
  if (mode === "row") {
    return IFFTRealRow(ifftResult);
  } else {
    return transpose(IFFTRealRow(transposeComplex(ifftResult)));
  }
}
function IFFTRealRow(ifftResult) {
  let N = ifftResult.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = IFFTReal(ifftResult[i]);
  }
  return Y;
}
function FFT2(X, mode = "row") {
  if (mode === "row") {
    return FFT2Row(X);
  } else {
    return transposeComplex(FFT2Row(transpose(X)));
  }
}
function FFT2Row(X) {
  let rowLength = X[0].length;
  let columnLength = X.length;
  if (Math.log2(rowLength) % 1 !== 0) {
    let N = Math.pow(2, Math.ceil(Math.log2(rowLength)));
    for (let i = 0; i < columnLength; i++) {
      X[i] = X[i].concat(new Array(N - rowLength).fill(0));
    }
  }
  let Y = new Array(columnLength);
  for (let i = 0; i < columnLength; i++) {
    Y[i] = FFT(X[i]);
  }
  return Y;
}
function IFFT2(X, mode = "row") {
  if (mode === "row") {
    return IFFT2Row(X);
  } else {
    return transposeComplex(IFFT2Row(transposeComplex(X)));
  }
}
function IFFT2Row(X) {
  let rowLength = X[0].length;
  let columnLength = X.length;
  if (Math.log2(rowLength) % 1 !== 0) {
    let N = Math.pow(2, Math.ceil(Math.log2(rowLength)));
    for (let i = 0; i < columnLength; i++) {
      X[i] = X[i].concat(new Array(N - rowLength).fill({ "real": 0, "imag": 0 }));
    }
  }
  let Y = new Array(columnLength);
  for (let i = 0; i < columnLength; i++) {
    Y[i] = IFFT(X[i]);
  }
  return Y;
}
function transpose(X) {
  let N = X.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      Y[i][j] = X[j][i];
    }
  }
  return Y;
}
function transposeComplex(X) {
  let N = X.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      Y[i][j] = X[j][i];
    }
  }
  return Y;
}
function FFTImag(fftResult) {
  let N = fftResult.length;
  let imag = new Array(N);
  for (let i = 0; i < N; i++) {
    imag[i] = fftResult[i].imag;
  }
  return imag;
}
function FFTImag2(fftResult, mode = "row") {
  if (mode === "row") {
    return FFTImagRow(fftResult);
  } else {
    return transpose(FFTImagRow(transposeComplex(fftResult)));
  }
}
function FFTReal(fftResult) {
  let N = fftResult.length;
  let imag = new Array(N);
  for (let i = 0; i < N; i++) {
    imag[i] = fftResult[i].real;
  }
  return imag;
}
function FFTRealRow(fftResult) {
  let N = fftResult.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = FFTReal(fftResult[i]);
  }
  return Y;
}
function FFTReal2(fftResult, mode = "row") {
  if (mode === "row") {
    return FFTRealRow(fftResult);
  } else {
    return transpose(FFTRealRow(transposeComplex(fftResult)));
  }
}
function FFTShift(fftResult) {
  let N = fftResult.length;
  let Y = new Array(N);
  for (let i = 0; i < N; i++) {
    Y[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      Y[i][j] = fftResult[(i + N / 2) % N][(j + N / 2) % N];
    }
  }
  return Y;
}
function applyMixins(derivedCtor, constructors) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || /* @__PURE__ */ Object.create(null)
      );
    });
  });
}
function isPotentialGeoObject$1(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj.x && obj.y) {
    return true;
  } else if (obj.lon && obj.lat) {
    return true;
  } else if (obj.lng && obj.lat) {
    return true;
  } else if (obj.X && obj.Y) {
    return true;
  } else {
    return false;
  }
}
function throttle(func, wait) {
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}
function extend$1(dest, ...args) {
  for (let i = 0, len = args.length; i < len; i++) {
    const src = args[i];
    for (const key in src) {
      dest[key] = src[key];
    }
  }
  return dest;
}
function emptyObj(obj) {
  for (let i in obj) {
    delete obj[i];
  }
}
function UUID$1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v2 = c === "x" ? r : r & 3 | 8;
    return v2.toString(16);
  });
}
function calculateArrayShape(array) {
  let shape = [];
  let tmp = array;
  while (Array.isArray(tmp)) {
    shape.push(tmp.length);
    tmp = tmp[0];
  }
  return shape;
}
function flattenArray(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let tmp = array[i];
    if (Array.isArray(tmp)) {
      res.push(...flattenArray(tmp));
    } else {
      res.push(tmp);
    }
  }
  return res;
}
function fillIndexArray(indexArray, fillArray) {
  let res = [];
  for (let i = 0; i < indexArray.length; i++) {
    let tmp = indexArray[i];
    if (Array.isArray(tmp)) {
      res.push(fillIndexArray(tmp, fillArray));
    } else {
      res.push(fillArray[tmp]);
    }
  }
  return res;
}
function concatEL2DArray(array1, array2) {
  array1.forEach((item, index) => {
    array1[index] = item.concat(array2[index]);
  });
  return array1;
}
function subColumnInEL2DArray(array, indexArray) {
  if (!Array.isArray(indexArray)) {
    indexArray = [indexArray];
  }
  indexArray.forEach((item) => {
    if (item < 0 || item >= array[0].length) {
      throw new Error("indexArray is illegal!");
    }
  });
  let res = [];
  array.forEach((item) => {
    let tmp = [];
    if (Array.isArray(indexArray)) {
      indexArray.forEach((index) => {
        tmp.push(item[index]);
      });
    } else {
      tmp.push(item[indexArray]);
    }
    res.push(tmp);
  });
  return res;
}
function randomIndexArray(length, num) {
  if (num > length) {
    throw new Error("num must be less than length!");
  }
  const res = [];
  while (res.length < num) {
    const tmp = Math.floor(Math.random() * length);
    if (!res.includes(tmp)) {
      res.push(tmp);
    }
  }
  return res;
}
function round(num, precision = 0) {
  if (precision && !(precision >= 0)) {
    throw new Error("precision must be a positive number");
  }
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(num * multiplier) / multiplier;
}
class Evented {
  constructor() {
    __publicField(this, "_events", {});
    __publicField(this, "_asyncEvents", {});
  }
  /**
   * 添加事件监听（同步、异步）
   * @param type - 事件名称（类型）
   * @param fn - 事件处理函数（监听器）
   * @param context - 事件处理函数的上下文
   * @returns {this} 返回 EventEmitter 实例
   */
  on(type, fn, context) {
    const isAsync = fn.constructor.name === "AsyncFunction";
    if (isAsync) {
      if (!this._asyncEvents[type]) {
        this._asyncEvents[type] = [];
      }
      this._asyncEvents[type].push({ fn, context });
    } else {
      if (!this._events[type]) {
        this._events[type] = [];
      }
      this._events[type].push({ fn, context });
    }
    return this;
  }
  /**
   * 移除事件监听
   * @param type 
   * @param fn 
   * @param context 
   * @returns 
   */
  off(type, fn, context) {
    if (!this._events[type]) {
      return this;
    }
    if (this._events[type]) {
      if (!fn && !context) {
        delete this._events[type];
      } else {
        const listeners = this._events[type];
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i];
          if ((!fn || listener.fn === fn) && (!context || listener.context === context)) {
            listeners.splice(i, 1);
            i--;
          }
        }
      }
    }
    if (this._asyncEvents[type]) {
      if (!fn && !context) {
        delete this._asyncEvents[type];
      } else {
        const listeners = this._asyncEvents[type];
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i];
          if ((!fn || listener.fn === fn) && (!context || listener.context === context)) {
            listeners.splice(i, 1);
            i--;
          }
        }
      }
    }
    return this;
  }
  /**
   * 添加一次性事件监听
   * @param type 
   * @param fn 
   * @param context 
   * @returns 
   */
  once(type, fn, context) {
    const onceWrapper = (...args) => {
      fn.apply(this, args);
      this.off(type, onceWrapper);
    };
    return this.on(type, onceWrapper, context);
  }
  /**
   * 只会触发非异步事件
   * @param type 
   * @param data 
   * @returns 
   */
  emit(type, data) {
    if (!this._events[type]) {
      return this;
    }
    const eventData = { type, target: this, ...data };
    const listeners = this._events[type].slice();
    listeners.forEach((listener) => {
      listener.fn.call(listener.context || this, eventData);
      if (listener.once) {
        this.off(type, listener.fn, listener.context);
      }
    });
    return this;
  }
  /**
   * 异步触发事件
   * - parallel: 并行执行（同时执行所有处理函数）
   * - series: 串行执行（按照添加顺序执行）
   * - ignore: 忽略(在后台异步执行，但无法得知何时执行完毕)
   * @param type - 事件名称
   * @param mode - 事件处理函数的执行模式('parallel' | 'series' | 'ignore')
   * @param args - 事件处理函数的参数
   * @returns {Promise<void>} 返回一个 Promise 对象
   */
  async emitAsync(type, mode, data) {
    if (!this._asyncEvents[type]) {
      return;
    }
    const eventData = { type, target: this, ...data };
    const listeners = this._asyncEvents[type].slice();
    if (mode === "parallel") {
      await Promise.all(listeners.map((listener) => listener.fn.call(listener.context || this, eventData)));
    } else if (mode === "series") {
      for (const listener of listeners) {
        await listener.fn.call(listener.context || this, eventData);
      }
    } else if (mode === "ignore") {
      listeners.forEach((listener) => listener.fn.call(listener.context || this, eventData));
    }
  }
  /**
   * 获取指定事件类型的监听器
   * @param type - 事件名称
   * @returns {Listener[]} 返回一个监听器数组
   */
  listeners(type) {
    return [...this._events[type] || [], ...this._asyncEvents[type] || []];
  }
  /**
   * 判断是否存在指定事件类型的监听器
   * @param type - 事件名称
   * @returns {boolean} 返回一个布尔值
   */
  hasListeners(type) {
    var _a, _b;
    return !!(((_a = this._events[type]) == null ? void 0 : _a.length) || ((_b = this._asyncEvents[type]) == null ? void 0 : _b.length));
  }
  /**
   * 移除所有事件监听
   * @returns {this} 返回 EventEmitter 实例
   */
  removeAllListeners() {
    this._events = {};
    this._asyncEvents = {};
    return this;
  }
  /**
   * 判断是否为异步监听器
   * @param {Listener | AsyncListener} listener - 监听器
   * @returns {boolean} 返回一个布尔值
   */
  static isAsyncListener(listener) {
    return listener.fn.constructor.name === "AsyncFunction";
  }
}
function get_centroid(points) {
  let len = points.length;
  let sum_x = 0;
  let sum_y = 0;
  for (let i = 0; i < len; i++) {
    sum_x += points[i][0];
    sum_y += points[i][1];
  }
  return [sum_x / len, sum_y / len];
}
function K_means(k, thresh = 1e-4, maxtime = 100, points) {
  let centroids = [];
  let len = points.length;
  if (len < k) {
    console.log("样本数量小于分类数量");
    return;
  }
  let indexArray = randomIndexArray(len, k);
  indexArray.forEach(
    (item) => {
      let tmp = points[item];
      centroids.push(tmp);
    }
  );
  let dc = Infinity;
  let times = 0;
  let groups = [];
  while (dc > thresh && times < maxtime) {
    groups = [];
    for (let i = 0; i < k; i++) {
      groups.push([]);
    }
    for (let i = 0; i < len; i++) {
      let min = Infinity;
      let min_index = 0;
      let tmp = points[i];
      for (let j = 0; j < k; j++) {
        let tmp1 = points[i];
        let tmp2 = centroids[j];
        let dis = haversine(tmp1, tmp2);
        if (dis < min) {
          min = dis;
          min_index = j;
        }
      }
      groups[min_index].push(tmp);
    }
    let new_centroids = [];
    for (let i = 0; i < k; i++) {
      new_centroids.push(get_centroid(groups[i]));
    }
    dc = 0;
    for (let i = 0; i < k; i++) {
      let tmp1 = centroids[i];
      let tmp2 = new_centroids[i];
      let dis = haversine(tmp1, tmp2);
      if (dis > dc) {
        dc = dis;
      }
    }
    console.log(dc);
    centroids = new_centroids;
    times++;
  }
  return groups;
}
const hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function bounds(objects) {
  var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  function boundGeometry(geometry2) {
    if (geometry2 != null && geometry2.type && hasOwnProperty$4.call(boundGeometryType, geometry2.type)) {
      boundGeometryType[geometry2.type](geometry2);
    }
  }
  const boundGeometryType = {
    "GeometryCollection": function(o) {
      o.geometries.forEach(boundGeometry);
    },
    "Point": function(o) {
      boundPoint(o.coordinates);
    },
    "MultiPoint": function(o) {
      o.coordinates.forEach(boundPoint);
    },
    "LineString": function(o) {
      boundLine(o.arcs);
    },
    "MultiLineString": function(o) {
      o.arcs.forEach(boundLine);
    },
    "Polygon": function(o) {
      o.arcs.forEach(boundLine);
    },
    "MultiPolygon": function(o) {
      o.arcs.forEach(boundMultiLine);
    }
  };
  function boundPoint(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    if (x < x0)
      x0 = x;
    if (x > x1)
      x1 = x;
    if (y < y0)
      y0 = y;
    if (y > y1)
      y1 = y;
  }
  function boundLine(coordinates) {
    coordinates.forEach(boundPoint);
  }
  function boundMultiLine(coordinates) {
    coordinates.forEach(boundLine);
  }
  for (let key in objects) {
    boundGeometry(objects[key]);
  }
  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : void 0;
}
function hashset(size, hash, equal, type = Array, empty = null) {
  var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))), mask = size - 1;
  for (var i = 0; i < size; ++i) {
    store[i] = empty;
  }
  function add2(value) {
    var index = hash(value) & mask, match = store[index], collisions = 0;
    while (match != empty) {
      if (equal(match, value))
        return true;
      if (++collisions >= size)
        throw new Error("full hashset");
      match = store[index = index + 1 & mask];
    }
    store[index] = value;
    return true;
  }
  function has(value) {
    var index = hash(value) & mask, match = store[index], collisions = 0;
    while (match != empty) {
      if (equal(match, value))
        return true;
      if (++collisions >= size)
        break;
      match = store[index = index + 1 & mask];
    }
    return false;
  }
  function values() {
    var values2 = [];
    for (var i2 = 0, n = store.length; i2 < n; ++i2) {
      var match = store[i2];
      if (match != empty)
        values2.push(match);
    }
    return values2;
  }
  return {
    add: add2,
    has,
    values
  };
}
function hashmap(size, hash, equal, keyType = Array, keyEmpty = null, valueType = Array) {
  var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))), valstore = new valueType(size), mask = size - 1;
  for (var i = 0; i < size; ++i) {
    keystore[i] = keyEmpty;
  }
  function set(key, value) {
    var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key))
        return valstore[index] = value;
      if (++collisions >= size)
        throw new Error("full hashmap");
      matchKey = keystore[index = index + 1 & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }
  function maybeSet(key, value) {
    var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key))
        return valstore[index];
      if (++collisions >= size)
        throw new Error("full hashmap");
      matchKey = keystore[index = index + 1 & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }
  function get(key, missingValue) {
    var index = hash(key) & mask, matchKey = keystore[index], collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key))
        return valstore[index];
      if (++collisions >= size)
        break;
      matchKey = keystore[index = index + 1 & mask];
    }
    return missingValue;
  }
  function keys() {
    var keys2 = [];
    for (var i2 = 0, n = keystore.length; i2 < n; ++i2) {
      var matchKey = keystore[i2];
      if (matchKey != keyEmpty)
        keys2.push(matchKey);
    }
    return keys2;
  }
  return {
    set,
    maybeSet,
    // set if unset
    get,
    keys
  };
}
function equalPoint(pointA, pointB) {
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
}
let buffer = new ArrayBuffer(16), floats = new Float64Array(buffer), uints = new Uint32Array(buffer);
function hashPoint(point) {
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 2147483647;
}
function join(topology2) {
  var coordinates = topology2.coordinates, lines = topology2.lines, rings = topology2.rings, indexes = index(), visitedByIndex = new Int32Array(coordinates.length), leftByIndex = new Int32Array(coordinates.length), rightByIndex = new Int32Array(coordinates.length), junctionByIndex = new Int8Array(coordinates.length), junctionCount = 0, i, n, previousIndex, currentIndex, nextIndex;
  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
  }
  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i], lineStart = line[0], lineEnd = line[1];
    currentIndex = indexes[lineStart];
    nextIndex = indexes[++lineStart];
    ++junctionCount, junctionByIndex[currentIndex] = 1;
    while (++lineStart <= lineEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
    }
    ++junctionCount, junctionByIndex[nextIndex] = 1;
  }
  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = -1;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i], ringStart = ring[0] + 1, ringEnd = ring[1];
    previousIndex = indexes[ringEnd - 1];
    currentIndex = indexes[ringStart - 1];
    nextIndex = indexes[ringStart];
    sequence(i, previousIndex, currentIndex, nextIndex);
    while (++ringStart <= ringEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
    }
  }
  function sequence(i2, previousIndex2, currentIndex2, nextIndex2) {
    if (visitedByIndex[currentIndex2] === i2)
      return;
    visitedByIndex[currentIndex2] = i2;
    var leftIndex = leftByIndex[currentIndex2];
    if (leftIndex >= 0) {
      var rightIndex = rightByIndex[currentIndex2];
      if ((leftIndex !== previousIndex2 || rightIndex !== nextIndex2) && (leftIndex !== nextIndex2 || rightIndex !== previousIndex2)) {
        ++junctionCount, junctionByIndex[currentIndex2] = 1;
      }
    } else {
      leftByIndex[currentIndex2] = previousIndex2;
      rightByIndex[currentIndex2] = nextIndex2;
    }
  }
  function index() {
    var indexByPoint = hashmap(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array), indexes2 = new Int32Array(coordinates.length);
    for (var i2 = 0, n2 = coordinates.length; i2 < n2; ++i2) {
      indexes2[i2] = indexByPoint.maybeSet(i2, i2);
    }
    return indexes2;
  }
  function hashIndex(i2) {
    return hashPoint(coordinates[i2]);
  }
  function equalIndex(i2, j2) {
    return equalPoint(coordinates[i2], coordinates[j2]);
  }
  visitedByIndex = leftByIndex = rightByIndex = null;
  var junctionByPoint = hashset(junctionCount * 1.4, hashPoint, equalPoint), j;
  for (i = 0, n = coordinates.length; i < n; ++i) {
    if (junctionByIndex[j = indexes[i]]) {
      junctionByPoint.add(coordinates[j]);
    }
  }
  return junctionByPoint;
}
function cut(topology2) {
  var junctions = join(topology2), coordinates = topology2.coordinates, lines = topology2.lines, rings = topology2.rings, next, i, n;
  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i], lineMid = line[0], lineEnd = line[1];
    while (++lineMid < lineEnd) {
      if (junctions.has(coordinates[lineMid])) {
        next = { 0: lineMid, 1: line[1] };
        line[1] = lineMid;
        line = line.next = next;
      }
    }
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i], ringStart = ring[0], ringMid = ringStart, ringEnd = ring[1], ringFixed = junctions.has(coordinates[ringStart]);
    while (++ringMid < ringEnd) {
      if (junctions.has(coordinates[ringMid])) {
        if (ringFixed) {
          next = { 0: ringMid, 1: ring[1] };
          ring[1] = ringMid;
          ring = ring.next = next;
        } else {
          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
          coordinates[ringEnd] = coordinates[ringStart];
          ringFixed = true;
          ringMid = ringStart;
        }
      }
    }
  }
  return topology2;
}
function rotateArray(array, start, end, offset) {
  reverse$1(array, start, end);
  reverse$1(array, start, start + offset);
  reverse$1(array, start + offset, end);
}
function reverse$1(array, start, end) {
  for (var mid = start + (end-- - start >> 1), t; start < mid; ++start, --end) {
    t = array[start], array[start] = array[end], array[end] = t;
  }
}
function dedup(topology2) {
  let coordinates = topology2.coordinates, lines = topology2.lines, line, rings = topology2.rings, ring, arcCount = lines.length + rings.length, i, n;
  delete topology2.lines;
  delete topology2.rings;
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    while (line = line.next)
      ++arcCount;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    while (ring = ring.next)
      ++arcCount;
  }
  let arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint), arcs = topology2.arcs = [];
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
      dedupLine(line);
    } while (line = line.next);
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) {
      do {
        dedupLine(ring);
      } while (ring = ring.next);
    } else {
      dedupRing(ring);
    }
  }
  function dedupLine(arc) {
    let startPoint, endPoint, startArcs, startArc, endArcs, endArc, i2, n2;
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
      for (i2 = 0, n2 = startArcs.length; i2 < n2; ++i2) {
        startArc = startArcs[i2];
        if (equalLine(startArc, arc)) {
          arc[0] = startArc[0];
          arc[1] = startArc[1];
          return;
        }
      }
    }
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
      for (i2 = 0, n2 = endArcs.length; i2 < n2; ++i2) {
        endArc = endArcs[i2];
        if (reverseEqualLine(endArc, arc)) {
          arc[1] = endArc[0];
          arc[0] = endArc[1];
          return;
        }
      }
    }
    if (startArcs)
      startArcs.push(arc);
    else
      arcsByEnd.set(startPoint, [arc]);
    if (endArcs)
      endArcs.push(arc);
    else
      arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }
  function dedupRing(arc) {
    let endPoint, endArcs, endArc, i2, n2;
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
      for (i2 = 0, n2 = endArcs.length; i2 < n2; ++i2) {
        endArc = endArcs[i2];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
      for (i2 = 0, n2 = endArcs.length; i2 < n2; ++i2) {
        endArc = endArcs[i2];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }
    if (endArcs)
      endArcs.push(arc);
    else
      arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }
  function equalLine(arcA, arcB) {
    let ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb)
      return false;
    for (; ia <= ja; ++ia, ++ib)
      if (!equalPoint(coordinates[ia], coordinates[ib]))
        return false;
    return true;
  }
  function reverseEqualLine(arcA, arcB) {
    let ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb)
      return false;
    for (; ia <= ja; ++ia, --jb)
      if (!equalPoint(coordinates[ia], coordinates[jb]))
        return false;
    return true;
  }
  function equalRing(arcA, arcB) {
    let ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1], n2 = ja - ia;
    if (n2 !== jb - ib)
      return false;
    let ka = findMinimumOffset(arcA), kb = findMinimumOffset(arcB);
    for (let i2 = 0; i2 < n2; ++i2) {
      if (!equalPoint(coordinates[ia + (i2 + ka) % n2], coordinates[ib + (i2 + kb) % n2]))
        return false;
    }
    return true;
  }
  function reverseEqualRing(arcA, arcB) {
    let ia = arcA[0], ib = arcB[0], ja = arcA[1], jb = arcB[1], n2 = ja - ia;
    if (n2 !== jb - ib)
      return false;
    let ka = findMinimumOffset(arcA), kb = n2 - findMinimumOffset(arcB);
    for (let i2 = 0; i2 < n2; ++i2) {
      if (!equalPoint(coordinates[ia + (i2 + ka) % n2], coordinates[jb - (i2 + kb) % n2]))
        return false;
    }
    return true;
  }
  function findMinimumOffset(arc) {
    let start = arc[0], end = arc[1], mid = start, minimum = mid, minimumPoint = coordinates[mid];
    while (++mid < end) {
      let point = coordinates[mid];
      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
      }
    }
    return minimum - start;
  }
  return topology2;
}
function delta(arcs) {
  var i = -1, n = arcs.length;
  while (++i < n) {
    var arc = arcs[i], j = 0, k = 1, m = arc.length, point = arc[0], x0 = point[0], y0 = point[1], x1, y1;
    while (++j < m) {
      point = arc[j], x1 = point[0], y1 = point[1];
      if (x1 !== x0 || y1 !== y0)
        arc[k++] = [x1 - x0, y1 - y0], x0 = x1, y0 = y1;
    }
    if (k === 1)
      arc[k++] = [0, 0];
    arc.length = k;
  }
  return arcs;
}
const hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function extract(objects) {
  let index = -1;
  let coordinates = [];
  let lines = [];
  let rings = [];
  function extractGeometry(geometry2) {
    if (geometry2 && geometry2.type && hasOwnProperty$3.call(extractGeometryType, geometry2.type))
      extractGeometryType[geometry2.type](geometry2);
  }
  const extractGeometryType = {
    GeometryCollection: function(o) {
      o.geometries.forEach(extractGeometry);
    },
    LineString: function(o) {
      o.arcs = extractLine(o.arcs);
    },
    MultiLineString: function(o) {
      o.arcs = o.arcs.map(extractLine);
    },
    Polygon: function(o) {
      o.arcs = o.arcs.map(extractRing);
    },
    MultiPolygon: function(o) {
      o.arcs = o.arcs.map(extractMultiRing);
    }
  };
  function extractLine(line) {
    for (var i = 0, n = line.length; i < n; ++i)
      coordinates[++index] = line[i];
    var arc = { 0: index - n + 1, 1: index };
    lines.push(arc);
    return arc;
  }
  function extractRing(ring) {
    for (var i = 0, n = ring.length; i < n; ++i)
      coordinates[++index] = ring[i];
    var arc = { 0: index - n + 1, 1: index };
    rings.push(arc);
    return arc;
  }
  function extractMultiRing(rings2) {
    return rings2.map(extractRing);
  }
  for (var key in objects) {
    extractGeometry(objects[key]);
  }
  return {
    type: "Topology",
    coordinates,
    lines,
    rings,
    objects
  };
}
function geometry(inputs) {
  var outputs = {}, key;
  for (key in inputs)
    outputs[key] = geomifyObject(inputs[key]);
  return outputs;
}
function geomifyObject(input) {
  if (input == null) {
    return { type: null };
  } else if (input.type === "FeatureCollection") {
    return geomifyFeatureCollection(input);
  } else if (input.type === "Feature") {
    return geomifyFeature(input);
  } else {
    return geomifyGeometry(input);
  }
}
function geomifyFeatureCollection(input) {
  var output = { type: "GeometryCollection", geometries: input.features.map(geomifyFeature) };
  if (input.bbox != null)
    output.bbox = input.bbox;
  return output;
}
function geomifyFeature(input) {
  var output = geomifyGeometry(input.geometry), key;
  if (input.id != null)
    output.id = input.id;
  if (input.bbox != null)
    output.bbox = input.bbox;
  for (key in input.properties) {
    output.properties = input.properties;
    break;
  }
  return output;
}
function geomifyGeometry(input) {
  if (input == null)
    return { type: null };
  let output = {};
  if (input.type === "GeometryCollection") {
    input = input;
    output = { type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry) };
    if (input.bbox != null)
      output.bbox = input.bbox;
  } else if (input.type === "Point" || input.type === "MultiPoint") {
    output = { type: input.type, coordinates: input.coordinates };
  } else if (input.type === "LineString" || input.type === "MultiLineString" || input.type === "Polygon" || input.type === "MultiPolygon") {
    input = input;
    output = { type: input.type, arcs: input.coordinates };
  } else {
    throw new Error("Unknown geometry type: " + input.type);
  }
  return output;
}
const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function prequantize(objects, bbox, n) {
  var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3], kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1, ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;
  function quantizePoint(input) {
    return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
  }
  function quantizePoints(input, m) {
    var i = -1, j = 0, n2 = input.length, output = new Array(n2), pi2, px, py, x, y;
    while (++i < n2) {
      pi2 = input[i];
      x = Math.round((pi2[0] - x0) * kx);
      y = Math.round((pi2[1] - y0) * ky);
      if (x !== px || y !== py)
        output[j++] = [px = x, py = y];
    }
    output.length = j;
    while (j < m)
      j = output.push([output[0][0], output[0][1]]);
    return output;
  }
  function quantizeLine(input) {
    return quantizePoints(input, 2);
  }
  function quantizeRing(input) {
    return quantizePoints(input, 4);
  }
  function quantizePolygon(input) {
    return input.map(quantizeRing);
  }
  function quantizeGeometry(o) {
    if (o != null && o.type && hasOwnProperty$2.call(quantizeGeometryType, o.type))
      quantizeGeometryType[o.type](o);
  }
  const quantizeGeometryType = {
    GeometryCollection: function(o) {
      o.geometries.forEach(quantizeGeometry);
    },
    Point: function(o) {
      o.coordinates = quantizePoint(o.coordinates);
    },
    MultiPoint: function(o) {
      o.coordinates = o.coordinates.map(quantizePoint);
    },
    LineString: function(o) {
      o.arcs = quantizeLine(o.arcs);
    },
    MultiLineString: function(o) {
      o.arcs = o.arcs.map(quantizeLine);
    },
    Polygon: function(o) {
      o.arcs = quantizePolygon(o.arcs);
    },
    MultiPolygon: function(o) {
      o.arcs = o.arcs.map(quantizePolygon);
    }
  };
  for (var key in objects) {
    quantizeGeometry(objects[key]);
  }
  return {
    scale: [1 / kx, 1 / ky],
    translate: [x0, y0]
  };
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function topology(objects, quantization) {
  let geoObjects = geometry(objects);
  var bbox = bounds(geoObjects), transform2 = quantization > 0 && bbox && prequantize(geoObjects, bbox, quantization), topology2 = dedup(cut(extract(geoObjects))), coordinates = topology2.coordinates, indexByArc = hashmap(topology2.arcs.length * 1.4, hashArc, equalArc);
  topology2.bbox = bbox;
  topology2.arcs = topology2.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0], arc[1] + 1);
  });
  delete topology2.coordinates;
  coordinates = null;
  function indexGeometry(geometry2) {
    if (geometry2 && geometry2.type && hasOwnProperty$1.call(indexGeometryType, geometry2.type))
      indexGeometryType[geometry2.type](geometry2);
  }
  var indexGeometryType = {
    GeometryCollection: function(o) {
      o.geometries.forEach(indexGeometry);
    },
    LineString: function(o) {
      o.arcs = indexArcs(o.arcs);
    },
    MultiLineString: function(o) {
      o.arcs = o.arcs.map(indexArcs);
    },
    Polygon: function(o) {
      o.arcs = o.arcs.map(indexArcs);
    },
    MultiPolygon: function(o) {
      o.arcs = o.arcs.map(indexMultiArcs);
    }
  };
  function indexArcs(arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next);
    return indexes;
  }
  function indexMultiArcs(arcs) {
    return arcs.map(indexArcs);
  }
  for (var key in geoObjects) {
    indexGeometry(geoObjects[key]);
  }
  if (transform2) {
    topology2.transform = transform2;
    topology2.arcs = delta(topology2.arcs);
  }
  return topology2;
}
function hashArc(arc) {
  var i = arc[0], j = arc[1], t;
  if (j < i)
    t = i, i = j, j = t;
  return i + 31 * j;
}
function equalArc(arcA, arcB) {
  var ia = arcA[0], ja = arcA[1], ib = arcB[0], jb = arcB[1], t;
  if (ja < ia)
    t = ia, ia = ja, ja = t;
  if (jb < ib)
    t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}
function identity(x) {
  return x;
}
function bisect(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x)
      lo = mid + 1;
    else
      hi = mid;
  }
  return lo;
}
function transform(transform2) {
  if (!transform2)
    return identity;
  let x0, y0, kx = transform2.scale[0], ky = transform2.scale[1], dx = transform2.translate[0], dy = transform2.translate[1];
  return function(input, i) {
    if (!i)
      x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n)
      output[j] = input[j], ++j;
    return output;
  };
}
function untransform(transform2) {
  if (!transform2)
    return identity;
  var x0, y0, kx = transform2.scale[0], ky = transform2.scale[1], dx = transform2.translate[0], dy = transform2.translate[1];
  return function(input, i) {
    if (!i)
      x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n)
      output[j] = input[j], ++j;
    return output;
  };
}
function reverse(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j)
    t = array[i], array[i++] = array[j], array[j] = t;
}
function feature(topology2, o) {
  if (typeof o === "string")
    o = topology2.objects[o];
  return o.type === "GeometryCollection" ? { type: "FeatureCollection", features: o.geometries.map(function(o2) {
    return features(topology2, o2);
  }) } : features(topology2, o);
}
function features(topology2, o) {
  var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry2 = object(topology2, o);
  let res = id == null && bbox == null ? { type: "Feature", properties, geometry: geometry2 } : bbox == null ? { type: "Feature", id, properties, geometry: geometry2 } : { type: "Feature", id, bbox, properties, geometry: geometry2 };
  if (Object.keys(properties).length === 0) {
    delete res.properties;
  }
  return res;
}
function object(topology2, o) {
  let transformPoint = transform(topology2.transform), arcs = topology2.arcs;
  function arc(i, points) {
    if (points.length)
      points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0)
      reverse(points, n);
  }
  function point(p) {
    return transformPoint(p);
  }
  function line(arcs2) {
    var points = [];
    for (var i = 0, n = arcs2.length; i < n; ++i)
      arc(arcs2[i], points);
    if (points.length < 2)
      points.push(points[0]);
    return points;
  }
  function ring(arcs2) {
    var points = line(arcs2);
    while (points.length < 4)
      points.push(points[0]);
    return points;
  }
  function polygon(arcs2) {
    return arcs2.map(ring);
  }
  function geometry2(o2) {
    var type = o2.type, coordinates;
    switch (type) {
      case "GeometryCollection":
        return { type, geometries: o2.geometries.map(geometry2) };
      case "Point":
        coordinates = point(o2.coordinates);
        break;
      case "MultiPoint":
        coordinates = o2.coordinates.map(point);
        break;
      case "LineString":
        coordinates = line(o2.arcs);
        break;
      case "MultiLineString":
        coordinates = o2.arcs.map(line);
        break;
      case "Polygon":
        coordinates = polygon(o2.arcs);
        break;
      case "MultiPolygon":
        coordinates = o2.arcs.map(polygon);
        break;
      default:
        return null;
    }
    return { type, coordinates };
  }
  return geometry2(o);
}
function neighbors(objects) {
  var indexesByArc = {}, neighbors2 = objects.map(function() {
    return [];
  });
  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0)
        a = ~a;
      var o = indexesByArc[a];
      if (o)
        o.push(i);
      else
        indexesByArc[a] = [i];
    });
  }
  function polygon(arcs, i) {
    arcs.forEach(function(arc) {
      line(arc, i);
    });
  }
  function geometry2(o, i) {
    if (o.type === "GeometryCollection") {
      o.geometries.forEach(function(o2) {
        geometry2(o2, i);
      });
    } else if (o.type in geometryType) {
      geometryType[o.type](o.arcs, i);
    }
  }
  const geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) {
      arcs.forEach(function(arc) {
        polygon(arc, i);
      });
    }
  };
  objects.forEach(geometry2);
  for (let i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors2[ij])[i = bisect(n, ik)] !== ik)
          n.splice(i, 0, ik);
        if ((n = neighbors2[ik])[i = bisect(n, ij)] !== ij)
          n.splice(i, 0, ij);
      }
    }
  }
  return neighbors2;
}
function stitch(topology2, arcs) {
  var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
  arcs.forEach(function(i, j) {
    if (topology2.arcs)
      var arc = topology2.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });
  arcs.forEach(function(i) {
    var e2 = ends(i), start = e2[0], end = e2[1], f, g;
    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });
  function ends(i) {
    if (topology2.arcs) {
      let arc = topology2.arcs[i < 0 ? ~i : i];
      let p0 = arc[0];
      let p1;
      if (topology2.transform)
        p1 = [0, 0], arc.forEach(function(dp) {
          p1[0] += dp[0], p1[1] += dp[1];
        });
      else
        p1 = arc[arc.length - 1];
      return i < 0 ? [p1, p0] : [p0, p1];
    }
  }
  function flush(fragmentByEnd2, fragmentByStart2) {
    for (var k in fragmentByEnd2) {
      var f = fragmentByEnd2[k];
      delete fragmentByStart2[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) {
        stitchedArcs[i < 0 ? ~i : i] = 1;
      });
      fragments.push(f);
    }
  }
  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) {
    if (!stitchedArcs[i < 0 ? ~i : i])
      fragments.push([i]);
  });
  return fragments;
}
function mesh(topology2) {
  return object(topology2, meshArcs.apply(this, arguments));
}
function meshArcs(topology2, object2, filter2) {
  var arcs, i, n;
  if (arguments.length > 1)
    arcs = extractArcs(topology2, object2, filter2);
  else
    for (i = 0, arcs = new Array(n = topology2.arcs.length); i < n; ++i)
      arcs[i] = i;
  return { type: "MultiLineString", arcs: stitch(topology2, arcs) };
}
function extractArcs(topology2, object2, filter2) {
  var arcs = [], geomsByArc = [], geom;
  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({ i, g: geom });
  }
  function extract1(arcs2) {
    arcs2.forEach(extract0);
  }
  function extract2(arcs2) {
    arcs2.forEach(extract1);
  }
  function extract3(arcs2) {
    arcs2.forEach(extract2);
  }
  function geometry2(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection":
        o.geometries.forEach(geometry2);
        break;
      case "LineString":
        extract1(o.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        extract2(o.arcs);
        break;
      case "MultiPolygon":
        extract3(o.arcs);
        break;
    }
  }
  geometry2(object2);
  geomsByArc.forEach(filter2 == null ? function(geoms) {
    arcs.push(geoms[0].i);
  } : function(geoms) {
    if (filter2(geoms[0].g, geoms[geoms.length - 1].g))
      arcs.push(geoms[0].i);
  });
  return arcs;
}
function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n)
    a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area);
}
function merge$1(topology2) {
  return object(topology2, mergeArcs.apply(this, arguments));
}
function mergeArcs(topology2, objects) {
  var polygonsByArc = {}, polygons = [], groups = [];
  objects.forEach(geometry2);
  function geometry2(o) {
    switch (o.type) {
      case "GeometryCollection":
        o.geometries.forEach(geometry2);
        break;
      case "Polygon":
        extract2(o.arcs);
        break;
      case "MultiPolygon":
        o.arcs.forEach(extract2);
        break;
    }
  }
  function extract2(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }
  function area(ring) {
    return planarRingArea(object(topology2, { type: "Polygon", arcs: [ring] }).coordinates[0]);
  }
  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [], neighbors2 = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors2.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon2) {
              if (!polygon2._) {
                polygon2._ = 1;
                neighbors2.push(polygon2);
              }
            });
          });
        });
      }
    }
  });
  polygons.forEach(function(polygon) {
    delete polygon._;
  });
  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons2) {
      let arcs = [];
      let n;
      polygons2.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });
      arcs = stitch(topology2, arcs);
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }
      return arcs;
    }).filter(function(arcs) {
      return arcs.length > 0;
    })
  };
}
const A = 6378137;
const MAXEXTENT = 20037508342789244e-9;
const MAXLAT$1 = 85.05112877980659;
const SphericalMercator = {
  /**
   * Convert lon/lat values to 900913 x/y.
   * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
   * @param {Array} lonlat `[lon, lat]` array of geographic coordinates.
   * @returns {Array} `[x, y]` array of geographic coordinates.
   */
  project(lonlat) {
    let d = Math.PI / 180, max = MAXLAT$1, lat = Math.max(Math.min(max, lonlat[1]), -max), sin2 = Math.sin(lat * d);
    let x = A * lonlat[0] * d;
    let y = A * Math.log((1 + sin2) / (1 - sin2)) / 2;
    if (y > MAXEXTENT)
      y = MAXEXTENT;
    if (y < -MAXEXTENT)
      y = -MAXEXTENT;
    if (x > MAXEXTENT)
      x = MAXEXTENT;
    if (x < -MAXEXTENT)
      x = -MAXEXTENT;
    return [x, y];
  },
  /**
   * Convert 900913 x/y values to lon/lat.
   * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
   * @param {Array} point `[x, y]` array of geographic coordinates.
   * @returns {Array} `[lon, lat]` array of geographic coordinates.
   */
  unproject(point) {
    let d = 180 / Math.PI;
    return [point[0] * d / A, (2 * Math.atan(Math.exp(point[1] / A)) - Math.PI / 2) * d];
  },
  bounds: [-MAXEXTENT, -MAXEXTENT, MAXEXTENT, MAXEXTENT],
  name: "EPSG:3857"
};
function mergeMBR(mbr1, mbr2) {
  return [Math.min(mbr1[0], mbr2[0]), Math.min(mbr1[1], mbr2[1]), Math.max(mbr1[2], mbr2[2]), Math.max(mbr1[3], mbr2[3])];
}
function mergePointMBR(mbr, point) {
  return [Math.min(mbr[0], point[0]), Math.min(mbr[1], point[1]), Math.max(mbr[2], point[0]), Math.max(mbr[3], point[1])];
}
function MBR2Plane(mbr, projection = SphericalMercator) {
  let res;
  let plane0 = projection.project([mbr[0], mbr[1]]);
  let plane1 = projection.project([mbr[2], mbr[3]]);
  res = [plane0[0], plane0[1], plane1[0], plane1[1]];
  return res;
}
function plane2MBR(plane, projection = SphericalMercator) {
  let res;
  let mbr0 = projection.unproject([plane[0], plane[1]]);
  let mbr1 = projection.unproject([plane[2], plane[3]]);
  res = [mbr0[0], mbr0[1], mbr1[0], mbr1[1]];
  return res;
}
function getPointsMBR(points) {
  let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
  for (let i = 0; i < points.length; i++) {
    let lon = points[i][0];
    let lat = points[i][1];
    minLon = Math.min(minLon, lon);
    minLat = Math.min(minLat, lat);
    maxLon = Math.max(maxLon, lon);
    maxLat = Math.max(maxLat, lat);
  }
  return [minLon, minLat, maxLon, maxLat];
}
function pointInMBR(point, mbr) {
  let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
  let lon = point[0], lat = point[1];
  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}
function containsMBR(mbr1, mbr2) {
  return mbr1[0] <= mbr2[0] && mbr1[1] <= mbr2[1] && mbr1[2] >= mbr2[2] && mbr1[3] >= mbr2[3];
}
function intersectsMBR(mbr1, mbr2) {
  return mbr1[0] <= mbr2[2] && mbr1[2] >= mbr2[0] && mbr1[1] <= mbr2[3] && mbr1[3] >= mbr2[1];
}
function overlapsMBR(mbr1, mbr2) {
  return mbr1[0] < mbr2[2] && mbr1[2] > mbr2[0] && mbr1[1] < mbr2[3] && mbr1[3] > mbr2[1];
}
function equalsMBR(mbr1, mbr2) {
  return mbr1[0] === mbr2[0] && mbr1[1] === mbr2[1] && mbr1[2] === mbr2[2] && mbr1[3] === mbr2[3];
}
function pointInMBRWithAntimeridian(point, mbr) {
  let mbr1 = mbr.map((v2, i) => {
    if (i % 2 === 0) {
      return changeLon(v2);
    } else {
      return v2;
    }
  });
  let mbr2 = mbr.map((v2, i) => {
    if (i % 2 === 0) {
      return antiChangeLon(v2);
    } else {
      return v2;
    }
  });
  return pointInMBR(point, mbr1) || pointInMBR(point, mbr2);
}
function getMBRWithAntimeridian(points) {
  let points180 = points.map(changePoint);
  let mbr1 = getPointsMBR(points);
  let mbr2 = getPointsMBR(points180);
  return smallerMBR(mbr1, mbr2, [false, true]);
}
function splitMBRWithAntimeridian(mbr) {
  let mbr1 = [mbr[0], mbr[1], 180, mbr[3]];
  let mbr2 = [-180, mbr[1], mbr[2], mbr[3]];
  return [mbr1, mbr2];
}
function mbrToRectangle(mbr) {
  return {
    x: (mbr[0] + mbr[2]) / 2,
    y: (mbr[1] + mbr[3]) / 2,
    w: mbr[2] - mbr[0],
    h: mbr[3] - mbr[1]
  };
}
function rectangleToMBR(rectangle) {
  return [
    rectangle.x - rectangle.w / 2,
    rectangle.y - rectangle.h / 2,
    rectangle.x + rectangle.w / 2,
    rectangle.y + rectangle.h / 2
  ];
}
function mbrToPolygon(mbr) {
  let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
  return [
    [minLon, minLat],
    [minLon, maxLat],
    [maxLon, maxLat],
    [maxLon, minLat],
    [minLon, minLat]
  ];
}
function changeLon(lon) {
  if (lon < 0) {
    return lon + 180;
  } else {
    return lon - 180;
  }
}
function antiChangeLon(lon) {
  if (lon < 0) {
    return lon + 180;
  } else {
    return lon - 180;
  }
}
function changePoint(point) {
  return [changeLon(point[0]), point[1]];
}
function smallerMBR(mbr1, mbr2, tag = [false, false]) {
  let lonSpan1 = mbr1[2] - mbr1[0];
  let latSpan1 = mbr1[3] - mbr1[1];
  let lonSpan2 = mbr2[2] - mbr2[0];
  let latSpan2 = mbr2[3] - mbr2[1];
  if (lonSpan1 * latSpan1 < lonSpan2 * latSpan2) {
    if (tag[0]) {
      return mbr1.map((v2, i) => {
        if (i % 2 === 0) {
          return antiChangeLon(v2);
        } else {
          return v2;
        }
      });
    } else {
      return mbr1;
    }
  } else {
    if (tag[1]) {
      return mbr2.map((v2, i) => {
        if (i % 2 === 0) {
          return antiChangeLon(v2);
        } else {
          return v2;
        }
      });
    } else {
      return mbr2;
    }
  }
}
const epsilon = 11102230246251565e-32;
const splitter = 134217729;
const resulterrbound = (3 + 8 * epsilon) * epsilon;
function sum(elen, e2, flen, f, h) {
  let Q, Qnew, hh, bvirt;
  let enow = e2[0];
  let fnow = f[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q = enow;
    enow = e2[++eindex];
  } else {
    Q = fnow;
    fnow = f[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q;
      hh = Q - (Qnew - enow);
      enow = e2[++eindex];
    } else {
      Qnew = fnow + Q;
      hh = Q - (Qnew - fnow);
      fnow = f[++findex];
    }
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e2[++eindex];
      } else {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q + enow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (enow - bvirt);
    enow = e2[++eindex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q + fnow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f[++findex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function sum_three(alen, a, blen, b, clen, c, tmp, out) {
  return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}
function scale(elen, e2, b, h) {
  let Q, sum2, hh, product1, product0;
  let bvirt, c, ahi, alo, bhi, blo;
  c = splitter * b;
  bhi = c - (c - b);
  blo = b - bhi;
  let enow = e2[0];
  Q = enow * b;
  c = splitter * enow;
  ahi = c - (c - enow);
  alo = enow - ahi;
  hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
  let hindex = 0;
  if (hh !== 0) {
    h[hindex++] = hh;
  }
  for (let i = 1; i < elen; i++) {
    enow = e2[i];
    product1 = enow * b;
    c = splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
    sum2 = Q + product0;
    bvirt = sum2 - Q;
    hh = Q - (sum2 - bvirt) + (product0 - bvirt);
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    Q = product1 + sum2;
    hh = sum2 - (Q - product1);
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function estimate(elen, e2) {
  let Q = e2[0];
  for (let i = 1; i < elen; i++)
    Q += e2[i];
  return Q;
}
function vec(n) {
  return new Float64Array(n);
}
const ccwerrboundA = (3 + 16 * epsilon) * epsilon;
const ccwerrboundB = (2 + 12 * epsilon) * epsilon;
const ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;
const B = vec(4);
const C1 = vec(8);
const C2 = vec(12);
const D = vec(16);
const u$1 = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  B[2] = _j - (u3 - bvirt) + (_i - bvirt);
  B[3] = u3;
  let det = estimate(4, B);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound)
    return det;
  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u$1[3] = u3;
  const C1len = sum(4, B, 4, u$1, C1);
  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u$1[3] = u3;
  const C2len = sum(C1len, C1, 4, u$1, C2);
  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u$1[3] = u3;
  const Dlen = sum(C2len, C2, 4, u$1, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum)
    return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
const iccerrboundA = (10 + 96 * epsilon) * epsilon;
const iccerrboundB = (4 + 48 * epsilon) * epsilon;
const iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;
const bc = vec(4);
const ca = vec(4);
const ab = vec(4);
const aa = vec(4);
const bb = vec(4);
const cc = vec(4);
const u = vec(4);
const v = vec(4);
const axtbc = vec(8);
const aytbc = vec(8);
const bxtca = vec(8);
const bytca = vec(8);
const cxtab = vec(8);
const cytab = vec(8);
const abt = vec(8);
const bct = vec(8);
const cat = vec(8);
const abtt = vec(4);
const bctt = vec(4);
const catt = vec(4);
const _8 = vec(8);
const _16 = vec(16);
const _16b = vec(16);
const _16c = vec(16);
const _32 = vec(32);
const _32b = vec(32);
const _48 = vec(48);
const _64 = vec(64);
let fin = vec(1152);
let fin2 = vec(1152);
function finadd(finlen, a, alen) {
  finlen = sum(finlen, fin, a, alen, fin2);
  const tmp = fin;
  fin = fin2;
  fin2 = tmp;
  return finlen;
}
function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
  let finlen;
  let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
  let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
  let abtlen, bctlen, catlen;
  let abttlen, bcttlen, cattlen;
  let n1, n0;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
  const adx = ax - dx;
  const bdx = bx - dx;
  const cdx = cx - dx;
  const ady = ay - dy;
  const bdy = by - dy;
  const cdy = cy - dy;
  s1 = bdx * cdy;
  c = splitter * bdx;
  ahi = c - (c - bdx);
  alo = bdx - ahi;
  c = splitter * cdy;
  bhi = c - (c - cdy);
  blo = cdy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = cdx * bdy;
  c = splitter * cdx;
  ahi = c - (c - cdx);
  alo = cdx - ahi;
  c = splitter * bdy;
  bhi = c - (c - bdy);
  blo = bdy - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
  bc[3] = u3;
  s1 = cdx * ady;
  c = splitter * cdx;
  ahi = c - (c - cdx);
  alo = cdx - ahi;
  c = splitter * ady;
  bhi = c - (c - ady);
  blo = ady - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = adx * cdy;
  c = splitter * adx;
  ahi = c - (c - adx);
  alo = adx - ahi;
  c = splitter * cdy;
  bhi = c - (c - cdy);
  blo = cdy - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
  ca[3] = u3;
  s1 = adx * bdy;
  c = splitter * adx;
  ahi = c - (c - adx);
  alo = adx - ahi;
  c = splitter * bdy;
  bhi = c - (c - bdy);
  blo = bdy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = bdx * ady;
  c = splitter * bdx;
  ahi = c - (c - bdx);
  alo = bdx - ahi;
  c = splitter * ady;
  bhi = c - (c - ady);
  blo = ady - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
  ab[3] = u3;
  finlen = sum(
    sum(
      sum(
        scale(scale(4, bc, adx, _8), _8, adx, _16),
        _16,
        scale(scale(4, bc, ady, _8), _8, ady, _16b),
        _16b,
        _32
      ),
      _32,
      sum(
        scale(scale(4, ca, bdx, _8), _8, bdx, _16),
        _16,
        scale(scale(4, ca, bdy, _8), _8, bdy, _16b),
        _16b,
        _32b
      ),
      _32b,
      _64
    ),
    _64,
    sum(
      scale(scale(4, ab, cdx, _8), _8, cdx, _16),
      _16,
      scale(scale(4, ab, cdy, _8), _8, cdy, _16b),
      _16b,
      _32
    ),
    _32,
    fin
  );
  let det = estimate(finlen, fin);
  let errbound = iccerrboundB * permanent;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - adx;
  adxtail = ax - (adx + bvirt) + (bvirt - dx);
  bvirt = ay - ady;
  adytail = ay - (ady + bvirt) + (bvirt - dy);
  bvirt = bx - bdx;
  bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
  bvirt = by - bdy;
  bdytail = by - (bdy + bvirt) + (bvirt - dy);
  bvirt = cx - cdx;
  cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
  bvirt = cy - cdy;
  cdytail = cy - (cdy + bvirt) + (bvirt - dy);
  if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) {
    return det;
  }
  errbound = iccerrboundC * permanent + resulterrbound * Math.abs(det);
  det += (adx * adx + ady * ady) * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + 2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx) + ((bdx * bdx + bdy * bdy) * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + 2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) + ((cdx * cdx + cdy * cdy) * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + 2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
    s1 = adx * adx;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
    t1 = ady * ady;
    c = splitter * ady;
    ahi = c - (c - ady);
    alo = ady - ahi;
    t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
    _i = s0 + t0;
    bvirt = _i - s0;
    aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 + t1;
    bvirt = _i - _0;
    aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
    u3 = _j + _i;
    bvirt = u3 - _j;
    aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
    aa[3] = u3;
  }
  if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
    s1 = bdx * bdx;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
    t1 = bdy * bdy;
    c = splitter * bdy;
    ahi = c - (c - bdy);
    alo = bdy - ahi;
    t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
    _i = s0 + t0;
    bvirt = _i - s0;
    bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 + t1;
    bvirt = _i - _0;
    bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bb[3] = u3;
  }
  if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
    s1 = cdx * cdx;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
    t1 = cdy * cdy;
    c = splitter * cdy;
    ahi = c - (c - cdy);
    alo = cdy - ahi;
    t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
    _i = s0 + t0;
    bvirt = _i - s0;
    cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 + t1;
    bvirt = _i - _0;
    cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
    u3 = _j + _i;
    bvirt = u3 - _j;
    cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    cc[3] = u3;
  }
  if (adxtail !== 0) {
    axtbclen = scale(4, bc, adxtail, axtbc);
    finlen = finadd(finlen, sum_three(
      scale(axtbclen, axtbc, 2 * adx, _16),
      _16,
      scale(scale(4, cc, adxtail, _8), _8, bdy, _16b),
      _16b,
      scale(scale(4, bb, adxtail, _8), _8, -cdy, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (adytail !== 0) {
    aytbclen = scale(4, bc, adytail, aytbc);
    finlen = finadd(finlen, sum_three(
      scale(aytbclen, aytbc, 2 * ady, _16),
      _16,
      scale(scale(4, bb, adytail, _8), _8, cdx, _16b),
      _16b,
      scale(scale(4, cc, adytail, _8), _8, -bdx, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (bdxtail !== 0) {
    bxtcalen = scale(4, ca, bdxtail, bxtca);
    finlen = finadd(finlen, sum_three(
      scale(bxtcalen, bxtca, 2 * bdx, _16),
      _16,
      scale(scale(4, aa, bdxtail, _8), _8, cdy, _16b),
      _16b,
      scale(scale(4, cc, bdxtail, _8), _8, -ady, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (bdytail !== 0) {
    bytcalen = scale(4, ca, bdytail, bytca);
    finlen = finadd(finlen, sum_three(
      scale(bytcalen, bytca, 2 * bdy, _16),
      _16,
      scale(scale(4, cc, bdytail, _8), _8, adx, _16b),
      _16b,
      scale(scale(4, aa, bdytail, _8), _8, -cdx, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (cdxtail !== 0) {
    cxtablen = scale(4, ab, cdxtail, cxtab);
    finlen = finadd(finlen, sum_three(
      scale(cxtablen, cxtab, 2 * cdx, _16),
      _16,
      scale(scale(4, bb, cdxtail, _8), _8, ady, _16b),
      _16b,
      scale(scale(4, aa, cdxtail, _8), _8, -bdy, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (cdytail !== 0) {
    cytablen = scale(4, ab, cdytail, cytab);
    finlen = finadd(finlen, sum_three(
      scale(cytablen, cytab, 2 * cdy, _16),
      _16,
      scale(scale(4, aa, cdytail, _8), _8, bdx, _16b),
      _16b,
      scale(scale(4, bb, cdytail, _8), _8, -adx, _16c),
      _16c,
      _32,
      _48
    ), _48);
  }
  if (adxtail !== 0 || adytail !== 0) {
    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
      s1 = bdxtail * cdy;
      c = splitter * bdxtail;
      ahi = c - (c - bdxtail);
      alo = bdxtail - ahi;
      c = splitter * cdy;
      bhi = c - (c - cdy);
      blo = cdy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = bdx * cdytail;
      c = splitter * bdx;
      ahi = c - (c - bdx);
      alo = bdx - ahi;
      c = splitter * cdytail;
      bhi = c - (c - cdytail);
      blo = cdytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      s1 = cdxtail * -bdy;
      c = splitter * cdxtail;
      ahi = c - (c - cdxtail);
      alo = cdxtail - ahi;
      c = splitter * -bdy;
      bhi = c - (c - -bdy);
      blo = -bdy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = cdx * -bdytail;
      c = splitter * cdx;
      ahi = c - (c - cdx);
      alo = cdx - ahi;
      c = splitter * -bdytail;
      bhi = c - (c - -bdytail);
      blo = -bdytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      v[2] = _j - (u3 - bvirt) + (_i - bvirt);
      v[3] = u3;
      bctlen = sum(4, u, 4, v, bct);
      s1 = bdxtail * cdytail;
      c = splitter * bdxtail;
      ahi = c - (c - bdxtail);
      alo = bdxtail - ahi;
      c = splitter * cdytail;
      bhi = c - (c - cdytail);
      blo = cdytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = cdxtail * bdytail;
      c = splitter * cdxtail;
      ahi = c - (c - cdxtail);
      alo = cdxtail - ahi;
      c = splitter * bdytail;
      bhi = c - (c - bdytail);
      blo = bdytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
      bctt[3] = u3;
      bcttlen = 4;
    } else {
      bct[0] = 0;
      bctlen = 1;
      bctt[0] = 0;
      bcttlen = 1;
    }
    if (adxtail !== 0) {
      const len = scale(bctlen, bct, adxtail, _16c);
      finlen = finadd(finlen, sum(
        scale(axtbclen, axtbc, adxtail, _16),
        _16,
        scale(len, _16c, 2 * adx, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(bcttlen, bctt, adxtail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * adx, _16),
        _16,
        scale(len2, _8, adxtail, _16b),
        _16b,
        scale(len, _16c, adxtail, _32),
        _32,
        _32b,
        _64
      ), _64);
      if (bdytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, cc, adxtail, _8), _8, bdytail, _16), _16);
      }
      if (cdytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, bb, -adxtail, _8), _8, cdytail, _16), _16);
      }
    }
    if (adytail !== 0) {
      const len = scale(bctlen, bct, adytail, _16c);
      finlen = finadd(finlen, sum(
        scale(aytbclen, aytbc, adytail, _16),
        _16,
        scale(len, _16c, 2 * ady, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(bcttlen, bctt, adytail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * ady, _16),
        _16,
        scale(len2, _8, adytail, _16b),
        _16b,
        scale(len, _16c, adytail, _32),
        _32,
        _32b,
        _64
      ), _64);
    }
  }
  if (bdxtail !== 0 || bdytail !== 0) {
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
      s1 = cdxtail * ady;
      c = splitter * cdxtail;
      ahi = c - (c - cdxtail);
      alo = cdxtail - ahi;
      c = splitter * ady;
      bhi = c - (c - ady);
      blo = ady - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = cdx * adytail;
      c = splitter * cdx;
      ahi = c - (c - cdx);
      alo = cdx - ahi;
      c = splitter * adytail;
      bhi = c - (c - adytail);
      blo = adytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      n1 = -cdy;
      n0 = -cdytail;
      s1 = adxtail * n1;
      c = splitter * adxtail;
      ahi = c - (c - adxtail);
      alo = adxtail - ahi;
      c = splitter * n1;
      bhi = c - (c - n1);
      blo = n1 - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = adx * n0;
      c = splitter * adx;
      ahi = c - (c - adx);
      alo = adx - ahi;
      c = splitter * n0;
      bhi = c - (c - n0);
      blo = n0 - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      v[2] = _j - (u3 - bvirt) + (_i - bvirt);
      v[3] = u3;
      catlen = sum(4, u, 4, v, cat);
      s1 = cdxtail * adytail;
      c = splitter * cdxtail;
      ahi = c - (c - cdxtail);
      alo = cdxtail - ahi;
      c = splitter * adytail;
      bhi = c - (c - adytail);
      blo = adytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = adxtail * cdytail;
      c = splitter * adxtail;
      ahi = c - (c - adxtail);
      alo = adxtail - ahi;
      c = splitter * cdytail;
      bhi = c - (c - cdytail);
      blo = cdytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
      catt[3] = u3;
      cattlen = 4;
    } else {
      cat[0] = 0;
      catlen = 1;
      catt[0] = 0;
      cattlen = 1;
    }
    if (bdxtail !== 0) {
      const len = scale(catlen, cat, bdxtail, _16c);
      finlen = finadd(finlen, sum(
        scale(bxtcalen, bxtca, bdxtail, _16),
        _16,
        scale(len, _16c, 2 * bdx, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(cattlen, catt, bdxtail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * bdx, _16),
        _16,
        scale(len2, _8, bdxtail, _16b),
        _16b,
        scale(len, _16c, bdxtail, _32),
        _32,
        _32b,
        _64
      ), _64);
      if (cdytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, aa, bdxtail, _8), _8, cdytail, _16), _16);
      }
      if (adytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, cc, -bdxtail, _8), _8, adytail, _16), _16);
      }
    }
    if (bdytail !== 0) {
      const len = scale(catlen, cat, bdytail, _16c);
      finlen = finadd(finlen, sum(
        scale(bytcalen, bytca, bdytail, _16),
        _16,
        scale(len, _16c, 2 * bdy, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(cattlen, catt, bdytail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * bdy, _16),
        _16,
        scale(len2, _8, bdytail, _16b),
        _16b,
        scale(len, _16c, bdytail, _32),
        _32,
        _32b,
        _64
      ), _64);
    }
  }
  if (cdxtail !== 0 || cdytail !== 0) {
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
      s1 = adxtail * bdy;
      c = splitter * adxtail;
      ahi = c - (c - adxtail);
      alo = adxtail - ahi;
      c = splitter * bdy;
      bhi = c - (c - bdy);
      blo = bdy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = adx * bdytail;
      c = splitter * adx;
      ahi = c - (c - adx);
      alo = adx - ahi;
      c = splitter * bdytail;
      bhi = c - (c - bdytail);
      blo = bdytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      n1 = -ady;
      n0 = -adytail;
      s1 = bdxtail * n1;
      c = splitter * bdxtail;
      ahi = c - (c - bdxtail);
      alo = bdxtail - ahi;
      c = splitter * n1;
      bhi = c - (c - n1);
      blo = n1 - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = bdx * n0;
      c = splitter * bdx;
      ahi = c - (c - bdx);
      alo = bdx - ahi;
      c = splitter * n0;
      bhi = c - (c - n0);
      blo = n0 - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 + t0;
      bvirt = _i - s0;
      v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 + t1;
      bvirt = _i - _0;
      v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
      u3 = _j + _i;
      bvirt = u3 - _j;
      v[2] = _j - (u3 - bvirt) + (_i - bvirt);
      v[3] = u3;
      abtlen = sum(4, u, 4, v, abt);
      s1 = adxtail * bdytail;
      c = splitter * adxtail;
      ahi = c - (c - adxtail);
      alo = adxtail - ahi;
      c = splitter * bdytail;
      bhi = c - (c - bdytail);
      blo = bdytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = bdxtail * adytail;
      c = splitter * bdxtail;
      ahi = c - (c - bdxtail);
      alo = bdxtail - ahi;
      c = splitter * adytail;
      bhi = c - (c - adytail);
      blo = adytail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
      abtt[3] = u3;
      abttlen = 4;
    } else {
      abt[0] = 0;
      abtlen = 1;
      abtt[0] = 0;
      abttlen = 1;
    }
    if (cdxtail !== 0) {
      const len = scale(abtlen, abt, cdxtail, _16c);
      finlen = finadd(finlen, sum(
        scale(cxtablen, cxtab, cdxtail, _16),
        _16,
        scale(len, _16c, 2 * cdx, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(abttlen, abtt, cdxtail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * cdx, _16),
        _16,
        scale(len2, _8, cdxtail, _16b),
        _16b,
        scale(len, _16c, cdxtail, _32),
        _32,
        _32b,
        _64
      ), _64);
      if (adytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, bb, cdxtail, _8), _8, adytail, _16), _16);
      }
      if (bdytail !== 0) {
        finlen = finadd(finlen, scale(scale(4, aa, -cdxtail, _8), _8, bdytail, _16), _16);
      }
    }
    if (cdytail !== 0) {
      const len = scale(abtlen, abt, cdytail, _16c);
      finlen = finadd(finlen, sum(
        scale(cytablen, cytab, cdytail, _16),
        _16,
        scale(len, _16c, 2 * cdy, _32),
        _32,
        _48
      ), _48);
      const len2 = scale(abttlen, abtt, cdytail, _8);
      finlen = finadd(finlen, sum_three(
        scale(len2, _8, 2 * cdy, _16),
        _16,
        scale(len2, _8, cdytail, _16b),
        _16b,
        scale(len, _16c, cdytail, _32),
        _32,
        _32b,
        _64
      ), _64);
    }
  }
  return fin[finlen - 1];
}
function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
  const adx = ax - dx;
  const bdx = bx - dx;
  const cdx = cx - dx;
  const ady = ay - dy;
  const bdy = by - dy;
  const cdy = cy - dy;
  const bdxcdy = bdx * cdy;
  const cdxbdy = cdx * bdy;
  const alift = adx * adx + ady * ady;
  const cdxady = cdx * ady;
  const adxcdy = adx * cdy;
  const blift = bdx * bdx + bdy * bdy;
  const adxbdy = adx * bdy;
  const bdxady = bdx * ady;
  const clift = cdx * cdx + cdy * cdy;
  const det = alift * (bdxcdy - cdxbdy) + blift * (cdxady - adxcdy) + clift * (adxbdy - bdxady);
  const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift + (Math.abs(cdxady) + Math.abs(adxcdy)) * blift + (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;
  const errbound = iccerrboundA * permanent;
  if (det > errbound || -det > errbound) {
    return det;
  }
  return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}
const convertToMercator = SphericalMercator.project;
const convertToWgs84$2 = SphericalMercator.unproject;
function intersection(p1, p2, p3, p4, projectionFrom = SphericalMercator.project, projectionTo = SphericalMercator.unproject, isInfine = false) {
  if (projectionFrom) {
    p1 = projectionFrom(p1);
    p2 = projectionFrom(p2);
    p3 = projectionFrom(p3);
    p4 = projectionFrom(p4);
  }
  let v1 = [p2[0] - p1[0], p2[1] - p1[1]];
  let v2 = [p4[0] - p3[0], p4[1] - p3[1]];
  let det = cross(v1, v2);
  if (det === 0) {
    console.log("两条线段平行或共线");
    return null;
  }
  let t1 = cross([p3[0] - p1[0], p3[1] - p1[1]], v2) / det;
  let t2 = cross([p3[0] - p1[0], p3[1] - p1[1]], v1) / det;
  if (!isInfine) {
    if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
      console.log("交点不在两条线段上");
      return null;
    }
  }
  if (projectionTo) {
    return projectionTo([p1[0] + v1[0] * t1, p1[1] + v1[1] * t1]);
  }
  return [p1[0] + v1[0] * t1, p1[1] + v1[1] * t1];
}
function PointOutsideMBR(point, mbr, isPlane = false) {
  if (isPlane) {
    let merPoint = convertToMercator(point);
    let minx = mbr[0];
    let miny = mbr[1];
    let maxx = mbr[2];
    let maxy = mbr[3];
    [minx, miny] = convertToMercator([minx, miny]);
    [maxx, maxy] = convertToMercator([maxx, maxy]);
    if (merPoint[0] < minx || merPoint[0] > maxx || merPoint[1] < miny || merPoint[1] > maxy) {
      return true;
    }
    return false;
  } else {
    let minx = mbr[0];
    let miny = mbr[1];
    let maxx = mbr[2];
    let maxy = mbr[3];
    if (point[0] < minx || point[0] > maxx || point[1] < miny || point[1] > maxy) {
      return true;
    }
    return false;
  }
}
function cutPolygonByMBR(polygon, mbr) {
  return intersectionPolygon(polygon, mbrToPolygon(mbr));
}
function intersectionPolygon(clipPolygon, subjectPolygon) {
  let cp1 = clipPolygon[clipPolygon.length - 1];
  let cp2;
  let s;
  let e2;
  let outputList = subjectPolygon;
  for (let i in clipPolygon) {
    cp2 = clipPolygon[i];
    let inputList = outputList;
    outputList = [];
    s = inputList[inputList.length - 1];
    for (let j in inputList) {
      e2 = inputList[j];
      if (pointInEdge(e2, cp1, cp2)) {
        if (!pointInEdge(s, cp1, cp2)) {
          let tmp = intersection(
            s,
            e2,
            cp1,
            cp2,
            convertToMercator,
            convertToWgs84$2,
            true
          );
          outputList.push(tmp);
        }
        outputList.push(e2);
      } else if (pointInEdge(s, cp1, cp2)) {
        let tmp = intersection(
          s,
          e2,
          cp1,
          cp2,
          convertToMercator,
          convertToWgs84$2,
          true
        );
        outputList.push(tmp);
      }
      s = e2;
    }
    cp1 = cp2;
  }
  return outputList;
}
function PointInsidePolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    if (polygon[i][1] > point[1] != polygon[j][1] > point[1] && point[0] < (polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]) {
      inside = !inside;
    }
  }
  return inside;
}
function calculateMBR(clipPolygon) {
  let minx = Infinity;
  let miny = Infinity;
  let maxx = -Infinity;
  let maxy = -Infinity;
  for (let i = 0; i < clipPolygon.length; i++) {
    let point = clipPolygon[i];
    if (point[0] < minx)
      minx = point[0];
    if (point[0] > maxx)
      maxx = point[0];
    if (point[1] < miny)
      miny = point[1];
    if (point[1] > maxy)
      maxy = point[1];
  }
  return [minx, miny, maxx, maxy];
}
function iterPolygonEdge(polygon, callback) {
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    callback(polygon[i], polygon[j]);
  }
}
function prePointInPolygon(index, polygonLength) {
  return (index - 1 + polygonLength) % polygonLength;
}
function pointInEdge(point, p1, p2) {
  return ccw(p1, p2, point) > 0;
}
function adjust_lon(lon) {
  return Math.abs(lon) <= 180 ? lon : lon - sign(lon) * 360;
}
function sign(x) {
  return x < 0 ? -1 : x > 0 ? 1 : 0;
}
function ccw(p1, p2, p3) {
  p1 = Array.isArray(p1) ? p1 : p1.toXY();
  p2 = Array.isArray(p2) ? p2 : p2.toXY();
  p3 = Array.isArray(p3) ? p3 : p3.toXY();
  let a = p1[0], b = p1[1];
  let c = p2[0], d = p2[1];
  let e2 = p3[0], f = p3[1];
  let det = (c - a) * (f - b) - (d - b) * (e2 - a);
  det = sign(det);
  return det;
}
function getAngle(p1, p2) {
  let p1XY = Array.isArray(p1) ? p1 : p1.toXY();
  let p2XY = Array.isArray(p2) ? p2 : p2.toXY();
  let angle = Math.atan2(p2XY[1] - p1XY[1], p2XY[0] - p1XY[0]);
  angle = angle * 180 / Math.PI;
  if (angle < 0) {
    angle += 360;
  }
  return angle;
}
function ccwRobust(p1, p2, p3, isReverse = true) {
  p1 = Array.isArray(p1) ? p1 : p1.toXY();
  p2 = Array.isArray(p2) ? p2 : p2.toXY();
  p3 = Array.isArray(p3) ? p3 : p3.toXY();
  let a = p1[0], b = p1[1];
  let c = p2[0], d = p2[1];
  let e2 = p3[0], f = p3[1];
  let det = orient2d(a, b, c, d, e2, f);
  if (isReverse) {
    det = -det;
  }
  det = sign(det);
  return det;
}
function inCircleRobust(p1, p2, p3, p4) {
  p1 = Array.isArray(p1) ? p1 : p1.toXY();
  p2 = Array.isArray(p2) ? p2 : p2.toXY();
  p3 = Array.isArray(p3) ? p3 : p3.toXY();
  p4 = Array.isArray(p4) ? p4 : p4.toXY();
  let a = p1[0], b = p1[1];
  let c = p2[0], d = p2[1];
  let e2 = p3[0], f = p3[1];
  let g = p4[0], h = p4[1];
  let det = incircle(a, b, c, d, e2, f, g, h);
  det = sign(det);
  return det;
}
function inCircle$1(p1, p2, p3, p4) {
  p1 = Array.isArray(p1) ? p1 : p1.toXY();
  p2 = Array.isArray(p2) ? p2 : p2.toXY();
  p3 = Array.isArray(p3) ? p3 : p3.toXY();
  p4 = Array.isArray(p4) ? p4 : p4.toXY();
  let ax = p1[0], ay = p1[1];
  let bx = p2[0], by = p2[1];
  let cx = p3[0], cy = p3[1];
  let px = p4[0], py = p4[1];
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  let det = dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx);
  return sign(det);
}
class Grid {
  constructor(MBR2, data) {
    __publicField(this, "MBR");
    // default
    __publicField(this, "data");
    // 三维数组
    __publicField(this, "shape");
    // 三维数组的形状
    __publicField(this, "rows");
    // 行数
    __publicField(this, "cols");
    // 列数
    __publicField(this, "bands");
    // 波段数
    __publicField(this, "stasticsCache", []);
    this.MBR = MBR2;
    this.data = data;
    this.shape = [data.length, data[0].length, data[0][0].length];
    [this.bands, this.rows, this.cols] = this.shape;
  }
  getShape() {
    return [this.data.length, this.data[0].length, this.data[0][0].length];
  }
  getBand(band) {
    return this.data[band];
  }
  get width() {
    return this.cols;
  }
  get height() {
    return this.rows;
  }
  get bandCount() {
    return this.bands;
  }
  setMBR(MBR2) {
    this.MBR = MBR2;
  }
  getXYZValue(xy, z = 0) {
    let x = xy[0];
    let y = xy[1];
    return this.data[z][y][x];
  }
  set XYZValue(xyzv) {
    let x = xyzv[0];
    let y = xyzv[1];
    let z = xyzv[2];
    let v2 = xyzv[3];
    let oriV = this.data[z][y][x];
    this.data[z][y][x] = v2;
    if (this.stasticsCache[z]) {
      let max = this.stasticsCache[z].max;
      let min = this.stasticsCache[z].min;
      let mean = this.stasticsCache[z].mean;
      let value = this.data[z][y][x];
      if (value > max) {
        max = value;
      }
      if (value < min) {
        min = value;
      }
      let sum2 = mean * this.rows * this.cols;
      sum2 = sum2 - oriV + value;
      mean = sum2 / (this.rows * this.cols);
      this.stasticsCache[z] = { max, min, mean };
    }
  }
  /**
   * 获取指定范围，指定波段的网格数据
   * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGrid(GridMBR, band = [0]) {
    let minRow = GridMBR[0];
    let minCol = GridMBR[1];
    let maxRow = GridMBR[2];
    let maxCol = GridMBR[3];
    let subGrid = [];
    for (let b of band) {
      let bandData = [];
      for (let row = minRow; row <= maxRow; row++) {
        let rowData = [];
        for (let col = minCol; col <= maxCol; col++) {
          rowData.push(this.data[b][row][col]);
        }
        bandData.push(rowData);
      }
      subGrid.push(bandData);
    }
    return subGrid;
  }
  // 在内部修改网格数据 使用均值替换0等无效值
  // 由于网格数据是三维数组，因此需要指定波段号
  /**
   * 在内部修改网格数据 使用均值替换0等无效值
   * @param band - 波段号
   */
  fillInvalidValue(band) {
    let bandData = this.data[band];
    let sum2 = 0;
    let count = 0;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        let value = bandData[row][col];
        if (value === 0) {
          continue;
        } else {
          sum2 += value;
          count++;
        }
      }
    }
    let mean = sum2 / count;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        let value = bandData[row][col];
        if (value === 0 || value === -9999 || value === 999999) {
          bandData[row][col] = mean;
        }
      }
    }
  }
  /**
   * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGridObj(GridMBR, band = [0]) {
    let minRow = GridMBR[0];
    let minCol = GridMBR[1];
    let maxRow = GridMBR[2];
    let maxCol = GridMBR[3];
    let subGridData = [];
    for (let b of band) {
      let bandData = [];
      for (let row = minRow; row <= maxRow; row++) {
        let rowData = [];
        for (let col = minCol; col <= maxCol; col++) {
          rowData.push(this.data[b][row][col]);
        }
        bandData.push(rowData);
      }
      subGridData.push(bandData);
    }
    let subGrid = new Grid(GridMBR, subGridData);
    return subGrid;
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(MBR2) {
    let minLon = MBR2[0];
    let minLat = MBR2[1];
    let maxLon = MBR2[2];
    let maxLat = MBR2[3];
    let minCoord = this.getGridCoord([minLon, minLat]);
    let maxCoord = this.getGridCoord([maxLon, maxLat]);
    if (minCoord === null || maxCoord === null) {
      return null;
    } else {
      let minRow = minCoord[0];
      let minCol = minCoord[1];
      let maxRow = maxCoord[0];
      let maxCol = maxCoord[1];
      return [minRow, minCol, maxRow, maxCol];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(Point2) {
    if (PointOutsideMBR(Point2, this.MBR)) {
      return null;
    } else {
      let lon = Point2[0];
      let lat = Point2[1];
      let minLon = this.MBR[0];
      let minLat = this.MBR[1];
      let maxLon = this.MBR[2];
      let maxLat = this.MBR[3];
      let row = Math.floor((lat - minLat) / (maxLat - minLat) * this.rows);
      let col = Math.floor((lon - minLon) / (maxLon - minLon) * this.cols);
      return [row, col];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(GridCoord) {
    let row = GridCoord[0];
    let col = GridCoord[1];
    let minLon = this.MBR[0];
    let minLat = this.MBR[1];
    let maxLon = this.MBR[2];
    let maxLat = this.MBR[3];
    let lon = (col + 0.5) / this.cols * (maxLon - minLon) + minLon;
    let lat = (row + 0.5) / this.rows * (maxLat - minLat) + minLat;
    return [lon, lat];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(band) {
    if (!this.stasticsCache[band]) {
      let bandData = this.data[band];
      let max = bandData[0][0];
      let min = bandData[0][0];
      let sum2 = 0;
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          let value = bandData[row][col];
          if (value > max) {
            max = value;
          }
          if (value < min) {
            min = value;
          }
          sum2 += value;
        }
      }
      let mean = sum2 / (this.rows * this.cols);
      this.stasticsCache[band] = { max, min, mean };
    }
    return this.stasticsCache[band];
  }
  // Binarization a certain band of the grid; get a value, less than which is 0, greater than which is 1
  // 二值化网格数据，返回二值化后的网格数据
  // - threshold: 二值化阈值
  /**
   * 二值化网格数据，返回二值化后的网格数据
   * @param band - 波段号
   * @param threshold - 二值化阈值
   */
  binarization(band, threshold) {
    let bandData = this.data[band];
    let binarizationData = [];
    for (let row = 0; row < this.rows; row++) {
      let rowData = [];
      for (let col = 0; col < this.cols; col++) {
        let value = bandData[row][col];
        if (value < threshold) {
          rowData.push(0);
        } else {
          rowData.push(1);
        }
      }
      binarizationData.push(rowData);
    }
    return binarizationData;
  }
  /** 
  * the result grid size is [rows - 1, cols - 1], and the render function should move 1/2 grid size to the left and up
  */
  getCoutourCode(band, threshold) {
    let binarizationData = this.binarization(band, threshold);
    let contourCode = [];
    for (let row = 0; row < this.rows - 1; row++) {
      let rowData = [];
      for (let col = 0; col < this.cols - 1; col++) {
        let code = 0;
        code += binarizationData[row][col] * 8;
        code += binarizationData[row][col + 1] * 4;
        code += binarizationData[row + 1][col + 1] * 2;
        code += binarizationData[row + 1][col] * 1;
        rowData.push(code);
      }
      contourCode.push(rowData);
    }
    return contourCode;
  }
  getMean(band) {
    let bandData = this.data[band];
    let sum2 = 0;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        sum2 += bandData[row][col];
      }
    }
    return sum2 / (this.rows * this.cols);
  }
  getSorted1DArray(band) {
    let bandData = this.data[band];
    let array = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        array.push(bandData[row][col]);
      }
    }
    array.sort((a, b) => a - b);
    return array;
  }
  static fromFillValue(fillVal = 0, shape) {
    let data = [];
    for (let i = 0; i < shape[0]; i++) {
      let bandData = [];
      for (let j = 0; j < shape[1]; j++) {
        let rowData = [];
        for (let k = 0; k < shape[2]; k++) {
          rowData.push(fillVal);
        }
        bandData.push(rowData);
      }
      data.push(bandData);
    }
    return new Grid([0, 0, 0, 0], data);
  }
}
function binarization(grid, band, threshold) {
  let bandData = grid.data[band];
  let binarizationData = [];
  for (let row = 0; row < grid.rows; row++) {
    let rowData = [];
    for (let col = 0; col < grid.cols; col++) {
      let value = bandData[row][col];
      if (value < threshold) {
        rowData.push(0);
      } else {
        rowData.push(1);
      }
    }
    binarizationData.push(rowData);
  }
  return binarizationData;
}
function subdivide2QTree(grid, maxDepth) {
  let num = grid.rows * grid.cols;
  let maxDepth2 = findMaxDepth(num) + 3;
  if (maxDepth > maxDepth2 || maxDepth < 0) {
    maxDepth = maxDepth2;
  }
  let boundary = [0, 0, grid.rows - 1, grid.cols - 1];
  return getQTNode(boundary, 0, maxDepth);
}
function getQTNode(boundary, depth, maxDepth) {
  let node = {
    boundary,
    children: [],
    depth,
    maxDepth,
    isLeaf: false,
    isDivided: false
  };
  if (depth === maxDepth - 1) {
    node.isLeaf = true;
    return node;
  } else {
    node.isDivided = true;
    let minRow = boundary[0];
    let minCol = boundary[1];
    let maxRow = boundary[2];
    let maxCol = boundary[3];
    let midRow = (minRow + maxRow) / 2;
    midRow = Math.floor(midRow);
    let midCol = (minCol + maxCol) / 2;
    midCol = Math.floor(midCol);
    let topLeftMBR = [minRow, midCol, midRow, maxCol];
    let topRightMBR = [midRow, midCol, maxRow, maxCol];
    let bottomLeftMBR = [minRow, minCol, midRow, midCol];
    let bottomRightMBR = [midRow, minCol, maxRow, midCol];
    let topLeftNode = getQTNode(topLeftMBR, depth + 1, maxDepth);
    let topRightNode = getQTNode(topRightMBR, depth + 1, maxDepth);
    let bottomLeftNode = getQTNode(bottomLeftMBR, depth + 1, maxDepth);
    let bottomRightNode = getQTNode(bottomRightMBR, depth + 1, maxDepth);
    node.children.push(topLeftNode);
    node.children.push(topRightNode);
    node.children.push(bottomLeftNode);
    node.children.push(bottomRightNode);
    return node;
  }
}
function findMaxDepth(n) {
  let maxDepth = 0;
  let num = 1;
  while (num < n) {
    num *= 4;
    maxDepth++;
  }
  return maxDepth;
}
function deMaxMin(fft) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < fft.length; i++) {
    for (let j = 0; j < fft[0].length; j++) {
      if (fft[i][j] > max) {
        max = fft[i][j];
      }
      if (fft[i][j] < min) {
        min = fft[i][j];
      }
    }
  }
  for (let i = 0; i < fft.length; i++) {
    for (let j = 0; j < fft[0].length; j++) {
      if (fft[i][j] === max || fft[i][j] === min) {
        fft[i][j] = 0;
      }
    }
  }
}
const e = Math.E;
function interpolate(a0, a1, w) {
  return (a1 - a0) * (3 - w * 2) * w * w + a0;
}
function randomGradient(ix, iy) {
  const w = 8 * 32;
  const s = w / 2;
  let a = ix, b = iy;
  a *= 3284157443;
  b ^= a << s | a >> w - s;
  b *= 1911520717;
  a ^= b << s | b >> w - s;
  a *= 2048419325;
  const random = a * (3.14159265 / ~(~0 >>> 1));
  const v2 = {
    x: Math.cos(random),
    y: Math.sin(random)
  };
  return v2;
}
function dotGridGradient(ix, iy, x, y) {
  const gradient = randomGradient(ix, iy);
  const dx = x - ix;
  const dy = y - iy;
  return dx * gradient.x + dy * gradient.y;
}
function Perlin(X, Y) {
  const x0 = Math.floor(X);
  const x1 = x0 + 1;
  const y0 = Math.floor(Y);
  const y1 = y0 + 1;
  const sx = X - x0;
  const sy = Y - y0;
  const n0 = dotGridGradient(x0, y0, X, Y);
  const n1 = dotGridGradient(x1, y0, X, Y);
  const ix0 = interpolate(n0, n1, sx);
  const n2 = dotGridGradient(x0, y1, X, Y);
  const n3 = dotGridGradient(x1, y1, X, Y);
  const ix1 = interpolate(n2, n3, sx);
  const value = interpolate(ix0, ix1, sy);
  return value;
}
function dampedSin3D(x, y) {
  return Math.pow(e, -Math.pow(Math.sqrt(x * x + y * y), 1 / 2)) * Math.sin(Math.sqrt(x * x + y * y));
}
function Sin3D(x, y) {
  return Math.sin(Math.sqrt(x * x + y * y));
}
function worleyNoise(row, col, n) {
  const grid = new Array(row).fill(0).map(() => new Array(col).fill(0));
  const points = new Array(n).fill(0).map(() => ({
    x: Math.random() * row,
    y: Math.random() * col
  }));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let min = 1e5;
      for (let k = 0; k < n; k++) {
        const distance = Math.sqrt(
          Math.pow(points[k].x - i, 2) + Math.pow(points[k].y - j, 2)
        );
        if (distance < min) {
          min = distance;
        }
      }
      grid[i][j] = min;
    }
  }
  return grid;
}
function zebraNoise(row, col, n, mode = "horizontal") {
  const grid = new Array(row).fill(0).map(() => new Array(col).fill(0));
  const step = Math.floor(row / n);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mode === "vertical") {
        grid[i][j] = Math.floor(i / step) % 2 === 0 ? 1 : 0;
      } else if (mode === "horizontal") {
        grid[i][j] = Math.floor(j / step) % 2 === 0 ? 1 : 0;
      } else if (mode === "diagonal") {
        grid[i][j] = Math.floor((i + j) / step) % 2 === 0 ? 1 : 0;
      } else if (mode === "all") {
        grid[i][j] = Math.floor((i + j) / step) % 2 === 0 ? 1 : 0;
        grid[i][j] += Math.floor(i / step) % 2 === 0 ? 1 : 0;
        grid[i][j] += Math.floor(j / step) % 2 === 0 ? 1 : 0;
      }
    }
  }
  return grid;
}
class Geometry {
  constructor(coordinates, properties) {
    __publicField(this, "bbox", [Infinity, Infinity, -Infinity, -Infinity]);
    __publicField(this, "coordinates");
    __publicField(this, "properties");
    __publicField(this, "projection", SphericalMercator);
    this.coordinates = coordinates;
    if (properties) {
      this.properties = properties;
    }
    this.updateBBox();
  }
  toXY() {
  }
  set Properties(properties) {
    this.properties = properties;
  }
  clone() {
    const coordinates = this.coordinates.slice();
    const properties = { ...this.properties };
    return new this.constructor(coordinates, properties);
  }
  equals(geometry2) {
    return JSON.stringify(this.toGeoJSON()) === JSON.stringify(geometry2.toGeoJSON());
  }
  toGeoJSON() {
    let feature2 = {
      type: "Feature",
      geometry: {
        type: this.constructor.name,
        coordinates: this.coordinates
      }
      // properties: this.properties,
    };
    if (this.properties) {
      feature2.properties = this.properties;
    }
    if (this.bbox) {
      feature2.bbox = this.bbox;
    }
    return feature2;
  }
  static fromGeoJSON(feature2) {
    if (feature2.type === "Feature") {
      return this.fromFeature(feature2);
    } else if (feature2.type === "Geometry") {
      return this.fromGeometry(feature2);
    } else if (feature2.type === "FeatureCollection") {
      throw new Error(feature2.type + "is not supported");
    } else {
      throw new Error("Unknown GeoJSON type: " + feature2.type);
    }
  }
}
__publicField(Geometry, "fromFeature");
__publicField(Geometry, "fromGeometry");
class GeometryCollection {
  constructor(geometries, properties) {
    __publicField(this, "coordinates");
    __publicField(this, "geometries", []);
    __publicField(this, "bbox", [Infinity, Infinity, -Infinity, -Infinity]);
    __publicField(this, "properties");
    __publicField(this, "projection", SphericalMercator);
    if (properties) {
      this.properties = properties;
    }
    geometries.forEach((geometry2) => {
      this.geometries.push(geometry2);
      this.updateBBox(geometry2);
    });
  }
  toXY() {
  }
  // 未实现
  updateBBox(geometry2) {
    const bbox = geometry2.bbox;
    if (bbox) {
      this.bbox = mergeMBR(this.bbox, bbox);
    }
  }
  addGeometry(geometry2) {
    this.geometries.push(geometry2);
    this.updateBBox(geometry2);
  }
  _update(geometry2, index) {
    this.geometries[index] = geometry2;
    this.updateBBox(geometry2);
  }
  toGeoJSON() {
    let feature2 = {
      type: "Feature",
      geometry: {
        type: "GeometryCollection",
        geometries: this.geometries.map((geometry2) => geometry2.toGeoJSON().geometry)
      }
      // properties: this.properties,
    };
    if (this.properties) {
      feature2.properties = this.properties;
    }
    if (this.bbox) {
      feature2.bbox = this.bbox;
    }
    return feature2;
  }
}
const isPotentialGeoObject = isPotentialGeoObject$1;
class Point extends Geometry {
  // 默认为球面墨卡托投影
  get lon() {
    return this.coordinates[0];
  }
  get lat() {
    return this.coordinates[1];
  }
  constructor(coordinates, properties) {
    super(coordinates, properties);
  }
  updateBBox() {
    this.bbox = [this.coordinates[0], this.coordinates[1], this.coordinates[0], this.coordinates[1]];
  }
  toXY() {
    return this.projection.project(this.coordinates);
  }
  static isPoint(geometry2) {
    return geometry2 instanceof Point;
  }
  static fromGeometry(geometry2) {
    return new Point(geometry2.coordinates);
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "Point") {
      throw new Error(`The input geometry is not a Point: ${geometry2.type}`);
    }
    const pointGeometry = geometry2;
    if (properties) {
      return new Point(pointGeometry.coordinates, properties);
    } else {
      return new Point(pointGeometry.coordinates);
    }
  }
}
class MultiPoint extends GeometryCollection {
  constructor(geometries, properties) {
    var __super = (...args) => {
      super(...args);
      // 可以传入 点类型数组 但是会忽略每一个点的 properties
      // 因为 MultiPoint 本身有 properties
      // 建议在外部提取每一个点的 properties 再传入 到 MultiPoint 的 properties
      __publicField(this, "coordinates");
    };
    if (geometries[0] instanceof Point) {
      __super(geometries, properties);
      this.coordinates = geometries.map((geometry2) => geometry2.coordinates);
    } else {
      __super(
        geometries.map((coordinates) => new Point(coordinates)),
        properties
      );
      this.coordinates = geometries;
    }
  }
  toXY() {
    return this.geometries.map((geometry2) => geometry2.toXY());
  }
  getCoodinates() {
    return this.coordinates;
  }
  /**
   * - 计算多点的重心
   * - calculate centroid of MultiPoint
   * @param values - 可指定权重数组(可选) 会首先归一化权重数组
   * @returns {Point} 返回重心坐标
   * @see https://en.wikipedia.org/wiki/Centroid
   */
  centroid(values) {
    if (values) {
      let sum2 = 0;
      for (let i = 0; i < values.length; i++) {
        sum2 += values[i];
      }
      for (let i = 0; i < values.length; i++) {
        values[i] /= sum2;
      }
      let sumLon = 0, sumLat = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        let tmp = this.coordinates[i];
        sumLon += tmp[0] * values[i];
        sumLat += tmp[1] * values[i];
      }
      let lon = sumLon;
      let lat = sumLat;
      return new Point([lon, lat]);
    } else {
      let sumLon = 0, sumLat = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        let tmp = this.coordinates[i];
        sumLon += tmp[0];
        sumLat += tmp[1];
      }
      let lon = sumLon / this.coordinates.length;
      let lat = sumLat / this.coordinates.length;
      return new Point([lon, lat]);
    }
  }
  /**
   * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
   * @param geometry 
   */
  addGeometry(geometry2) {
    if (geometry2 instanceof Point) {
      this.geometries.push(geometry2);
      this.coordinates.push(geometry2.coordinates);
      this.updateBBox(geometry2);
    } else if (geometry2 instanceof MultiPoint) {
      this.geometries.concat(geometry2.geometries);
      this.coordinates.concat(geometry2.coordinates);
      this.updateBBox(geometry2);
    } else {
      this.geometries.push(new Point(geometry2));
      this.coordinates.push(geometry2);
      this.updateBBox(this.geometries[this.geometries.length - 1]);
    }
  }
  toGeoJSON() {
    let feature2 = {
      type: "Feature",
      geometry: {
        type: "MultiPoint",
        // 类型断言
        coordinates: this.geometries.map((geometry2) => geometry2.coordinates)
      }
    };
    if (this.properties) {
      feature2.properties = this.properties;
    }
    if (this.bbox) {
      feature2.bbox = this.bbox;
    }
    return feature2;
  }
  static isMultiPoint(geometry2) {
    return geometry2 instanceof MultiPoint;
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "MultiPoint") {
      throw new Error(`The input geometry is not a MultiPoint: ${geometry2.type}`);
    }
    const multiPointGeometry = geometry2;
    if (properties) {
      return new MultiPoint(multiPointGeometry.coordinates, properties);
    } else {
      return new MultiPoint(multiPointGeometry.coordinates);
    }
  }
  static fromGeometry(geometry2) {
    return new MultiPoint(geometry2.coordinates);
  }
}
function toPoint(...args) {
  if (args.length === 1) {
    if (!isPotentialGeoObject(args[0]) && args[0].length === 2) {
      return new Point(args[0]);
    } else if (isPotentialGeoObject(args[0])) {
      return new Point([args[0].lon || args[0].lng || args[0].x, args[0].lat || args[0].y], args[1]);
    } else {
      throw new Error("Invalid input");
    }
  } else if (args.length === 2) {
    if (typeof args[0] === "number" && typeof args[1] === "number") {
      return new Point([args[0], args[1]]);
    } else if (isPotentialGeoObject(args[0])) {
      return new Point([args[0].lon || args[0].lng || args[0].x, args[0].lat || args[0].y], args[1]);
    } else if (Array.isArray(args[0]) && args[0].length === 2) {
      return new Point(args[0], args[1]);
    } else {
      throw new Error("Invalid input");
    }
  } else {
    return new Point([args[0], args[1]], args[2]);
  }
}
function toMultiPoint(points, properties) {
  return new MultiPoint(points, properties);
}
class LineString extends Geometry {
  constructor(coordinates, properties) {
    super(coordinates, properties);
  }
  updateBBox() {
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
    for (const [x, y] of this.coordinates) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
    this.bbox = [minX, minY, maxX, maxY];
  }
  toXY() {
    return this.coordinates.map((point) => this.projection.project(point));
  }
  toMultiPoint() {
    return new MultiPoint(this.coordinates);
  }
  /**
   * 按照逆时针方向排序点
  */
  // sortPoints(){
  //     let centroid = this.calculateCentroid();
  //     let centroidXY = centroid.toXY();
  //     this.coordinates.sort((a, b) => {
  //         let angleA = getAngle(centroidXY, a.toXY());
  //         let angleB = getAngle(centroidXY, b.toXY());
  //         if(angleA < angleB){
  //             return -1;
  //         }else if(angleA > angleB){
  //             return 1;
  //         }else{
  //             return 0;
  //         }
  //     });
  // }
  static fromGeometry(geometry2) {
    return new LineString(geometry2.coordinates);
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "LineString") {
      throw new Error(`The input geometry is not a LineString: ${geometry2.type}`);
    }
    const pointGeometry = geometry2;
    return new LineString(pointGeometry.coordinates, properties);
  }
  static isLineString(lineString) {
    return lineString.type === "LineString";
  }
}
class MultiLineString extends GeometryCollection {
  constructor(geometries, properties) {
    var __super = (...args) => {
      super(...args);
      __publicField(this, "coordinates");
    };
    if (geometries[0] instanceof LineString) {
      __super(geometries, properties);
      this.coordinates = geometries.map((geometry2) => geometry2.coordinates);
    } else {
      __super(
        geometries.map((coordinates) => new LineString(coordinates)),
        properties
      );
      this.coordinates = geometries;
    }
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new MultiPoint(this.coordinates.flat());
  }
  toXY() {
    return this.geometries.map((lineString) => lineString.toXY());
  }
  addGeometry(geometry2) {
    if (geometry2 instanceof LineString) {
      this.geometries.push(geometry2);
      this.coordinates.push(geometry2.coordinates);
      this.updateBBox(geometry2);
    } else {
      this.geometries.push(new LineString(geometry2));
      this.coordinates.push(geometry2);
      this.updateBBox(this.geometries[this.geometries.length - 1]);
    }
  }
  toGeoJSON() {
    let feature2 = {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        // 类型断言
        coordinates: this.geometries.map((geometry2) => geometry2.coordinates)
      }
    };
    if (this.properties) {
      feature2.properties = this.properties;
    }
    if (this.bbox) {
      feature2.bbox = this.bbox;
    }
    return feature2;
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "MultiLineString") {
      throw new Error(`The input geometry is not a MultiLineString: ${geometry2.type}`);
    }
    const multiLineStringGeometry = geometry2;
    return new MultiLineString(multiLineStringGeometry.coordinates, properties);
  }
  static fromGeometry(geometry2) {
    return new MultiLineString(geometry2.coordinates);
  }
}
function toLineString(points) {
  return new LineString(points.map((point) => point.coordinates));
}
class Polygon extends Geometry {
  constructor(coordinates, properties) {
    super(coordinates, properties);
  }
  toXY() {
    return this.coordinates.map((ring) => ring.map((point) => this.projection.project(point)));
  }
  toMultiPoint() {
    return new MultiPoint(this.coordinates.flat());
  }
  updateBBox() {
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
    for (const ring of this.coordinates) {
      for (const [x, y] of ring) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
    this.bbox = [minX, minY, maxX, maxY];
  }
  static isPolygon(geometry2) {
    return geometry2 instanceof Polygon;
  }
  static fromGeometry(geometry2) {
    return new Polygon(geometry2.coordinates);
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "Polygon") {
      throw new Error(`The input geometry is not a Polygon: ${geometry2.type}`);
    }
    const pointGeometry = geometry2;
    return new Polygon(pointGeometry.coordinates, properties);
  }
}
class MultiPolygon extends GeometryCollection {
  constructor(geometries, properties) {
    var __super = (...args) => {
      super(...args);
      __publicField(this, "coordinates");
    };
    if (geometries[0] instanceof Polygon) {
      __super(geometries, properties);
      this.coordinates = geometries.map((geometry2) => geometry2.coordinates);
    } else {
      __super(
        geometries.map((coordinates) => new Polygon(coordinates)),
        properties
      );
      this.coordinates = geometries;
    }
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new MultiPoint(this.coordinates.flat().flat());
  }
  toXY() {
    return this.geometries.map((polygon) => polygon.toXY());
  }
  addGeometry(geometry2) {
    if (geometry2 instanceof Polygon) {
      this.geometries.push(geometry2);
      this.coordinates.push(geometry2.coordinates);
      this.updateBBox(geometry2);
    } else {
      this.geometries.push(new Polygon(geometry2));
      this.coordinates.push(geometry2);
      this.updateBBox(this.geometries[this.geometries.length - 1]);
    }
  }
  toGeoJSON() {
    let feature2 = {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        // 类型断言
        coordinates: this.geometries.map((geometry2) => geometry2.coordinates)
      }
    };
    if (this.properties) {
      feature2.properties = this.properties;
    }
    if (this.bbox) {
      feature2.bbox = this.bbox;
    }
    return feature2;
  }
  static fromFeature(feature2) {
    const { geometry: geometry2, properties } = feature2;
    if (geometry2.type !== "MultiPolygon") {
      throw new Error(`The input geometry is not a MultiPolygon: ${geometry2.type}`);
    }
    const multiPolygonGeometry = geometry2;
    return new MultiPolygon(multiPolygonGeometry.coordinates, properties);
  }
  static fromGeometry(geometry2) {
    return new MultiPolygon(geometry2.coordinates);
  }
}
class Circle {
  /**
   * 构造函数
   * @param x - 圆心 x 坐标 
   * @param y - 圆心 y 坐标
   * @param r - 半径
   */
  constructor(x, y, r) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "r");
    __publicField(this, "rSquared");
    this.x = x;
    this.y = y;
    this.r = r;
    this.rSquared = this.r * this.r;
  }
  /**
   * 判断点是否在圆内
   * @param point - 点坐标
   * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
   * @returns {boolean} - true if the point is inside the circle
   */
  contains(point, threshold = 18e8) {
    let x = point[0];
    let y = point[1];
    return Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) - this.rSquared <= threshold;
  }
  /**
   * （仅平面下保证有效）判断圆是否与 MBR 相交
   * @param range - MBR
   * @returns {boolean} - true if the circle intersects the MBR
   */
  intersects(range) {
    let rect = mbrToRectangle(range);
    let xDist = Math.abs(rect.x - this.x);
    let yDist = Math.abs(rect.y - this.y);
    let r = this.r;
    let w = rect.w / 2;
    let h = rect.h / 2;
    let edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
    if (xDist > r + w || yDist > r + h)
      return false;
    if (xDist <= w || yDist <= h)
      return true;
    return edges <= this.rSquared;
  }
  static isCircle(obj) {
    return obj instanceof Circle;
  }
}
function fromGeometryObj(geometry2) {
  switch (geometry2.type) {
    case "Point":
      return Point.fromGeometry(geometry2);
    case "LineString":
      return LineString.fromGeometry(geometry2);
    case "Polygon":
      return Polygon.fromGeometry(geometry2);
    case "MultiPoint":
      return MultiPoint.fromGeometry(geometry2);
    case "MultiLineString":
      return MultiLineString.fromGeometry(geometry2);
    case "MultiPolygon":
      return MultiPolygon.fromGeometry(geometry2);
    case "GeometryCollection":
      return collectionFromGeometry(geometry2);
    default:
      throw new Error("Unknown geometry type: " + geometry2.type + " in fromGeometryObj");
  }
}
function fromFeatureObj(feature2) {
  if (feature2.type === "Feature") {
    const geometry2 = feature2.geometry;
    switch (geometry2.type) {
      case "Point":
        return Point.fromFeature(feature2);
      case "LineString":
        return LineString.fromFeature(feature2);
      case "Polygon":
        return Polygon.fromFeature(feature2);
      case "MultiPoint":
        return MultiPoint.fromFeature(feature2);
      case "MultiLineString":
        return MultiLineString.fromFeature(feature2);
      case "MultiPolygon":
        return MultiPolygon.fromFeature(feature2);
      case "GeometryCollection":
        return collectionFromFeature(feature2);
      default:
        throw new Error("Unknown geometry type: " + geometry2.type + " in fromGeometryObj");
    }
  } else if (feature2.type === "FeatureCollection") {
    return collectionFromFeature(feature2);
  } else {
    throw new Error("Unknown GeoJSON type");
  }
}
function collectionFromFeature(feature2) {
  if (feature2.type === "Feature") {
    const geometry2 = feature2.geometry;
    if (geometry2.type === "GeometryCollection") {
      const geometries = geometry2.geometries.map((geo) => fromGeometryObj(geo));
      return new GeometryCollection(geometries, feature2.properties);
    } else {
      throw new Error("The input feature is not a GeometryCollection: " + geometry2.type);
    }
  } else if (feature2.type === "FeatureCollection") {
    const geometries = feature2.features.map((f) => fromFeatureObj(f));
    return new GeometryCollection(geometries);
  } else {
    throw new Error("Unknown GeoJSON type");
  }
}
function collectionFromGeometry(geometry2) {
  if (geometry2.type === "GeometryCollection") {
    const geometries = geometry2.geometries.map((geo) => fromGeometryObj(geo));
    return new GeometryCollection(geometries);
  } else {
    throw new Error("The input geometry is not a GeometryCollection: " + geometry2.type);
  }
}
class QuadTree {
  constructor(boundary, capacity, maxDepth = 10) {
    // 四叉树基础类
    __publicField(this, "capacity");
    __publicField(this, "boundary");
    __publicField(this, "points");
    // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    __publicField(this, "northWest");
    __publicField(this, "northEast");
    __publicField(this, "southWest");
    __publicField(this, "southEast");
    __publicField(this, "isDivided");
    __publicField(this, "depth");
    __publicField(this, "maxDepth", 10);
    this.capacity = capacity;
    this.boundary = boundary;
    this.points = [];
    this.isDivided = false;
    this.northWest = null;
    this.northEast = null;
    this.southWest = null;
    this.southEast = null;
    this.depth = 0;
    this.maxDepth = maxDepth;
  }
  contains(point, boundary) {
    return pointInMBR(point, boundary);
  }
  intersects(boundary, range) {
    return intersectsMBR(boundary, range);
  }
  /**
   * 插入一个点
   * @param point - 点的坐标 
   * @returns {boolean} - 是否插入成功
   */
  insert(point) {
    if (!this.contains(point, this.boundary)) {
      return false;
    }
    if (this.points.length < this.capacity && this.depth < this.maxDepth) {
      this.points.push(point);
      return true;
    } else {
      if (!this.isDivided) {
        this.subdivide();
      }
      this.northEast.insert(point);
      this.northWest.insert(point);
      this.southEast.insert(point);
      this.southWest.insert(point);
      return true;
    }
  }
  get pointsList() {
    if (this.points.length === 0) {
      return null;
    } else {
      return this.points;
    }
  }
  /**
   * 剖分当前节点
   */
  subdivide() {
    let x = this.boundary[0];
    let y = this.boundary[1];
    let w = this.boundary[2] - x;
    let h = this.boundary[3] - y;
    let nw = new QuadTree([x, y + h / 2, x + w / 2, y + h], this.capacity);
    let ne = new QuadTree([x + w / 2, y + h / 2, x + w, y + h], this.capacity);
    let sw = new QuadTree([x, y, x + w / 2, y + h / 2], this.capacity);
    let se = new QuadTree([x + w / 2, y, x + w, y + h / 2], this.capacity);
    this.northWest = nw;
    this.northEast = ne;
    this.southWest = sw;
    this.southEast = se;
    this.isDivided = true;
    this.depth++;
  }
  /**
   * 四叉树范围查询
   * - 输入一个矩形范围，返回范围内的所有点
   * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
   * @param range{MBR} - 查询范围矩形
   * @returns {Array<[number,number]>}
   */
  queryRange(range) {
    let pointsInRange = [];
    if (!this.intersects(this.boundary, range)) {
      return pointsInRange;
    }
    for (let i = 0; i < this.points.length; i++) {
      if (this.contains(this.points[i], range)) {
        pointsInRange.push(this.points[i]);
      }
    }
    if (this.northWest === null) {
      return pointsInRange;
    }
    pointsInRange.push(...this.northWest.queryRange(range));
    pointsInRange.push(...this.northEast.queryRange(range));
    pointsInRange.push(...this.southWest.queryRange(range));
    pointsInRange.push(...this.southEast.queryRange(range));
    return pointsInRange;
  }
  /**
   * you need a customRange object to support custom range query
   * - note : this function has the SAME LOGIC as queryRange.
   * @see customRange
   */
  customQuery(range) {
    let pointsInRange = [];
    if (!range.intersects(this.boundary)) {
      return pointsInRange;
    }
    for (let i = 0; i < this.points.length; i++) {
      if (range.contains(this.points[i])) {
        pointsInRange.push(this.points[i]);
      }
    }
    if (this.northWest === null) {
      return pointsInRange;
    }
    pointsInRange.push(...this.northWest.customQuery(range));
    pointsInRange.push(...this.northEast.customQuery(range));
    pointsInRange.push(...this.southWest.customQuery(range));
    pointsInRange.push(...this.southEast.customQuery(range));
    return pointsInRange;
  }
}
function isEPSG3857(srsname) {
  if (!srsname)
    return false;
  return /^(epsg:|EPSG:)?3857$/.test(srsname) || /^(epsg:|EPSG:)?900913$/.test(srsname) || /^(epsg-|EPSG-)?3857$/.test(srsname) || /^(epsg-|EPSG-)?900913$/.test(srsname) || srsname === "900913" || srsname === "3857";
}
function isEPSG4326(srsname) {
  if (!srsname)
    return false;
  return /^(epsg:|EPSG:)?4326$/.test(srsname) || /^(epsg-|EPSG-)?4326$/.test(srsname) || srsname === "4326" || srsname.toLowerCase() === "wgs84";
}
const Earth = {
  R: 6371e3,
  projection: null,
  /**
   * haversine 计算球面两点之间的距离
   * @see https://rosettacode.org/wiki/Haversine_formula
   * @param latlng1 
   * @param latlng2 
   * @returns 
   */
  distance(latlng1, latlng2) {
    return haversine(latlng1, latlng2, this.R);
  },
  /**
   * - 使用格林公式及球面积分直接计算球面多边形的面积
   * - calculate the area of a spherical polygon using the spherical excess method
   * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
   * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
   * @returns {number} - 面积
   */
  area(points) {
    return sphericalArea(points, this.R);
  }
};
const MAXLAT = 85.05112877980659;
const EPSG3857 = extend$1({}, Earth, {
  R: 6378137,
  code: "EPSG:3857",
  projection: SphericalMercator,
  wrapLng: [-180, 180],
  wrapLat: [-MAXLAT, MAXLAT],
  area(points) {
    return sphericalArea(points, this.R);
  },
  planeArea(points) {
    return planePolygonArea(points, this.R);
  }
});
const EPSG900913 = extend$1({}, EPSG3857, {
  code: "EPSG:900913"
});
class Queue {
  constructor() {
    __publicField(this, "data", []);
  }
  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
  put(item) {
    this.push(item);
  }
  get() {
    return this.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}
class PriorityQueue {
  constructor() {
    __publicField(this, "elements", []);
  }
  empty() {
    return this.elements.length === 0;
  }
  put(item, priority) {
    this.elements.push([priority, item]);
    this.elements.sort((a, b) => a[0] - b[0]);
  }
  get() {
    var _a;
    return (_a = this.elements.shift()) == null ? void 0 : _a[1];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}
function gridDijkstra(graph, start, goal) {
  const frontier = new PriorityQueue();
  frontier.put(start, 0);
  let cameFrom = /* @__PURE__ */ new Map();
  let costSoFar = /* @__PURE__ */ new Map();
  cameFrom.set(start.join(","), null);
  costSoFar.set(start.join(","), 0);
  while (!frontier.isEmpty()) {
    const current = frontier.get();
    if (goal && current.join(",") === goal.join(",")) {
      break;
    }
    for (const next of graph.neighbors(current)) {
      if (graph.weights(current, next) === Infinity)
        continue;
      const newCost = costSoFar.get(current.join(",")) + graph.weights(current, next);
      if (!costSoFar.has(next.join(",")) || newCost < costSoFar.get(next.join(","))) {
        costSoFar.set(next.join(","), newCost);
        const priority = newCost;
        frontier.put(next, priority);
        cameFrom.set(next.join(","), current);
      }
    }
  }
  return cameFrom;
}
function dijkstra(graph, start) {
  const frontier = new PriorityQueue();
  frontier.put(start, 0);
  let cameFrom = /* @__PURE__ */ new Map();
  let costSoFar = /* @__PURE__ */ new Map();
  cameFrom.set(start, null);
  costSoFar.set(start, 0);
  while (!frontier.isEmpty()) {
    const current = frontier.get();
    for (const next of graph.neighbors(current)) {
      if (graph.weights(current, next) === Infinity)
        continue;
      const newCost = costSoFar.get(current) + graph.weights(current, next);
      if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
        costSoFar.set(next, newCost);
        const priority = newCost;
        frontier.put(next, priority);
        cameFrom.set(next, current);
      }
    }
  }
  return cameFrom;
}
function createGraph(nodes, edges) {
  const graph = {
    nodes,
    edges: /* @__PURE__ */ new Map(),
    neighbors(node) {
      return graph.edges.get(node) || [];
    }
  };
  for (const [from, to, weight = 1] of edges) {
    if (!graph.edges.has(from)) {
      graph.edges.set(from, []);
    }
    graph.edges.get(from).push(to);
    if (!graph.edgesWeights) {
      graph.edgesWeights = /* @__PURE__ */ new Map();
    }
    if (!graph.edgesWeights.has(from)) {
      graph.edgesWeights.set(from, /* @__PURE__ */ new Map());
    }
    graph.edgesWeights.get(from).set(to, weight);
  }
  if (graph.edgesWeights) {
    graph.weights = (from, to) => {
      return graph.edgesWeights.get(from).get(to) || Infinity;
    };
  }
  return graph;
}
function createGridGraph(grid, strategy, mooreNeighborhood = false) {
  const cols = grid[0].length;
  const rows = grid.length;
  const graph = {
    grid,
    cols,
    rows,
    neighbors(node) {
      const [x, y] = node;
      let result = [];
      if (mooreNeighborhood) {
        result = [
          [x - 1, y - 1],
          [x - 1, y + 1],
          [x + 1, y - 1],
          [x + 1, y + 1],
          [x + 1, y],
          [x, y - 1],
          [x - 1, y],
          [x, y + 1]
        ];
      } else {
        result = [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1]];
      }
      if ((x + y) % 2 === 0) {
        result.reverse();
      }
      return result.filter(([x2, y2]) => x2 >= 0 && x2 < cols && y2 >= 0 && y2 < rows);
    }
  };
  if (strategy) {
    graph.weights = (from, to) => {
      return strategy(grid[from[1]][from[0]], grid[to[1]][to[0]]);
    };
  }
  return graph;
}
function breadthFirstSearch(graph, start) {
  const frontier = new Queue();
  frontier.put(start);
  const cameFrom = /* @__PURE__ */ new Map();
  cameFrom.set(start, null);
  while (!frontier.isEmpty()) {
    const current = frontier.get();
    for (const next of graph.neighbors(current)) {
      if (graph.weights(current, next) === Infinity)
        continue;
      if (!cameFrom.has(next)) {
        frontier.put(next);
        cameFrom.set(next, current);
      }
    }
  }
  return cameFrom;
}
function gridBreadthFirstSearch(graph, start, goal) {
  const frontier = new Queue();
  frontier.put(start);
  let cameFrom = /* @__PURE__ */ new Map();
  cameFrom.set(start.join(","), null);
  while (!frontier.isEmpty()) {
    const current = frontier.get();
    if (goal && current.join(",") === goal.join(",")) {
      break;
    }
    for (const next of graph.neighbors(current)) {
      if (graph.weights(current, next) === Infinity)
        continue;
      if (!cameFrom.has(next.join(","))) {
        frontier.put(next);
        cameFrom.set(next.join(","), current);
      }
    }
  }
  return cameFrom;
}
function reconstructPath(cameFrom, start, goal) {
  let current = goal;
  let path = [];
  if (!cameFrom.has(goal)) {
    return [];
  }
  while (current !== start) {
    path.push(current);
    current = cameFrom.get(current);
  }
  path.push(start);
  path.reverse();
  return path;
}
function gridReconstructPath(cameFrom, start, goal) {
  let current = goal;
  let path = [];
  if (!cameFrom.has(goal.join(","))) {
    return [];
  }
  while (current && current.join(",") !== start.join(",")) {
    path.push(current);
    current = cameFrom.get(current.join(","));
  }
  path.push(start);
  path.reverse();
  return path;
}
function heuristic(a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function gridAstar(graph, start, goal) {
  const frontier = new PriorityQueue();
  frontier.put(start, 0);
  let cameFrom = /* @__PURE__ */ new Map();
  let costSoFar = /* @__PURE__ */ new Map();
  cameFrom.set(start.join(","), null);
  costSoFar.set(start.join(","), 0);
  while (!frontier.isEmpty()) {
    const current = frontier.get();
    if (current.join(",") === goal.join(",")) {
      break;
    }
    for (const next of graph.neighbors(current)) {
      if (graph.weights(current, next) === Infinity)
        continue;
      const newCost = costSoFar.get(current.join(",")) + graph.weights(current, next);
      if (!costSoFar.has(next.join(",")) || newCost < costSoFar.get(next.join(","))) {
        costSoFar.set(next.join(","), newCost);
        const priority = newCost + heuristic(next, goal);
        frontier.put(next, priority);
        cameFrom.set(next.join(","), current);
      }
    }
  }
  return cameFrom;
}
var stretchType = /* @__PURE__ */ ((stretchType2) => {
  stretchType2[stretchType2["linear"] = 0] = "linear";
  stretchType2[stretchType2["square"] = 1] = "square";
  stretchType2[stretchType2["log"] = 2] = "log";
  stretchType2[stretchType2["power"] = 3] = "power";
  stretchType2[stretchType2["groupStretch"] = 4] = "groupStretch";
  return stretchType2;
})(stretchType || {});
var colorListType = /* @__PURE__ */ ((colorListType2) => {
  colorListType2[colorListType2["default"] = 0] = "default";
  return colorListType2;
})(colorListType || {});
function linearStretch(value, statistics) {
  return (value - statistics.min) / (statistics.max - statistics.min);
}
function squareStretch(value, statistics) {
  return Math.sqrt((value - statistics.min) / (statistics.max - statistics.min));
}
function logStretch(value, statistics) {
  return Math.log((value - statistics.min) / (statistics.max - statistics.min) + 1);
}
function powerStretch(value, statistics) {
  return Math.pow((value - statistics.min) / (statistics.max - statistics.min), 2);
}
function groupStretch(value, statistics) {
  let threshold = 0.1;
  if (value < statistics.mean - threshold || value > statistics.mean + threshold) {
    return 0;
  } else {
    return (value - statistics.min) / (statistics.max - statistics.min);
  }
}
function stretchFactory(type, isReverse) {
  switch (type) {
    case 0:
      if (isReverse) {
        return (value, statistics) => 1 - linearStretch(value, statistics);
      } else {
        return linearStretch;
      }
    case 1:
      if (isReverse) {
        return (value, statistics) => 1 - squareStretch(value, statistics);
      } else {
        return squareStretch;
      }
    case 2:
      if (isReverse) {
        return (value, statistics) => 1 - logStretch(value, statistics);
      } else {
        return logStretch;
      }
    case 3:
      if (isReverse) {
        return (value, statistics) => 1 - powerStretch(value, statistics);
      } else {
        return powerStretch;
      }
    case 4:
      if (isReverse) {
        return (value, statistics) => 1 - groupStretch(value, statistics);
      } else {
        return groupStretch;
      }
    default:
      throw new Error("未知的拉伸类型");
  }
}
function simpleColorBand(statistics, value, strachFunc = linearStretch) {
  let stretchValue = strachFunc(value, statistics);
  let colorValue = Math.floor(stretchValue * 255);
  return `rgb(${colorValue},${colorValue},${colorValue})`;
}
function trueColorBand(statistics, value, strachFunc = linearStretch) {
  let r = Math.floor(strachFunc(value[0], statistics[0]) * 255);
  let g = Math.floor(strachFunc(value[1], statistics[1]) * 255);
  let b = Math.floor(strachFunc(value[2], statistics[2]) * 255);
  return `rgb(${r},${g},${b})`;
}
function trueColorBandFactory(type, isReverse) {
  return (statistics, value) => trueColorBand(statistics, value, stretchFactory(type, isReverse));
}
function simpleColorBandFactory(type, isReverse) {
  return (statistics, value) => simpleColorBand(statistics, value, stretchFactory(type, isReverse));
}
const defaultColorList = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"];
const CountourColorList = [
  "#ffffff00",
  "#ff9a00",
  "#3ec1d3",
  "#6c5b7b",
  "#355c7d",
  "#f8b500",
  "#119da4",
  "#ff165d",
  "#8ECFC9",
  "#FFBE7A",
  "#82B0D2",
  "#BEB8DC",
  "#E7DAD2",
  "#119da4",
  "#ff165d",
  "#ffffff00"
];
function pseudoColorBand(statistics, value, level, colorList = defaultColorList, strachFunc = linearStretch) {
  let stretchValue = strachFunc(value, statistics);
  let colorIndex = 0;
  if (level === void 0) {
    colorIndex = Math.floor(stretchValue * colorList.length);
  } else {
    for (let i = 0; i < level.length; i++) {
      if (stretchValue < level[i]) {
        colorIndex = i;
        break;
      }
    }
  }
  return colorList[colorIndex];
}
function pseudoColorBandFactory(type, level, colorList = defaultColorList) {
  return (statistics, value) => pseudoColorBand(statistics, value, level, colorList, stretchFactory(type));
}
function binaryColorBand(value, colorList = ["#000000", "#ffffff"]) {
  if (value === 0) {
    return colorList[0];
  } else {
    return colorList[1];
  }
}
function simplePseudoColorBand(value, colorList = CountourColorList) {
  return colorList[value];
}
function hist(grid2D, stretch = 0, statistics) {
  let histList = new Array(256).fill(0);
  let strachFunc = stretchFactory(stretch);
  if (statistics === void 0) {
    statistics = {
      max: 0,
      min: 0,
      mean: 0
    };
    for (let i = 0; i < grid2D.length; i++) {
      for (let j = 0; j < grid2D[0].length; j++) {
        statistics.max = Math.max(statistics.max, grid2D[i][j]);
        statistics.min = Math.min(statistics.min, grid2D[i][j]);
        statistics.mean += grid2D[i][j];
      }
    }
  }
  for (let i = 0; i < grid2D.length; i++) {
    for (let j = 0; j < grid2D[0].length; j++) {
      let stretchValue = strachFunc(grid2D[i][j], statistics);
      let colorValue = Math.floor(stretchValue * 255);
      histList[colorValue] += 1;
    }
  }
  return histList;
}
function reactGrid2d(canavs, colRow, Rect, XY, callback) {
  let cellWidth = Rect.w / colRow[0];
  let cellHeight = Rect.h / colRow[1];
  let ctx2 = canavs.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  ctx2.strokeStyle = "red";
  ctx2.lineWidth = 1;
  if (XY[0] && XY[1]) {
    let [col, row] = XY2ColRow(colRow, Rect, XY);
    ctx2.strokeRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
    callback && callback(col, row);
  }
}
function XY2ColRow(colRow, Rect, XY) {
  let cellWidth = Rect.w / colRow[0];
  let cellHeight = Rect.h / colRow[1];
  let col = Math.floor((XY[0] - Rect.x) / cellWidth);
  let row = Math.floor((XY[1] - Rect.y) / cellHeight);
  return [col, row];
}
function drawGrid2d(canavs, grid2D, Rect, statistics, colorBand = simpleColorBand, GridMBR) {
  let cellWidth = Rect.w / grid2D[0].length;
  let cellHeight = Rect.h / grid2D.length;
  let ctx2 = canavs.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  for (let row = 0; row < grid2D.length; row++) {
    for (let col = 0; col < grid2D[0].length; col++) {
      let value = grid2D[row][col];
      let color = colorBand(statistics, value);
      ctx2.fillStyle = color;
      ctx2.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
      ctx2.strokeStyle = "gray";
      ctx2.lineWidth = 1;
      ctx2.strokeRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
      ctx2.save();
      ctx2.fillStyle = "green";
      ctx2.font = "30px serif";
      ctx2.fillText(value.toString(), Rect.x + col * cellWidth, Rect.y + row * cellHeight + 30);
      ctx2.restore();
    }
  }
  if (GridMBR) {
    let [minX, minY, maxX, maxY] = GridMBR;
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 1;
    ctx2.strokeRect(Rect.x + minX * cellWidth, Rect.y + minY * cellHeight, (maxX - minX) * cellWidth, (maxY - minY) * cellHeight);
  }
  ctx2.restore();
}
function drawArrowField(canavs, colRow, Rect, toDict, color = "gray", path) {
  let cellWidth = Rect.w / colRow[0];
  let cellHeight = Rect.h / colRow[1];
  let ctx2 = canavs.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  ctx2.save();
  for (let row = 0; row < colRow[0]; row++) {
    for (let col = 0; col < colRow[1]; col++) {
      let to = toDict.get([col, row].join(","));
      if (to) {
        let fromX = Rect.x + col * cellWidth + cellWidth / 2;
        let fromY = Rect.y + row * cellHeight + cellHeight / 2;
        let toX = Rect.x + to[0] * cellWidth + cellWidth / 2;
        let toY = Rect.y + to[1] * cellHeight + cellHeight / 2;
        if (path && path.find(([x, y]) => x === col && y === row)) {
          drawArrow(ctx2, fromX, fromY, toX, toY, "red");
          if (to[0] === path[0][0] && to[1] === path[0][1]) {
            ctx2.fillStyle = "green";
            ctx2.beginPath();
            ctx2.arc(toX, toY, 10, 0, 2 * Math.PI);
            ctx2.fill();
          }
          if (to[0] === path[path.length - 2][0] && to[1] === path[path.length - 2][1]) {
            ctx2.fillStyle = "blue";
            ctx2.beginPath();
            ctx2.arc(fromX, fromY, 10, 0, 2 * Math.PI);
            ctx2.fill();
          }
        } else {
          drawArrow(ctx2, fromX, fromY, toX, toY, color);
        }
      } else {
        ctx2.fillStyle = color;
        ctx2.fillRect(Rect.x + col * cellWidth + cellWidth / 2 - 2, Rect.y + row * cellHeight + cellHeight / 2 - 2, 4, 4);
      }
    }
  }
  ctx2.restore();
}
function drawArrow(ctx2, fromX, fromY, toX, toY, color = "green") {
  ctx2.strokeStyle = color;
  ctx2.lineWidth = 2;
  ctx2.beginPath();
  ctx2.moveTo(fromX, fromY);
  ctx2.lineTo(toX, toY);
  ctx2.stroke();
  let headlen = 10;
  let angle = Math.atan2(toY - fromY, toX - fromX);
  ctx2.beginPath();
  ctx2.moveTo(toX, toY);
  ctx2.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx2.moveTo(toX, toY);
  ctx2.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx2.stroke();
}
function binDrawGrid2d(canavs, grid2D, Rect, colorBand = binaryColorBand) {
  let cellWidth = Rect.w / grid2D[0].length;
  let cellHeight = Rect.h / grid2D.length;
  let ctx2 = canavs.getContext("2d");
  ctx2.save();
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  for (let row = 0; row < grid2D.length; row++) {
    for (let col = 0; col < grid2D[0].length; col++) {
      let value = grid2D[row][col];
      let color = colorBand(value);
      ctx2.fillStyle = color;
      ctx2.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
    }
  }
  ctx2.restore();
}
function drawCountour(canavs, countourCodeGrid, Rect, strokeColor = "white") {
  let cellWidth = Rect.w / (countourCodeGrid[0].length + 1);
  let cellHeight = Rect.h / (countourCodeGrid.length + 1);
  let ctx2 = canavs.getContext("2d");
  ctx2.save();
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  for (let row = 0; row < countourCodeGrid.length; row++) {
    for (let col = 0; col < countourCodeGrid[0].length; col++) {
      let value = countourCodeGrid[row][col];
      let rect = {
        x: Rect.x + col * cellWidth + cellWidth / 2,
        y: Rect.y + row * cellHeight + cellHeight / 2,
        w: cellWidth,
        h: cellHeight
      };
      countourCase(value, rect, ctx2, strokeColor);
    }
  }
  ctx2.restore();
}
function countourCase(countourCode, cell, ctx2, strokeColor = "white") {
  ctx2.strokeStyle = strokeColor;
  switch (countourCode) {
    case 0:
      break;
    case 1:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.stroke();
      break;
    case 2:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 3:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 4:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 5:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 6:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.stroke();
      break;
    case 7:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y);
      ctx2.stroke();
      break;
    case 8:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y);
      ctx2.stroke();
      break;
    case 9:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.stroke();
      break;
    case 10:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.stroke();
      break;
    case 11:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 12:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 13:
      ctx2.beginPath();
      ctx2.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
      ctx2.stroke();
      break;
    case 14:
      ctx2.beginPath();
      ctx2.moveTo(cell.x, cell.y + cell.h / 2);
      ctx2.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
      ctx2.stroke();
      break;
  }
}
function drawQTree2d(canvas2, rect, QTree, grid, colorBand = simpleColorBand, value, statistics) {
  let ctx2 = canvas2.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  let tmpgrid = grid.getSubGridObj(QTree.boundary);
  let tmpstatistics = tmpgrid.getBandStatistics(0);
  let tmpvalue = tmpstatistics.mean;
  if (!statistics) {
    statistics = tmpstatistics;
  } else {
    statistics.max = Math.max(statistics.max, tmpstatistics.max);
    statistics.min = Math.min(statistics.min, tmpstatistics.min);
    statistics.mean = (statistics.mean + tmpstatistics.mean) / 2;
  }
  if (!value) {
    value = tmpvalue;
  }
  let color = colorBand(statistics, tmpvalue);
  ctx2.fillStyle = color;
  ctx2.fillRect(rect.x, rect.y, rect.w, rect.h);
  requestAnimationFrame(() => {
    if (QTree.isDivided) {
      let subRect = [
        { x: rect.x + rect.w / 2, y: rect.y, w: rect.w / 2, h: rect.h / 2 },
        { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2, w: rect.w / 2, h: rect.h / 2 },
        { x: rect.x, y: rect.y, w: rect.w / 2, h: rect.h / 2 },
        { x: rect.x, y: rect.y + rect.h / 2, w: rect.w / 2, h: rect.h / 2 }
      ];
      drawQTree2d(canvas2, subRect[0], QTree.children[0], grid, colorBand, value, statistics);
      drawQTree2d(canvas2, subRect[1], QTree.children[1], grid, colorBand, value, statistics);
      drawQTree2d(canvas2, subRect[2], QTree.children[2], grid, colorBand, value, statistics);
      drawQTree2d(canvas2, subRect[3], QTree.children[3], grid, colorBand, value, statistics);
    }
  });
}
function drawSample(canvas2, rect, sample2, style2 = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, isText = false, statistics) {
  let ctx2 = canvas2.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  if (!statistics) {
    statistics = {
      max: Math.max(...sample2),
      min: Math.min(...sample2),
      mean: sample2.reduce((a, b) => a + b) / sample2.length
    };
  }
  ctx2.fillStyle = style2.backgroundColor;
  ctx2.fillRect(rect.x, rect.y, rect.w, rect.h);
  ctx2.fillStyle = style2.color;
  ctx2.lineWidth = 1;
  let r = 2;
  for (let i = 0; i < sample2.length; i++) {
    let x = rect.x + rect.w * i / sample2.length;
    let y = rect.y + rect.h * (1 - (sample2[i] - statistics.min) / (statistics.max - statistics.min));
    ctx2.beginPath();
    ctx2.arc(x, y, r, 0, 2 * Math.PI);
    ctx2.fill();
  }
  ctx2.strokeStyle = style2.color;
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + rect.h * (1 - (sample2[0] - statistics.min) / (statistics.max - statistics.min)));
  for (let i = 0; i < sample2.length; i++) {
    let x = rect.x + rect.w * i / sample2.length;
    let y = rect.y + rect.h * (1 - (sample2[i] - statistics.min) / (statistics.max - statistics.min));
    ctx2.lineTo(x, y);
  }
  ctx2.stroke();
  ctx2.strokeStyle = "white";
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + 12);
  ctx2.lineTo(rect.x + rect.w, rect.y + 12);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + rect.h);
  ctx2.lineTo(rect.x + rect.w, rect.y + rect.h);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + rect.h / 2);
  ctx2.lineTo(rect.x + rect.w, rect.y + rect.h / 2);
  ctx2.stroke();
  ctx2.fillText(statistics.max.toFixed(2), rect.x, rect.y + 12);
  ctx2.fillText(statistics.min.toFixed(2), rect.x, rect.y + rect.h);
  ctx2.fillText(statistics.mean.toFixed(2), rect.x, rect.y + rect.h / 2);
  if (isText) {
    ctx2.fillStyle = "green";
    ctx2.font = "12px serif";
    for (let i = 0; i < sample2.length; i += 16) {
      let x = rect.x + rect.w * i / sample2.length;
      let y = rect.y + rect.h * (1 - (sample2[i] - statistics.min) / (statistics.max - statistics.min));
      ctx2.fillText(sample2[i].toFixed(2), x, y);
    }
  }
}
function drawSample2(canvas2, rect, sample2, style2 = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, statistics, isText = false) {
  let ctx2 = canvas2.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  if (!statistics) {
    statistics = {
      max: Math.max(...sample2),
      min: Math.min(...sample2),
      mean: sample2.reduce((a, b) => a + b) / sample2.length
    };
  }
  ctx2.fillStyle = style2.backgroundColor;
  ctx2.fillRect(rect.x, rect.y, rect.w, rect.h);
  ctx2.fillStyle = style2.color;
  let barWidth = rect.w / sample2.length;
  for (let i = 0; i < sample2.length; i++) {
    let x = rect.x + barWidth * i;
    let y = rect.y + rect.h * (1 - (sample2[i] - statistics.min) / (statistics.max - statistics.min));
    ctx2.fillRect(x, y, barWidth, rect.h - y + rect.y);
  }
  if (isText) {
    ctx2.fillStyle = "green";
    ctx2.font = "12px serif";
    ctx2.fillText(statistics.max.toFixed(2), rect.x, rect.y + 12);
    ctx2.fillText(statistics.min.toFixed(2), rect.x, rect.y + rect.h);
    ctx2.fillText(statistics.mean.toFixed(2), rect.x, rect.y + rect.h / 2);
  }
  ctx2.strokeStyle = "white";
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + 12);
  ctx2.lineTo(rect.x + rect.w, rect.y + 12);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + rect.h);
  ctx2.lineTo(rect.x + rect.w, rect.y + rect.h);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(rect.x, rect.y + rect.h / 2);
  ctx2.lineTo(rect.x + rect.w, rect.y + rect.h / 2);
  ctx2.stroke();
}
function drawText(canvas2, rect, text, style2 = { color: "black", font: "12px serif" }) {
  let ctx2 = canvas2.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  ctx2.fillStyle = style2.color;
  ctx2.font = style2.font;
  ctx2.fillText(text, rect.x, rect.y);
}
function drawTrueColorGrid2d(canavs, grid, bands2Draw, Rect, colorBand, GridMBR) {
  let cellWidth = Rect.w / grid.width;
  let cellHeight = Rect.h / grid.height;
  let ctx2 = canavs.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  let bands = [];
  let statistics = [];
  bands2Draw.forEach((bandIndex) => {
    bands.push(grid.getBand(bandIndex));
    statistics.push(grid.getBandStatistics(bandIndex));
  });
  for (let row = 0; row < grid.height; row++) {
    for (let col = 0; col < grid.width; col++) {
      let value = bands2Draw.map((bandIndex) => bands[bandIndex][row][col]);
      let color = colorBand(statistics, value);
      ctx2.fillStyle = color;
      ctx2.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
    }
  }
  if (GridMBR) {
    let [minX, minY, maxX, maxY] = GridMBR;
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 1;
    ctx2.strokeRect(Rect.x + minX * cellWidth, Rect.y + minY * cellHeight, (maxX - minX) * cellWidth, (maxY - minY) * cellHeight);
  }
  ctx2.strokeStyle = "red";
  ctx2.lineWidth = 1;
  ctx2.beginPath();
  ctx2.moveTo(Rect.x + Rect.w / 2, Rect.y + Rect.h / 2 - 10);
  ctx2.lineTo(Rect.x + Rect.w / 2, Rect.y + Rect.h / 2 + 10);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(Rect.x + Rect.w / 2 - 10, Rect.y + Rect.h / 2);
  ctx2.lineTo(Rect.x + Rect.w / 2 + 10, Rect.y + Rect.h / 2);
  ctx2.stroke();
}
function drawProgress(canvas2, rect, progress, style2 = { color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)" }) {
  let ctx2 = canvas2.getContext("2d");
  if (ctx2 === null) {
    throw new Error("无法获取canvas绘图上下文");
  }
  ctx2.fillStyle = style2.backgroundColor;
  ctx2.fillRect(rect.x, rect.y, rect.w, rect.h);
  ctx2.fillStyle = style2.color;
  ctx2.fillRect(rect.x, rect.y, rect.w * progress / 100, rect.h);
  ctx2.strokeStyle = "white";
  ctx2.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    ctx2.beginPath();
    ctx2.moveTo(rect.x + rect.w * i / 10, rect.y);
    ctx2.lineTo(rect.x + rect.w * i / 10, rect.y + rect.h);
    ctx2.stroke();
  }
  if (rect.h >= 20 && rect.w >= 40) {
    ctx2.fillStyle = "white";
    ctx2.font = "20px serif";
    ctx2.fillText(progress + "%", rect.x + rect.w / 2 - 20, rect.y + rect.h / 2 + 6);
  }
}
function testProgress() {
  let canvas2 = document.createElement("canvas");
  canvas2.width = 200;
  canvas2.height = 20;
  document.body.appendChild(canvas2);
  let rect = { x: 0, y: 0, w: 200, h: 20 };
  let progress = 0;
  setInterval(() => {
    drawProgress(canvas2, rect, progress);
    progress += 1;
    if (progress > 100) {
      progress = 0;
    }
  }, 100);
}
const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);
const convertToWgs84$1 = SphericalMercator.unproject;
class Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n = points.length;
    const coords = new Float64Array(n * 2);
    for (let i = 0; i < n; i++) {
      const p = points[i];
      coords[2 * i] = getX(p);
      coords[2 * i + 1] = getY(p);
    }
    return new Delaunator(coords);
  }
  constructor(coords) {
    const n = coords.length >> 1;
    if (n > 0 && typeof coords[0] !== "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n));
    this._hullPrev = new Uint32Array(n);
    this._hullNext = new Uint32Array(n);
    this._hullTri = new Uint32Array(n);
    this._hullHash = new Int32Array(this._hashSize);
    this._ids = new Uint32Array(n);
    this._dists = new Float64Array(n);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < n; i++) {
      const x = coords[2 * i];
      const y = coords[2 * i + 1];
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (x > maxX)
        maxX = x;
      if (y > maxY)
        maxY = y;
      this._ids[i] = i;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    let i0, i1, i2;
    for (let i = 0, minDist = Infinity; i < n; i++) {
      const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist) {
        i0 = i;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    for (let i = 0, minDist = Infinity; i < n; i++) {
      if (i === i0)
        continue;
      const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist && d > 0) {
        i1 = i;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i = 0; i < n; i++) {
      if (i === i0 || i === i1)
        continue;
      const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
      if (r < minRadius) {
        i2 = i;
        minRadius = r;
      }
    }
    let i2x = coords[2 * i2];
    let i2y = coords[2 * i2 + 1];
    if (minRadius === Infinity) {
      for (let i = 0; i < n; i++) {
        this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n - 1);
      const hull = new Uint32Array(n);
      let j = 0;
      for (let i = 0, d0 = -Infinity; i < n; i++) {
        const id = this._ids[i];
        const d = this._dists[id];
        if (d > d0) {
          hull[j++] = id;
          d0 = d;
        }
      }
      this.hull = hull.subarray(0, j);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
      const i = i1;
      const x = i1x;
      const y = i1y;
      i1 = i2;
      i1x = i2x;
      i1y = i2y;
      i2 = i;
      i2x = x;
      i2y = y;
    }
    const center = this.circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;
    for (let i = 0; i < n; i++) {
      this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
    }
    quicksort(this._ids, this._dists, 0, n - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i2] = i1;
    hullNext[i1] = hullPrev[i0] = i2;
    hullNext[i2] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i2] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i2;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i2, -1, -1, -1);
    for (let k = 0, xp, yp; k < this._ids.length; k++) {
      const i = this._ids[k];
      const x = coords[2 * i];
      const y = coords[2 * i + 1];
      if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON)
        continue;
      xp = x;
      yp = y;
      if (i === i0 || i === i1 || i === i2)
        continue;
      let start = 0;
      for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
        start = hullHash[(key + j) % this._hashSize];
        if (start !== -1 && start !== hullNext[start])
          break;
      }
      start = hullPrev[start];
      let e2 = start, q;
      while (q = hullNext[e2], orient2d(x, y, coords[2 * e2], coords[2 * e2 + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
        e2 = q;
        if (e2 === start) {
          e2 = -1;
          break;
        }
      }
      if (e2 === -1)
        continue;
      let t = this._addTriangle(e2, i, hullNext[e2], -1, -1, hullTri[e2]);
      hullTri[i] = this._legalize(t + 2);
      hullTri[e2] = t;
      hullSize++;
      let n2 = hullNext[e2];
      while (q = hullNext[n2], orient2d(x, y, coords[2 * n2], coords[2 * n2 + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
        t = this._addTriangle(n2, i, q, hullTri[i], -1, hullTri[n2]);
        hullTri[i] = this._legalize(t + 2);
        hullNext[n2] = n2;
        hullSize--;
        n2 = q;
      }
      if (e2 === start) {
        while (q = hullPrev[e2], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e2], coords[2 * e2 + 1]) < 0) {
          t = this._addTriangle(q, i, e2, -1, hullTri[e2], hullTri[q]);
          this._legalize(t + 2);
          hullTri[q] = t;
          hullNext[e2] = e2;
          hullSize--;
          e2 = q;
        }
      }
      this._hullStart = hullPrev[i] = e2;
      hullNext[e2] = hullPrev[n2] = i;
      hullNext[i] = n2;
      hullHash[this._hashKey(x, y)] = i;
      hullHash[this._hashKey(coords[2 * e2], coords[2 * e2 + 1])] = e2;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i = 0, e2 = this._hullStart; i < hullSize; i++) {
      this.hull[i] = e2;
      e2 = hullNext[e2];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x, y) {
    return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i = 0;
    let ar = 0;
    while (true) {
      const b = halfedges[a];
      const a0 = a - a % 3;
      ar = a0 + (a + 2) % 3;
      if (b === -1) {
        if (i === 0)
          break;
        a = EDGE_STACK[--i];
        continue;
      }
      const b0 = b - b % 3;
      const al = a0 + (a + 1) % 3;
      const bl = b0 + (b + 2) % 3;
      const p0 = triangles[ar];
      const pr = triangles[a];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr],
        coords[2 * pr + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );
      if (illegal) {
        triangles[a] = p1;
        triangles[b] = p0;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e2 = this._hullStart;
          do {
            if (this._hullTri[e2] === bl) {
              this._hullTri[e2] = a;
              break;
            }
            e2 = this._hullPrev[e2];
          } while (e2 !== this._hullStart);
        }
        this._link(a, hbl);
        this._link(b, halfedges[ar]);
        this._link(ar, bl);
        const br = b0 + (b + 1) % 3;
        if (i < EDGE_STACK.length) {
          EDGE_STACK[i++] = br;
        }
      } else {
        if (i === 0)
          break;
        a = EDGE_STACK[--i];
      }
    }
    return ar;
  }
  _link(a, b) {
    this._halfedges[a] = b;
    if (b !== -1)
      this._halfedges[b] = a;
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i2, a, b, c) {
    const t = this.trianglesLen;
    this._triangles[t] = i0;
    this._triangles[t + 1] = i1;
    this._triangles[t + 2] = i2;
    this._link(t, a);
    this._link(t + 1, b);
    this._link(t + 2, c);
    this.trianglesLen += 3;
    return t;
  }
  getTriangles() {
    return this.triangles;
  }
  getHalfedges() {
    return this.halfedges;
  }
  getHull() {
    return this.hull;
  }
  getPoints() {
    let points = [];
    for (let i = 0; i < this.coords.length; i += 2) {
      points.push([this.coords[i], this.coords[i + 1]]);
    }
    return points;
  }
  /**
   * - get the indices of triangles as array of array of 3 elements
   * - 获得三角形的索引，以3个元素的数组的数组的形式
   * @returns {[number,number,number]}
   */
  getTriangleIndices() {
    let res = [];
    for (let i = 0; i < this.triangles.length; i += 3) {
      res.push([
        this.triangles[i],
        this.triangles[i + 1],
        this.triangles[i + 2]
      ]);
    }
    return res;
  }
  /**
   * 计算三点外接圆的半径
   * @param p1 
   * @param p2 
   * @param p3 
   * @returns 
   */
  static circumRadius(p1, p2, p3) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const ex = p3[0] - p1[0];
    const ey = p3[1] - p1[1];
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
  }
  circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return { x, y };
  }
}
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x = (ey * bl - dy * cl) * d;
  const y = (dx * cl - ex * bl) * d;
  return x * x + y * y;
}
function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i = left + 1; i <= right; i++) {
      const temp = ids[i];
      const tempDist = dists[temp];
      let j = i - 1;
      while (j >= left && dists[ids[j]] > tempDist)
        ids[j + 1] = ids[j--];
      ids[j + 1] = temp;
    }
  } else {
    const median = left + right >> 1;
    let i = left + 1;
    let j = right;
    swap(ids, median, i);
    if (dists[ids[left]] > dists[ids[right]])
      swap(ids, left, right);
    if (dists[ids[i]] > dists[ids[right]])
      swap(ids, i, right);
    if (dists[ids[left]] > dists[ids[i]])
      swap(ids, left, i);
    const temp = ids[i];
    const tempDist = dists[temp];
    while (true) {
      do
        i++;
      while (dists[ids[i]] < tempDist);
      do
        j--;
      while (dists[ids[j]] > tempDist);
      if (j < i)
        break;
      swap(ids, i, j);
    }
    ids[left + 1] = ids[j];
    ids[j] = temp;
    if (right - i + 1 >= j - left) {
      quicksort(ids, dists, i, right);
      quicksort(ids, dists, left, j - 1);
    } else {
      quicksort(ids, dists, left, j - 1);
      quicksort(ids, dists, i, right);
    }
  }
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}
function edgesOfTriangle(t) {
  return [3 * t, 3 * t + 1, 3 * t + 2];
}
function pointsOfTriangle(delaunay, t) {
  return edgesOfTriangle(t).map((e2) => delaunay.triangles[e2]);
}
function triangleOfEdge(e2) {
  return Math.floor(e2 / 3);
}
function circumcenter(a, b, c) {
  const ad = a[0] * a[0] + a[1] * a[1];
  const bd = b[0] * b[0] + b[1] * b[1];
  const cd = c[0] * c[0] + c[1] * c[1];
  const D2 = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  return [
    1 / D2 * (ad * (b[1] - c[1]) + bd * (c[1] - a[1]) + cd * (a[1] - b[1])),
    1 / D2 * (ad * (c[0] - b[0]) + bd * (a[0] - c[0]) + cd * (b[0] - a[0]))
  ];
}
function triangleCenter(points, delaunay, t, projection = convertToWgs84$1) {
  const vertices = pointsOfTriangle(delaunay, t).map((p) => points[p]);
  let center = circumcenter(vertices[0], vertices[1], vertices[2]);
  if (projection) {
    center = projection(center);
  }
  return center;
}
function nextHalfedge(e2) {
  return e2 % 3 === 2 ? e2 - 2 : e2 + 1;
}
function edgesAroundPoint(delaunay, start) {
  const result = [];
  let incoming = start;
  do {
    result.push(incoming);
    const outgoing = nextHalfedge(incoming);
    incoming = delaunay.halfedges[outgoing];
  } while (incoming !== -1 && incoming !== start);
  return result;
}
function forEachVoronoiCell(points, delaunay, callback) {
  const seen = /* @__PURE__ */ new Set();
  for (let e2 = 0; e2 < delaunay.triangles.length; e2++) {
    const p = delaunay.triangles[nextHalfedge(e2)];
    if (!seen.has(p)) {
      seen.add(p);
      const edges = edgesAroundPoint(delaunay, e2);
      const triangles = edges.map(triangleOfEdge);
      const vertices = triangles.map((t) => triangleCenter(points, delaunay, t));
      callback(p, vertices);
    }
  }
}
class Voronoi {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(params, x = defaultGetX, y = defaultGetY) {
    __publicField(this, "delaunay");
    // Delaunay triangulation
    __publicField(this, "points");
    if (params instanceof Delaunator) {
      this.delaunay = params;
      this.points = params.getPoints();
    } else {
      this.points = params;
      this.delaunay = Delaunator.from(params, x, y);
    }
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points, delaunay } = this;
    const voronoi = /* @__PURE__ */ new Map();
    forEachVoronoiCell(points, delaunay, (p, v2) => voronoi.set(p, v2));
    return voronoi;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(MBR) {
    const { points, delaunay } = this;
    const voronoi = /* @__PURE__ */ new Map();
    forEachVoronoiCell(points, delaunay, (p, v2) => {
      if (!this.isInsideMBR(v2, MBR)) {
        console.log(v2);
        v2 = cutPolygonByMBR(v2, MBR);
        voronoi.set(p, v2);
      } else {
        voronoi.set(p, v2);
      }
    });
    return voronoi;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(MBR) {
    const { points, delaunay } = this;
    const voronoi = /* @__PURE__ */ new Map();
    forEachVoronoiCell(points, delaunay, (p, v2) => {
      if (this.isInsideMBR(v2, MBR)) {
        voronoi.set(p, v2);
      }
    });
    return voronoi;
  }
  isInsideMBR(points, MBR) {
    const [minX, minY, maxX, maxY] = MBR;
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      if (x < minX || x > maxX || y < minY || y > maxY) {
        return false;
      }
    }
    return true;
  }
}
function complateMap(allMap, cutMap) {
  const res = /* @__PURE__ */ new Map();
  for (let [key, value] of allMap) {
    if (cutMap.has(key)) {
      res.set(key, cutMap.get(key));
    } else {
      res.set(key, value);
    }
  }
  return res;
}
function convexHull(points) {
  const pointsXY = points.map((item, index) => {
    let tmp = item.toXY();
    return [...tmp, index];
  });
  let lowestPoint = pointsXY[0];
  for (let i = 1; i < pointsXY.length; i++) {
    if (pointsXY[i][1] < lowestPoint[1]) {
      lowestPoint = pointsXY[i];
    }
  }
  pointsXY.sort((a, b) => {
    let angleA = getAngle([lowestPoint[0], lowestPoint[1]], [a[0], a[1]]);
    let angleB = getAngle([lowestPoint[0], lowestPoint[1]], [b[0], b[1]]);
    if (angleA < angleB) {
      return -1;
    } else if (angleA > angleB) {
      return 1;
    } else {
      let distanceA = Math.pow(a[0] - lowestPoint[0], 2) + Math.pow(a[1] - lowestPoint[1], 2);
      let distanceB = Math.pow(b[0] - lowestPoint[0], 2) + Math.pow(b[1] - lowestPoint[1], 2);
      if (distanceA < distanceB) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  let stack = [];
  stack.push(pointsXY[0]);
  stack.push(pointsXY[1]);
  for (let i = 2; i < pointsXY.length; i++) {
    while (stack.length > 1 && ccw([stack[stack.length - 2][0], stack[stack.length - 2][1]], [stack[stack.length - 1][0], stack[stack.length - 1][1]], [pointsXY[i][0], pointsXY[i][1]]) <= 0) {
      stack.pop();
    }
    stack.push(pointsXY[i]);
  }
  let res = [];
  for (let i = 0; i < stack.length; i++) {
    let index = stack[i][2];
    res.push(points[index]);
  }
  return res;
}
function alphaComplex(points, alpha) {
  let pointsXY = points.map((item) => {
    return item.toXY();
  });
  let delaunay = Delaunator.from(pointsXY);
  let triangleIndices = delaunay.getTriangleIndices();
  let res = triangleIndices.filter((cell) => {
    let triangle = [pointsXY[cell[0]], pointsXY[cell[1]], pointsXY[cell[2]]];
    return Delaunator.circumRadius(triangle[0], triangle[1], triangle[2]) * alpha < 1;
  });
  return res;
}
const RVGeo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle,
  CountourColorList,
  D2R,
  Delaunator,
  EPSG3857,
  EPSG900913,
  EPSLN,
  Earth,
  Evented,
  FFT,
  FFT2,
  FFTImag,
  FFTImag2,
  FFTReal,
  FFTReal2,
  FFTShift,
  Geometry,
  GeometryCollection,
  Grid,
  IFFT,
  IFFT2,
  IFFTReal,
  IFFTReal2,
  K_means,
  LineString,
  MBR2Plane,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Perlin,
  Point,
  PointInsidePolygon,
  PointOutsideMBR,
  Polygon,
  PriorityQueue,
  QuadTree,
  Queue,
  R2D,
  Sin3D,
  SphericalMercator,
  UUID: UUID$1,
  Voronoi,
  XY2ColRow,
  acos,
  add: add$1,
  adjust_lon,
  alphaComplex,
  applyMixins,
  areaFactors,
  areaToArea,
  asin,
  atan2,
  bearing,
  binDrawGrid2d,
  binarization,
  binaryColorBand,
  breadthFirstSearch,
  calculateArrayShape,
  calculateMBR,
  cartesian,
  cartesianAdd,
  cartesianAddInPlace,
  cartesianAngle,
  cartesianCross,
  cartesianDot,
  cartesianNormalize,
  cartesianNormalizeInPlace,
  cartesianScale,
  ccw,
  ccwRobust,
  collectionFromFeature,
  collectionFromGeometry,
  colorListType,
  complateMap,
  concatEL2DArray,
  conj,
  containsMBR,
  convexHull,
  cos,
  createGraph,
  createGridGraph,
  cross,
  cutPolygonByMBR,
  dampedSin3D,
  deMaxMin,
  degToDMS,
  degreesToRadians,
  destination,
  dijkstra,
  dmsToDeg,
  dot,
  drawArrowField,
  drawCountour,
  drawGrid2d,
  drawProgress,
  drawQTree2d,
  drawSample,
  drawSample2,
  drawText,
  drawTrueColorGrid2d,
  earthRadius,
  emptyObj,
  equals,
  equalsMBR,
  extend: extend$1,
  factors,
  factors2,
  fastFFT2,
  feature,
  fillIndexArray,
  flattenArray,
  formatNum,
  fromFeatureObj,
  fromGeometryObj,
  getAngle,
  getMBRWithAntimeridian,
  getPointsMBR,
  gridAstar,
  gridBreadthFirstSearch,
  gridDijkstra,
  gridReconstructPath,
  halfPi,
  haversin,
  haversine,
  hist,
  inCircle: inCircle$1,
  inCircleRobust,
  intermediatePoint,
  interpolate: interpolate$1,
  interpolate2,
  intersection,
  intersectionPolygon,
  intersectsMBR,
  isEPSG3857,
  isEPSG4326,
  isFloat,
  isPotentialGeoObject: isPotentialGeoObject$1,
  iterPolygonEdge,
  lengthToRadians,
  mbrToPolygon,
  mbrToRectangle,
  merge: merge$1,
  mergeArcs,
  mergeMBR,
  mergePointMBR,
  mesh,
  meshArcs,
  metersTo,
  midpoint,
  neighbors,
  normalize,
  object,
  overlapsMBR,
  pi,
  plane2MBR,
  planeIntersection,
  planePolygonArea,
  pointInEdge,
  pointInMBR,
  pointInMBRWithAntimeridian,
  prePointInPolygon,
  pseudoColorBandFactory,
  radiansToDegrees,
  radiansToLength,
  randomIndexArray,
  reactGrid2d,
  reconstructPath,
  rectangleToMBR,
  reverse,
  round,
  sample,
  scale: scale$1,
  sign,
  simpleColorBand,
  simpleColorBandFactory,
  simplePseudoColorBand,
  sin,
  sphereIntersection,
  spherical,
  sphericalArea,
  splitMBRWithAntimeridian,
  sqrt,
  squareMetersTo,
  stretchType,
  subColumnInEL2DArray,
  subdivide2QTree,
  testProgress,
  throttle,
  toLineString,
  toMeters,
  toMultiPoint,
  toPoint,
  toSquareMeters,
  topology,
  transform,
  triangleCenter,
  trueColorBand,
  trueColorBandFactory,
  unitToUnit,
  untransform,
  worleyNoise,
  zebraNoise
}, Symbol.toStringTag, { value: "Module" }));
const convertToWgs84 = SphericalMercator.unproject;
function createIcon(url, size, offset) {
  return new BMapGL.Icon(url, new BMapGL.Size(size[0], size[1]), {
    offset: new BMapGL.Size(offset[0], offset[1])
  });
}
const myicons = ["Pink.svg", "Blue.svg", "Yellow.svg", "Green.svg"];
function innerIcon(index, icons = myicons) {
  let url = icons[index];
  return new BMapGL.Icon(url, new BMapGL.Size(11, 11), {
    offset: new BMapGL.Size(5, 5)
  });
}
function drawPoint2BLMap(point, map2, icon) {
  if (icon) {
    let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
    let marker = new BMapGL.Marker(blPoint, { icon });
    map2.addOverlay(marker);
  } else {
    let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
    let marker = new BMapGL.Marker(blPoint);
    map2.addOverlay(marker);
  }
}
function drawLabel(point, content, map2) {
  let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
  let label = new BMapGL.Label(content, {
    // 创建文本标注
    position: blPoint,
    // 设置标注的地理位置
    offset: new BMapGL.Size(5, 5)
    // 设置标注的偏移量
  });
  label.setStyle({
    color: "blue",
    // borderRadius: '5px',
    // borderColor: '#ccc',
    // padding: '10px',
    // fontSize: '16px',
    // height: '30px',
    // lineHeight: '30px',
    fontFamily: "微软雅黑"
  });
  map2.addOverlay(label);
}
function removeAllOverlay(map2) {
  map2.clearOverlays();
}
function drawMultiPoint2BLMap(multiPoint, map2, icon) {
  let points = MultiPoint.isMultiPoint(multiPoint) ? multiPoint.coordinates : multiPoint;
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    drawPoint2BLMap(point, map2, icon);
    drawLabel(point, i, map2);
  }
}
function drawRectangle2BLMap(rect, map2, style2 = { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let pStart = new BMapGL.Point(rect[0], rect[1]);
  let pEnd = new BMapGL.Point(rect[2], rect[3]);
  let rectangle = new BMapGL.Polygon([
    pStart,
    new BMapGL.Point(pEnd.lng, pStart.lat),
    pEnd,
    new BMapGL.Point(pStart.lng, pEnd.lat)
  ], style2);
  map2.addOverlay(rectangle);
}
function drawLineString2BLMap(lineString, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, close = false) {
  let points = LineString.isLineString(lineString) ? lineString.coordinates : lineString;
  if (points.length < 2)
    return;
  let blPoints = [];
  for (let i = 0; i < points.length; i++) {
    blPoints.push(new BMapGL.Point(points[i][0], points[i][1]));
  }
  if (close)
    blPoints.push(new BMapGL.Point(points[0][0], points[0][1]));
  let polyline = new BMapGL.Polyline(blPoints, style2);
  map2.addOverlay(polyline);
}
function drawMultiLineString2BLMap(multiLineString, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let lineStrings = multiLineString.coordinates;
  for (let i = 0; i < lineStrings.length; i++) {
    let lineString = lineStrings[i];
    drawLineString2BLMap(lineString, map2, style2);
  }
}
function drawPolygon2BLMap(polygon, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let coordinates = Polygon.isPolygon(polygon) ? polygon.coordinates : polygon;
  let blPoints = [];
  for (let i = 0; i < coordinates.length; i++) {
    let tmp = [];
    for (let j = 0; j < coordinates[i].length; j++) {
      tmp.push(new BMapGL.Point(coordinates[i][j][0], coordinates[i][j][1]));
    }
    blPoints.push(tmp);
  }
  let blPolygon = new BMapGL.Polygon(blPoints, style2);
  map2.addOverlay(blPolygon);
}
function drawPolygonArray2BLMap(polygonArray, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  for (let i = 0; i < polygonArray.length; i++) {
    let polygon = polygonArray[i];
    drawPolygon2BLMap([polygon], map2, style2);
  }
}
function drawTriangleEdge2BLMap(triangleEdge, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  for (let i = 0; i < triangleEdge.length; i++) {
    let blPoints = [];
    for (let j = 0; j < triangleEdge[i].length; j++) {
      blPoints.push(new BMapGL.Point(triangleEdge[i][j][0], triangleEdge[i][j][1]));
    }
    blPoints.push(new BMapGL.Point(triangleEdge[i][0][0], triangleEdge[i][0][1]));
    let polyline = new BMapGL.Polyline(blPoints, style2);
    map2.addOverlay(polyline);
  }
}
function drawEdgeMap2BLMap(edgeMap, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, close = false) {
  for (let [, value] of edgeMap) {
    drawLineString2BLMap(value, map2, style2, close);
  }
}
function drawSimplePolygon2Map(polygon, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let blPoints = [];
  for (let i = 0; i < polygon.length; i++) {
    blPoints.push(new BMapGL.Point(polygon[i][0], polygon[i][1]));
  }
  let blPolygon = new BMapGL.Polygon(blPoints, style2);
  map2.addOverlay(blPolygon);
}
function drawRoad2Map(nodes, edges, hightlight, map2, nodeIcon = innerIcon(0), roadStyle = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, hightlightStyle = { strokeColor: "yellow", strokeWeight: 5, strokeOpacity: 0.5 }) {
  for (let i = 0; i < nodes.length; i++) {
    if (i === hightlight[0] || i === hightlight[hightlight.length - 1])
      continue;
    drawPoint2BLMap(nodes[i], map2, nodeIcon);
  }
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let start = nodes[edge[0]];
    let end = nodes[edge[1]];
    drawLineString2BLMap([start, end], map2, roadStyle);
  }
  if (hightlight.length > 0) {
    let lineStrings = fillIndexArray(hightlight, nodes);
    drawLineString2BLMap(lineStrings, map2, hightlightStyle, false);
    drawPoint2BLMap(lineStrings[0], map2, innerIcon(4));
    drawPoint2BLMap(lineStrings[lineStrings.length - 1], map2, innerIcon(2));
  }
}
function drawRaster2BLMap(extent, getCanvas, map2) {
  var pStart = new BMapGL.Point(extent[0], extent[1]);
  var pEnd = new BMapGL.Point(extent[2], extent[3]);
  var bounds2 = new BMapGL.Bounds(
    new BMapGL.Point(pStart.lng, pEnd.lat),
    new BMapGL.Point(pEnd.lng, pStart.lat)
  );
  var imgOverlay = new BMapGL.GroundOverlay(bounds2, {
    type: "canvas",
    url: getCanvas(),
    opacity: 0.8
  });
  map2.addOverlay(imgOverlay);
}
function drawGridLines2BLMap(GridMBR, rows, cols, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, IsLabel = false) {
  let minLon = GridMBR[0];
  let minLat = GridMBR[1];
  let maxLon = GridMBR[2];
  let maxLat = GridMBR[3];
  let lonStep = (maxLon - minLon) / cols;
  for (let i = 0; i < cols + 1; i++) {
    let lon = minLon + i * lonStep;
    let line = [
      [lon, minLat],
      [lon, maxLat]
    ];
    drawLineString2BLMap(line, map2, style2);
  }
  let latStep = (maxLat - minLat) / rows;
  for (let i = 0; i < rows + 1; i++) {
    let lat = minLat + i * latStep;
    let line = [
      [minLon, lat],
      [maxLon, lat]
    ];
    drawLineString2BLMap(line, map2, style2);
  }
  drawRectangle2BLMap(GridMBR, map2);
  if (IsLabel) {
    let step = 10;
    for (let i = 0; i < rows; i += step) {
      let lat = minLat + (i + 0.5) * latStep;
      for (let j = 0; j < cols; j += step) {
        let lon = minLon + (j + 0.5) * lonStep;
        let point = [lon, lat];
        drawLabel(point, `(${i},${j})`, map2);
      }
    }
  }
}
function drawQuadTree2BLMap(quadTree, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.4 }, IsPlane = false) {
  let boundary = IsPlane ? quadTree.boundary : plane2MBR(quadTree.boundary);
  let minLon = boundary[0];
  let minLat = boundary[1];
  let maxLon = boundary[2];
  let maxLat = boundary[3];
  let rect = [
    [minLon, minLat],
    [maxLon, minLat],
    [maxLon, maxLat],
    [minLon, maxLat],
    [minLon, minLat]
  ];
  drawLineString2BLMap(rect, map2, style2);
  if (quadTree.northWest) {
    drawQuadTree2BLMap(quadTree.northWest, map2, style2);
  }
  if (quadTree.northEast) {
    drawQuadTree2BLMap(quadTree.northEast, map2, style2);
  }
  if (quadTree.southWest) {
    drawQuadTree2BLMap(quadTree.southWest, map2, style2);
  }
  if (quadTree.southEast) {
    drawQuadTree2BLMap(quadTree.southEast, map2, style2);
  }
}
function drawCircle2BLMap(center, radius, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let blPoint = Point.isPoint(center) ? new BMapGL.Point(center.lon, center.lat) : new BMapGL.Point(center[0], center[1]);
  let circle = new BMapGL.Circle(blPoint, radius, style2);
  map2.addOverlay(circle);
}
function drawPlanePoint2BLMap(point, map2, icon) {
  let lonlat = convertToWgs84(point);
  drawPoint2BLMap(lonlat, map2, icon);
}
function drawPlaneMPS2BLMap(points, map2, icon) {
  for (let i = 0; i < points.length; i++) {
    drawPlanePoint2BLMap(points[i], map2, icon);
  }
}
function drawPlaneMBR2BLMap(MBR2, map2, style2 = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let points = plane2MBR(MBR2);
  drawRectangle2BLMap(points, map2, style2);
}
const BLDraw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createIcon,
  drawCircle2BLMap,
  drawEdgeMap2BLMap,
  drawGridLines2BLMap,
  drawLabel,
  drawLineString2BLMap,
  drawMultiLineString2BLMap,
  drawMultiPoint2BLMap,
  drawPlaneMBR2BLMap,
  drawPlaneMPS2BLMap,
  drawPlanePoint2BLMap,
  drawPoint2BLMap,
  drawPolygon2BLMap,
  drawPolygonArray2BLMap,
  drawQuadTree2BLMap,
  drawRaster2BLMap,
  drawRectangle2BLMap,
  drawRoad2Map,
  drawSimplePolygon2Map,
  drawTriangleEdge2BLMap,
  innerIcon,
  removeAllOverlay
}, Symbol.toStringTag, { value: "Module" }));
function createToolBar(element, tools, outTools, runCallback) {
  const select = document.createElement("select");
  tools.forEach((tool) => {
    const option = document.createElement("option");
    option.value = tool.name;
    option.innerText = tool.name;
    select.appendChild(option);
  });
  element.appendChild(select);
  const runBtn = document.createElement("button");
  runBtn.innerText = "运行";
  runBtn.id = "runBtn";
  runBtn.onclick = () => {
    const selectedTool = tools.find((tool) => tool.name === select.value);
    if (selectedTool) {
      selectedTool.action();
      if (runCallback) {
        runCallback(selectedTool.action.toString());
      }
    }
  };
  element.appendChild(runBtn);
  if (outTools) {
    outTools.forEach((tool) => {
      const btn = document.createElement("button");
      btn.innerText = tool.name;
      btn.onclick = tool.action;
      element.appendChild(btn);
    });
  }
}
function mockLon(maxLon = 180, minLon = -180) {
  return Math.random() * (maxLon - minLon) + minLon;
}
function mockLat(maxLat = 90, minLat = -90) {
  return Math.random() * (maxLat - minLat) + minLat;
}
function UUID() {
  return Math.random().toString(36).substr(2);
}
function mockProperties() {
  return ["mock", UUID()];
}
function mockPoint(MBR = [-180, -90, 180, 90]) {
  return new Point([mockLon(MBR[2], MBR[0]), mockLat(MBR[3], MBR[1])], ...mockProperties());
}
function mockPoints(num, MBR = [-180, -90, 180, 90]) {
  let points = [];
  for (let i = 0; i < num; i++) {
    points.push(mockPoint(MBR));
  }
  return points;
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}
function removeBrackets(key) {
  return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);
  if (!utils.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
function parsePropPath(name) {
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};
    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils.isObject(data);
    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw AxiosError.from(e2, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e2;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const defaults$1 = defaults;
const ignoreDuplicateOf = utils.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils.isString(value))
    return;
  if (utils.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils.forEach(fns, function transform2(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
const cookies = platform.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }()
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const isURLSameOrigin = platform.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv2() {
    return function isURLSameOrigin2() {
      return true;
    };
  }()
);
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return (e2) => {
    const loaded = e2.loaded;
    const total = e2.lengthComputable ? e2.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e2
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    let contentType;
    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else if (!requestHeaders.getContentType(/^\s*multipart\/form-data/)) {
        requestHeaders.setContentType("multipart/form-data");
      } else if (utils.isString(contentType = requestHeaders.getContentType())) {
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, "$1"));
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (platform.isStandardBrowserEnv) {
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e2) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({ caseless }, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(void 0, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const VERSION = "1.5.1";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
const CancelToken$1 = CancelToken;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const axios$1 = axios;
window.RVGeo = RVGeo;
window.BLDraw = BLDraw;
const myMBR1 = [
  -109.04885344551185,
  36.988099165319085,
  -102.05550147177286,
  41.01069002801907
];
function parseData(data) {
  let lines = data.split("\n");
  let result = [];
  for (let line of lines) {
    let nums = line.split(",");
    let row = [];
    for (let num of nums) {
      let n = parseInt(num);
      if (isNaN(n)) {
        n = 0;
      }
      row.push(n);
    }
    result.push(row);
  }
  result.pop();
  return result;
}
function parseData2(arr1D, width, isEqualWidth = true, fixLength) {
  let result = [];
  for (let i = 0; i < arr1D.length; i += width) {
    result.push(arr1D.slice(i, i + width));
  }
  if (isEqualWidth) {
    let min = Math.min(result.length, result[0].length);
    if (fixLength) {
      min = fixLength;
    }
    result = result.slice(0, min).map((row) => row.slice(0, min));
  }
  return result;
}
const canvas = document.getElementById("myCanvas0");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let map = new BMapGL.Map("allmap");
map.centerAndZoom(new BMapGL.Point(-105.7220660521329, 39.0119712026557), 8);
map.enableScrollWheelZoom(true);
window.map = map;
createEditor().then((editor) => {
  function customModify(code) {
    let start = code.indexOf("{");
    let end = code.lastIndexOf("}");
    let result = code.substring(start + 1, end);
    result = result.split("\n").map((line) => {
      return line.substring(2);
    }).join("\n");
    result = "const RVGeo = window.RVGeo;\n" + result;
    editor.setValue(result);
  }
  createToolBar(document.querySelector("#toolbar"), [
    { name: "绘制多点及其重心", action: example1 },
    { name: "绘制三角网", action: example2 },
    { name: "绘制凸包", action: example3 },
    { name: "计算面积", action: example4 },
    { name: "绘制Voronoi", action: example5 },
    { name: "多边形求交", action: example6 },
    { name: "线段求交", action: example7 },
    { name: "点线关系", action: example8 },
    { name: "四叉树", action: example10 },
    { name: "Alpha Complex", action: example11 },
    { name: "栅格", action: example9 },
    { name: "Perlin Noise", action: example12 },
    { name: "Countour", action: example13 },
    { name: "Pyramid", action: example14 },
    { name: "FFT", action: example15 },
    { name: "影像直方图", action: example16 }
  ], [{ name: "clear", action: clear }], customModify);
});
function clear() {
  removeAllOverlay(map);
  let ctx2 = canvas.getContext("2d");
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.fillStyle = "white";
  ctx2.fillRect(0, 0, canvas.width, canvas.height);
}
let ps = mockPoints(30, myMBR1);
let mps = new MultiPoint(ps);
function example1() {
  removeAllOverlay(map);
  let icon = innerIcon(0);
  drawPoint2BLMap(mps.centroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}
function example2() {
  removeAllOverlay(map);
  let del = Delaunator.from(mps.toXY());
  let trs = fillIndexArray(del.getTriangleIndices(), mps.coordinates);
  let trc = triangleCenter(mps.toXY(), del, 0);
  drawPoint2BLMap(trc, map);
  drawTriangleEdge2BLMap(trs, map, { strokeColor: "blue" });
  let res = fillIndexArray(del.getHull(), mps.coordinates);
  drawPolygon2BLMap([res], map, { fillColor: "gray" });
  drawMultiPoint2BLMap(mps, map);
}
function example3() {
  removeAllOverlay(map);
  let ps2 = convexHull(ps);
  let ls = toLineString(ps2);
  let polygon = new Polygon([ls.coordinates]);
  let rect = polygon.bbox;
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}
function example4() {
  let Colorado = toLineString(mbrToPolygon(myMBR1).map((p) => new Point([p[0], p[1]])));
  let area = EPSG3857.area(Colorado.coordinates);
  let area2 = EPSG3857.planeArea(Colorado.coordinates);
  alert("Colorado area (on sphere): " + area + " m2\nColorado area (in plane): " + area2 + " m2\nColorado area (real): 268,627 km2\n");
}
function example5() {
  removeAllOverlay(map);
  let points = [
    [
      -112.2941812737089,
      42.98773501092674
    ],
    [
      -112.2941812737089,
      34.07077082095674
    ],
    [
      -98.06343559228408,
      34.07077082095674
    ],
    [
      -98.06343559228408,
      42.98773501092674
    ],
    [
      -112.2941812737089,
      42.98773501092674
    ]
  ];
  let myMps = new MultiPoint(points);
  let del = Delaunator.from(mps.toXY().concat(myMps.toXY()));
  let vor = new Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
  drawEdgeMap2BLMap(voi, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
}
function example6() {
  removeAllOverlay(map);
  let rect1 = [
    [-108.43658107534337, 40.29976780112503],
    [-108.43658107534337, 38.55075512778069],
    [-105.67716914258902, 38.55075512778069],
    [-105.67716914258902, 40.29976780112503]
  ];
  let rect2 = [
    [-107.34797321677699, 39.68665076371036],
    [-107.34797321677699, 37.315553928222414],
    [-103.90893321662871, 37.315553928222414],
    [-103.90893321662871, 39.68665076371036]
  ];
  drawLineString2BLMap(rect1, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(rect2, map, { strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  let res = intersectionPolygon(rect1, rect2);
  drawPolygon2BLMap([res], map, { fillColor: "red" });
}
function example7() {
  removeAllOverlay(map);
  let line1 = [
    [
      -108.742669882491,
      40.72721830758718
    ],
    [
      -102.29819316274084,
      37.2873641721976
    ]
  ];
  let line2 = [
    [
      -107.97399126074589,
      37.59766864452851
    ],
    [
      -102.641058204481,
      40.664014824200905
    ]
  ];
  let line3 = [
    [
      -102.3965685720985,
      41.613436668810465
    ],
    [
      -101.58822187178613,
      37.428342894987836
    ]
  ];
  drawLineString2BLMap(line1, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(line2, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(line3, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  let insPoi = intersection(line1[0], line1[1], line2[0], line2[1]);
  drawPoint2BLMap(insPoi, map);
}
function example8() {
  removeAllOverlay(map);
  let line = [
    [
      -105.84580648407761,
      40.23546027049062
    ],
    [
      -105.98171384883719,
      37.38228706395721
    ]
  ];
  let myIcon1 = innerIcon(0);
  let outPoi = [
    -107.11904390129598,
    39.05128102775606
  ];
  let myIcon2 = innerIcon(1);
  let inPoi = [
    -104.51534491327676,
    38.97346949562407
  ];
  let res1 = pointInEdge(outPoi, line[0], line[1]);
  let res2 = pointInEdge(inPoi, line[0], line[1]);
  drawLineString2BLMap(line, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\ninPoi: " + res2);
}
function example9() {
  const drawProgress$1 = drawProgress;
  const progressBar = { x: 924, y: 1004, w: 100, h: 20 };
  drawProgress$1(canvas, progressBar, 0);
  const drawGrid2d$1 = drawGrid2d;
  const trueColorBandFactory$1 = trueColorBandFactory;
  const drawTrueColorGrid2d$1 = drawTrueColorGrid2d;
  let URL = "exa2.tif";
  let URL2 = "exa.tif";
  let rect = { x: 512, y: 0, w: 512, h: 512 };
  let rect2 = { x: 512, y: 512, w: 512, h: 512 };
  getShowTif(URL, rect);
  getShowTif(URL2, rect2);
  function getShowTif(URL3, rect3) {
    GeoTIFF.fromUrl(URL3).then((tif) => {
      tif.getImage().then((image) => {
        let width = image.getWidth();
        image.readRasters().then((rasters) => {
          let data = [];
          let bands = [3, 2, 1];
          bands.forEach((band) => {
            data.push(parseData2(rasters[band], width, true, 256));
          });
          let grid = new Grid(myMBR1, data);
          grid.fillInvalidValue(0);
          grid.fillInvalidValue(1);
          grid.fillInvalidValue(2);
          let myTrueColorBand = trueColorBandFactory$1(stretchType.square);
          drawTrueColorGrid2d$1(canvas, grid, [0, 1, 2], rect3, myTrueColorBand);
          drawProgress$1(canvas, progressBar, 100);
        });
      });
      drawProgress$1(canvas, progressBar, 50);
    });
  }
  axios$1.get("dem.csv").then((res) => {
    let innerMBR = [
      -107.19241981061282,
      37.96392802178495,
      -104.23896455039352,
      39.75362886925538
    ];
    let data = parseData(res.data);
    let grid = new Grid(myMBR1, [data]);
    let testPoi = [-105.723781221762, 38.87054575208597];
    let inMBR = grid.ConvertToGridMBR(innerMBR);
    let subdrid = grid.getSubGrid(inMBR);
    let grid2 = new Grid(innerMBR, subdrid);
    drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map, { strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
    drawLineString2BLMap(mbrToPolygon(myMBR1), map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
    drawPoint2BLMap(testPoi, map);
    drawLabel(testPoi, `${grid.getGridCoord(testPoi)}`, map);
    drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });
    let myPseudoColorBand = pseudoColorBandFactory(stretchType.linear);
    drawGrid2d$1(canvas, data, { x: 0, y: 0, w: 512, h: 512 }, grid.getBandStatistics(0), myPseudoColorBand);
    const stretchType$1 = stretchType;
    let postions = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1]
    ];
    for (let type in stretchType$1) {
      if (parseInt(type) > 3)
        break;
      let colorband = simpleColorBandFactory(parseInt(type));
      let postion = postions[parseInt(type)];
      drawGrid2d$1(canvas, data, { x: postion[0] * 256, y: postion[1] * 256 + 256 * 2, w: 256, h: 256 }, grid.getBandStatistics(0), colorband);
    }
  });
}
function example10() {
  removeAllOverlay(map);
  let queryMBR = [
    -107.68090845026995,
    37.315553928222414,
    -106.90893321662871,
    38.664014824200905
  ];
  let planeMBR = MBR2Plane(myMBR1);
  let diagonal = Earth.distance([queryMBR[0], queryMBR[1]], [queryMBR[2], queryMBR[3]]);
  let center = SphericalMercator.project(mps.centroid().coordinates);
  let queryCircle = new Circle(center[0], center[1], Math.round(diagonal) / 2);
  let boundary = myMBR1;
  let capacity = 2;
  let qtree = new QuadTree(boundary, capacity);
  let planeTree = new QuadTree(planeMBR, capacity);
  mps.coordinates.forEach((p) => qtree.insert(p));
  mps.toXY().forEach((p) => {
    planeTree.insert(p);
  });
  drawQuadTree2BLMap(planeTree, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.1 }, true);
  let increcs = [];
  let queryPoints2 = planeTree.customQuery(queryCircle);
  let queryPoints = qtree.queryRange(queryMBR);
  drawPlaneMPS2BLMap(queryPoints2, map);
  for (let i = 0; i < increcs.length; i++) {
    drawPlaneMBR2BLMap(increcs[i], map, { strokeColor: "blue", strokeOpacity: 0.5 });
  }
  drawCircle2BLMap(mps.centroid(), Math.round(diagonal) / 2, map, { strokeColor: "red", strokeOpacity: 0.5, fillColor: "red", fillOpacity: 0.2 });
  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);
  drawMultiPoint2BLMap(queryPoints, map, innerIcon(1));
  drawRectangle2BLMap(queryMBR, map, {
    strokeColor: "green",
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillColor: "green",
    fillOpacity: 0.2
  });
}
function example11() {
  removeAllOverlay(map);
  let alpha = 1 / 15e9;
  let alphacomplex = alphaComplex(ps, alpha);
  console.log(alphacomplex);
  let trs = fillIndexArray(alphacomplex, mps.coordinates);
  drawTriangleEdge2BLMap(trs, map, { strokeColor: "blue" });
  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);
  let ps2 = convexHull(ps);
  let ls2 = toLineString(ps2);
  let polygon2 = new Polygon([ls2.coordinates]);
  drawPolygon2BLMap(polygon2, map, { fillColor: "red", fillOpacity: 0.1, strokeColor: "red", strokeOpacity: 0.5 });
}
function example12() {
  const Perlin$1 = Perlin;
  const dampedSin3D$1 = dampedSin3D;
  const Sin3D$1 = Sin3D;
  const worleyNoise$1 = worleyNoise;
  const CountourColorList$1 = CountourColorList;
  const drawGrid2d$1 = drawGrid2d;
  const Grid$1 = Grid;
  const drawCountour$1 = drawCountour;
  const size = 64;
  const blocksize = 256;
  let data = [];
  data.push(sample2(size, 0.05, 0.05, Perlin$1));
  data.push(sample2(size, 1, 1, dampedSin3D$1));
  data.push(sample2(size, 1, 1, Sin3D$1));
  let mySimpleColorBand = simpleColorBandFactory(stretchType.linear);
  let rmySimpleColorBand = simpleColorBandFactory(stretchType.linear, true);
  let myPseudoColorBand = pseudoColorBandFactory(stretchType.linear);
  let grid = [];
  data.forEach((d) => {
    grid.push(new Grid$1(myMBR1, [d]));
  });
  for (let i = 0; i < 3; i++) {
    drawGrid2d$1(canvas, data[i], { x: 0, y: i * blocksize, w: blocksize, h: blocksize }, grid[i].getBandStatistics(0), mySimpleColorBand);
    drawGrid2d$1(canvas, data[i], { x: blocksize, y: i * blocksize, w: blocksize, h: blocksize }, grid[i].getBandStatistics(0), myPseudoColorBand);
    drawCountour$1(canvas, grid[i].getCoutourCode(0, -0.35), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, -0.3), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, -0.2), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, -0.1), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 1e-3), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 2e-3), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#163544");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.15), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#495a45");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.2), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#767d58");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.25), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#76a477");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.3), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#d7bd7f");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.35), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#d7221f");
    drawCountour$1(canvas, grid[i].getCoutourCode(0, 0.5), { x: 2 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, "#119da4");
    drawGrid2d$1(canvas, data[i], { x: 3 * blocksize, y: i * blocksize, w: blocksize, h: blocksize }, grid[i].getBandStatistics(0), rmySimpleColorBand);
  }
  let worleygrid = new Grid$1(myMBR1, [worleyNoise$1(256, 256, 16)]);
  drawGrid2d$1(canvas, worleygrid.data[0], { x: 0, y: 3 * blocksize, w: blocksize, h: blocksize }, worleygrid.getBandStatistics(0), mySimpleColorBand);
  drawGrid2d$1(canvas, worleygrid.data[0], { x: blocksize, y: 3 * blocksize, w: blocksize, h: blocksize }, worleygrid.getBandStatistics(0), myPseudoColorBand);
  for (let i = 0; i < 30; i++) {
    let index = i % CountourColorList$1.length;
    drawCountour$1(canvas, worleygrid.getCoutourCode(0, i * 5), { x: 2 * blocksize, y: 3 * blocksize, w: blocksize, h: blocksize }, CountourColorList$1[index]);
  }
  drawGrid2d$1(canvas, worleygrid.data[0], { x: 3 * blocksize, y: 3 * blocksize, w: blocksize, h: blocksize }, worleygrid.getBandStatistics(0), rmySimpleColorBand);
  function sample2(size2, x, y, sampleFunc) {
    let data2 = [];
    for (let i = 0; i < size2; i++) {
      let tmp = [];
      for (let j = 0; j < size2; j++) {
        let noise = sampleFunc(i * x - size2 / 2, j * y - size2 / 2);
        tmp.push(noise);
      }
      data2.push(tmp);
    }
    return data2;
  }
}
function example13() {
  const drawCountour$1 = drawCountour;
  const drawGrid2d$1 = drawGrid2d;
  axios$1.get("dem.csv").then((res) => {
    let data = parseData(res.data);
    let grid = new Grid(myMBR1, [data]);
    let countour1 = grid.getCoutourCode(0, 0.6);
    let countour2 = grid.getCoutourCode(0, 1.2);
    let countour3 = grid.getCoutourCode(0, 1.8);
    let countour4 = grid.getCoutourCode(0, 2.4);
    let countour5 = grid.getCoutourCode(0, 3.6);
    let countour6 = grid.getCoutourCode(0, 4.8);
    drawGrid2d$1(
      canvas,
      data,
      { x: 0, y: 0, w: 1024, h: 1024 },
      grid.getBandStatistics(0),
      simpleColorBandFactory(stretchType.power, true)
    );
    drawCountour$1(canvas, countour1, { x: 0, y: 0, w: 1024, h: 1024 }, "red");
    drawCountour$1(canvas, countour2, { x: 0, y: 0, w: 1024, h: 1024 }, "green");
    drawCountour$1(canvas, countour3, { x: 0, y: 0, w: 1024, h: 1024 }, "blue");
    drawCountour$1(canvas, countour4, { x: 0, y: 0, w: 1024, h: 1024 }, "orange");
    drawCountour$1(canvas, countour5, { x: 0, y: 0, w: 1024, h: 1024 }, "purple");
    drawCountour$1(canvas, countour6, { x: 0, y: 0, w: 1024, h: 1024 }, "black");
  });
}
function example14() {
  const subdivide2QTree$1 = subdivide2QTree;
  const Grid$1 = Grid;
  const drawQTree2d$1 = drawQTree2d;
  let mySimpleColorBand = simpleColorBandFactory(stretchType.linear);
  axios$1.get("dem.csv").then((res) => {
    let data = parseData(res.data);
    let grid = new Grid$1(myMBR1, [data]);
    let subgrid = subdivide2QTree$1(grid, 10);
    drawQTree2d$1(
      canvas,
      { x: 0, y: 0, w: 1024, h: 1024 },
      subgrid,
      grid,
      mySimpleColorBand
    );
  });
}
function example15() {
  const fastFFT2$1 = fastFFT2;
  const drawGrid2d$1 = drawGrid2d;
  const Grid$1 = Grid;
  const Sin3D$1 = Sin3D;
  const Perlin$1 = Perlin;
  const dampedSin3D$1 = dampedSin3D;
  let data = [];
  data.push(sample2(128, 0.05, 0.05, Perlin$1));
  data.push(sample2(128, 0.05, 0.5, Perlin$1));
  data.push(sample2(128, 0.01, 0.01, Perlin$1));
  data.push(sample2(128, 0.1, 0.1, Sin3D$1));
  data.push(sample2(128, 1, 1, Sin3D$1));
  data.push(sample2(128, 0.05, 0.01, Sin3D$1));
  data.push(sample2(128, 0.5, 0.1, Perlin$1));
  data.push(sample2(128, 1, 1, dampedSin3D$1));
  let fft = [];
  data.forEach((d) => {
    let tmp = fastFFT2$1(d);
    fft.push(tmp.map((row) => row.map((c) => Math.sqrt(c.real * c.real + c.imag * c.imag))));
  });
  let grid = [];
  data.forEach((d) => {
    grid.push(new Grid$1(myMBR1, [d]));
  });
  let fftGrid = [];
  fft.forEach((d) => {
    fftGrid.push(new Grid$1(myMBR1, [d]));
  });
  for (let i = 0; i < 4; i++) {
    drawGrid2d$1(canvas, data[i], { x: 0, y: i * 256, w: 256, h: 256 }, grid[i].getBandStatistics(0), simpleColorBandFactory(stretchType.linear));
    drawGrid2d$1(canvas, fft[i], { x: 256, y: i * 256, w: 256, h: 256 }, fftGrid[i].getBandStatistics(0), simpleColorBandFactory(stretchType.linear));
  }
  for (let i = 4; i < 8; i++) {
    drawGrid2d$1(canvas, data[i], { x: 512, y: (i - 4) * 256, w: 256, h: 256 }, grid[i].getBandStatistics(0), simpleColorBandFactory(stretchType.linear));
    drawGrid2d$1(canvas, fft[i], { x: 768, y: (i - 4) * 256, w: 256, h: 256 }, fftGrid[i].getBandStatistics(0), simpleColorBandFactory(stretchType.linear));
  }
  function sample2(size, x, y, sampleFunc) {
    let data2 = [];
    for (let i = 0; i < size; i++) {
      let tmp = [];
      for (let j = 0; j < size; j++) {
        let noise = sampleFunc(i * x - size / 2, j * y - size / 2);
        tmp.push(noise);
      }
      data2.push(tmp);
    }
    return data2;
  }
}
function example16() {
  const drawSample$1 = drawSample;
  const drawProgress$1 = drawProgress;
  const hist$1 = hist;
  const progressBar = { x: 924, y: 1004, w: 100, h: 20 };
  drawProgress$1(canvas, progressBar, 0);
  const trueColorBandFactory$1 = trueColorBandFactory;
  const drawTrueColorGrid2d$1 = drawTrueColorGrid2d;
  let URL = "exa2.tif";
  let URL2 = "exa.tif";
  let rect = { x: 0, y: 0, w: 512, h: 512 };
  let rect2 = { x: 0, y: 512, w: 512, h: 512 };
  let rect3r = { x: 512, y: 0, w: 512, h: 512 };
  let rect3g = { x: 512, y: 0, w: 512, h: 512 };
  let rect3b = { x: 512, y: 0, w: 512, h: 512 };
  let rect4r = { x: 512, y: 512, w: 512, h: 512 };
  let rect4g = { x: 512, y: 512, w: 512, h: 512 };
  let rect4b = { x: 512, y: 512, w: 512, h: 512 };
  getShowTif(URL, rect, [rect3r, rect3g, rect3b]);
  getShowTif(URL2, rect2, [rect4r, rect4g, rect4b]);
  function getShowTif(URL3, rect3, rect22) {
    GeoTIFF.fromUrl(URL3).then((tif) => {
      tif.getImage().then((image) => {
        let width = image.getWidth();
        image.readRasters().then((rasters) => {
          let data = [];
          let bands = [3, 2, 1];
          bands.forEach((band) => {
            data.push(parseData2(rasters[band], width, true, 256));
          });
          let grid = new Grid(myMBR1, data);
          grid.fillInvalidValue(0);
          grid.fillInvalidValue(1);
          grid.fillInvalidValue(2);
          let myTrueColorBand = trueColorBandFactory$1(stretchType.square);
          drawTrueColorGrid2d$1(canvas, grid, [0, 1, 2], rect3, myTrueColorBand);
          drawProgress$1(canvas, progressBar, 50);
          if (rect22) {
            let styles = [
              { color: "rgba(255,0,0,0.3)", backgroundColor: "rgba(0,0,0,0)" },
              { color: "rgba(0,255,0,0.3)", backgroundColor: "rgba(0,0,0,0)" },
              { color: "rgba(0,0,255,0.3)", backgroundColor: "rgba(0,0,0,0)" }
            ];
            for (let i = 0; i < rect22.length; i++) {
              drawSample$1(canvas, rect22[i], hist$1(grid.getBand(i), stretchType.square, grid.getBandStatistics(i)), styles[i]);
            }
          }
          drawProgress$1(canvas, progressBar, 100);
        });
      });
    });
  }
}
