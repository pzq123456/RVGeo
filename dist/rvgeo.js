var On = Object.defineProperty;
var Yn = (e, t, n) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var J = (e, t, n) => (Yn(e, typeof t != "symbol" ? t + "" : t, n), n);
const lt = Math.PI / 180, Eo = 180 / Math.PI, wt = 63710088e-1, cn = {
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
}, yn = {
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
}, dn = {
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
function So(e, t = "kilometers") {
  const n = cn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function To(e, t = "kilometers") {
  const n = cn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function qe(e) {
  return e % 360 * Math.PI / 180;
}
function ko(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function qn(e, t) {
  const n = yn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Rn(e, t) {
  const n = yn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Io(e, t, n) {
  return Rn(qn(e, t), n);
}
function Nn(e, t) {
  const n = dn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Dn(e, t) {
  const n = dn[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function _o(e, t, n) {
  return Dn(Nn(e, t), n);
}
function Lo(e, t, n, r) {
  let o = e + t / 60 + n / 3600;
  return (r === "S" || r === "W") && (o = -o), o;
}
function Co(e) {
  let t = Math.floor(e), n = Math.floor((e - t) * 60), r = ((e - t) * 60 - n) * 60;
  return [t, n, r, e < 0 ? e < -180 ? "W" : "S" : e > 180 ? "E" : "N"];
}
const mn = Math.PI, Re = mn / 2, Xn = Math.atan2, Ne = Math.cos, Le = Math.sin, Be = Math.sqrt, Wn = 1e-10;
function Go(e, t, n = Wn) {
  return !Array.isArray(e) && !Array.isArray(t) ? Math.abs(e - t) < n : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((r, o) => Math.abs(r - t[o]) < n) : !1;
}
function $n(e) {
  return e > 1 ? 0 : e < -1 ? mn : Math.acos(e);
}
function zn(e) {
  return e > 1 ? Re : e < -1 ? -Re : Math.asin(e);
}
function Fo(e) {
  return (e = Le(e / 2)) * e;
}
function te(e) {
  return [Xn(e[1], e[0]), zn(e[2])];
}
function ee(e, t = !0) {
  t && (e = [qe(e[0]), qe(e[1])]);
  const n = e[0], r = e[1], o = Ne(r);
  return [o * Ne(n), o * Le(n), Le(r)];
}
function me(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function we(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Bo(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function jo(e, t) {
  return [e[0] + t[0], e[1] + t[1], e[2] + t[2]];
}
function Un(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Oo(e) {
  var t = Be(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function Jn(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  return [e[0] / t, e[1] / t, e[2] / t];
}
function ge(e, t) {
  let n = me(e, t) / Be(me(e, e) * me(t, t));
  return $n(n);
}
function Yo(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function Yt(e, t) {
  return e[0] * t[1] - e[1] * t[0];
}
function qo(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function Ro(e, t) {
  return [e[0] * t, e[1] * t];
}
function No(e) {
  var t = Be(e[0] * e[0] + e[1] * e[1]);
  return [e[0] / t, e[1] / t];
}
function Do(e, t, n) {
  return [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n,
    e[2] + (t[2] - e[2]) * n
  ];
}
function Xo(e, t, n) {
  return [
    e[0] + (t[0] - e[0]) * n,
    e[1] + (t[1] - e[1]) * n
  ];
}
function Wo(e, t) {
  if (typeof t == "number" || t === void 0) {
    const n = Math.pow(10, t === void 0 ? 6 : t);
    return Math.round(e * n) / n;
  }
  return e;
}
function $o(e) {
  return Number(e) === e && e % 1 !== 0;
}
function wn(e, t = 1) {
  let n = e.slice();
  if (n.length < 3)
    return 0;
  let r = 0, o = n.length;
  n.forEach((i, s) => {
    n[s] = i.map((l) => l * lt);
  });
  for (let i = 0; i < o; i++) {
    let s = (i + 1) % o, l = (i + 2) % o;
    r += (n[i][0] - n[l][0]) * Math.sin(n[s][1]);
  }
  return r *= t * t / 2, Math.abs(r);
}
function Hn(e, t = 1) {
  let n = bt.isLineString(e) ? e.toXY() : e;
  if (n.length < 3)
    return 0;
  ut.isPoint(n[0]) && (n = n, n.map((i, s) => {
    n[s] = i.toXY();
  })), n = n;
  let r = 0, o = n.length - 1;
  for (let i = 0; i < n.length; i++)
    r += (n[o][0] + n[i][0]) * (n[o][1] - n[i][1]), o = i;
  return r = r * t * t / 2, Math.abs(r);
}
function he(e, t, n = 1) {
  let r = Math.PI / 180, o = e[0] * r, i = t[0] * r, s = Math.sin((t[0] - e[0]) * r / 2), l = Math.sin((t[1] - e[1]) * r / 2), h = s * s + Math.cos(o) * Math.cos(i) * l * l, u = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  return n * u;
}
function zo(e, t) {
  let n = e[0] * lt, r = t[0] * lt, o = e[1] * lt, i = t[1] * lt;
  const s = Math.sin(i - o) * Math.cos(r), l = Math.cos(n) * Math.sin(r) - Math.sin(n) * Math.cos(r) * Math.cos(i - o);
  return (Math.atan2(s, l) * 180 / Math.PI + 360) % 360;
}
function Uo(e, t) {
  let n = e[0] * lt, r = e[1] * lt, o = t[0] * lt, i = t[1] * lt;
  const s = Math.cos(o) * Math.cos(i - r), l = Math.cos(o) * Math.sin(i - r), h = Math.atan2(
    Math.sin(n) + Math.sin(o),
    Math.sqrt((Math.cos(n) + s) * (Math.cos(n) + s) + l * l)
  ), u = r + Math.atan2(l, Math.cos(n) + s);
  return [h / lt, u / lt];
}
function Jo(e, t, n) {
  let r = e[0] * lt, o = e[1] * lt, i = t[0] * lt, s = t[1] * lt, l = he(e, t);
  const h = Math.sin((1 - n) * l) / Math.sin(l), u = Math.sin(n * l) / Math.sin(l), f = h * Math.cos(r) * Math.cos(o) + u * Math.cos(i) * Math.cos(s), a = h * Math.cos(r) * Math.sin(o) + u * Math.cos(i) * Math.sin(s), c = h * Math.sin(r) + u * Math.sin(i), y = Math.atan2(c, Math.sqrt(f * f + a * a)), m = Math.atan2(a, f);
  return [y / lt, m / lt];
}
function Ho(e, t, n, r) {
  const o = ee(e), i = ee(t), s = ee(n), l = ee(r), h = we(o, i), u = we(s, l), f = we(h, u), a = Jn(f), c = Un(a, -1);
  if (y(c, o, i) || y(c, s, l))
    return te(c);
  if (y(a, o, i) || y(a, s, l))
    return te(a);
  return [0, 0];
  function y(m, g, v) {
    const M = ge(g, m), A = ge(v, m), L = ge(g, v);
    return Math.abs(M + A - L) < 1e-6;
  }
}
function Ko(e, t, n) {
  let r = e[0] * lt, o = e[1] * lt, i = t * lt, s = 6378137;
  const l = Math.asin(Math.sin(r) * Math.cos(n / s) + Math.cos(r) * Math.sin(n / s) * Math.cos(i)), h = o + Math.atan2(
    Math.sin(i) * Math.sin(n / s) * Math.cos(r),
    Math.cos(n / s) - Math.sin(r) * Math.sin(l)
  );
  return [l / lt, h / lt];
}
function Vo(e, t, n, r, o, i, s = !1) {
  o && (e = o(e), t = o(t), n = o(n), r = o(r));
  let l = [t[0] - e[0], t[1] - e[1]], h = [r[0] - n[0], r[1] - n[1]], u = Yt(l, h);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let f = Yt([n[0] - e[0], n[1] - e[1]], h) / u, a = Yt([n[0] - e[0], n[1] - e[1]], l) / u;
  return !s && (f < 0 || f > 1 || a < 0 || a > 1) ? (console.log("交点不在两条线段上"), null) : i ? i([e[0] + l[0] * f, e[1] + l[1] * f]) : [e[0] + l[0] * f, e[1] + l[1] * f];
}
function Qo(e, t, n, r, o = 1, i = 1) {
  let s = new Array(t), l = (r - n) / t;
  for (let h = 0; h < t; h++)
    s[h] = e(2 * Math.PI * o * (n + h * l)) * i;
  return s;
}
function fe(e, t) {
  return {
    real: e.real * t.real - e.imag * t.imag,
    imag: e.real * t.imag + e.imag * t.real
  };
}
function gn(e, t) {
  return {
    real: e.real + t.real,
    imag: e.imag + t.imag
  };
}
function xn(e, t) {
  return {
    real: e.real - t.real,
    imag: e.imag - t.imag
  };
}
function pn(e, t) {
  let n = -2 * Math.PI * e / t;
  return { real: Math.cos(n), imag: Math.sin(n) };
}
function Zo(e) {
  return e.imag *= -1, e;
}
function Kn(e, t) {
  let n = [];
  for (let r = 0; r < t; r++)
    n.push({ real: e[r], imag: 0 });
  return n;
}
function Mn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[Vn(r, t)];
  return n;
}
function Vn(e, t) {
  let n = e.toString(2);
  return n = n.split("").reverse().join(""), n = n + "0".repeat(Math.log2(t) - n.length), parseInt(n, 2);
}
function Qn(e) {
  let t = e.length, n = Kn(e, t), o = Mn(n).slice();
  for (let i = 1; i < Math.log2(t) + 1; i++) {
    let s = Math.pow(2, i), l = pn(1, s);
    for (let h = 0; h < t; h += s) {
      let u = { real: 1, imag: 0 };
      for (let f = 0; f < s / 2; f++) {
        let a = fe(u, o[h + f + s / 2]), c = o[h + f];
        o[h + f] = gn(c, a), o[h + f + s / 2] = xn(c, a), u = fe(u, l);
      }
    }
  }
  return o;
}
function ti(e) {
  let n = We(e).map((o) => o.map((i) => Math.sqrt(i.real * i.real + i.imag * i.imag)));
  return rr(We(n, "column"));
}
function Zn(e) {
  let t = e.length, r = Mn(e).slice();
  for (let o = 1; o < Math.log2(t) + 1; o++) {
    let i = Math.pow(2, o), s = pn(-1, i);
    for (let l = 0; l < t; l += i) {
      let h = { real: 1, imag: 0 };
      for (let u = 0; u < i / 2; u++) {
        let f = fe(h, r[l + u + i / 2]), a = r[l + u];
        r[l + u] = gn(a, f), r[l + u + i / 2] = xn(a, f), h = fe(h, s);
      }
    }
  }
  for (let o = 0; o < t; o++)
    r[o].real /= t, r[o].imag /= t;
  return r;
}
function De(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = er(e[r]);
  return n;
}
function tr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function ei(e, t = "row") {
  return t === "row" ? Xe(e) : ce(Xe(Rt(e)));
}
function Xe(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = tr(e[r]);
  return n;
}
function We(e, t = "row") {
  return t === "row" ? $e(e) : Rt($e(ce(e)));
}
function $e(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill(0));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Qn(e[o]);
  return r;
}
function ni(e, t = "row") {
  return t === "row" ? ze(e) : Rt(ze(Rt(e)));
}
function ze(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill({ real: 0, imag: 0 }));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Zn(e[o]);
  return r;
}
function ce(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[o][r];
  }
  return n;
}
function Rt(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[o][r];
  }
  return n;
}
function er(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].imag;
  return n;
}
function ri(e, t = "row") {
  return t === "row" ? De(e) : ce(De(Rt(e)));
}
function nr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function Ue(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = nr(e[r]);
  return n;
}
function oi(e, t = "row") {
  return t === "row" ? Ue(e) : ce(Ue(Rt(e)));
}
function rr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[(r + t / 2) % t][(o + t / 2) % t];
  }
  return n;
}
function ii(e, t) {
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
function or(e) {
  return typeof e != "object" ? !1 : e.x && e.y || e.lon && e.lat || e.lng && e.lat ? !0 : !!(e.X && e.Y);
}
function si(e, t) {
  let n = 0;
  return function(...r) {
    const o = Date.now();
    o - n > t && (e.apply(this, r), n = o);
  };
}
function bn(e, ...t) {
  for (let n = 0, r = t.length; n < r; n++) {
    const o = t[n];
    for (const i in o)
      e[i] = o[i];
  }
  return e;
}
function li(e) {
  for (let t in e)
    delete e[t];
}
function ai() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ui(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function ir(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...ir(r)) : t.push(r);
  }
  return t;
}
function sr(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    Array.isArray(o) ? n.push(sr(o, t)) : n.push(t[o]);
  }
  return n;
}
function hi(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function fi(e, t) {
  Array.isArray(t) || (t = [t]), t.forEach((r) => {
    if (r < 0 || r >= e[0].length)
      throw new Error("indexArray is illegal!");
  });
  let n = [];
  return e.forEach((r) => {
    let o = [];
    Array.isArray(t) ? t.forEach((i) => {
      o.push(r[i]);
    }) : o.push(r[t]), n.push(o);
  }), n;
}
function lr(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
function ci(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
class yi {
  constructor() {
    J(this, "_events", {});
    J(this, "_asyncEvents", {});
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
        const o = this._events[t];
        for (let i = 0; i < o.length; i++) {
          const s = o[i];
          (!n || s.fn === n) && (!r || s.context === r) && (o.splice(i, 1), i--);
        }
      }
    if (this._asyncEvents[t])
      if (!n && !r)
        delete this._asyncEvents[t];
      else {
        const o = this._asyncEvents[t];
        for (let i = 0; i < o.length; i++) {
          const s = o[i];
          (!n || s.fn === n) && (!r || s.context === r) && (o.splice(i, 1), i--);
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
    const o = (...i) => {
      n.apply(this, i), this.off(t, o);
    };
    return this.on(t, o, r);
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
    return this._events[t].slice().forEach((i) => {
      i.fn.call(i.context || this, r), i.once && this.off(t, i.fn, i.context);
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
    const o = { type: t, target: this, ...r }, i = this._asyncEvents[t].slice();
    if (n === "parallel")
      await Promise.all(i.map((s) => s.fn.call(s.context || this, o)));
    else if (n === "series")
      for (const s of i)
        await s.fn.call(s.context || this, o);
    else
      n === "ignore" && i.forEach((s) => s.fn.call(s.context || this, o));
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
function ar(e) {
  let t = e.length, n = 0, r = 0;
  for (let o = 0; o < t; o++)
    n += e[o][0], r += e[o][1];
  return [n / t, r / t];
}
function di(e, t = 1e-4, n = 100, r) {
  let o = [], i = r.length;
  if (i < e) {
    console.log("样本数量小于分类数量");
    return;
  }
  lr(i, e).forEach(
    (f) => {
      let a = r[f];
      o.push(a);
    }
  );
  let l = 1 / 0, h = 0, u = [];
  for (; l > t && h < n; ) {
    u = [];
    for (let a = 0; a < e; a++)
      u.push([]);
    for (let a = 0; a < i; a++) {
      let c = 1 / 0, y = 0, m = r[a];
      for (let g = 0; g < e; g++) {
        let v = r[a], M = o[g], A = he(v, M);
        A < c && (c = A, y = g);
      }
      u[y].push(m);
    }
    let f = [];
    for (let a = 0; a < e; a++)
      f.push(ar(u[a]));
    l = 0;
    for (let a = 0; a < e; a++) {
      let c = o[a], y = f[a], m = he(c, y);
      m > l && (l = m);
    }
    console.log(l), o = f, h++;
  }
  return u;
}
const ur = Object.prototype.hasOwnProperty;
function hr(e) {
  var t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  function i(f) {
    f != null && f.type && ur.call(s, f.type) && s[f.type](f);
  }
  const s = {
    GeometryCollection: function(f) {
      f.geometries.forEach(i);
    },
    Point: function(f) {
      l(f.coordinates);
    },
    MultiPoint: function(f) {
      f.coordinates.forEach(l);
    },
    LineString: function(f) {
      h(f.arcs);
    },
    MultiLineString: function(f) {
      f.arcs.forEach(h);
    },
    Polygon: function(f) {
      f.arcs.forEach(h);
    },
    MultiPolygon: function(f) {
      f.arcs.forEach(u);
    }
  };
  function l(f) {
    var a = f[0], c = f[1];
    a < t && (t = a), a > r && (r = a), c < n && (n = c), c > o && (o = c);
  }
  function h(f) {
    f.forEach(l);
  }
  function u(f) {
    f.forEach(h);
  }
  for (let f in e)
    i(e[f]);
  return r >= t && o >= n ? [t, n, r, o] : void 0;
}
function fr(e, t, n, r = Array, o = null) {
  for (var i = new r(e = 1 << Math.max(4, Math.ceil(Math.log(e) / Math.LN2))), s = e - 1, l = 0; l < e; ++l)
    i[l] = o;
  function h(a) {
    for (var c = t(a) & s, y = i[c], m = 0; y != o; ) {
      if (n(y, a))
        return !0;
      if (++m >= e)
        throw new Error("full hashset");
      y = i[c = c + 1 & s];
    }
    return i[c] = a, !0;
  }
  function u(a) {
    for (var c = t(a) & s, y = i[c], m = 0; y != o; ) {
      if (n(y, a))
        return !0;
      if (++m >= e)
        break;
      y = i[c = c + 1 & s];
    }
    return !1;
  }
  function f() {
    for (var a = [], c = 0, y = i.length; c < y; ++c) {
      var m = i[c];
      m != o && a.push(m);
    }
    return a;
  }
  return {
    add: h,
    has: u,
    values: f
  };
}
function je(e, t, n, r = Array, o = null, i = Array) {
  for (var s = new r(e = 1 << Math.max(4, Math.ceil(Math.log(e) / Math.LN2))), l = new i(e), h = e - 1, u = 0; u < e; ++u)
    s[u] = o;
  function f(m, g) {
    for (var v = t(m) & h, M = s[v], A = 0; M != o; ) {
      if (n(M, m))
        return l[v] = g;
      if (++A >= e)
        throw new Error("full hashmap");
      M = s[v = v + 1 & h];
    }
    return s[v] = m, l[v] = g, g;
  }
  function a(m, g) {
    for (var v = t(m) & h, M = s[v], A = 0; M != o; ) {
      if (n(M, m))
        return l[v];
      if (++A >= e)
        throw new Error("full hashmap");
      M = s[v = v + 1 & h];
    }
    return s[v] = m, l[v] = g, g;
  }
  function c(m, g) {
    for (var v = t(m) & h, M = s[v], A = 0; M != o; ) {
      if (n(M, m))
        return l[v];
      if (++A >= e)
        break;
      M = s[v = v + 1 & h];
    }
    return g;
  }
  function y() {
    for (var m = [], g = 0, v = s.length; g < v; ++g) {
      var M = s[g];
      M != o && m.push(M);
    }
    return m;
  }
  return {
    set: f,
    maybeSet: a,
    // set if unset
    get: c,
    keys: y
  };
}
function Bt(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
let vn = new ArrayBuffer(16), Je = new Float64Array(vn), ne = new Uint32Array(vn);
function Ce(e) {
  Je[0] = e[0], Je[1] = e[1];
  var t = ne[0] ^ ne[1];
  return t = t << 5 ^ t >> 7 ^ ne[2] ^ ne[3], t & 2147483647;
}
function cr(e) {
  var t = e.coordinates, n = e.lines, r = e.rings, o = F(), i = new Int32Array(t.length), s = new Int32Array(t.length), l = new Int32Array(t.length), h = new Int8Array(t.length), u = 0, f, a, c, y, m;
  for (f = 0, a = t.length; f < a; ++f)
    i[f] = s[f] = l[f] = -1;
  for (f = 0, a = n.length; f < a; ++f) {
    var g = n[f], v = g[0], M = g[1];
    for (y = o[v], m = o[++v], ++u, h[y] = 1; ++v <= M; )
      I(f, c = y, y = m, m = o[v]);
    ++u, h[m] = 1;
  }
  for (f = 0, a = t.length; f < a; ++f)
    i[f] = -1;
  for (f = 0, a = r.length; f < a; ++f) {
    var A = r[f], L = A[0] + 1, G = A[1];
    for (c = o[G - 1], y = o[L - 1], m = o[L], I(f, c, y, m); ++L <= G; )
      I(f, c = y, y = m, m = o[L]);
  }
  function I(B, $, z, d) {
    if (i[z] !== B) {
      i[z] = B;
      var w = s[z];
      if (w >= 0) {
        var x = l[z];
        (w !== $ || x !== d) && (w !== d || x !== $) && (++u, h[z] = 1);
      } else
        s[z] = $, l[z] = d;
    }
  }
  function F() {
    for (var B = je(t.length * 1.4, N, X, Int32Array, -1, Int32Array), $ = new Int32Array(t.length), z = 0, d = t.length; z < d; ++z)
      $[z] = B.maybeSet(z, z);
    return $;
  }
  function N(B) {
    return Ce(t[B]);
  }
  function X(B, $) {
    return Bt(t[B], t[$]);
  }
  i = s = l = null;
  var T = fr(u * 1.4, Ce, Bt), D;
  for (f = 0, a = t.length; f < a; ++f)
    h[D = o[f]] && T.add(t[D]);
  return T;
}
function yr(e) {
  var t = cr(e), n = e.coordinates, r = e.lines, o = e.rings, i, s, l;
  for (s = 0, l = r.length; s < l; ++s)
    for (var h = r[s], u = h[0], f = h[1]; ++u < f; )
      t.has(n[u]) && (i = { 0: u, 1: h[1] }, h[1] = u, h = h.next = i);
  for (s = 0, l = o.length; s < l; ++s)
    for (var a = o[s], c = a[0], y = c, m = a[1], g = t.has(n[c]); ++y < m; )
      t.has(n[y]) && (g ? (i = { 0: y, 1: a[1] }, a[1] = y, a = a.next = i) : (dr(n, c, m, m - y), n[m] = n[c], g = !0, y = c));
  return e;
}
function dr(e, t, n, r) {
  xe(e, t, n), xe(e, t, t + r), xe(e, t + r, n);
}
function xe(e, t, n) {
  for (var r = t + (n-- - t >> 1), o; t < r; ++t, --n)
    o = e[t], e[t] = e[n], e[n] = o;
}
function mr(e) {
  let t = e.coordinates, n = e.lines, r, o = e.rings, i, s = n.length + o.length, l, h;
  for (delete e.lines, delete e.rings, l = 0, h = n.length; l < h; ++l)
    for (r = n[l]; r = r.next; )
      ++s;
  for (l = 0, h = o.length; l < h; ++l)
    for (i = o[l]; i = i.next; )
      ++s;
  let u = je(s * 2 * 1.4, Ce, Bt), f = e.arcs = [];
  for (l = 0, h = n.length; l < h; ++l) {
    r = n[l];
    do
      a(r);
    while (r = r.next);
  }
  for (l = 0, h = o.length; l < h; ++l)
    if (i = o[l], i.next)
      do
        a(i);
      while (i = i.next);
    else
      c(i);
  function a(A) {
    let L, G, I, F, N, X, T, D;
    if (I = u.get(L = t[A[0]])) {
      for (T = 0, D = I.length; T < D; ++T)
        if (F = I[T], y(F, A)) {
          A[0] = F[0], A[1] = F[1];
          return;
        }
    }
    if (N = u.get(G = t[A[1]])) {
      for (T = 0, D = N.length; T < D; ++T)
        if (X = N[T], m(X, A)) {
          A[1] = X[0], A[0] = X[1];
          return;
        }
    }
    I ? I.push(A) : u.set(L, [A]), N ? N.push(A) : u.set(G, [A]), f.push(A);
  }
  function c(A) {
    let L, G, I, F, N;
    if (G = u.get(L = t[A[0]]))
      for (F = 0, N = G.length; F < N; ++F) {
        if (I = G[F], g(I, A)) {
          A[0] = I[0], A[1] = I[1];
          return;
        }
        if (v(I, A)) {
          A[0] = I[1], A[1] = I[0];
          return;
        }
      }
    if (G = u.get(L = t[A[0] + M(A)]))
      for (F = 0, N = G.length; F < N; ++F) {
        if (I = G[F], g(I, A)) {
          A[0] = I[0], A[1] = I[1];
          return;
        }
        if (v(I, A)) {
          A[0] = I[1], A[1] = I[0];
          return;
        }
      }
    G ? G.push(A) : u.set(L, [A]), f.push(A);
  }
  function y(A, L) {
    let G = A[0], I = L[0], F = A[1], N = L[1];
    if (G - F !== I - N)
      return !1;
    for (; G <= F; ++G, ++I)
      if (!Bt(t[G], t[I]))
        return !1;
    return !0;
  }
  function m(A, L) {
    let G = A[0], I = L[0], F = A[1], N = L[1];
    if (G - F !== I - N)
      return !1;
    for (; G <= F; ++G, --N)
      if (!Bt(t[G], t[N]))
        return !1;
    return !0;
  }
  function g(A, L) {
    let G = A[0], I = L[0], F = A[1], N = L[1], X = F - G;
    if (X !== N - I)
      return !1;
    let T = M(A), D = M(L);
    for (let B = 0; B < X; ++B)
      if (!Bt(t[G + (B + T) % X], t[I + (B + D) % X]))
        return !1;
    return !0;
  }
  function v(A, L) {
    let G = A[0], I = L[0], F = A[1], N = L[1], X = F - G;
    if (X !== N - I)
      return !1;
    let T = M(A), D = X - M(L);
    for (let B = 0; B < X; ++B)
      if (!Bt(t[G + (B + T) % X], t[N - (B + D) % X]))
        return !1;
    return !0;
  }
  function M(A) {
    let L = A[0], G = A[1], I = L, F = I, N = t[I];
    for (; ++I < G; ) {
      let X = t[I];
      (X[0] < N[0] || X[0] === N[0] && X[1] < N[1]) && (F = I, N = X);
    }
    return F - L;
  }
  return e;
}
function wr(e) {
  for (var t = -1, n = e.length; ++t < n; ) {
    for (var r = e[t], o = 0, i = 1, s = r.length, l = r[0], h = l[0], u = l[1], f, a; ++o < s; )
      l = r[o], f = l[0], a = l[1], (f !== h || a !== u) && (r[i++] = [f - h, a - u], h = f, u = a);
    i === 1 && (r[i++] = [0, 0]), r.length = i;
  }
  return e;
}
const gr = Object.prototype.hasOwnProperty;
function xr(e) {
  let t = -1, n = [], r = [], o = [];
  function i(a) {
    a && a.type && gr.call(s, a.type) && s[a.type](a);
  }
  const s = {
    GeometryCollection: function(a) {
      a.geometries.forEach(i);
    },
    LineString: function(a) {
      a.arcs = l(a.arcs);
    },
    MultiLineString: function(a) {
      a.arcs = a.arcs.map(l);
    },
    Polygon: function(a) {
      a.arcs = a.arcs.map(h);
    },
    MultiPolygon: function(a) {
      a.arcs = a.arcs.map(u);
    }
  };
  function l(a) {
    for (var c = 0, y = a.length; c < y; ++c)
      n[++t] = a[c];
    var m = { 0: t - y + 1, 1: t };
    return r.push(m), m;
  }
  function h(a) {
    for (var c = 0, y = a.length; c < y; ++c)
      n[++t] = a[c];
    var m = { 0: t - y + 1, 1: t };
    return o.push(m), m;
  }
  function u(a) {
    return a.map(h);
  }
  for (var f in e)
    i(e[f]);
  return {
    type: "Topology",
    coordinates: n,
    lines: r,
    rings: o,
    objects: e
  };
}
function pr(e) {
  var t = {}, n;
  for (n in e)
    t[n] = Mr(e[n]);
  return t;
}
function Mr(e) {
  return e == null ? { type: null } : e.type === "FeatureCollection" ? br(e) : e.type === "Feature" ? An(e) : Oe(e);
}
function br(e) {
  var t = { type: "GeometryCollection", geometries: e.features.map(An) };
  return e.bbox != null && (t.bbox = e.bbox), t;
}
function An(e) {
  var t = Oe(e.geometry), n;
  e.id != null && (t.id = e.id), e.bbox != null && (t.bbox = e.bbox);
  for (n in e.properties) {
    t.properties = e.properties;
    break;
  }
  return t;
}
function Oe(e) {
  if (e == null)
    return { type: null };
  let t = {};
  if (e.type === "GeometryCollection")
    e = e, t = { type: "GeometryCollection", geometries: e.geometries.map(Oe) }, e.bbox != null && (t.bbox = e.bbox);
  else if (e.type === "Point" || e.type === "MultiPoint")
    t = { type: e.type, coordinates: e.coordinates };
  else if (e.type === "LineString" || e.type === "MultiLineString" || e.type === "Polygon" || e.type === "MultiPolygon")
    e = e, t = { type: e.type, arcs: e.coordinates };
  else
    throw new Error("Unknown geometry type: " + e.type);
  return t;
}
const vr = Object.prototype.hasOwnProperty;
function Ar(e, t, n) {
  var r = t[0], o = t[1], i = t[2], s = t[3], l = i - r ? (n - 1) / (i - r) : 1, h = s - o ? (n - 1) / (s - o) : 1;
  function u(M) {
    return [Math.round((M[0] - r) * l), Math.round((M[1] - o) * h)];
  }
  function f(M, A) {
    for (var L = -1, G = 0, I = M.length, F = new Array(I), N, X, T, D, B; ++L < I; )
      N = M[L], D = Math.round((N[0] - r) * l), B = Math.round((N[1] - o) * h), (D !== X || B !== T) && (F[G++] = [X = D, T = B]);
    for (F.length = G; G < A; )
      G = F.push([F[0][0], F[0][1]]);
    return F;
  }
  function a(M) {
    return f(M, 2);
  }
  function c(M) {
    return f(M, 4);
  }
  function y(M) {
    return M.map(c);
  }
  function m(M) {
    M != null && M.type && vr.call(g, M.type) && g[M.type](M);
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
      M.arcs = a(M.arcs);
    },
    MultiLineString: function(M) {
      M.arcs = M.arcs.map(a);
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
    scale: [1 / l, 1 / h],
    translate: [r, o]
  };
}
const Pr = Object.prototype.hasOwnProperty;
function mi(e, t) {
  let n = pr(e);
  var r = hr(n), o = t > 0 && r && Ar(n, r, t), i = mr(yr(xr(n))), s = i.coordinates, l = je(i.arcs.length * 1.4, Er, Sr);
  i.bbox = r, i.arcs = i.arcs.map(function(y, m) {
    return l.set(y, m), s.slice(y[0], y[1] + 1);
  }), delete i.coordinates, s = null;
  function h(y) {
    y && y.type && Pr.call(u, y.type) && u[y.type](y);
  }
  var u = {
    GeometryCollection: function(y) {
      y.geometries.forEach(h);
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
      y.arcs = y.arcs.map(a);
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
  function a(y) {
    return y.map(f);
  }
  for (var c in n)
    h(n[c]);
  return o && (i.transform = o, i.arcs = wr(i.arcs)), i;
}
function Er(e) {
  var t = e[0], n = e[1], r;
  return n < t && (r = t, t = n, n = r), t + 31 * n;
}
function Sr(e, t) {
  var n = e[0], r = e[1], o = t[0], i = t[1], s;
  return r < n && (s = n, n = r, r = s), i < o && (s = o, o = i, i = s), n === o && r === i;
}
function Pn(e) {
  return e;
}
function He(e, t) {
  for (var n = 0, r = e.length; n < r; ) {
    var o = n + r >>> 1;
    e[o] < t ? n = o + 1 : r = o;
  }
  return n;
}
function Tr(e) {
  if (!e)
    return Pn;
  let t, n, r = e.scale[0], o = e.scale[1], i = e.translate[0], s = e.translate[1];
  return function(l, h) {
    h || (t = n = 0);
    var u = 2, f = l.length, a = new Array(f);
    for (a[0] = (t += l[0]) * r + i, a[1] = (n += l[1]) * o + s; u < f; )
      a[u] = l[u], ++u;
    return a;
  };
}
function wi(e) {
  if (!e)
    return Pn;
  var t, n, r = e.scale[0], o = e.scale[1], i = e.translate[0], s = e.translate[1];
  return function(l, h) {
    h || (t = n = 0);
    var u = 2, f = l.length, a = new Array(f), c = Math.round((l[0] - i) / r), y = Math.round((l[1] - s) / o);
    for (a[0] = c - t, t = c, a[1] = y - n, n = y; u < f; )
      a[u] = l[u], ++u;
    return a;
  };
}
function kr(e, t) {
  for (var n, r = e.length, o = r - t; o < --r; )
    n = e[o], e[o++] = e[r], e[r] = n;
}
function gi(e, t) {
  return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? { type: "FeatureCollection", features: t.geometries.map(function(n) {
    return Ke(e, n);
  }) } : Ke(e, t);
}
function Ke(e, t) {
  var n = t.id, r = t.bbox, o = t.properties == null ? {} : t.properties, i = ye(e, t);
  let s = n == null && r == null ? { type: "Feature", properties: o, geometry: i } : r == null ? { type: "Feature", id: n, properties: o, geometry: i } : { type: "Feature", id: n, bbox: r, properties: o, geometry: i };
  return Object.keys(o).length === 0 && delete s.properties, s;
}
function ye(e, t) {
  let n = Tr(e.transform), r = e.arcs;
  function o(f, a) {
    a.length && a.pop();
    for (var c = r[f < 0 ? ~f : f], y = 0, m = c.length; y < m; ++y)
      a.push(n(c[y], y));
    f < 0 && kr(a, m);
  }
  function i(f) {
    return n(f);
  }
  function s(f) {
    for (var a = [], c = 0, y = f.length; c < y; ++c)
      o(f[c], a);
    return a.length < 2 && a.push(a[0]), a;
  }
  function l(f) {
    for (var a = s(f); a.length < 4; )
      a.push(a[0]);
    return a;
  }
  function h(f) {
    return f.map(l);
  }
  function u(f) {
    var a = f.type, c;
    switch (a) {
      case "GeometryCollection":
        return { type: a, geometries: f.geometries.map(u) };
      case "Point":
        c = i(f.coordinates);
        break;
      case "MultiPoint":
        c = f.coordinates.map(i);
        break;
      case "LineString":
        c = s(f.arcs);
        break;
      case "MultiLineString":
        c = f.arcs.map(s);
        break;
      case "Polygon":
        c = h(f.arcs);
        break;
      case "MultiPolygon":
        c = f.arcs.map(h);
        break;
      default:
        return null;
    }
    return { type: a, coordinates: c };
  }
  return u(t);
}
function xi(e) {
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
  function o(m, g) {
    m.forEach(function(v) {
      r(v, g);
    });
  }
  function i(m, g) {
    m.type === "GeometryCollection" ? m.geometries.forEach(function(v) {
      i(v, g);
    }) : m.type in s && s[m.type](m.arcs, g);
  }
  const s = {
    LineString: r,
    MultiLineString: o,
    Polygon: o,
    MultiPolygon: function(m, g) {
      m.forEach(function(v) {
        o(v, g);
      });
    }
  };
  e.forEach(i);
  for (let m in t)
    for (var l = t[m], h = l.length, u = 0; u < h; ++u)
      for (var f = u + 1; f < h; ++f) {
        var a = l[u], c = l[f], y;
        (y = n[a])[m = He(y, c)] !== c && y.splice(m, 0, c), (y = n[c])[m = He(y, a)] !== a && y.splice(m, 0, a);
      }
  return n;
}
function En(e, t) {
  var n = {}, r = {}, o = {}, i = [], s = -1;
  t.forEach(function(u, f) {
    if (e.arcs)
      var a = e.arcs[u < 0 ? ~u : u], c;
    a.length < 3 && !a[1][0] && !a[1][1] && (c = t[++s], t[s] = u, t[f] = c);
  }), t.forEach(function(u) {
    var f = l(u), a = f[0], c = f[1], y, m;
    if (y = o[a])
      if (delete o[y.end], y.push(u), y.end = c, m = r[c]) {
        delete r[m.start];
        var g = m === y ? y : y.concat(m);
        r[g.start = y.start] = o[g.end = m.end] = g;
      } else
        r[y.start] = o[y.end] = y;
    else if (y = r[c])
      if (delete r[y.start], y.unshift(u), y.start = a, m = o[a]) {
        delete o[m.end];
        var v = m === y ? y : m.concat(y);
        r[v.start = m.start] = o[v.end = y.end] = v;
      } else
        r[y.start] = o[y.end] = y;
    else
      y = [u], r[y.start = a] = o[y.end = c] = y;
  });
  function l(u) {
    if (e.arcs) {
      let f = e.arcs[u < 0 ? ~u : u], a = f[0], c;
      return e.transform ? (c = [0, 0], f.forEach(function(y) {
        c[0] += y[0], c[1] += y[1];
      })) : c = f[f.length - 1], u < 0 ? [c, a] : [a, c];
    }
  }
  function h(u, f) {
    for (var a in u) {
      var c = u[a];
      delete f[c.start], delete c.start, delete c.end, c.forEach(function(y) {
        n[y < 0 ? ~y : y] = 1;
      }), i.push(c);
    }
  }
  return h(o, r), h(r, o), t.forEach(function(u) {
    n[u < 0 ? ~u : u] || i.push([u]);
  }), i;
}
function pi(e) {
  return ye(e, Ir.apply(this, arguments));
}
function Ir(e, t, n) {
  var r, o, i;
  if (arguments.length > 1)
    r = _r(e, t, n);
  else
    for (o = 0, r = new Array(i = e.arcs.length); o < i; ++o)
      r[o] = o;
  return { type: "MultiLineString", arcs: En(e, r) };
}
function _r(e, t, n) {
  var r = [], o = [], i;
  function s(a) {
    var c = a < 0 ? ~a : a;
    (o[c] || (o[c] = [])).push({ i: a, g: i });
  }
  function l(a) {
    a.forEach(s);
  }
  function h(a) {
    a.forEach(l);
  }
  function u(a) {
    a.forEach(h);
  }
  function f(a) {
    switch (i = a, a.type) {
      case "GeometryCollection":
        a.geometries.forEach(f);
        break;
      case "LineString":
        l(a.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        h(a.arcs);
        break;
      case "MultiPolygon":
        u(a.arcs);
        break;
    }
  }
  return f(t), o.forEach(n == null ? function(a) {
    r.push(a[0].i);
  } : function(a) {
    n(a[0].g, a[a.length - 1].g) && r.push(a[0].i);
  }), r;
}
function Lr(e) {
  for (var t = -1, n = e.length, r, o = e[n - 1], i = 0; ++t < n; )
    r = o, o = e[t], i += r[0] * o[1] - r[1] * o[0];
  return Math.abs(i);
}
function Mi(e) {
  return ye(e, Cr.apply(this, arguments));
}
function Cr(e, t) {
  var n = {}, r = [], o = [];
  t.forEach(i);
  function i(h) {
    switch (h.type) {
      case "GeometryCollection":
        h.geometries.forEach(i);
        break;
      case "Polygon":
        s(h.arcs);
        break;
      case "MultiPolygon":
        h.arcs.forEach(s);
        break;
    }
  }
  function s(h) {
    h.forEach(function(u) {
      u.forEach(function(f) {
        (n[f = f < 0 ? ~f : f] || (n[f] = [])).push(h);
      });
    }), r.push(h);
  }
  function l(h) {
    return Lr(ye(e, { type: "Polygon", arcs: [h] }).coordinates[0]);
  }
  return r.forEach(function(h) {
    if (!h._) {
      var u = [], f = [h];
      for (h._ = 1, o.push(u); h = f.pop(); )
        u.push(h), h.forEach(function(a) {
          a.forEach(function(c) {
            n[c < 0 ? ~c : c].forEach(function(y) {
              y._ || (y._ = 1, f.push(y));
            });
          });
        });
    }
  }), r.forEach(function(h) {
    delete h._;
  }), {
    type: "MultiPolygon",
    arcs: o.map(function(h) {
      let u = [], f;
      if (h.forEach(function(g) {
        g.forEach(function(v) {
          v.forEach(function(M) {
            n[M < 0 ? ~M : M].length < 2 && u.push(M);
          });
        });
      }), u = En(e, u), (f = u.length) > 1)
        for (var a = 1, c = l(u[0]), y, m; a < f; ++a)
          (y = l(u[a])) > c && (m = u[0], u[0] = u[a], u[a] = m, c = y);
      return u;
    }).filter(function(h) {
      return h.length > 0;
    })
  };
}
const re = 6378137, pt = 20037508342789244e-9, Gr = 85.05112877980659, St = {
  /**
   * Convert lon/lat values to 900913 x/y.
   * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
   * @param {Array} lonlat `[lon, lat]` array of geographic coordinates.
   * @returns {Array} `[x, y]` array of geographic coordinates.
   */
  project(e) {
    let t = Math.PI / 180, n = Gr, r = Math.max(Math.min(n, e[1]), -n), o = Math.sin(r * t), i = re * e[0] * t, s = re * Math.log((1 + o) / (1 - o)) / 2;
    return s > pt && (s = pt), s < -pt && (s = -pt), i > pt && (i = pt), i < -pt && (i = -pt), [i, s];
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
  bounds: [-pt, -pt, pt, pt],
  name: "EPSG:3857"
};
function Fr(e, t) {
  return [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.max(e[2], t[2]), Math.max(e[3], t[3])];
}
function bi(e, t) {
  return [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.max(e[2], t[0]), Math.max(e[3], t[1])];
}
function vi(e, t = St) {
  let n, r = t.project([e[0], e[1]]), o = t.project([e[2], e[3]]);
  return n = [r[0], r[1], o[0], o[1]], n;
}
function Ai(e, t = St) {
  let n, r = t.unproject([e[0], e[1]]), o = t.unproject([e[2], e[3]]);
  return n = [r[0], r[1], o[0], o[1]], n;
}
function Ve(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i][0], l = e[i][1];
    t = Math.min(t, s), n = Math.min(n, l), r = Math.max(r, s), o = Math.max(o, l);
  }
  return [t, n, r, o];
}
function Ge(e, t) {
  let n = t[0], r = t[1], o = t[2], i = t[3], s = e[0], l = e[1];
  return s >= n && s <= o && l >= r && l <= i;
}
function Pi(e, t) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[2] && e[3] >= t[3];
}
function Br(e, t) {
  return e[0] <= t[2] && e[2] >= t[0] && e[1] <= t[3] && e[3] >= t[1];
}
function Ei(e, t) {
  return e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1];
}
function Si(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
}
function Ti(e, t) {
  let n = t.map((o, i) => i % 2 === 0 ? Sn(o) : o), r = t.map((o, i) => i % 2 === 0 ? Fe(o) : o);
  return Ge(e, n) || Ge(e, r);
}
function ki(e) {
  let t = e.map(Yr), n = Ve(e), r = Ve(t);
  return qr(n, r, [!1, !0]);
}
function Ii(e) {
  let t = [e[0], e[1], 180, e[3]], n = [-180, e[1], e[2], e[3]];
  return [t, n];
}
function jr(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function _i(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Or(e) {
  let t = e[0], n = e[1], r = e[2], o = e[3];
  return [
    [t, n],
    [t, o],
    [r, o],
    [r, n],
    [t, n]
  ];
}
function Sn(e) {
  return e < 0 ? e + 180 : e - 180;
}
function Fe(e) {
  return e < 0 ? e + 180 : e - 180;
}
function Yr(e) {
  return [Sn(e[0]), e[1]];
}
function qr(e, t, n = [!1, !1]) {
  let r = e[2] - e[0], o = e[3] - e[1], i = t[2] - t[0], s = t[3] - t[1];
  return r * o < i * s ? n[0] ? e.map((l, h) => h % 2 === 0 ? Fe(l) : l) : e : n[1] ? t.map((l, h) => h % 2 === 0 ? Fe(l) : l) : t;
}
const ct = 11102230246251565e-32, C = 134217729, Tn = (3 + 8 * ct) * ct;
function at(e, t, n, r, o) {
  let i, s, l, h, u = t[0], f = r[0], a = 0, c = 0;
  f > u == f > -u ? (i = u, u = t[++a]) : (i = f, f = r[++c]);
  let y = 0;
  if (a < e && c < n)
    for (f > u == f > -u ? (s = u + i, l = i - (s - u), u = t[++a]) : (s = f + i, l = i - (s - f), f = r[++c]), i = s, l !== 0 && (o[y++] = l); a < e && c < n; )
      f > u == f > -u ? (s = i + u, h = s - i, l = i - (s - h) + (u - h), u = t[++a]) : (s = i + f, h = s - i, l = i - (s - h) + (f - h), f = r[++c]), i = s, l !== 0 && (o[y++] = l);
  for (; a < e; )
    s = i + u, h = s - i, l = i - (s - h) + (u - h), u = t[++a], i = s, l !== 0 && (o[y++] = l);
  for (; c < n; )
    s = i + f, h = s - i, l = i - (s - h) + (f - h), f = r[++c], i = s, l !== 0 && (o[y++] = l);
  return (i !== 0 || y === 0) && (o[y++] = i), y;
}
function Mt(e, t, n, r, o, i, s, l) {
  return at(at(e, t, n, r, s), s, o, i, l);
}
function E(e, t, n, r) {
  let o, i, s, l, h, u, f, a, c, y, m;
  f = C * n, y = f - (f - n), m = n - y;
  let g = t[0];
  o = g * n, f = C * g, a = f - (f - g), c = g - a, s = c * m - (o - a * y - c * y - a * m);
  let v = 0;
  s !== 0 && (r[v++] = s);
  for (let M = 1; M < e; M++)
    g = t[M], l = g * n, f = C * g, a = f - (f - g), c = g - a, h = c * m - (l - a * y - c * y - a * m), i = o + h, u = i - o, s = o - (i - u) + (h - u), s !== 0 && (r[v++] = s), o = l + i, s = i - (o - l), s !== 0 && (r[v++] = s);
  return (o !== 0 || v === 0) && (r[v++] = o), v;
}
function kn(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function Z(e) {
  return new Float64Array(e);
}
const Rr = (3 + 16 * ct) * ct, Nr = (2 + 12 * ct) * ct, Dr = (9 + 64 * ct) * ct * ct, jt = Z(4), Qe = Z(8), Ze = Z(12), tn = Z(16), yt = Z(4);
function Xr(e, t, n, r, o, i, s) {
  let l, h, u, f, a, c, y, m, g, v, M, A, L, G, I, F, N, X;
  const T = e - o, D = n - o, B = t - i, $ = r - i;
  G = T * $, c = C * T, y = c - (c - T), m = T - y, c = C * $, g = c - (c - $), v = $ - g, I = m * v - (G - y * g - m * g - y * v), F = B * D, c = C * B, y = c - (c - B), m = B - y, c = C * D, g = c - (c - D), v = D - g, N = m * v - (F - y * g - m * g - y * v), M = I - N, a = I - M, jt[0] = I - (M + a) + (a - N), A = G + M, a = A - G, L = G - (A - a) + (M - a), M = L - F, a = L - M, jt[1] = L - (M + a) + (a - F), X = A + M, a = X - A, jt[2] = A - (X - a) + (M - a), jt[3] = X;
  let z = kn(4, jt), d = Nr * s;
  if (z >= d || -z >= d || (a = e - T, l = e - (T + a) + (a - o), a = n - D, u = n - (D + a) + (a - o), a = t - B, h = t - (B + a) + (a - i), a = r - $, f = r - ($ + a) + (a - i), l === 0 && h === 0 && u === 0 && f === 0) || (d = Dr * s + Tn * Math.abs(z), z += T * f + $ * l - (B * u + D * h), z >= d || -z >= d))
    return z;
  G = l * $, c = C * l, y = c - (c - l), m = l - y, c = C * $, g = c - (c - $), v = $ - g, I = m * v - (G - y * g - m * g - y * v), F = h * D, c = C * h, y = c - (c - h), m = h - y, c = C * D, g = c - (c - D), v = D - g, N = m * v - (F - y * g - m * g - y * v), M = I - N, a = I - M, yt[0] = I - (M + a) + (a - N), A = G + M, a = A - G, L = G - (A - a) + (M - a), M = L - F, a = L - M, yt[1] = L - (M + a) + (a - F), X = A + M, a = X - A, yt[2] = A - (X - a) + (M - a), yt[3] = X;
  const w = at(4, jt, 4, yt, Qe);
  G = T * f, c = C * T, y = c - (c - T), m = T - y, c = C * f, g = c - (c - f), v = f - g, I = m * v - (G - y * g - m * g - y * v), F = B * u, c = C * B, y = c - (c - B), m = B - y, c = C * u, g = c - (c - u), v = u - g, N = m * v - (F - y * g - m * g - y * v), M = I - N, a = I - M, yt[0] = I - (M + a) + (a - N), A = G + M, a = A - G, L = G - (A - a) + (M - a), M = L - F, a = L - M, yt[1] = L - (M + a) + (a - F), X = A + M, a = X - A, yt[2] = A - (X - a) + (M - a), yt[3] = X;
  const x = at(w, Qe, 4, yt, Ze);
  G = l * f, c = C * l, y = c - (c - l), m = l - y, c = C * f, g = c - (c - f), v = f - g, I = m * v - (G - y * g - m * g - y * v), F = h * u, c = C * h, y = c - (c - h), m = h - y, c = C * u, g = c - (c - u), v = u - g, N = m * v - (F - y * g - m * g - y * v), M = I - N, a = I - M, yt[0] = I - (M + a) + (a - N), A = G + M, a = A - G, L = G - (A - a) + (M - a), M = L - F, a = L - M, yt[1] = L - (M + a) + (a - F), X = A + M, a = X - A, yt[2] = A - (X - a) + (M - a), yt[3] = X;
  const b = at(x, Ze, 4, yt, tn);
  return tn[b - 1];
}
function $t(e, t, n, r, o, i) {
  const s = (t - i) * (n - o), l = (e - o) * (r - i), h = s - l, u = Math.abs(s + l);
  return Math.abs(h) >= Rr * u ? h : -Xr(e, t, n, r, o, i, u);
}
const Wr = (10 + 96 * ct) * ct, $r = (4 + 48 * ct) * ct, zr = (44 + 576 * ct) * ct * ct, kt = Z(4), It = Z(4), _t = Z(4), vt = Z(4), At = Z(4), Pt = Z(4), dt = Z(4), mt = Z(4), pe = Z(8), Me = Z(8), be = Z(8), ve = Z(8), Ae = Z(8), Pe = Z(8), oe = Z(8), ie = Z(8), se = Z(8), Ct = Z(4), Gt = Z(4), Ft = Z(4), j = Z(8), W = Z(16), rt = Z(16), ot = Z(16), nt = Z(32), Lt = Z(32), it = Z(48), gt = Z(64);
let qt = Z(1152), Ee = Z(1152);
function st(e, t, n) {
  e = at(e, qt, t, n, Ee);
  const r = qt;
  return qt = Ee, Ee = r, e;
}
function Ur(e, t, n, r, o, i, s, l, h) {
  let u, f, a, c, y, m, g, v, M, A, L, G, I, F, N, X, T, D, B, $, z, d, w, x, b, P, k, p, S, O, _, Y, q, U, R;
  const H = e - s, K = n - s, V = o - s, tt = t - l, Q = r - l, et = i - l;
  _ = K * et, w = C * K, x = w - (w - K), b = K - x, w = C * et, P = w - (w - et), k = et - P, Y = b * k - (_ - x * P - b * P - x * k), q = V * Q, w = C * V, x = w - (w - V), b = V - x, w = C * Q, P = w - (w - Q), k = Q - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, kt[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, kt[1] = O - (p + d) + (d - q), R = S + p, d = R - S, kt[2] = S - (R - d) + (p - d), kt[3] = R, _ = V * tt, w = C * V, x = w - (w - V), b = V - x, w = C * tt, P = w - (w - tt), k = tt - P, Y = b * k - (_ - x * P - b * P - x * k), q = H * et, w = C * H, x = w - (w - H), b = H - x, w = C * et, P = w - (w - et), k = et - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, It[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, It[1] = O - (p + d) + (d - q), R = S + p, d = R - S, It[2] = S - (R - d) + (p - d), It[3] = R, _ = H * Q, w = C * H, x = w - (w - H), b = H - x, w = C * Q, P = w - (w - Q), k = Q - P, Y = b * k - (_ - x * P - b * P - x * k), q = K * tt, w = C * K, x = w - (w - K), b = K - x, w = C * tt, P = w - (w - tt), k = tt - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, _t[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, _t[1] = O - (p + d) + (d - q), R = S + p, d = R - S, _t[2] = S - (R - d) + (p - d), _t[3] = R, u = at(
    at(
      at(
        E(E(4, kt, H, j), j, H, W),
        W,
        E(E(4, kt, tt, j), j, tt, rt),
        rt,
        nt
      ),
      nt,
      at(
        E(E(4, It, K, j), j, K, W),
        W,
        E(E(4, It, Q, j), j, Q, rt),
        rt,
        Lt
      ),
      Lt,
      gt
    ),
    gt,
    at(
      E(E(4, _t, V, j), j, V, W),
      W,
      E(E(4, _t, et, j), j, et, rt),
      rt,
      nt
    ),
    nt,
    qt
  );
  let Tt = kn(u, qt), Xt = $r * h;
  if (Tt >= Xt || -Tt >= Xt || (d = e - H, f = e - (H + d) + (d - s), d = t - tt, y = t - (tt + d) + (d - l), d = n - K, a = n - (K + d) + (d - s), d = r - Q, m = r - (Q + d) + (d - l), d = o - V, c = o - (V + d) + (d - s), d = i - et, g = i - (et + d) + (d - l), f === 0 && a === 0 && c === 0 && y === 0 && m === 0 && g === 0) || (Xt = zr * h + Tn * Math.abs(Tt), Tt += (H * H + tt * tt) * (K * g + et * a - (Q * c + V * m)) + 2 * (H * f + tt * y) * (K * et - Q * V) + ((K * K + Q * Q) * (V * y + tt * c - (et * f + H * g)) + 2 * (K * a + Q * m) * (V * tt - et * H)) + ((V * V + et * et) * (H * m + Q * f - (tt * a + K * y)) + 2 * (V * c + et * g) * (H * Q - tt * K)), Tt >= Xt || -Tt >= Xt))
    return Tt;
  if ((a !== 0 || m !== 0 || c !== 0 || g !== 0) && (_ = H * H, w = C * H, x = w - (w - H), b = H - x, Y = b * b - (_ - x * x - (x + x) * b), q = tt * tt, w = C * tt, x = w - (w - tt), b = tt - x, U = b * b - (q - x * x - (x + x) * b), p = Y + U, d = p - Y, vt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, vt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, vt[2] = S - (R - d) + (p - d), vt[3] = R), (c !== 0 || g !== 0 || f !== 0 || y !== 0) && (_ = K * K, w = C * K, x = w - (w - K), b = K - x, Y = b * b - (_ - x * x - (x + x) * b), q = Q * Q, w = C * Q, x = w - (w - Q), b = Q - x, U = b * b - (q - x * x - (x + x) * b), p = Y + U, d = p - Y, At[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, At[1] = O - (p - d) + (q - d), R = S + p, d = R - S, At[2] = S - (R - d) + (p - d), At[3] = R), (f !== 0 || y !== 0 || a !== 0 || m !== 0) && (_ = V * V, w = C * V, x = w - (w - V), b = V - x, Y = b * b - (_ - x * x - (x + x) * b), q = et * et, w = C * et, x = w - (w - et), b = et - x, U = b * b - (q - x * x - (x + x) * b), p = Y + U, d = p - Y, Pt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, Pt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, Pt[2] = S - (R - d) + (p - d), Pt[3] = R), f !== 0 && (v = E(4, kt, f, pe), u = st(u, Mt(
    E(v, pe, 2 * H, W),
    W,
    E(E(4, Pt, f, j), j, Q, rt),
    rt,
    E(E(4, At, f, j), j, -et, ot),
    ot,
    nt,
    it
  ), it)), y !== 0 && (M = E(4, kt, y, Me), u = st(u, Mt(
    E(M, Me, 2 * tt, W),
    W,
    E(E(4, At, y, j), j, V, rt),
    rt,
    E(E(4, Pt, y, j), j, -K, ot),
    ot,
    nt,
    it
  ), it)), a !== 0 && (A = E(4, It, a, be), u = st(u, Mt(
    E(A, be, 2 * K, W),
    W,
    E(E(4, vt, a, j), j, et, rt),
    rt,
    E(E(4, Pt, a, j), j, -tt, ot),
    ot,
    nt,
    it
  ), it)), m !== 0 && (L = E(4, It, m, ve), u = st(u, Mt(
    E(L, ve, 2 * Q, W),
    W,
    E(E(4, Pt, m, j), j, H, rt),
    rt,
    E(E(4, vt, m, j), j, -V, ot),
    ot,
    nt,
    it
  ), it)), c !== 0 && (G = E(4, _t, c, Ae), u = st(u, Mt(
    E(G, Ae, 2 * V, W),
    W,
    E(E(4, At, c, j), j, tt, rt),
    rt,
    E(E(4, vt, c, j), j, -Q, ot),
    ot,
    nt,
    it
  ), it)), g !== 0 && (I = E(4, _t, g, Pe), u = st(u, Mt(
    E(I, Pe, 2 * et, W),
    W,
    E(E(4, vt, g, j), j, K, rt),
    rt,
    E(E(4, At, g, j), j, -H, ot),
    ot,
    nt,
    it
  ), it)), f !== 0 || y !== 0) {
    if (a !== 0 || m !== 0 || c !== 0 || g !== 0 ? (_ = a * et, w = C * a, x = w - (w - a), b = a - x, w = C * et, P = w - (w - et), k = et - P, Y = b * k - (_ - x * P - b * P - x * k), q = K * g, w = C * K, x = w - (w - K), b = K - x, w = C * g, P = w - (w - g), k = g - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, dt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, dt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, dt[2] = S - (R - d) + (p - d), dt[3] = R, _ = c * -Q, w = C * c, x = w - (w - c), b = c - x, w = C * -Q, P = w - (w - -Q), k = -Q - P, Y = b * k - (_ - x * P - b * P - x * k), q = V * -m, w = C * V, x = w - (w - V), b = V - x, w = C * -m, P = w - (w - -m), k = -m - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, mt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, mt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, mt[2] = S - (R - d) + (p - d), mt[3] = R, N = at(4, dt, 4, mt, ie), _ = a * g, w = C * a, x = w - (w - a), b = a - x, w = C * g, P = w - (w - g), k = g - P, Y = b * k - (_ - x * P - b * P - x * k), q = c * m, w = C * c, x = w - (w - c), b = c - x, w = C * m, P = w - (w - m), k = m - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, Gt[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, Gt[1] = O - (p + d) + (d - q), R = S + p, d = R - S, Gt[2] = S - (R - d) + (p - d), Gt[3] = R, D = 4) : (ie[0] = 0, N = 1, Gt[0] = 0, D = 1), f !== 0) {
      const ht = E(N, ie, f, ot);
      u = st(u, at(
        E(v, pe, f, W),
        W,
        E(ht, ot, 2 * H, nt),
        nt,
        it
      ), it);
      const ft = E(D, Gt, f, j);
      u = st(u, Mt(
        E(ft, j, 2 * H, W),
        W,
        E(ft, j, f, rt),
        rt,
        E(ht, ot, f, nt),
        nt,
        Lt,
        gt
      ), gt), m !== 0 && (u = st(u, E(E(4, Pt, f, j), j, m, W), W)), g !== 0 && (u = st(u, E(E(4, At, -f, j), j, g, W), W));
    }
    if (y !== 0) {
      const ht = E(N, ie, y, ot);
      u = st(u, at(
        E(M, Me, y, W),
        W,
        E(ht, ot, 2 * tt, nt),
        nt,
        it
      ), it);
      const ft = E(D, Gt, y, j);
      u = st(u, Mt(
        E(ft, j, 2 * tt, W),
        W,
        E(ft, j, y, rt),
        rt,
        E(ht, ot, y, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  if (a !== 0 || m !== 0) {
    if (c !== 0 || g !== 0 || f !== 0 || y !== 0 ? (_ = c * tt, w = C * c, x = w - (w - c), b = c - x, w = C * tt, P = w - (w - tt), k = tt - P, Y = b * k - (_ - x * P - b * P - x * k), q = V * y, w = C * V, x = w - (w - V), b = V - x, w = C * y, P = w - (w - y), k = y - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, dt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, dt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, dt[2] = S - (R - d) + (p - d), dt[3] = R, $ = -et, z = -g, _ = f * $, w = C * f, x = w - (w - f), b = f - x, w = C * $, P = w - (w - $), k = $ - P, Y = b * k - (_ - x * P - b * P - x * k), q = H * z, w = C * H, x = w - (w - H), b = H - x, w = C * z, P = w - (w - z), k = z - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, mt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, mt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, mt[2] = S - (R - d) + (p - d), mt[3] = R, X = at(4, dt, 4, mt, se), _ = c * y, w = C * c, x = w - (w - c), b = c - x, w = C * y, P = w - (w - y), k = y - P, Y = b * k - (_ - x * P - b * P - x * k), q = f * g, w = C * f, x = w - (w - f), b = f - x, w = C * g, P = w - (w - g), k = g - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, Ft[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, Ft[1] = O - (p + d) + (d - q), R = S + p, d = R - S, Ft[2] = S - (R - d) + (p - d), Ft[3] = R, B = 4) : (se[0] = 0, X = 1, Ft[0] = 0, B = 1), a !== 0) {
      const ht = E(X, se, a, ot);
      u = st(u, at(
        E(A, be, a, W),
        W,
        E(ht, ot, 2 * K, nt),
        nt,
        it
      ), it);
      const ft = E(B, Ft, a, j);
      u = st(u, Mt(
        E(ft, j, 2 * K, W),
        W,
        E(ft, j, a, rt),
        rt,
        E(ht, ot, a, nt),
        nt,
        Lt,
        gt
      ), gt), g !== 0 && (u = st(u, E(E(4, vt, a, j), j, g, W), W)), y !== 0 && (u = st(u, E(E(4, Pt, -a, j), j, y, W), W));
    }
    if (m !== 0) {
      const ht = E(X, se, m, ot);
      u = st(u, at(
        E(L, ve, m, W),
        W,
        E(ht, ot, 2 * Q, nt),
        nt,
        it
      ), it);
      const ft = E(B, Ft, m, j);
      u = st(u, Mt(
        E(ft, j, 2 * Q, W),
        W,
        E(ft, j, m, rt),
        rt,
        E(ht, ot, m, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  if (c !== 0 || g !== 0) {
    if (f !== 0 || y !== 0 || a !== 0 || m !== 0 ? (_ = f * Q, w = C * f, x = w - (w - f), b = f - x, w = C * Q, P = w - (w - Q), k = Q - P, Y = b * k - (_ - x * P - b * P - x * k), q = H * m, w = C * H, x = w - (w - H), b = H - x, w = C * m, P = w - (w - m), k = m - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, dt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, dt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, dt[2] = S - (R - d) + (p - d), dt[3] = R, $ = -tt, z = -y, _ = a * $, w = C * a, x = w - (w - a), b = a - x, w = C * $, P = w - (w - $), k = $ - P, Y = b * k - (_ - x * P - b * P - x * k), q = K * z, w = C * K, x = w - (w - K), b = K - x, w = C * z, P = w - (w - z), k = z - P, U = b * k - (q - x * P - b * P - x * k), p = Y + U, d = p - Y, mt[0] = Y - (p - d) + (U - d), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O + q, d = p - O, mt[1] = O - (p - d) + (q - d), R = S + p, d = R - S, mt[2] = S - (R - d) + (p - d), mt[3] = R, F = at(4, dt, 4, mt, oe), _ = f * m, w = C * f, x = w - (w - f), b = f - x, w = C * m, P = w - (w - m), k = m - P, Y = b * k - (_ - x * P - b * P - x * k), q = a * y, w = C * a, x = w - (w - a), b = a - x, w = C * y, P = w - (w - y), k = y - P, U = b * k - (q - x * P - b * P - x * k), p = Y - U, d = Y - p, Ct[0] = Y - (p + d) + (d - U), S = _ + p, d = S - _, O = _ - (S - d) + (p - d), p = O - q, d = O - p, Ct[1] = O - (p + d) + (d - q), R = S + p, d = R - S, Ct[2] = S - (R - d) + (p - d), Ct[3] = R, T = 4) : (oe[0] = 0, F = 1, Ct[0] = 0, T = 1), c !== 0) {
      const ht = E(F, oe, c, ot);
      u = st(u, at(
        E(G, Ae, c, W),
        W,
        E(ht, ot, 2 * V, nt),
        nt,
        it
      ), it);
      const ft = E(T, Ct, c, j);
      u = st(u, Mt(
        E(ft, j, 2 * V, W),
        W,
        E(ft, j, c, rt),
        rt,
        E(ht, ot, c, nt),
        nt,
        Lt,
        gt
      ), gt), y !== 0 && (u = st(u, E(E(4, At, c, j), j, y, W), W)), m !== 0 && (u = st(u, E(E(4, vt, -c, j), j, m, W), W));
    }
    if (g !== 0) {
      const ht = E(F, oe, g, ot);
      u = st(u, at(
        E(I, Pe, g, W),
        W,
        E(ht, ot, 2 * et, nt),
        nt,
        it
      ), it);
      const ft = E(T, Ct, g, j);
      u = st(u, Mt(
        E(ft, j, 2 * et, W),
        W,
        E(ft, j, g, rt),
        rt,
        E(ht, ot, g, nt),
        nt,
        Lt,
        gt
      ), gt);
    }
  }
  return qt[u - 1];
}
function Jr(e, t, n, r, o, i, s, l) {
  const h = e - s, u = n - s, f = o - s, a = t - l, c = r - l, y = i - l, m = u * y, g = f * c, v = h * h + a * a, M = f * a, A = h * y, L = u * u + c * c, G = h * c, I = u * a, F = f * f + y * y, N = v * (m - g) + L * (M - A) + F * (G - I), X = (Math.abs(m) + Math.abs(g)) * v + (Math.abs(M) + Math.abs(A)) * L + (Math.abs(G) + Math.abs(I)) * F, T = Wr * X;
  return N > T || -N > T ? N : Ur(e, t, n, r, o, i, s, l, X);
}
const Jt = St.project, en = St.unproject;
function nn(e, t, n, r, o = St.project, i = St.unproject, s = !1) {
  o && (e = o(e), t = o(t), n = o(n), r = o(r));
  let l = [t[0] - e[0], t[1] - e[1]], h = [r[0] - n[0], r[1] - n[1]], u = Yt(l, h);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let f = Yt([n[0] - e[0], n[1] - e[1]], h) / u, a = Yt([n[0] - e[0], n[1] - e[1]], l) / u;
  return !s && (f < 0 || f > 1 || a < 0 || a > 1) ? (console.log("交点不在两条线段上"), null) : i ? i([e[0] + l[0] * f, e[1] + l[1] * f]) : [e[0] + l[0] * f, e[1] + l[1] * f];
}
function Hr(e, t, n = !1) {
  if (n) {
    let r = Jt(e), o = t[0], i = t[1], s = t[2], l = t[3];
    return [o, i] = Jt([o, i]), [s, l] = Jt([s, l]), r[0] < o || r[0] > s || r[1] < i || r[1] > l;
  } else {
    let r = t[0], o = t[1], i = t[2], s = t[3];
    return e[0] < r || e[0] > i || e[1] < o || e[1] > s;
  }
}
function Kr(e, t) {
  return Vr(e, Or(t));
}
function Vr(e, t) {
  let n = e[e.length - 1], r, o, i, s = t;
  for (let l in e) {
    r = e[l];
    let h = s;
    s = [], o = h[h.length - 1];
    for (let u in h) {
      if (i = h[u], Se(i, n, r)) {
        if (!Se(o, n, r)) {
          let f = nn(
            o,
            i,
            n,
            r,
            Jt,
            en,
            !0
          );
          s.push(f);
        }
        s.push(i);
      } else if (Se(o, n, r)) {
        let f = nn(
          o,
          i,
          n,
          r,
          Jt,
          en,
          !0
        );
        s.push(f);
      }
      o = i;
    }
    n = r;
  }
  return s;
}
function Li(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++)
    t[r][1] > e[1] != t[o][1] > e[1] && e[0] < (t[o][0] - t[r][0]) * (e[1] - t[r][1]) / (t[o][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Ci(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    s[0] < t && (t = s[0]), s[0] > r && (r = s[0]), s[1] < n && (n = s[1]), s[1] > o && (o = s[1]);
  }
  return [t, n, r, o];
}
function Gi(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function Fi(e, t) {
  return (e - 1 + t) % t;
}
function Se(e, t, n) {
  return In(t, n, e) > 0;
}
function Bi(e) {
  return Math.abs(e) <= 180 ? e : e - Zt(e) * 360;
}
function Zt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function In(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], o = e[1], i = t[0], s = t[1], l = n[0], h = n[1], u = (i - r) * (h - o) - (s - o) * (l - r);
  return u = Zt(u), u;
}
function rn(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), o = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return o = o * 180 / Math.PI, o < 0 && (o += 360), o;
}
function ji(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], h = n[0], u = n[1], f = $t(o, i, s, l, h, u);
  return r && (f = -f), f = Zt(f), f;
}
function Oi(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], h = n[0], u = n[1], f = r[0], a = r[1], c = Jr(o, i, s, l, h, u, f, a);
  return c = Zt(c), c;
}
function Yi(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], h = n[0], u = n[1], f = r[0], a = r[1];
  const c = o - f, y = i - a, m = s - f, g = l - a, v = h - f, M = u - a, A = c * c + y * y, L = m * m + g * g, G = v * v + M * M;
  let I = c * (g * G - L * M) - y * (m * G - L * v) + A * (m * M - g * v);
  return Zt(I);
}
class _n {
  // 波段数
  constructor(t, n) {
    J(this, "MBR");
    // [minLon, minLat, maxLon, maxLat]
    J(this, "data");
    // 三维数组
    J(this, "shape");
    // 三维数组的形状
    J(this, "rows");
    // 行数
    J(this, "cols");
    // 列数
    J(this, "bands");
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
  /**
   * 获取指定范围，指定波段的网格数据
   * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGrid(t, n = [0]) {
    let r = t[0], o = t[1], i = t[2], s = t[3], l = [];
    for (let h of n) {
      let u = [];
      for (let f = r; f <= i; f++) {
        let a = [];
        for (let c = o; c <= s; c++)
          a.push(this.data[h][f][c]);
        u.push(a);
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
    let n = this.data[t], r = 0, o = 0;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let h = n[s][l];
        h !== 0 && (r += h, o++);
      }
    let i = r / o;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let h = n[s][l];
        (h === 0 || h === -9999 || h === 999999) && (n[s][l] = i);
      }
  }
  /**
   * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGridObj(t, n = [0]) {
    let r = t[0], o = t[1], i = t[2], s = t[3], l = [];
    for (let u of n) {
      let f = [];
      for (let a = r; a <= i; a++) {
        let c = [];
        for (let y = o; y <= s; y++)
          c.push(this.data[u][a][y]);
        f.push(c);
      }
      l.push(f);
    }
    return new _n(t, l);
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], o = t[2], i = t[3], s = this.getGridCoord([n, r]), l = this.getGridCoord([o, i]);
    if (s === null || l === null)
      return null;
    {
      let h = s[0], u = s[1], f = l[0], a = l[1];
      return [h, u, f, a];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (Hr(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], l = this.MBR[3], h = Math.floor((r - i) / (l - i) * this.rows), u = Math.floor((n - o) / (s - o) * this.cols);
      return [h, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], l = this.MBR[3], h = (r + 0.5) / this.cols * (s - o) + o, u = (n + 0.5) / this.rows * (l - i) + i;
    return [h, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], o = n[0][0], i = 0;
    for (let l = 0; l < this.rows; l++)
      for (let h = 0; h < this.cols; h++) {
        let u = n[l][h];
        u > r && (r = u), u < o && (o = u), i += u;
      }
    let s = i / (this.rows * this.cols);
    return {
      max: r,
      min: o,
      mean: s
    };
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
    let r = this.data[t], o = [];
    for (let i = 0; i < this.rows; i++) {
      let s = [];
      for (let l = 0; l < this.cols; l++)
        r[i][l] < n ? s.push(0) : s.push(1);
      o.push(s);
    }
    return o;
  }
  getCoutourCode(t, n, r) {
    let o = this.binarization(t, n), i = [];
    for (let s = 0; s < this.rows - 1; s++) {
      let l = [];
      for (let h = 0; h < this.cols - 1; h++) {
        let u = 0;
        u += o[s][h] * 8, u += o[s][h + 1] * 4, u += o[s + 1][h + 1] * 2, u += o[s + 1][h] * 1, l.push(u);
      }
      i.push(l);
    }
    if (r) {
      for (let h = 0; h < i.length; h++) {
        let u = i[h];
        u.unshift(u[0]), u.push(u[u.length - 1]);
      }
      let s = i[0], l = i[i.length - 1];
      i.unshift(s), i.push(l);
    }
    return i;
  }
  getMean(t) {
    let n = this.data[t], r = 0;
    for (let o = 0; o < this.rows; o++)
      for (let i = 0; i < this.cols; i++)
        r += n[o][i];
    return r / (this.rows * this.cols);
  }
  getSorted1DArray(t) {
    let n = this.data[t], r = [];
    for (let o = 0; o < this.rows; o++)
      for (let i = 0; i < this.cols; i++)
        r.push(n[o][i]);
    return r.sort((o, i) => o - i), r;
  }
}
function qi(e, t, n) {
  let r = e.data[t], o = [];
  for (let i = 0; i < e.rows; i++) {
    let s = [];
    for (let l = 0; l < e.cols; l++)
      r[i][l] < n ? s.push(0) : s.push(1);
    o.push(s);
  }
  return o;
}
function Ri(e, t) {
  let n = e.rows * e.cols, r = Qr(n) + 3;
  (t > r || t < 0) && (t = r);
  let o = [0, 0, e.rows - 1, e.cols - 1];
  return zt(o, 0, t);
}
function zt(e, t, n) {
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
    let o = e[0], i = e[1], s = e[2], l = e[3], h = (o + s) / 2;
    h = Math.floor(h);
    let u = (i + l) / 2;
    u = Math.floor(u);
    let f = [o, u, h, l], a = [h, u, s, l], c = [o, i, h, u], y = [h, i, s, u], m = zt(f, t + 1, n), g = zt(a, t + 1, n), v = zt(c, t + 1, n), M = zt(y, t + 1, n);
    return r.children.push(m), r.children.push(g), r.children.push(v), r.children.push(M), r;
  }
}
function Qr(e) {
  let t = 0, n = 1;
  for (; n < e; )
    n *= 4, t++;
  return t;
}
function Ni(e) {
  let t = -1 / 0, n = 1 / 0;
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      e[r][o] > t && (t = e[r][o]), e[r][o] < n && (n = e[r][o]);
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      (e[r][o] === t || e[r][o] === n) && (e[r][o] = 0);
}
const Zr = Math.E;
function Te(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function to(e, t) {
  let o = e, i = t;
  o *= 3284157443, i ^= o << 128 | o >> 256 - 128, i *= 1911520717, o ^= i << 128 | i >> 256 - 128, o *= 2048419325;
  const s = o * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(s),
    y: Math.sin(s)
  };
}
function le(e, t, n, r) {
  const o = to(e, t), i = n - e, s = r - t;
  return i * o.x + s * o.y;
}
function Di(e, t) {
  const n = Math.floor(e), r = n + 1, o = Math.floor(t), i = o + 1, s = e - n, l = t - o, h = le(n, o, e, t), u = le(r, o, e, t), f = Te(h, u, s), a = le(n, i, e, t), c = le(r, i, e, t), y = Te(a, c, s);
  return Te(f, y, l);
}
function Xi(e, t) {
  return Math.pow(Zr, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function Wi(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
function $i(e, t, n) {
  const r = new Array(e).fill(0).map(() => new Array(t).fill(0)), o = new Array(n).fill(0).map(() => ({
    x: Math.random() * e,
    y: Math.random() * t
  }));
  for (let i = 0; i < e; i++)
    for (let s = 0; s < t; s++) {
      let l = 1e5;
      for (let h = 0; h < n; h++) {
        const u = Math.sqrt(
          Math.pow(o[h].x - i, 2) + Math.pow(o[h].y - s, 2)
        );
        u < l && (l = u);
      }
      r[i][s] = l;
    }
  return r;
}
function zi(e, t, n, r = "horizontal") {
  const o = new Array(e).fill(0).map(() => new Array(t).fill(0)), i = Math.floor(e / n);
  for (let s = 0; s < e; s++)
    for (let l = 0; l < t; l++)
      r === "vertical" ? o[s][l] = Math.floor(s / i) % 2 === 0 ? 1 : 0 : r === "horizontal" ? o[s][l] = Math.floor(l / i) % 2 === 0 ? 1 : 0 : r === "diagonal" ? o[s][l] = Math.floor((s + l) / i) % 2 === 0 ? 1 : 0 : r === "all" && (o[s][l] = Math.floor((s + l) / i) % 2 === 0 ? 1 : 0, o[s][l] += Math.floor(s / i) % 2 === 0 ? 1 : 0, o[s][l] += Math.floor(l / i) % 2 === 0 ? 1 : 0);
  return o;
}
class Ht {
  constructor(t, n) {
    J(this, "bbox", [1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    J(this, "coordinates");
    J(this, "properties");
    J(this, "projection", St);
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
J(Ht, "fromFeature"), J(Ht, "fromGeometry");
class Nt {
  constructor(t, n) {
    J(this, "coordinates");
    J(this, "geometries", []);
    J(this, "bbox", [1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    J(this, "properties");
    J(this, "projection", St);
    n && (this.properties = n), t.forEach((r) => {
      this.geometries.push(r), this.updateBBox(r);
    });
  }
  toXY() {
  }
  // 未实现
  updateBBox(t) {
    const n = t.bbox;
    n && (this.bbox = Fr(this.bbox, n));
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
const ke = or;
class ut extends Ht {
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
    return t instanceof ut;
  }
  static fromGeometry(t) {
    return new ut(t.coordinates);
  }
  static fromFeature(t) {
    const { geometry: n, properties: r } = t;
    if (n.type !== "Point")
      throw new Error(`The input geometry is not a Point: ${n.type}`);
    const o = n;
    return r ? new ut(o.coordinates, r) : new ut(o.coordinates);
  }
}
class xt extends Nt {
  constructor(n, r) {
    var t = (...args) => {
      super(...args);
      // 可以传入 点类型数组 但是会忽略每一个点的 properties
      // 因为 MultiPoint 本身有 properties
      // 建议在外部提取每一个点的 properties 再传入 到 MultiPoint 的 properties
      J(this, "coordinates");
    };
    n[0] instanceof ut ? (t(n, r), this.coordinates = n.map((o) => o.coordinates)) : (t(
      n.map((o) => new ut(o)),
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
      for (let h = 0; h < n.length; h++)
        r += n[h];
      for (let h = 0; h < n.length; h++)
        n[h] /= r;
      let o = 0, i = 0;
      for (let h = 0; h < this.coordinates.length; h++) {
        let u = this.coordinates[h];
        o += u[0] * n[h], i += u[1] * n[h];
      }
      let s = o, l = i;
      return new ut([s, l]);
    } else {
      let r = 0, o = 0;
      for (let l = 0; l < this.coordinates.length; l++) {
        let h = this.coordinates[l];
        r += h[0], o += h[1];
      }
      let i = r / this.coordinates.length, s = o / this.coordinates.length;
      return new ut([i, s]);
    }
  }
  /**
   * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
   * @param geometry 
   */
  addGeometry(n) {
    n instanceof ut ? (this.geometries.push(n), this.coordinates.push(n.coordinates), this.updateBBox(n)) : n instanceof xt ? (this.geometries.concat(n.geometries), this.coordinates.concat(n.coordinates), this.updateBBox(n)) : (this.geometries.push(new ut(n)), this.coordinates.push(n), this.updateBBox(this.geometries[this.geometries.length - 1]));
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
    return n instanceof xt;
  }
  static fromFeature(n) {
    const { geometry: r, properties: o } = n;
    if (r.type !== "MultiPoint")
      throw new Error(`The input geometry is not a MultiPoint: ${r.type}`);
    const i = r;
    return o ? new xt(i.coordinates, o) : new xt(i.coordinates);
  }
  static fromGeometry(n) {
    return new xt(n.coordinates);
  }
}
function Ui(...e) {
  if (e.length === 1) {
    if (!ke(e[0]) && e[0].length === 2)
      return new ut(e[0]);
    if (ke(e[0]))
      return new ut([e[0].lon || e[0].lng || e[0].x, e[0].lat || e[0].y], e[1]);
    throw new Error("Invalid input");
  } else if (e.length === 2) {
    if (typeof e[0] == "number" && typeof e[1] == "number")
      return new ut([e[0], e[1]]);
    if (ke(e[0]))
      return new ut([e[0].lon || e[0].lng || e[0].x, e[0].lat || e[0].y], e[1]);
    if (Array.isArray(e[0]) && e[0].length === 2)
      return new ut(e[0], e[1]);
    throw new Error("Invalid input");
  } else
    return new ut([e[0], e[1]], e[2]);
}
function Ji(e, t) {
  return new xt(e, t);
}
class bt extends Ht {
  constructor(t, n) {
    super(t, n);
  }
  updateBBox() {
    let [t, n, r, o] = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (const [i, s] of this.coordinates)
      t = Math.min(t, i), n = Math.min(n, s), r = Math.max(r, i), o = Math.max(o, s);
    this.bbox = [t, n, r, o];
  }
  toXY() {
    return this.coordinates.map((t) => this.projection.project(t));
  }
  toMultiPoint() {
    return new xt(this.coordinates);
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
    const o = n;
    return new bt(o.coordinates, r);
  }
  static isLineString(t) {
    return t.type === "LineString";
  }
}
class Kt extends Nt {
  constructor(n, r) {
    var t = (...args) => {
      super(...args);
      J(this, "coordinates");
    };
    n[0] instanceof bt ? (t(n, r), this.coordinates = n.map((o) => o.coordinates)) : (t(
      n.map((o) => new bt(o)),
      r
    ), this.coordinates = n);
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new xt(this.coordinates.flat());
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
    const { geometry: r, properties: o } = n;
    if (r.type !== "MultiLineString")
      throw new Error(`The input geometry is not a MultiLineString: ${r.type}`);
    const i = r;
    return new Kt(i.coordinates, o);
  }
  static fromGeometry(n) {
    return new Kt(n.coordinates);
  }
}
function Hi(e) {
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
    return new xt(this.coordinates.flat());
  }
  updateBBox() {
    let [t, n, r, o] = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (const i of this.coordinates)
      for (const [s, l] of i)
        t = Math.min(t, s), n = Math.min(n, l), r = Math.max(r, s), o = Math.max(o, l);
    this.bbox = [t, n, r, o];
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
    const o = n;
    return new Et(o.coordinates, r);
  }
}
class Vt extends Nt {
  constructor(n, r) {
    var t = (...args) => {
      super(...args);
      J(this, "coordinates");
    };
    n[0] instanceof Et ? (t(n, r), this.coordinates = n.map((o) => o.coordinates)) : (t(
      n.map((o) => new Et(o)),
      r
    ), this.coordinates = n);
  }
  getCoodinates() {
    return this.coordinates;
  }
  toMultiPoint() {
    return new xt(this.coordinates.flat().flat());
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
    const { geometry: r, properties: o } = n;
    if (r.type !== "MultiPolygon")
      throw new Error(`The input geometry is not a MultiPolygon: ${r.type}`);
    const i = r;
    return new Vt(i.coordinates, o);
  }
  static fromGeometry(n) {
    return new Vt(n.coordinates);
  }
}
class Ln {
  /**
   * 构造函数
   * @param x - 圆心 x 坐标 
   * @param y - 圆心 y 坐标
   * @param r - 半径
   */
  constructor(t, n, r) {
    J(this, "x");
    J(this, "y");
    J(this, "r");
    J(this, "rSquared");
    this.x = t, this.y = n, this.r = r, this.rSquared = this.r * this.r;
  }
  /**
   * 判断点是否在圆内
   * @param point - 点坐标
   * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
   * @returns {boolean} - true if the point is inside the circle
   */
  contains(t, n = 18e8) {
    let r = t[0], o = t[1];
    return Math.pow(r - this.x, 2) + Math.pow(o - this.y, 2) - this.rSquared <= n;
  }
  /**
   * （仅平面下保证有效）判断圆是否与 MBR 相交
   * @param range - MBR
   * @returns {boolean} - true if the circle intersects the MBR
   */
  intersects(t) {
    let n = jr(t), r = Math.abs(n.x - this.x), o = Math.abs(n.y - this.y), i = this.r, s = n.w / 2, l = n.h / 2, h = Math.pow(r - s, 2) + Math.pow(o - l, 2);
    return r > i + s || o > i + l ? !1 : r <= s || o <= l ? !0 : h <= this.rSquared;
  }
  static isCircle(t) {
    return t instanceof Ln;
  }
}
function Cn(e) {
  switch (e.type) {
    case "Point":
      return ut.fromGeometry(e);
    case "LineString":
      return bt.fromGeometry(e);
    case "Polygon":
      return Et.fromGeometry(e);
    case "MultiPoint":
      return xt.fromGeometry(e);
    case "MultiLineString":
      return Kt.fromGeometry(e);
    case "MultiPolygon":
      return Vt.fromGeometry(e);
    case "GeometryCollection":
      return no(e);
    default:
      throw new Error("Unknown geometry type: " + e.type + " in fromGeometryObj");
  }
}
function eo(e) {
  if (e.type === "Feature") {
    const t = e.geometry;
    switch (t.type) {
      case "Point":
        return ut.fromFeature(e);
      case "LineString":
        return bt.fromFeature(e);
      case "Polygon":
        return Et.fromFeature(e);
      case "MultiPoint":
        return xt.fromFeature(e);
      case "MultiLineString":
        return Kt.fromFeature(e);
      case "MultiPolygon":
        return Vt.fromFeature(e);
      case "GeometryCollection":
        return on(e);
      default:
        throw new Error("Unknown geometry type: " + t.type + " in fromGeometryObj");
    }
  } else {
    if (e.type === "FeatureCollection")
      return on(e);
    throw new Error("Unknown GeoJSON type");
  }
}
function on(e) {
  if (e.type === "Feature") {
    const t = e.geometry;
    if (t.type === "GeometryCollection") {
      const n = t.geometries.map((r) => Cn(r));
      return new Nt(n, e.properties);
    } else
      throw new Error("The input feature is not a GeometryCollection: " + t.type);
  } else if (e.type === "FeatureCollection") {
    const t = e.features.map((n) => eo(n));
    return new Nt(t);
  } else
    throw new Error("Unknown GeoJSON type");
}
function no(e) {
  if (e.type === "GeometryCollection") {
    const t = e.geometries.map((n) => Cn(n));
    return new Nt(t);
  } else
    throw new Error("The input geometry is not a GeometryCollection: " + e.type);
}
class Ut {
  constructor(t, n, r = 10) {
    // 四叉树基础类
    J(this, "capacity");
    J(this, "boundary");
    J(this, "points");
    // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    J(this, "northWest");
    J(this, "northEast");
    J(this, "southWest");
    J(this, "southEast");
    J(this, "isDivided");
    J(this, "depth");
    J(this, "maxDepth", 10);
    this.capacity = n, this.boundary = t, this.points = [], this.isDivided = !1, this.northWest = null, this.northEast = null, this.southWest = null, this.southEast = null, this.depth = 0, this.maxDepth = r;
  }
  contains(t, n) {
    return Ge(t, n);
  }
  intersects(t, n) {
    return Br(t, n);
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, o = this.boundary[3] - n, i = new Ut([t, n + o / 2, t + r / 2, n + o], this.capacity), s = new Ut([t + r / 2, n + o / 2, t + r, n + o], this.capacity), l = new Ut([t, n, t + r / 2, n + o / 2], this.capacity), h = new Ut([t + r / 2, n, t + r, n + o / 2], this.capacity);
    this.northWest = i, this.northEast = s, this.southWest = l, this.southEast = h, this.isDivided = !0, this.depth++;
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
function Ki(e) {
  return e ? /^(epsg:|EPSG:)?3857$/.test(e) || /^(epsg:|EPSG:)?900913$/.test(e) || /^(epsg-|EPSG-)?3857$/.test(e) || /^(epsg-|EPSG-)?900913$/.test(e) || e === "900913" || e === "3857" : !1;
}
function Vi(e) {
  return e ? /^(epsg:|EPSG:)?4326$/.test(e) || /^(epsg-|EPSG-)?4326$/.test(e) || e === "4326" || e.toLowerCase() === "wgs84" : !1;
}
const ro = {
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
    return he(e, t, this.R);
  },
  /**
   * - 使用格林公式及球面积分直接计算球面多边形的面积
   * - calculate the area of a spherical polygon using the spherical excess method
   * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
   * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
   * @returns {number} - 面积
   */
  area(e) {
    return wn(e, this.R);
  }
}, sn = 85.05112877980659, oo = bn({}, ro, {
  R: 6378137,
  code: "EPSG:3857",
  projection: St,
  wrapLng: [-180, 180],
  wrapLat: [-sn, sn],
  area(e) {
    return wn(e, this.R);
  },
  planeArea(e) {
    return Hn(e, this.R);
  }
}), Qi = bn({}, oo, {
  code: "EPSG:900913"
});
class Zi {
  /**
   * Djikstra算法
   * @param edges - ["a", "b", 7]
   * @param source - "a" 起点
   */
  constructor(t, n) {
    J(this, "edges");
    J(this, "source");
    /**
     *dijstra——寻找源点至目标点的路径
     * @param target ：number|string：目标点
     * @returns [paths,length]——源点到目标点的路径和距离(总权重)
     */
    J(this, "dijkstra", (t) => {
      const n = /* @__PURE__ */ new Set(), r = {}, o = {}, i = {}, s = (l, h) => {
        let u = 1 / 0, f = null;
        for (let a of l)
          h[a] < u && (u = h[a], f = a);
        return f;
      };
      for (let l = 0; l < this.edges.length; l++) {
        let h = this.edges[l][0], u = this.edges[l][1], f = this.edges[l][2];
        n.add(h), n.add(u), o[h] = 1 / 0, o[u] = 1 / 0, i[h] === void 0 && (i[h] = {}), i[u] === void 0 && (i[u] = {}), i[h][u] = f, i[u][h] = f;
      }
      for (o[this.source] = 0; n.size; ) {
        let l = s(n, o), h = Object.keys(i[l]).map((u) => parseInt(u)).filter((u) => n.has(u));
        if (n.delete(l), l === t)
          break;
        for (let u of h) {
          let f = o[l] + i[l][u];
          f < o[u] && (o[u] = f, r[u] = l);
        }
      }
      {
        let l = t, h = [l], u = 0;
        for (; r[l] !== void 0; )
          h.unshift(r[l]), u += i[l][r[l]], l = r[l];
        return [h, u];
      }
    });
    this.edges = t, this.source = n;
  }
}
var io = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e[e.groupStretch = 4] = "groupStretch", e))(io || {}), so = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(so || {});
function Qt(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function ln(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function an(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function un(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function hn(e, t) {
  let n = 0.1;
  return e < t.mean - n || e > t.mean + n ? 0 : (e - t.min) / (t.max - t.min);
}
function de(e, t) {
  switch (e) {
    case 0:
      return t ? (n, r) => 1 - Qt(n, r) : Qt;
    case 1:
      return t ? (n, r) => 1 - ln(n, r) : ln;
    case 2:
      return t ? (n, r) => 1 - an(n, r) : an;
    case 3:
      return t ? (n, r) => 1 - un(n, r) : un;
    case 4:
      return t ? (n, r) => 1 - hn(n, r) : hn;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function Ye(e, t, n = Qt) {
  let r = n(t, e), o = Math.floor(r * 255);
  return `rgb(${o},${o},${o})`;
}
function lo(e, t, n = Qt) {
  let r = Math.floor(n(t[0], e[0]) * 255), o = Math.floor(n(t[1], e[1]) * 255), i = Math.floor(n(t[2], e[2]) * 255);
  return `rgb(${r},${o},${i})`;
}
function ts(e, t) {
  return (n, r) => lo(n, r, de(e, t));
}
function es(e, t) {
  return (n, r) => Ye(n, r, de(e, t));
}
const Gn = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"], ao = [
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
function uo(e, t, n, r = Gn, o = Qt) {
  let i = o(t, e), s = 0;
  if (n === void 0)
    s = Math.floor(i * r.length);
  else
    for (let l = 0; l < n.length; l++)
      if (i < n[l]) {
        s = l;
        break;
      }
  return r[s];
}
function ns(e, t, n = Gn) {
  return (r, o) => uo(r, o, t, n, de(e));
}
function ho(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function rs(e, t = ao) {
  return t[e];
}
function os(e, t = 0, n) {
  let r = new Array(256).fill(0), o = de(t);
  if (n === void 0) {
    n = {
      max: 0,
      min: 0,
      mean: 0
    };
    for (let i = 0; i < e.length; i++)
      for (let s = 0; s < e[0].length; s++)
        n.max = Math.max(n.max, e[i][s]), n.min = Math.min(n.min, e[i][s]), n.mean += e[i][s];
  }
  for (let i = 0; i < e.length; i++)
    for (let s = 0; s < e[0].length; s++) {
      let l = o(e[i][s], n), h = Math.floor(l * 255);
      r[h] += 1;
    }
  return r;
}
function is(e, t, n, r, o = Ye, i) {
  let s = n.w / t[0].length, l = n.h / t.length, h = e.getContext("2d");
  if (h === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let u = 0; u < t.length; u++)
    for (let f = 0; f < t[0].length; f++) {
      let a = t[u][f], c = o(r, a);
      h.fillStyle = c, h.fillRect(n.x + f * s, n.y + u * l, s, l);
    }
  if (i) {
    let [u, f, a, c] = i;
    h.strokeStyle = "red", h.lineWidth = 1, h.strokeRect(n.x + u * s, n.y + f * l, (a - u) * s, (c - f) * l);
  }
}
function ss(e, t, n, r = ho) {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let h = 0; h < t[0].length; h++) {
      let u = t[l][h], f = r(u);
      s.fillStyle = f, s.fillRect(n.x + h * o, n.y + l * i, o, i);
    }
}
function ls(e, t, n, r = "white") {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let h = 0; h < t[0].length; h++) {
      let u = t[l][h];
      fo(u, { x: n.x + h * o, y: n.y + l * i, w: o, h: i }, s, r);
    }
}
function fo(e, t, n, r = "white") {
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
function ae(e, t, n, r, o = Ye, i, s) {
  let l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = r.getSubGridObj(n.boundary).getBandStatistics(0), f = u.mean;
  s ? (s.max = Math.max(s.max, u.max), s.min = Math.min(s.min, u.min), s.mean = (s.mean + u.mean) / 2) : s = u, i || (i = f);
  let a = o(s, f);
  l.fillStyle = a, l.fillRect(t.x, t.y, t.w, t.h), requestAnimationFrame(() => {
    if (n.isDivided) {
      let c = [
        { x: t.x + t.w / 2, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x + t.w / 2, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 }
      ];
      ae(e, c[0], n.children[0], r, o, i, s), ae(e, c[1], n.children[1], r, o, i, s), ae(e, c[2], n.children[2], r, o, i, s), ae(e, c[3], n.children[3], r, o, i, s);
    }
  });
}
function as(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, o = !1, i) {
  let s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  i || (i = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((h, u) => h + u) / n.length
  }), s.fillStyle = r.backgroundColor, s.fillRect(t.x, t.y, t.w, t.h), s.fillStyle = r.color, s.lineWidth = 1;
  let l = 2;
  for (let h = 0; h < n.length; h++) {
    let u = t.x + t.w * h / n.length, f = t.y + t.h * (1 - (n[h] - i.min) / (i.max - i.min));
    s.beginPath(), s.arc(u, f, l, 0, 2 * Math.PI), s.fill();
  }
  s.strokeStyle = r.color, s.beginPath(), s.moveTo(t.x, t.y + t.h * (1 - (n[0] - i.min) / (i.max - i.min)));
  for (let h = 0; h < n.length; h++) {
    let u = t.x + t.w * h / n.length, f = t.y + t.h * (1 - (n[h] - i.min) / (i.max - i.min));
    s.lineTo(u, f);
  }
  if (s.stroke(), s.strokeStyle = "white", s.beginPath(), s.moveTo(t.x, t.y + 12), s.lineTo(t.x + t.w, t.y + 12), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h), s.lineTo(t.x + t.w, t.y + t.h), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h / 2), s.lineTo(t.x + t.w, t.y + t.h / 2), s.stroke(), s.fillText(i.max.toFixed(2), t.x, t.y + 12), s.fillText(i.min.toFixed(2), t.x, t.y + t.h), s.fillText(i.mean.toFixed(2), t.x, t.y + t.h / 2), o) {
    s.fillStyle = "green", s.font = "12px serif";
    for (let h = 0; h < n.length; h += 16) {
      let u = t.x + t.w * h / n.length, f = t.y + t.h * (1 - (n[h] - i.min) / (i.max - i.min));
      s.fillText(n[h].toFixed(2), u, f);
    }
  }
}
function us(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, o, i = !1) {
  let s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((h, u) => h + u) / n.length
  }), s.fillStyle = r.backgroundColor, s.fillRect(t.x, t.y, t.w, t.h), s.fillStyle = r.color;
  let l = t.w / n.length;
  for (let h = 0; h < n.length; h++) {
    let u = t.x + l * h, f = t.y + t.h * (1 - (n[h] - o.min) / (o.max - o.min));
    s.fillRect(u, f, l, t.h - f + t.y);
  }
  i && (s.fillStyle = "green", s.font = "12px serif", s.fillText(o.max.toFixed(2), t.x, t.y + 12), s.fillText(o.min.toFixed(2), t.x, t.y + t.h), s.fillText(o.mean.toFixed(2), t.x, t.y + t.h / 2)), s.strokeStyle = "white", s.beginPath(), s.moveTo(t.x, t.y + 12), s.lineTo(t.x + t.w, t.y + 12), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h), s.lineTo(t.x + t.w, t.y + t.h), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h / 2), s.lineTo(t.x + t.w, t.y + t.h / 2), s.stroke();
}
function hs(e, t, n, r = { color: "black", font: "12px serif" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.color, o.font = r.font, o.fillText(n, t.x, t.y);
}
function fs(e, t, n, r, o, i) {
  let s = r.w / t.width, l = r.h / t.height, h = e.getContext("2d");
  if (h === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = [], f = [];
  n.forEach((a) => {
    u.push(t.getBand(a)), f.push(t.getBandStatistics(a));
  });
  for (let a = 0; a < t.height; a++)
    for (let c = 0; c < t.width; c++) {
      let y = n.map((g) => u[g][a][c]), m = o(f, y);
      h.fillStyle = m, h.fillRect(r.x + c * s, r.y + a * l, s, l);
    }
  if (i) {
    let [a, c, y, m] = i;
    h.strokeStyle = "red", h.lineWidth = 1, h.strokeRect(r.x + a * s, r.y + c * l, (y - a) * s, (m - c) * l);
  }
  h.strokeStyle = "red", h.lineWidth = 1, h.beginPath(), h.moveTo(r.x + r.w / 2, r.y + r.h / 2 - 10), h.lineTo(r.x + r.w / 2, r.y + r.h / 2 + 10), h.stroke(), h.beginPath(), h.moveTo(r.x + r.w / 2 - 10, r.y + r.h / 2), h.lineTo(r.x + r.w / 2 + 10, r.y + r.h / 2), h.stroke();
}
function co(e, t, n, r = { color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.backgroundColor, o.fillRect(t.x, t.y, t.w, t.h), o.fillStyle = r.color, o.fillRect(t.x, t.y, t.w * n / 100, t.h), o.strokeStyle = "white", o.lineWidth = 1;
  for (let i = 0; i < 10; i++)
    o.beginPath(), o.moveTo(t.x + t.w * i / 10, t.y), o.lineTo(t.x + t.w * i / 10, t.y + t.h), o.stroke();
  t.h >= 20 && t.w >= 40 && (o.fillStyle = "white", o.font = "20px serif", o.fillText(n + "%", t.x + t.w / 2 - 20, t.y + t.h / 2 + 6));
}
function cs() {
  let e = document.createElement("canvas");
  e.width = 200, e.height = 20, document.body.appendChild(e);
  let t = { x: 0, y: 0, w: 200, h: 20 }, n = 0;
  setInterval(() => {
    co(e, t, n), n += 1, n > 100 && (n = 0);
  }, 100);
}
const fn = Math.pow(2, -52), ue = new Uint32Array(512), yo = St.unproject;
class Dt {
  static from(t, n = Fn, r = Bn) {
    const o = t.length, i = new Float64Array(o * 2);
    for (let s = 0; s < o; s++) {
      const l = t[s];
      i[2 * s] = n(l), i[2 * s + 1] = r(l);
    }
    return new Dt(i);
  }
  constructor(t) {
    const n = t.length >> 1;
    if (n > 0 && typeof t[0] != "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = t;
    const r = Math.max(2 * n - 5, 0);
    this._triangles = new Uint32Array(r * 3), this._halfedges = new Int32Array(r * 3), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update();
  }
  update() {
    const { coords: t, _hullPrev: n, _hullNext: r, _hullTri: o, _hullHash: i } = this, s = t.length >> 1;
    let l = 1 / 0, h = 1 / 0, u = -1 / 0, f = -1 / 0;
    for (let T = 0; T < s; T++) {
      const D = t[2 * T], B = t[2 * T + 1];
      D < l && (l = D), B < h && (h = B), D > u && (u = D), B > f && (f = B), this._ids[T] = T;
    }
    const a = (l + u) / 2, c = (h + f) / 2;
    let y, m, g;
    for (let T = 0, D = 1 / 0; T < s; T++) {
      const B = Ie(a, c, t[2 * T], t[2 * T + 1]);
      B < D && (y = T, D = B);
    }
    const v = t[2 * y], M = t[2 * y + 1];
    for (let T = 0, D = 1 / 0; T < s; T++) {
      if (T === y)
        continue;
      const B = Ie(v, M, t[2 * T], t[2 * T + 1]);
      B < D && B > 0 && (m = T, D = B);
    }
    let A = t[2 * m], L = t[2 * m + 1], G = 1 / 0;
    for (let T = 0; T < s; T++) {
      if (T === y || T === m)
        continue;
      const D = go(v, M, A, L, t[2 * T], t[2 * T + 1]);
      D < G && (g = T, G = D);
    }
    let I = t[2 * g], F = t[2 * g + 1];
    if (G === 1 / 0) {
      for (let B = 0; B < s; B++)
        this._dists[B] = t[2 * B] - t[0] || t[2 * B + 1] - t[1];
      Ot(this._ids, this._dists, 0, s - 1);
      const T = new Uint32Array(s);
      let D = 0;
      for (let B = 0, $ = -1 / 0; B < s; B++) {
        const z = this._ids[B], d = this._dists[z];
        d > $ && (T[D++] = z, $ = d);
      }
      this.hull = T.subarray(0, D), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if ($t(v, M, A, L, I, F) < 0) {
      const T = m, D = A, B = L;
      m = g, A = I, L = F, g = T, I = D, F = B;
    }
    const N = this.circumcenter(v, M, A, L, I, F);
    this._cx = N.x, this._cy = N.y;
    for (let T = 0; T < s; T++)
      this._dists[T] = Ie(t[2 * T], t[2 * T + 1], N.x, N.y);
    Ot(this._ids, this._dists, 0, s - 1), this._hullStart = y;
    let X = 3;
    r[y] = n[g] = m, r[m] = n[y] = g, r[g] = n[m] = y, o[y] = 0, o[m] = 1, o[g] = 2, i.fill(-1), i[this._hashKey(v, M)] = y, i[this._hashKey(A, L)] = m, i[this._hashKey(I, F)] = g, this.trianglesLen = 0, this._addTriangle(y, m, g, -1, -1, -1);
    for (let T = 0, D, B; T < this._ids.length; T++) {
      const $ = this._ids[T], z = t[2 * $], d = t[2 * $ + 1];
      if (T > 0 && Math.abs(z - D) <= fn && Math.abs(d - B) <= fn || (D = z, B = d, $ === y || $ === m || $ === g))
        continue;
      let w = 0;
      for (let p = 0, S = this._hashKey(z, d); p < this._hashSize && (w = i[(S + p) % this._hashSize], !(w !== -1 && w !== r[w])); p++)
        ;
      w = n[w];
      let x = w, b;
      for (; b = r[x], $t(z, d, t[2 * x], t[2 * x + 1], t[2 * b], t[2 * b + 1]) >= 0; )
        if (x = b, x === w) {
          x = -1;
          break;
        }
      if (x === -1)
        continue;
      let P = this._addTriangle(x, $, r[x], -1, -1, o[x]);
      o[$] = this._legalize(P + 2), o[x] = P, X++;
      let k = r[x];
      for (; b = r[k], $t(z, d, t[2 * k], t[2 * k + 1], t[2 * b], t[2 * b + 1]) < 0; )
        P = this._addTriangle(k, $, b, o[$], -1, o[k]), o[$] = this._legalize(P + 2), r[k] = k, X--, k = b;
      if (x === w)
        for (; b = n[x], $t(z, d, t[2 * b], t[2 * b + 1], t[2 * x], t[2 * x + 1]) < 0; )
          P = this._addTriangle(b, $, x, -1, o[x], o[b]), this._legalize(P + 2), o[b] = P, r[x] = x, X--, x = b;
      this._hullStart = n[$] = x, r[x] = n[k] = $, r[$] = k, i[this._hashKey(z, d)] = $, i[this._hashKey(t[2 * x], t[2 * x + 1])] = x;
    }
    this.hull = new Uint32Array(X);
    for (let T = 0, D = this._hullStart; T < X; T++)
      this.hull[T] = D, D = r[D];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(mo(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: o } = this;
    let i = 0, s = 0;
    for (; ; ) {
      const l = r[t], h = t - t % 3;
      if (s = h + (t + 2) % 3, l === -1) {
        if (i === 0)
          break;
        t = ue[--i];
        continue;
      }
      const u = l - l % 3, f = h + (t + 1) % 3, a = u + (l + 2) % 3, c = n[s], y = n[t], m = n[f], g = n[a];
      if (wo(
        o[2 * c],
        o[2 * c + 1],
        o[2 * y],
        o[2 * y + 1],
        o[2 * m],
        o[2 * m + 1],
        o[2 * g],
        o[2 * g + 1]
      )) {
        n[t] = g, n[l] = c;
        const M = r[a];
        if (M === -1) {
          let L = this._hullStart;
          do {
            if (this._hullTri[L] === a) {
              this._hullTri[L] = t;
              break;
            }
            L = this._hullPrev[L];
          } while (L !== this._hullStart);
        }
        this._link(t, M), this._link(l, r[s]), this._link(s, a);
        const A = u + (l + 1) % 3;
        i < ue.length && (ue[i++] = A);
      } else {
        if (i === 0)
          break;
        t = ue[--i];
      }
    }
    return s;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, o, i, s) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = n, this._triangles[l + 2] = r, this._link(l, o), this._link(l + 1, i), this._link(l + 2, s), this.trianglesLen += 3, l;
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
    const o = n[0] - t[0], i = n[1] - t[1], s = r[0] - t[0], l = r[1] - t[1], h = o * o + i * i, u = s * s + l * l, f = 0.5 / (o * l - i * s), a = (l * h - i * u) * f, c = (o * u - s * h) * f;
    return a * a + c * c;
  }
  circumcenter(t, n, r, o, i, s) {
    const l = r - t, h = o - n, u = i - t, f = s - n, a = l * l + h * h, c = u * u + f * f, y = 0.5 / (l * f - h * u), m = t + (f * a - h * c) * y, g = n + (l * c - u * a) * y;
    return { x: m, y: g };
  }
}
function mo(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Ie(e, t, n, r) {
  const o = e - n, i = t - r;
  return o * o + i * i;
}
function wo(e, t, n, r, o, i, s, l) {
  const h = e - s, u = t - l, f = n - s, a = r - l, c = o - s, y = i - l, m = h * h + u * u, g = f * f + a * a, v = c * c + y * y;
  return h * (a * v - g * y) - u * (f * v - g * c) + m * (f * y - a * c) < 0;
}
function go(e, t, n, r, o, i) {
  const s = n - e, l = r - t, h = o - e, u = i - t, f = s * s + l * l, a = h * h + u * u, c = 0.5 / (s * u - l * h), y = (u * f - l * a) * c, m = (s * a - h * f) * c;
  return y * y + m * m;
}
function Ot(e, t, n, r) {
  if (r - n <= 20)
    for (let o = n + 1; o <= r; o++) {
      const i = e[o], s = t[i];
      let l = o - 1;
      for (; l >= n && t[e[l]] > s; )
        e[l + 1] = e[l--];
      e[l + 1] = i;
    }
  else {
    const o = n + r >> 1;
    let i = n + 1, s = r;
    Wt(e, o, i), t[e[n]] > t[e[r]] && Wt(e, n, r), t[e[i]] > t[e[r]] && Wt(e, i, r), t[e[n]] > t[e[i]] && Wt(e, n, i);
    const l = e[i], h = t[l];
    for (; ; ) {
      do
        i++;
      while (t[e[i]] < h);
      do
        s--;
      while (t[e[s]] > h);
      if (s < i)
        break;
      Wt(e, i, s);
    }
    e[n + 1] = e[s], e[s] = l, r - i + 1 >= s - n ? (Ot(e, t, i, r), Ot(e, t, n, s - 1)) : (Ot(e, t, n, s - 1), Ot(e, t, i, r));
  }
}
function Wt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Fn(e) {
  return e[0];
}
function Bn(e) {
  return e[1];
}
function xo(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function po(e, t) {
  return xo(t).map((n) => e.triangles[n]);
}
function Mo(e) {
  return Math.floor(e / 3);
}
function bo(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], o = t[0] * t[0] + t[1] * t[1], i = n[0] * n[0] + n[1] * n[1], s = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / s * (r * (t[1] - n[1]) + o * (n[1] - e[1]) + i * (e[1] - t[1])),
    1 / s * (r * (n[0] - t[0]) + o * (e[0] - n[0]) + i * (t[0] - e[0]))
  ];
}
function vo(e, t, n, r = yo) {
  const o = po(t, n).map((s) => e[s]);
  let i = bo(o[0], o[1], o[2]);
  return r && (i = r(i)), i;
}
function jn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function Ao(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const o = jn(r);
    r = e.halfedges[o];
  } while (r !== -1 && r !== t);
  return n;
}
function _e(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.triangles.length; o++) {
    const i = t.triangles[jn(o)];
    if (!r.has(i)) {
      r.add(i);
      const h = Ao(t, o).map(Mo).map((u) => vo(e, t, u));
      n(i, h);
    }
  }
}
class ys {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Fn, r = Bn) {
    J(this, "delaunay");
    // Delaunay triangulation
    J(this, "points");
    t instanceof Dt ? (this.delaunay = t, this.points = t.getPoints()) : (this.points = t, this.delaunay = Dt.from(t, n, r));
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points: t, delaunay: n } = this, r = /* @__PURE__ */ new Map();
    return _e(t, n, (o, i) => r.set(o, i)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return _e(n, r, (i, s) => {
      this.isInsideMBR(s, t) || (console.log(s), s = Kr(s, t)), o.set(i, s);
    }), o;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return _e(n, r, (i, s) => {
      this.isInsideMBR(s, t) && o.set(i, s);
    }), o;
  }
  isInsideMBR(t, n) {
    const [r, o, i, s] = n;
    for (let l = 0; l < t.length; l++) {
      const [h, u] = t[l];
      if (h < r || h > i || u < o || u > s)
        return !1;
    }
    return !0;
  }
}
function ds(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, o] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, o);
  return n;
}
function ms(e) {
  const t = e.map((i, s) => [...i.toXY(), s]);
  let n = t[0];
  for (let i = 1; i < t.length; i++)
    t[i][1] < n[1] && (n = t[i]);
  t.sort((i, s) => {
    let l = rn([n[0], n[1]], [i[0], i[1]]), h = rn([n[0], n[1]], [s[0], s[1]]);
    if (l < h)
      return -1;
    if (l > h)
      return 1;
    {
      let u = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2), f = Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2);
      return u < f ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let i = 2; i < t.length; i++) {
    for (; r.length > 1 && In([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[i][0], t[i][1]]) <= 0; )
      r.pop();
    r.push(t[i]);
  }
  let o = [];
  for (let i = 0; i < r.length; i++) {
    let s = r[i][2];
    o.push(e[s]);
  }
  return o;
}
function ws(e, t) {
  let n = e.map((s) => s.toXY());
  return Dt.from(n).getTriangleIndices().filter((s) => {
    let l = [n[s[0]], n[s[1]], n[s[2]]];
    return Dt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
export {
  Ln as Circle,
  ao as CountourColorList,
  lt as D2R,
  Dt as Delaunator,
  Zi as Dijkstra,
  oo as EPSG3857,
  Qi as EPSG900913,
  Wn as EPSLN,
  ro as Earth,
  yi as Evented,
  Qn as FFT,
  We as FFT2,
  er as FFTImag,
  ri as FFTImag2,
  nr as FFTReal,
  oi as FFTReal2,
  rr as FFTShift,
  Ht as Geometry,
  Nt as GeometryCollection,
  _n as Grid,
  Zn as IFFT,
  ni as IFFT2,
  tr as IFFTReal,
  ei as IFFTReal2,
  di as K_means,
  bt as LineString,
  vi as MBR2Plane,
  Kt as MultiLineString,
  xt as MultiPoint,
  Vt as MultiPolygon,
  Di as Perlin,
  ut as Point,
  Li as PointInsidePolygon,
  Hr as PointOutsideMBR,
  Et as Polygon,
  Ut as QuadTree,
  Eo as R2D,
  Wi as Sin3D,
  St as SphericalMercator,
  ai as UUID,
  ys as Voronoi,
  $n as acos,
  qo as add,
  Bi as adjust_lon,
  ws as alphaComplex,
  ii as applyMixins,
  dn as areaFactors,
  _o as areaToArea,
  zn as asin,
  Xn as atan2,
  zo as bearing,
  ss as binDrawGrid2d,
  qi as binarization,
  ho as binaryColorBand,
  ui as calculateArrayShape,
  Ci as calculateMBR,
  ee as cartesian,
  jo as cartesianAdd,
  Bo as cartesianAddInPlace,
  ge as cartesianAngle,
  we as cartesianCross,
  me as cartesianDot,
  Jn as cartesianNormalize,
  Oo as cartesianNormalizeInPlace,
  Un as cartesianScale,
  In as ccw,
  ji as ccwRobust,
  on as collectionFromFeature,
  no as collectionFromGeometry,
  so as colorListType,
  ds as complateMap,
  hi as concatEL2DArray,
  Zo as conj,
  Pi as containsMBR,
  ms as convexHull,
  Ne as cos,
  Yt as cross,
  Kr as cutPolygonByMBR,
  Xi as dampedSin3D,
  Ni as deMaxMin,
  Co as degToDMS,
  qe as degreesToRadians,
  Ko as destination,
  Lo as dmsToDeg,
  Yo as dot,
  ls as drawCountour,
  is as drawGrid2d,
  co as drawProgress,
  ae as drawQTree2d,
  as as drawSample,
  us as drawSample2,
  hs as drawText,
  fs as drawTrueColorGrid2d,
  wt as earthRadius,
  li as emptyObj,
  Go as equals,
  Si as equalsMBR,
  bn as extend,
  cn as factors,
  yn as factors2,
  ti as fastFFT2,
  gi as feature,
  sr as fillIndexArray,
  ir as flattenArray,
  Wo as formatNum,
  eo as fromFeatureObj,
  Cn as fromGeometryObj,
  rn as getAngle,
  ki as getMBRWithAntimeridian,
  Ve as getPointsMBR,
  Re as halfPi,
  Fo as haversin,
  he as haversine,
  os as hist,
  Yi as inCircle,
  Oi as inCircleRobust,
  Jo as intermediatePoint,
  Do as interpolate,
  Xo as interpolate2,
  nn as intersection,
  Vr as intersectionPolygon,
  Br as intersectsMBR,
  Ki as isEPSG3857,
  Vi as isEPSG4326,
  $o as isFloat,
  or as isPotentialGeoObject,
  Gi as iterPolygonEdge,
  To as lengthToRadians,
  Or as mbrToPolygon,
  jr as mbrToRectangle,
  Mi as merge,
  Cr as mergeArcs,
  Fr as mergeMBR,
  bi as mergePointMBR,
  pi as mesh,
  Ir as meshArcs,
  Rn as metersTo,
  Uo as midpoint,
  xi as neighbors,
  No as normalize,
  ye as object,
  Ei as overlapsMBR,
  mn as pi,
  Ai as plane2MBR,
  Vo as planeIntersection,
  Hn as planePolygonArea,
  Se as pointInEdge,
  Ge as pointInMBR,
  Ti as pointInMBRWithAntimeridian,
  Fi as prePointInPolygon,
  ns as pseudoColorBandFactory,
  ko as radiansToDegrees,
  So as radiansToLength,
  lr as randomIndexArray,
  _i as rectangleToMBR,
  kr as reverse,
  ci as round,
  Qo as sample,
  Ro as scale,
  Zt as sign,
  Ye as simpleColorBand,
  es as simpleColorBandFactory,
  rs as simplePseudoColorBand,
  Le as sin,
  Ho as sphereIntersection,
  te as spherical,
  wn as sphericalArea,
  Ii as splitMBRWithAntimeridian,
  Be as sqrt,
  Dn as squareMetersTo,
  io as stretchType,
  fi as subColumnInEL2DArray,
  Ri as subdivide2QTree,
  cs as testProgress,
  si as throttle,
  Hi as toLineString,
  qn as toMeters,
  Ji as toMultiPoint,
  Ui as toPoint,
  Nn as toSquareMeters,
  mi as topology,
  Tr as transform,
  vo as triangleCenter,
  lo as trueColorBand,
  ts as trueColorBandFactory,
  Io as unitToUnit,
  wi as untransform,
  $i as worleyNoise,
  zi as zebraNoise
};
