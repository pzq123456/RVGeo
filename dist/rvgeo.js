var Nn = Object.defineProperty;
var Wn = (e, t, n) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => Wn(e, typeof t != "symbol" ? t + "" : t, n);
const lt = Math.PI / 180, Ii = 180 / Math.PI, wt = 63710088e-1, mn = {
  centimeters: wt * 100,
  centimetres: wt * 100,
  degrees: 360 / (2 * Math.PI),
  feet: wt * 3.28084,
  inches: wt * 39.37,
  kilometers: wt / 1e3,
  kilometres: wt / 1e3,
  meters: wt,
  metres: wt,
  miles: wt / 1609.344,
  millimeters: wt * 1e3,
  millimetres: wt * 1e3,
  nauticalmiles: wt / 1852,
  radians: 1,
  yards: wt * 1.0936
}, wn = {
  centimeters: 1 * 100,
  centimetres: 1 * 100,
  degrees: 360 / (2 * Math.PI) * 1 / wt,
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
  radians: 1 / wt,
  yards: 1 * 1.0936
}, gn = {
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
function Ci(e, t = "kilometers") {
  const n = mn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Li(e, t = "kilometers") {
  const n = mn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function We(e) {
  return e % 360 * Math.PI / 180;
}
function _i(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function Dn(e, t) {
  const n = wn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Rn(e, t) {
  const n = wn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Gi(e, t, n) {
  return Rn(Dn(e, t), n);
}
function Xn(e, t) {
  const n = gn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function $n(e, t) {
  const n = gn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Fi(e, t, n) {
  return $n(Xn(e, t), n);
}
function ji(e, t, n, r) {
  let i = e + t / 60 + n / 3600;
  return (r === "S" || r === "W") && (i = -i), i;
}
function Bi(e) {
  let t = Math.floor(e), n = Math.floor((e - t) * 60), r = ((e - t) * 60 - n) * 60;
  return [t, n, r, e < 0 ? e < -180 ? "W" : "S" : e > 180 ? "E" : "N"];
}
const pn = Math.PI, De = pn / 2, Un = Math.atan2, Re = Math.cos, Le = Math.sin, Be = Math.sqrt, zn = 1e-10;
function Oi(e, t, n = zn) {
  return !Array.isArray(e) && !Array.isArray(t) ? Math.abs(e - t) < n : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((r, i) => Math.abs(r - t[i]) < n) : !1;
}
function Vn(e) {
  return e > 1 ? 0 : e < -1 ? pn : Math.acos(e);
}
function Hn(e) {
  return e > 1 ? De : e < -1 ? -De : Math.asin(e);
}
function qi(e) {
  return (e = Le(e / 2)) * e;
}
function te(e) {
  return [Un(e[1], e[0]), Hn(e[2])];
}
function ee(e, t = !0) {
  t && (e = [We(e[0]), We(e[1])]);
  const n = e[0], r = e[1], i = Re(r);
  return [i * Re(n), i * Le(n), Le(r)];
}
function me(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function we(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Yi(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Ni(e, t) {
  return [e[0] + t[0], e[1] + t[1], e[2] + t[2]];
}
function Jn(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Wi(e) {
  var t = Be(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function Kn(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  return [e[0] / t, e[1] / t, e[2] / t];
}
function ge(e, t) {
  let n = me(e, t) / Be(me(e, e) * me(t, t));
  return Vn(n);
}
function Di(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function qt(e, t) {
  return e[0] * t[1] - e[1] * t[0];
}
function Ri(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function Xi(e, t) {
  return [e[0] * t, e[1] * t];
}
function $i(e) {
  var t = Be(e[0] * e[0] + e[1] * e[1]);
  return [e[0] / t, e[1] / t];
}
function Ui(e, t, n) {
  return [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n,
    e[2] + (t[2] - e[2]) * n
  ];
}
function zi(e, t, n) {
  return [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n
  ];
}
function Vi(e, t) {
  if (typeof t == "number" || t === void 0) {
    const n = Math.pow(10, t === void 0 ? 6 : t);
    return Math.round(e * n) / n;
  }
  return e;
}
function Hi(e) {
  return Number(e) === e && e % 1 !== 0;
}
function xn(e, t = 1) {
  let n = e.slice();
  if (n.length < 3)
    return 0;
  let r = 0, i = n.length;
  n.forEach((o, s) => {
    n[s] = o.map((l) => l * lt);
  });
  for (let o = 0; o < i; o++) {
    let s = (o + 1) % i, l = (o + 2) % i;
    r += (n[o][0] - n[l][0]) * Math.sin(n[s][1]);
  }
  return r *= t * t / 2, Math.abs(r);
}
function Qn(e, t = 1) {
  let n = bt.isLineString(e) ? e.toXY() : e;
  if (n.length < 3)
    return 0;
  ht.isPoint(n[0]) && (n = n, n.map((o, s) => {
    n[s] = o.toXY();
  })), n = n;
  let r = 0, i = n.length - 1;
  for (let o = 0; o < n.length; o++)
    r += (n[i][0] + n[o][0]) * (n[i][1] - n[o][1]), i = o;
  return r = r * t * t / 2, Math.abs(r);
}
function ue(e, t, n = 1) {
  let r = Math.PI / 180, i = e[0] * r, o = t[0] * r, s = Math.sin((t[0] - e[0]) * r / 2), l = Math.sin((t[1] - e[1]) * r / 2), a = s * s + Math.cos(i) * Math.cos(o) * l * l, u = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return n * u;
}
function Ji(e, t) {
  let n = e[0] * lt, r = t[0] * lt, i = e[1] * lt, o = t[1] * lt;
  const s = Math.sin(o - i) * Math.cos(r), l = Math.cos(n) * Math.sin(r) - Math.sin(n) * Math.cos(r) * Math.cos(o - i);
  return (Math.atan2(s, l) * 180 / Math.PI + 360) % 360;
}
function Ki(e, t) {
  let n = e[0] * lt, r = e[1] * lt, i = t[0] * lt, o = t[1] * lt;
  const s = Math.cos(i) * Math.cos(o - r), l = Math.cos(i) * Math.sin(o - r), a = Math.atan2(
    Math.sin(n) + Math.sin(i),
    Math.sqrt((Math.cos(n) + s) * (Math.cos(n) + s) + l * l)
  ), u = r + Math.atan2(l, Math.cos(n) + s);
  return [a / lt, u / lt];
}
function Qi(e, t, n) {
  let r = e[0] * lt, i = e[1] * lt, o = t[0] * lt, s = t[1] * lt, l = ue(e, t);
  const a = Math.sin((1 - n) * l) / Math.sin(l), u = Math.sin(n * l) / Math.sin(l), f = a * Math.cos(r) * Math.cos(i) + u * Math.cos(o) * Math.cos(s), h = a * Math.cos(r) * Math.sin(i) + u * Math.cos(o) * Math.sin(s), c = a * Math.sin(r) + u * Math.sin(o), y = Math.atan2(c, Math.sqrt(f * f + h * h)), m = Math.atan2(h, f);
  return [y / lt, m / lt];
}
function Zi(e, t, n, r) {
  const i = ee(e), o = ee(t), s = ee(n), l = ee(r), a = we(i, o), u = we(s, l), f = we(a, u), h = Kn(f), c = Jn(h, -1);
  if (y(c, i, o) || y(c, s, l))
    return te(c);
  if (y(h, i, o) || y(h, s, l))
    return te(h);
  return [0, 0];
  function y(m, g, v) {
    const M = ge(g, m), P = ge(v, m), L = ge(g, v);
    return Math.abs(M + P - L) < 1e-6;
  }
}
function to(e, t, n) {
  let r = e[0] * lt, i = e[1] * lt, o = t * lt, s = 6378137;
  const l = Math.asin(Math.sin(r) * Math.cos(n / s) + Math.cos(r) * Math.sin(n / s) * Math.cos(o)), a = i + Math.atan2(
    Math.sin(o) * Math.sin(n / s) * Math.cos(r),
    Math.cos(n / s) - Math.sin(r) * Math.sin(l)
  );
  return [l / lt, a / lt];
}
function eo(e, t, n, r, i, o, s = !1) {
  i && (e = i(e), t = i(t), n = i(n), r = i(r));
  let l = [t[0] - e[0], t[1] - e[1]], a = [r[0] - n[0], r[1] - n[1]], u = qt(l, a);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let f = qt([n[0] - e[0], n[1] - e[1]], a) / u, h = qt([n[0] - e[0], n[1] - e[1]], l) / u;
  return !s && (f < 0 || f > 1 || h < 0 || h > 1) ? (console.log("交点不在两条线段上"), null) : o ? o([e[0] + l[0] * f, e[1] + l[1] * f]) : [e[0] + l[0] * f, e[1] + l[1] * f];
}
function no(e, t, n, r, i = 1, o = 1) {
  let s = new Array(t), l = (r - n) / t;
  for (let a = 0; a < t; a++)
    s[a] = e(2 * Math.PI * i * (n + a * l)) * o;
  return s;
}
function fe(e, t) {
  return {
    real: e.real * t.real - e.imag * t.imag,
    imag: e.real * t.imag + e.imag * t.real
  };
}
function Mn(e, t) {
  return {
    real: e.real + t.real,
    imag: e.imag + t.imag
  };
}
function bn(e, t) {
  return {
    real: e.real - t.real,
    imag: e.imag - t.imag
  };
}
function vn(e, t) {
  let n = -2 * Math.PI * e / t;
  return { real: Math.cos(n), imag: Math.sin(n) };
}
function ro(e) {
  return e.imag *= -1, e;
}
function Zn(e, t) {
  let n = [];
  for (let r = 0; r < t; r++)
    n.push({ real: e[r], imag: 0 });
  return n;
}
function Pn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[tr(r, t)];
  return n;
}
function tr(e, t) {
  let n = e.toString(2);
  return n = n.split("").reverse().join(""), n = n + "0".repeat(Math.log2(t) - n.length), parseInt(n, 2);
}
function er(e) {
  let t = e.length, n = Zn(e, t), i = Pn(n).slice();
  for (let o = 1; o < Math.log2(t) + 1; o++) {
    let s = Math.pow(2, o), l = vn(1, s);
    for (let a = 0; a < t; a += s) {
      let u = { real: 1, imag: 0 };
      for (let f = 0; f < s / 2; f++) {
        let h = fe(u, i[a + f + s / 2]), c = i[a + f];
        i[a + f] = Mn(c, h), i[a + f + s / 2] = bn(c, h), u = fe(u, l);
      }
    }
  }
  return i;
}
function io(e) {
  let n = Ue(e).map((i) => i.map((o) => Math.sqrt(o.real * o.real + o.imag * o.imag)));
  return sr(Ue(n, "column"));
}
function nr(e) {
  let t = e.length, r = Pn(e).slice();
  for (let i = 1; i < Math.log2(t) + 1; i++) {
    let o = Math.pow(2, i), s = vn(-1, o);
    for (let l = 0; l < t; l += o) {
      let a = { real: 1, imag: 0 };
      for (let u = 0; u < o / 2; u++) {
        let f = fe(a, r[l + u + o / 2]), h = r[l + u];
        r[l + u] = Mn(h, f), r[l + u + o / 2] = bn(h, f), a = fe(a, s);
      }
    }
  }
  for (let i = 0; i < t; i++)
    r[i].real /= t, r[i].imag /= t;
  return r;
}
function Xe(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = ir(e[r]);
  return n;
}
function rr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function oo(e, t = "row") {
  return t === "row" ? $e(e) : ce($e(Nt(e)));
}
function $e(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = rr(e[r]);
  return n;
}
function Ue(e, t = "row") {
  return t === "row" ? ze(e) : Nt(ze(ce(e)));
}
function ze(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let i = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let o = 0; o < n; o++)
      e[o] = e[o].concat(new Array(i - t).fill(0));
  }
  let r = new Array(n);
  for (let i = 0; i < n; i++)
    r[i] = er(e[i]);
  return r;
}
function so(e, t = "row") {
  return t === "row" ? Ve(e) : Nt(Ve(Nt(e)));
}
function Ve(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let i = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let o = 0; o < n; o++)
      e[o] = e[o].concat(new Array(i - t).fill({ real: 0, imag: 0 }));
  }
  let r = new Array(n);
  for (let i = 0; i < n; i++)
    r[i] = nr(e[i]);
  return r;
}
function ce(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let i = 0; i < t; i++)
      n[r][i] = e[i][r];
  }
  return n;
}
function Nt(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let i = 0; i < t; i++)
      n[r][i] = e[i][r];
  }
  return n;
}
function ir(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].imag;
  return n;
}
function lo(e, t = "row") {
  return t === "row" ? Xe(e) : ce(Xe(Nt(e)));
}
function or(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function He(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = or(e[r]);
  return n;
}
function ao(e, t = "row") {
  return t === "row" ? He(e) : ce(He(Nt(e)));
}
function sr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let i = 0; i < t; i++)
      n[r][i] = e[(r + t / 2) % t][(i + t / 2) % t];
  }
  return n;
}
function ho(e, t) {
  t.forEach((n) => {
    Object.getOwnPropertyNames(n.prototype).forEach((r) => {
      Object.defineProperty(
        e.prototype,
        r,
        Object.getOwnPropertyDescriptor(n.prototype, r) || /* @__PURE__ */ Object.create(null)
      );
    });
  });
}
function lr(e) {
  return typeof e != "object" ? !1 : e.x && e.y || e.lon && e.lat || e.lng && e.lat ? !0 : !!(e.X && e.Y);
}
function uo(e, t) {
  let n = 0;
  return function(...r) {
    const i = Date.now();
    i - n > t && (e.apply(this, r), n = i);
  };
}
function An(e, ...t) {
  for (let n = 0, r = t.length; n < r; n++) {
    const i = t[n];
    for (const o in i)
      e[o] = i[o];
  }
  return e;
}
function fo(e) {
  for (let t in e)
    delete e[t];
}
function co() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function yo(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function ar(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...ar(r)) : t.push(r);
  }
  return t;
}
function hr(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    Array.isArray(i) ? n.push(hr(i, t)) : n.push(t[i]);
  }
  return n;
}
function mo(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function wo(e, t) {
  Array.isArray(t) || (t = [t]), t.forEach((r) => {
    if (r < 0 || r >= e[0].length)
      throw new Error("indexArray is illegal!");
  });
  let n = [];
  return e.forEach((r) => {
    let i = [];
    Array.isArray(t) ? t.forEach((o) => {
      i.push(r[o]);
    }) : i.push(r[t]), n.push(i);
  }), n;
}
function ur(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
function go(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
class po {
  constructor() {
    V(this, "_events", {});
    V(this, "_asyncEvents", {});
  }
  /**
   * 添加事件监听（同步、异步）
   * @param type - 事件名称（类型）
   * @param fn - 事件处理函数（监听器）
   * @param context - 事件处理函数的上下文
   * @returns {this} 返回 EventEmitter 实例
   */
  on(t, n, r) {
    return n.constructor.name === "AsyncFunction" ? (this._asyncEvents[t] || (this._asyncEvents[t] = []), this._asyncEvents[t].push({ fn: n, context: r })) : (this._events[t] || (this._events[t] = []), this._events[t].push({ fn: n, context: r })), this;
  }
  /**
   * 移除事件监听
   * @param type 
   * @param fn 
   * @param context 
   * @returns 
   */
  off(t, n, r) {
    if (!this._events[t])
      return this;
    if (this._events[t])
      if (!n && !r)
        delete this._events[t];
      else {
        const i = this._events[t];
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          (!n || s.fn === n) && (!r || s.context === r) && (i.splice(o, 1), o--);
        }
      }
    if (this._asyncEvents[t])
      if (!n && !r)
        delete this._asyncEvents[t];
      else {
        const i = this._asyncEvents[t];
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          (!n || s.fn === n) && (!r || s.context === r) && (i.splice(o, 1), o--);
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
  once(t, n, r) {
    const i = (...o) => {
      n.apply(this, o), this.off(t, i);
    };
    return this.on(t, i, r);
  }
  /**
   * 只会触发非异步事件
   * @param type 
   * @param data 
   * @returns 
   */
  emit(t, n) {
    if (!this._events[t])
      return this;
    const r = { type: t, target: this, ...n };
    return this._events[t].slice().forEach((o) => {
      o.fn.call(o.context || this, r), o.once && this.off(t, o.fn, o.context);
    }), this;
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
  async emitAsync(t, n, r) {
    if (!this._asyncEvents[t])
      return;
    const i = { type: t, target: this, ...r }, o = this._asyncEvents[t].slice();
    if (n === "parallel")
      await Promise.all(o.map((s) => s.fn.call(s.context || this, i)));
    else if (n === "series")
      for (const s of o)
        await s.fn.call(s.context || this, i);
    else n === "ignore" && o.forEach((s) => s.fn.call(s.context || this, i));
  }
  /**
   * 获取指定事件类型的监听器
   * @param type - 事件名称
   * @returns {Listener[]} 返回一个监听器数组
   */
  listeners(t) {
    return [...this._events[t] || [], ...this._asyncEvents[t] || []];
  }
  /**
   * 判断是否存在指定事件类型的监听器
   * @param type - 事件名称
   * @returns {boolean} 返回一个布尔值
   */
  hasListeners(t) {
    var n, r;
    return !!((n = this._events[t]) != null && n.length || (r = this._asyncEvents[t]) != null && r.length);
  }
  /**
   * 移除所有事件监听
   * @returns {this} 返回 EventEmitter 实例
   */
  removeAllListeners() {
    return this._events = {}, this._asyncEvents = {}, this;
  }
  /**
   * 判断是否为异步监听器
   * @param {Listener | AsyncListener} listener - 监听器
   * @returns {boolean} 返回一个布尔值
   */
  static isAsyncListener(t) {
    return t.fn.constructor.name === "AsyncFunction";
  }
}
function fr(e) {
  let t = e.length, n = 0, r = 0;
  for (let i = 0; i < t; i++)
    n += e[i][0], r += e[i][1];
  return [n / t, r / t];
}
function xo(e, t = 1e-4, n = 100, r) {
  let i = [], o = r.length;
  if (o < e) {
    console.log("样本数量小于分类数量");
    return;
  }
  ur(o, e).forEach(
    (f) => {
      let h = r[f];
      i.push(h);
    }
  );
  let l = 1 / 0, a = 0, u = [];
  for (; l > t && a < n; ) {
    u = [];
    for (let h = 0; h < e; h++)
      u.push([]);
    for (let h = 0; h < o; h++) {
      let c = 1 / 0, y = 0, m = r[h];
      for (let g = 0; g < e; g++) {
        let v = r[h], M = i[g], P = ue(v, M);
        P < c && (c = P, y = g);
      }
      u[y].push(m);
    }
    let f = [];
    for (let h = 0; h < e; h++)
      f.push(fr(u[h]));
    l = 0;
    for (let h = 0; h < e; h++) {
      let c = i[h], y = f[h], m = ue(c, y);
      m > l && (l = m);
    }
    console.log(l), i = f, a++;
  }
  return u;
}
const cr = Object.prototype.hasOwnProperty;
function yr(e) {
  var t = 1 / 0, n = 1 / 0, r = -1 / 0, i = -1 / 0;
  function o(f) {
    f != null && f.type && cr.call(s, f.type) && s[f.type](f);
  }
  const s = {
    GeometryCollection: function(f) {
      f.geometries.forEach(o);
    },
    Point: function(f) {
      l(f.coordinates);
    },
    MultiPoint: function(f) {
      f.coordinates.forEach(l);
    },
    LineString: function(f) {
      a(f.arcs);
    },
    MultiLineString: function(f) {
      f.arcs.forEach(a);
    },
    Polygon: function(f) {
      f.arcs.forEach(a);
    },
    MultiPolygon: function(f) {
      f.arcs.forEach(u);
    }
  };
  function l(f) {
    var h = f[0], c = f[1];
    h < t && (t = h), h > r && (r = h), c < n && (n = c), c > i && (i = c);
  }
  function a(f) {
    f.forEach(l);
  }
  function u(f) {
    f.forEach(a);
  }
  for (let f in e)
    o(e[f]);
  return r >= t && i >= n ? [t, n, r, i] : void 0;
}
function dr(e, t, n, r = Array, i = null) {
  for (var o = new r(e = 1 << Math.max(4, Math.ceil(Math.log(e) / Math.LN2))), s = e - 1, l = 0; l < e; ++l)
    o[l] = i;
  function a(h) {
    for (var c = t(h) & s, y = o[c], m = 0; y != i; ) {
      if (n(y, h)) return !0;
      if (++m >= e) throw new Error("full hashset");
      y = o[c = c + 1 & s];
    }
    return o[c] = h, !0;
  }
  function u(h) {
    for (var c = t(h) & s, y = o[c], m = 0; y != i; ) {
      if (n(y, h)) return !0;
      if (++m >= e) break;
      y = o[c = c + 1 & s];
    }
    return !1;
  }
  function f() {
    for (var h = [], c = 0, y = o.length; c < y; ++c) {
      var m = o[c];
      m != i && h.push(m);
    }
    return h;
  }
  return {
    add: a,
    has: u,
    values: f
  };
}
function Oe(e, t, n, r = Array, i = null, o = Array) {
  for (var s = new r(e = 1 << Math.max(4, Math.ceil(Math.log(e) / Math.LN2))), l = new o(e), a = e - 1, u = 0; u < e; ++u)
    s[u] = i;
  function f(m, g) {
    for (var v = t(m) & a, M = s[v], P = 0; M != i; ) {
      if (n(M, m)) return l[v] = g;
      if (++P >= e) throw new Error("full hashmap");
      M = s[v = v + 1 & a];
    }
    return s[v] = m, l[v] = g, g;
  }
  function h(m, g) {
    for (var v = t(m) & a, M = s[v], P = 0; M != i; ) {
      if (n(M, m)) return l[v];
      if (++P >= e) throw new Error("full hashmap");
      M = s[v = v + 1 & a];
    }
    return s[v] = m, l[v] = g, g;
  }
  function c(m, g) {
    for (var v = t(m) & a, M = s[v], P = 0; M != i; ) {
      if (n(M, m)) return l[v];
      if (++P >= e) break;
      M = s[v = v + 1 & a];
    }
    return g;
  }
  function y() {
    for (var m = [], g = 0, v = s.length; g < v; ++g) {
      var M = s[g];
      M != i && m.push(M);
    }
    return m;
  }
  return {
    set: f,
    maybeSet: h,
    // set if unset
    get: c,
    keys: y
  };
}
function jt(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
let En = new ArrayBuffer(16), Je = new Float64Array(En), ne = new Uint32Array(En);
function _e(e) {
  Je[0] = e[0], Je[1] = e[1];
  var t = ne[0] ^ ne[1];
  return t = t << 5 ^ t >> 7 ^ ne[2] ^ ne[3], t & 2147483647;
}
function mr(e) {
  var t = e.coordinates, n = e.lines, r = e.rings, i = F(), o = new Int32Array(t.length), s = new Int32Array(t.length), l = new Int32Array(t.length), a = new Int8Array(t.length), u = 0, f, h, c, y, m;
  for (f = 0, h = t.length; f < h; ++f)
    o[f] = s[f] = l[f] = -1;
  for (f = 0, h = n.length; f < h; ++f) {
    var g = n[f], v = g[0], M = g[1];
    for (y = i[v], m = i[++v], ++u, a[y] = 1; ++v <= M; )
      I(f, c = y, y = m, m = i[v]);
    ++u, a[m] = 1;
  }
  for (f = 0, h = t.length; f < h; ++f)
    o[f] = -1;
  for (f = 0, h = r.length; f < h; ++f) {
    var P = r[f], L = P[0] + 1, G = P[1];
    for (c = i[G - 1], y = i[L - 1], m = i[L], I(f, c, y, m); ++L <= G; )
      I(f, c = y, y = m, m = i[L]);
  }
  function I(j, $, U, d) {
    if (o[U] !== j) {
      o[U] = j;
      var w = s[U];
      if (w >= 0) {
        var p = l[U];
        (w !== $ || p !== d) && (w !== d || p !== $) && (++u, a[U] = 1);
      } else
        s[U] = $, l[U] = d;
    }
  }
  function F() {
    for (var j = Oe(t.length * 1.4, W, R, Int32Array, -1, Int32Array), $ = new Int32Array(t.length), U = 0, d = t.length; U < d; ++U)
      $[U] = j.maybeSet(U, U);
    return $;
  }
  function W(j) {
    return _e(t[j]);
  }
  function R(j, $) {
    return jt(t[j], t[$]);
  }
  o = s = l = null;
  var T = dr(u * 1.4, _e, jt), D;
  for (f = 0, h = t.length; f < h; ++f)
    a[D = i[f]] && T.add(t[D]);
  return T;
}
function wr(e) {
  var t = mr(e), n = e.coordinates, r = e.lines, i = e.rings, o, s, l;
  for (s = 0, l = r.length; s < l; ++s)
    for (var a = r[s], u = a[0], f = a[1]; ++u < f; )
      t.has(n[u]) && (o = { 0: u, 1: a[1] }, a[1] = u, a = a.next = o);
  for (s = 0, l = i.length; s < l; ++s)
    for (var h = i[s], c = h[0], y = c, m = h[1], g = t.has(n[c]); ++y < m; )
      t.has(n[y]) && (g ? (o = { 0: y, 1: h[1] }, h[1] = y, h = h.next = o) : (gr(n, c, m, m - y), n[m] = n[c], g = !0, y = c));
  return e;
}
function gr(e, t, n, r) {
  pe(e, t, n), pe(e, t, t + r), pe(e, t + r, n);
}
function pe(e, t, n) {
  for (var r = t + (n-- - t >> 1), i; t < r; ++t, --n)
    i = e[t], e[t] = e[n], e[n] = i;
}
function pr(e) {
  let t = e.coordinates, n = e.lines, r, i = e.rings, o, s = n.length + i.length, l, a;
  for (delete e.lines, delete e.rings, l = 0, a = n.length; l < a; ++l)
    for (r = n[l]; r = r.next; ) ++s;
  for (l = 0, a = i.length; l < a; ++l)
    for (o = i[l]; o = o.next; ) ++s;
  let u = Oe(s * 2 * 1.4, _e, jt), f = e.arcs = [];
  for (l = 0, a = n.length; l < a; ++l) {
    r = n[l];
    do
      h(r);
    while (r = r.next);
  }
  for (l = 0, a = i.length; l < a; ++l)
    if (o = i[l], o.next)
      do
        h(o);
      while (o = o.next);
    else
      c(o);
  function h(P) {
    let L, G, I, F, W, R, T, D;
    if (I = u.get(L = t[P[0]])) {
      for (T = 0, D = I.length; T < D; ++T)
        if (F = I[T], y(F, P)) {
          P[0] = F[0], P[1] = F[1];
          return;
        }
    }
    if (W = u.get(G = t[P[1]])) {
      for (T = 0, D = W.length; T < D; ++T)
        if (R = W[T], m(R, P)) {
          P[1] = R[0], P[0] = R[1];
          return;
        }
    }
    I ? I.push(P) : u.set(L, [P]), W ? W.push(P) : u.set(G, [P]), f.push(P);
  }
  function c(P) {
    let L, G, I, F, W;
    if (G = u.get(L = t[P[0]]))
      for (F = 0, W = G.length; F < W; ++F) {
        if (I = G[F], g(I, P)) {
          P[0] = I[0], P[1] = I[1];
          return;
        }
        if (v(I, P)) {
          P[0] = I[1], P[1] = I[0];
          return;
        }
      }
    if (G = u.get(L = t[P[0] + M(P)]))
      for (F = 0, W = G.length; F < W; ++F) {
        if (I = G[F], g(I, P)) {
          P[0] = I[0], P[1] = I[1];
          return;
        }
        if (v(I, P)) {
          P[0] = I[1], P[1] = I[0];
          return;
        }
      }
    G ? G.push(P) : u.set(L, [P]), f.push(P);
  }
  function y(P, L) {
    let G = P[0], I = L[0], F = P[1], W = L[1];
    if (G - F !== I - W) return !1;
    for (; G <= F; ++G, ++I) if (!jt(t[G], t[I])) return !1;
    return !0;
  }
  function m(P, L) {
    let G = P[0], I = L[0], F = P[1], W = L[1];
    if (G - F !== I - W) return !1;
    for (; G <= F; ++G, --W) if (!jt(t[G], t[W])) return !1;
    return !0;
  }
  function g(P, L) {
    let G = P[0], I = L[0], F = P[1], W = L[1], R = F - G;
    if (R !== W - I) return !1;
    let T = M(P), D = M(L);
    for (let j = 0; j < R; ++j)
      if (!jt(t[G + (j + T) % R], t[I + (j + D) % R])) return !1;
    return !0;
  }
  function v(P, L) {
    let G = P[0], I = L[0], F = P[1], W = L[1], R = F - G;
    if (R !== W - I) return !1;
    let T = M(P), D = R - M(L);
    for (let j = 0; j < R; ++j)
      if (!jt(t[G + (j + T) % R], t[W - (j + D) % R])) return !1;
    return !0;
  }
  function M(P) {
    let L = P[0], G = P[1], I = L, F = I, W = t[I];
    for (; ++I < G; ) {
      let R = t[I];
      (R[0] < W[0] || R[0] === W[0] && R[1] < W[1]) && (F = I, W = R);
    }
    return F - L;
  }
  return e;
}
function xr(e) {
  for (var t = -1, n = e.length; ++t < n; ) {
    for (var r = e[t], i = 0, o = 1, s = r.length, l = r[0], a = l[0], u = l[1], f, h; ++i < s; )
      l = r[i], f = l[0], h = l[1], (f !== a || h !== u) && (r[o++] = [f - a, h - u], a = f, u = h);
    o === 1 && (r[o++] = [0, 0]), r.length = o;
  }
  return e;
}
const Mr = Object.prototype.hasOwnProperty;
function br(e) {
  let t = -1, n = [], r = [], i = [];
  function o(h) {
    h && h.type && Mr.call(s, h.type) && s[h.type](h);
  }
  const s = {
    GeometryCollection: function(h) {
      h.geometries.forEach(o);
    },
    LineString: function(h) {
      h.arcs = l(h.arcs);
    },
    MultiLineString: function(h) {
      h.arcs = h.arcs.map(l);
    },
    Polygon: function(h) {
      h.arcs = h.arcs.map(a);
    },
    MultiPolygon: function(h) {
      h.arcs = h.arcs.map(u);
    }
  };
  function l(h) {
    for (var c = 0, y = h.length; c < y; ++c) n[++t] = h[c];
    var m = { 0: t - y + 1, 1: t };
    return r.push(m), m;
  }
  function a(h) {
    for (var c = 0, y = h.length; c < y; ++c) n[++t] = h[c];
    var m = { 0: t - y + 1, 1: t };
    return i.push(m), m;
  }
  function u(h) {
    return h.map(a);
  }
  for (var f in e)
    o(e[f]);
  return {
    type: "Topology",
    coordinates: n,
    lines: r,
    rings: i,
    objects: e
  };
}
function vr(e) {
  var t = {}, n;
  for (n in e) t[n] = Pr(e[n]);
  return t;
}
function Pr(e) {
  return e == null ? { type: null } : e.type === "FeatureCollection" ? Ar(e) : e.type === "Feature" ? Sn(e) : qe(e);
}
function Ar(e) {
  var t = { type: "GeometryCollection", geometries: e.features.map(Sn) };
  return e.bbox != null && (t.bbox = e.bbox), t;
}
function Sn(e) {
  var t = qe(e.geometry), n;
  e.id != null && (t.id = e.id), e.bbox != null && (t.bbox = e.bbox);
  for (n in e.properties) {
    t.properties = e.properties;
    break;
  }
  return t;
}
function qe(e) {
  if (e == null) return { type: null };
  let t = {};
  if (e.type === "GeometryCollection")
    e = e, t = { type: "GeometryCollection", geometries: e.geometries.map(qe) }, e.bbox != null && (t.bbox = e.bbox);
  else if (e.type === "Point" || e.type === "MultiPoint")
    t = { type: e.type, coordinates: e.coordinates };
  else if (e.type === "LineString" || e.type === "MultiLineString" || e.type === "Polygon" || e.type === "MultiPolygon")
    e = e, t = { type: e.type, arcs: e.coordinates };
  else
    throw new Error("Unknown geometry type: " + e.type);
  return t;
}
const Er = Object.prototype.hasOwnProperty;
function Sr(e, t, n) {
  var r = t[0], i = t[1], o = t[2], s = t[3], l = o - r ? (n - 1) / (o - r) : 1, a = s - i ? (n - 1) / (s - i) : 1;
  function u(M) {
    return [Math.round((M[0] - r) * l), Math.round((M[1] - i) * a)];
  }
  function f(M, P) {
    for (var L = -1, G = 0, I = M.length, F = new Array(I), W, R, T, D, j; ++L < I; )
      W = M[L], D = Math.round((W[0] - r) * l), j = Math.round((W[1] - i) * a), (D !== R || j !== T) && (F[G++] = [R = D, T = j]);
    for (F.length = G; G < P; ) G = F.push([F[0][0], F[0][1]]);
    return F;
  }
  function h(M) {
    return f(M, 2);
  }
  function c(M) {
    return f(M, 4);
  }
  function y(M) {
    return M.map(c);
  }
  function m(M) {
    M != null && M.type && Er.call(g, M.type) && g[M.type](M);
  }
  const g = {
    GeometryCollection: function(M) {
      M.geometries.forEach(m);
    },
    Point: function(M) {
      M.coordinates = u(M.coordinates);
    },
    MultiPoint: function(M) {
      M.coordinates = M.coordinates.map(u);
    },
    LineString: function(M) {
      M.arcs = h(M.arcs);
    },
    MultiLineString: function(M) {
      M.arcs = M.arcs.map(h);
    },
    Polygon: function(M) {
      M.arcs = y(M.arcs);
    },
    MultiPolygon: function(M) {
      M.arcs = M.arcs.map(y);
    }
  };
  for (var v in e)
    m(e[v]);
  return {
    scale: [1 / l, 1 / a],
    translate: [r, i]
  };
}
const Tr = Object.prototype.hasOwnProperty;
function Mo(e, t) {
  let n = vr(e);
  var r = yr(n), i = t > 0 && r && Sr(n, r, t), o = pr(wr(br(n))), s = o.coordinates, l = Oe(o.arcs.length * 1.4, kr, Ir);
  o.bbox = r, o.arcs = o.arcs.map(function(y, m) {
    return l.set(y, m), s.slice(y[0], y[1] + 1);
  }), delete o.coordinates, s = null;
  function a(y) {
    y && y.type && Tr.call(u, y.type) && u[y.type](y);
  }
  var u = {
    GeometryCollection: function(y) {
      y.geometries.forEach(a);
    },
    LineString: function(y) {
      y.arcs = f(y.arcs);
    },
    MultiLineString: function(y) {
      y.arcs = y.arcs.map(f);
    },
    Polygon: function(y) {
      y.arcs = y.arcs.map(f);
    },
    MultiPolygon: function(y) {
      y.arcs = y.arcs.map(h);
    }
  };
  function f(y) {
    var m = [];
    do {
      var g = l.get(y);
      m.push(y[0] < y[1] ? g : ~g);
    } while (y = y.next);
    return m;
  }
  function h(y) {
    return y.map(f);
  }
  for (var c in n)
    a(n[c]);
  return i && (o.transform = i, o.arcs = xr(o.arcs)), o;
}
function kr(e) {
  var t = e[0], n = e[1], r;
  return n < t && (r = t, t = n, n = r), t + 31 * n;
}
function Ir(e, t) {
  var n = e[0], r = e[1], i = t[0], o = t[1], s;
  return r < n && (s = n, n = r, r = s), o < i && (s = i, i = o, o = s), n === i && r === o;
}
function Tn(e) {
  return e;
}
function Ke(e, t) {
  for (var n = 0, r = e.length; n < r; ) {
    var i = n + r >>> 1;
    e[i] < t ? n = i + 1 : r = i;
  }
  return n;
}
function Cr(e) {
  if (!e) return Tn;
  let t, n, r = e.scale[0], i = e.scale[1], o = e.translate[0], s = e.translate[1];
  return function(l, a) {
    a || (t = n = 0);
    var u = 2, f = l.length, h = new Array(f);
    for (h[0] = (t += l[0]) * r + o, h[1] = (n += l[1]) * i + s; u < f; ) h[u] = l[u], ++u;
    return h;
  };
}
function bo(e) {
  if (!e) return Tn;
  var t, n, r = e.scale[0], i = e.scale[1], o = e.translate[0], s = e.translate[1];
  return function(l, a) {
    a || (t = n = 0);
    var u = 2, f = l.length, h = new Array(f), c = Math.round((l[0] - o) / r), y = Math.round((l[1] - s) / i);
    for (h[0] = c - t, t = c, h[1] = y - n, n = y; u < f; ) h[u] = l[u], ++u;
    return h;
  };
}
function Lr(e, t) {
  for (var n, r = e.length, i = r - t; i < --r; ) n = e[i], e[i++] = e[r], e[r] = n;
}
function vo(e, t) {
  return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? { type: "FeatureCollection", features: t.geometries.map(function(n) {
    return Qe(e, n);
  }) } : Qe(e, t);
}
function Qe(e, t) {
  var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, o = ye(e, t);
  let s = n == null && r == null ? { type: "Feature", properties: i, geometry: o } : r == null ? { type: "Feature", id: n, properties: i, geometry: o } : { type: "Feature", id: n, bbox: r, properties: i, geometry: o };
  return Object.keys(i).length === 0 && delete s.properties, s;
}
function ye(e, t) {
  let n = Cr(e.transform), r = e.arcs;
  function i(f, h) {
    h.length && h.pop();
    for (var c = r[f < 0 ? ~f : f], y = 0, m = c.length; y < m; ++y)
      h.push(n(c[y], y));
    f < 0 && Lr(h, m);
  }
  function o(f) {
    return n(f);
  }
  function s(f) {
    for (var h = [], c = 0, y = f.length; c < y; ++c) i(f[c], h);
    return h.length < 2 && h.push(h[0]), h;
  }
  function l(f) {
    for (var h = s(f); h.length < 4; ) h.push(h[0]);
    return h;
  }
  function a(f) {
    return f.map(l);
  }
  function u(f) {
    var h = f.type, c;
    switch (h) {
      case "GeometryCollection":
        return { type: h, geometries: f.geometries.map(u) };
      case "Point":
        c = o(f.coordinates);
        break;
      case "MultiPoint":
        c = f.coordinates.map(o);
        break;
      case "LineString":
        c = s(f.arcs);
        break;
      case "MultiLineString":
        c = f.arcs.map(s);
        break;
      case "Polygon":
        c = a(f.arcs);
        break;
      case "MultiPolygon":
        c = f.arcs.map(a);
        break;
      default:
        return null;
    }
    return { type: h, coordinates: c };
  }
  return u(t);
}
function Po(e) {
  var t = {}, n = e.map(function() {
    return [];
  });
  function r(m, g) {
    m.forEach(function(v) {
      v < 0 && (v = ~v);
      var M = t[v];
      M ? M.push(g) : t[v] = [g];
    });
  }
  function i(m, g) {
    m.forEach(function(v) {
      r(v, g);
    });
  }
  function o(m, g) {
    m.type === "GeometryCollection" ? m.geometries.forEach(function(v) {
      o(v, g);
    }) : m.type in s && s[m.type](m.arcs, g);
  }
  const s = {
    LineString: r,
    MultiLineString: i,
    Polygon: i,
    MultiPolygon: function(m, g) {
      m.forEach(function(v) {
        i(v, g);
      });
    }
  };
  e.forEach(o);
  for (let m in t)
    for (var l = t[m], a = l.length, u = 0; u < a; ++u)
      for (var f = u + 1; f < a; ++f) {
        var h = l[u], c = l[f], y;
        (y = n[h])[m = Ke(y, c)] !== c && y.splice(m, 0, c), (y = n[c])[m = Ke(y, h)] !== h && y.splice(m, 0, h);
      }
  return n;
}
function kn(e, t) {
  var n = {}, r = {}, i = {}, o = [], s = -1;
  t.forEach(function(u, f) {
    if (e.arcs)
      var h = e.arcs[u < 0 ? ~u : u], c;
    h.length < 3 && !h[1][0] && !h[1][1] && (c = t[++s], t[s] = u, t[f] = c);
  }), t.forEach(function(u) {
    var f = l(u), h = f[0], c = f[1], y, m;
    if (y = i[h])
      if (delete i[y.end], y.push(u), y.end = c, m = r[c]) {
        delete r[m.start];
        var g = m === y ? y : y.concat(m);
        r[g.start = y.start] = i[g.end = m.end] = g;
      } else
        r[y.start] = i[y.end] = y;
    else if (y = r[c])
      if (delete r[y.start], y.unshift(u), y.start = h, m = i[h]) {
        delete i[m.end];
        var v = m === y ? y : m.concat(y);
        r[v.start = m.start] = i[v.end = y.end] = v;
      } else
        r[y.start] = i[y.end] = y;
    else
      y = [u], r[y.start = h] = i[y.end = c] = y;
  });
  function l(u) {
    if (e.arcs) {
      let f = e.arcs[u < 0 ? ~u : u], h = f[0], c;
      return e.transform ? (c = [0, 0], f.forEach(function(y) {
        c[0] += y[0], c[1] += y[1];
      })) : c = f[f.length - 1], u < 0 ? [c, h] : [h, c];
    }
  }
  function a(u, f) {
    for (var h in u) {
      var c = u[h];
      delete f[c.start], delete c.start, delete c.end, c.forEach(function(y) {
        n[y < 0 ? ~y : y] = 1;
      }), o.push(c);
    }
  }
  return a(i, r), a(r, i), t.forEach(function(u) {
    n[u < 0 ? ~u : u] || o.push([u]);
  }), o;
}
function Ao(e) {
  return ye(e, _r.apply(this, arguments));
}
function _r(e, t, n) {
  var r, i, o;
  if (arguments.length > 1) r = Gr(e, t, n);
  else for (i = 0, r = new Array(o = e.arcs.length); i < o; ++i) r[i] = i;
  return { type: "MultiLineString", arcs: kn(e, r) };
}
function Gr(e, t, n) {
  var r = [], i = [], o;
  function s(h) {
    var c = h < 0 ? ~h : h;
    (i[c] || (i[c] = [])).push({ i: h, g: o });
  }
  function l(h) {
    h.forEach(s);
  }
  function a(h) {
    h.forEach(l);
  }
  function u(h) {
    h.forEach(a);
  }
  function f(h) {
    switch (o = h, h.type) {
      case "GeometryCollection":
        h.geometries.forEach(f);
        break;
      case "LineString":
        l(h.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        a(h.arcs);
        break;
      case "MultiPolygon":
        u(h.arcs);
        break;
    }
  }
  return f(t), i.forEach(n == null ? function(h) {
    r.push(h[0].i);
  } : function(h) {
    n(h[0].g, h[h.length - 1].g) && r.push(h[0].i);
  }), r;
}
function Fr(e) {
  for (var t = -1, n = e.length, r, i = e[n - 1], o = 0; ++t < n; ) r = i, i = e[t], o += r[0] * i[1] - r[1] * i[0];
  return Math.abs(o);
}
function Eo(e) {
  return ye(e, jr.apply(this, arguments));
}
function jr(e, t) {
  var n = {}, r = [], i = [];
  t.forEach(o);
  function o(a) {
    switch (a.type) {
      case "GeometryCollection":
        a.geometries.forEach(o);
        break;
      case "Polygon":
        s(a.arcs);
        break;
      case "MultiPolygon":
        a.arcs.forEach(s);
        break;
    }
  }
  function s(a) {
    a.forEach(function(u) {
      u.forEach(function(f) {
        (n[f = f < 0 ? ~f : f] || (n[f] = [])).push(a);
      });
    }), r.push(a);
  }
  function l(a) {
    return Fr(ye(e, { type: "Polygon", arcs: [a] }).coordinates[0]);
  }
  return r.forEach(function(a) {
    if (!a._) {
      var u = [], f = [a];
      for (a._ = 1, i.push(u); a = f.pop(); )
        u.push(a), a.forEach(function(h) {
          h.forEach(function(c) {
            n[c < 0 ? ~c : c].forEach(function(y) {
              y._ || (y._ = 1, f.push(y));
            });
          });
        });
    }
  }), r.forEach(function(a) {
    delete a._;
  }), {
    type: "MultiPolygon",
    arcs: i.map(function(a) {
      let u = [], f;
      if (a.forEach(function(g) {
        g.forEach(function(v) {
          v.forEach(function(M) {
            n[M < 0 ? ~M : M].length < 2 && u.push(M);
          });
        });
      }), u = kn(e, u), (f = u.length) > 1)
        for (var h = 1, c = l(u[0]), y, m; h < f; ++h)
          (y = l(u[h])) > c && (m = u[0], u[0] = u[h], u[h] = m, c = y);
      return u;
    }).filter(function(a) {
      return a.length > 0;
    })
  };
}
const re = 6378137, xt = 20037508342789244e-9, Br = 85.05112877980659, St = {
  /**
   * Convert lon/lat values to 900913 x/y.
   * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
   * @param {Array} lonlat `[lon, lat]` array of geographic coordinates.
   * @returns {Array} `[x, y]` array of geographic coordinates.
   */
  project(e) {
    let t = Math.PI / 180, n = Br, r = Math.max(Math.min(n, e[1]), -n), i = Math.sin(r * t), o = re * e[0] * t, s = re * Math.log((1 + i) / (1 - i)) / 2;
    return s > xt && (s = xt), s < -xt && (s = -xt), o > xt && (o = xt), o < -xt && (o = -xt), [o, s];
  },
  /**
   * Convert 900913 x/y values to lon/lat.
   * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
   * @param {Array} point `[x, y]` array of geographic coordinates.
   * @returns {Array} `[lon, lat]` array of geographic coordinates.
   */
  unproject(e) {
    let t = 180 / Math.PI;
    return [e[0] * t / re, (2 * Math.atan(Math.exp(e[1] / re)) - Math.PI / 2) * t];
  },
  bounds: [-xt, -xt, xt, xt],
  name: "EPSG:3857"
};
function Or(e, t) {
  return [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.max(e[2], t[2]), Math.max(e[3], t[3])];
}
function So(e, t) {
  return [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.max(e[2], t[0]), Math.max(e[3], t[1])];
}
function To(e, t = St) {
  let n, r = t.project([e[0], e[1]]), i = t.project([e[2], e[3]]);
  return n = [r[0], r[1], i[0], i[1]], n;
}
function ko(e, t = St) {
  let n, r = t.unproject([e[0], e[1]]), i = t.unproject([e[2], e[3]]);
  return n = [r[0], r[1], i[0], i[1]], n;
}
function Ze(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o][0], l = e[o][1];
    t = Math.min(t, s), n = Math.min(n, l), r = Math.max(r, s), i = Math.max(i, l);
  }
  return [t, n, r, i];
}
function Ge(e, t) {
  let n = t[0], r = t[1], i = t[2], o = t[3], s = e[0], l = e[1];
  return s >= n && s <= i && l >= r && l <= o;
}
function Io(e, t) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[2] && e[3] >= t[3];
}
function qr(e, t) {
  return e[0] <= t[2] && e[2] >= t[0] && e[1] <= t[3] && e[3] >= t[1];
}
function Co(e, t) {
  return e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1];
}
function Lo(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
}
function _o(e, t) {
  let n = t.map((i, o) => o % 2 === 0 ? In(i) : i), r = t.map((i, o) => o % 2 === 0 ? Fe(i) : i);
  return Ge(e, n) || Ge(e, r);
}
function Go(e) {
  let t = e.map(Wr), n = Ze(e), r = Ze(t);
  return Dr(n, r, [!1, !0]);
}
function Fo(e) {
  let t = [e[0], e[1], 180, e[3]], n = [-180, e[1], e[2], e[3]];
  return [t, n];
}
function Yr(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function jo(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Nr(e) {
  let t = e[0], n = e[1], r = e[2], i = e[3];
  return [
    [t, n],
    [t, i],
    [r, i],
    [r, n],
    [t, n]
  ];
}
function In(e) {
  return e < 0 ? e + 180 : e - 180;
}
function Fe(e) {
  return e < 0 ? e + 180 : e - 180;
}
function Wr(e) {
  return [In(e[0]), e[1]];
}
function Dr(e, t, n = [!1, !1]) {
  let r = e[2] - e[0], i = e[3] - e[1], o = t[2] - t[0], s = t[3] - t[1];
  return r * i < o * s ? n[0] ? e.map((l, a) => a % 2 === 0 ? Fe(l) : l) : e : n[1] ? t.map((l, a) => a % 2 === 0 ? Fe(l) : l) : t;
}
const ct = 11102230246251565e-32, _ = 134217729, Cn = (3 + 8 * ct) * ct;
function at(e, t, n, r, i) {
  let o, s, l, a, u = t[0], f = r[0], h = 0, c = 0;
  f > u == f > -u ? (o = u, u = t[++h]) : (o = f, f = r[++c]);
  let y = 0;
  if (h < e && c < n)
    for (f > u == f > -u ? (s = u + o, l = o - (s - u), u = t[++h]) : (s = f + o, l = o - (s - f), f = r[++c]), o = s, l !== 0 && (i[y++] = l); h < e && c < n; )
      f > u == f > -u ? (s = o + u, a = s - o, l = o - (s - a) + (u - a), u = t[++h]) : (s = o + f, a = s - o, l = o - (s - a) + (f - a), f = r[++c]), o = s, l !== 0 && (i[y++] = l);
  for (; h < e; )
    s = o + u, a = s - o, l = o - (s - a) + (u - a), u = t[++h], o = s, l !== 0 && (i[y++] = l);
  for (; c < n; )
    s = o + f, a = s - o, l = o - (s - a) + (f - a), f = r[++c], o = s, l !== 0 && (i[y++] = l);
  return (o !== 0 || y === 0) && (i[y++] = o), y;
}
function Mt(e, t, n, r, i, o, s, l) {
  return at(at(e, t, n, r, s), s, i, o, l);
}
function E(e, t, n, r) {
  let i, o, s, l, a, u, f, h, c, y, m;
  f = _ * n, y = f - (f - n), m = n - y;
  let g = t[0];
  i = g * n, f = _ * g, h = f - (f - g), c = g - h, s = c * m - (i - h * y - c * y - h * m);
  let v = 0;
  s !== 0 && (r[v++] = s);
  for (let M = 1; M < e; M++)
    g = t[M], l = g * n, f = _ * g, h = f - (f - g), c = g - h, a = c * m - (l - h * y - c * y - h * m), o = i + a, u = o - i, s = i - (o - u) + (a - u), s !== 0 && (r[v++] = s), i = l + o, s = o - (i - l), s !== 0 && (r[v++] = s);
  return (i !== 0 || v === 0) && (r[v++] = i), v;
}
function Ln(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++) n += t[r];
  return n;
}
function Z(e) {
  return new Float64Array(e);
}
const Rr = (3 + 16 * ct) * ct, Xr = (2 + 12 * ct) * ct, $r = (9 + 64 * ct) * ct * ct, Bt = Z(4), tn = Z(8), en = Z(12), nn = Z(16), yt = Z(4);
function Ur(e, t, n, r, i, o, s) {
  let l, a, u, f, h, c, y, m, g, v, M, P, L, G, I, F, W, R;
  const T = e - i, D = n - i, j = t - o, $ = r - o;
  G = T * $, c = _ * T, y = c - (c - T), m = T - y, c = _ * $, g = c - (c - $), v = $ - g, I = m * v - (G - y * g - m * g - y * v), F = j * D, c = _ * j, y = c - (c - j), m = j - y, c = _ * D, g = c - (c - D), v = D - g, W = m * v - (F - y * g - m * g - y * v), M = I - W, h = I - M, Bt[0] = I - (M + h) + (h - W), P = G + M, h = P - G, L = G - (P - h) + (M - h), M = L - F, h = L - M, Bt[1] = L - (M + h) + (h - F), R = P + M, h = R - P, Bt[2] = P - (R - h) + (M - h), Bt[3] = R;
  let U = Ln(4, Bt), d = Xr * s;
  if (U >= d || -U >= d || (h = e - T, l = e - (T + h) + (h - i), h = n - D, u = n - (D + h) + (h - i), h = t - j, a = t - (j + h) + (h - o), h = r - $, f = r - ($ + h) + (h - o), l === 0 && a === 0 && u === 0 && f === 0) || (d = $r * s + Cn * Math.abs(U), U += T * f + $ * l - (j * u + D * a), U >= d || -U >= d)) return U;
  G = l * $, c = _ * l, y = c - (c - l), m = l - y, c = _ * $, g = c - (c - $), v = $ - g, I = m * v - (G - y * g - m * g - y * v), F = a * D, c = _ * a, y = c - (c - a), m = a - y, c = _ * D, g = c - (c - D), v = D - g, W = m * v - (F - y * g - m * g - y * v), M = I - W, h = I - M, yt[0] = I - (M + h) + (h - W), P = G + M, h = P - G, L = G - (P - h) + (M - h), M = L - F, h = L - M, yt[1] = L - (M + h) + (h - F), R = P + M, h = R - P, yt[2] = P - (R - h) + (M - h), yt[3] = R;
  const w = at(4, Bt, 4, yt, tn);
  G = T * f, c = _ * T, y = c - (c - T), m = T - y, c = _ * f, g = c - (c - f), v = f - g, I = m * v - (G - y * g - m * g - y * v), F = j * u, c = _ * j, y = c - (c - j), m = j - y, c = _ * u, g = c - (c - u), v = u - g, W = m * v - (F - y * g - m * g - y * v), M = I - W, h = I - M, yt[0] = I - (M + h) + (h - W), P = G + M, h = P - G, L = G - (P - h) + (M - h), M = L - F, h = L - M, yt[1] = L - (M + h) + (h - F), R = P + M, h = R - P, yt[2] = P - (R - h) + (M - h), yt[3] = R;
  const p = at(w, tn, 4, yt, en);
  G = l * f, c = _ * l, y = c - (c - l), m = l - y, c = _ * f, g = c - (c - f), v = f - g, I = m * v - (G - y * g - m * g - y * v), F = a * u, c = _ * a, y = c - (c - a), m = a - y, c = _ * u, g = c - (c - u), v = u - g, W = m * v - (F - y * g - m * g - y * v), M = I - W, h = I - M, yt[0] = I - (M + h) + (h - W), P = G + M, h = P - G, L = G - (P - h) + (M - h), M = L - F, h = L - M, yt[1] = L - (M + h) + (h - F), R = P + M, h = R - P, yt[2] = P - (R - h) + (M - h), yt[3] = R;
  const b = at(p, en, 4, yt, nn);
  return nn[b - 1];
}
function $t(e, t, n, r, i, o) {
  const s = (t - o) * (n - i), l = (e - i) * (r - o), a = s - l, u = Math.abs(s + l);
  return Math.abs(a) >= Rr * u ? a : -Ur(e, t, n, r, i, o, u);
}
const zr = (10 + 96 * ct) * ct, Vr = (4 + 48 * ct) * ct, Hr = (44 + 576 * ct) * ct * ct, kt = Z(4), It = Z(4), Ct = Z(4), vt = Z(4), Pt = Z(4), At = Z(4), dt = Z(4), mt = Z(4), xe = Z(8), Me = Z(8), be = Z(8), ve = Z(8), Pe = Z(8), Ae = Z(8), ie = Z(8), oe = Z(8), se = Z(8), _t = Z(4), Gt = Z(4), Ft = Z(4), B = Z(8), X = Z(16), rt = Z(16), it = Z(16), nt = Z(32), Lt = Z(32), ot = Z(48), gt = Z(64);
let Yt = Z(1152), Ee = Z(1152);
function st(e, t, n) {
  e = at(e, Yt, t, n, Ee);
  const r = Yt;
  return Yt = Ee, Ee = r, e;
}
function Jr(e, t, n, r, i, o, s, l, a) {
  let u, f, h, c, y, m, g, v, M, P, L, G, I, F, W, R, T, D, j, $, U, d, w, p, b, A, k, x, S, O, C, q, Y, z, N;
  const H = e - s, J = n - s, K = i - s, tt = t - l, Q = r - l, et = o - l;
  C = J * et, w = _ * J, p = w - (w - J), b = J - p, w = _ * et, A = w - (w - et), k = et - A, q = b * k - (C - p * A - b * A - p * k), Y = K * Q, w = _ * K, p = w - (w - K), b = K - p, w = _ * Q, A = w - (w - Q), k = Q - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, kt[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, kt[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, kt[2] = S - (N - d) + (x - d), kt[3] = N, C = K * tt, w = _ * K, p = w - (w - K), b = K - p, w = _ * tt, A = w - (w - tt), k = tt - A, q = b * k - (C - p * A - b * A - p * k), Y = H * et, w = _ * H, p = w - (w - H), b = H - p, w = _ * et, A = w - (w - et), k = et - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, It[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, It[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, It[2] = S - (N - d) + (x - d), It[3] = N, C = H * Q, w = _ * H, p = w - (w - H), b = H - p, w = _ * Q, A = w - (w - Q), k = Q - A, q = b * k - (C - p * A - b * A - p * k), Y = J * tt, w = _ * J, p = w - (w - J), b = J - p, w = _ * tt, A = w - (w - tt), k = tt - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, Ct[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, Ct[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, Ct[2] = S - (N - d) + (x - d), Ct[3] = N, u = at(
    at(
      at(
        E(E(4, kt, H, B), B, H, X),
        X,
        E(E(4, kt, tt, B), B, tt, rt),
        rt,
        nt
      ),
      nt,
      at(
        E(E(4, It, J, B), B, J, X),
        X,
        E(E(4, It, Q, B), B, Q, rt),
        rt,
        Lt
      ),
      Lt,
      gt
    ),
    gt,
    at(
      E(E(4, Ct, K, B), B, K, X),
      X,
      E(E(4, Ct, et, B), B, et, rt),
      rt,
      nt
    ),
    nt,
    Yt
  );
  let Tt = Ln(u, Yt), Rt = Vr * a;
  if (Tt >= Rt || -Tt >= Rt || (d = e - H, f = e - (H + d) + (d - s), d = t - tt, y = t - (tt + d) + (d - l), d = n - J, h = n - (J + d) + (d - s), d = r - Q, m = r - (Q + d) + (d - l), d = i - K, c = i - (K + d) + (d - s), d = o - et, g = o - (et + d) + (d - l), f === 0 && h === 0 && c === 0 && y === 0 && m === 0 && g === 0) || (Rt = Hr * a + Cn * Math.abs(Tt), Tt += (H * H + tt * tt) * (J * g + et * h - (Q * c + K * m)) + 2 * (H * f + tt * y) * (J * et - Q * K) + ((J * J + Q * Q) * (K * y + tt * c - (et * f + H * g)) + 2 * (J * h + Q * m) * (K * tt - et * H)) + ((K * K + et * et) * (H * m + Q * f - (tt * h + J * y)) + 2 * (K * c + et * g) * (H * Q - tt * J)), Tt >= Rt || -Tt >= Rt))
    return Tt;
  if ((h !== 0 || m !== 0 || c !== 0 || g !== 0) && (C = H * H, w = _ * H, p = w - (w - H), b = H - p, q = b * b - (C - p * p - (p + p) * b), Y = tt * tt, w = _ * tt, p = w - (w - tt), b = tt - p, z = b * b - (Y - p * p - (p + p) * b), x = q + z, d = x - q, vt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, vt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, vt[2] = S - (N - d) + (x - d), vt[3] = N), (c !== 0 || g !== 0 || f !== 0 || y !== 0) && (C = J * J, w = _ * J, p = w - (w - J), b = J - p, q = b * b - (C - p * p - (p + p) * b), Y = Q * Q, w = _ * Q, p = w - (w - Q), b = Q - p, z = b * b - (Y - p * p - (p + p) * b), x = q + z, d = x - q, Pt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, Pt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, Pt[2] = S - (N - d) + (x - d), Pt[3] = N), (f !== 0 || y !== 0 || h !== 0 || m !== 0) && (C = K * K, w = _ * K, p = w - (w - K), b = K - p, q = b * b - (C - p * p - (p + p) * b), Y = et * et, w = _ * et, p = w - (w - et), b = et - p, z = b * b - (Y - p * p - (p + p) * b), x = q + z, d = x - q, At[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, At[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, At[2] = S - (N - d) + (x - d), At[3] = N), f !== 0 && (v = E(4, kt, f, xe), u = st(u, Mt(
    E(v, xe, 2 * H, X),
    X,
    E(E(4, At, f, B), B, Q, rt),
    rt,
    E(E(4, Pt, f, B), B, -et, it),
    it,
    nt,
    ot
  ), ot)), y !== 0 && (M = E(4, kt, y, Me), u = st(u, Mt(
    E(M, Me, 2 * tt, X),
    X,
    E(E(4, Pt, y, B), B, K, rt),
    rt,
    E(E(4, At, y, B), B, -J, it),
    it,
    nt,
    ot
  ), ot)), h !== 0 && (P = E(4, It, h, be), u = st(u, Mt(
    E(P, be, 2 * J, X),
    X,
    E(E(4, vt, h, B), B, et, rt),
    rt,
    E(E(4, At, h, B), B, -tt, it),
    it,
    nt,
    ot
  ), ot)), m !== 0 && (L = E(4, It, m, ve), u = st(u, Mt(
    E(L, ve, 2 * Q, X),
    X,
    E(E(4, At, m, B), B, H, rt),
    rt,
    E(E(4, vt, m, B), B, -K, it),
    it,
    nt,
    ot
  ), ot)), c !== 0 && (G = E(4, Ct, c, Pe), u = st(u, Mt(
    E(G, Pe, 2 * K, X),
    X,
    E(E(4, Pt, c, B), B, tt, rt),
    rt,
    E(E(4, vt, c, B), B, -Q, it),
    it,
    nt,
    ot
  ), ot)), g !== 0 && (I = E(4, Ct, g, Ae), u = st(u, Mt(
    E(I, Ae, 2 * et, X),
    X,
    E(E(4, vt, g, B), B, J, rt),
    rt,
    E(E(4, Pt, g, B), B, -H, it),
    it,
    nt,
    ot
  ), ot)), f !== 0 || y !== 0) {
    if (h !== 0 || m !== 0 || c !== 0 || g !== 0 ? (C = h * et, w = _ * h, p = w - (w - h), b = h - p, w = _ * et, A = w - (w - et), k = et - A, q = b * k - (C - p * A - b * A - p * k), Y = J * g, w = _ * J, p = w - (w - J), b = J - p, w = _ * g, A = w - (w - g), k = g - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, dt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, dt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, dt[2] = S - (N - d) + (x - d), dt[3] = N, C = c * -Q, w = _ * c, p = w - (w - c), b = c - p, w = _ * -Q, A = w - (w - -Q), k = -Q - A, q = b * k - (C - p * A - b * A - p * k), Y = K * -m, w = _ * K, p = w - (w - K), b = K - p, w = _ * -m, A = w - (w - -m), k = -m - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, mt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, mt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, mt[2] = S - (N - d) + (x - d), mt[3] = N, W = at(4, dt, 4, mt, oe), C = h * g, w = _ * h, p = w - (w - h), b = h - p, w = _ * g, A = w - (w - g), k = g - A, q = b * k - (C - p * A - b * A - p * k), Y = c * m, w = _ * c, p = w - (w - c), b = c - p, w = _ * m, A = w - (w - m), k = m - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, Gt[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, Gt[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, Gt[2] = S - (N - d) + (x - d), Gt[3] = N, D = 4) : (oe[0] = 0, W = 1, Gt[0] = 0, D = 1), f !== 0) {
      const ut = E(W, oe, f, it);
      u = st(u, at(
        E(v, xe, f, X),
        X,
        E(ut, it, 2 * H, nt),
        nt,
        ot
      ), ot);
      const ft = E(D, Gt, f, B);
      u = st(u, Mt(
        E(ft, B, 2 * H, X),
        X,
        E(ft, B, f, rt),
        rt,
        E(ut, it, f, nt),
        nt,
        Lt,
        gt
      ), gt), m !== 0 && (u = st(u, E(E(4, At, f, B), B, m, X), X)), g !== 0 && (u = st(u, E(E(4, Pt, -f, B), B, g, X), X));
    }
    if (y !== 0) {
      const ut = E(W, oe, y, it);
      u = st(u, at(
        E(M, Me, y, X),
        X,
        E(ut, it, 2 * tt, nt),
        nt,
        ot
      ), ot);
      const ft = E(D, Gt, y, B);
      u = st(u, Mt(
        E(ft, B, 2 * tt, X),
        X,
        E(ft, B, y, rt),
        rt,
        E(ut, it, y, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  if (h !== 0 || m !== 0) {
    if (c !== 0 || g !== 0 || f !== 0 || y !== 0 ? (C = c * tt, w = _ * c, p = w - (w - c), b = c - p, w = _ * tt, A = w - (w - tt), k = tt - A, q = b * k - (C - p * A - b * A - p * k), Y = K * y, w = _ * K, p = w - (w - K), b = K - p, w = _ * y, A = w - (w - y), k = y - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, dt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, dt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, dt[2] = S - (N - d) + (x - d), dt[3] = N, $ = -et, U = -g, C = f * $, w = _ * f, p = w - (w - f), b = f - p, w = _ * $, A = w - (w - $), k = $ - A, q = b * k - (C - p * A - b * A - p * k), Y = H * U, w = _ * H, p = w - (w - H), b = H - p, w = _ * U, A = w - (w - U), k = U - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, mt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, mt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, mt[2] = S - (N - d) + (x - d), mt[3] = N, R = at(4, dt, 4, mt, se), C = c * y, w = _ * c, p = w - (w - c), b = c - p, w = _ * y, A = w - (w - y), k = y - A, q = b * k - (C - p * A - b * A - p * k), Y = f * g, w = _ * f, p = w - (w - f), b = f - p, w = _ * g, A = w - (w - g), k = g - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, Ft[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, Ft[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, Ft[2] = S - (N - d) + (x - d), Ft[3] = N, j = 4) : (se[0] = 0, R = 1, Ft[0] = 0, j = 1), h !== 0) {
      const ut = E(R, se, h, it);
      u = st(u, at(
        E(P, be, h, X),
        X,
        E(ut, it, 2 * J, nt),
        nt,
        ot
      ), ot);
      const ft = E(j, Ft, h, B);
      u = st(u, Mt(
        E(ft, B, 2 * J, X),
        X,
        E(ft, B, h, rt),
        rt,
        E(ut, it, h, nt),
        nt,
        Lt,
        gt
      ), gt), g !== 0 && (u = st(u, E(E(4, vt, h, B), B, g, X), X)), y !== 0 && (u = st(u, E(E(4, At, -h, B), B, y, X), X));
    }
    if (m !== 0) {
      const ut = E(R, se, m, it);
      u = st(u, at(
        E(L, ve, m, X),
        X,
        E(ut, it, 2 * Q, nt),
        nt,
        ot
      ), ot);
      const ft = E(j, Ft, m, B);
      u = st(u, Mt(
        E(ft, B, 2 * Q, X),
        X,
        E(ft, B, m, rt),
        rt,
        E(ut, it, m, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  if (c !== 0 || g !== 0) {
    if (f !== 0 || y !== 0 || h !== 0 || m !== 0 ? (C = f * Q, w = _ * f, p = w - (w - f), b = f - p, w = _ * Q, A = w - (w - Q), k = Q - A, q = b * k - (C - p * A - b * A - p * k), Y = H * m, w = _ * H, p = w - (w - H), b = H - p, w = _ * m, A = w - (w - m), k = m - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, dt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, dt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, dt[2] = S - (N - d) + (x - d), dt[3] = N, $ = -tt, U = -y, C = h * $, w = _ * h, p = w - (w - h), b = h - p, w = _ * $, A = w - (w - $), k = $ - A, q = b * k - (C - p * A - b * A - p * k), Y = J * U, w = _ * J, p = w - (w - J), b = J - p, w = _ * U, A = w - (w - U), k = U - A, z = b * k - (Y - p * A - b * A - p * k), x = q + z, d = x - q, mt[0] = q - (x - d) + (z - d), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O + Y, d = x - O, mt[1] = O - (x - d) + (Y - d), N = S + x, d = N - S, mt[2] = S - (N - d) + (x - d), mt[3] = N, F = at(4, dt, 4, mt, ie), C = f * m, w = _ * f, p = w - (w - f), b = f - p, w = _ * m, A = w - (w - m), k = m - A, q = b * k - (C - p * A - b * A - p * k), Y = h * y, w = _ * h, p = w - (w - h), b = h - p, w = _ * y, A = w - (w - y), k = y - A, z = b * k - (Y - p * A - b * A - p * k), x = q - z, d = q - x, _t[0] = q - (x + d) + (d - z), S = C + x, d = S - C, O = C - (S - d) + (x - d), x = O - Y, d = O - x, _t[1] = O - (x + d) + (d - Y), N = S + x, d = N - S, _t[2] = S - (N - d) + (x - d), _t[3] = N, T = 4) : (ie[0] = 0, F = 1, _t[0] = 0, T = 1), c !== 0) {
      const ut = E(F, ie, c, it);
      u = st(u, at(
        E(G, Pe, c, X),
        X,
        E(ut, it, 2 * K, nt),
        nt,
        ot
      ), ot);
      const ft = E(T, _t, c, B);
      u = st(u, Mt(
        E(ft, B, 2 * K, X),
        X,
        E(ft, B, c, rt),
        rt,
        E(ut, it, c, nt),
        nt,
        Lt,
        gt
      ), gt), y !== 0 && (u = st(u, E(E(4, Pt, c, B), B, y, X), X)), m !== 0 && (u = st(u, E(E(4, vt, -c, B), B, m, X), X));
    }
    if (g !== 0) {
      const ut = E(F, ie, g, it);
      u = st(u, at(
        E(I, Ae, g, X),
        X,
        E(ut, it, 2 * et, nt),
        nt,
        ot
      ), ot);
      const ft = E(T, _t, g, B);
      u = st(u, Mt(
        E(ft, B, 2 * et, X),
        X,
        E(ft, B, g, rt),
        rt,
        E(ut, it, g, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  return Yt[u - 1];
}
function Kr(e, t, n, r, i, o, s, l) {
  const a = e - s, u = n - s, f = i - s, h = t - l, c = r - l, y = o - l, m = u * y, g = f * c, v = a * a + h * h, M = f * h, P = a * y, L = u * u + c * c, G = a * c, I = u * h, F = f * f + y * y, W = v * (m - g) + L * (M - P) + F * (G - I), R = (Math.abs(m) + Math.abs(g)) * v + (Math.abs(M) + Math.abs(P)) * L + (Math.abs(G) + Math.abs(I)) * F, T = zr * R;
  return W > T || -W > T ? W : Jr(e, t, n, r, i, o, s, l, R);
}
const Vt = St.project, rn = St.unproject;
function on(e, t, n, r, i = St.project, o = St.unproject, s = !1) {
  i && (e = i(e), t = i(t), n = i(n), r = i(r));
  let l = [t[0] - e[0], t[1] - e[1]], a = [r[0] - n[0], r[1] - n[1]], u = qt(l, a);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let f = qt([n[0] - e[0], n[1] - e[1]], a) / u, h = qt([n[0] - e[0], n[1] - e[1]], l) / u;
  return !s && (f < 0 || f > 1 || h < 0 || h > 1) ? (console.log("交点不在两条线段上"), null) : o ? o([e[0] + l[0] * f, e[1] + l[1] * f]) : [e[0] + l[0] * f, e[1] + l[1] * f];
}
function Qr(e, t, n = !1) {
  if (n) {
    let r = Vt(e), i = t[0], o = t[1], s = t[2], l = t[3];
    return [i, o] = Vt([i, o]), [s, l] = Vt([s, l]), r[0] < i || r[0] > s || r[1] < o || r[1] > l;
  } else {
    let r = t[0], i = t[1], o = t[2], s = t[3];
    return e[0] < r || e[0] > o || e[1] < i || e[1] > s;
  }
}
function Zr(e, t) {
  return ti(e, Nr(t));
}
function ti(e, t) {
  let n = e[e.length - 1], r, i, o, s = t;
  for (let l in e) {
    r = e[l];
    let a = s;
    s = [], i = a[a.length - 1];
    for (let u in a) {
      if (o = a[u], Se(o, n, r)) {
        if (!Se(i, n, r)) {
          let f = on(
            i,
            o,
            n,
            r,
            Vt,
            rn,
            !0
          );
          s.push(f);
        }
        s.push(o);
      } else if (Se(i, n, r)) {
        let f = on(
          i,
          o,
          n,
          r,
          Vt,
          rn,
          !0
        );
        s.push(f);
      }
      i = o;
    }
    n = r;
  }
  return s;
}
function Bo(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++)
    t[r][1] > e[1] != t[i][1] > e[1] && e[0] < (t[i][0] - t[r][0]) * (e[1] - t[r][1]) / (t[i][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Oo(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    s[0] < t && (t = s[0]), s[0] > r && (r = s[0]), s[1] < n && (n = s[1]), s[1] > i && (i = s[1]);
  }
  return [t, n, r, i];
}
function qo(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function Yo(e, t) {
  return (e - 1 + t) % t;
}
function Se(e, t, n) {
  return _n(t, n, e) > 0;
}
function No(e) {
  return Math.abs(e) <= 180 ? e : e - Zt(e) * 360;
}
function Zt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function _n(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], i = e[1], o = t[0], s = t[1], l = n[0], a = n[1], u = (o - r) * (a - i) - (s - i) * (l - r);
  return u = Zt(u), u;
}
function sn(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), i = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return i = i * 180 / Math.PI, i < 0 && (i += 360), i;
}
function Wo(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let i = e[0], o = e[1], s = t[0], l = t[1], a = n[0], u = n[1], f = $t(i, o, s, l, a, u);
  return r && (f = -f), f = Zt(f), f;
}
function Do(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let i = e[0], o = e[1], s = t[0], l = t[1], a = n[0], u = n[1], f = r[0], h = r[1], c = Kr(i, o, s, l, a, u, f, h);
  return c = Zt(c), c;
}
function Ro(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let i = e[0], o = e[1], s = t[0], l = t[1], a = n[0], u = n[1], f = r[0], h = r[1];
  const c = i - f, y = o - h, m = s - f, g = l - h, v = a - f, M = u - h, P = c * c + y * y, L = m * m + g * g, G = v * v + M * M;
  let I = c * (g * G - L * M) - y * (m * G - L * v) + P * (m * M - g * v);
  return Zt(I);
}
class je {
  constructor(t, n) {
    V(this, "MBR");
    // default
    V(this, "data");
    // 三维数组
    V(this, "shape");
    // 三维数组的形状
    V(this, "rows");
    // 行数
    V(this, "cols");
    // 列数
    V(this, "bands");
    // 波段数
    V(this, "stasticsCache", []);
    this.MBR = t, this.data = n, this.shape = [n.length, n[0].length, n[0][0].length], [this.bands, this.rows, this.cols] = this.shape;
  }
  getShape() {
    return [this.data.length, this.data[0].length, this.data[0][0].length];
  }
  getBand(t) {
    return this.data[t];
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
  setMBR(t) {
    this.MBR = t;
  }
  getXYZValue(t, n = 0) {
    let r = t[0], i = t[1];
    return this.data[n][i][r];
  }
  set XYZValue(t) {
    let n = t[0], r = t[1], i = t[2], o = t[3], s = this.data[i][r][n];
    if (this.data[i][r][n] = o, this.stasticsCache[i]) {
      let l = this.stasticsCache[i].max, a = this.stasticsCache[i].min, u = this.stasticsCache[i].mean, f = this.data[i][r][n];
      f > l && (l = f), f < a && (a = f);
      let h = u * this.rows * this.cols;
      h = h - s + f, u = h / (this.rows * this.cols), this.stasticsCache[i] = { max: l, min: a, mean: u };
    }
  }
  /**
   * 获取指定范围，指定波段的网格数据
   * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGrid(t, n = [0]) {
    let r = t[0], i = t[1], o = t[2], s = t[3], l = [];
    for (let a of n) {
      let u = [];
      for (let f = r; f <= o; f++) {
        let h = [];
        for (let c = i; c <= s; c++)
          h.push(this.data[a][f][c]);
        u.push(h);
      }
      l.push(u);
    }
    return l;
  }
  // 在内部修改网格数据 使用均值替换0等无效值
  // 由于网格数据是三维数组，因此需要指定波段号
  /**
   * 在内部修改网格数据 使用均值替换0等无效值
   * @param band - 波段号
   */
  fillInvalidValue(t) {
    let n = this.data[t], r = 0, i = 0;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[s][l];
        a !== 0 && (r += a, i++);
      }
    let o = r / i;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[s][l];
        (a === 0 || a === -9999 || a === 999999) && (n[s][l] = o);
      }
  }
  /**
   * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGridObj(t, n = [0]) {
    let r = t[0], i = t[1], o = t[2], s = t[3], l = [];
    for (let u of n) {
      let f = [];
      for (let h = r; h <= o; h++) {
        let c = [];
        for (let y = i; y <= s; y++)
          c.push(this.data[u][h][y]);
        f.push(c);
      }
      l.push(f);
    }
    return new je(t, l);
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], i = t[2], o = t[3], s = this.getGridCoord([n, r]), l = this.getGridCoord([i, o]);
    if (s === null || l === null)
      return null;
    {
      let a = s[0], u = s[1], f = l[0], h = l[1];
      return [a, u, f, h];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (Qr(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], i = this.MBR[0], o = this.MBR[1], s = this.MBR[2], l = this.MBR[3], a = Math.floor((r - o) / (l - o) * this.rows), u = Math.floor((n - i) / (s - i) * this.cols);
      return [a, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], i = this.MBR[0], o = this.MBR[1], s = this.MBR[2], l = this.MBR[3], a = (r + 0.5) / this.cols * (s - i) + i, u = (n + 0.5) / this.rows * (l - o) + o;
    return [a, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    if (!this.stasticsCache[t]) {
      let n = this.data[t], r = n[0][0], i = n[0][0], o = 0;
      for (let l = 0; l < this.rows; l++)
        for (let a = 0; a < this.cols; a++) {
          let u = n[l][a];
          u > r && (r = u), u < i && (i = u), o += u;
        }
      let s = o / (this.rows * this.cols);
      this.stasticsCache[t] = { max: r, min: i, mean: s };
    }
    return this.stasticsCache[t];
  }
  // Binarization a certain band of the grid; get a value, less than which is 0, greater than which is 1
  // 二值化网格数据，返回二值化后的网格数据
  // - threshold: 二值化阈值
  /**
   * 二值化网格数据，返回二值化后的网格数据
   * @param band - 波段号
   * @param threshold - 二值化阈值
   */
  binarization(t, n) {
    let r = this.data[t], i = [];
    for (let o = 0; o < this.rows; o++) {
      let s = [];
      for (let l = 0; l < this.cols; l++)
        r[o][l] < n ? s.push(0) : s.push(1);
      i.push(s);
    }
    return i;
  }
  /** 
  * the result grid size is [rows - 1, cols - 1], and the render function should move 1/2 grid size to the left and up
  */
  getCoutourCode(t, n) {
    let r = this.binarization(t, n), i = [];
    for (let o = 0; o < this.rows - 1; o++) {
      let s = [];
      for (let l = 0; l < this.cols - 1; l++) {
        let a = 0;
        a += r[o][l] * 8, a += r[o][l + 1] * 4, a += r[o + 1][l + 1] * 2, a += r[o + 1][l] * 1, s.push(a);
      }
      i.push(s);
    }
    return i;
  }
  getMean(t) {
    let n = this.data[t], r = 0;
    for (let i = 0; i < this.rows; i++)
      for (let o = 0; o < this.cols; o++)
        r += n[i][o];
    return r / (this.rows * this.cols);
  }
  getSorted1DArray(t) {
    let n = this.data[t], r = [];
    for (let i = 0; i < this.rows; i++)
      for (let o = 0; o < this.cols; o++)
        r.push(n[i][o]);
    return r.sort((i, o) => i - o), r;
  }
  static fromFillValue(t = 0, n) {
    let r = [];
    for (let i = 0; i < n[0]; i++) {
      let o = [];
      for (let s = 0; s < n[1]; s++) {
        let l = [];
        for (let a = 0; a < n[2]; a++)
          l.push(t);
        o.push(l);
      }
      r.push(o);
    }
    return new je([0, 0, 0, 0], r);
  }
}
function Xo(e, t, n) {
  let r = e.data[t], i = [];
  for (let o = 0; o < e.rows; o++) {
    let s = [];
    for (let l = 0; l < e.cols; l++)
      r[o][l] < n ? s.push(0) : s.push(1);
    i.push(s);
  }
  return i;
}
function $o(e, t) {
  let n = e.rows * e.cols, r = ei(n) + 3;
  (t > r || t < 0) && (t = r);
  let i = [0, 0, e.rows - 1, e.cols - 1];
  return Ut(i, 0, t);
}
function Ut(e, t, n) {
  let r = {
    boundary: e,
    children: [],
    depth: t,
    maxDepth: n,
    isLeaf: !1,
    isDivided: !1
  };
  if (t === n - 1)
    return r.isLeaf = !0, r;
  {
    r.isDivided = !0;
    let i = e[0], o = e[1], s = e[2], l = e[3], a = (i + s) / 2;
    a = Math.floor(a);
    let u = (o + l) / 2;
    u = Math.floor(u);
    let f = [i, u, a, l], h = [a, u, s, l], c = [i, o, a, u], y = [a, o, s, u], m = Ut(f, t + 1, n), g = Ut(h, t + 1, n), v = Ut(c, t + 1, n), M = Ut(y, t + 1, n);
    return r.children.push(m), r.children.push(g), r.children.push(v), r.children.push(M), r;
  }
}
function ei(e) {
  let t = 0, n = 1;
  for (; n < e; )
    n *= 4, t++;
  return t;
}
function Uo(e) {
  let t = -1 / 0, n = 1 / 0;
  for (let r = 0; r < e.length; r++)
    for (let i = 0; i < e[0].length; i++)
      e[r][i] > t && (t = e[r][i]), e[r][i] < n && (n = e[r][i]);
  for (let r = 0; r < e.length; r++)
    for (let i = 0; i < e[0].length; i++)
      (e[r][i] === t || e[r][i] === n) && (e[r][i] = 0);
}
const ni = Math.E;
function Te(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function ri(e, t) {
  let i = e, o = t;
  i *= 3284157443, o ^= i << 128 | i >> 128, o *= 1911520717, i ^= o << 128 | o >> 128, i *= 2048419325;
  const s = i * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(s),
    y: Math.sin(s)
  };
}
function le(e, t, n, r) {
  const i = ri(e, t), o = n - e, s = r - t;
  return o * i.x + s * i.y;
}
function zo(e, t) {
  const n = Math.floor(e), r = n + 1, i = Math.floor(t), o = i + 1, s = e - n, l = t - i, a = le(n, i, e, t), u = le(r, i, e, t), f = Te(a, u, s), h = le(n, o, e, t), c = le(r, o, e, t), y = Te(h, c, s);
  return Te(f, y, l);
}
function Vo(e, t) {
  return Math.pow(ni, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function Ho(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
function Jo(e, t, n) {
  const r = new Array(e).fill(0).map(() => new Array(t).fill(0)), i = new Array(n).fill(0).map(() => ({
    x: Math.random() * e,
    y: Math.random() * t
  }));
  for (let o = 0; o < e; o++)
    for (let s = 0; s < t; s++) {
      let l = 1e5;
      for (let a = 0; a < n; a++) {
        const u = Math.sqrt(
          Math.pow(i[a].x - o, 2) + Math.pow(i[a].y - s, 2)
        );
        u < l && (l = u);
      }
      r[o][s] = l;
    }
  return r;
}
function Ko(e, t, n, r = "horizontal") {
  const i = new Array(e).fill(0).map(() => new Array(t).fill(0)), o = Math.floor(e / n);
  for (let s = 0; s < e; s++)
    for (let l = 0; l < t; l++)
      r === "vertical" ? i[s][l] = Math.floor(s / o) % 2 === 0 ? 1 : 0 : r === "horizontal" ? i[s][l] = Math.floor(l / o) % 2 === 0 ? 1 : 0 : r === "diagonal" ? i[s][l] = Math.floor((s + l) / o) % 2 === 0 ? 1 : 0 : r === "all" && (i[s][l] = Math.floor((s + l) / o) % 2 === 0 ? 1 : 0, i[s][l] += Math.floor(s / o) % 2 === 0 ? 1 : 0, i[s][l] += Math.floor(l / o) % 2 === 0 ? 1 : 0);
  return i;
}
class Ht {
  constructor(t, n) {
    V(this, "bbox", [1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    V(this, "coordinates");
    V(this, "properties");
    V(this, "projection", St);
    this.coordinates = t, n && (this.properties = n), this.updateBBox();
  }
  toXY() {
  }
  set Properties(t) {
    this.properties = t;
  }
  clone() {
    const t = this.coordinates.slice(), n = { ...this.properties };
    return new this.constructor(t, n);
  }
  equals(t) {
    return JSON.stringify(this.toGeoJSON()) === JSON.stringify(t.toGeoJSON());
  }
  toGeoJSON() {
    let t = {
      type: "Feature",
      geometry: {
        type: this.constructor.name,
        coordinates: this.coordinates
      }
      // properties: this.properties,
    };
    return this.properties && (t.properties = this.properties), this.bbox && (t.bbox = this.bbox), t;
  }
  static fromGeoJSON(t) {
    if (t.type === "Feature")
      return this.fromFeature(t);
    if (t.type === "Geometry")
      return this.fromGeometry(t);
    throw t.type === "FeatureCollection" ? new Error(t.type + "is not supported") : new Error("Unknown GeoJSON type: " + t.type);
  }
}
V(Ht, "fromFeature"), V(Ht, "fromGeometry");
class Wt {
  constructor(t, n) {
    V(this, "coordinates");
    V(this, "geometries", []);
    V(this, "bbox", [1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    V(this, "properties");
    V(this, "projection", St);
    n && (this.properties = n), t.forEach((r) => {
      this.geometries.push(r), this.updateBBox(r);
    });
  }
  toXY() {
  }
  // 未实现
  updateBBox(t) {
    const n = t.bbox;
    n && (this.bbox = Or(this.bbox, n));
  }
  addGeometry(t) {
    this.geometries.push(t), this.updateBBox(t);
  }
  _update(t, n) {
    this.geometries[n] = t, this.updateBBox(t);
  }
  toGeoJSON() {
    let t = {
      type: "Feature",
      geometry: {
        type: "GeometryCollection",
        geometries: this.geometries.map((n) => n.toGeoJSON().geometry)
      }
      // properties: this.properties,
    };
    return this.properties && (t.properties = this.properties), this.bbox && (t.bbox = this.bbox), t;
  }
}
const ke = lr;
class ht extends Ht {
  // 默认为球面墨卡托投影
  get lon() {
    return this.coordinates[0];
  }
  get lat() {
    return this.coordinates[1];
  }
  constructor(t, n) {
    super(t, n);
  }
  updateBBox() {
    this.bbox = [this.coordinates[0], this.coordinates[1], this.coordinates[0], this.coordinates[1]];
  }
  toXY() {
    return this.projection.project(this.coordinates);
  }
  static isPoint(t) {
    return t instanceof ht;
  }
  static fromGeometry(t) {
    return new ht(t.coordinates);
  }
  static fromFeature(t) {
    const { geometry: n, properties: r } = t;
    if (n.type !== "Point")
      throw new Error(`The input geometry is not a Point: ${n.type}`);
    const i = n;
    return r ? new ht(i.coordinates, r) : new ht(i.coordinates);
  }
}
class pt extends Wt {
  constructor(n, r) {
    var t = (...Gs) => (super(...Gs), // 可以传入 点类型数组 但是会忽略每一个点的 properties
    // 因为 MultiPoint 本身有 properties
    // 建议在外部提取每一个点的 properties 再传入 到 MultiPoint 的 properties
    V(this, "coordinates"), this);
    n[0] instanceof ht ? (t(n, r), this.coordinates = n.map((i) => i.coordinates)) : (t(
      n.map((i) => new ht(i)),
      r
    ), this.coordinates = n);
  }
  toXY() {
    return this.geometries.map((n) => n.toXY());
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
  centroid(n) {
    if (n) {
      let r = 0;
      for (let a = 0; a < n.length; a++)
        r += n[a];
      for (let a = 0; a < n.length; a++)
        n[a] /= r;
      let i = 0, o = 0;
      for (let a = 0; a < this.coordinates.length; a++) {
        let u = this.coordinates[a];
        i += u[0] * n[a], o += u[1] * n[a];
      }
      let s = i, l = o;
      return new ht([s, l]);
    } else {
      let r = 0, i = 0;
      for (let l = 0; l < this.coordinates.length; l++) {
        let a = this.coordinates[l];
        r += a[0], i += a[1];
      }
      let o = r / this.coordinates.length, s = i / this.coordinates.length;
      return new ht([o, s]);
    }
  }
  /**
   * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
   * @param geometry 
   */
  addGeometry(n) {
    n instanceof ht ? (this.geometries.push(n), this.coordinates.push(n.coordinates), this.updateBBox(n)) : n instanceof pt ? (this.geometries.concat(n.geometries), this.coordinates.concat(n.coordinates), this.updateBBox(n)) : (this.geometries.push(new ht(n)), this.coordinates.push(n), this.updateBBox(this.geometries[this.geometries.length - 1]));
  }
  toGeoJSON() {
    let n = {
      type: "Feature",
      geometry: {
        type: "MultiPoint",
        // 类型断言
        coordinates: this.geometries.map((r) => r.coordinates)
      }
    };
    return this.properties && (n.properties = this.properties), this.bbox && (n.bbox = this.bbox), n;
  }
  static isMultiPoint(n) {
    return n instanceof pt;
  }
  static fromFeature(n) {
    const { geometry: r, properties: i } = n;
    if (r.type !== "MultiPoint")
      throw new Error(`The input geometry is not a MultiPoint: ${r.type}`);
    const o = r;
    return i ? new pt(o.coordinates, i) : new pt(o.coordinates);
  }
  static fromGeometry(n) {
    return new pt(n.coordinates);
  }
}
function Qo(...e) {
  if (e.length === 1) {
    if (!ke(e[0]) && e[0].length === 2)
      return new ht(e[0]);
    if (ke(e[0]))
      return new ht([e[0].lon || e[0].lng || e[0].x, e[0].lat || e[0].y], e[1]);
    throw new Error("Invalid input");
  } else if (e.length === 2) {
    if (typeof e[0] == "number" && typeof e[1] == "number")
      return new ht([e[0], e[1]]);
    if (ke(e[0]))
      return new ht([e[0].lon || e[0].lng || e[0].x, e[0].lat || e[0].y], e[1]);
    if (Array.isArray(e[0]) && e[0].length === 2)
      return new ht(e[0], e[1]);
    throw new Error("Invalid input");
  } else
    return new ht([e[0], e[1]], e[2]);
}
function Zo(e, t) {
  return new pt(e, t);
}
class bt extends Ht {
  constructor(t, n) {
    super(t, n);
  }
  updateBBox() {
    let [t, n, r, i] = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (const [o, s] of this.coordinates)
      t = Math.min(t, o), n = Math.min(n, s), r = Math.max(r, o), i = Math.max(i, s);
    this.bbox = [t, n, r, i];
  }
  toXY() {
    return this.coordinates.map((t) => this.projection.project(t));
  }
  toMultiPoint() {
    return new pt(this.coordinates);
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
  static fromGeometry(t) {
    return new bt(t.coordinates);
  }
  static fromFeature(t) {
    const { geometry: n, properties: r } = t;
    if (n.type !== "LineString")
      throw new Error(`The input geometry is not a LineString: ${n.type}`);
    const i = n;
    return new bt(i.coordinates, r);
  }
  static isLineString(t) {
    return t.type === "LineString";
  }
}
class Jt extends Wt {
  constructor(n, r) {
    var t = (...Fs) => (super(...Fs), V(this, "coordinates"), this);
    n[0] instanceof bt ? (t(n, r), this.coordinates = n.map((i) => i.coordinates)) : (t(
      n.map((i) => new bt(i)),
      r
    ), this.coordinates = n);
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new pt(this.coordinates.flat());
  }
  toXY() {
    return this.geometries.map((n) => n.toXY());
  }
  addGeometry(n) {
    n instanceof bt ? (this.geometries.push(n), this.coordinates.push(n.coordinates), this.updateBBox(n)) : (this.geometries.push(new bt(n)), this.coordinates.push(n), this.updateBBox(this.geometries[this.geometries.length - 1]));
  }
  toGeoJSON() {
    let n = {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        // 类型断言
        coordinates: this.geometries.map((r) => r.coordinates)
      }
    };
    return this.properties && (n.properties = this.properties), this.bbox && (n.bbox = this.bbox), n;
  }
  static fromFeature(n) {
    const { geometry: r, properties: i } = n;
    if (r.type !== "MultiLineString")
      throw new Error(`The input geometry is not a MultiLineString: ${r.type}`);
    const o = r;
    return new Jt(o.coordinates, i);
  }
  static fromGeometry(n) {
    return new Jt(n.coordinates);
  }
}
function ts(e) {
  return new bt(e.map((t) => t.coordinates));
}
class Et extends Ht {
  constructor(t, n) {
    super(t, n);
  }
  toXY() {
    return this.coordinates.map((t) => t.map((n) => this.projection.project(n)));
  }
  toMultiPoint() {
    return new pt(this.coordinates.flat());
  }
  updateBBox() {
    let [t, n, r, i] = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (const o of this.coordinates)
      for (const [s, l] of o)
        t = Math.min(t, s), n = Math.min(n, l), r = Math.max(r, s), i = Math.max(i, l);
    this.bbox = [t, n, r, i];
  }
  static isPolygon(t) {
    return t instanceof Et;
  }
  static fromGeometry(t) {
    return new Et(t.coordinates);
  }
  static fromFeature(t) {
    const { geometry: n, properties: r } = t;
    if (n.type !== "Polygon")
      throw new Error(`The input geometry is not a Polygon: ${n.type}`);
    const i = n;
    return new Et(i.coordinates, r);
  }
}
class Kt extends Wt {
  constructor(n, r) {
    var t = (...js) => (super(...js), V(this, "coordinates"), this);
    n[0] instanceof Et ? (t(n, r), this.coordinates = n.map((i) => i.coordinates)) : (t(
      n.map((i) => new Et(i)),
      r
    ), this.coordinates = n);
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new pt(this.coordinates.flat().flat());
  }
  toXY() {
    return this.geometries.map((n) => n.toXY());
  }
  addGeometry(n) {
    n instanceof Et ? (this.geometries.push(n), this.coordinates.push(n.coordinates), this.updateBBox(n)) : (this.geometries.push(new Et(n)), this.coordinates.push(n), this.updateBBox(this.geometries[this.geometries.length - 1]));
  }
  toGeoJSON() {
    let n = {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        // 类型断言
        coordinates: this.geometries.map((r) => r.coordinates)
      }
    };
    return this.properties && (n.properties = this.properties), this.bbox && (n.bbox = this.bbox), n;
  }
  static fromFeature(n) {
    const { geometry: r, properties: i } = n;
    if (r.type !== "MultiPolygon")
      throw new Error(`The input geometry is not a MultiPolygon: ${r.type}`);
    const o = r;
    return new Kt(o.coordinates, i);
  }
  static fromGeometry(n) {
    return new Kt(n.coordinates);
  }
}
class Gn {
  /**
   * 构造函数
   * @param x - 圆心 x 坐标 
   * @param y - 圆心 y 坐标
   * @param r - 半径
   */
  constructor(t, n, r) {
    V(this, "x");
    V(this, "y");
    V(this, "r");
    V(this, "rSquared");
    this.x = t, this.y = n, this.r = r, this.rSquared = this.r * this.r;
  }
  /**
   * 判断点是否在圆内
   * @param point - 点坐标
   * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
   * @returns {boolean} - true if the point is inside the circle
   */
  contains(t, n = 18e8) {
    let r = t[0], i = t[1];
    return Math.pow(r - this.x, 2) + Math.pow(i - this.y, 2) - this.rSquared <= n;
  }
  /**
   * （仅平面下保证有效）判断圆是否与 MBR 相交
   * @param range - MBR
   * @returns {boolean} - true if the circle intersects the MBR
   */
  intersects(t) {
    let n = Yr(t), r = Math.abs(n.x - this.x), i = Math.abs(n.y - this.y), o = this.r, s = n.w / 2, l = n.h / 2, a = Math.pow(r - s, 2) + Math.pow(i - l, 2);
    return r > o + s || i > o + l ? !1 : r <= s || i <= l ? !0 : a <= this.rSquared;
  }
  static isCircle(t) {
    return t instanceof Gn;
  }
}
function Fn(e) {
  switch (e.type) {
    case "Point":
      return ht.fromGeometry(e);
    case "LineString":
      return bt.fromGeometry(e);
    case "Polygon":
      return Et.fromGeometry(e);
    case "MultiPoint":
      return pt.fromGeometry(e);
    case "MultiLineString":
      return Jt.fromGeometry(e);
    case "MultiPolygon":
      return Kt.fromGeometry(e);
    case "GeometryCollection":
      return oi(e);
    default:
      throw new Error("Unknown geometry type: " + e.type + " in fromGeometryObj");
  }
}
function ii(e) {
  if (e.type === "Feature") {
    const t = e.geometry;
    switch (t.type) {
      case "Point":
        return ht.fromFeature(e);
      case "LineString":
        return bt.fromFeature(e);
      case "Polygon":
        return Et.fromFeature(e);
      case "MultiPoint":
        return pt.fromFeature(e);
      case "MultiLineString":
        return Jt.fromFeature(e);
      case "MultiPolygon":
        return Kt.fromFeature(e);
      case "GeometryCollection":
        return ln(e);
      default:
        throw new Error("Unknown geometry type: " + t.type + " in fromGeometryObj");
    }
  } else {
    if (e.type === "FeatureCollection")
      return ln(e);
    throw new Error("Unknown GeoJSON type");
  }
}
function ln(e) {
  if (e.type === "Feature") {
    const t = e.geometry;
    if (t.type === "GeometryCollection") {
      const n = t.geometries.map((r) => Fn(r));
      return new Wt(n, e.properties);
    } else
      throw new Error("The input feature is not a GeometryCollection: " + t.type);
  } else if (e.type === "FeatureCollection") {
    const t = e.features.map((n) => ii(n));
    return new Wt(t);
  } else
    throw new Error("Unknown GeoJSON type");
}
function oi(e) {
  if (e.type === "GeometryCollection") {
    const t = e.geometries.map((n) => Fn(n));
    return new Wt(t);
  } else
    throw new Error("The input geometry is not a GeometryCollection: " + e.type);
}
class zt {
  constructor(t, n, r = 10) {
    // 四叉树基础类
    V(this, "capacity");
    V(this, "boundary");
    V(this, "points");
    // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    V(this, "northWest");
    V(this, "northEast");
    V(this, "southWest");
    V(this, "southEast");
    V(this, "isDivided");
    V(this, "depth");
    V(this, "maxDepth", 10);
    this.capacity = n, this.boundary = t, this.points = [], this.isDivided = !1, this.northWest = null, this.northEast = null, this.southWest = null, this.southEast = null, this.depth = 0, this.maxDepth = r;
  }
  contains(t, n) {
    return Ge(t, n);
  }
  intersects(t, n) {
    return qr(t, n);
  }
  /**
   * 插入一个点
   * @param point - 点的坐标 
   * @returns {boolean} - 是否插入成功
   */
  insert(t) {
    return this.contains(t, this.boundary) ? this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0) : !1;
  }
  get pointsList() {
    return this.points.length === 0 ? null : this.points;
  }
  /**
   * 剖分当前节点
   */
  subdivide() {
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, i = this.boundary[3] - n, o = new zt([t, n + i / 2, t + r / 2, n + i], this.capacity), s = new zt([t + r / 2, n + i / 2, t + r, n + i], this.capacity), l = new zt([t, n, t + r / 2, n + i / 2], this.capacity), a = new zt([t + r / 2, n, t + r, n + i / 2], this.capacity);
    this.northWest = o, this.northEast = s, this.southWest = l, this.southEast = a, this.isDivided = !0, this.depth++;
  }
  /**
   * 四叉树范围查询
   * - 输入一个矩形范围，返回范围内的所有点
   * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
   * @param range{MBR} - 查询范围矩形
   * @returns {Array<[number,number]>}
   */
  queryRange(t) {
    let n = [];
    if (!this.intersects(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      this.contains(this.points[r], t) && n.push(this.points[r]);
    return this.northWest === null || (n.push(...this.northWest.queryRange(t)), n.push(...this.northEast.queryRange(t)), n.push(...this.southWest.queryRange(t)), n.push(...this.southEast.queryRange(t))), n;
  }
  /**
   * you need a customRange object to support custom range query
   * - note : this function has the SAME LOGIC as queryRange.
   * @see customRange
   */
  customQuery(t) {
    let n = [];
    if (!t.intersects(this.boundary))
      return n;
    for (let r = 0; r < this.points.length; r++)
      t.contains(this.points[r]) && n.push(this.points[r]);
    return this.northWest === null || (n.push(...this.northWest.customQuery(t)), n.push(...this.northEast.customQuery(t)), n.push(...this.southWest.customQuery(t)), n.push(...this.southEast.customQuery(t))), n;
  }
}
function es(e) {
  return e ? /^(epsg:|EPSG:)?3857$/.test(e) || /^(epsg:|EPSG:)?900913$/.test(e) || /^(epsg-|EPSG-)?3857$/.test(e) || /^(epsg-|EPSG-)?900913$/.test(e) || e === "900913" || e === "3857" : !1;
}
function ns(e) {
  return e ? /^(epsg:|EPSG:)?4326$/.test(e) || /^(epsg-|EPSG-)?4326$/.test(e) || e === "4326" || e.toLowerCase() === "wgs84" : !1;
}
const si = {
  R: 6371e3,
  projection: null,
  /**
   * haversine 计算球面两点之间的距离
   * @see https://rosettacode.org/wiki/Haversine_formula
   * @param latlng1 
   * @param latlng2 
   * @returns 
   */
  distance(e, t) {
    return ue(e, t, this.R);
  },
  /**
   * - 使用格林公式及球面积分直接计算球面多边形的面积
   * - calculate the area of a spherical polygon using the spherical excess method
   * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
   * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
   * @returns {number} - 面积
   */
  area(e) {
    return xn(e, this.R);
  }
}, an = 85.05112877980659, li = An({}, si, {
  R: 6378137,
  code: "EPSG:3857",
  projection: St,
  wrapLng: [-180, 180],
  wrapLat: [-an, an],
  area(e) {
    return xn(e, this.R);
  },
  planeArea(e) {
    return Qn(e, this.R);
  }
}), rs = An({}, li, {
  code: "EPSG:900913"
});
class jn {
  constructor() {
    V(this, "data", []);
  }
  push(t) {
    this.data.push(t);
  }
  pop() {
    return this.data.shift();
  }
  put(t) {
    this.push(t);
  }
  get() {
    return this.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}
class Ye {
  constructor() {
    V(this, "elements", []);
  }
  empty() {
    return this.elements.length === 0;
  }
  put(t, n) {
    this.elements.push([n, t]), this.elements.sort((r, i) => r[0] - i[0]);
  }
  get() {
    var t;
    return (t = this.elements.shift()) == null ? void 0 : t[1];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}
function is(e, t, n) {
  const r = new Ye();
  r.put(t, 0);
  let i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (i.set(t.join(","), null), o.set(t.join(","), 0); !r.isEmpty(); ) {
    const s = r.get();
    if (n && s.join(",") === n.join(","))
      break;
    for (const l of e.neighbors(s)) {
      if (e.weights(s, l) === 1 / 0) continue;
      const a = o.get(s.join(",")) + e.weights(s, l);
      if (!o.has(l.join(",")) || a < o.get(l.join(","))) {
        o.set(l.join(","), a);
        const u = a;
        r.put(l, u), i.set(l.join(","), s);
      }
    }
  }
  return i;
}
function os(e, t) {
  const n = new Ye();
  n.put(t, 0);
  let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (r.set(t, null), i.set(t, 0); !n.isEmpty(); ) {
    const o = n.get();
    for (const s of e.neighbors(o)) {
      if (e.weights(o, s) === 1 / 0) continue;
      const l = i.get(o) + e.weights(o, s);
      if (!i.has(s) || l < i.get(s)) {
        i.set(s, l);
        const a = l;
        n.put(s, a), r.set(s, o);
      }
    }
  }
  return r;
}
function ss(e, t) {
  const n = {
    nodes: e,
    edges: /* @__PURE__ */ new Map(),
    neighbors(r) {
      return n.edges.get(r) || [];
    }
  };
  for (const [r, i, o = 1] of t)
    n.edges.has(r) || n.edges.set(r, []), n.edges.get(r).push(i), n.edgesWeights || (n.edgesWeights = /* @__PURE__ */ new Map()), n.edgesWeights.has(r) || n.edgesWeights.set(r, /* @__PURE__ */ new Map()), n.edgesWeights.get(r).set(i, o);
  return n.edgesWeights && (n.weights = (r, i) => n.edgesWeights.get(r).get(i) || 1 / 0), n;
}
function ls(e, t, n = !1) {
  const r = e[0].length, i = e.length, o = {
    grid: e,
    cols: r,
    rows: i,
    neighbors(s) {
      const [l, a] = s;
      let u = [];
      return n ? u = [
        [l - 1, a - 1],
        [l - 1, a + 1],
        [l + 1, a - 1],
        [l + 1, a + 1],
        [l + 1, a],
        [l, a - 1],
        [l - 1, a],
        [l, a + 1]
      ] : u = [[l + 1, a], [l - 1, a], [l, a - 1], [l, a + 1]], (l + a) % 2 === 0 && u.reverse(), u.filter(([f, h]) => f >= 0 && f < r && h >= 0 && h < i);
    }
  };
  return t && (o.weights = (s, l) => t(e[s[1]][s[0]], e[l[1]][l[0]])), o;
}
function as(e, t) {
  const n = new jn();
  n.put(t);
  const r = /* @__PURE__ */ new Map();
  for (r.set(t, null); !n.isEmpty(); ) {
    const i = n.get();
    for (const o of e.neighbors(i))
      e.weights(i, o) !== 1 / 0 && (r.has(o) || (n.put(o), r.set(o, i)));
  }
  return r;
}
function hs(e, t, n) {
  const r = new jn();
  r.put(t);
  let i = /* @__PURE__ */ new Map();
  for (i.set(t.join(","), null); !r.isEmpty(); ) {
    const o = r.get();
    if (n && o.join(",") === n.join(","))
      break;
    for (const s of e.neighbors(o))
      e.weights(o, s) !== 1 / 0 && (i.has(s.join(",")) || (r.put(s), i.set(s.join(","), o)));
  }
  return i;
}
function us(e, t, n) {
  let r = n, i = [];
  if (!e.has(n))
    return [];
  for (; r !== t; )
    i.push(r), r = e.get(r);
  return i.push(t), i.reverse(), i;
}
function fs(e, t, n) {
  let r = n, i = [];
  if (!e.has(n.join(",")))
    return [];
  for (; r && r.join(",") !== t.join(","); )
    i.push(r), r = e.get(r.join(","));
  return i.push(t), i.reverse(), i;
}
function ai(e, t) {
  const [n, r] = e, [i, o] = t;
  return Math.abs(n - i) + Math.abs(r - o);
}
function cs(e, t, n) {
  const r = new Ye();
  r.put(t, 0);
  let i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (i.set(t.join(","), null), o.set(t.join(","), 0); !r.isEmpty(); ) {
    const s = r.get();
    if (s.join(",") === n.join(","))
      break;
    for (const l of e.neighbors(s)) {
      if (e.weights(s, l) === 1 / 0) continue;
      const a = o.get(s.join(",")) + e.weights(s, l);
      if (!o.has(l.join(",")) || a < o.get(l.join(","))) {
        o.set(l.join(","), a);
        const u = a + ai(l, n);
        r.put(l, u), i.set(l.join(","), s);
      }
    }
  }
  return i;
}
var hi = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e[e.groupStretch = 4] = "groupStretch", e))(hi || {}), ui = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(ui || {});
function Qt(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function hn(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function un(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function fn(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function cn(e, t) {
  let n = 0.1;
  return e < t.mean - n || e > t.mean + n ? 0 : (e - t.min) / (t.max - t.min);
}
function de(e, t) {
  switch (e) {
    case 0:
      return t ? (n, r) => 1 - Qt(n, r) : Qt;
    case 1:
      return t ? (n, r) => 1 - hn(n, r) : hn;
    case 2:
      return t ? (n, r) => 1 - un(n, r) : un;
    case 3:
      return t ? (n, r) => 1 - fn(n, r) : fn;
    case 4:
      return t ? (n, r) => 1 - cn(n, r) : cn;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function Ne(e, t, n = Qt) {
  let r = n(t, e), i = Math.floor(r * 255);
  return `rgb(${i},${i},${i})`;
}
function fi(e, t, n = Qt) {
  let r = Math.floor(n(t[0], e[0]) * 255), i = Math.floor(n(t[1], e[1]) * 255), o = Math.floor(n(t[2], e[2]) * 255);
  return `rgb(${r},${i},${o})`;
}
function ys(e, t) {
  return (n, r) => fi(n, r, de(e, t));
}
function ds(e, t) {
  return (n, r) => Ne(n, r, de(e, t));
}
const Bn = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"], ci = [
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
function yi(e, t, n, r = Bn, i = Qt) {
  let o = i(t, e), s = 0;
  if (n === void 0)
    s = Math.floor(o * r.length);
  else
    for (let l = 0; l < n.length; l++)
      if (o < n[l]) {
        s = l;
        break;
      }
  return r[s];
}
function ms(e, t, n = Bn) {
  return (r, i) => yi(r, i, t, n, de(e));
}
function di(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function ws(e, t = ci) {
  return t[e];
}
function gs(e, t = 0, n) {
  let r = new Array(256).fill(0), i = de(t);
  if (n === void 0) {
    n = {
      max: 0,
      min: 0,
      mean: 0
    };
    for (let o = 0; o < e.length; o++)
      for (let s = 0; s < e[0].length; s++)
        n.max = Math.max(n.max, e[o][s]), n.min = Math.min(n.min, e[o][s]), n.mean += e[o][s];
  }
  for (let o = 0; o < e.length; o++)
    for (let s = 0; s < e[0].length; s++) {
      let l = i(e[o][s], n), a = Math.floor(l * 255);
      r[a] += 1;
    }
  return r;
}
function ps(e, t, n, r, i) {
  let o = n.w / t[0], s = n.h / t[1], l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  if (l.strokeStyle = "red", l.lineWidth = 1, r[0] && r[1]) {
    let [a, u] = mi(t, n, r);
    l.strokeRect(n.x + a * o, n.y + u * s, o, s), i && i(a, u);
  }
}
function mi(e, t, n) {
  let r = t.w / e[0], i = t.h / e[1], o = Math.floor((n[0] - t.x) / r), s = Math.floor((n[1] - t.y) / i);
  return [o, s];
}
function xs(e, t, n, r, i = Ne, o) {
  let s = n.w / t[0].length, l = n.h / t.length, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let u = 0; u < t.length; u++)
    for (let f = 0; f < t[0].length; f++) {
      let h = t[u][f], c = i(r, h);
      a.fillStyle = c, a.fillRect(n.x + f * s, n.y + u * l, s, l);
    }
  if (o) {
    let [u, f, h, c] = o;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(n.x + u * s, n.y + f * l, (h - u) * s, (c - f) * l);
  }
  a.restore();
}
function Ms(e, t, n, r, i = "gray", o) {
  let s = n.w / t[0], l = n.h / t[1], a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  a.save();
  for (let u = 0; u < t[0]; u++)
    for (let f = 0; f < t[1]; f++) {
      let h = r.get([f, u].join(","));
      if (h) {
        let c = n.x + f * s + s / 2, y = n.y + u * l + l / 2, m = n.x + h[0] * s + s / 2, g = n.y + h[1] * l + l / 2;
        o && o.find(([v, M]) => v === f && M === u) ? (yn(a, c, y, m, g, "red"), h[0] === o[0][0] && h[1] === o[0][1] && (a.fillStyle = "green", a.beginPath(), a.arc(m, g, 10, 0, 2 * Math.PI), a.fill()), h[0] === o[o.length - 2][0] && h[1] === o[o.length - 2][1] && (a.fillStyle = "blue", a.beginPath(), a.arc(c, y, 10, 0, 2 * Math.PI), a.fill())) : yn(a, c, y, m, g, i);
      } else
        a.fillStyle = i, a.fillRect(n.x + f * s + s / 2 - 2, n.y + u * l + l / 2 - 2, 4, 4);
    }
  a.restore();
}
function yn(e, t, n, r, i, o = "green") {
  e.strokeStyle = o, e.lineWidth = 2, e.beginPath(), e.moveTo(t, n), e.lineTo(r, i), e.stroke();
  let s = 10, l = Math.atan2(i - n, r - t);
  e.beginPath(), e.moveTo(r, i), e.lineTo(r - s * Math.cos(l - Math.PI / 6), i - s * Math.sin(l - Math.PI / 6)), e.moveTo(r, i), e.lineTo(r - s * Math.cos(l + Math.PI / 6), i - s * Math.sin(l + Math.PI / 6)), e.stroke();
}
function bs(e, t, n, r = di) {
  let i = n.w / t[0].length, o = n.h / t.length, s = e.getContext("2d");
  if (s.save(), s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let u = t[l][a], f = r(u);
      s.fillStyle = f, s.fillRect(n.x + a * i, n.y + l * o, i, o);
    }
  s.restore();
}
function vs(e, t, n, r = "white") {
  let i = n.w / (t[0].length + 1), o = n.h / (t.length + 1), s = e.getContext("2d");
  if (s.save(), s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let u = t[l][a], f = {
        x: n.x + a * i + i / 2,
        y: n.y + l * o + o / 2,
        w: i,
        h: o
      };
      wi(u, f, s, r);
    }
  s.restore();
}
function wi(e, t, n, r = "white") {
  switch (n.strokeStyle = r, e) {
    case 0:
      break;
    case 1:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y + t.h), n.stroke();
      break;
    case 2:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y + t.h), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 3:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 4:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 5:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y), n.stroke(), n.beginPath(), n.moveTo(t.x + t.w / 2, t.y + t.h), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 6:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y), n.lineTo(t.x + t.w / 2, t.y + t.h), n.stroke();
      break;
    case 7:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y), n.stroke();
      break;
    case 8:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y), n.stroke();
      break;
    case 9:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y), n.lineTo(t.x + t.w / 2, t.y + t.h), n.stroke();
      break;
    case 10:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke(), n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y + t.h), n.stroke();
      break;
    case 11:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 12:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 13:
      n.beginPath(), n.moveTo(t.x + t.w / 2, t.y + t.h), n.lineTo(t.x + t.w, t.y + t.h / 2), n.stroke();
      break;
    case 14:
      n.beginPath(), n.moveTo(t.x, t.y + t.h / 2), n.lineTo(t.x + t.w / 2, t.y + t.h), n.stroke();
      break;
  }
}
function ae(e, t, n, r, i = Ne, o, s) {
  let l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = r.getSubGridObj(n.boundary).getBandStatistics(0), f = u.mean;
  s ? (s.max = Math.max(s.max, u.max), s.min = Math.min(s.min, u.min), s.mean = (s.mean + u.mean) / 2) : s = u, o || (o = f);
  let h = i(s, f);
  l.fillStyle = h, l.fillRect(t.x, t.y, t.w, t.h), requestAnimationFrame(() => {
    if (n.isDivided) {
      let c = [
        { x: t.x + t.w / 2, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x + t.w / 2, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 }
      ];
      ae(e, c[0], n.children[0], r, i, o, s), ae(e, c[1], n.children[1], r, i, o, s), ae(e, c[2], n.children[2], r, i, o, s), ae(e, c[3], n.children[3], r, i, o, s);
    }
  });
}
function Ps(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, i = !1, o) {
  let s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, u) => a + u) / n.length
  }), s.fillStyle = r.backgroundColor, s.fillRect(t.x, t.y, t.w, t.h), s.fillStyle = r.color, s.lineWidth = 1;
  let l = 2;
  for (let a = 0; a < n.length; a++) {
    let u = t.x + t.w * a / n.length, f = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    s.beginPath(), s.arc(u, f, l, 0, 2 * Math.PI), s.fill();
  }
  s.strokeStyle = r.color, s.beginPath(), s.moveTo(t.x, t.y + t.h * (1 - (n[0] - o.min) / (o.max - o.min)));
  for (let a = 0; a < n.length; a++) {
    let u = t.x + t.w * a / n.length, f = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    s.lineTo(u, f);
  }
  if (s.stroke(), s.strokeStyle = "white", s.beginPath(), s.moveTo(t.x, t.y + 12), s.lineTo(t.x + t.w, t.y + 12), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h), s.lineTo(t.x + t.w, t.y + t.h), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h / 2), s.lineTo(t.x + t.w, t.y + t.h / 2), s.stroke(), s.fillText(o.max.toFixed(2), t.x, t.y + 12), s.fillText(o.min.toFixed(2), t.x, t.y + t.h), s.fillText(o.mean.toFixed(2), t.x, t.y + t.h / 2), i) {
    s.fillStyle = "green", s.font = "12px serif";
    for (let a = 0; a < n.length; a += 16) {
      let u = t.x + t.w * a / n.length, f = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
      s.fillText(n[a].toFixed(2), u, f);
    }
  }
}
function As(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, i, o = !1) {
  let s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  i || (i = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, u) => a + u) / n.length
  }), s.fillStyle = r.backgroundColor, s.fillRect(t.x, t.y, t.w, t.h), s.fillStyle = r.color;
  let l = t.w / n.length;
  for (let a = 0; a < n.length; a++) {
    let u = t.x + l * a, f = t.y + t.h * (1 - (n[a] - i.min) / (i.max - i.min));
    s.fillRect(u, f, l, t.h - f + t.y);
  }
  o && (s.fillStyle = "green", s.font = "12px serif", s.fillText(i.max.toFixed(2), t.x, t.y + 12), s.fillText(i.min.toFixed(2), t.x, t.y + t.h), s.fillText(i.mean.toFixed(2), t.x, t.y + t.h / 2)), s.strokeStyle = "white", s.beginPath(), s.moveTo(t.x, t.y + 12), s.lineTo(t.x + t.w, t.y + 12), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h), s.lineTo(t.x + t.w, t.y + t.h), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h / 2), s.lineTo(t.x + t.w, t.y + t.h / 2), s.stroke();
}
function Es(e, t, n, r = { color: "black", font: "12px serif" }) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  i.fillStyle = r.color, i.font = r.font, i.fillText(n, t.x, t.y);
}
function Ss(e, t, n, r, i, o) {
  let s = r.w / t.width, l = r.h / t.height, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = [], f = [];
  n.forEach((h) => {
    u.push(t.getBand(h)), f.push(t.getBandStatistics(h));
  });
  for (let h = 0; h < t.height; h++)
    for (let c = 0; c < t.width; c++) {
      let y = n.map((g) => u[g][h][c]), m = i(f, y);
      a.fillStyle = m, a.fillRect(r.x + c * s, r.y + h * l, s, l);
    }
  if (o) {
    let [h, c, y, m] = o;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(r.x + h * s, r.y + c * l, (y - h) * s, (m - c) * l);
  }
  a.strokeStyle = "red", a.lineWidth = 1, a.beginPath(), a.moveTo(r.x + r.w / 2, r.y + r.h / 2 - 10), a.lineTo(r.x + r.w / 2, r.y + r.h / 2 + 10), a.stroke(), a.beginPath(), a.moveTo(r.x + r.w / 2 - 10, r.y + r.h / 2), a.lineTo(r.x + r.w / 2 + 10, r.y + r.h / 2), a.stroke();
}
function gi(e, t, n, r = { color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)" }) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color, i.fillRect(t.x, t.y, t.w * n / 100, t.h), i.strokeStyle = "white", i.lineWidth = 1;
  for (let o = 0; o < 10; o++)
    i.beginPath(), i.moveTo(t.x + t.w * o / 10, t.y), i.lineTo(t.x + t.w * o / 10, t.y + t.h), i.stroke();
  t.h >= 20 && t.w >= 40 && (i.fillStyle = "white", i.font = "20px serif", i.fillText(n + "%", t.x + t.w / 2 - 20, t.y + t.h / 2 + 6));
}
function Ts() {
  let e = document.createElement("canvas");
  e.width = 200, e.height = 20, document.body.appendChild(e);
  let t = { x: 0, y: 0, w: 200, h: 20 }, n = 0;
  setInterval(() => {
    gi(e, t, n), n += 1, n > 100 && (n = 0);
  }, 100);
}
const dn = Math.pow(2, -52), he = new Uint32Array(512), pi = St.unproject;
class Dt {
  static from(t, n = On, r = qn) {
    const i = t.length, o = new Float64Array(i * 2);
    for (let s = 0; s < i; s++) {
      const l = t[s];
      o[2 * s] = n(l), o[2 * s + 1] = r(l);
    }
    return new Dt(o);
  }
  constructor(t) {
    const n = t.length >> 1;
    if (n > 0 && typeof t[0] != "number") throw new Error("Expected coords to contain numbers.");
    this.coords = t;
    const r = Math.max(2 * n - 5, 0);
    this._triangles = new Uint32Array(r * 3), this._halfedges = new Int32Array(r * 3), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update();
  }
  update() {
    const { coords: t, _hullPrev: n, _hullNext: r, _hullTri: i, _hullHash: o } = this, s = t.length >> 1;
    let l = 1 / 0, a = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (let T = 0; T < s; T++) {
      const D = t[2 * T], j = t[2 * T + 1];
      D < l && (l = D), j < a && (a = j), D > u && (u = D), j > f && (f = j), this._ids[T] = T;
    }
    const h = (l + u) / 2, c = (a + f) / 2;
    let y, m, g;
    for (let T = 0, D = 1 / 0; T < s; T++) {
      const j = Ie(h, c, t[2 * T], t[2 * T + 1]);
      j < D && (y = T, D = j);
    }
    const v = t[2 * y], M = t[2 * y + 1];
    for (let T = 0, D = 1 / 0; T < s; T++) {
      if (T === y) continue;
      const j = Ie(v, M, t[2 * T], t[2 * T + 1]);
      j < D && j > 0 && (m = T, D = j);
    }
    let P = t[2 * m], L = t[2 * m + 1], G = 1 / 0;
    for (let T = 0; T < s; T++) {
      if (T === y || T === m) continue;
      const D = bi(v, M, P, L, t[2 * T], t[2 * T + 1]);
      D < G && (g = T, G = D);
    }
    let I = t[2 * g], F = t[2 * g + 1];
    if (G === 1 / 0) {
      for (let j = 0; j < s; j++)
        this._dists[j] = t[2 * j] - t[0] || t[2 * j + 1] - t[1];
      Ot(this._ids, this._dists, 0, s - 1);
      const T = new Uint32Array(s);
      let D = 0;
      for (let j = 0, $ = -1 / 0; j < s; j++) {
        const U = this._ids[j], d = this._dists[U];
        d > $ && (T[D++] = U, $ = d);
      }
      this.hull = T.subarray(0, D), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if ($t(v, M, P, L, I, F) < 0) {
      const T = m, D = P, j = L;
      m = g, P = I, L = F, g = T, I = D, F = j;
    }
    const W = this.circumcenter(v, M, P, L, I, F);
    this._cx = W.x, this._cy = W.y;
    for (let T = 0; T < s; T++)
      this._dists[T] = Ie(t[2 * T], t[2 * T + 1], W.x, W.y);
    Ot(this._ids, this._dists, 0, s - 1), this._hullStart = y;
    let R = 3;
    r[y] = n[g] = m, r[m] = n[y] = g, r[g] = n[m] = y, i[y] = 0, i[m] = 1, i[g] = 2, o.fill(-1), o[this._hashKey(v, M)] = y, o[this._hashKey(P, L)] = m, o[this._hashKey(I, F)] = g, this.trianglesLen = 0, this._addTriangle(y, m, g, -1, -1, -1);
    for (let T = 0, D, j; T < this._ids.length; T++) {
      const $ = this._ids[T], U = t[2 * $], d = t[2 * $ + 1];
      if (T > 0 && Math.abs(U - D) <= dn && Math.abs(d - j) <= dn || (D = U, j = d, $ === y || $ === m || $ === g)) continue;
      let w = 0;
      for (let x = 0, S = this._hashKey(U, d); x < this._hashSize && (w = o[(S + x) % this._hashSize], !(w !== -1 && w !== r[w])); x++)
        ;
      w = n[w];
      let p = w, b;
      for (; b = r[p], $t(U, d, t[2 * p], t[2 * p + 1], t[2 * b], t[2 * b + 1]) >= 0; )
        if (p = b, p === w) {
          p = -1;
          break;
        }
      if (p === -1) continue;
      let A = this._addTriangle(p, $, r[p], -1, -1, i[p]);
      i[$] = this._legalize(A + 2), i[p] = A, R++;
      let k = r[p];
      for (; b = r[k], $t(U, d, t[2 * k], t[2 * k + 1], t[2 * b], t[2 * b + 1]) < 0; )
        A = this._addTriangle(k, $, b, i[$], -1, i[k]), i[$] = this._legalize(A + 2), r[k] = k, R--, k = b;
      if (p === w)
        for (; b = n[p], $t(U, d, t[2 * b], t[2 * b + 1], t[2 * p], t[2 * p + 1]) < 0; )
          A = this._addTriangle(b, $, p, -1, i[p], i[b]), this._legalize(A + 2), i[b] = A, r[p] = p, R--, p = b;
      this._hullStart = n[$] = p, r[p] = n[k] = $, r[$] = k, o[this._hashKey(U, d)] = $, o[this._hashKey(t[2 * p], t[2 * p + 1])] = p;
    }
    this.hull = new Uint32Array(R);
    for (let T = 0, D = this._hullStart; T < R; T++)
      this.hull[T] = D, D = r[D];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(xi(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: i } = this;
    let o = 0, s = 0;
    for (; ; ) {
      const l = r[t], a = t - t % 3;
      if (s = a + (t + 2) % 3, l === -1) {
        if (o === 0) break;
        t = he[--o];
        continue;
      }
      const u = l - l % 3, f = a + (t + 1) % 3, h = u + (l + 2) % 3, c = n[s], y = n[t], m = n[f], g = n[h];
      if (Mi(
        i[2 * c],
        i[2 * c + 1],
        i[2 * y],
        i[2 * y + 1],
        i[2 * m],
        i[2 * m + 1],
        i[2 * g],
        i[2 * g + 1]
      )) {
        n[t] = g, n[l] = c;
        const M = r[h];
        if (M === -1) {
          let L = this._hullStart;
          do {
            if (this._hullTri[L] === h) {
              this._hullTri[L] = t;
              break;
            }
            L = this._hullPrev[L];
          } while (L !== this._hullStart);
        }
        this._link(t, M), this._link(l, r[s]), this._link(s, h);
        const P = u + (l + 1) % 3;
        o < he.length && (he[o++] = P);
      } else {
        if (o === 0) break;
        t = he[--o];
      }
    }
    return s;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, i, o, s) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = n, this._triangles[l + 2] = r, this._link(l, i), this._link(l + 1, o), this._link(l + 2, s), this.trianglesLen += 3, l;
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
    let t = [];
    for (let n = 0; n < this.coords.length; n += 2)
      t.push([this.coords[n], this.coords[n + 1]]);
    return t;
  }
  /**
   * - get the indices of triangles as array of array of 3 elements
   * - 获得三角形的索引，以3个元素的数组的数组的形式
   * @returns {[number,number,number]}
   */
  getTriangleIndices() {
    let t = [];
    for (let n = 0; n < this.triangles.length; n += 3)
      t.push([
        this.triangles[n],
        this.triangles[n + 1],
        this.triangles[n + 2]
      ]);
    return t;
  }
  /**
   * 计算三点外接圆的半径
   * @param p1 
   * @param p2 
   * @param p3 
   * @returns 
   */
  static circumRadius(t, n, r) {
    const i = n[0] - t[0], o = n[1] - t[1], s = r[0] - t[0], l = r[1] - t[1], a = i * i + o * o, u = s * s + l * l, f = 0.5 / (i * l - o * s), h = (l * a - o * u) * f, c = (i * u - s * a) * f;
    return h * h + c * c;
  }
  circumcenter(t, n, r, i, o, s) {
    const l = r - t, a = i - n, u = o - t, f = s - n, h = l * l + a * a, c = u * u + f * f, y = 0.5 / (l * f - a * u), m = t + (f * h - a * c) * y, g = n + (l * c - u * h) * y;
    return { x: m, y: g };
  }
}
function xi(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Ie(e, t, n, r) {
  const i = e - n, o = t - r;
  return i * i + o * o;
}
function Mi(e, t, n, r, i, o, s, l) {
  const a = e - s, u = t - l, f = n - s, h = r - l, c = i - s, y = o - l, m = a * a + u * u, g = f * f + h * h, v = c * c + y * y;
  return a * (h * v - g * y) - u * (f * v - g * c) + m * (f * y - h * c) < 0;
}
function bi(e, t, n, r, i, o) {
  const s = n - e, l = r - t, a = i - e, u = o - t, f = s * s + l * l, h = a * a + u * u, c = 0.5 / (s * u - l * a), y = (u * f - l * h) * c, m = (s * h - a * f) * c;
  return y * y + m * m;
}
function Ot(e, t, n, r) {
  if (r - n <= 20)
    for (let i = n + 1; i <= r; i++) {
      const o = e[i], s = t[o];
      let l = i - 1;
      for (; l >= n && t[e[l]] > s; ) e[l + 1] = e[l--];
      e[l + 1] = o;
    }
  else {
    const i = n + r >> 1;
    let o = n + 1, s = r;
    Xt(e, i, o), t[e[n]] > t[e[r]] && Xt(e, n, r), t[e[o]] > t[e[r]] && Xt(e, o, r), t[e[n]] > t[e[o]] && Xt(e, n, o);
    const l = e[o], a = t[l];
    for (; ; ) {
      do
        o++;
      while (t[e[o]] < a);
      do
        s--;
      while (t[e[s]] > a);
      if (s < o) break;
      Xt(e, o, s);
    }
    e[n + 1] = e[s], e[s] = l, r - o + 1 >= s - n ? (Ot(e, t, o, r), Ot(e, t, n, s - 1)) : (Ot(e, t, n, s - 1), Ot(e, t, o, r));
  }
}
function Xt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function On(e) {
  return e[0];
}
function qn(e) {
  return e[1];
}
function vi(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function Pi(e, t) {
  return vi(t).map((n) => e.triangles[n]);
}
function Ai(e) {
  return Math.floor(e / 3);
}
function Ei(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], i = t[0] * t[0] + t[1] * t[1], o = n[0] * n[0] + n[1] * n[1], s = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / s * (r * (t[1] - n[1]) + i * (n[1] - e[1]) + o * (e[1] - t[1])),
    1 / s * (r * (n[0] - t[0]) + i * (e[0] - n[0]) + o * (t[0] - e[0]))
  ];
}
function Si(e, t, n, r = pi) {
  const i = Pi(t, n).map((s) => e[s]);
  let o = Ei(i[0], i[1], i[2]);
  return r && (o = r(o)), o;
}
function Yn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function Ti(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const i = Yn(r);
    r = e.halfedges[i];
  } while (r !== -1 && r !== t);
  return n;
}
function Ce(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let i = 0; i < t.triangles.length; i++) {
    const o = t.triangles[Yn(i)];
    if (!r.has(o)) {
      r.add(o);
      const a = Ti(t, i).map(Ai).map((u) => Si(e, t, u));
      n(o, a);
    }
  }
}
class ks {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = On, r = qn) {
    V(this, "delaunay");
    // Delaunay triangulation
    V(this, "points");
    t instanceof Dt ? (this.delaunay = t, this.points = t.getPoints()) : (this.points = t, this.delaunay = Dt.from(t, n, r));
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points: t, delaunay: n } = this, r = /* @__PURE__ */ new Map();
    return Ce(t, n, (i, o) => r.set(i, o)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, i = /* @__PURE__ */ new Map();
    return Ce(n, r, (o, s) => {
      this.isInsideMBR(s, t) || (console.log(s), s = Zr(s, t)), i.set(o, s);
    }), i;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, i = /* @__PURE__ */ new Map();
    return Ce(n, r, (o, s) => {
      this.isInsideMBR(s, t) && i.set(o, s);
    }), i;
  }
  isInsideMBR(t, n) {
    const [r, i, o, s] = n;
    for (let l = 0; l < t.length; l++) {
      const [a, u] = t[l];
      if (a < r || a > o || u < i || u > s)
        return !1;
    }
    return !0;
  }
}
function Is(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, i] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, i);
  return n;
}
function Cs(e) {
  const t = e.map((o, s) => [...o.toXY(), s]);
  let n = t[0];
  for (let o = 1; o < t.length; o++)
    t[o][1] < n[1] && (n = t[o]);
  t.sort((o, s) => {
    let l = sn([n[0], n[1]], [o[0], o[1]]), a = sn([n[0], n[1]], [s[0], s[1]]);
    if (l < a)
      return -1;
    if (l > a)
      return 1;
    {
      let u = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2), f = Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2);
      return u < f ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let o = 2; o < t.length; o++) {
    for (; r.length > 1 && _n([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[o][0], t[o][1]]) <= 0; )
      r.pop();
    r.push(t[o]);
  }
  let i = [];
  for (let o = 0; o < r.length; o++) {
    let s = r[o][2];
    i.push(e[s]);
  }
  return i;
}
function Ls(e, t) {
  let n = e.map((s) => s.toXY());
  return Dt.from(n).getTriangleIndices().filter((s) => {
    let l = [n[s[0]], n[s[1]], n[s[2]]];
    return Dt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
export {
  Gn as Circle,
  ci as CountourColorList,
  lt as D2R,
  Dt as Delaunator,
  li as EPSG3857,
  rs as EPSG900913,
  zn as EPSLN,
  si as Earth,
  po as Evented,
  er as FFT,
  Ue as FFT2,
  ir as FFTImag,
  lo as FFTImag2,
  or as FFTReal,
  ao as FFTReal2,
  sr as FFTShift,
  Ht as Geometry,
  Wt as GeometryCollection,
  je as Grid,
  nr as IFFT,
  so as IFFT2,
  rr as IFFTReal,
  oo as IFFTReal2,
  xo as K_means,
  bt as LineString,
  To as MBR2Plane,
  Jt as MultiLineString,
  pt as MultiPoint,
  Kt as MultiPolygon,
  zo as Perlin,
  ht as Point,
  Bo as PointInsidePolygon,
  Qr as PointOutsideMBR,
  Et as Polygon,
  Ye as PriorityQueue,
  zt as QuadTree,
  jn as Queue,
  Ii as R2D,
  Ho as Sin3D,
  St as SphericalMercator,
  co as UUID,
  ks as Voronoi,
  mi as XY2ColRow,
  Vn as acos,
  Ri as add,
  No as adjust_lon,
  Ls as alphaComplex,
  ho as applyMixins,
  gn as areaFactors,
  Fi as areaToArea,
  Hn as asin,
  Un as atan2,
  Ji as bearing,
  bs as binDrawGrid2d,
  Xo as binarization,
  di as binaryColorBand,
  as as breadthFirstSearch,
  yo as calculateArrayShape,
  Oo as calculateMBR,
  ee as cartesian,
  Ni as cartesianAdd,
  Yi as cartesianAddInPlace,
  ge as cartesianAngle,
  we as cartesianCross,
  me as cartesianDot,
  Kn as cartesianNormalize,
  Wi as cartesianNormalizeInPlace,
  Jn as cartesianScale,
  _n as ccw,
  Wo as ccwRobust,
  ln as collectionFromFeature,
  oi as collectionFromGeometry,
  ui as colorListType,
  Is as complateMap,
  mo as concatEL2DArray,
  ro as conj,
  Io as containsMBR,
  Cs as convexHull,
  Re as cos,
  ss as createGraph,
  ls as createGridGraph,
  qt as cross,
  Zr as cutPolygonByMBR,
  Vo as dampedSin3D,
  Uo as deMaxMin,
  Bi as degToDMS,
  We as degreesToRadians,
  to as destination,
  os as dijkstra,
  ji as dmsToDeg,
  Di as dot,
  Ms as drawArrowField,
  vs as drawCountour,
  xs as drawGrid2d,
  gi as drawProgress,
  ae as drawQTree2d,
  Ps as drawSample,
  As as drawSample2,
  Es as drawText,
  Ss as drawTrueColorGrid2d,
  wt as earthRadius,
  fo as emptyObj,
  Oi as equals,
  Lo as equalsMBR,
  An as extend,
  mn as factors,
  wn as factors2,
  io as fastFFT2,
  vo as feature,
  hr as fillIndexArray,
  ar as flattenArray,
  Vi as formatNum,
  ii as fromFeatureObj,
  Fn as fromGeometryObj,
  sn as getAngle,
  Go as getMBRWithAntimeridian,
  Ze as getPointsMBR,
  cs as gridAstar,
  hs as gridBreadthFirstSearch,
  is as gridDijkstra,
  fs as gridReconstructPath,
  De as halfPi,
  qi as haversin,
  ue as haversine,
  gs as hist,
  Ro as inCircle,
  Do as inCircleRobust,
  Qi as intermediatePoint,
  Ui as interpolate,
  zi as interpolate2,
  on as intersection,
  ti as intersectionPolygon,
  qr as intersectsMBR,
  es as isEPSG3857,
  ns as isEPSG4326,
  Hi as isFloat,
  lr as isPotentialGeoObject,
  qo as iterPolygonEdge,
  Li as lengthToRadians,
  Nr as mbrToPolygon,
  Yr as mbrToRectangle,
  Eo as merge,
  jr as mergeArcs,
  Or as mergeMBR,
  So as mergePointMBR,
  Ao as mesh,
  _r as meshArcs,
  Rn as metersTo,
  Ki as midpoint,
  Po as neighbors,
  $i as normalize,
  ye as object,
  Co as overlapsMBR,
  pn as pi,
  ko as plane2MBR,
  eo as planeIntersection,
  Qn as planePolygonArea,
  Se as pointInEdge,
  Ge as pointInMBR,
  _o as pointInMBRWithAntimeridian,
  Yo as prePointInPolygon,
  ms as pseudoColorBandFactory,
  _i as radiansToDegrees,
  Ci as radiansToLength,
  ur as randomIndexArray,
  ps as reactGrid2d,
  us as reconstructPath,
  jo as rectangleToMBR,
  Lr as reverse,
  go as round,
  no as sample,
  Xi as scale,
  Zt as sign,
  Ne as simpleColorBand,
  ds as simpleColorBandFactory,
  ws as simplePseudoColorBand,
  Le as sin,
  Zi as sphereIntersection,
  te as spherical,
  xn as sphericalArea,
  Fo as splitMBRWithAntimeridian,
  Be as sqrt,
  $n as squareMetersTo,
  hi as stretchType,
  wo as subColumnInEL2DArray,
  $o as subdivide2QTree,
  Ts as testProgress,
  uo as throttle,
  ts as toLineString,
  Dn as toMeters,
  Zo as toMultiPoint,
  Qo as toPoint,
  Xn as toSquareMeters,
  Mo as topology,
  Cr as transform,
  Si as triangleCenter,
  fi as trueColorBand,
  ys as trueColorBandFactory,
  Gi as unitToUnit,
  bo as untransform,
  Jo as worleyNoise,
  Ko as zebraNoise
};
