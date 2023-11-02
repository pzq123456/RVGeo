var ur = Object.defineProperty;
var fr = (e, t, n) => t in e ? ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (fr(e, typeof t != "symbol" ? t + "" : t, n), n);
const mt = 11102230246251565e-32, P = 134217729, bn = (3 + 8 * mt) * mt;
function ct(e, t, n, r, s) {
  let i, o, l, h, u = t[0], a = r[0], f = 0, y = 0;
  a > u == a > -u ? (i = u, u = t[++f]) : (i = a, a = r[++y]);
  let b = 0;
  if (f < e && y < n)
    for (a > u == a > -u ? (o = u + i, l = i - (o - u), u = t[++f]) : (o = a + i, l = i - (o - a), a = r[++y]), i = o, l !== 0 && (s[b++] = l); f < e && y < n; )
      a > u == a > -u ? (o = i + u, h = o - i, l = i - (o - h) + (u - h), u = t[++f]) : (o = i + a, h = o - i, l = i - (o - h) + (a - h), a = r[++y]), i = o, l !== 0 && (s[b++] = l);
  for (; f < e; )
    o = i + u, h = o - i, l = i - (o - h) + (u - h), u = t[++f], i = o, l !== 0 && (s[b++] = l);
  for (; y < n; )
    o = i + a, h = o - i, l = i - (o - h) + (a - h), a = r[++y], i = o, l !== 0 && (s[b++] = l);
  return (i !== 0 || b === 0) && (s[b++] = i), b;
}
function bt(e, t, n, r, s, i, o, l) {
  return ct(ct(e, t, n, r, o), o, s, i, l);
}
function _(e, t, n, r) {
  let s, i, o, l, h, u, a, f, y, b, m;
  a = P * n, b = a - (a - n), m = n - b;
  let w = t[0];
  s = w * n, a = P * w, f = a - (a - w), y = w - f, o = y * m - (s - f * b - y * b - f * m);
  let T = 0;
  o !== 0 && (r[T++] = o);
  for (let M = 1; M < e; M++)
    w = t[M], l = w * n, a = P * w, f = a - (a - w), y = w - f, h = y * m - (l - f * b - y * b - f * m), i = s + h, u = i - s, o = s - (i - u) + (h - u), o !== 0 && (r[T++] = o), s = l + i, o = i - (s - l), o !== 0 && (r[T++] = o);
  return (s !== 0 || T === 0) && (r[T++] = s), T;
}
function An(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function Y(e) {
  return new Float64Array(e);
}
const hr = (3 + 16 * mt) * mt, dr = (2 + 12 * mt) * mt, mr = (9 + 64 * mt) * mt * mt, qt = Y(4), nn = Y(8), rn = Y(12), sn = Y(16), pt = Y(4);
function pr(e, t, n, r, s, i, o) {
  let l, h, u, a, f, y, b, m, w, T, M, F, k, J, tt, nt, ot, rt;
  const C = e - s, z = n - s, q = t - i, v = r - i;
  J = C * v, y = P * C, b = y - (y - C), m = C - b, y = P * v, w = y - (y - v), T = v - w, tt = m * T - (J - b * w - m * w - b * T), nt = q * z, y = P * q, b = y - (y - q), m = q - b, y = P * z, w = y - (y - z), T = z - w, ot = m * T - (nt - b * w - m * w - b * T), M = tt - ot, f = tt - M, qt[0] = tt - (M + f) + (f - ot), F = J + M, f = F - J, k = J - (F - f) + (M - f), M = k - nt, f = k - M, qt[1] = k - (M + f) + (f - nt), rt = F + M, f = rt - F, qt[2] = F - (rt - f) + (M - f), qt[3] = rt;
  let et = An(4, qt), c = dr * o;
  if (et >= c || -et >= c || (f = e - C, l = e - (C + f) + (f - s), f = n - z, u = n - (z + f) + (f - s), f = t - q, h = t - (q + f) + (f - i), f = r - v, a = r - (v + f) + (f - i), l === 0 && h === 0 && u === 0 && a === 0) || (c = mr * o + bn * Math.abs(et), et += C * a + v * l - (q * u + z * h), et >= c || -et >= c))
    return et;
  J = l * v, y = P * l, b = y - (y - l), m = l - b, y = P * v, w = y - (y - v), T = v - w, tt = m * T - (J - b * w - m * w - b * T), nt = h * z, y = P * h, b = y - (y - h), m = h - b, y = P * z, w = y - (y - z), T = z - w, ot = m * T - (nt - b * w - m * w - b * T), M = tt - ot, f = tt - M, pt[0] = tt - (M + f) + (f - ot), F = J + M, f = F - J, k = J - (F - f) + (M - f), M = k - nt, f = k - M, pt[1] = k - (M + f) + (f - nt), rt = F + M, f = rt - F, pt[2] = F - (rt - f) + (M - f), pt[3] = rt;
  const d = ct(4, qt, 4, pt, nn);
  J = C * a, y = P * C, b = y - (y - C), m = C - b, y = P * a, w = y - (y - a), T = a - w, tt = m * T - (J - b * w - m * w - b * T), nt = q * u, y = P * q, b = y - (y - q), m = q - b, y = P * u, w = y - (y - u), T = u - w, ot = m * T - (nt - b * w - m * w - b * T), M = tt - ot, f = tt - M, pt[0] = tt - (M + f) + (f - ot), F = J + M, f = F - J, k = J - (F - f) + (M - f), M = k - nt, f = k - M, pt[1] = k - (M + f) + (f - nt), rt = F + M, f = rt - F, pt[2] = F - (rt - f) + (M - f), pt[3] = rt;
  const p = ct(d, nn, 4, pt, rn);
  J = l * a, y = P * l, b = y - (y - l), m = l - b, y = P * a, w = y - (y - a), T = a - w, tt = m * T - (J - b * w - m * w - b * T), nt = h * u, y = P * h, b = y - (y - h), m = h - b, y = P * u, w = y - (y - u), T = u - w, ot = m * T - (nt - b * w - m * w - b * T), M = tt - ot, f = tt - M, pt[0] = tt - (M + f) + (f - ot), F = J + M, f = F - J, k = J - (F - f) + (M - f), M = k - nt, f = k - M, pt[1] = k - (M + f) + (f - nt), rt = F + M, f = rt - F, pt[2] = F - (rt - f) + (M - f), pt[3] = rt;
  const A = ct(p, rn, 4, pt, sn);
  return sn[A - 1];
}
function Kt(e, t, n, r, s, i) {
  const o = (t - i) * (n - s), l = (e - s) * (r - i), h = o - l, u = Math.abs(o + l);
  return Math.abs(h) >= hr * u ? h : -pr(e, t, n, r, s, i, u);
}
const yr = (10 + 96 * mt) * mt, gr = (4 + 48 * mt) * mt, wr = (44 + 576 * mt) * mt * mt, Ct = Y(4), Lt = Y(4), Bt = Y(4), _t = Y(4), xt = Y(4), Rt = Y(4), yt = Y(4), gt = Y(4), be = Y(8), Ae = Y(8), Se = Y(8), Ee = Y(8), _e = Y(8), xe = Y(8), ne = Y(8), re = Y(8), se = Y(8), It = Y(4), jt = Y(4), Ft = Y(4), L = Y(8), j = Y(16), st = Y(16), it = Y(16), K = Y(32), Nt = Y(32), lt = Y(48), wt = Y(64);
let Ht = Y(1152), Re = Y(1152);
function at(e, t, n) {
  e = ct(e, Ht, t, n, Re);
  const r = Ht;
  return Ht = Re, Re = r, e;
}
function br(e, t, n, r, s, i, o, l, h) {
  let u, a, f, y, b, m, w, T, M, F, k, J, tt, nt, ot, rt, C, z, q, v, et, c, d, p, A, E, R, g, x, B, O, N, D, U, I;
  const H = e - o, X = n - o, W = s - o, G = t - l, $ = r - l, V = i - l;
  O = X * V, d = P * X, p = d - (d - X), A = X - p, d = P * V, E = d - (d - V), R = V - E, N = A * R - (O - p * E - A * E - p * R), D = W * $, d = P * W, p = d - (d - W), A = W - p, d = P * $, E = d - (d - $), R = $ - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, Ct[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, Ct[1] = B - (g + c) + (c - D), I = x + g, c = I - x, Ct[2] = x - (I - c) + (g - c), Ct[3] = I, O = W * G, d = P * W, p = d - (d - W), A = W - p, d = P * G, E = d - (d - G), R = G - E, N = A * R - (O - p * E - A * E - p * R), D = H * V, d = P * H, p = d - (d - H), A = H - p, d = P * V, E = d - (d - V), R = V - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, Lt[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, Lt[1] = B - (g + c) + (c - D), I = x + g, c = I - x, Lt[2] = x - (I - c) + (g - c), Lt[3] = I, O = H * $, d = P * H, p = d - (d - H), A = H - p, d = P * $, E = d - (d - $), R = $ - E, N = A * R - (O - p * E - A * E - p * R), D = X * G, d = P * X, p = d - (d - X), A = X - p, d = P * G, E = d - (d - G), R = G - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, Bt[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, Bt[1] = B - (g + c) + (c - D), I = x + g, c = I - x, Bt[2] = x - (I - c) + (g - c), Bt[3] = I, u = ct(
    ct(
      ct(
        _(_(4, Ct, H, L), L, H, j),
        j,
        _(_(4, Ct, G, L), L, G, st),
        st,
        K
      ),
      K,
      ct(
        _(_(4, Lt, X, L), L, X, j),
        j,
        _(_(4, Lt, $, L), L, $, st),
        st,
        Nt
      ),
      Nt,
      wt
    ),
    wt,
    ct(
      _(_(4, Bt, W, L), L, W, j),
      j,
      _(_(4, Bt, V, L), L, V, st),
      st,
      K
    ),
    K,
    Ht
  );
  let Pt = An(u, Ht), Yt = gr * h;
  if (Pt >= Yt || -Pt >= Yt || (c = e - H, a = e - (H + c) + (c - o), c = t - G, b = t - (G + c) + (c - l), c = n - X, f = n - (X + c) + (c - o), c = r - $, m = r - ($ + c) + (c - l), c = s - W, y = s - (W + c) + (c - o), c = i - V, w = i - (V + c) + (c - l), a === 0 && f === 0 && y === 0 && b === 0 && m === 0 && w === 0) || (Yt = wr * h + bn * Math.abs(Pt), Pt += (H * H + G * G) * (X * w + V * f - ($ * y + W * m)) + 2 * (H * a + G * b) * (X * V - $ * W) + ((X * X + $ * $) * (W * b + G * y - (V * a + H * w)) + 2 * (X * f + $ * m) * (W * G - V * H)) + ((W * W + V * V) * (H * m + $ * a - (G * f + X * b)) + 2 * (W * y + V * w) * (H * $ - G * X)), Pt >= Yt || -Pt >= Yt))
    return Pt;
  if ((f !== 0 || m !== 0 || y !== 0 || w !== 0) && (O = H * H, d = P * H, p = d - (d - H), A = H - p, N = A * A - (O - p * p - (p + p) * A), D = G * G, d = P * G, p = d - (d - G), A = G - p, U = A * A - (D - p * p - (p + p) * A), g = N + U, c = g - N, _t[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, _t[1] = B - (g - c) + (D - c), I = x + g, c = I - x, _t[2] = x - (I - c) + (g - c), _t[3] = I), (y !== 0 || w !== 0 || a !== 0 || b !== 0) && (O = X * X, d = P * X, p = d - (d - X), A = X - p, N = A * A - (O - p * p - (p + p) * A), D = $ * $, d = P * $, p = d - (d - $), A = $ - p, U = A * A - (D - p * p - (p + p) * A), g = N + U, c = g - N, xt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, xt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, xt[2] = x - (I - c) + (g - c), xt[3] = I), (a !== 0 || b !== 0 || f !== 0 || m !== 0) && (O = W * W, d = P * W, p = d - (d - W), A = W - p, N = A * A - (O - p * p - (p + p) * A), D = V * V, d = P * V, p = d - (d - V), A = V - p, U = A * A - (D - p * p - (p + p) * A), g = N + U, c = g - N, Rt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, Rt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, Rt[2] = x - (I - c) + (g - c), Rt[3] = I), a !== 0 && (T = _(4, Ct, a, be), u = at(u, bt(
    _(T, be, 2 * H, j),
    j,
    _(_(4, Rt, a, L), L, $, st),
    st,
    _(_(4, xt, a, L), L, -V, it),
    it,
    K,
    lt
  ), lt)), b !== 0 && (M = _(4, Ct, b, Ae), u = at(u, bt(
    _(M, Ae, 2 * G, j),
    j,
    _(_(4, xt, b, L), L, W, st),
    st,
    _(_(4, Rt, b, L), L, -X, it),
    it,
    K,
    lt
  ), lt)), f !== 0 && (F = _(4, Lt, f, Se), u = at(u, bt(
    _(F, Se, 2 * X, j),
    j,
    _(_(4, _t, f, L), L, V, st),
    st,
    _(_(4, Rt, f, L), L, -G, it),
    it,
    K,
    lt
  ), lt)), m !== 0 && (k = _(4, Lt, m, Ee), u = at(u, bt(
    _(k, Ee, 2 * $, j),
    j,
    _(_(4, Rt, m, L), L, H, st),
    st,
    _(_(4, _t, m, L), L, -W, it),
    it,
    K,
    lt
  ), lt)), y !== 0 && (J = _(4, Bt, y, _e), u = at(u, bt(
    _(J, _e, 2 * W, j),
    j,
    _(_(4, xt, y, L), L, G, st),
    st,
    _(_(4, _t, y, L), L, -$, it),
    it,
    K,
    lt
  ), lt)), w !== 0 && (tt = _(4, Bt, w, xe), u = at(u, bt(
    _(tt, xe, 2 * V, j),
    j,
    _(_(4, _t, w, L), L, X, st),
    st,
    _(_(4, xt, w, L), L, -H, it),
    it,
    K,
    lt
  ), lt)), a !== 0 || b !== 0) {
    if (f !== 0 || m !== 0 || y !== 0 || w !== 0 ? (O = f * V, d = P * f, p = d - (d - f), A = f - p, d = P * V, E = d - (d - V), R = V - E, N = A * R - (O - p * E - A * E - p * R), D = X * w, d = P * X, p = d - (d - X), A = X - p, d = P * w, E = d - (d - w), R = w - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, yt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, yt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, yt[2] = x - (I - c) + (g - c), yt[3] = I, O = y * -$, d = P * y, p = d - (d - y), A = y - p, d = P * -$, E = d - (d - -$), R = -$ - E, N = A * R - (O - p * E - A * E - p * R), D = W * -m, d = P * W, p = d - (d - W), A = W - p, d = P * -m, E = d - (d - -m), R = -m - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, gt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, gt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, gt[2] = x - (I - c) + (g - c), gt[3] = I, ot = ct(4, yt, 4, gt, re), O = f * w, d = P * f, p = d - (d - f), A = f - p, d = P * w, E = d - (d - w), R = w - E, N = A * R - (O - p * E - A * E - p * R), D = y * m, d = P * y, p = d - (d - y), A = y - p, d = P * m, E = d - (d - m), R = m - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, jt[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, jt[1] = B - (g + c) + (c - D), I = x + g, c = I - x, jt[2] = x - (I - c) + (g - c), jt[3] = I, z = 4) : (re[0] = 0, ot = 1, jt[0] = 0, z = 1), a !== 0) {
      const ft = _(ot, re, a, it);
      u = at(u, ct(
        _(T, be, a, j),
        j,
        _(ft, it, 2 * H, K),
        K,
        lt
      ), lt);
      const ht = _(z, jt, a, L);
      u = at(u, bt(
        _(ht, L, 2 * H, j),
        j,
        _(ht, L, a, st),
        st,
        _(ft, it, a, K),
        K,
        Nt,
        wt
      ), wt), m !== 0 && (u = at(u, _(_(4, Rt, a, L), L, m, j), j)), w !== 0 && (u = at(u, _(_(4, xt, -a, L), L, w, j), j));
    }
    if (b !== 0) {
      const ft = _(ot, re, b, it);
      u = at(u, ct(
        _(M, Ae, b, j),
        j,
        _(ft, it, 2 * G, K),
        K,
        lt
      ), lt);
      const ht = _(z, jt, b, L);
      u = at(u, bt(
        _(ht, L, 2 * G, j),
        j,
        _(ht, L, b, st),
        st,
        _(ft, it, b, K),
        K,
        Nt,
        wt
      ), wt);
    }
  }
  if (f !== 0 || m !== 0) {
    if (y !== 0 || w !== 0 || a !== 0 || b !== 0 ? (O = y * G, d = P * y, p = d - (d - y), A = y - p, d = P * G, E = d - (d - G), R = G - E, N = A * R - (O - p * E - A * E - p * R), D = W * b, d = P * W, p = d - (d - W), A = W - p, d = P * b, E = d - (d - b), R = b - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, yt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, yt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, yt[2] = x - (I - c) + (g - c), yt[3] = I, v = -V, et = -w, O = a * v, d = P * a, p = d - (d - a), A = a - p, d = P * v, E = d - (d - v), R = v - E, N = A * R - (O - p * E - A * E - p * R), D = H * et, d = P * H, p = d - (d - H), A = H - p, d = P * et, E = d - (d - et), R = et - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, gt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, gt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, gt[2] = x - (I - c) + (g - c), gt[3] = I, rt = ct(4, yt, 4, gt, se), O = y * b, d = P * y, p = d - (d - y), A = y - p, d = P * b, E = d - (d - b), R = b - E, N = A * R - (O - p * E - A * E - p * R), D = a * w, d = P * a, p = d - (d - a), A = a - p, d = P * w, E = d - (d - w), R = w - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, Ft[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, Ft[1] = B - (g + c) + (c - D), I = x + g, c = I - x, Ft[2] = x - (I - c) + (g - c), Ft[3] = I, q = 4) : (se[0] = 0, rt = 1, Ft[0] = 0, q = 1), f !== 0) {
      const ft = _(rt, se, f, it);
      u = at(u, ct(
        _(F, Se, f, j),
        j,
        _(ft, it, 2 * X, K),
        K,
        lt
      ), lt);
      const ht = _(q, Ft, f, L);
      u = at(u, bt(
        _(ht, L, 2 * X, j),
        j,
        _(ht, L, f, st),
        st,
        _(ft, it, f, K),
        K,
        Nt,
        wt
      ), wt), w !== 0 && (u = at(u, _(_(4, _t, f, L), L, w, j), j)), b !== 0 && (u = at(u, _(_(4, Rt, -f, L), L, b, j), j));
    }
    if (m !== 0) {
      const ft = _(rt, se, m, it);
      u = at(u, ct(
        _(k, Ee, m, j),
        j,
        _(ft, it, 2 * $, K),
        K,
        lt
      ), lt);
      const ht = _(q, Ft, m, L);
      u = at(u, bt(
        _(ht, L, 2 * $, j),
        j,
        _(ht, L, m, st),
        st,
        _(ft, it, m, K),
        K,
        Nt,
        wt
      ), wt);
    }
  }
  if (y !== 0 || w !== 0) {
    if (a !== 0 || b !== 0 || f !== 0 || m !== 0 ? (O = a * $, d = P * a, p = d - (d - a), A = a - p, d = P * $, E = d - (d - $), R = $ - E, N = A * R - (O - p * E - A * E - p * R), D = H * m, d = P * H, p = d - (d - H), A = H - p, d = P * m, E = d - (d - m), R = m - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, yt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, yt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, yt[2] = x - (I - c) + (g - c), yt[3] = I, v = -G, et = -b, O = f * v, d = P * f, p = d - (d - f), A = f - p, d = P * v, E = d - (d - v), R = v - E, N = A * R - (O - p * E - A * E - p * R), D = X * et, d = P * X, p = d - (d - X), A = X - p, d = P * et, E = d - (d - et), R = et - E, U = A * R - (D - p * E - A * E - p * R), g = N + U, c = g - N, gt[0] = N - (g - c) + (U - c), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B + D, c = g - B, gt[1] = B - (g - c) + (D - c), I = x + g, c = I - x, gt[2] = x - (I - c) + (g - c), gt[3] = I, nt = ct(4, yt, 4, gt, ne), O = a * m, d = P * a, p = d - (d - a), A = a - p, d = P * m, E = d - (d - m), R = m - E, N = A * R - (O - p * E - A * E - p * R), D = f * b, d = P * f, p = d - (d - f), A = f - p, d = P * b, E = d - (d - b), R = b - E, U = A * R - (D - p * E - A * E - p * R), g = N - U, c = N - g, It[0] = N - (g + c) + (c - U), x = O + g, c = x - O, B = O - (x - c) + (g - c), g = B - D, c = B - g, It[1] = B - (g + c) + (c - D), I = x + g, c = I - x, It[2] = x - (I - c) + (g - c), It[3] = I, C = 4) : (ne[0] = 0, nt = 1, It[0] = 0, C = 1), y !== 0) {
      const ft = _(nt, ne, y, it);
      u = at(u, ct(
        _(J, _e, y, j),
        j,
        _(ft, it, 2 * W, K),
        K,
        lt
      ), lt);
      const ht = _(C, It, y, L);
      u = at(u, bt(
        _(ht, L, 2 * W, j),
        j,
        _(ht, L, y, st),
        st,
        _(ft, it, y, K),
        K,
        Nt,
        wt
      ), wt), b !== 0 && (u = at(u, _(_(4, xt, y, L), L, b, j), j)), m !== 0 && (u = at(u, _(_(4, _t, -y, L), L, m, j), j));
    }
    if (w !== 0) {
      const ft = _(nt, ne, w, it);
      u = at(u, ct(
        _(tt, xe, w, j),
        j,
        _(ft, it, 2 * V, K),
        K,
        lt
      ), lt);
      const ht = _(C, It, w, L);
      u = at(u, bt(
        _(ht, L, 2 * V, j),
        j,
        _(ht, L, w, st),
        st,
        _(ft, it, w, K),
        K,
        Nt,
        wt
      ), wt);
    }
  }
  return Ht[u - 1];
}
function Ar(e, t, n, r, s, i, o, l) {
  const h = e - o, u = n - o, a = s - o, f = t - l, y = r - l, b = i - l, m = u * b, w = a * y, T = h * h + f * f, M = a * f, F = h * b, k = u * u + y * y, J = h * y, tt = u * f, nt = a * a + b * b, ot = T * (m - w) + k * (M - F) + nt * (J - tt), rt = (Math.abs(m) + Math.abs(w)) * T + (Math.abs(M) + Math.abs(F)) * k + (Math.abs(J) + Math.abs(tt)) * nt, C = yr * rt;
  return ot > C || -ot > C ? ot : br(e, t, n, r, s, i, o, l, rt);
}
function Ne(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
function Sn(e) {
  return Math.abs(e) <= 180 ? e : e - $t(e) * 360;
}
function $t(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function qe(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], s = e[1], i = t[0], o = t[1], l = n[0], h = n[1], u = (i - r) * (h - s) - (o - s) * (l - r);
  return u = $t(u), u;
}
function Qt(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), s = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return s = s * 180 / Math.PI, s < 0 && (s += 360), s;
}
function Sr(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let s = e[0], i = e[1], o = t[0], l = t[1], h = n[0], u = n[1], a = Kt(s, i, o, l, h, u);
  return r && (a = -a), a = $t(a), a;
}
function Er(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], i = e[1], o = t[0], l = t[1], h = n[0], u = n[1], a = r[0], f = r[1], y = Ar(s, i, o, l, h, u, a, f);
  return y = $t(y), y;
}
function _r(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], i = e[1], o = t[0], l = t[1], h = n[0], u = n[1], a = r[0], f = r[1];
  const y = s - a, b = i - f, m = o - a, w = l - f, T = h - a, M = u - f, F = y * y + b * b, k = m * m + w * w, J = T * T + M * M;
  let tt = y * (w * J - k * M) - b * (m * J - k * T) + F * (m * M - w * T);
  return $t(tt);
}
function xr(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function En(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...En(r)) : t.push(r);
  }
  return t;
}
function _n(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    Array.isArray(s) ? n.push(_n(s, t)) : n.push(t[s]);
  }
  return n;
}
function Rr(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function Mr(e, t) {
  Array.isArray(t) || (t = [t]), t.forEach((r) => {
    if (r < 0 || r >= e[0].length)
      throw new Error("indexArray is illegal!");
  });
  let n = [];
  return e.forEach((r) => {
    let s = [];
    Array.isArray(t) ? t.forEach((i) => {
      s.push(r[i]);
    }) : s.push(r[t]), n.push(s);
  }), n;
}
function Or(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjust_lon: Sn,
  calculateArrayShape: xr,
  ccw: qe,
  ccwRobust: Sr,
  concatEL2DArray: Rr,
  fillIndexArray: _n,
  flattenArray: En,
  getAngle: Qt,
  inCircle: _r,
  inCircleRobust: Er,
  randomIndexArray: Or,
  round: Ne,
  sign: $t,
  subColumnInEL2DArray: Mr
}, Symbol.toStringTag, { value: "Module" })), xn = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = xn.a, ze = {
  centimeters: dt * 100,
  centimetres: dt * 100,
  degrees: 360 / (2 * Math.PI),
  feet: dt * 3.28084,
  inches: dt * 39.37,
  kilometers: dt / 1e3,
  kilometres: dt / 1e3,
  meters: dt,
  metres: dt,
  miles: dt / 1609.344,
  millimeters: dt * 1e3,
  millimetres: dt * 1e3,
  nauticalmiles: dt / 1852,
  radians: 1,
  yards: dt * 1.0936
}, ve = {
  centimeters: 1 * 100,
  centimetres: 1 * 100,
  degrees: 360 / (2 * Math.PI) * 1 / dt,
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
  radians: 1 / dt,
  yards: 1 * 1.0936
}, He = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  nauticalmiles: 29155334959812285e-23,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function Xe(e, t = "kilometers") {
  const n = ze[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Pr(e, t = "kilometers") {
  const n = ze[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Xt(e) {
  return e % 360 * Math.PI / 180;
}
function Tr(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function Rn(e, t) {
  const n = ve[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function he(e, t) {
  const n = ve[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Cr(e, t, n) {
  return he(Rn(e, t), n);
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: He,
  degreesToRadians: Xt,
  earthRadius: dt,
  factors: ze,
  factors2: ve,
  lengthToRadians: Pr,
  metersTo: he,
  radiansToDegrees: Tr,
  radiansToLength: Xe,
  toMeters: Rn,
  unitTounit: Cr
}, Symbol.toStringTag, { value: "Module" }));
function St(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, s = dt, i = Array.isArray(e) ? e : e.to2DArray(), o = Sn(i[0]);
  let l = Xt(o), h = Xt(i[1]);
  return l = Xe(l, "meters"), h = s * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * h)), l > r && (l = r), l < -r && (l = -r), h > r && (h = r), h < -r && (h = -r), l = Ne(he(l, t), n), h = Ne(he(h, t), n), [l, h];
}
function Ut(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function Lr(e, t = "meters", n = 6) {
  if (e[0] instanceof At) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      r.push(St(e[s], t, n));
    return r;
  } else {
    let r = [];
    for (let s = 0; s < e.length; s++)
      r.push(St(e[s], t, n));
    return r;
  }
}
function Br(e, t = "meters", n = 6) {
  let r = [], s = St([e[0], e[1]], t, n), i = St([e[2], e[3]], t, n);
  return r = [s[0], s[1], i[0], i[1]], r;
}
function Nr(e, t = "meters", n = 6) {
  let r = [], s = Ut([e[0], e[1]]), i = Ut([e[2], e[3]]);
  return r = [s[0], s[1], i[0], i[1]], r;
}
const qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: Br,
  convertToMercator: St,
  convertToMercators: Lr,
  convertToWgs84: Ut,
  plane2MBR: Nr
}, Symbol.toStringTag, { value: "Module" }));
function Mn(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function Dr(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function On(e) {
  let t = e[0], n = e[1], r = e[2], s = e[3];
  return [
    [t, n],
    [t, s],
    [r, s],
    [r, n],
    [t, n]
  ];
}
function Ir(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i][0], l = e[i][1];
    t = Math.min(t, o), n = Math.min(n, l), r = Math.max(r, o), s = Math.max(s, l);
  }
  return [t, n, r, s];
}
function Pn(e, t) {
  let n = t[0], r = t[1], s = t[2], i = t[3], o = e[0], l = e[1];
  return o >= n && o <= s && l >= r && l <= i;
}
class Tn {
  // 注意这里的coordinates与 GeoJSON 中的意义不同
  /**
   * - 构造函数
   * - constructor
   * @warning 该类为抽象类，不能直接实例化。在构造函数中会自动调用 calculateMBR() 方法计算最小外包矩形。内部数据变化时需要手动调用该方法更新最小外包矩形。
   * @param type 类型
   * @param args 属性信息
   */
  constructor(t, n, ...r) {
    Z(this, "type");
    // 类型 将其声明为公共属性 以便调用
    Z(this, "properties");
    // 属性信息
    Z(this, "MBR");
    // 最小外包矩形 (Minimum Bounding Rectangle)
    Z(this, "coordinates");
    this.type = t, this.properties = r, this.coordinates = n, this.MBR = this.calculateMBR();
  }
  // 计算最小外包矩形 抽象函数需要每一个具体的类具体实现
  /**
   * - （不包含组成当前图形的底层图形的属性信息）获取（当前）图形的属性信息数组
   * - get properties array of geometry
   * @returns 返回属性信息数组
   */
  getPropertyArray() {
    return this.properties;
  }
  /**
   * - 获取图形的外包矩形
   * @returns 返回外包矩形 [minLon, minLat, maxLon, maxLat]
   */
  getMBR() {
    return this.MBR;
  }
}
class At {
  // 属性信息
  constructor(t, n, r = 0, ...s) {
    Z(this, "lon");
    // 经度
    Z(this, "lat");
    // 维度
    Z(this, "asl");
    // 海拔高度 需要参考大地水准面
    Z(this, "type", "Point");
    // 类型 对应 GeoJSON 格式
    Z(this, "properties");
    this.lon = t, this.lat = n, this.asl = r, this.properties = s;
  }
  /**
   * - 将点坐标转换为墨卡托坐标 EPSG:4326 -> EPSG:3857
   * - transform point to Mercator coordinate EPSG:4326 -> EPSG:3857
   * @returns {[number, number]} 返回墨卡托坐标 [x, y] 默认米为单位
   */
  toXY(t = "meters") {
    return St(this, t);
  }
  /**
   * - 将点转换为 GeoJSON 格式
   * - transform point to GeoJSON format
   * @returns 返回 GeoJSON 格式的点
   */
  toGeoJSON() {
    return {
      type: "Point",
      coordinates: [this.lon, this.lat],
      properties: {
        ...this.properties
        // 将属性信息转换为 GeoJSON 格式
      }
    };
  }
  /**
   * - 将点坐标转换为二维数组: `(lon, lat)`
   * - transform point to 2D array: `(lon, lat)`
   * @returns 返回二维数组
   */
  to2DArray() {
    return [this.lon, this.lat];
  }
  /**
  * - 将点坐标转换为三维数组: `(lon, lat, asl)`
  * - transform point to 3D array: `(lon, lat, asl)`
   * @returns 返回三维数组
   */
  to3DArray() {
    return [this.lon, this.lat, this.asl];
  }
  /**
   * - 将点坐标转换为字符串
   * - transform point to string
   * @returns 返回字符串
   */
  toString() {
    return `Point(${this.lon}, ${this.lat}, ${this.asl})`;
  }
  /**
   * - 获取点的属性信息数组
   * - get properties array of point
   * @returns 返回属性信息数组
   */
  getPropertyArray() {
    return this.properties;
  }
  static isPoint(t) {
    return t.type === "Point";
  }
}
class We extends Tn {
  /**
   * - 构造函数
   * @param points 点坐标数组
   * @param args 属性信息
   */
  constructor(t, ...n) {
    if (t[0] instanceof Array) {
      t = t;
      let r = [];
      for (let s = 0; s < t.length; s++)
        r.push(new At(t[s][0], t[s][1]));
      t = r;
    }
    super("MultiPoint", t, ...n);
  }
  /**
   * 获取内部点的属性并以数组形式返回
   */
  getCorrinatesPropertyArray() {
    let t = [];
    for (let n = 0; n < this.coordinates.length; n++) {
      let r = this.coordinates[n].getPropertyArray();
      t.push(r);
    }
    return t;
  }
  /**
   * - (仅包含坐标不包含属性)以数列形式返回内部点列表
   * - return array which wrappers all of the points in it
   */
  toArray() {
    let t = [];
    for (let n = 0; n < this.coordinates.length; n++) {
      let r = this.coordinates[n].to2DArray();
      t.push(r);
    }
    return t;
  }
  /**
   * - 获得 墨卡托 投影下的平面坐标
   * - get Mercator coordinate
   * @returns 返回墨卡托坐标数组 [[x1, y1], [x2, y2], ...]
   */
  toXYArray() {
    let t = [];
    for (let n = 0; n < this.coordinates.length; n++) {
      let r = this.coordinates[n].toXY();
      t.push(r);
    }
    return t;
  }
  /**
   * - 将多点转换为 GeoJSON 格式
   * - transform MultiPoint to GeoJSON format
   * @returns 返回 GeoJSON 格式的多点
   */
  toGeoJSON() {
    return {
      type: "MultiPoint",
      coordinates: this.toArray(),
      properties: {
        ...this.properties
      }
    };
  }
  /**
   * - 计算最小外包矩形
   * - calculate MBR
   * @returns 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
   */
  calculateMBR() {
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
    for (let i = 0; i < this.coordinates.length; i++) {
      let o = this.coordinates[i].to2DArray();
      t = Math.min(t, o[0]), n = Math.min(n, o[1]), r = Math.max(r, o[0]), s = Math.max(s, o[1]);
    }
    return [t, n, r, s];
  }
  /**
   * - 计算多点的重心
   * - calculate centroid of MultiPoint
   * @param values - 可指定权重数组(可选) 会首先归一化权重数组
   * @returns {Point} 返回重心坐标
   * @see https://en.wikipedia.org/wiki/Centroid
   */
  calculateCentroid(t) {
    if (t) {
      let n = 0;
      for (let l = 0; l < t.length; l++)
        n += t[l];
      for (let l = 0; l < t.length; l++)
        t[l] /= n;
      let r = 0, s = 0;
      for (let l = 0; l < this.coordinates.length; l++) {
        let h = this.coordinates[l].to2DArray();
        r += h[0] * t[l], s += h[1] * t[l];
      }
      let i = r, o = s;
      return new At(i, o);
    } else {
      let n = 0, r = 0;
      for (let o = 0; o < this.coordinates.length; o++) {
        let l = this.coordinates[o].to2DArray();
        n += l[0], r += l[1];
      }
      let s = n / this.coordinates.length, i = r / this.coordinates.length;
      return new At(s, i);
    }
  }
  /**
   * - 删除指定索引的点
   * - delete point by index
   * @param index 索引
   */
  deletePoint(t) {
    this.coordinates.splice(t, 1), this.MBR = this.calculateMBR();
  }
  /**
   * - 向尾部添加点
   * - add point
   * @param point 点 
   */
  addPoint(t) {
    let n = At.isPoint(t) ? t : new At(t[0], t[1]);
    this.coordinates.push(n), this.MBR = this.calculateMBR();
  }
  // 判断是否为多点类型
  static isMultiPoint(t) {
    return t.type === "MultiPoint";
  }
}
class $e extends We {
  /**
   * - 构造函数
   * @param points 点坐标数组
   * @param args 属性信息
   */
  constructor(t, ...n) {
    super(t, ...n), this.type = "LineString";
  }
  static isLineString(t) {
    return t.type === "LineString";
  }
  /**
   * 按照逆时针方向排序点
   */
  sortPoints() {
    let n = this.calculateCentroid().toXY();
    this.coordinates.sort((r, s) => {
      let i = Qt(n, r.toXY()), o = Qt(n, s.toXY());
      return i < o ? -1 : i > o ? 1 : 0;
    });
  }
}
class Cn extends Tn {
  constructor(t, ...n) {
    super("MultiLineString", t, ...n);
  }
  /**
   * - 计算线集合的最小外包矩形
   * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
   */
  calculateMBR() {
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
    for (let i = 0; i < this.coordinates.length; i++) {
      let o = this.coordinates[i].getMBR();
      t = Math.min(t, o[0]), n = Math.min(n, o[1]), r = Math.max(r, o[2]), s = Math.max(s, o[3]);
    }
    return [t, n, r, s];
  }
  /**
   * - 将多线转换为数组形式
   * - transform MultiLineString to array
   * @returns {any[]} 返回数组形式
   */
  toArray() {
    let t = [];
    for (let n = 0; n < this.coordinates.length; n++) {
      let r = this.coordinates[n].toArray();
      t.push(r);
    }
    return t;
  }
  /**
   * - 将多线转换为 GeoJSON 格式
   * - transform MultiLineString to GeoJSON format
   * @returns 
   */
  toGeoJSON() {
    return {
      type: "MultiLineString",
      coordinates: this.toArray(),
      properties: {
        ...this.properties
      }
    };
  }
  static isMultiLineString(t) {
    return t.type === "MultiLineString";
  }
}
class jr extends Cn {
  constructor(t, ...n) {
    super(t, ...n), this.type = "Polygon";
  }
  static isPolygon(t) {
    return t.type === "Polygon";
  }
}
class Fr {
  /**
   * 构造函数
   * @param x - 圆心 x 坐标 
   * @param y - 圆心 y 坐标
   * @param r - 半径
   */
  constructor(t, n, r) {
    Z(this, "x");
    Z(this, "y");
    Z(this, "r");
    Z(this, "rSquared");
    this.x = t, this.y = n, this.r = r, this.rSquared = this.r * this.r;
  }
  /**
   * 判断点是否在圆内
   * @param point - 点坐标
   * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
   * @returns {boolean} - true if the point is inside the circle
   */
  contains(t, n = 0) {
    let r = t[0], s = t[1];
    return Math.pow(r - this.x, 2) + Math.pow(s - this.y, 2) - this.rSquared <= n;
  }
  /**
   * （仅平面下保证有效）判断圆是否与 MBR 相交
   * @param range - MBR
   * @returns {boolean} - true if the circle intersects the MBR
   */
  intersects(t) {
    let n = Mn(t), r = Math.abs(n.x - this.x), s = Math.abs(n.y - this.y), i = this.r, o = n.w / 2, l = n.h / 2, h = Math.pow(r - o, 2) + Math.pow(s - l, 2);
    return r > i + o || s > i + l ? !1 : r <= o || s <= l ? !0 : h <= this.rSquared;
  }
}
const zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: Fr,
  LineString: $e,
  MultiLineString: Cn,
  MultiPoint: We,
  Point: At,
  Polygon: jr,
  getPointsMBR: Ir,
  mbrToPolygon: On,
  mbrToRectangle: Mn,
  pointInMBR: Pn,
  rectangleToMBR: Dr
}, Symbol.toStringTag, { value: "Module" })), on = xn.a;
function Ur(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), s = Array.isArray(t) ? t : t.to2DArray();
  r.map((a, f) => {
    r[f] = Xt(a);
  }), s.map((a, f) => {
    s[f] = Xt(a);
  });
  const i = s[1] - r[1], o = s[0] - r[0], l = r[1], h = s[1], u = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(i / 2), 2) + Math.pow(Math.sin(o / 2), 2) * Math.cos(l) * Math.cos(h)
    )
  );
  return Xe(u, n);
}
function kr(e, t = "kilometers") {
  let n = $e.isLineString(e) ? e.toXYArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((i, o) => {
    n[o] = i.toXY();
  })), n = n;
  let r = 0, s = n.length - 1;
  for (let i = 0; i < n.length; i++)
    r += (n[s][0] + n[i][0]) * (n[s][1] - n[i][1]), s = i;
  return r = r * He[t] / 2, Math.abs(r);
}
function qr(e, t = "kilometers") {
  let n = $e.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((o, l) => {
    n[l] = o.to2DArray();
  })), n = n;
  let r = 0, s = n.length, i = [];
  for (let o = 0; o < s; o++) {
    i.push([]);
    for (let l = 0; l < 2; l++) {
      let h = Xt(n[o][l]);
      i[o].push(h);
    }
  }
  for (let o = 0; o < s; o++) {
    let l = (o + 1) % s, h = (o + 2) % s;
    r += (i[o][0] - i[h][0]) * Math.sin(i[l][1]);
  }
  return r = r * on * on / 2, r = r * He[t], Math.abs(r);
}
const vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: kr,
  SpherePolygonArea: qr,
  haversine: Ur
}, Symbol.toStringTag, { value: "Module" }));
function le(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function zr(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function De(e, t, n, r, s = St, i = Ut, o = !1) {
  s && (e = s(e), t = s(t), n = s(n), r = s(r));
  let l = [t[0] - e[0], t[1] - e[1]], h = [r[0] - n[0], r[1] - n[1]], u = le(l, h);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let a = le([n[0] - e[0], n[1] - e[1]], h) / u, f = le([n[0] - e[0], n[1] - e[1]], l) / u;
  return !o && (a < 0 || a > 1 || f < 0 || f > 1) ? (console.log("交点不在两条线段上"), null) : i ? i([e[0] + l[0] * a, e[1] + l[1] * a]) : [e[0] + l[0] * a, e[1] + l[1] * a];
}
function Je(e, t, n = !1) {
  if (n) {
    let r = St(e), s = t[0], i = t[1], o = t[2], l = t[3];
    return [s, i] = St([s, i]), [o, l] = St([o, l]), r[0] < s || r[0] > o || r[1] < i || r[1] > l;
  } else {
    let r = t[0], s = t[1], i = t[2], o = t[3];
    return e[0] < r || e[0] > i || e[1] < s || e[1] > o;
  }
}
function Ln(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function Bn(e, t) {
  return Nn(e, On(t));
}
function Nn(e, t) {
  let n = e[e.length - 1], r, s, i, o = t;
  for (let l in e) {
    r = e[l];
    let h = o;
    o = [], s = h[h.length - 1];
    for (let u in h) {
      if (i = h[u], ae(i, n, r)) {
        if (!ae(s, n, r)) {
          let a = De(
            s,
            i,
            n,
            r,
            St,
            Ut,
            !0
          );
          o.push(a);
        }
        o.push(i);
      } else if (ae(s, n, r)) {
        let a = De(
          s,
          i,
          n,
          r,
          St,
          Ut,
          !0
        );
        o.push(a);
      }
      s = i;
    }
    n = r;
  }
  return o;
}
function vr(e, t) {
  let n = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++)
    t[r][1] > e[1] != t[s][1] > e[1] && e[0] < (t[s][0] - t[r][0]) * (e[1] - t[r][1]) / (t[s][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Hr(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    o[0] < t && (t = o[0]), o[0] > r && (r = o[0]), o[1] < n && (n = o[1]), o[1] > s && (s = o[1]);
  }
  return [t, n, r, s];
}
function Xr(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function Wr(e, t) {
  return (e - 1 + t) % t;
}
function ae(e, t, n) {
  return qe(t, n, e) > 0;
}
const Hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: Ln,
  PointInsidePolygon: vr,
  PointOutsideMBR: Je,
  calculateMBR: Hr,
  cross: le,
  cutPolygonByMBR: Bn,
  dot: zr,
  intersection: De,
  intersectionPolygon: Nn,
  iterPolygonEdge: Xr,
  pointInEdge: ae,
  prePointInPolygon: Wr
}, Symbol.toStringTag, { value: "Module" })), ln = Math.pow(2, -52), ie = new Uint32Array(512);
class kt {
  static from(t, n = Dn, r = In) {
    const s = t.length, i = new Float64Array(s * 2);
    for (let o = 0; o < s; o++) {
      const l = t[o];
      i[2 * o] = n(l), i[2 * o + 1] = r(l);
    }
    return new kt(i);
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
    const { coords: t, _hullPrev: n, _hullNext: r, _hullTri: s, _hullHash: i } = this, o = t.length >> 1;
    let l = 1 / 0, h = 1 / 0, u = -1 / 0, a = -1 / 0;
    for (let C = 0; C < o; C++) {
      const z = t[2 * C], q = t[2 * C + 1];
      z < l && (l = z), q < h && (h = q), z > u && (u = z), q > a && (a = q), this._ids[C] = C;
    }
    const f = (l + u) / 2, y = (h + a) / 2;
    let b, m, w;
    for (let C = 0, z = 1 / 0; C < o; C++) {
      const q = Me(f, y, t[2 * C], t[2 * C + 1]);
      q < z && (b = C, z = q);
    }
    const T = t[2 * b], M = t[2 * b + 1];
    for (let C = 0, z = 1 / 0; C < o; C++) {
      if (C === b)
        continue;
      const q = Me(T, M, t[2 * C], t[2 * C + 1]);
      q < z && q > 0 && (m = C, z = q);
    }
    let F = t[2 * m], k = t[2 * m + 1], J = 1 / 0;
    for (let C = 0; C < o; C++) {
      if (C === b || C === m)
        continue;
      const z = Yr(T, M, F, k, t[2 * C], t[2 * C + 1]);
      z < J && (w = C, J = z);
    }
    let tt = t[2 * w], nt = t[2 * w + 1];
    if (J === 1 / 0) {
      for (let q = 0; q < o; q++)
        this._dists[q] = t[2 * q] - t[0] || t[2 * q + 1] - t[1];
      zt(this._ids, this._dists, 0, o - 1);
      const C = new Uint32Array(o);
      let z = 0;
      for (let q = 0, v = -1 / 0; q < o; q++) {
        const et = this._ids[q], c = this._dists[et];
        c > v && (C[z++] = et, v = c);
      }
      this.hull = C.subarray(0, z), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Kt(T, M, F, k, tt, nt) < 0) {
      const C = m, z = F, q = k;
      m = w, F = tt, k = nt, w = C, tt = z, nt = q;
    }
    const ot = this.circumcenter(T, M, F, k, tt, nt);
    this._cx = ot.x, this._cy = ot.y;
    for (let C = 0; C < o; C++)
      this._dists[C] = Me(t[2 * C], t[2 * C + 1], ot.x, ot.y);
    zt(this._ids, this._dists, 0, o - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[w] = m, r[m] = n[b] = w, r[w] = n[m] = b, s[b] = 0, s[m] = 1, s[w] = 2, i.fill(-1), i[this._hashKey(T, M)] = b, i[this._hashKey(F, k)] = m, i[this._hashKey(tt, nt)] = w, this.trianglesLen = 0, this._addTriangle(b, m, w, -1, -1, -1);
    for (let C = 0, z, q; C < this._ids.length; C++) {
      const v = this._ids[C], et = t[2 * v], c = t[2 * v + 1];
      if (C > 0 && Math.abs(et - z) <= ln && Math.abs(c - q) <= ln || (z = et, q = c, v === b || v === m || v === w))
        continue;
      let d = 0;
      for (let g = 0, x = this._hashKey(et, c); g < this._hashSize && (d = i[(x + g) % this._hashSize], !(d !== -1 && d !== r[d])); g++)
        ;
      d = n[d];
      let p = d, A;
      for (; A = r[p], Kt(et, c, t[2 * p], t[2 * p + 1], t[2 * A], t[2 * A + 1]) >= 0; )
        if (p = A, p === d) {
          p = -1;
          break;
        }
      if (p === -1)
        continue;
      let E = this._addTriangle(p, v, r[p], -1, -1, s[p]);
      s[v] = this._legalize(E + 2), s[p] = E, rt++;
      let R = r[p];
      for (; A = r[R], Kt(et, c, t[2 * R], t[2 * R + 1], t[2 * A], t[2 * A + 1]) < 0; )
        E = this._addTriangle(R, v, A, s[v], -1, s[R]), s[v] = this._legalize(E + 2), r[R] = R, rt--, R = A;
      if (p === d)
        for (; A = n[p], Kt(et, c, t[2 * A], t[2 * A + 1], t[2 * p], t[2 * p + 1]) < 0; )
          E = this._addTriangle(A, v, p, -1, s[p], s[A]), this._legalize(E + 2), s[A] = E, r[p] = p, rt--, p = A;
      this._hullStart = n[v] = p, r[p] = n[R] = v, r[v] = R, i[this._hashKey(et, c)] = v, i[this._hashKey(t[2 * p], t[2 * p + 1])] = p;
    }
    this.hull = new Uint32Array(rt);
    for (let C = 0, z = this._hullStart; C < rt; C++)
      this.hull[C] = z, z = r[z];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor($r(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: s } = this;
    let i = 0, o = 0;
    for (; ; ) {
      const l = r[t], h = t - t % 3;
      if (o = h + (t + 2) % 3, l === -1) {
        if (i === 0)
          break;
        t = ie[--i];
        continue;
      }
      const u = l - l % 3, a = h + (t + 1) % 3, f = u + (l + 2) % 3, y = n[o], b = n[t], m = n[a], w = n[f];
      if (Jr(
        s[2 * y],
        s[2 * y + 1],
        s[2 * b],
        s[2 * b + 1],
        s[2 * m],
        s[2 * m + 1],
        s[2 * w],
        s[2 * w + 1]
      )) {
        n[t] = w, n[l] = y;
        const M = r[f];
        if (M === -1) {
          let k = this._hullStart;
          do {
            if (this._hullTri[k] === f) {
              this._hullTri[k] = t;
              break;
            }
            k = this._hullPrev[k];
          } while (k !== this._hullStart);
        }
        this._link(t, M), this._link(l, r[o]), this._link(o, f);
        const F = u + (l + 1) % 3;
        i < ie.length && (ie[i++] = F);
      } else {
        if (i === 0)
          break;
        t = ie[--i];
      }
    }
    return o;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, s, i, o) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = n, this._triangles[l + 2] = r, this._link(l, s), this._link(l + 1, i), this._link(l + 2, o), this.trianglesLen += 3, l;
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
    const s = n[0] - t[0], i = n[1] - t[1], o = r[0] - t[0], l = r[1] - t[1], h = s * s + i * i, u = o * o + l * l, a = 0.5 / (s * l - i * o), f = (l * h - i * u) * a, y = (s * u - o * h) * a;
    return f * f + y * y;
  }
  circumcenter(t, n, r, s, i, o) {
    const l = r - t, h = s - n, u = i - t, a = o - n, f = l * l + h * h, y = u * u + a * a, b = 0.5 / (l * a - h * u), m = t + (a * f - h * y) * b, w = n + (l * y - u * f) * b;
    return { x: m, y: w };
  }
}
function $r(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Me(e, t, n, r) {
  const s = e - n, i = t - r;
  return s * s + i * i;
}
function Jr(e, t, n, r, s, i, o, l) {
  const h = e - o, u = t - l, a = n - o, f = r - l, y = s - o, b = i - l, m = h * h + u * u, w = a * a + f * f, T = y * y + b * b;
  return h * (f * T - w * b) - u * (a * T - w * y) + m * (a * b - f * y) < 0;
}
function Yr(e, t, n, r, s, i) {
  const o = n - e, l = r - t, h = s - e, u = i - t, a = o * o + l * l, f = h * h + u * u, y = 0.5 / (o * u - l * h), b = (u * a - l * f) * y, m = (o * f - h * a) * y;
  return b * b + m * m;
}
function zt(e, t, n, r) {
  if (r - n <= 20)
    for (let s = n + 1; s <= r; s++) {
      const i = e[s], o = t[i];
      let l = s - 1;
      for (; l >= n && t[e[l]] > o; )
        e[l + 1] = e[l--];
      e[l + 1] = i;
    }
  else {
    const s = n + r >> 1;
    let i = n + 1, o = r;
    Gt(e, s, i), t[e[n]] > t[e[r]] && Gt(e, n, r), t[e[i]] > t[e[r]] && Gt(e, i, r), t[e[n]] > t[e[i]] && Gt(e, n, i);
    const l = e[i], h = t[l];
    for (; ; ) {
      do
        i++;
      while (t[e[i]] < h);
      do
        o--;
      while (t[e[o]] > h);
      if (o < i)
        break;
      Gt(e, i, o);
    }
    e[n + 1] = e[o], e[o] = l, r - i + 1 >= o - n ? (zt(e, t, i, r), zt(e, t, n, o - 1)) : (zt(e, t, n, o - 1), zt(e, t, i, r));
  }
}
function Gt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Dn(e) {
  return e[0];
}
function In(e) {
  return e[1];
}
function Gr(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function Vr(e, t) {
  return Gr(t).map((n) => e.triangles[n]);
}
function Kr(e) {
  return Math.floor(e / 3);
}
function Qr(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], s = t[0] * t[0] + t[1] * t[1], i = n[0] * n[0] + n[1] * n[1], o = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / o * (r * (t[1] - n[1]) + s * (n[1] - e[1]) + i * (e[1] - t[1])),
    1 / o * (r * (n[0] - t[0]) + s * (e[0] - n[0]) + i * (t[0] - e[0]))
  ];
}
function jn(e, t, n, r = Ut) {
  const s = Vr(t, n).map((o) => e[o]);
  let i = Qr(s[0], s[1], s[2]);
  return r && (i = r(i)), i;
}
function Fn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function Zr(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const s = Fn(r);
    r = e.halfedges[s];
  } while (r !== -1 && r !== t);
  return n;
}
function Oe(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let s = 0; s < t.triangles.length; s++) {
    const i = t.triangles[Fn(s)];
    if (!r.has(i)) {
      r.add(i);
      const h = Zr(t, s).map(Kr).map((u) => jn(e, t, u));
      n(i, h);
    }
  }
}
class ts {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Dn, r = In) {
    Z(this, "delaunay");
    // Delaunay triangulation
    Z(this, "points");
    t instanceof kt ? (this.delaunay = t, this.points = t.getPoints()) : (this.points = t, this.delaunay = kt.from(t, n, r));
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points: t, delaunay: n } = this, r = /* @__PURE__ */ new Map();
    return Oe(t, n, (s, i) => r.set(s, i)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return Oe(n, r, (i, o) => {
      this.isInsideMBR(o, t) || (o = Bn(o, t)), s.set(i, o);
    }), s;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return Oe(n, r, (i, o) => {
      this.isInsideMBR(o, t) && s.set(i, o);
    }), s;
  }
  isInsideMBR(t, n) {
    const [r, s, i, o] = n;
    for (let l = 0; l < t.length; l++) {
      const [h, u] = t[l];
      if (h < r || h > i || u < s || u > o)
        return !1;
    }
    return !0;
  }
}
function es(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, s] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, s);
  return n;
}
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: kt,
  Voronoi: ts,
  complateMap: es,
  triangleCenter: jn
}, Symbol.toStringTag, { value: "Module" }));
function ns(e) {
  const t = e.map((i, o) => [...i.toXY(), o]);
  let n = t[0];
  for (let i = 1; i < t.length; i++)
    t[i][1] < n[1] && (n = t[i]);
  t.sort((i, o) => {
    let l = Qt([n[0], n[1]], [i[0], i[1]]), h = Qt([n[0], n[1]], [o[0], o[1]]);
    if (l < h)
      return -1;
    if (l > h)
      return 1;
    {
      let u = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2), a = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2);
      return u < a ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let i = 2; i < t.length; i++) {
    for (; r.length > 1 && qe([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[i][0], t[i][1]]) <= 0; )
      r.pop();
    r.push(t[i]);
  }
  let s = [];
  for (let i = 0; i < r.length; i++) {
    let o = r[i][2];
    s.push(e[o]);
  }
  return s;
}
function rs(e, t) {
  let n = e.map((o) => o.toXY());
  return kt.from(n).getTriangleIndices().filter((o) => {
    let l = [n[o[0]], n[o[1]], n[o[2]]];
    return kt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
const Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: rs,
  convexHull: ns
}, Symbol.toStringTag, { value: "Module" }));
function Un(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ss } = Object.prototype, { getPrototypeOf: Ye } = Object, me = ((e) => (t) => {
  const n = ss.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ot = (e) => (e = e.toLowerCase(), (t) => me(t) === e), pe = (e) => (t) => typeof t === e, { isArray: Jt } = Array, Zt = pe("undefined");
function is(e) {
  return e !== null && !Zt(e) && e.constructor !== null && !Zt(e.constructor) && Et(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const kn = Ot("ArrayBuffer");
function os(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && kn(e.buffer), t;
}
const ls = pe("string"), Et = pe("function"), qn = pe("number"), ye = (e) => e !== null && typeof e == "object", as = (e) => e === !0 || e === !1, ce = (e) => {
  if (me(e) !== "object")
    return !1;
  const t = Ye(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, cs = Ot("Date"), us = Ot("File"), fs = Ot("Blob"), hs = Ot("FileList"), ds = (e) => ye(e) && Et(e.pipe), ms = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Et(e.append) && ((t = me(e)) === "formdata" || // detect form-data instance
  t === "object" && Et(e.toString) && e.toString() === "[object FormData]"));
}, ps = Ot("URLSearchParams"), ys = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Jt(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function zn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const vn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Hn = (e) => !Zt(e) && e !== vn;
function Ie() {
  const { caseless: e } = Hn(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && zn(t, s) || s;
    ce(t[i]) && ce(r) ? t[i] = Ie(t[i], r) : ce(r) ? t[i] = Ie({}, r) : Jt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && te(arguments[r], n);
  return t;
}
const gs = (e, t, n, { allOwnKeys: r } = {}) => (te(t, (s, i) => {
  n && Et(s) ? e[i] = Un(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), ws = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, As = (e, t, n, r) => {
  let s, i, o;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && Ye(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ss = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Es = (e) => {
  if (!e)
    return null;
  if (Jt(e))
    return e;
  let t = e.length;
  if (!qn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _s = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ye(Uint8Array)), xs = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Rs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ms = Ot("HTMLFormElement"), Os = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), an = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ps = Ot("RegExp"), Xn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  te(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, Ts = (e) => {
  Xn(e, (t, n) => {
    if (Et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Et(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Cs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return Jt(e) ? r(e) : r(String(e).split(t)), n;
}, Ls = () => {
}, Bs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Pe = "abcdefghijklmnopqrstuvwxyz", cn = "0123456789", Wn = {
  DIGIT: cn,
  ALPHA: Pe,
  ALPHA_DIGIT: Pe + Pe.toUpperCase() + cn
}, Ns = (e = 16, t = Wn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ds(e) {
  return !!(e && Et(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Is = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ye(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = Jt(r) ? [] : {};
        return te(r, (o, l) => {
          const h = n(o, s + 1);
          !Zt(h) && (i[l] = h);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, js = Ot("AsyncFunction"), Fs = (e) => e && (ye(e) || Et(e)) && Et(e.then) && Et(e.catch), S = {
  isArray: Jt,
  isArrayBuffer: kn,
  isBuffer: is,
  isFormData: ms,
  isArrayBufferView: os,
  isString: ls,
  isNumber: qn,
  isBoolean: as,
  isObject: ye,
  isPlainObject: ce,
  isUndefined: Zt,
  isDate: cs,
  isFile: us,
  isBlob: fs,
  isRegExp: Ps,
  isFunction: Et,
  isStream: ds,
  isURLSearchParams: ps,
  isTypedArray: _s,
  isFileList: hs,
  forEach: te,
  merge: Ie,
  extend: gs,
  trim: ys,
  stripBOM: ws,
  inherits: bs,
  toFlatObject: As,
  kindOf: me,
  kindOfTest: Ot,
  endsWith: Ss,
  toArray: Es,
  forEachEntry: xs,
  matchAll: Rs,
  isHTMLForm: Ms,
  hasOwnProperty: an,
  hasOwnProp: an,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xn,
  freezeMethods: Ts,
  toObjectSet: Cs,
  toCamelCase: Os,
  noop: Ls,
  toFiniteNumber: Bs,
  findKey: zn,
  global: vn,
  isContextDefined: Hn,
  ALPHABET: Wn,
  generateString: Ns,
  isSpecCompliantForm: Ds,
  toJSONObject: Is,
  isAsyncFn: js,
  isThenable: Fs
};
function Q(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
S.inherits(Q, Error, {
  toJSON: function() {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const $n = Q.prototype, Jn = {};
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
].forEach((e) => {
  Jn[e] = { value: e };
});
Object.defineProperties(Q, Jn);
Object.defineProperty($n, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, s, i) => {
  const o = Object.create($n);
  return S.toFlatObject(e, o, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Q.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Us = null;
function je(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Yn(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function un(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Yn(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ks(e) {
  return S.isArray(e) && !e.some(je);
}
const qs = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ge(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, T) {
    return !S.isUndefined(T[w]);
  });
  const r = n.metaTokens, s = n.visitor || a, i = n.dots, o = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (S.isDate(m))
      return m.toISOString();
    if (!h && S.isBlob(m))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(m) || S.isTypedArray(m) ? h && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function a(m, w, T) {
    let M = m;
    if (m && !T && typeof m == "object") {
      if (S.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), m = JSON.stringify(m);
      else if (S.isArray(m) && ks(m) || (S.isFileList(m) || S.endsWith(w, "[]")) && (M = S.toArray(m)))
        return w = Yn(w), M.forEach(function(k, J) {
          !(S.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? un([w], J, i) : o === null ? w : w + "[]",
            u(k)
          );
        }), !1;
    }
    return je(m) ? !0 : (t.append(un(T, w, i), u(m)), !1);
  }
  const f = [], y = Object.assign(qs, {
    defaultVisitor: a,
    convertValue: u,
    isVisitable: je
  });
  function b(m, w) {
    if (!S.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(m), S.forEach(m, function(M, F) {
        (!(S.isUndefined(M) || M === null) && s.call(
          t,
          M,
          S.isString(F) ? F.trim() : F,
          w,
          y
        )) === !0 && b(M, w ? w.concat(F) : [F]);
      }), f.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function fn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ge(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const Gn = Ge.prototype;
Gn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Gn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, fn);
  } : fn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zs, s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = S.isURLSearchParams(t) ? t.toString() : new Ge(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class vs {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
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
  forEach(t) {
    S.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const hn = vs, Kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hs = typeof URLSearchParams < "u" ? URLSearchParams : Ge, Xs = typeof FormData < "u" ? FormData : null, Ws = typeof Blob < "u" ? Blob : null, $s = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Js = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Mt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hs,
    FormData: Xs,
    Blob: Ws
  },
  isStandardBrowserEnv: $s,
  isStandardBrowserWebWorkerEnv: Js,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ys(e, t) {
  return ge(e, new Mt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return Mt.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Gs(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Vs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Qn(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    const l = Number.isFinite(+o), h = i >= n.length;
    return o = !o && S.isArray(s) ? s.length : o, h ? (S.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !l) : ((!s[o] || !S.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && S.isArray(s[o]) && (s[o] = Vs(s[o])), !l);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, s) => {
      t(Gs(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ks(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ve = {
  transitional: Kn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = S.isObject(t);
    if (i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return s && s ? JSON.stringify(Qn(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ys(t, this.formSerializer).toString();
      if ((l = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Ks(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ve.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && S.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? Q.from(l, Q.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
    FormData: Mt.classes.FormData,
    Blob: Mt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ve.headers[e] = {};
});
const Ke = Ve, Qs = S.toObjectSet([
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
]), Zs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Qs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, dn = Symbol("internals");
function Vt(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(ue) : String(e);
}
function ti(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ei = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Te(e, t, n, r, s) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function ni(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ri(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class we {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, h, u) {
      const a = Vt(h);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const f = S.findKey(s, a);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || h] = ue(l));
    }
    const o = (l, h) => S.forEach(l, (u, a) => i(u, a, h));
    return S.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : S.isString(t) && (t = t.trim()) && !ei(t) ? o(Zs(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Vt(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ti(s);
        if (S.isFunction(n))
          return n.call(this, s, r);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Vt(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Te(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Vt(o), o) {
        const l = S.findKey(r, o);
        l && (!n || Te(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Te(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (s, i) => {
      const o = S.findKey(r, i);
      if (o) {
        n[o] = ue(s), delete n[i];
        return;
      }
      const l = t ? ni(i) : String(i).trim();
      l !== i && delete n[i], n[l] = ue(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && S.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[dn] = this[dn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const l = Vt(o);
      r[l] || (ri(s, o), r[l] = !0);
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
we.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(we.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(we);
const Tt = we;
function Ce(e, t) {
  const n = this || Ke, r = t || n, s = Tt.from(r.headers);
  let i = r.data;
  return S.forEach(e, function(l) {
    i = l.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Zn(e) {
  return !!(e && e.__CANCEL__);
}
function ee(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
S.inherits(ee, Q, {
  __CANCEL__: !0
});
function si(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Q(
    "Request failed with status code " + n.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ii = Mt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, i, o, l) {
        const h = [];
        h.push(n + "=" + encodeURIComponent(r)), S.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()), S.isString(i) && h.push("path=" + i), S.isString(o) && h.push("domain=" + o), l === !0 && h.push("secure"), document.cookie = h.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function oi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function li(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tr(e, t) {
  return e && !oi(t) ? li(e, t) : t;
}
const ai = Mt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let o = i;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(o) {
      const l = S.isString(o) ? s(o) : o;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function ci(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ui(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const u = Date.now(), a = r[i];
    o || (o = u), n[s] = h, r[s] = u;
    let f = i, y = 0;
    for (; f !== s; )
      y += n[f++], f = f % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const b = a && u - a;
    return b ? Math.round(y * 1e3 / b) : void 0;
  };
}
function mn(e, t) {
  let n = 0;
  const r = ui(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, l = i - n, h = r(l), u = i <= o;
    n = i;
    const a = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && o && u ? (o - i) / h : void 0,
      event: s
    };
    a[t ? "download" : "upload"] = !0, e(a);
  };
}
const fi = typeof XMLHttpRequest < "u", hi = fi && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const i = Tt.from(e.headers).normalize(), o = e.responseType;
    let l;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    S.isFormData(s) && (Mt.isStandardBrowserEnv || Mt.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? S.isString(u = i.getContentType()) && i.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(m + ":" + w));
    }
    const f = tr(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), Vn(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function y() {
      if (!a)
        return;
      const m = Tt.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), T = {
        data: !o || o === "text" || o === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: m,
        config: e,
        request: a
      };
      si(function(F) {
        n(F), h();
      }, function(F) {
        r(F), h();
      }, T), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      a && (r(new Q("Request aborted", Q.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Kn;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new Q(
        w,
        T.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        a
      )), a = null;
    }, Mt.isStandardBrowserEnv) {
      const m = ai(f) && e.xsrfCookieName && ii.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in a && S.forEach(i.toJSON(), function(w, T) {
      a.setRequestHeader(T, w);
    }), S.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), o && o !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", mn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", mn(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      a && (r(!m || m.type ? new ee(null, e, a) : m), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const b = ci(f);
    if (b && Mt.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(s || null);
  });
}, Fe = {
  http: Us,
  xhr: hi
};
S.forEach(Fe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pn = (e) => `- ${e}`, di = (e) => S.isFunction(e) || e === null || e === !1, er = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (r = n, !di(n) && (r = Fe[(o = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(pn).join(`
`) : " " + pn(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Fe
};
function Le(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ee(null, e);
}
function yn(e) {
  return Le(e), e.headers = Tt.from(e.headers), e.data = Ce.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), er.getAdapter(e.adapter || Ke.adapter)(e).then(function(r) {
    return Le(e), r.data = Ce.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Tt.from(r.headers), r;
  }, function(r) {
    return Zn(r) || (Le(e), r && r.response && (r.response.data = Ce.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Tt.from(r.response.headers))), Promise.reject(r);
  });
}
const gn = (e) => e instanceof Tt ? e.toJSON() : e;
function Wt(e, t) {
  t = t || {};
  const n = {};
  function r(u, a, f) {
    return S.isPlainObject(u) && S.isPlainObject(a) ? S.merge.call({ caseless: f }, u, a) : S.isPlainObject(a) ? S.merge({}, a) : S.isArray(a) ? a.slice() : a;
  }
  function s(u, a, f) {
    if (S.isUndefined(a)) {
      if (!S.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, a, f);
  }
  function i(u, a) {
    if (!S.isUndefined(a))
      return r(void 0, a);
  }
  function o(u, a) {
    if (S.isUndefined(a)) {
      if (!S.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, a);
  }
  function l(u, a, f) {
    if (f in t)
      return r(u, a);
    if (f in e)
      return r(void 0, u);
  }
  const h = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, a) => s(gn(u), gn(a), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, e, t)), function(a) {
    const f = h[a] || s, y = f(e[a], t[a], a);
    S.isUndefined(y) && f !== l || (n[a] = y);
  }), n;
}
const nr = "1.6.0", Qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Qe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wn = {};
Qe.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + nr + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new Q(
        s(o, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !wn[o] && (wn[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
function mi(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const l = e[i], h = l === void 0 || o(l, i, e);
      if (h !== !0)
        throw new Q("option " + i + " must be " + h, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const Ue = {
  assertOptions: mi,
  validators: Qe
}, Dt = Ue.validators;
class de {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new hn(),
      response: new hn()
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Wt(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && Ue.assertOptions(r, {
      silentJSONParsing: Dt.transitional(Dt.boolean),
      forcedJSONParsing: Dt.transitional(Dt.boolean),
      clarifyTimeoutError: Dt.transitional(Dt.boolean)
    }, !1), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ue.assertOptions(s, {
      encode: Dt.function,
      serialize: Dt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && S.merge(
      i.common,
      i[n.method]
    );
    i && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), n.headers = Tt.concat(o, i);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (h = h && w.synchronous, l.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let a, f = 0, y;
    if (!h) {
      const m = [yn.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, u), y = m.length, a = Promise.resolve(n); f < y; )
        a = a.then(m[f++], m[f++]);
      return a;
    }
    y = l.length;
    let b = n;
    for (f = 0; f < y; ) {
      const m = l[f++], w = l[f++];
      try {
        b = m(b);
      } catch (T) {
        w.call(this, T);
        break;
      }
    }
    try {
      a = yn.call(this, b);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, y = u.length; f < y; )
      a = a.then(u[f++], u[f++]);
    return a;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = tr(t.baseURL, t.url);
    return Vn(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  de.prototype[t] = function(n, r) {
    return this.request(Wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(Wt(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  de.prototype[t] = n(), de.prototype[t + "Form"] = n(!0);
});
const fe = de;
class Ze {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      r.reason || (r.reason = new ee(i, o, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ze(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const pi = Ze;
function yi(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gi(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const ke = {
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
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e;
});
const wi = ke;
function rr(e) {
  const t = new fe(e), n = Un(fe.prototype.request, t);
  return S.extend(n, fe.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return rr(Wt(e, s));
  }, n;
}
const ut = rr(Ke);
ut.Axios = fe;
ut.CanceledError = ee;
ut.CancelToken = pi;
ut.isCancel = Zn;
ut.VERSION = nr;
ut.toFormData = ge;
ut.AxiosError = Q;
ut.Cancel = ut.CanceledError;
ut.all = function(t) {
  return Promise.all(t);
};
ut.spread = yi;
ut.isAxiosError = gi;
ut.mergeConfig = Wt;
ut.AxiosHeaders = Tt;
ut.formToJSON = (e) => Qn(S.isHTMLForm(e) ? new FormData(e) : e);
ut.getAdapter = er.getAdapter;
ut.HttpStatusCode = wi;
ut.default = ut;
const bi = ut;
function sr(e) {
  if (e.length === 2)
    return new At(e[0], e[1]);
  if (e.length === 3)
    return new At(e[0], e[1], e[2]);
  if (e.length > 4)
    return new At(e[0], e[1], e[2], ...e.slice(3));
  throw new Error("Error: the length of array is not correct");
}
function ir(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] == null)
      continue;
    let r = sr(e[n]);
    t.push(r);
  }
  return t;
}
function Ai(e) {
  let t = ir(e);
  return new We(t);
}
function Si(e) {
  return bi.get(e);
}
function Ei(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(n.geometry.coordinates);
  }), t;
}
function _i(e) {
  let t = e, n = [];
  for (let r = 0; r < t.length; r++) {
    let s;
    for (let i = 0; i < t[r].length; i++)
      s = t[r][i];
    n.push(s);
  }
  return n;
}
const $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: Ei,
  GeoPolygons2SimpleArr: _i,
  createMultiPointFromArr: Ai,
  createPointListFromArr: ir,
  cretePointFromArr: sr,
  readDataFromGeoJSON: Si
}, Symbol.toStringTag, { value: "Module" }));
class xi {
  // 波段数
  constructor(t, n) {
    Z(this, "MBR");
    // [minLon, minLat, maxLon, maxLat]
    Z(this, "data");
    // 三维数组
    Z(this, "shape");
    // 三维数组的形状
    Z(this, "rows");
    // 行数
    Z(this, "cols");
    // 列数
    Z(this, "bands");
    this.MBR = t, this.data = n, this.shape = [n.length, n[0].length, n[0][0].length], [this.bands, this.rows, this.cols] = this.shape;
  }
  getShape() {
    return [this.data.length, this.data[0].length, this.data[0][0].length];
  }
  /**
   * 获取指定范围，指定波段的网格数据
   * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGrid(t, n = [0]) {
    let r = t[0], s = t[1], i = t[2], o = t[3], l = [];
    for (let h of n) {
      let u = [];
      for (let a = r; a <= i; a++) {
        let f = [];
        for (let y = s; y <= o; y++)
          f.push(this.data[h][a][y]);
        u.push(f);
      }
      l.push(u);
    }
    return l;
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], s = t[2], i = t[3], o = this.getGridCoord([n, r]), l = this.getGridCoord([s, i]);
    if (o === null || l === null)
      return null;
    {
      let h = o[0], u = o[1], a = l[0], f = l[1];
      return [h, u, a, f];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (Je(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], s = this.MBR[0], i = this.MBR[1], o = this.MBR[2], l = this.MBR[3], h = Math.floor((r - i) / (l - i) * this.rows), u = Math.floor((n - s) / (o - s) * this.cols);
      return [h, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], s = this.MBR[0], i = this.MBR[1], o = this.MBR[2], l = this.MBR[3], h = (r + 0.5) / this.cols * (o - s) + s, u = (n + 0.5) / this.rows * (l - i) + i;
    return [h, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], s = n[0][0], i = 0;
    for (let l = 0; l < this.rows; l++)
      for (let h = 0; h < this.cols; h++) {
        let u = n[l][h];
        u > r && (r = u), u < s && (s = u), i += u;
      }
    let o = i / (this.rows * this.cols);
    return {
      max: r,
      min: s,
      mean: o
    };
  }
}
const Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: xi
}, Symbol.toStringTag, { value: "Module" }));
class vt {
  constructor(t, n, r = 10) {
    Z(this, "capacity");
    Z(this, "boundary");
    Z(this, "points");
    // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    Z(this, "northWest");
    Z(this, "northEast");
    Z(this, "southWest");
    Z(this, "southEast");
    Z(this, "isDivided");
    Z(this, "depth");
    Z(this, "maxDepth", 10);
    this.capacity = n, this.boundary = t, this.points = [], this.isDivided = !1, this.northWest = null, this.northEast = null, this.southWest = null, this.southEast = null, this.depth = 0, this.maxDepth = r;
  }
  /**
   * 插入一个点
   * @param point - 点的坐标 
   * @returns {boolean} - 是否插入成功
   */
  insert(t) {
    return Je(t, this.boundary) ? !1 : this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0);
  }
  /**
   * 获取当前节点的所有点(若长度为 0 则返回 null)
   */
  get pointsList() {
    return this.points.length === 0 ? null : this.points;
  }
  /**
   * 剖分当前节点
   */
  subdivide() {
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, s = this.boundary[3] - n, i = new vt([t, n + s / 2, t + r / 2, n + s], this.capacity), o = new vt([t + r / 2, n + s / 2, t + r, n + s], this.capacity), l = new vt([t, n, t + r / 2, n + s / 2], this.capacity), h = new vt([t + r / 2, n, t + r, n + s / 2], this.capacity);
    this.northWest = i, this.northEast = o, this.southWest = l, this.southEast = h, this.isDivided = !0, this.depth++;
  }
  /**
   * 四叉树范围查询
   * - 输入一个矩形范围，返回范围内的所有点
   * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
   * @param range{MBR} - 查询范围矩形
   * @returns {Array<[number,number]>}
   * @example
   * ```ts
   * // 平面坐标系下
   * let quadTree = new QuadTree([0,0,100,100],4);
   * quadTree.insert([10,10]);
   * quadTree.insert([20,20]);
   * quadTree.insert([30,30]);
   * quadTree.insert([40,40]);
   * quadTree.insert([50,50]);
   * quadTree.insert([60,60]);
   * 
   * let range = [0,0,50,50];
   * let pointsInRange = quadTree.queryRange(range);
   * console.log(pointsInRange);
   * // [[10,10],[20,20],[30,30],[40,40],[50,50]]
   * ```
   */
  queryRange(t) {
    let n = [];
    if (!Ln(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      Pn(this.points[r], t) && n.push(this.points[r]);
    return this.northWest === null || (n.push(...this.northWest.queryRange(t)), n.push(...this.northEast.queryRange(t)), n.push(...this.southWest.queryRange(t)), n.push(...this.southEast.queryRange(t))), n;
  }
  /**
   * 四叉树圆形范围查询
   * @param range - 查询范围
   * @param found - 查询结果
   * @returns 
   */
  queryCircle(t, n = []) {
    let r = [];
    if (t.intersects(this.boundary))
      n.push(this.boundary);
    else
      return r;
    for (let s = 0; s < this.points.length; s++)
      t.contains(this.points[s], 45e8) && r.push(this.points[s]);
    return this.northWest === null || (r.push(...this.northWest.queryCircle(t, n)), r.push(...this.northEast.queryCircle(t, n)), r.push(...this.southWest.queryCircle(t, n)), r.push(...this.southEast.queryCircle(t, n))), r;
  }
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: vt
}, Symbol.toStringTag, { value: "Module" })), Ri = Math.E;
function Be(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function Mi(e, t) {
  let s = e, i = t;
  s *= 3284157443, i ^= s << 128 | s >> 256 - 128, i *= 1911520717, s ^= i << 128 | i >> 256 - 128, s *= 2048419325;
  const o = s * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(o),
    y: Math.sin(o)
  };
}
function oe(e, t, n, r) {
  const s = Mi(e, t), i = n - e, o = r - t;
  return i * s.x + o * s.y;
}
function Oi(e, t) {
  const n = Math.floor(e), r = n + 1, s = Math.floor(t), i = s + 1, o = e - n, l = t - s, h = oe(n, s, e, t), u = oe(r, s, e, t), a = Be(h, u, o), f = oe(n, i, e, t), y = oe(r, i, e, t), b = Be(f, y, o);
  return Be(a, b, l);
}
function Pi(e, t) {
  return Math.pow(Ri, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function Ti(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: Oi,
  Sin3D: Ti,
  dampedSin3D: Pi
}, Symbol.toStringTag, { value: "Module" }));
var or = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e))(or || {}), lr = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(lr || {});
function tn(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function Ci(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function Li(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function Bi(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function ar(e) {
  switch (e) {
    case 0:
      return tn;
    case 1:
      return Ci;
    case 2:
      return Li;
    case 3:
      return Bi;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function en(e, t, n = tn) {
  let r = n(t, e), s = Math.floor(r * 255);
  return `rgb(${s},${s},${s})`;
}
function Ni(e) {
  return (t, n) => en(t, n, ar(e));
}
const cr = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"];
function Di(e, t, n, r = cr, s = tn) {
  let i = s(t, e), o = 0;
  if (n === void 0)
    o = Math.floor(i * r.length);
  else
    for (let l = 0; l < n.length; l++)
      if (i < n[l]) {
        o = l;
        break;
      }
  return r[o];
}
function Ii(e, t, n = cr) {
  return (r, s) => Di(r, s, t, n, ar(e));
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorListType: lr,
  pseudoColorBandFactory: Ii,
  simpleColorBand: en,
  simpleColorBandFactory: Ni,
  stretchType: or
}, Symbol.toStringTag, { value: "Module" }));
function ji(e, t, n, r, s = en) {
  let i = n.w / t[0].length, o = n.h / t.length, l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let h = 0; h < t.length; h++)
    for (let u = 0; u < t[0].length; u++) {
      let a = t[h][u], f = s(r, a);
      l.fillStyle = f, l.fillRect(n.x + u * i, n.y + h * o, i, o);
    }
  l.fillStyle = "red", l.fillRect(n.x + n.w / 2 - 2, n.y + n.h / 2 - 2, 4, 4);
}
const Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drawGrid2d: ji
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hi as CGUtils,
  Vi as Colors,
  Ji as Coverage,
  Xi as Delaunay,
  zi as Geometry,
  vi as Measuration,
  $i as Meta,
  Gi as Noise,
  Yi as QuadTree,
  qi as Reference,
  Ki as Renderer,
  Wi as Shell,
  ki as Unit,
  Ui as Utils
};
