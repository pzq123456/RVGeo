var yr = Object.defineProperty;
var mr = (e, t, n) => t in e ? yr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (mr(e, typeof t != "symbol" ? t + "" : t, n), n);
const yt = 11102230246251565e-32, L = 134217729, Pn = (3 + 8 * yt) * yt;
function ct(e, t, n, r, s) {
  let o, i, l, h, u = t[0], a = r[0], f = 0, p = 0;
  a > u == a > -u ? (o = u, u = t[++f]) : (o = a, a = r[++p]);
  let b = 0;
  if (f < e && p < n)
    for (a > u == a > -u ? (i = u + o, l = o - (i - u), u = t[++f]) : (i = a + o, l = o - (i - a), a = r[++p]), o = i, l !== 0 && (s[b++] = l); f < e && p < n; )
      a > u == a > -u ? (i = o + u, h = i - o, l = o - (i - h) + (u - h), u = t[++f]) : (i = o + a, h = i - o, l = o - (i - h) + (a - h), a = r[++p]), o = i, l !== 0 && (s[b++] = l);
  for (; f < e; )
    i = o + u, h = i - o, l = o - (i - h) + (u - h), u = t[++f], o = i, l !== 0 && (s[b++] = l);
  for (; p < n; )
    i = o + a, h = i - o, l = o - (i - h) + (a - h), a = r[++p], o = i, l !== 0 && (s[b++] = l);
  return (o !== 0 || b === 0) && (s[b++] = o), b;
}
function Mt(e, t, n, r, s, o, i, l) {
  return ct(ct(e, t, n, r, i), i, s, o, l);
}
function E(e, t, n, r) {
  let s, o, i, l, h, u, a, f, p, b, y;
  a = L * n, b = a - (a - n), y = n - b;
  let g = t[0];
  s = g * n, a = L * g, f = a - (a - g), p = g - f, i = p * y - (s - f * b - p * b - f * y);
  let R = 0;
  i !== 0 && (r[R++] = i);
  for (let x = 1; x < e; x++)
    g = t[x], l = g * n, a = L * g, f = a - (a - g), p = g - f, h = p * y - (l - f * b - p * b - f * y), o = s + h, u = o - s, i = s - (o - u) + (h - u), i !== 0 && (r[R++] = i), s = l + o, i = o - (s - l), i !== 0 && (r[R++] = i);
  return (s !== 0 || R === 0) && (r[R++] = s), R;
}
function _n(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function J(e) {
  return new Float64Array(e);
}
const wr = (3 + 16 * yt) * yt, gr = (2 + 12 * yt) * yt, br = (9 + 64 * yt) * yt * yt, Gt = J(4), an = J(8), cn = J(12), un = J(16), mt = J(4);
function Mr(e, t, n, r, s, o, i) {
  let l, h, u, a, f, p, b, y, g, R, x, j, U, $, tt, nt, it, rt;
  const B = e - s, G = n - s, v = t - o, z = r - o;
  $ = B * z, p = L * B, b = p - (p - B), y = B - b, p = L * z, g = p - (p - z), R = z - g, tt = y * R - ($ - b * g - y * g - b * R), nt = v * G, p = L * v, b = p - (p - v), y = v - b, p = L * G, g = p - (p - G), R = G - g, it = y * R - (nt - b * g - y * g - b * R), x = tt - it, f = tt - x, Gt[0] = tt - (x + f) + (f - it), j = $ + x, f = j - $, U = $ - (j - f) + (x - f), x = U - nt, f = U - x, Gt[1] = U - (x + f) + (f - nt), rt = j + x, f = rt - j, Gt[2] = j - (rt - f) + (x - f), Gt[3] = rt;
  let et = _n(4, Gt), c = gr * i;
  if (et >= c || -et >= c || (f = e - B, l = e - (B + f) + (f - s), f = n - G, u = n - (G + f) + (f - s), f = t - v, h = t - (v + f) + (f - o), f = r - z, a = r - (z + f) + (f - o), l === 0 && h === 0 && u === 0 && a === 0) || (c = br * i + Pn * Math.abs(et), et += B * a + z * l - (v * u + G * h), et >= c || -et >= c))
    return et;
  $ = l * z, p = L * l, b = p - (p - l), y = l - b, p = L * z, g = p - (p - z), R = z - g, tt = y * R - ($ - b * g - y * g - b * R), nt = h * G, p = L * h, b = p - (p - h), y = h - b, p = L * G, g = p - (p - G), R = G - g, it = y * R - (nt - b * g - y * g - b * R), x = tt - it, f = tt - x, mt[0] = tt - (x + f) + (f - it), j = $ + x, f = j - $, U = $ - (j - f) + (x - f), x = U - nt, f = U - x, mt[1] = U - (x + f) + (f - nt), rt = j + x, f = rt - j, mt[2] = j - (rt - f) + (x - f), mt[3] = rt;
  const d = ct(4, Gt, 4, mt, an);
  $ = B * a, p = L * B, b = p - (p - B), y = B - b, p = L * a, g = p - (p - a), R = a - g, tt = y * R - ($ - b * g - y * g - b * R), nt = v * u, p = L * v, b = p - (p - v), y = v - b, p = L * u, g = p - (p - u), R = u - g, it = y * R - (nt - b * g - y * g - b * R), x = tt - it, f = tt - x, mt[0] = tt - (x + f) + (f - it), j = $ + x, f = j - $, U = $ - (j - f) + (x - f), x = U - nt, f = U - x, mt[1] = U - (x + f) + (f - nt), rt = j + x, f = rt - j, mt[2] = j - (rt - f) + (x - f), mt[3] = rt;
  const m = ct(d, an, 4, mt, cn);
  $ = l * a, p = L * l, b = p - (p - l), y = l - b, p = L * a, g = p - (p - a), R = a - g, tt = y * R - ($ - b * g - y * g - b * R), nt = h * u, p = L * h, b = p - (p - h), y = h - b, p = L * u, g = p - (p - u), R = u - g, it = y * R - (nt - b * g - y * g - b * R), x = tt - it, f = tt - x, mt[0] = tt - (x + f) + (f - it), j = $ + x, f = j - $, U = $ - (j - f) + (x - f), x = U - nt, f = U - x, mt[1] = U - (x + f) + (f - nt), rt = j + x, f = rt - j, mt[2] = j - (rt - f) + (x - f), mt[3] = rt;
  const M = ct(m, cn, 4, mt, un);
  return un[M - 1];
}
function Zt(e, t, n, r, s, o) {
  const i = (t - o) * (n - s), l = (e - s) * (r - o), h = i - l, u = Math.abs(i + l);
  return Math.abs(h) >= wr * u ? h : -Mr(e, t, n, r, s, o, u);
}
const Sr = (10 + 96 * yt) * yt, Ar = (4 + 48 * yt) * yt, Er = (44 + 576 * yt) * yt * yt, Bt = J(4), Tt = J(4), Ct = J(4), Et = J(4), Pt = J(4), _t = J(4), wt = J(4), gt = J(4), _e = J(8), xe = J(8), Oe = J(8), Le = J(8), Re = J(8), Be = J(8), oe = J(8), ie = J(8), le = J(8), jt = J(4), Ft = J(4), Ut = J(4), T = J(8), I = J(16), st = J(16), ot = J(16), K = J(32), kt = J(32), lt = J(48), bt = J(64);
let Wt = J(1152), Te = J(1152);
function at(e, t, n) {
  e = ct(e, Wt, t, n, Te);
  const r = Wt;
  return Wt = Te, Te = r, e;
}
function Pr(e, t, n, r, s, o, i, l, h) {
  let u, a, f, p, b, y, g, R, x, j, U, $, tt, nt, it, rt, B, G, v, z, et, c, d, m, M, A, _, w, P, C, O, k, N, F, D;
  const H = e - i, W = n - i, q = s - i, Y = t - l, X = r - l, V = o - l;
  O = W * V, d = L * W, m = d - (d - W), M = W - m, d = L * V, A = d - (d - V), _ = V - A, k = M * _ - (O - m * A - M * A - m * _), N = q * X, d = L * q, m = d - (d - q), M = q - m, d = L * X, A = d - (d - X), _ = X - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, Bt[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, Bt[1] = C - (w + c) + (c - N), D = P + w, c = D - P, Bt[2] = P - (D - c) + (w - c), Bt[3] = D, O = q * Y, d = L * q, m = d - (d - q), M = q - m, d = L * Y, A = d - (d - Y), _ = Y - A, k = M * _ - (O - m * A - M * A - m * _), N = H * V, d = L * H, m = d - (d - H), M = H - m, d = L * V, A = d - (d - V), _ = V - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, Tt[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, Tt[1] = C - (w + c) + (c - N), D = P + w, c = D - P, Tt[2] = P - (D - c) + (w - c), Tt[3] = D, O = H * X, d = L * H, m = d - (d - H), M = H - m, d = L * X, A = d - (d - X), _ = X - A, k = M * _ - (O - m * A - M * A - m * _), N = W * Y, d = L * W, m = d - (d - W), M = W - m, d = L * Y, A = d - (d - Y), _ = Y - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, Ct[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, Ct[1] = C - (w + c) + (c - N), D = P + w, c = D - P, Ct[2] = P - (D - c) + (w - c), Ct[3] = D, u = ct(
    ct(
      ct(
        E(E(4, Bt, H, T), T, H, I),
        I,
        E(E(4, Bt, Y, T), T, Y, st),
        st,
        K
      ),
      K,
      ct(
        E(E(4, Tt, W, T), T, W, I),
        I,
        E(E(4, Tt, X, T), T, X, st),
        st,
        kt
      ),
      kt,
      bt
    ),
    bt,
    ct(
      E(E(4, Ct, q, T), T, q, I),
      I,
      E(E(4, Ct, V, T), T, V, st),
      st,
      K
    ),
    K,
    Wt
  );
  let Lt = _n(u, Wt), Vt = Ar * h;
  if (Lt >= Vt || -Lt >= Vt || (c = e - H, a = e - (H + c) + (c - i), c = t - Y, b = t - (Y + c) + (c - l), c = n - W, f = n - (W + c) + (c - i), c = r - X, y = r - (X + c) + (c - l), c = s - q, p = s - (q + c) + (c - i), c = o - V, g = o - (V + c) + (c - l), a === 0 && f === 0 && p === 0 && b === 0 && y === 0 && g === 0) || (Vt = Er * h + Pn * Math.abs(Lt), Lt += (H * H + Y * Y) * (W * g + V * f - (X * p + q * y)) + 2 * (H * a + Y * b) * (W * V - X * q) + ((W * W + X * X) * (q * b + Y * p - (V * a + H * g)) + 2 * (W * f + X * y) * (q * Y - V * H)) + ((q * q + V * V) * (H * y + X * a - (Y * f + W * b)) + 2 * (q * p + V * g) * (H * X - Y * W)), Lt >= Vt || -Lt >= Vt))
    return Lt;
  if ((f !== 0 || y !== 0 || p !== 0 || g !== 0) && (O = H * H, d = L * H, m = d - (d - H), M = H - m, k = M * M - (O - m * m - (m + m) * M), N = Y * Y, d = L * Y, m = d - (d - Y), M = Y - m, F = M * M - (N - m * m - (m + m) * M), w = k + F, c = w - k, Et[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, Et[1] = C - (w - c) + (N - c), D = P + w, c = D - P, Et[2] = P - (D - c) + (w - c), Et[3] = D), (p !== 0 || g !== 0 || a !== 0 || b !== 0) && (O = W * W, d = L * W, m = d - (d - W), M = W - m, k = M * M - (O - m * m - (m + m) * M), N = X * X, d = L * X, m = d - (d - X), M = X - m, F = M * M - (N - m * m - (m + m) * M), w = k + F, c = w - k, Pt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, Pt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, Pt[2] = P - (D - c) + (w - c), Pt[3] = D), (a !== 0 || b !== 0 || f !== 0 || y !== 0) && (O = q * q, d = L * q, m = d - (d - q), M = q - m, k = M * M - (O - m * m - (m + m) * M), N = V * V, d = L * V, m = d - (d - V), M = V - m, F = M * M - (N - m * m - (m + m) * M), w = k + F, c = w - k, _t[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, _t[1] = C - (w - c) + (N - c), D = P + w, c = D - P, _t[2] = P - (D - c) + (w - c), _t[3] = D), a !== 0 && (R = E(4, Bt, a, _e), u = at(u, Mt(
    E(R, _e, 2 * H, I),
    I,
    E(E(4, _t, a, T), T, X, st),
    st,
    E(E(4, Pt, a, T), T, -V, ot),
    ot,
    K,
    lt
  ), lt)), b !== 0 && (x = E(4, Bt, b, xe), u = at(u, Mt(
    E(x, xe, 2 * Y, I),
    I,
    E(E(4, Pt, b, T), T, q, st),
    st,
    E(E(4, _t, b, T), T, -W, ot),
    ot,
    K,
    lt
  ), lt)), f !== 0 && (j = E(4, Tt, f, Oe), u = at(u, Mt(
    E(j, Oe, 2 * W, I),
    I,
    E(E(4, Et, f, T), T, V, st),
    st,
    E(E(4, _t, f, T), T, -Y, ot),
    ot,
    K,
    lt
  ), lt)), y !== 0 && (U = E(4, Tt, y, Le), u = at(u, Mt(
    E(U, Le, 2 * X, I),
    I,
    E(E(4, _t, y, T), T, H, st),
    st,
    E(E(4, Et, y, T), T, -q, ot),
    ot,
    K,
    lt
  ), lt)), p !== 0 && ($ = E(4, Ct, p, Re), u = at(u, Mt(
    E($, Re, 2 * q, I),
    I,
    E(E(4, Pt, p, T), T, Y, st),
    st,
    E(E(4, Et, p, T), T, -X, ot),
    ot,
    K,
    lt
  ), lt)), g !== 0 && (tt = E(4, Ct, g, Be), u = at(u, Mt(
    E(tt, Be, 2 * V, I),
    I,
    E(E(4, Et, g, T), T, W, st),
    st,
    E(E(4, Pt, g, T), T, -H, ot),
    ot,
    K,
    lt
  ), lt)), a !== 0 || b !== 0) {
    if (f !== 0 || y !== 0 || p !== 0 || g !== 0 ? (O = f * V, d = L * f, m = d - (d - f), M = f - m, d = L * V, A = d - (d - V), _ = V - A, k = M * _ - (O - m * A - M * A - m * _), N = W * g, d = L * W, m = d - (d - W), M = W - m, d = L * g, A = d - (d - g), _ = g - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, wt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, wt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, wt[2] = P - (D - c) + (w - c), wt[3] = D, O = p * -X, d = L * p, m = d - (d - p), M = p - m, d = L * -X, A = d - (d - -X), _ = -X - A, k = M * _ - (O - m * A - M * A - m * _), N = q * -y, d = L * q, m = d - (d - q), M = q - m, d = L * -y, A = d - (d - -y), _ = -y - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, gt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, gt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, gt[2] = P - (D - c) + (w - c), gt[3] = D, it = ct(4, wt, 4, gt, ie), O = f * g, d = L * f, m = d - (d - f), M = f - m, d = L * g, A = d - (d - g), _ = g - A, k = M * _ - (O - m * A - M * A - m * _), N = p * y, d = L * p, m = d - (d - p), M = p - m, d = L * y, A = d - (d - y), _ = y - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, Ft[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, Ft[1] = C - (w + c) + (c - N), D = P + w, c = D - P, Ft[2] = P - (D - c) + (w - c), Ft[3] = D, G = 4) : (ie[0] = 0, it = 1, Ft[0] = 0, G = 1), a !== 0) {
      const ft = E(it, ie, a, ot);
      u = at(u, ct(
        E(R, _e, a, I),
        I,
        E(ft, ot, 2 * H, K),
        K,
        lt
      ), lt);
      const ht = E(G, Ft, a, T);
      u = at(u, Mt(
        E(ht, T, 2 * H, I),
        I,
        E(ht, T, a, st),
        st,
        E(ft, ot, a, K),
        K,
        kt,
        bt
      ), bt), y !== 0 && (u = at(u, E(E(4, _t, a, T), T, y, I), I)), g !== 0 && (u = at(u, E(E(4, Pt, -a, T), T, g, I), I));
    }
    if (b !== 0) {
      const ft = E(it, ie, b, ot);
      u = at(u, ct(
        E(x, xe, b, I),
        I,
        E(ft, ot, 2 * Y, K),
        K,
        lt
      ), lt);
      const ht = E(G, Ft, b, T);
      u = at(u, Mt(
        E(ht, T, 2 * Y, I),
        I,
        E(ht, T, b, st),
        st,
        E(ft, ot, b, K),
        K,
        kt,
        bt
      ), bt);
    }
  }
  if (f !== 0 || y !== 0) {
    if (p !== 0 || g !== 0 || a !== 0 || b !== 0 ? (O = p * Y, d = L * p, m = d - (d - p), M = p - m, d = L * Y, A = d - (d - Y), _ = Y - A, k = M * _ - (O - m * A - M * A - m * _), N = q * b, d = L * q, m = d - (d - q), M = q - m, d = L * b, A = d - (d - b), _ = b - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, wt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, wt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, wt[2] = P - (D - c) + (w - c), wt[3] = D, z = -V, et = -g, O = a * z, d = L * a, m = d - (d - a), M = a - m, d = L * z, A = d - (d - z), _ = z - A, k = M * _ - (O - m * A - M * A - m * _), N = H * et, d = L * H, m = d - (d - H), M = H - m, d = L * et, A = d - (d - et), _ = et - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, gt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, gt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, gt[2] = P - (D - c) + (w - c), gt[3] = D, rt = ct(4, wt, 4, gt, le), O = p * b, d = L * p, m = d - (d - p), M = p - m, d = L * b, A = d - (d - b), _ = b - A, k = M * _ - (O - m * A - M * A - m * _), N = a * g, d = L * a, m = d - (d - a), M = a - m, d = L * g, A = d - (d - g), _ = g - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, Ut[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, Ut[1] = C - (w + c) + (c - N), D = P + w, c = D - P, Ut[2] = P - (D - c) + (w - c), Ut[3] = D, v = 4) : (le[0] = 0, rt = 1, Ut[0] = 0, v = 1), f !== 0) {
      const ft = E(rt, le, f, ot);
      u = at(u, ct(
        E(j, Oe, f, I),
        I,
        E(ft, ot, 2 * W, K),
        K,
        lt
      ), lt);
      const ht = E(v, Ut, f, T);
      u = at(u, Mt(
        E(ht, T, 2 * W, I),
        I,
        E(ht, T, f, st),
        st,
        E(ft, ot, f, K),
        K,
        kt,
        bt
      ), bt), g !== 0 && (u = at(u, E(E(4, Et, f, T), T, g, I), I)), b !== 0 && (u = at(u, E(E(4, _t, -f, T), T, b, I), I));
    }
    if (y !== 0) {
      const ft = E(rt, le, y, ot);
      u = at(u, ct(
        E(U, Le, y, I),
        I,
        E(ft, ot, 2 * X, K),
        K,
        lt
      ), lt);
      const ht = E(v, Ut, y, T);
      u = at(u, Mt(
        E(ht, T, 2 * X, I),
        I,
        E(ht, T, y, st),
        st,
        E(ft, ot, y, K),
        K,
        kt,
        bt
      ), bt);
    }
  }
  if (p !== 0 || g !== 0) {
    if (a !== 0 || b !== 0 || f !== 0 || y !== 0 ? (O = a * X, d = L * a, m = d - (d - a), M = a - m, d = L * X, A = d - (d - X), _ = X - A, k = M * _ - (O - m * A - M * A - m * _), N = H * y, d = L * H, m = d - (d - H), M = H - m, d = L * y, A = d - (d - y), _ = y - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, wt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, wt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, wt[2] = P - (D - c) + (w - c), wt[3] = D, z = -Y, et = -b, O = f * z, d = L * f, m = d - (d - f), M = f - m, d = L * z, A = d - (d - z), _ = z - A, k = M * _ - (O - m * A - M * A - m * _), N = W * et, d = L * W, m = d - (d - W), M = W - m, d = L * et, A = d - (d - et), _ = et - A, F = M * _ - (N - m * A - M * A - m * _), w = k + F, c = w - k, gt[0] = k - (w - c) + (F - c), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C + N, c = w - C, gt[1] = C - (w - c) + (N - c), D = P + w, c = D - P, gt[2] = P - (D - c) + (w - c), gt[3] = D, nt = ct(4, wt, 4, gt, oe), O = a * y, d = L * a, m = d - (d - a), M = a - m, d = L * y, A = d - (d - y), _ = y - A, k = M * _ - (O - m * A - M * A - m * _), N = f * b, d = L * f, m = d - (d - f), M = f - m, d = L * b, A = d - (d - b), _ = b - A, F = M * _ - (N - m * A - M * A - m * _), w = k - F, c = k - w, jt[0] = k - (w + c) + (c - F), P = O + w, c = P - O, C = O - (P - c) + (w - c), w = C - N, c = C - w, jt[1] = C - (w + c) + (c - N), D = P + w, c = D - P, jt[2] = P - (D - c) + (w - c), jt[3] = D, B = 4) : (oe[0] = 0, nt = 1, jt[0] = 0, B = 1), p !== 0) {
      const ft = E(nt, oe, p, ot);
      u = at(u, ct(
        E($, Re, p, I),
        I,
        E(ft, ot, 2 * q, K),
        K,
        lt
      ), lt);
      const ht = E(B, jt, p, T);
      u = at(u, Mt(
        E(ht, T, 2 * q, I),
        I,
        E(ht, T, p, st),
        st,
        E(ft, ot, p, K),
        K,
        kt,
        bt
      ), bt), b !== 0 && (u = at(u, E(E(4, Pt, p, T), T, b, I), I)), y !== 0 && (u = at(u, E(E(4, Et, -p, T), T, y, I), I));
    }
    if (g !== 0) {
      const ft = E(nt, oe, g, ot);
      u = at(u, ct(
        E(tt, Be, g, I),
        I,
        E(ft, ot, 2 * V, K),
        K,
        lt
      ), lt);
      const ht = E(B, jt, g, T);
      u = at(u, Mt(
        E(ht, T, 2 * V, I),
        I,
        E(ht, T, g, st),
        st,
        E(ft, ot, g, K),
        K,
        kt,
        bt
      ), bt);
    }
  }
  return Wt[u - 1];
}
function _r(e, t, n, r, s, o, i, l) {
  const h = e - i, u = n - i, a = s - i, f = t - l, p = r - l, b = o - l, y = u * b, g = a * p, R = h * h + f * f, x = a * f, j = h * b, U = u * u + p * p, $ = h * p, tt = u * f, nt = a * a + b * b, it = R * (y - g) + U * (x - j) + nt * ($ - tt), rt = (Math.abs(y) + Math.abs(g)) * R + (Math.abs(x) + Math.abs(j)) * U + (Math.abs($) + Math.abs(tt)) * nt, B = Sr * rt;
  return it > B || -it > B ? it : Pr(e, t, n, r, s, o, i, l, rt);
}
function Ue(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
function xn(e) {
  return Math.abs(e) <= 180 ? e : e - Jt(e) * 360;
}
function Jt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function Xe(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], s = e[1], o = t[0], i = t[1], l = n[0], h = n[1], u = (o - r) * (h - s) - (i - s) * (l - r);
  return u = Jt(u), u;
}
function ee(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), s = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return s = s * 180 / Math.PI, s < 0 && (s += 360), s;
}
function xr(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let s = e[0], o = e[1], i = t[0], l = t[1], h = n[0], u = n[1], a = Zt(s, o, i, l, h, u);
  return r && (a = -a), a = Jt(a), a;
}
function Or(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], o = e[1], i = t[0], l = t[1], h = n[0], u = n[1], a = r[0], f = r[1], p = _r(s, o, i, l, h, u, a, f);
  return p = Jt(p), p;
}
function Lr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], o = e[1], i = t[0], l = t[1], h = n[0], u = n[1], a = r[0], f = r[1];
  const p = s - a, b = o - f, y = i - a, g = l - f, R = h - a, x = u - f, j = p * p + b * b, U = y * y + g * g, $ = R * R + x * x;
  let tt = p * (g * $ - U * x) - b * (y * $ - U * R) + j * (y * x - g * R);
  return Jt(tt);
}
function Rr(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function On(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...On(r)) : t.push(r);
  }
  return t;
}
function $e(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    Array.isArray(s) ? n.push($e(s, t)) : n.push(t[s]);
  }
  return n;
}
function Br(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function Tr(e, t) {
  Array.isArray(t) || (t = [t]), t.forEach((r) => {
    if (r < 0 || r >= e[0].length)
      throw new Error("indexArray is illegal!");
  });
  let n = [];
  return e.forEach((r) => {
    let s = [];
    Array.isArray(t) ? t.forEach((o) => {
      s.push(r[o]);
    }) : s.push(r[t]), n.push(s);
  }), n;
}
function Cr(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
const Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjust_lon: xn,
  calculateArrayShape: Rr,
  ccw: Xe,
  ccwRobust: xr,
  concatEL2DArray: Br,
  fillIndexArray: $e,
  flattenArray: On,
  getAngle: ee,
  inCircle: Lr,
  inCircleRobust: Or,
  randomIndexArray: Cr,
  round: Ue,
  sign: Jt,
  subColumnInEL2DArray: Tr
}, Symbol.toStringTag, { value: "Module" })), Ln = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = Ln.a, Je = {
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
}, Ye = {
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
}, Ve = {
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
function Ke(e, t = "kilometers") {
  const n = Je[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function kr(e, t = "kilometers") {
  const n = Je[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Xt(e) {
  return e % 360 * Math.PI / 180;
}
function Nr(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function Rn(e, t) {
  const n = Ye[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function me(e, t) {
  const n = Ye[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Dr(e, t, n) {
  return me(Rn(e, t), n);
}
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: Ve,
  degreesToRadians: Xt,
  earthRadius: dt,
  factors: Je,
  factors2: Ye,
  lengthToRadians: kr,
  metersTo: me,
  radiansToDegrees: Nr,
  radiansToLength: Ke,
  toMeters: Rn,
  unitTounit: Dr
}, Symbol.toStringTag, { value: "Module" }));
function St(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, s = dt, o = Array.isArray(e) ? e : e.to2DArray(), i = xn(o[0]);
  let l = Xt(i), h = Xt(o[1]);
  return l = Ke(l, "meters"), h = s * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * h)), l > r && (l = r), l < -r && (l = -r), h > r && (h = r), h < -r && (h = -r), l = Ue(me(l, t), n), h = Ue(me(h, t), n), [l, h];
}
function Dt(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function Ir(e, t = "meters", n = 6) {
  if (e[0] instanceof pt) {
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
function jr(e, t = "meters", n = 6) {
  let r = [], s = St([e[0], e[1]], t, n), o = St([e[2], e[3]], t, n);
  return r = [s[0], s[1], o[0], o[1]], r;
}
function Qe(e, t = "meters", n = 6) {
  let r = [], s = Dt([e[0], e[1]]), o = Dt([e[2], e[3]]);
  return r = [s[0], s[1], o[0], o[1]], r;
}
const Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: jr,
  convertToMercator: St,
  convertToMercators: Ir,
  convertToWgs84: Dt,
  plane2MBR: Qe
}, Symbol.toStringTag, { value: "Module" }));
function Bn(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function Fr(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Tn(e) {
  let t = e[0], n = e[1], r = e[2], s = e[3];
  return [
    [t, n],
    [t, s],
    [r, s],
    [r, n],
    [t, n]
  ];
}
function Ur(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o][0], l = e[o][1];
    t = Math.min(t, i), n = Math.min(n, l), r = Math.max(r, i), s = Math.max(s, l);
  }
  return [t, n, r, s];
}
function Cn(e, t) {
  let n = t[0], r = t[1], s = t[2], o = t[3], i = e[0], l = e[1];
  return i >= n && i <= s && l >= r && l <= o;
}
class kn {
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
class pt {
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
class ge extends kn {
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
        r.push(new pt(t[s][0], t[s][1]));
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
    for (let o = 0; o < this.coordinates.length; o++) {
      let i = this.coordinates[o].to2DArray();
      t = Math.min(t, i[0]), n = Math.min(n, i[1]), r = Math.max(r, i[0]), s = Math.max(s, i[1]);
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
      let o = r, i = s;
      return new pt(o, i);
    } else {
      let n = 0, r = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        let l = this.coordinates[i].to2DArray();
        n += l[0], r += l[1];
      }
      let s = n / this.coordinates.length, o = r / this.coordinates.length;
      return new pt(s, o);
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
    let n = pt.isPoint(t) ? t : new pt(t[0], t[1]);
    this.coordinates.push(n), this.MBR = this.calculateMBR();
  }
  // 判断是否为多点类型
  static isMultiPoint(t) {
    return t.type === "MultiPoint";
  }
}
class be extends ge {
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
      let o = ee(n, r.toXY()), i = ee(n, s.toXY());
      return o < i ? -1 : o > i ? 1 : 0;
    });
  }
}
class Nn extends kn {
  constructor(t, ...n) {
    super("MultiLineString", t, ...n);
  }
  /**
   * - 计算线集合的最小外包矩形
   * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
   */
  calculateMBR() {
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
    for (let o = 0; o < this.coordinates.length; o++) {
      let i = this.coordinates[o].getMBR();
      t = Math.min(t, i[0]), n = Math.min(n, i[1]), r = Math.max(r, i[2]), s = Math.max(s, i[3]);
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
class Dn extends Nn {
  constructor(t, ...n) {
    super(t, ...n), this.type = "Polygon";
  }
  static isPolygon(t) {
    return t.type === "Polygon";
  }
}
class vr {
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
    let n = Bn(t), r = Math.abs(n.x - this.x), s = Math.abs(n.y - this.y), o = this.r, i = n.w / 2, l = n.h / 2, h = Math.pow(r - i, 2) + Math.pow(s - l, 2);
    return r > o + i || s > o + l ? !1 : r <= i || s <= l ? !0 : h <= this.rSquared;
  }
}
const Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: vr,
  LineString: be,
  MultiLineString: Nn,
  MultiPoint: ge,
  Point: pt,
  Polygon: Dn,
  getPointsMBR: Ur,
  mbrToPolygon: Tn,
  mbrToRectangle: Bn,
  pointInMBR: Cn,
  rectangleToMBR: Fr
}, Symbol.toStringTag, { value: "Module" })), fn = Ln.a;
function Gr(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), s = Array.isArray(t) ? t : t.to2DArray();
  r.map((a, f) => {
    r[f] = Xt(a);
  }), s.map((a, f) => {
    s[f] = Xt(a);
  });
  const o = s[1] - r[1], i = s[0] - r[0], l = r[1], h = s[1], u = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(o / 2), 2) + Math.pow(Math.sin(i / 2), 2) * Math.cos(l) * Math.cos(h)
    )
  );
  return Ke(u, n);
}
function zr(e, t = "kilometers") {
  let n = be.isLineString(e) ? e.toXYArray() : e;
  if (n.length < 3)
    return 0;
  pt.isPoint(n[0]) && (n = n, n.map((o, i) => {
    n[i] = o.toXY();
  })), n = n;
  let r = 0, s = n.length - 1;
  for (let o = 0; o < n.length; o++)
    r += (n[s][0] + n[o][0]) * (n[s][1] - n[o][1]), s = o;
  return r = r * Ve[t] / 2, Math.abs(r);
}
function Hr(e, t = "kilometers") {
  let n = be.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  pt.isPoint(n[0]) && (n = n, n.map((i, l) => {
    n[l] = i.to2DArray();
  })), n = n;
  let r = 0, s = n.length, o = [];
  for (let i = 0; i < s; i++) {
    o.push([]);
    for (let l = 0; l < 2; l++) {
      let h = Xt(n[i][l]);
      o[i].push(h);
    }
  }
  for (let i = 0; i < s; i++) {
    let l = (i + 1) % s, h = (i + 2) % s;
    r += (o[i][0] - o[h][0]) * Math.sin(o[l][1]);
  }
  return r = r * fn * fn / 2, r = r * Ve[t], Math.abs(r);
}
const Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: zr,
  SpherePolygonArea: Hr,
  haversine: Gr
}, Symbol.toStringTag, { value: "Module" }));
function ue(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function Wr(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ve(e, t, n, r, s = St, o = Dt, i = !1) {
  s && (e = s(e), t = s(t), n = s(n), r = s(r));
  let l = [t[0] - e[0], t[1] - e[1]], h = [r[0] - n[0], r[1] - n[1]], u = ue(l, h);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let a = ue([n[0] - e[0], n[1] - e[1]], h) / u, f = ue([n[0] - e[0], n[1] - e[1]], l) / u;
  return !i && (a < 0 || a > 1 || f < 0 || f > 1) ? (console.log("交点不在两条线段上"), null) : o ? o([e[0] + l[0] * a, e[1] + l[1] * a]) : [e[0] + l[0] * a, e[1] + l[1] * a];
}
function Ze(e, t, n = !1) {
  if (n) {
    let r = St(e), s = t[0], o = t[1], i = t[2], l = t[3];
    return [s, o] = St([s, o]), [i, l] = St([i, l]), r[0] < s || r[0] > i || r[1] < o || r[1] > l;
  } else {
    let r = t[0], s = t[1], o = t[2], i = t[3];
    return e[0] < r || e[0] > o || e[1] < s || e[1] > i;
  }
}
function In(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function jn(e, t) {
  return Fn(e, Tn(t));
}
function Fn(e, t) {
  let n = e[e.length - 1], r, s, o, i = t;
  for (let l in e) {
    r = e[l];
    let h = i;
    i = [], s = h[h.length - 1];
    for (let u in h) {
      if (o = h[u], fe(o, n, r)) {
        if (!fe(s, n, r)) {
          let a = ve(
            s,
            o,
            n,
            r,
            St,
            Dt,
            !0
          );
          i.push(a);
        }
        i.push(o);
      } else if (fe(s, n, r)) {
        let a = ve(
          s,
          o,
          n,
          r,
          St,
          Dt,
          !0
        );
        i.push(a);
      }
      s = o;
    }
    n = r;
  }
  return i;
}
function qr(e, t) {
  let n = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++)
    t[r][1] > e[1] != t[s][1] > e[1] && e[0] < (t[s][0] - t[r][0]) * (e[1] - t[r][1]) / (t[s][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Xr(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    i[0] < t && (t = i[0]), i[0] > r && (r = i[0]), i[1] < n && (n = i[1]), i[1] > s && (s = i[1]);
  }
  return [t, n, r, s];
}
function $r(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function Jr(e, t) {
  return (e - 1 + t) % t;
}
function fe(e, t, n) {
  return Xe(t, n, e) > 0;
}
const ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: In,
  PointInsidePolygon: qr,
  PointOutsideMBR: Ze,
  calculateMBR: Xr,
  cross: ue,
  cutPolygonByMBR: jn,
  dot: Wr,
  intersection: ve,
  intersectionPolygon: Fn,
  iterPolygonEdge: $r,
  pointInEdge: fe,
  prePointInPolygon: Jr
}, Symbol.toStringTag, { value: "Module" })), hn = Math.pow(2, -52), ae = new Uint32Array(512);
class vt {
  static from(t, n = Un, r = vn) {
    const s = t.length, o = new Float64Array(s * 2);
    for (let i = 0; i < s; i++) {
      const l = t[i];
      o[2 * i] = n(l), o[2 * i + 1] = r(l);
    }
    return new vt(o);
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
    const { coords: t, _hullPrev: n, _hullNext: r, _hullTri: s, _hullHash: o } = this, i = t.length >> 1;
    let l = 1 / 0, h = 1 / 0, u = -1 / 0, a = -1 / 0;
    for (let B = 0; B < i; B++) {
      const G = t[2 * B], v = t[2 * B + 1];
      G < l && (l = G), v < h && (h = v), G > u && (u = G), v > a && (a = v), this._ids[B] = B;
    }
    const f = (l + u) / 2, p = (h + a) / 2;
    let b, y, g;
    for (let B = 0, G = 1 / 0; B < i; B++) {
      const v = Ce(f, p, t[2 * B], t[2 * B + 1]);
      v < G && (b = B, G = v);
    }
    const R = t[2 * b], x = t[2 * b + 1];
    for (let B = 0, G = 1 / 0; B < i; B++) {
      if (B === b)
        continue;
      const v = Ce(R, x, t[2 * B], t[2 * B + 1]);
      v < G && v > 0 && (y = B, G = v);
    }
    let j = t[2 * y], U = t[2 * y + 1], $ = 1 / 0;
    for (let B = 0; B < i; B++) {
      if (B === b || B === y)
        continue;
      const G = Kr(R, x, j, U, t[2 * B], t[2 * B + 1]);
      G < $ && (g = B, $ = G);
    }
    let tt = t[2 * g], nt = t[2 * g + 1];
    if ($ === 1 / 0) {
      for (let v = 0; v < i; v++)
        this._dists[v] = t[2 * v] - t[0] || t[2 * v + 1] - t[1];
      zt(this._ids, this._dists, 0, i - 1);
      const B = new Uint32Array(i);
      let G = 0;
      for (let v = 0, z = -1 / 0; v < i; v++) {
        const et = this._ids[v], c = this._dists[et];
        c > z && (B[G++] = et, z = c);
      }
      this.hull = B.subarray(0, G), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Zt(R, x, j, U, tt, nt) < 0) {
      const B = y, G = j, v = U;
      y = g, j = tt, U = nt, g = B, tt = G, nt = v;
    }
    const it = this.circumcenter(R, x, j, U, tt, nt);
    this._cx = it.x, this._cy = it.y;
    for (let B = 0; B < i; B++)
      this._dists[B] = Ce(t[2 * B], t[2 * B + 1], it.x, it.y);
    zt(this._ids, this._dists, 0, i - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[g] = y, r[y] = n[b] = g, r[g] = n[y] = b, s[b] = 0, s[y] = 1, s[g] = 2, o.fill(-1), o[this._hashKey(R, x)] = b, o[this._hashKey(j, U)] = y, o[this._hashKey(tt, nt)] = g, this.trianglesLen = 0, this._addTriangle(b, y, g, -1, -1, -1);
    for (let B = 0, G, v; B < this._ids.length; B++) {
      const z = this._ids[B], et = t[2 * z], c = t[2 * z + 1];
      if (B > 0 && Math.abs(et - G) <= hn && Math.abs(c - v) <= hn || (G = et, v = c, z === b || z === y || z === g))
        continue;
      let d = 0;
      for (let w = 0, P = this._hashKey(et, c); w < this._hashSize && (d = o[(P + w) % this._hashSize], !(d !== -1 && d !== r[d])); w++)
        ;
      d = n[d];
      let m = d, M;
      for (; M = r[m], Zt(et, c, t[2 * m], t[2 * m + 1], t[2 * M], t[2 * M + 1]) >= 0; )
        if (m = M, m === d) {
          m = -1;
          break;
        }
      if (m === -1)
        continue;
      let A = this._addTriangle(m, z, r[m], -1, -1, s[m]);
      s[z] = this._legalize(A + 2), s[m] = A, rt++;
      let _ = r[m];
      for (; M = r[_], Zt(et, c, t[2 * _], t[2 * _ + 1], t[2 * M], t[2 * M + 1]) < 0; )
        A = this._addTriangle(_, z, M, s[z], -1, s[_]), s[z] = this._legalize(A + 2), r[_] = _, rt--, _ = M;
      if (m === d)
        for (; M = n[m], Zt(et, c, t[2 * M], t[2 * M + 1], t[2 * m], t[2 * m + 1]) < 0; )
          A = this._addTriangle(M, z, m, -1, s[m], s[M]), this._legalize(A + 2), s[M] = A, r[m] = m, rt--, m = M;
      this._hullStart = n[z] = m, r[m] = n[_] = z, r[z] = _, o[this._hashKey(et, c)] = z, o[this._hashKey(t[2 * m], t[2 * m + 1])] = m;
    }
    this.hull = new Uint32Array(rt);
    for (let B = 0, G = this._hullStart; B < rt; B++)
      this.hull[B] = G, G = r[G];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(Yr(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: s } = this;
    let o = 0, i = 0;
    for (; ; ) {
      const l = r[t], h = t - t % 3;
      if (i = h + (t + 2) % 3, l === -1) {
        if (o === 0)
          break;
        t = ae[--o];
        continue;
      }
      const u = l - l % 3, a = h + (t + 1) % 3, f = u + (l + 2) % 3, p = n[i], b = n[t], y = n[a], g = n[f];
      if (Vr(
        s[2 * p],
        s[2 * p + 1],
        s[2 * b],
        s[2 * b + 1],
        s[2 * y],
        s[2 * y + 1],
        s[2 * g],
        s[2 * g + 1]
      )) {
        n[t] = g, n[l] = p;
        const x = r[f];
        if (x === -1) {
          let U = this._hullStart;
          do {
            if (this._hullTri[U] === f) {
              this._hullTri[U] = t;
              break;
            }
            U = this._hullPrev[U];
          } while (U !== this._hullStart);
        }
        this._link(t, x), this._link(l, r[i]), this._link(i, f);
        const j = u + (l + 1) % 3;
        o < ae.length && (ae[o++] = j);
      } else {
        if (o === 0)
          break;
        t = ae[--o];
      }
    }
    return i;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, s, o, i) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = n, this._triangles[l + 2] = r, this._link(l, s), this._link(l + 1, o), this._link(l + 2, i), this.trianglesLen += 3, l;
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
    const s = n[0] - t[0], o = n[1] - t[1], i = r[0] - t[0], l = r[1] - t[1], h = s * s + o * o, u = i * i + l * l, a = 0.5 / (s * l - o * i), f = (l * h - o * u) * a, p = (s * u - i * h) * a;
    return f * f + p * p;
  }
  circumcenter(t, n, r, s, o, i) {
    const l = r - t, h = s - n, u = o - t, a = i - n, f = l * l + h * h, p = u * u + a * a, b = 0.5 / (l * a - h * u), y = t + (a * f - h * p) * b, g = n + (l * p - u * f) * b;
    return { x: y, y: g };
  }
}
function Yr(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Ce(e, t, n, r) {
  const s = e - n, o = t - r;
  return s * s + o * o;
}
function Vr(e, t, n, r, s, o, i, l) {
  const h = e - i, u = t - l, a = n - i, f = r - l, p = s - i, b = o - l, y = h * h + u * u, g = a * a + f * f, R = p * p + b * b;
  return h * (f * R - g * b) - u * (a * R - g * p) + y * (a * b - f * p) < 0;
}
function Kr(e, t, n, r, s, o) {
  const i = n - e, l = r - t, h = s - e, u = o - t, a = i * i + l * l, f = h * h + u * u, p = 0.5 / (i * u - l * h), b = (u * a - l * f) * p, y = (i * f - h * a) * p;
  return b * b + y * y;
}
function zt(e, t, n, r) {
  if (r - n <= 20)
    for (let s = n + 1; s <= r; s++) {
      const o = e[s], i = t[o];
      let l = s - 1;
      for (; l >= n && t[e[l]] > i; )
        e[l + 1] = e[l--];
      e[l + 1] = o;
    }
  else {
    const s = n + r >> 1;
    let o = n + 1, i = r;
    Kt(e, s, o), t[e[n]] > t[e[r]] && Kt(e, n, r), t[e[o]] > t[e[r]] && Kt(e, o, r), t[e[n]] > t[e[o]] && Kt(e, n, o);
    const l = e[o], h = t[l];
    for (; ; ) {
      do
        o++;
      while (t[e[o]] < h);
      do
        i--;
      while (t[e[i]] > h);
      if (i < o)
        break;
      Kt(e, o, i);
    }
    e[n + 1] = e[i], e[i] = l, r - o + 1 >= i - n ? (zt(e, t, o, r), zt(e, t, n, i - 1)) : (zt(e, t, n, i - 1), zt(e, t, o, r));
  }
}
function Kt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Un(e) {
  return e[0];
}
function vn(e) {
  return e[1];
}
function Qr(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function Zr(e, t) {
  return Qr(t).map((n) => e.triangles[n]);
}
function ts(e) {
  return Math.floor(e / 3);
}
function es(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], s = t[0] * t[0] + t[1] * t[1], o = n[0] * n[0] + n[1] * n[1], i = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / i * (r * (t[1] - n[1]) + s * (n[1] - e[1]) + o * (e[1] - t[1])),
    1 / i * (r * (n[0] - t[0]) + s * (e[0] - n[0]) + o * (t[0] - e[0]))
  ];
}
function Gn(e, t, n, r = Dt) {
  const s = Zr(t, n).map((i) => e[i]);
  let o = es(s[0], s[1], s[2]);
  return r && (o = r(o)), o;
}
function zn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function ns(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const s = zn(r);
    r = e.halfedges[s];
  } while (r !== -1 && r !== t);
  return n;
}
function ke(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let s = 0; s < t.triangles.length; s++) {
    const o = t.triangles[zn(s)];
    if (!r.has(o)) {
      r.add(o);
      const h = ns(t, s).map(ts).map((u) => Gn(e, t, u));
      n(o, h);
    }
  }
}
class rs {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Un, r = vn) {
    Z(this, "delaunay");
    // Delaunay triangulation
    Z(this, "points");
    t instanceof vt ? (this.delaunay = t, this.points = t.getPoints()) : (this.points = t, this.delaunay = vt.from(t, n, r));
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points: t, delaunay: n } = this, r = /* @__PURE__ */ new Map();
    return ke(t, n, (s, o) => r.set(s, o)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return ke(n, r, (o, i) => {
      this.isInsideMBR(i, t) || (i = jn(i, t)), s.set(o, i);
    }), s;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return ke(n, r, (o, i) => {
      this.isInsideMBR(i, t) && s.set(o, i);
    }), s;
  }
  isInsideMBR(t, n) {
    const [r, s, o, i] = n;
    for (let l = 0; l < t.length; l++) {
      const [h, u] = t[l];
      if (h < r || h > o || u < s || u > i)
        return !1;
    }
    return !0;
  }
}
function ss(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, s] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, s);
  return n;
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: vt,
  Voronoi: rs,
  complateMap: ss,
  triangleCenter: Gn
}, Symbol.toStringTag, { value: "Module" }));
function os(e) {
  const t = e.map((o, i) => [...o.toXY(), i]);
  let n = t[0];
  for (let o = 1; o < t.length; o++)
    t[o][1] < n[1] && (n = t[o]);
  t.sort((o, i) => {
    let l = ee([n[0], n[1]], [o[0], o[1]]), h = ee([n[0], n[1]], [i[0], i[1]]);
    if (l < h)
      return -1;
    if (l > h)
      return 1;
    {
      let u = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2), a = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2);
      return u < a ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let o = 2; o < t.length; o++) {
    for (; r.length > 1 && Xe([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[o][0], t[o][1]]) <= 0; )
      r.pop();
    r.push(t[o]);
  }
  let s = [];
  for (let o = 0; o < r.length; o++) {
    let i = r[o][2];
    s.push(e[i]);
  }
  return s;
}
function is(e, t) {
  let n = e.map((i) => i.toXY());
  return vt.from(n).getTriangleIndices().filter((i) => {
    let l = [n[i[0]], n[i[1]], n[i[2]]];
    return vt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: is,
  convexHull: os
}, Symbol.toStringTag, { value: "Module" }));
function Hn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ls } = Object.prototype, { getPrototypeOf: tn } = Object, Me = ((e) => (t) => {
  const n = ls.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ot = (e) => (e = e.toLowerCase(), (t) => Me(t) === e), Se = (e) => (t) => typeof t === e, { isArray: Yt } = Array, ne = Se("undefined");
function as(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && At(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Wn = Ot("ArrayBuffer");
function cs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Wn(e.buffer), t;
}
const us = Se("string"), At = Se("function"), qn = Se("number"), Ae = (e) => e !== null && typeof e == "object", fs = (e) => e === !0 || e === !1, he = (e) => {
  if (Me(e) !== "object")
    return !1;
  const t = tn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, hs = Ot("Date"), ds = Ot("File"), ps = Ot("Blob"), ys = Ot("FileList"), ms = (e) => Ae(e) && At(e.pipe), ws = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || At(e.append) && ((t = Me(e)) === "formdata" || // detect form-data instance
  t === "object" && At(e.toString) && e.toString() === "[object FormData]"));
}, gs = Ot("URLSearchParams"), bs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Yt(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Xn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const $n = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Jn = (e) => !ne(e) && e !== $n;
function Ge() {
  const { caseless: e } = Jn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Xn(t, s) || s;
    he(t[o]) && he(r) ? t[o] = Ge(t[o], r) : he(r) ? t[o] = Ge({}, r) : Yt(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && re(arguments[r], n);
  return t;
}
const Ms = (e, t, n, { allOwnKeys: r } = {}) => (re(t, (s, o) => {
  n && At(s) ? e[o] = Hn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ss = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), As = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Es = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && tn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ps = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, _s = (e) => {
  if (!e)
    return null;
  if (Yt(e))
    return e;
  let t = e.length;
  if (!qn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, xs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tn(Uint8Array)), Os = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ls = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Rs = Ot("HTMLFormElement"), Bs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), dn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ts = Ot("RegExp"), Yn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  re(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Cs = (e) => {
  Yn(e, (t, n) => {
    if (At(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (At(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ks = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Yt(e) ? r(e) : r(String(e).split(t)), n;
}, Ns = () => {
}, Ds = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ne = "abcdefghijklmnopqrstuvwxyz", pn = "0123456789", Vn = {
  DIGIT: pn,
  ALPHA: Ne,
  ALPHA_DIGIT: Ne + Ne.toUpperCase() + pn
}, Is = (e = 16, t = Vn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function js(e) {
  return !!(e && At(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Fs = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Yt(r) ? [] : {};
        return re(r, (i, l) => {
          const h = n(i, s + 1);
          !ne(h) && (o[l] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Us = Ot("AsyncFunction"), vs = (e) => e && (Ae(e) || At(e)) && At(e.then) && At(e.catch), S = {
  isArray: Yt,
  isArrayBuffer: Wn,
  isBuffer: as,
  isFormData: ws,
  isArrayBufferView: cs,
  isString: us,
  isNumber: qn,
  isBoolean: fs,
  isObject: Ae,
  isPlainObject: he,
  isUndefined: ne,
  isDate: hs,
  isFile: ds,
  isBlob: ps,
  isRegExp: Ts,
  isFunction: At,
  isStream: ms,
  isURLSearchParams: gs,
  isTypedArray: xs,
  isFileList: ys,
  forEach: re,
  merge: Ge,
  extend: Ms,
  trim: bs,
  stripBOM: Ss,
  inherits: As,
  toFlatObject: Es,
  kindOf: Me,
  kindOfTest: Ot,
  endsWith: Ps,
  toArray: _s,
  forEachEntry: Os,
  matchAll: Ls,
  isHTMLForm: Rs,
  hasOwnProperty: dn,
  hasOwnProp: dn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Yn,
  freezeMethods: Cs,
  toObjectSet: ks,
  toCamelCase: Bs,
  noop: Ns,
  toFiniteNumber: Ds,
  findKey: Xn,
  global: $n,
  isContextDefined: Jn,
  ALPHABET: Vn,
  generateString: Is,
  isSpecCompliantForm: js,
  toJSONObject: Fs,
  isAsyncFn: Us,
  isThenable: vs
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
const Kn = Q.prototype, Qn = {};
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
  Qn[e] = { value: e };
});
Object.defineProperties(Q, Qn);
Object.defineProperty(Kn, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, s, o) => {
  const i = Object.create(Kn);
  return S.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Q.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Gs = null;
function ze(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Zn(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yn(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Zn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function zs(e) {
  return S.isArray(e) && !e.some(ze);
}
const Hs = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ee(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, R) {
    return !S.isUndefined(R[g]);
  });
  const r = n.metaTokens, s = n.visitor || a, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null)
      return "";
    if (S.isDate(y))
      return y.toISOString();
    if (!h && S.isBlob(y))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(y) || S.isTypedArray(y) ? h && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function a(y, g, R) {
    let x = y;
    if (y && !R && typeof y == "object") {
      if (S.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), y = JSON.stringify(y);
      else if (S.isArray(y) && zs(y) || (S.isFileList(y) || S.endsWith(g, "[]")) && (x = S.toArray(y)))
        return g = Zn(g), x.forEach(function(U, $) {
          !(S.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? yn([g], $, o) : i === null ? g : g + "[]",
            u(U)
          );
        }), !1;
    }
    return ze(y) ? !0 : (t.append(yn(R, g, o), u(y)), !1);
  }
  const f = [], p = Object.assign(Hs, {
    defaultVisitor: a,
    convertValue: u,
    isVisitable: ze
  });
  function b(y, g) {
    if (!S.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(y), S.forEach(y, function(x, j) {
        (!(S.isUndefined(x) || x === null) && s.call(
          t,
          x,
          S.isString(j) ? j.trim() : j,
          g,
          p
        )) === !0 && b(x, g ? g.concat(j) : [j]);
      }), f.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function mn(e) {
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
function en(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const tr = en.prototype;
tr.append = function(t, n) {
  this._pairs.push([t, n]);
};
tr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, mn);
  } : mn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ws(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function er(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ws, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = S.isURLSearchParams(t) ? t.toString() : new en(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class qs {
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
const wn = qs, nr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xs = typeof URLSearchParams < "u" ? URLSearchParams : en, $s = typeof FormData < "u" ? FormData : null, Js = typeof Blob < "u" ? Blob : null, Ys = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Vs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xs,
    FormData: $s,
    Blob: Js
  },
  isStandardBrowserEnv: Ys,
  isStandardBrowserWebWorkerEnv: Vs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ks(e, t) {
  return Ee(e, new xt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return xt.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Qs(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function rr(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const l = Number.isFinite(+i), h = o >= n.length;
    return i = !i && S.isArray(s) ? s.length : i, h ? (S.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !S.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && S.isArray(s[i]) && (s[i] = Zs(s[i])), !l);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, s) => {
      t(Qs(r), s, n, 0);
    }), n;
  }
  return null;
}
function to(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const nn = {
  transitional: nr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = S.isObject(t);
    if (o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return s && s ? JSON.stringify(rr(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ks(t, this.formSerializer).toString();
      if ((l = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Ee(
          l ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), to(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || nn.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && S.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
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
    FormData: xt.classes.FormData,
    Blob: xt.classes.Blob
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
  nn.headers[e] = {};
});
const rn = nn, eo = S.toObjectSet([
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
]), no = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && eo[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, gn = Symbol("internals");
function Qt(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(de) : String(e);
}
function ro(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const so = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function De(e, t, n, r, s) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function oo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function io(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class Pe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, h, u) {
      const a = Qt(h);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const f = S.findKey(s, a);
      (!f || s[f] === void 0 || u === !0 || u === void 0 && s[f] !== !1) && (s[f || h] = de(l));
    }
    const i = (l, h) => S.forEach(l, (u, a) => o(u, a, h));
    return S.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : S.isString(t) && (t = t.trim()) && !so(t) ? i(no(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Qt(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ro(s);
        if (S.isFunction(n))
          return n.call(this, s, r);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Qt(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || De(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Qt(i), i) {
        const l = S.findKey(r, i);
        l && (!n || De(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || De(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (s, o) => {
      const i = S.findKey(r, o);
      if (i) {
        n[i] = de(s), delete n[o];
        return;
      }
      const l = t ? oo(o) : String(o).trim();
      l !== o && delete n[o], n[l] = de(s), r[l] = !0;
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
    const r = (this[gn] = this[gn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = Qt(i);
      r[l] || (io(s, i), r[l] = !0);
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(Pe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(Pe);
const Rt = Pe;
function Ie(e, t) {
  const n = this || rn, r = t || n, s = Rt.from(r.headers);
  let o = r.data;
  return S.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function sr(e) {
  return !!(e && e.__CANCEL__);
}
function se(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
S.inherits(se, Q, {
  __CANCEL__: !0
});
function lo(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Q(
    "Request failed with status code " + n.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ao = xt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, l) {
        const h = [];
        h.push(n + "=" + encodeURIComponent(r)), S.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()), S.isString(o) && h.push("path=" + o), S.isString(i) && h.push("domain=" + i), l === !0 && h.push("secure"), document.cookie = h.join("; ");
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
function co(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uo(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function or(e, t) {
  return e && !co(t) ? uo(e, t) : t;
}
const fo = xt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
    return r = s(window.location.href), function(i) {
      const l = S.isString(i) ? s(i) : i;
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
function ho(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function po(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const u = Date.now(), a = r[o];
    i || (i = u), n[s] = h, r[s] = u;
    let f = o, p = 0;
    for (; f !== s; )
      p += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const b = a && u - a;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function bn(e, t) {
  let n = 0;
  const r = po(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, l = o - n, h = r(l), u = o <= i;
    n = o;
    const a = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: h || void 0,
      estimated: h && i && u ? (i - o) / h : void 0,
      event: s
    };
    a[t ? "download" : "upload"] = !0, e(a);
  };
}
const yo = typeof XMLHttpRequest < "u", mo = yo && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = Rt.from(e.headers).normalize(), i = e.responseType;
    let l;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    S.isFormData(s) && (xt.isStandardBrowserEnv || xt.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? S.isString(u = o.getContentType()) && o.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const f = or(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), er(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function p() {
      if (!a)
        return;
      const y = Rt.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), R = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: y,
        config: e,
        request: a
      };
      lo(function(j) {
        n(j), h();
      }, function(j) {
        r(j), h();
      }, R), a = null;
    }
    if ("onloadend" in a ? a.onloadend = p : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, a.onabort = function() {
      a && (r(new Q("Request aborted", Q.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const R = e.transitional || nr;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Q(
        g,
        R.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        a
      )), a = null;
    }, xt.isStandardBrowserEnv) {
      const y = fo(f) && e.xsrfCookieName && ao.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in a && S.forEach(o.toJSON(), function(g, R) {
      a.setRequestHeader(R, g);
    }), S.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", bn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", bn(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (y) => {
      a && (r(!y || y.type ? new se(null, e, a) : y), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const b = ho(f);
    if (b && xt.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(s || null);
  });
}, He = {
  http: Gs,
  xhr: mo
};
S.forEach(He, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mn = (e) => `- ${e}`, wo = (e) => S.isFunction(e) || e === null || e === !1, ir = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !wo(n) && (r = He[(i = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, h]) => `adapter ${l} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Mn).join(`
`) : " " + Mn(o[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: He
};
function je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new se(null, e);
}
function Sn(e) {
  return je(e), e.headers = Rt.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ir.getAdapter(e.adapter || rn.adapter)(e).then(function(r) {
    return je(e), r.data = Ie.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return sr(r) || (je(e), r && r.response && (r.response.data = Ie.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const An = (e) => e instanceof Rt ? e.toJSON() : e;
function $t(e, t) {
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
  function o(u, a) {
    if (!S.isUndefined(a))
      return r(void 0, a);
  }
  function i(u, a) {
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
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, a) => s(An(u), An(a), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, e, t)), function(a) {
    const f = h[a] || s, p = f(e[a], t[a], a);
    S.isUndefined(p) && f !== l || (n[a] = p);
  }), n;
}
const lr = "1.6.0", sn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const En = {};
sn.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + lr + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new Q(
        s(i, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !En[i] && (En[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function go(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], h = l === void 0 || i(l, o, e);
      if (h !== !0)
        throw new Q("option " + o + " must be " + h, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + o, Q.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: go,
  validators: sn
}, Nt = We.validators;
class we {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new wn(),
      response: new wn()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $t(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && We.assertOptions(r, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : We.assertOptions(s, {
      encode: Nt.function,
      serialize: Nt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && S.merge(
      o.common,
      o[n.method]
    );
    o && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), n.headers = Rt.concat(i, o);
    const l = [];
    let h = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (h = h && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let a, f = 0, p;
    if (!h) {
      const y = [Sn.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, u), p = y.length, a = Promise.resolve(n); f < p; )
        a = a.then(y[f++], y[f++]);
      return a;
    }
    p = l.length;
    let b = n;
    for (f = 0; f < p; ) {
      const y = l[f++], g = l[f++];
      try {
        b = y(b);
      } catch (R) {
        g.call(this, R);
        break;
      }
    }
    try {
      a = Sn.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, p = u.length; f < p; )
      a = a.then(u[f++], u[f++]);
    return a;
  }
  getUri(t) {
    t = $t(this.defaults, t);
    const n = or(t.baseURL, t.url);
    return er(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(n, r) {
    return this.request($t(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request($t(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  we.prototype[t] = n(), we.prototype[t + "Form"] = n(!0);
});
const pe = we;
class on {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new se(o, i, l), n(r.reason));
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
      token: new on(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const bo = on;
function Mo(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function So(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const qe = {
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
Object.entries(qe).forEach(([e, t]) => {
  qe[t] = e;
});
const Ao = qe;
function ar(e) {
  const t = new pe(e), n = Hn(pe.prototype.request, t);
  return S.extend(n, pe.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ar($t(e, s));
  }, n;
}
const ut = ar(rn);
ut.Axios = pe;
ut.CanceledError = se;
ut.CancelToken = bo;
ut.isCancel = sr;
ut.VERSION = lr;
ut.toFormData = Ee;
ut.AxiosError = Q;
ut.Cancel = ut.CanceledError;
ut.all = function(t) {
  return Promise.all(t);
};
ut.spread = Mo;
ut.isAxiosError = So;
ut.mergeConfig = $t;
ut.AxiosHeaders = Rt;
ut.formToJSON = (e) => rr(S.isHTMLForm(e) ? new FormData(e) : e);
ut.getAdapter = ir.getAdapter;
ut.HttpStatusCode = Ao;
ut.default = ut;
const Eo = ut;
function cr(e) {
  if (e.length === 2)
    return new pt(e[0], e[1]);
  if (e.length === 3)
    return new pt(e[0], e[1], e[2]);
  if (e.length > 4)
    return new pt(e[0], e[1], e[2], ...e.slice(3));
  throw new Error("Error: the length of array is not correct");
}
function ur(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] == null)
      continue;
    let r = cr(e[n]);
    t.push(r);
  }
  return t;
}
function Po(e) {
  let t = ur(e);
  return new ge(t);
}
function _o(e) {
  return Eo.get(e);
}
function xo(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(n.geometry.coordinates);
  }), t;
}
function Oo(e) {
  let t = e, n = [];
  for (let r = 0; r < t.length; r++) {
    let s;
    for (let o = 0; o < t[r].length; o++)
      s = t[r][o];
    n.push(s);
  }
  return n;
}
const ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: xo,
  GeoPolygons2SimpleArr: Oo,
  createMultiPointFromArr: Po,
  createPointListFromArr: ur,
  cretePointFromArr: cr,
  readDataFromGeoJSON: _o
}, Symbol.toStringTag, { value: "Module" }));
class Lo {
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
    let r = t[0], s = t[1], o = t[2], i = t[3], l = [];
    for (let h of n) {
      let u = [];
      for (let a = r; a <= o; a++) {
        let f = [];
        for (let p = s; p <= i; p++)
          f.push(this.data[h][a][p]);
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
    let n = t[0], r = t[1], s = t[2], o = t[3], i = this.getGridCoord([n, r]), l = this.getGridCoord([s, o]);
    if (i === null || l === null)
      return null;
    {
      let h = i[0], u = i[1], a = l[0], f = l[1];
      return [h, u, a, f];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (Ze(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], s = this.MBR[0], o = this.MBR[1], i = this.MBR[2], l = this.MBR[3], h = Math.floor((r - o) / (l - o) * this.rows), u = Math.floor((n - s) / (i - s) * this.cols);
      return [h, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], s = this.MBR[0], o = this.MBR[1], i = this.MBR[2], l = this.MBR[3], h = (r + 0.5) / this.cols * (i - s) + s, u = (n + 0.5) / this.rows * (l - o) + o;
    return [h, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], s = n[0][0], o = 0;
    for (let l = 0; l < this.rows; l++)
      for (let h = 0; h < this.cols; h++) {
        let u = n[l][h];
        u > r && (r = u), u < s && (s = u), o += u;
      }
    let i = o / (this.rows * this.cols);
    return {
      max: r,
      min: s,
      mean: i
    };
  }
}
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: Lo
}, Symbol.toStringTag, { value: "Module" }));
class Ht {
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
    return Ze(t, this.boundary) ? !1 : this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0);
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, s = this.boundary[3] - n, o = new Ht([t, n + s / 2, t + r / 2, n + s], this.capacity), i = new Ht([t + r / 2, n + s / 2, t + r, n + s], this.capacity), l = new Ht([t, n, t + r / 2, n + s / 2], this.capacity), h = new Ht([t + r / 2, n, t + r, n + s / 2], this.capacity);
    this.northWest = o, this.northEast = i, this.southWest = l, this.southEast = h, this.isDivided = !0, this.depth++;
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
    if (!In(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      Cn(this.points[r], t) && n.push(this.points[r]);
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
const oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: Ht
}, Symbol.toStringTag, { value: "Module" }));
function Fe(e, t, n) {
  return (t - e) * n + e;
}
function Ro(e, t) {
  let s = e, o = t;
  s *= 3284157443, o ^= s << 128 | s >> 256 - 128, o *= 1911520717, s ^= o << 128 | o >> 256 - 128, s *= 2048419325;
  const i = s * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(i),
    y: Math.sin(i)
  };
}
function ce(e, t, n, r) {
  const s = Ro(e, t), o = n - e, i = r - t;
  return o * s.x + i * s.y;
}
function Bo(e, t) {
  const n = Math.floor(e), r = n + 1, s = Math.floor(t), o = s + 1, i = e - n, l = t - s, h = ce(n, s, e, t), u = ce(r, s, e, t), a = Fe(h, u, i), f = ce(n, o, e, t), p = ce(r, o, e, t), b = Fe(f, p, i);
  return Fe(a, b, l);
}
const ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: Bo
}, Symbol.toStringTag, { value: "Module" }));
function To(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function fr(e, t, n = To) {
  let r = n(t, e), s = Math.floor(r * 255);
  return `rgb(${s},${s},${s})`;
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  simpleColorBand: fr
}, Symbol.toStringTag, { value: "Module" }));
function Co(e, t, n, r, s = fr) {
  let o = n.w / t[0].length, i = n.h / t.length, l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let h = 0; h < t.length; h++)
    for (let u = 0; u < t[0].length; u++) {
      let a = t[h][u], f = s(r, a);
      l.fillStyle = f, l.fillRect(n.x + u * o, n.y + h * i, o, i);
    }
  l.fillStyle = "red", l.fillRect(n.x + n.w / 2 - 2, n.y + n.h / 2 - 2, 4, 4);
}
const ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drawGrid2d: Co
}, Symbol.toStringTag, { value: "Module" }));
function ko(e, t, n) {
  return new BMapGL.Icon(e, new BMapGL.Size(t[0], t[1]), {
    offset: new BMapGL.Size(n[0], n[1])
  });
}
const No = ["Pink.svg", "Blue.svg", "Yellow.svg", "Green.svg"];
function ye(e, t = No) {
  let n = t[e];
  return new BMapGL.Icon(n, new BMapGL.Size(11, 11), {
    offset: new BMapGL.Size(5, 5)
  });
}
function qt(e, t, n) {
  if (n) {
    let r = pt.isPoint(e) ? new BMapGL.Point(e.lon, e.lat) : new BMapGL.Point(e[0], e[1]), s = new BMapGL.Marker(r, { icon: n });
    t.addOverlay(s);
  } else {
    let r = pt.isPoint(e) ? new BMapGL.Point(e.lon, e.lat) : new BMapGL.Point(e[0], e[1]), s = new BMapGL.Marker(r);
    t.addOverlay(s);
  }
}
function hr(e, t, n) {
  let r = pt.isPoint(e) ? new BMapGL.Point(e.lon, e.lat) : new BMapGL.Point(e[0], e[1]), s = new BMapGL.Label(t, {
    // 创建文本标注
    position: r,
    // 设置标注的地理位置
    offset: new BMapGL.Size(5, 5)
    // 设置标注的偏移量
  });
  return s.setStyle({
    // borderRadius: '50px',
    // borderColor: '#ccc',
    // padding: '10px',
    fontSize: "10px",
    height: "20px",
    lineHeight: "20px",
    fontFamily: "微软雅黑"
  }), n.addOverlay(s), s;
}
function Do(e) {
  e.clearOverlays();
}
function Io(e, t, n) {
  let r = ge.isMultiPoint(e) ? e.coordinates : e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    qt(o, t, n);
  }
}
function ln(e, t, n = { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let r = new BMapGL.Point(e[0], e[1]), s = new BMapGL.Point(e[2], e[3]), o = new BMapGL.Polygon([
    r,
    new BMapGL.Point(s.lng, r.lat),
    s,
    new BMapGL.Point(r.lng, s.lat)
  ], n);
  t.addOverlay(o);
}
function It(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, r = !1) {
  let s = be.isLineString(e) ? e.toArray() : e, o = [];
  for (let l = 0; l < s.length; l++)
    o.push(new BMapGL.Point(s[l][0], s[l][1]));
  r && o.push(new BMapGL.Point(s[0][0], s[0][1]));
  let i = new BMapGL.Polyline(o, n);
  t.addOverlay(i);
}
function jo(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let r = e.coordinates;
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    It(o, t, n);
  }
}
function dr(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let r = Dn.isPolygon(e) ? e.toArray() : e, s = [];
  for (let i = 0; i < r.length; i++) {
    let l = [];
    for (let h = 0; h < r[i].length; h++)
      l.push(new BMapGL.Point(r[i][h][0], r[i][h][1]));
    s.push(l);
  }
  let o = new BMapGL.Polygon(s, n);
  t.addOverlay(o);
}
function Fo(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    dr([s], t, n);
  }
}
function Uo(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  for (let r = 0; r < e.length; r++) {
    let s = [];
    for (let i = 0; i < e[r].length; i++)
      s.push(new BMapGL.Point(e[r][i][0], e[r][i][1]));
    s.push(new BMapGL.Point(e[r][0][0], e[r][0][1]));
    let o = new BMapGL.Polyline(s, n);
    t.addOverlay(o);
  }
}
function vo(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, r = !1) {
  for (let [, s] of e)
    It(s, t, n, r);
}
function Go(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let r = [];
  for (let o = 0; o < e.length; o++)
    r.push(new BMapGL.Point(e[o][0], e[o][1]));
  let s = new BMapGL.Polygon(r, n);
  t.addOverlay(s);
}
function zo(e, t, n, r, s = ye(0), o = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, i = { strokeColor: "yellow", strokeWeight: 5, strokeOpacity: 0.5 }) {
  for (let l = 0; l < e.length; l++)
    l === n[0] || l === n[n.length - 1] || qt(e[l], r, s);
  for (let l = 0; l < t.length; l++) {
    let h = t[l], u = e[h[0]], a = e[h[1]];
    It([u, a], r, o);
  }
  if (n.length > 0) {
    let l = $e(n, e);
    It(l, r, i, !1), qt(l[0], r, ye(4)), qt(l[l.length - 1], r, ye(2));
  }
}
function Ho(e, t, n) {
  var r = new BMapGL.Point(e[0], e[1]), s = new BMapGL.Point(e[2], e[3]), o = new BMapGL.Bounds(
    new BMapGL.Point(r.lng, s.lat),
    new BMapGL.Point(s.lng, r.lat)
  ), i = new BMapGL.GroundOverlay(o, {
    type: "canvas",
    url: t(),
    opacity: 0.8
  });
  n.addOverlay(i);
}
function Wo(e, t, n, r, s = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, o = !1) {
  let i = e[0], l = e[1], h = e[2], u = e[3], a = (h - i) / n;
  for (let p = 0; p < n + 1; p++) {
    let b = i + p * a;
    It([
      [b, l],
      [b, u]
    ], r, s);
  }
  let f = (u - l) / t;
  for (let p = 0; p < t + 1; p++) {
    let b = l + p * f;
    It([
      [i, b],
      [h, b]
    ], r, s);
  }
  if (ln(e, r), o) {
    let p = 10;
    for (let b = 0; b < t; b += p) {
      let y = l + (b + 0.5) * f;
      for (let g = 0; g < n; g += p) {
        let x = [i + (g + 0.5) * a, y];
        hr(x, `(${b},${g})`, r);
      }
    }
  }
}
function te(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.4 }, r = !1) {
  let s = r ? e.boundary : Qe(e.boundary), o = s[0], i = s[1], l = s[2], h = s[3];
  It([
    [o, i],
    [l, i],
    [l, h],
    [o, h],
    [o, i]
  ], t, n), e.northWest && te(e.northWest, t, n), e.northEast && te(e.northEast, t, n), e.southWest && te(e.southWest, t, n), e.southEast && te(e.southEast, t, n);
}
function qo(e, t, n, r = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let s = pt.isPoint(e) ? new BMapGL.Point(e.lon, e.lat) : new BMapGL.Point(e[0], e[1]), o = new BMapGL.Circle(s, t, r);
  n.addOverlay(o);
}
function pr(e, t, n) {
  let r = Dt(e);
  qt(r, t, n);
}
function Xo(e, t, n) {
  for (let r = 0; r < e.length; r++)
    pr(e[r], t, n);
}
function $o(e, t, n = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
  let r = Qe(e);
  ln(r, t, n);
}
const ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createIcon: ko,
  drawCircle2BLMap: qo,
  drawEdgeMap2BLMap: vo,
  drawGridLines2BLMap: Wo,
  drawLabel: hr,
  drawLineString2BLMap: It,
  drawMultiLineString2BLMap: jo,
  drawMultiPoint2BLMap: Io,
  drawPlaneMBR2BLMap: $o,
  drawPlaneMPS2BLMap: Xo,
  drawPlanePoint2BLMap: pr,
  drawPoint2BLMap: qt,
  drawPolygon2BLMap: dr,
  drawPolygonArray2BLMap: Fo,
  drawQuadTree2BLMap: te,
  drawRaster2BLMap: Ho,
  drawRectangle2BLMap: ln,
  drawRoad2Map: zo,
  drawSimplePolygon2Map: Go,
  drawTriangleEdge2BLMap: Uo,
  innerIcon: ye,
  removeAllOverlay: Do
}, Symbol.toStringTag, { value: "Module" }));
export {
  ci as BMAPDraw,
  ti as CGUtils,
  li as Colors,
  si as Coverage,
  ei as Delaunay,
  Qo as Geometry,
  Zo as Measuration,
  ri as Meta,
  ii as Noise,
  oi as QuadTree,
  Ko as Reference,
  ai as Renderer,
  ni as Shell,
  Vo as Unit,
  Yo as Utils
};
