var Ur = Object.defineProperty;
var qr = (e, t, n) => t in e ? Ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (qr(e, typeof t != "symbol" ? t + "" : t, n), n);
const mt = 11102230246251565e-32, R = 134217729, Dn = (3 + 8 * mt) * mt;
function ut(e, t, n, r, o) {
  let i, s, l, a, u = t[0], c = r[0], h = 0, d = 0;
  c > u == c > -u ? (i = u, u = t[++h]) : (i = c, c = r[++d]);
  let b = 0;
  if (h < e && d < n)
    for (c > u == c > -u ? (s = u + i, l = i - (s - u), u = t[++h]) : (s = c + i, l = i - (s - c), c = r[++d]), i = s, l !== 0 && (o[b++] = l); h < e && d < n; )
      c > u == c > -u ? (s = i + u, a = s - i, l = i - (s - a) + (u - a), u = t[++h]) : (s = i + c, a = s - i, l = i - (s - a) + (c - a), c = r[++d]), i = s, l !== 0 && (o[b++] = l);
  for (; h < e; )
    s = i + u, a = s - i, l = i - (s - a) + (u - a), u = t[++h], i = s, l !== 0 && (o[b++] = l);
  for (; d < n; )
    s = i + c, a = s - i, l = i - (s - a) + (c - a), c = r[++d], i = s, l !== 0 && (o[b++] = l);
  return (i !== 0 || b === 0) && (o[b++] = i), b;
}
function bt(e, t, n, r, o, i, s, l) {
  return ut(ut(e, t, n, r, s), s, o, i, l);
}
function M(e, t, n, r) {
  let o, i, s, l, a, u, c, h, d, b, y;
  c = R * n, b = c - (c - n), y = n - b;
  let g = t[0];
  o = g * n, c = R * g, h = c - (c - g), d = g - h, s = d * y - (o - h * b - d * b - h * y);
  let O = 0;
  s !== 0 && (r[O++] = s);
  for (let _ = 1; _ < e; _++)
    g = t[_], l = g * n, c = R * g, h = c - (c - g), d = g - h, a = d * y - (l - h * b - d * b - h * y), i = o + a, u = i - o, s = o - (i - u) + (a - u), s !== 0 && (r[O++] = s), o = l + i, s = i - (o - l), s !== 0 && (r[O++] = s);
  return (o !== 0 || O === 0) && (r[O++] = o), O;
}
function In(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function V(e) {
  return new Float64Array(e);
}
const zr = (3 + 16 * mt) * mt, Hr = (2 + 12 * mt) * mt, Yr = (9 + 64 * mt) * mt * mt, Ut = V(4), hn = V(8), fn = V(12), dn = V(16), yt = V(4);
function Wr(e, t, n, r, o, i, s) {
  let l, a, u, c, h, d, b, y, g, O, _, I, v, J, tt, nt, st, rt;
  const C = e - o, q = n - o, U = t - i, z = r - i;
  J = C * z, d = R * C, b = d - (d - C), y = C - b, d = R * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * q, d = R * U, b = d - (d - U), y = U - b, d = R * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, h = tt - _, Ut[0] = tt - (_ + h) + (h - st), I = J + _, h = I - J, v = J - (I - h) + (_ - h), _ = v - nt, h = v - _, Ut[1] = v - (_ + h) + (h - nt), rt = I + _, h = rt - I, Ut[2] = I - (rt - h) + (_ - h), Ut[3] = rt;
  let et = In(4, Ut), f = Hr * s;
  if (et >= f || -et >= f || (h = e - C, l = e - (C + h) + (h - o), h = n - q, u = n - (q + h) + (h - o), h = t - U, a = t - (U + h) + (h - i), h = r - z, c = r - (z + h) + (h - i), l === 0 && a === 0 && u === 0 && c === 0) || (f = Yr * s + Dn * Math.abs(et), et += C * c + z * l - (U * u + q * a), et >= f || -et >= f))
    return et;
  J = l * z, d = R * l, b = d - (d - l), y = l - b, d = R * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = a * q, d = R * a, b = d - (d - a), y = a - b, d = R * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, h = tt - _, yt[0] = tt - (_ + h) + (h - st), I = J + _, h = I - J, v = J - (I - h) + (_ - h), _ = v - nt, h = v - _, yt[1] = v - (_ + h) + (h - nt), rt = I + _, h = rt - I, yt[2] = I - (rt - h) + (_ - h), yt[3] = rt;
  const m = ut(4, Ut, 4, yt, hn);
  J = C * c, d = R * C, b = d - (d - C), y = C - b, d = R * c, g = d - (d - c), O = c - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * u, d = R * U, b = d - (d - U), y = U - b, d = R * u, g = d - (d - u), O = u - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, h = tt - _, yt[0] = tt - (_ + h) + (h - st), I = J + _, h = I - J, v = J - (I - h) + (_ - h), _ = v - nt, h = v - _, yt[1] = v - (_ + h) + (h - nt), rt = I + _, h = rt - I, yt[2] = I - (rt - h) + (_ - h), yt[3] = rt;
  const p = ut(m, hn, 4, yt, fn);
  J = l * c, d = R * l, b = d - (d - l), y = l - b, d = R * c, g = d - (d - c), O = c - g, tt = y * O - (J - b * g - y * g - b * O), nt = a * u, d = R * a, b = d - (d - a), y = a - b, d = R * u, g = d - (d - u), O = u - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, h = tt - _, yt[0] = tt - (_ + h) + (h - st), I = J + _, h = I - J, v = J - (I - h) + (_ - h), _ = v - nt, h = v - _, yt[1] = v - (_ + h) + (h - nt), rt = I + _, h = rt - I, yt[2] = I - (rt - h) + (_ - h), yt[3] = rt;
  const A = ut(p, fn, 4, yt, dn);
  return dn[A - 1];
}
function Qt(e, t, n, r, o, i) {
  const s = (t - i) * (n - o), l = (e - o) * (r - i), a = s - l, u = Math.abs(s + l);
  return Math.abs(a) >= zr * u ? a : -Wr(e, t, n, r, o, i, u);
}
const $r = (10 + 96 * mt) * mt, Jr = (4 + 48 * mt) * mt, Vr = (44 + 576 * mt) * mt * mt, Ct = V(4), kt = V(4), Lt = V(4), Mt = V(4), Et = V(4), Tt = V(4), pt = V(4), wt = V(4), _e = V(8), Pe = V(8), Re = V(8), Oe = V(8), Ce = V(8), ke = V(8), se = V(8), le = V(8), ae = V(8), Bt = V(4), Dt = V(4), It = V(4), k = V(8), D = V(16), ot = V(16), it = V(16), K = V(32), Ft = V(32), lt = V(48), gt = V(64);
let Ht = V(1152), Le = V(1152);
function at(e, t, n) {
  e = ut(e, Ht, t, n, Le);
  const r = Ht;
  return Ht = Le, Le = r, e;
}
function Xr(e, t, n, r, o, i, s, l, a) {
  let u, c, h, d, b, y, g, O, _, I, v, J, tt, nt, st, rt, C, q, U, z, et, f, m, p, A, S, T, w, E, L, P, F, N, j, B;
  const H = e - s, Y = n - s, W = o - s, X = t - l, $ = r - l, G = i - l;
  P = Y * G, m = R * Y, p = m - (m - Y), A = Y - p, m = R * G, S = m - (m - G), T = G - S, F = A * T - (P - p * S - A * S - p * T), N = W * $, m = R * W, p = m - (m - W), A = W - p, m = R * $, S = m - (m - $), T = $ - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, Ct[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, Ct[1] = L - (w + f) + (f - N), B = E + w, f = B - E, Ct[2] = E - (B - f) + (w - f), Ct[3] = B, P = W * X, m = R * W, p = m - (m - W), A = W - p, m = R * X, S = m - (m - X), T = X - S, F = A * T - (P - p * S - A * S - p * T), N = H * G, m = R * H, p = m - (m - H), A = H - p, m = R * G, S = m - (m - G), T = G - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, kt[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, kt[1] = L - (w + f) + (f - N), B = E + w, f = B - E, kt[2] = E - (B - f) + (w - f), kt[3] = B, P = H * $, m = R * H, p = m - (m - H), A = H - p, m = R * $, S = m - (m - $), T = $ - S, F = A * T - (P - p * S - A * S - p * T), N = Y * X, m = R * Y, p = m - (m - Y), A = Y - p, m = R * X, S = m - (m - X), T = X - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, Lt[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, Lt[1] = L - (w + f) + (f - N), B = E + w, f = B - E, Lt[2] = E - (B - f) + (w - f), Lt[3] = B, u = ut(
    ut(
      ut(
        M(M(4, Ct, H, k), k, H, D),
        D,
        M(M(4, Ct, X, k), k, X, ot),
        ot,
        K
      ),
      K,
      ut(
        M(M(4, kt, Y, k), k, Y, D),
        D,
        M(M(4, kt, $, k), k, $, ot),
        ot,
        Ft
      ),
      Ft,
      gt
    ),
    gt,
    ut(
      M(M(4, Lt, W, k), k, W, D),
      D,
      M(M(4, Lt, G, k), k, G, ot),
      ot,
      K
    ),
    K,
    Ht
  );
  let Rt = In(u, Ht), Xt = Jr * a;
  if (Rt >= Xt || -Rt >= Xt || (f = e - H, c = e - (H + f) + (f - s), f = t - X, b = t - (X + f) + (f - l), f = n - Y, h = n - (Y + f) + (f - s), f = r - $, y = r - ($ + f) + (f - l), f = o - W, d = o - (W + f) + (f - s), f = i - G, g = i - (G + f) + (f - l), c === 0 && h === 0 && d === 0 && b === 0 && y === 0 && g === 0) || (Xt = Vr * a + Dn * Math.abs(Rt), Rt += (H * H + X * X) * (Y * g + G * h - ($ * d + W * y)) + 2 * (H * c + X * b) * (Y * G - $ * W) + ((Y * Y + $ * $) * (W * b + X * d - (G * c + H * g)) + 2 * (Y * h + $ * y) * (W * X - G * H)) + ((W * W + G * G) * (H * y + $ * c - (X * h + Y * b)) + 2 * (W * d + G * g) * (H * $ - X * Y)), Rt >= Xt || -Rt >= Xt))
    return Rt;
  if ((h !== 0 || y !== 0 || d !== 0 || g !== 0) && (P = H * H, m = R * H, p = m - (m - H), A = H - p, F = A * A - (P - p * p - (p + p) * A), N = X * X, m = R * X, p = m - (m - X), A = X - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, Mt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, Mt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, Mt[2] = E - (B - f) + (w - f), Mt[3] = B), (d !== 0 || g !== 0 || c !== 0 || b !== 0) && (P = Y * Y, m = R * Y, p = m - (m - Y), A = Y - p, F = A * A - (P - p * p - (p + p) * A), N = $ * $, m = R * $, p = m - (m - $), A = $ - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, Et[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, Et[1] = L - (w - f) + (N - f), B = E + w, f = B - E, Et[2] = E - (B - f) + (w - f), Et[3] = B), (c !== 0 || b !== 0 || h !== 0 || y !== 0) && (P = W * W, m = R * W, p = m - (m - W), A = W - p, F = A * A - (P - p * p - (p + p) * A), N = G * G, m = R * G, p = m - (m - G), A = G - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, Tt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, Tt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, Tt[2] = E - (B - f) + (w - f), Tt[3] = B), c !== 0 && (O = M(4, Ct, c, _e), u = at(u, bt(
    M(O, _e, 2 * H, D),
    D,
    M(M(4, Tt, c, k), k, $, ot),
    ot,
    M(M(4, Et, c, k), k, -G, it),
    it,
    K,
    lt
  ), lt)), b !== 0 && (_ = M(4, Ct, b, Pe), u = at(u, bt(
    M(_, Pe, 2 * X, D),
    D,
    M(M(4, Et, b, k), k, W, ot),
    ot,
    M(M(4, Tt, b, k), k, -Y, it),
    it,
    K,
    lt
  ), lt)), h !== 0 && (I = M(4, kt, h, Re), u = at(u, bt(
    M(I, Re, 2 * Y, D),
    D,
    M(M(4, Mt, h, k), k, G, ot),
    ot,
    M(M(4, Tt, h, k), k, -X, it),
    it,
    K,
    lt
  ), lt)), y !== 0 && (v = M(4, kt, y, Oe), u = at(u, bt(
    M(v, Oe, 2 * $, D),
    D,
    M(M(4, Tt, y, k), k, H, ot),
    ot,
    M(M(4, Mt, y, k), k, -W, it),
    it,
    K,
    lt
  ), lt)), d !== 0 && (J = M(4, Lt, d, Ce), u = at(u, bt(
    M(J, Ce, 2 * W, D),
    D,
    M(M(4, Et, d, k), k, X, ot),
    ot,
    M(M(4, Mt, d, k), k, -$, it),
    it,
    K,
    lt
  ), lt)), g !== 0 && (tt = M(4, Lt, g, ke), u = at(u, bt(
    M(tt, ke, 2 * G, D),
    D,
    M(M(4, Mt, g, k), k, Y, ot),
    ot,
    M(M(4, Et, g, k), k, -H, it),
    it,
    K,
    lt
  ), lt)), c !== 0 || b !== 0) {
    if (h !== 0 || y !== 0 || d !== 0 || g !== 0 ? (P = h * G, m = R * h, p = m - (m - h), A = h - p, m = R * G, S = m - (m - G), T = G - S, F = A * T - (P - p * S - A * S - p * T), N = Y * g, m = R * Y, p = m - (m - Y), A = Y - p, m = R * g, S = m - (m - g), T = g - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, pt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, P = d * -$, m = R * d, p = m - (m - d), A = d - p, m = R * -$, S = m - (m - -$), T = -$ - S, F = A * T - (P - p * S - A * S - p * T), N = W * -y, m = R * W, p = m - (m - W), A = W - p, m = R * -y, S = m - (m - -y), T = -y - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, wt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, st = ut(4, pt, 4, wt, le), P = h * g, m = R * h, p = m - (m - h), A = h - p, m = R * g, S = m - (m - g), T = g - S, F = A * T - (P - p * S - A * S - p * T), N = d * y, m = R * d, p = m - (m - d), A = d - p, m = R * y, S = m - (m - y), T = y - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, Dt[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, Dt[1] = L - (w + f) + (f - N), B = E + w, f = B - E, Dt[2] = E - (B - f) + (w - f), Dt[3] = B, q = 4) : (le[0] = 0, st = 1, Dt[0] = 0, q = 1), c !== 0) {
      const ht = M(st, le, c, it);
      u = at(u, ut(
        M(O, _e, c, D),
        D,
        M(ht, it, 2 * H, K),
        K,
        lt
      ), lt);
      const ft = M(q, Dt, c, k);
      u = at(u, bt(
        M(ft, k, 2 * H, D),
        D,
        M(ft, k, c, ot),
        ot,
        M(ht, it, c, K),
        K,
        Ft,
        gt
      ), gt), y !== 0 && (u = at(u, M(M(4, Tt, c, k), k, y, D), D)), g !== 0 && (u = at(u, M(M(4, Et, -c, k), k, g, D), D));
    }
    if (b !== 0) {
      const ht = M(st, le, b, it);
      u = at(u, ut(
        M(_, Pe, b, D),
        D,
        M(ht, it, 2 * X, K),
        K,
        lt
      ), lt);
      const ft = M(q, Dt, b, k);
      u = at(u, bt(
        M(ft, k, 2 * X, D),
        D,
        M(ft, k, b, ot),
        ot,
        M(ht, it, b, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (h !== 0 || y !== 0) {
    if (d !== 0 || g !== 0 || c !== 0 || b !== 0 ? (P = d * X, m = R * d, p = m - (m - d), A = d - p, m = R * X, S = m - (m - X), T = X - S, F = A * T - (P - p * S - A * S - p * T), N = W * b, m = R * W, p = m - (m - W), A = W - p, m = R * b, S = m - (m - b), T = b - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, pt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, z = -G, et = -g, P = c * z, m = R * c, p = m - (m - c), A = c - p, m = R * z, S = m - (m - z), T = z - S, F = A * T - (P - p * S - A * S - p * T), N = H * et, m = R * H, p = m - (m - H), A = H - p, m = R * et, S = m - (m - et), T = et - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, wt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, rt = ut(4, pt, 4, wt, ae), P = d * b, m = R * d, p = m - (m - d), A = d - p, m = R * b, S = m - (m - b), T = b - S, F = A * T - (P - p * S - A * S - p * T), N = c * g, m = R * c, p = m - (m - c), A = c - p, m = R * g, S = m - (m - g), T = g - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, It[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, It[1] = L - (w + f) + (f - N), B = E + w, f = B - E, It[2] = E - (B - f) + (w - f), It[3] = B, U = 4) : (ae[0] = 0, rt = 1, It[0] = 0, U = 1), h !== 0) {
      const ht = M(rt, ae, h, it);
      u = at(u, ut(
        M(I, Re, h, D),
        D,
        M(ht, it, 2 * Y, K),
        K,
        lt
      ), lt);
      const ft = M(U, It, h, k);
      u = at(u, bt(
        M(ft, k, 2 * Y, D),
        D,
        M(ft, k, h, ot),
        ot,
        M(ht, it, h, K),
        K,
        Ft,
        gt
      ), gt), g !== 0 && (u = at(u, M(M(4, Mt, h, k), k, g, D), D)), b !== 0 && (u = at(u, M(M(4, Tt, -h, k), k, b, D), D));
    }
    if (y !== 0) {
      const ht = M(rt, ae, y, it);
      u = at(u, ut(
        M(v, Oe, y, D),
        D,
        M(ht, it, 2 * $, K),
        K,
        lt
      ), lt);
      const ft = M(U, It, y, k);
      u = at(u, bt(
        M(ft, k, 2 * $, D),
        D,
        M(ft, k, y, ot),
        ot,
        M(ht, it, y, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (d !== 0 || g !== 0) {
    if (c !== 0 || b !== 0 || h !== 0 || y !== 0 ? (P = c * $, m = R * c, p = m - (m - c), A = c - p, m = R * $, S = m - (m - $), T = $ - S, F = A * T - (P - p * S - A * S - p * T), N = H * y, m = R * H, p = m - (m - H), A = H - p, m = R * y, S = m - (m - y), T = y - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, pt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, z = -X, et = -b, P = h * z, m = R * h, p = m - (m - h), A = h - p, m = R * z, S = m - (m - z), T = z - S, F = A * T - (P - p * S - A * S - p * T), N = Y * et, m = R * Y, p = m - (m - Y), A = Y - p, m = R * et, S = m - (m - et), T = et - S, j = A * T - (N - p * S - A * S - p * T), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L + N, f = w - L, wt[1] = L - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, nt = ut(4, pt, 4, wt, se), P = c * y, m = R * c, p = m - (m - c), A = c - p, m = R * y, S = m - (m - y), T = y - S, F = A * T - (P - p * S - A * S - p * T), N = h * b, m = R * h, p = m - (m - h), A = h - p, m = R * b, S = m - (m - b), T = b - S, j = A * T - (N - p * S - A * S - p * T), w = F - j, f = F - w, Bt[0] = F - (w + f) + (f - j), E = P + w, f = E - P, L = P - (E - f) + (w - f), w = L - N, f = L - w, Bt[1] = L - (w + f) + (f - N), B = E + w, f = B - E, Bt[2] = E - (B - f) + (w - f), Bt[3] = B, C = 4) : (se[0] = 0, nt = 1, Bt[0] = 0, C = 1), d !== 0) {
      const ht = M(nt, se, d, it);
      u = at(u, ut(
        M(J, Ce, d, D),
        D,
        M(ht, it, 2 * W, K),
        K,
        lt
      ), lt);
      const ft = M(C, Bt, d, k);
      u = at(u, bt(
        M(ft, k, 2 * W, D),
        D,
        M(ft, k, d, ot),
        ot,
        M(ht, it, d, K),
        K,
        Ft,
        gt
      ), gt), b !== 0 && (u = at(u, M(M(4, Et, d, k), k, b, D), D)), y !== 0 && (u = at(u, M(M(4, Mt, -d, k), k, y, D), D));
    }
    if (g !== 0) {
      const ht = M(nt, se, g, it);
      u = at(u, ut(
        M(tt, ke, g, D),
        D,
        M(ht, it, 2 * G, K),
        K,
        lt
      ), lt);
      const ft = M(C, Bt, g, k);
      u = at(u, bt(
        M(ft, k, 2 * G, D),
        D,
        M(ft, k, g, ot),
        ot,
        M(ht, it, g, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  return Ht[u - 1];
}
function Gr(e, t, n, r, o, i, s, l) {
  const a = e - s, u = n - s, c = o - s, h = t - l, d = r - l, b = i - l, y = u * b, g = c * d, O = a * a + h * h, _ = c * h, I = a * b, v = u * u + d * d, J = a * d, tt = u * h, nt = c * c + b * b, st = O * (y - g) + v * (_ - I) + nt * (J - tt), rt = (Math.abs(y) + Math.abs(g)) * O + (Math.abs(_) + Math.abs(I)) * v + (Math.abs(J) + Math.abs(tt)) * nt, C = $r * rt;
  return st > C || -st > C ? st : Xr(e, t, n, r, o, i, s, l, rt);
}
function Ue(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
function jn(e) {
  return Math.abs(e) <= 180 ? e : e - Jt(e) * 360;
}
function Jt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function Ve(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], o = e[1], i = t[0], s = t[1], l = n[0], a = n[1], u = (i - r) * (a - o) - (s - o) * (l - r);
  return u = Jt(u), u;
}
function ee(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), o = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return o = o * 180 / Math.PI, o < 0 && (o += 360), o;
}
function Kr(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], a = n[0], u = n[1], c = Qt(o, i, s, l, a, u);
  return r && (c = -c), c = Jt(c), c;
}
function Qr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], a = n[0], u = n[1], c = r[0], h = r[1], d = Gr(o, i, s, l, a, u, c, h);
  return d = Jt(d), d;
}
function Zr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], l = t[1], a = n[0], u = n[1], c = r[0], h = r[1];
  const d = o - c, b = i - h, y = s - c, g = l - h, O = a - c, _ = u - h, I = d * d + b * b, v = y * y + g * g, J = O * O + _ * _;
  let tt = d * (g * J - v * _) - b * (y * J - v * O) + I * (y * _ - g * O);
  return Jt(tt);
}
function to(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function vn(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...vn(r)) : t.push(r);
  }
  return t;
}
function Un(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    Array.isArray(o) ? n.push(Un(o, t)) : n.push(t[o]);
  }
  return n;
}
function eo(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function no(e, t) {
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
function ro(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
const Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjust_lon: jn,
  calculateArrayShape: to,
  ccw: Ve,
  ccwRobust: Kr,
  concatEL2DArray: eo,
  fillIndexArray: Un,
  flattenArray: vn,
  getAngle: ee,
  inCircle: Zr,
  inCircleRobust: Qr,
  randomIndexArray: ro,
  round: Ue,
  sign: Jt,
  subColumnInEL2DArray: no
}, Symbol.toStringTag, { value: "Module" })), qn = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = qn.a, Xe = {
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
}, Ge = {
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
}, Ke = {
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
function Qe(e, t = "kilometers") {
  const n = Xe[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function oo(e, t = "kilometers") {
  const n = Xe[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Yt(e) {
  return e % 360 * Math.PI / 180;
}
function io(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function zn(e, t) {
  const n = Ge[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function pe(e, t) {
  const n = Ge[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function so(e, t, n) {
  return pe(zn(e, t), n);
}
const Is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: Ke,
  degreesToRadians: Yt,
  earthRadius: dt,
  factors: Xe,
  factors2: Ge,
  lengthToRadians: oo,
  metersTo: pe,
  radiansToDegrees: io,
  radiansToLength: Qe,
  toMeters: zn,
  unitTounit: so
}, Symbol.toStringTag, { value: "Module" }));
function xt(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, o = dt, i = Array.isArray(e) ? e : e.to2DArray(), s = jn(i[0]);
  let l = Yt(s), a = Yt(i[1]);
  return l = Qe(l, "meters"), a = o * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * a)), l > r && (l = r), l < -r && (l = -r), a > r && (a = r), a < -r && (a = -r), l = Ue(pe(l, t), n), a = Ue(pe(a, t), n), [l, a];
}
function jt(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function lo(e, t = "meters", n = 6) {
  if (e[0] instanceof At) {
    let r = [];
    for (let o = 0; o < e.length; o++)
      r.push(xt(e[o], t, n));
    return r;
  } else {
    let r = [];
    for (let o = 0; o < e.length; o++)
      r.push(xt(e[o], t, n));
    return r;
  }
}
function ao(e, t = "meters", n = 6) {
  let r = [], o = xt([e[0], e[1]], t, n), i = xt([e[2], e[3]], t, n);
  return r = [o[0], o[1], i[0], i[1]], r;
}
function uo(e, t = "meters", n = 6) {
  let r = [], o = jt([e[0], e[1]]), i = jt([e[2], e[3]]);
  return r = [o[0], o[1], i[0], i[1]], r;
}
const js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: ao,
  convertToMercator: xt,
  convertToMercators: lo,
  convertToWgs84: jt,
  plane2MBR: uo
}, Symbol.toStringTag, { value: "Module" }));
function Hn(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function co(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Yn(e) {
  let t = e[0], n = e[1], r = e[2], o = e[3];
  return [
    [t, n],
    [t, o],
    [r, o],
    [r, n],
    [t, n]
  ];
}
function ho(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i][0], l = e[i][1];
    t = Math.min(t, s), n = Math.min(n, l), r = Math.max(r, s), o = Math.max(o, l);
  }
  return [t, n, r, o];
}
function Wn(e, t) {
  let n = t[0], r = t[1], o = t[2], i = t[3], s = e[0], l = e[1];
  return s >= n && s <= o && l >= r && l <= i;
}
class $n {
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
  constructor(t, n, r = 0, ...o) {
    Z(this, "lon");
    // 经度
    Z(this, "lat");
    // 维度
    Z(this, "asl");
    // 海拔高度 需要参考大地水准面
    Z(this, "type", "Point");
    // 类型 对应 GeoJSON 格式
    Z(this, "properties");
    this.lon = t, this.lat = n, this.asl = r, this.properties = o;
  }
  /**
   * - 将点坐标转换为墨卡托坐标 EPSG:4326 -> EPSG:3857
   * - transform point to Mercator coordinate EPSG:4326 -> EPSG:3857
   * @returns {[number, number]} 返回墨卡托坐标 [x, y] 默认米为单位
   */
  toXY(t = "meters") {
    return xt(this, t);
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
class Ze extends $n {
  /**
   * - 构造函数
   * @param points 点坐标数组
   * @param args 属性信息
   */
  constructor(t, ...n) {
    if (t[0] instanceof Array) {
      t = t;
      let r = [];
      for (let o = 0; o < t.length; o++)
        r.push(new At(t[o][0], t[o][1]));
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
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
    for (let i = 0; i < this.coordinates.length; i++) {
      let s = this.coordinates[i].to2DArray();
      t = Math.min(t, s[0]), n = Math.min(n, s[1]), r = Math.max(r, s[0]), o = Math.max(o, s[1]);
    }
    return [t, n, r, o];
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
      let r = 0, o = 0;
      for (let l = 0; l < this.coordinates.length; l++) {
        let a = this.coordinates[l].to2DArray();
        r += a[0] * t[l], o += a[1] * t[l];
      }
      let i = r, s = o;
      return new At(i, s);
    } else {
      let n = 0, r = 0;
      for (let s = 0; s < this.coordinates.length; s++) {
        let l = this.coordinates[s].to2DArray();
        n += l[0], r += l[1];
      }
      let o = n / this.coordinates.length, i = r / this.coordinates.length;
      return new At(o, i);
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
  popPoint() {
    this.coordinates.pop(), this.MBR = this.calculateMBR();
  }
  // 判断是否为多点类型
  static isMultiPoint(t) {
    return t.type === "MultiPoint";
  }
}
class tn extends Ze {
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
    this.coordinates.sort((r, o) => {
      let i = ee(n, r.toXY()), s = ee(n, o.toXY());
      return i < s ? -1 : i > s ? 1 : 0;
    });
  }
}
class Jn extends $n {
  constructor(t, ...n) {
    super("MultiLineString", t, ...n);
  }
  /**
   * - 计算线集合的最小外包矩形
   * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
   */
  calculateMBR() {
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
    for (let i = 0; i < this.coordinates.length; i++) {
      let s = this.coordinates[i].getMBR();
      t = Math.min(t, s[0]), n = Math.min(n, s[1]), r = Math.max(r, s[2]), o = Math.max(o, s[3]);
    }
    return [t, n, r, o];
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
class fo extends Jn {
  constructor(t, ...n) {
    super(t, ...n), this.type = "Polygon";
  }
  static isPolygon(t) {
    return t.type === "Polygon";
  }
}
class mo {
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
    let r = t[0], o = t[1];
    return Math.pow(r - this.x, 2) + Math.pow(o - this.y, 2) - this.rSquared <= n;
  }
  /**
   * （仅平面下保证有效）判断圆是否与 MBR 相交
   * @param range - MBR
   * @returns {boolean} - true if the circle intersects the MBR
   */
  intersects(t) {
    let n = Hn(t), r = Math.abs(n.x - this.x), o = Math.abs(n.y - this.y), i = this.r, s = n.w / 2, l = n.h / 2, a = Math.pow(r - s, 2) + Math.pow(o - l, 2);
    return r > i + s || o > i + l ? !1 : r <= s || o <= l ? !0 : a <= this.rSquared;
  }
}
const vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: mo,
  LineString: tn,
  MultiLineString: Jn,
  MultiPoint: Ze,
  Point: At,
  Polygon: fo,
  getPointsMBR: ho,
  mbrToPolygon: Yn,
  mbrToRectangle: Hn,
  pointInMBR: Wn,
  rectangleToMBR: co
}, Symbol.toStringTag, { value: "Module" })), mn = qn.a;
function yo(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), o = Array.isArray(t) ? t : t.to2DArray();
  r.map((c, h) => {
    r[h] = Yt(c);
  }), o.map((c, h) => {
    o[h] = Yt(c);
  });
  const i = o[1] - r[1], s = o[0] - r[0], l = r[1], a = o[1], u = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(i / 2), 2) + Math.pow(Math.sin(s / 2), 2) * Math.cos(l) * Math.cos(a)
    )
  );
  return Qe(u, n);
}
function po(e, t = "kilometers") {
  let n = tn.isLineString(e) ? e.toXYArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((i, s) => {
    n[s] = i.toXY();
  })), n = n;
  let r = 0, o = n.length - 1;
  for (let i = 0; i < n.length; i++)
    r += (n[o][0] + n[i][0]) * (n[o][1] - n[i][1]), o = i;
  return r = r * Ke[t] / 2, Math.abs(r);
}
function wo(e, t = "kilometers") {
  let n = tn.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((s, l) => {
    n[l] = s.to2DArray();
  })), n = n;
  let r = 0, o = n.length, i = [];
  for (let s = 0; s < o; s++) {
    i.push([]);
    for (let l = 0; l < 2; l++) {
      let a = Yt(n[s][l]);
      i[s].push(a);
    }
  }
  for (let s = 0; s < o; s++) {
    let l = (s + 1) % o, a = (s + 2) % o;
    r += (i[s][0] - i[a][0]) * Math.sin(i[l][1]);
  }
  return r = r * mn * mn / 2, r = r * Ke[t], Math.abs(r);
}
const Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: po,
  SpherePolygonArea: wo,
  haversine: yo
}, Symbol.toStringTag, { value: "Module" }));
function he(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function go(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function qe(e, t, n, r, o = xt, i = jt, s = !1) {
  o && (e = o(e), t = o(t), n = o(n), r = o(r));
  let l = [t[0] - e[0], t[1] - e[1]], a = [r[0] - n[0], r[1] - n[1]], u = he(l, a);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let c = he([n[0] - e[0], n[1] - e[1]], a) / u, h = he([n[0] - e[0], n[1] - e[1]], l) / u;
  return !s && (c < 0 || c > 1 || h < 0 || h > 1) ? (console.log("交点不在两条线段上"), null) : i ? i([e[0] + l[0] * c, e[1] + l[1] * c]) : [e[0] + l[0] * c, e[1] + l[1] * c];
}
function en(e, t, n = !1) {
  if (n) {
    let r = xt(e), o = t[0], i = t[1], s = t[2], l = t[3];
    return [o, i] = xt([o, i]), [s, l] = xt([s, l]), r[0] < o || r[0] > s || r[1] < i || r[1] > l;
  } else {
    let r = t[0], o = t[1], i = t[2], s = t[3];
    return e[0] < r || e[0] > i || e[1] < o || e[1] > s;
  }
}
function Vn(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function Xn(e, t) {
  return Gn(e, Yn(t));
}
function Gn(e, t) {
  let n = e[e.length - 1], r, o, i, s = t;
  for (let l in e) {
    r = e[l];
    let a = s;
    s = [], o = a[a.length - 1];
    for (let u in a) {
      if (i = a[u], fe(i, n, r)) {
        if (!fe(o, n, r)) {
          let c = qe(
            o,
            i,
            n,
            r,
            xt,
            jt,
            !0
          );
          s.push(c);
        }
        s.push(i);
      } else if (fe(o, n, r)) {
        let c = qe(
          o,
          i,
          n,
          r,
          xt,
          jt,
          !0
        );
        s.push(c);
      }
      o = i;
    }
    n = r;
  }
  return s;
}
function bo(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++)
    t[r][1] > e[1] != t[o][1] > e[1] && e[0] < (t[o][0] - t[r][0]) * (e[1] - t[r][1]) / (t[o][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Ao(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    s[0] < t && (t = s[0]), s[0] > r && (r = s[0]), s[1] < n && (n = s[1]), s[1] > o && (o = s[1]);
  }
  return [t, n, r, o];
}
function xo(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function So(e, t) {
  return (e - 1 + t) % t;
}
function fe(e, t, n) {
  return Ve(t, n, e) > 0;
}
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: Vn,
  PointInsidePolygon: bo,
  PointOutsideMBR: en,
  calculateMBR: Ao,
  cross: he,
  cutPolygonByMBR: Xn,
  dot: go,
  intersection: qe,
  intersectionPolygon: Gn,
  iterPolygonEdge: xo,
  pointInEdge: fe,
  prePointInPolygon: So
}, Symbol.toStringTag, { value: "Module" })), yn = Math.pow(2, -52), ue = new Uint32Array(512);
class vt {
  static from(t, n = Kn, r = Qn) {
    const o = t.length, i = new Float64Array(o * 2);
    for (let s = 0; s < o; s++) {
      const l = t[s];
      i[2 * s] = n(l), i[2 * s + 1] = r(l);
    }
    return new vt(i);
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
    let l = 1 / 0, a = 1 / 0, u = -1 / 0, c = -1 / 0;
    for (let C = 0; C < s; C++) {
      const q = t[2 * C], U = t[2 * C + 1];
      q < l && (l = q), U < a && (a = U), q > u && (u = q), U > c && (c = U), this._ids[C] = C;
    }
    const h = (l + u) / 2, d = (a + c) / 2;
    let b, y, g;
    for (let C = 0, q = 1 / 0; C < s; C++) {
      const U = Fe(h, d, t[2 * C], t[2 * C + 1]);
      U < q && (b = C, q = U);
    }
    const O = t[2 * b], _ = t[2 * b + 1];
    for (let C = 0, q = 1 / 0; C < s; C++) {
      if (C === b)
        continue;
      const U = Fe(O, _, t[2 * C], t[2 * C + 1]);
      U < q && U > 0 && (y = C, q = U);
    }
    let I = t[2 * y], v = t[2 * y + 1], J = 1 / 0;
    for (let C = 0; C < s; C++) {
      if (C === b || C === y)
        continue;
      const q = To(O, _, I, v, t[2 * C], t[2 * C + 1]);
      q < J && (g = C, J = q);
    }
    let tt = t[2 * g], nt = t[2 * g + 1];
    if (J === 1 / 0) {
      for (let U = 0; U < s; U++)
        this._dists[U] = t[2 * U] - t[0] || t[2 * U + 1] - t[1];
      qt(this._ids, this._dists, 0, s - 1);
      const C = new Uint32Array(s);
      let q = 0;
      for (let U = 0, z = -1 / 0; U < s; U++) {
        const et = this._ids[U], f = this._dists[et];
        f > z && (C[q++] = et, z = f);
      }
      this.hull = C.subarray(0, q), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Qt(O, _, I, v, tt, nt) < 0) {
      const C = y, q = I, U = v;
      y = g, I = tt, v = nt, g = C, tt = q, nt = U;
    }
    const st = this.circumcenter(O, _, I, v, tt, nt);
    this._cx = st.x, this._cy = st.y;
    for (let C = 0; C < s; C++)
      this._dists[C] = Fe(t[2 * C], t[2 * C + 1], st.x, st.y);
    qt(this._ids, this._dists, 0, s - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[g] = y, r[y] = n[b] = g, r[g] = n[y] = b, o[b] = 0, o[y] = 1, o[g] = 2, i.fill(-1), i[this._hashKey(O, _)] = b, i[this._hashKey(I, v)] = y, i[this._hashKey(tt, nt)] = g, this.trianglesLen = 0, this._addTriangle(b, y, g, -1, -1, -1);
    for (let C = 0, q, U; C < this._ids.length; C++) {
      const z = this._ids[C], et = t[2 * z], f = t[2 * z + 1];
      if (C > 0 && Math.abs(et - q) <= yn && Math.abs(f - U) <= yn || (q = et, U = f, z === b || z === y || z === g))
        continue;
      let m = 0;
      for (let w = 0, E = this._hashKey(et, f); w < this._hashSize && (m = i[(E + w) % this._hashSize], !(m !== -1 && m !== r[m])); w++)
        ;
      m = n[m];
      let p = m, A;
      for (; A = r[p], Qt(et, f, t[2 * p], t[2 * p + 1], t[2 * A], t[2 * A + 1]) >= 0; )
        if (p = A, p === m) {
          p = -1;
          break;
        }
      if (p === -1)
        continue;
      let S = this._addTriangle(p, z, r[p], -1, -1, o[p]);
      o[z] = this._legalize(S + 2), o[p] = S, rt++;
      let T = r[p];
      for (; A = r[T], Qt(et, f, t[2 * T], t[2 * T + 1], t[2 * A], t[2 * A + 1]) < 0; )
        S = this._addTriangle(T, z, A, o[z], -1, o[T]), o[z] = this._legalize(S + 2), r[T] = T, rt--, T = A;
      if (p === m)
        for (; A = n[p], Qt(et, f, t[2 * A], t[2 * A + 1], t[2 * p], t[2 * p + 1]) < 0; )
          S = this._addTriangle(A, z, p, -1, o[p], o[A]), this._legalize(S + 2), o[A] = S, r[p] = p, rt--, p = A;
      this._hullStart = n[z] = p, r[p] = n[T] = z, r[z] = T, i[this._hashKey(et, f)] = z, i[this._hashKey(t[2 * p], t[2 * p + 1])] = p;
    }
    this.hull = new Uint32Array(rt);
    for (let C = 0, q = this._hullStart; C < rt; C++)
      this.hull[C] = q, q = r[q];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(Mo(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: o } = this;
    let i = 0, s = 0;
    for (; ; ) {
      const l = r[t], a = t - t % 3;
      if (s = a + (t + 2) % 3, l === -1) {
        if (i === 0)
          break;
        t = ue[--i];
        continue;
      }
      const u = l - l % 3, c = a + (t + 1) % 3, h = u + (l + 2) % 3, d = n[s], b = n[t], y = n[c], g = n[h];
      if (Eo(
        o[2 * d],
        o[2 * d + 1],
        o[2 * b],
        o[2 * b + 1],
        o[2 * y],
        o[2 * y + 1],
        o[2 * g],
        o[2 * g + 1]
      )) {
        n[t] = g, n[l] = d;
        const _ = r[h];
        if (_ === -1) {
          let v = this._hullStart;
          do {
            if (this._hullTri[v] === h) {
              this._hullTri[v] = t;
              break;
            }
            v = this._hullPrev[v];
          } while (v !== this._hullStart);
        }
        this._link(t, _), this._link(l, r[s]), this._link(s, h);
        const I = u + (l + 1) % 3;
        i < ue.length && (ue[i++] = I);
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
    const o = n[0] - t[0], i = n[1] - t[1], s = r[0] - t[0], l = r[1] - t[1], a = o * o + i * i, u = s * s + l * l, c = 0.5 / (o * l - i * s), h = (l * a - i * u) * c, d = (o * u - s * a) * c;
    return h * h + d * d;
  }
  circumcenter(t, n, r, o, i, s) {
    const l = r - t, a = o - n, u = i - t, c = s - n, h = l * l + a * a, d = u * u + c * c, b = 0.5 / (l * c - a * u), y = t + (c * h - a * d) * b, g = n + (l * d - u * h) * b;
    return { x: y, y: g };
  }
}
function Mo(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Fe(e, t, n, r) {
  const o = e - n, i = t - r;
  return o * o + i * i;
}
function Eo(e, t, n, r, o, i, s, l) {
  const a = e - s, u = t - l, c = n - s, h = r - l, d = o - s, b = i - l, y = a * a + u * u, g = c * c + h * h, O = d * d + b * b;
  return a * (h * O - g * b) - u * (c * O - g * d) + y * (c * b - h * d) < 0;
}
function To(e, t, n, r, o, i) {
  const s = n - e, l = r - t, a = o - e, u = i - t, c = s * s + l * l, h = a * a + u * u, d = 0.5 / (s * u - l * a), b = (u * c - l * h) * d, y = (s * h - a * c) * d;
  return b * b + y * y;
}
function qt(e, t, n, r) {
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
    Gt(e, o, i), t[e[n]] > t[e[r]] && Gt(e, n, r), t[e[i]] > t[e[r]] && Gt(e, i, r), t[e[n]] > t[e[i]] && Gt(e, n, i);
    const l = e[i], a = t[l];
    for (; ; ) {
      do
        i++;
      while (t[e[i]] < a);
      do
        s--;
      while (t[e[s]] > a);
      if (s < i)
        break;
      Gt(e, i, s);
    }
    e[n + 1] = e[s], e[s] = l, r - i + 1 >= s - n ? (qt(e, t, i, r), qt(e, t, n, s - 1)) : (qt(e, t, n, s - 1), qt(e, t, i, r));
  }
}
function Gt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Kn(e) {
  return e[0];
}
function Qn(e) {
  return e[1];
}
function _o(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function Po(e, t) {
  return _o(t).map((n) => e.triangles[n]);
}
function Ro(e) {
  return Math.floor(e / 3);
}
function Oo(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], o = t[0] * t[0] + t[1] * t[1], i = n[0] * n[0] + n[1] * n[1], s = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / s * (r * (t[1] - n[1]) + o * (n[1] - e[1]) + i * (e[1] - t[1])),
    1 / s * (r * (n[0] - t[0]) + o * (e[0] - n[0]) + i * (t[0] - e[0]))
  ];
}
function Zn(e, t, n, r = jt) {
  const o = Po(t, n).map((s) => e[s]);
  let i = Oo(o[0], o[1], o[2]);
  return r && (i = r(i)), i;
}
function tr(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function Co(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const o = tr(r);
    r = e.halfedges[o];
  } while (r !== -1 && r !== t);
  return n;
}
function Ne(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.triangles.length; o++) {
    const i = t.triangles[tr(o)];
    if (!r.has(i)) {
      r.add(i);
      const a = Co(t, o).map(Ro).map((u) => Zn(e, t, u));
      n(i, a);
    }
  }
}
class ko {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Kn, r = Qn) {
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
    return Ne(t, n, (o, i) => r.set(o, i)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return Ne(n, r, (i, s) => {
      this.isInsideMBR(s, t) || (s = Xn(s, t)), o.set(i, s);
    }), o;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return Ne(n, r, (i, s) => {
      this.isInsideMBR(s, t) && o.set(i, s);
    }), o;
  }
  isInsideMBR(t, n) {
    const [r, o, i, s] = n;
    for (let l = 0; l < t.length; l++) {
      const [a, u] = t[l];
      if (a < r || a > i || u < o || u > s)
        return !1;
    }
    return !0;
  }
}
function Lo(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, o] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, o);
  return n;
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: vt,
  Voronoi: ko,
  complateMap: Lo,
  triangleCenter: Zn
}, Symbol.toStringTag, { value: "Module" }));
function Fo(e) {
  const t = e.map((i, s) => [...i.toXY(), s]);
  let n = t[0];
  for (let i = 1; i < t.length; i++)
    t[i][1] < n[1] && (n = t[i]);
  t.sort((i, s) => {
    let l = ee([n[0], n[1]], [i[0], i[1]]), a = ee([n[0], n[1]], [s[0], s[1]]);
    if (l < a)
      return -1;
    if (l > a)
      return 1;
    {
      let u = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2), c = Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2);
      return u < c ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let i = 2; i < t.length; i++) {
    for (; r.length > 1 && Ve([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[i][0], t[i][1]]) <= 0; )
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
function No(e, t) {
  let n = e.map((s) => s.toXY());
  return vt.from(n).getTriangleIndices().filter((s) => {
    let l = [n[s[0]], n[s[1]], n[s[2]]];
    return vt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
const Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: No,
  convexHull: Fo
}, Symbol.toStringTag, { value: "Module" }));
function er(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bo } = Object.prototype, { getPrototypeOf: nn } = Object, be = ((e) => (t) => {
  const n = Bo.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => be(t) === e), Ae = (e) => (t) => typeof t === e, { isArray: Vt } = Array, ne = Ae("undefined");
function Do(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const nr = Pt("ArrayBuffer");
function Io(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && nr(e.buffer), t;
}
const jo = Ae("string"), St = Ae("function"), rr = Ae("number"), xe = (e) => e !== null && typeof e == "object", vo = (e) => e === !0 || e === !1, de = (e) => {
  if (be(e) !== "object")
    return !1;
  const t = nn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Uo = Pt("Date"), qo = Pt("File"), zo = Pt("Blob"), Ho = Pt("FileList"), Yo = (e) => xe(e) && St(e.pipe), Wo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || St(e.append) && ((t = be(e)) === "formdata" || // detect form-data instance
  t === "object" && St(e.toString) && e.toString() === "[object FormData]"));
}, $o = Pt("URLSearchParams"), Jo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oe(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Vt(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let l;
    for (r = 0; r < s; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function or(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const ir = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), sr = (e) => !ne(e) && e !== ir;
function ze() {
  const { caseless: e } = sr(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && or(t, o) || o;
    de(t[i]) && de(r) ? t[i] = ze(t[i], r) : de(r) ? t[i] = ze({}, r) : Vt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && oe(arguments[r], n);
  return t;
}
const Vo = (e, t, n, { allOwnKeys: r } = {}) => (oe(t, (o, i) => {
  n && St(o) ? e[i] = er(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Xo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Go = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ko = (e, t, n, r) => {
  let o, i, s;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && nn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Qo = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Zo = (e) => {
  if (!e)
    return null;
  if (Vt(e))
    return e;
  let t = e.length;
  if (!rr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ti = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nn(Uint8Array)), ei = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ni = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ri = Pt("HTMLFormElement"), oi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), pn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ii = Pt("RegExp"), lr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  oe(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, si = (e) => {
  lr(e, (t, n) => {
    if (St(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (St(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, li = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Vt(e) ? r(e) : r(String(e).split(t)), n;
}, ai = () => {
}, ui = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Be = "abcdefghijklmnopqrstuvwxyz", wn = "0123456789", ar = {
  DIGIT: wn,
  ALPHA: Be,
  ALPHA_DIGIT: Be + Be.toUpperCase() + wn
}, ci = (e = 16, t = ar.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function hi(e) {
  return !!(e && St(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fi = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (xe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Vt(r) ? [] : {};
        return oe(r, (s, l) => {
          const a = n(s, o + 1);
          !ne(a) && (i[l] = a);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, di = Pt("AsyncFunction"), mi = (e) => e && (xe(e) || St(e)) && St(e.then) && St(e.catch), x = {
  isArray: Vt,
  isArrayBuffer: nr,
  isBuffer: Do,
  isFormData: Wo,
  isArrayBufferView: Io,
  isString: jo,
  isNumber: rr,
  isBoolean: vo,
  isObject: xe,
  isPlainObject: de,
  isUndefined: ne,
  isDate: Uo,
  isFile: qo,
  isBlob: zo,
  isRegExp: ii,
  isFunction: St,
  isStream: Yo,
  isURLSearchParams: $o,
  isTypedArray: ti,
  isFileList: Ho,
  forEach: oe,
  merge: ze,
  extend: Vo,
  trim: Jo,
  stripBOM: Xo,
  inherits: Go,
  toFlatObject: Ko,
  kindOf: be,
  kindOfTest: Pt,
  endsWith: Qo,
  toArray: Zo,
  forEachEntry: ei,
  matchAll: ni,
  isHTMLForm: ri,
  hasOwnProperty: pn,
  hasOwnProp: pn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lr,
  freezeMethods: si,
  toObjectSet: li,
  toCamelCase: oi,
  noop: ai,
  toFiniteNumber: ui,
  findKey: or,
  global: ir,
  isContextDefined: sr,
  ALPHABET: ar,
  generateString: ci,
  isSpecCompliantForm: hi,
  toJSONObject: fi,
  isAsyncFn: di,
  isThenable: mi
};
function Q(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
x.inherits(Q, Error, {
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
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ur = Q.prototype, cr = {};
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
  cr[e] = { value: e };
});
Object.defineProperties(Q, cr);
Object.defineProperty(ur, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, o, i) => {
  const s = Object.create(ur);
  return x.toFlatObject(e, s, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Q.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const yi = null;
function He(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function hr(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gn(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = hr(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function pi(e) {
  return x.isArray(e) && !e.some(He);
}
const wi = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Se(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, O) {
    return !x.isUndefined(O[g]);
  });
  const r = n.metaTokens, o = n.visitor || c, i = n.dots, s = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null)
      return "";
    if (x.isDate(y))
      return y.toISOString();
    if (!a && x.isBlob(y))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function c(y, g, O) {
    let _ = y;
    if (y && !O && typeof y == "object") {
      if (x.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), y = JSON.stringify(y);
      else if (x.isArray(y) && pi(y) || (x.isFileList(y) || x.endsWith(g, "[]")) && (_ = x.toArray(y)))
        return g = hr(g), _.forEach(function(v, J) {
          !(x.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? gn([g], J, i) : s === null ? g : g + "[]",
            u(v)
          );
        }), !1;
    }
    return He(y) ? !0 : (t.append(gn(O, g, i), u(y)), !1);
  }
  const h = [], d = Object.assign(wi, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: He
  });
  function b(y, g) {
    if (!x.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(y), x.forEach(y, function(_, I) {
        (!(x.isUndefined(_) || _ === null) && o.call(
          t,
          _,
          x.isString(I) ? I.trim() : I,
          g,
          d
        )) === !0 && b(_, g ? g.concat(I) : [I]);
      }), h.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function bn(e) {
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
function rn(e, t) {
  this._pairs = [], e && Se(e, this, t);
}
const fr = rn.prototype;
fr.append = function(t, n) {
  this._pairs.push([t, n]);
};
fr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, bn);
  } : bn;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function gi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || gi, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = x.isURLSearchParams(t) ? t.toString() : new rn(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class bi {
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
    x.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const An = bi, mr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ai = typeof URLSearchParams < "u" ? URLSearchParams : rn, xi = typeof FormData < "u" ? FormData : null, Si = typeof Blob < "u" ? Blob : null, Mi = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Ei = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _t = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ai,
    FormData: xi,
    Blob: Si
  },
  isStandardBrowserEnv: Mi,
  isStandardBrowserWebWorkerEnv: Ei,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ti(e, t) {
  return Se(e, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return _t.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _i(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Pi(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function yr(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const l = Number.isFinite(+s), a = i >= n.length;
    return s = !s && x.isArray(o) ? o.length : s, a ? (x.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !x.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && x.isArray(o[s]) && (o[s] = Pi(o[s])), !l);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (r, o) => {
      t(_i(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ri(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const on = {
  transitional: mr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = x.isObject(t);
    if (i && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return o && o ? JSON.stringify(yr(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ti(t, this.formSerializer).toString();
      if ((l = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Se(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Ri(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || on.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && x.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (s)
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
    FormData: _t.classes.FormData,
    Blob: _t.classes.Blob
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
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  on.headers[e] = {};
});
const sn = on, Oi = x.toObjectSet([
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
]), Ci = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Oi[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, xn = Symbol("internals");
function Kt(e) {
  return e && String(e).trim().toLowerCase();
}
function me(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(me) : String(e);
}
function ki(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Li = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function De(e, t, n, r, o) {
  if (x.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!x.isString(t)) {
    if (x.isString(r))
      return t.indexOf(r) !== -1;
    if (x.isRegExp(r))
      return r.test(t);
  }
}
function Fi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ni(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class Me {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, a, u) {
      const c = Kt(a);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = x.findKey(o, c);
      (!h || o[h] === void 0 || u === !0 || u === void 0 && o[h] !== !1) && (o[h || a] = me(l));
    }
    const s = (l, a) => x.forEach(l, (u, c) => i(u, c, a));
    return x.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : x.isString(t) && (t = t.trim()) && !Li(t) ? s(Ci(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Kt(t), t) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ki(o);
        if (x.isFunction(n))
          return n.call(this, o, r);
        if (x.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Kt(t), t) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || De(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Kt(s), s) {
        const l = x.findKey(r, s);
        l && (!n || De(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return x.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || De(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return x.forEach(this, (o, i) => {
      const s = x.findKey(r, i);
      if (s) {
        n[s] = me(o), delete n[i];
        return;
      }
      const l = t ? Fi(i) : String(i).trim();
      l !== i && delete n[i], n[l] = me(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && x.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[xn] = this[xn] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const l = Kt(s);
      r[l] || (Ni(o, s), r[l] = !0);
    }
    return x.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Me.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(Me);
const Ot = Me;
function Ie(e, t) {
  const n = this || sn, r = t || n, o = Ot.from(r.headers);
  let i = r.data;
  return x.forEach(e, function(l) {
    i = l.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function pr(e) {
  return !!(e && e.__CANCEL__);
}
function ie(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(ie, Q, {
  __CANCEL__: !0
});
function Bi(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Q(
    "Request failed with status code " + n.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Di = _t.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, l) {
        const a = [];
        a.push(n + "=" + encodeURIComponent(r)), x.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), x.isString(i) && a.push("path=" + i), x.isString(s) && a.push("domain=" + s), l === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Ii(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ji(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wr(e, t) {
  return e && !Ii(t) ? ji(e, t) : t;
}
const vi = _t.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
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
    return r = o(window.location.href), function(s) {
      const l = x.isString(s) ? o(s) : s;
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
function Ui(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qi(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const u = Date.now(), c = r[i];
    s || (s = u), n[o] = a, r[o] = u;
    let h = i, d = 0;
    for (; h !== o; )
      d += n[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t)
      return;
    const b = c && u - c;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}
function Sn(e, t) {
  let n = 0;
  const r = qi(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, l = i - n, a = r(l), u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && s && u ? (s - i) / a : void 0,
      event: o
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const zi = typeof XMLHttpRequest < "u", Hi = zi && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = Ot.from(e.headers).normalize(), s = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    x.isFormData(o) && (_t.isStandardBrowserEnv || _t.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? x.isString(u = i.getContentType()) && i.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const h = wr(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), dr(h, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function d() {
      if (!c)
        return;
      const y = Ot.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), O = {
        data: !s || s === "text" || s === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Bi(function(I) {
        n(I), a();
      }, function(I) {
        r(I), a();
      }, O), c = null;
    }
    if ("onloadend" in c ? c.onloadend = d : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, c.onabort = function() {
      c && (r(new Q("Request aborted", Q.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || mr;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Q(
        g,
        O.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        c
      )), c = null;
    }, _t.isStandardBrowserEnv) {
      const y = vi(h) && e.xsrfCookieName && Di.read(e.xsrfCookieName);
      y && i.set(e.xsrfHeaderName, y);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && x.forEach(i.toJSON(), function(g, O) {
      c.setRequestHeader(O, g);
    }), x.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), s && s !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Sn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Sn(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (y) => {
      c && (r(!y || y.type ? new ie(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const b = Ui(h);
    if (b && _t.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Ye = {
  http: yi,
  xhr: Hi
};
x.forEach(Ye, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mn = (e) => `- ${e}`, Yi = (e) => x.isFunction(e) || e === null || e === !1, gr = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !Yi(n) && (r = Ye[(s = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Mn).join(`
`) : " " + Mn(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ye
};
function je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function En(e) {
  return je(e), e.headers = Ot.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gr.getAdapter(e.adapter || sn.adapter)(e).then(function(r) {
    return je(e), r.data = Ie.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ot.from(r.headers), r;
  }, function(r) {
    return pr(r) || (je(e), r && r.response && (r.response.data = Ie.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ot.from(r.response.headers))), Promise.reject(r);
  });
}
const Tn = (e) => e instanceof Ot ? e.toJSON() : e;
function Wt(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, h) {
    return x.isPlainObject(u) && x.isPlainObject(c) ? x.merge.call({ caseless: h }, u, c) : x.isPlainObject(c) ? x.merge({}, c) : x.isArray(c) ? c.slice() : c;
  }
  function o(u, c, h) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u))
        return r(void 0, u, h);
    } else
      return r(u, c, h);
  }
  function i(u, c) {
    if (!x.isUndefined(c))
      return r(void 0, c);
  }
  function s(u, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, c);
  }
  function l(u, c, h) {
    if (h in t)
      return r(u, c);
    if (h in e)
      return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, c) => o(Tn(u), Tn(c), !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const h = a[c] || o, d = h(e[c], t[c], c);
    x.isUndefined(d) && h !== l || (n[c] = d);
  }), n;
}
const br = "1.6.0", ln = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ln[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _n = {};
ln.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + br + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, l) => {
    if (t === !1)
      throw new Q(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !_n[s] && (_n[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, l) : !0;
  };
};
function Wi(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const l = e[i], a = l === void 0 || s(l, i, e);
      if (a !== !0)
        throw new Q("option " + i + " must be " + a, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: Wi,
  validators: ln
}, Nt = We.validators;
class we {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new An(),
      response: new An()
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
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && We.assertOptions(r, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), o != null && (x.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : We.assertOptions(o, {
      encode: Nt.function,
      serialize: Nt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && x.merge(
      i.common,
      i[n.method]
    );
    i && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete i[y];
      }
    ), n.headers = Ot.concat(s, i);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (a = a && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, h = 0, d;
    if (!a) {
      const y = [En.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, u), d = y.length, c = Promise.resolve(n); h < d; )
        c = c.then(y[h++], y[h++]);
      return c;
    }
    d = l.length;
    let b = n;
    for (h = 0; h < d; ) {
      const y = l[h++], g = l[h++];
      try {
        b = y(b);
      } catch (O) {
        g.call(this, O);
        break;
      }
    }
    try {
      c = En.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, d = u.length; h < d; )
      c = c.then(u[h++], u[h++]);
    return c;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = wr(t.baseURL, t.url);
    return dr(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(n, r) {
    return this.request(Wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, l) {
      return this.request(Wt(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  we.prototype[t] = n(), we.prototype[t + "Form"] = n(!0);
});
const ye = we;
class an {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, l) {
      r.reason || (r.reason = new ie(i, s, l), n(r.reason));
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
      token: new an(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const $i = an;
function Ji(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Vi(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const $e = {
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
Object.entries($e).forEach(([e, t]) => {
  $e[t] = e;
});
const Xi = $e;
function Ar(e) {
  const t = new ye(e), n = er(ye.prototype.request, t);
  return x.extend(n, ye.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ar(Wt(e, o));
  }, n;
}
const ct = Ar(sn);
ct.Axios = ye;
ct.CanceledError = ie;
ct.CancelToken = $i;
ct.isCancel = pr;
ct.VERSION = br;
ct.toFormData = Se;
ct.AxiosError = Q;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
  return Promise.all(t);
};
ct.spread = Ji;
ct.isAxiosError = Vi;
ct.mergeConfig = Wt;
ct.AxiosHeaders = Ot;
ct.formToJSON = (e) => yr(x.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = gr.getAdapter;
ct.HttpStatusCode = Xi;
ct.default = ct;
const Gi = ct;
function xr(e) {
  if (e.length === 2)
    return new At(e[0], e[1]);
  if (e.length === 3)
    return new At(e[0], e[1], e[2]);
  if (e.length > 4)
    return new At(e[0], e[1], e[2], ...e.slice(3));
  throw new Error("Error: the length of array is not correct");
}
function Sr(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] == null)
      continue;
    let r = xr(e[n]);
    t.push(r);
  }
  return t;
}
function Ki(e) {
  let t = Sr(e);
  return new Ze(t);
}
function Qi(e) {
  return Gi.get(e);
}
function Zi(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(n.geometry.coordinates);
  }), t;
}
function ts(e) {
  let t = e, n = [];
  for (let r = 0; r < t.length; r++) {
    let o;
    for (let i = 0; i < t[r].length; i++)
      o = t[r][i];
    n.push(o);
  }
  return n;
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: Zi,
  GeoPolygons2SimpleArr: ts,
  createMultiPointFromArr: Ki,
  createPointListFromArr: Sr,
  cretePointFromArr: xr,
  readDataFromGeoJSON: Qi
}, Symbol.toStringTag, { value: "Module" }));
class un {
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
    for (let a of n) {
      let u = [];
      for (let c = r; c <= i; c++) {
        let h = [];
        for (let d = o; d <= s; d++)
          h.push(this.data[a][c][d]);
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
    let n = this.data[t], r = 0, o = 0;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[s][l];
        a !== 0 && (r += a, o++);
      }
    let i = r / o;
    for (let s = 0; s < this.rows; s++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[s][l];
        (a === 0 || a === -9999 || a === 999999) && (n[s][l] = i);
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
      let c = [];
      for (let h = r; h <= i; h++) {
        let d = [];
        for (let b = o; b <= s; b++)
          d.push(this.data[u][h][b]);
        c.push(d);
      }
      l.push(c);
    }
    return new un(t, l);
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
      let a = s[0], u = s[1], c = l[0], h = l[1];
      return [a, u, c, h];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (en(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], l = this.MBR[3], a = Math.floor((r - i) / (l - i) * this.rows), u = Math.floor((n - o) / (s - o) * this.cols);
      return [a, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], l = this.MBR[3], a = (r + 0.5) / this.cols * (s - o) + o, u = (n + 0.5) / this.rows * (l - i) + i;
    return [a, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], o = n[0][0], i = 0;
    for (let l = 0; l < this.rows; l++)
      for (let a = 0; a < this.cols; a++) {
        let u = n[l][a];
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
      for (let a = 0; a < this.cols - 1; a++) {
        let u = 0;
        u += o[s][a] * 8, u += o[s][a + 1] * 4, u += o[s + 1][a + 1] * 2, u += o[s + 1][a] * 1, l.push(u);
      }
      i.push(l);
    }
    if (r) {
      for (let a = 0; a < i.length; a++) {
        let u = i[a];
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
function es(e, t, n) {
  let r = e.data[t], o = [];
  for (let i = 0; i < e.rows; i++) {
    let s = [];
    for (let l = 0; l < e.cols; l++)
      r[i][l] < n ? s.push(0) : s.push(1);
    o.push(s);
  }
  return o;
}
function ns(e, t) {
  let n = e.rows * e.cols, r = rs(n) + 3;
  (t > r || t < 0) && (t = r);
  let o = [0, 0, e.rows - 1, e.cols - 1];
  return Zt(o, 0, t);
}
function Zt(e, t, n) {
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
    let o = e[0], i = e[1], s = e[2], l = e[3], a = (o + s) / 2;
    a = Math.floor(a);
    let u = (i + l) / 2;
    u = Math.floor(u);
    let c = [o, u, a, l], h = [a, u, s, l], d = [o, i, a, u], b = [a, i, s, u], y = Zt(c, t + 1, n), g = Zt(h, t + 1, n), O = Zt(d, t + 1, n), _ = Zt(b, t + 1, n);
    return r.children.push(y), r.children.push(g), r.children.push(O), r.children.push(_), r;
  }
}
function rs(e) {
  let t = 0, n = 1;
  for (; n < e; )
    n *= 4, t++;
  return t;
}
function os(e) {
  let t = -1 / 0, n = 1 / 0;
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      e[r][o] > t && (t = e[r][o]), e[r][o] < n && (n = e[r][o]);
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      (e[r][o] === t || e[r][o] === n) && (e[r][o] = 0);
}
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: un,
  binarization: es,
  deMaxMin: os,
  subdivide2QTree: ns
}, Symbol.toStringTag, { value: "Module" }));
class zt {
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
    return en(t, this.boundary) ? !1 : this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0);
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, o = this.boundary[3] - n, i = new zt([t, n + o / 2, t + r / 2, n + o], this.capacity), s = new zt([t + r / 2, n + o / 2, t + r, n + o], this.capacity), l = new zt([t, n, t + r / 2, n + o / 2], this.capacity), a = new zt([t + r / 2, n, t + r, n + o / 2], this.capacity);
    this.northWest = i, this.northEast = s, this.southWest = l, this.southEast = a, this.isDivided = !0, this.depth++;
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
    if (!Vn(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      Wn(this.points[r], t) && n.push(this.points[r]);
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
    for (let o = 0; o < this.points.length; o++)
      t.contains(this.points[o], 45e8) && r.push(this.points[o]);
    return this.northWest === null || (r.push(...this.northWest.queryCircle(t, n)), r.push(...this.northEast.queryCircle(t, n)), r.push(...this.southWest.queryCircle(t, n)), r.push(...this.southEast.queryCircle(t, n))), r;
  }
}
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: zt
}, Symbol.toStringTag, { value: "Module" })), is = Math.E;
function ve(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function ss(e, t) {
  let o = e, i = t;
  o *= 3284157443, i ^= o << 128 | o >> 256 - 128, i *= 1911520717, o ^= i << 128 | i >> 256 - 128, o *= 2048419325;
  const s = o * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(s),
    y: Math.sin(s)
  };
}
function ce(e, t, n, r) {
  const o = ss(e, t), i = n - e, s = r - t;
  return i * o.x + s * o.y;
}
function ls(e, t) {
  const n = Math.floor(e), r = n + 1, o = Math.floor(t), i = o + 1, s = e - n, l = t - o, a = ce(n, o, e, t), u = ce(r, o, e, t), c = ve(a, u, s), h = ce(n, i, e, t), d = ce(r, i, e, t), b = ve(h, d, s);
  return ve(c, b, l);
}
function as(e, t) {
  return Math.pow(is, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function us(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
function cs(e, t, n) {
  const r = new Array(e).fill(0).map(() => new Array(t).fill(0)), o = new Array(n).fill(0).map(() => ({
    x: Math.random() * e,
    y: Math.random() * t
  }));
  for (let i = 0; i < e; i++)
    for (let s = 0; s < t; s++) {
      let l = 1e5;
      for (let a = 0; a < n; a++) {
        const u = Math.sqrt(
          Math.pow(o[a].x - i, 2) + Math.pow(o[a].y - s, 2)
        );
        u < l && (l = u);
      }
      r[i][s] = l;
    }
  return r;
}
function hs(e, t, n, r = "horizontal") {
  const o = new Array(e).fill(0).map(() => new Array(t).fill(0)), i = Math.floor(e / n);
  for (let s = 0; s < e; s++)
    for (let l = 0; l < t; l++)
      r === "vertical" ? o[s][l] = Math.floor(s / i) % 2 === 0 ? 1 : 0 : r === "horizontal" ? o[s][l] = Math.floor(l / i) % 2 === 0 ? 1 : 0 : r === "diagonal" ? o[s][l] = Math.floor((s + l) / i) % 2 === 0 ? 1 : 0 : r === "all" && (o[s][l] = Math.floor((s + l) / i) % 2 === 0 ? 1 : 0, o[s][l] += Math.floor(s / i) % 2 === 0 ? 1 : 0, o[s][l] += Math.floor(l / i) % 2 === 0 ? 1 : 0);
  return o;
}
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: ls,
  Sin3D: us,
  dampedSin3D: as,
  worleyNoise: cs,
  zebraNoise: hs
}, Symbol.toStringTag, { value: "Module" }));
var Mr = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e[e.groupStretch = 4] = "groupStretch", e))(Mr || {}), Er = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(Er || {});
function re(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function Pn(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function Rn(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function On(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function Cn(e, t) {
  let n = 0.1;
  return e < t.mean - n || e > t.mean + n ? 0 : (e - t.min) / (t.max - t.min);
}
function cn(e, t) {
  switch (e) {
    case 0:
      return t ? (n, r) => 1 - re(n, r) : re;
    case 1:
      return t ? (n, r) => 1 - Pn(n, r) : Pn;
    case 2:
      return t ? (n, r) => 1 - Rn(n, r) : Rn;
    case 3:
      return t ? (n, r) => 1 - On(n, r) : On;
    case 4:
      return t ? (n, r) => 1 - Cn(n, r) : Cn;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function Ee(e, t, n = re) {
  let r = n(t, e), o = Math.floor(r * 255);
  return `rgb(${o},${o},${o})`;
}
function Tr(e, t, n = re) {
  let r = Math.floor(n(t[0], e[0]) * 255), o = Math.floor(n(t[1], e[1]) * 255), i = Math.floor(n(t[2], e[2]) * 255);
  return `rgb(${r},${o},${i})`;
}
function fs(e, t) {
  return (n, r) => Tr(n, r, cn(e, t));
}
function ds(e, t) {
  return (n, r) => Ee(n, r, cn(e, t));
}
const _r = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"], Pr = [
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
function ms(e, t, n, r = _r, o = re) {
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
function ys(e, t, n = _r) {
  return (r, o) => ms(r, o, t, n, cn(e));
}
function Rr(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function ps(e, t = Pr) {
  return t[e];
}
const Vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CountourColorList: Pr,
  binaryColorBand: Rr,
  colorListType: Er,
  pseudoColorBandFactory: ys,
  simpleColorBand: Ee,
  simpleColorBandFactory: ds,
  simplePseudoColorBand: ps,
  stretchType: Mr,
  trueColorBand: Tr,
  trueColorBandFactory: fs
}, Symbol.toStringTag, { value: "Module" }));
function ws(e, t, n, r, o = Ee, i) {
  let s = n.w / t[0].length, l = n.h / t.length, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let u = 0; u < t.length; u++)
    for (let c = 0; c < t[0].length; c++) {
      let h = t[u][c], d = o(r, h);
      a.fillStyle = d, a.fillRect(n.x + c * s, n.y + u * l, s, l);
    }
  if (i) {
    let [u, c, h, d] = i;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(n.x + u * s, n.y + c * l, (h - u) * s, (d - c) * l);
  }
}
function gs(e, t, n, r = Rr) {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let u = t[l][a], c = r(u);
      s.fillStyle = c, s.fillRect(n.x + a * o, n.y + l * i, o, i);
    }
}
function bs(e, t, n, r = "white") {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let u = t[l][a];
      As(u, { x: n.x + a * o, y: n.y + l * i, w: o, h: i }, s, r);
    }
}
function As(e, t, n, r = "white") {
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
function te(e, t, n, r, o = Ee, i, s) {
  let l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = r.getSubGridObj(n.boundary).getBandStatistics(0), c = u.mean;
  s ? (s.max = Math.max(s.max, u.max), s.min = Math.min(s.min, u.min), s.mean = (s.mean + u.mean) / 2) : s = u, i || (i = c);
  let h = o(s, c);
  l.fillStyle = h, l.fillRect(t.x, t.y, t.w, t.h), requestAnimationFrame(() => {
    if (n.isDivided) {
      let d = [
        { x: t.x + t.w / 2, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x + t.w / 2, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 }
      ];
      te(e, d[0], n.children[0], r, o, i, s), te(e, d[1], n.children[1], r, o, i, s), te(e, d[2], n.children[2], r, o, i, s), te(e, d[3], n.children[3], r, o, i, s);
    }
  });
}
function xs(e, t, n, r = { color: "black", width: 4, backgroundColor: "rgba(0,0,0,0)" }, o) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((l, a) => l + a) / n.length
  }), i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color, i.lineWidth = r.width / 2;
  let s = r.width / 2;
  for (let l = 0; l < n.length; l++) {
    let a = t.x + t.w * l / n.length, u = t.y + t.h * (1 - (n[l] - o.min) / (o.max - o.min));
    i.beginPath(), i.arc(a, u, s, 0, 2 * Math.PI), i.fill();
  }
  i.strokeStyle = r.color, i.beginPath(), i.moveTo(t.x, t.y + t.h * (1 - (n[0] - o.min) / (o.max - o.min)));
  for (let l = 0; l < n.length; l++) {
    let a = t.x + t.w * l / n.length, u = t.y + t.h * (1 - (n[l] - o.min) / (o.max - o.min));
    i.lineTo(a, u);
  }
  i.stroke(), i.fillStyle = "green", i.font = "12px serif";
  for (let l = 0; l < n.length; l += 16) {
    let a = t.x + t.w * l / n.length, u = t.y + t.h * (1 - (n[l] - o.min) / (o.max - o.min));
    i.fillText(n[l].toFixed(2), a, u);
  }
}
function Ss(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, o, i = !1) {
  let s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, u) => a + u) / n.length
  }), s.fillStyle = r.backgroundColor, s.fillRect(t.x, t.y, t.w, t.h), s.fillStyle = r.color;
  let l = t.w / n.length;
  for (let a = 0; a < n.length; a++) {
    let u = t.x + l * a, c = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    s.fillRect(u, c, l, t.h - c + t.y);
  }
  i && (s.fillStyle = "green", s.font = "12px serif", s.fillText(o.max.toFixed(2), t.x, t.y + 12), s.fillText(o.min.toFixed(2), t.x, t.y + t.h), s.fillText(o.mean.toFixed(2), t.x, t.y + t.h / 2)), s.strokeStyle = "green", s.beginPath(), s.moveTo(t.x, t.y + 12), s.lineTo(t.x + t.w, t.y + 12), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h), s.lineTo(t.x + t.w, t.y + t.h), s.stroke(), s.beginPath(), s.moveTo(t.x, t.y + t.h / 2), s.lineTo(t.x + t.w, t.y + t.h / 2), s.stroke();
}
function Ms(e, t, n, r = { color: "black", font: "12px serif" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.color, o.font = r.font, o.fillText(n, t.x, t.y);
}
function Es(e, t, n, r, o, i) {
  let s = r.w / t.width, l = r.h / t.height, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  let u = [], c = [];
  n.forEach((h) => {
    u.push(t.getBand(h)), c.push(t.getBandStatistics(h));
  });
  for (let h = 0; h < t.height; h++)
    for (let d = 0; d < t.width; d++) {
      let b = n.map((g) => u[g][h][d]), y = o(c, b);
      a.fillStyle = y, a.fillRect(r.x + d * s, r.y + h * l, s, l);
    }
  if (i) {
    let [h, d, b, y] = i;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(r.x + h * s, r.y + d * l, (b - h) * s, (y - d) * l);
  }
  a.strokeStyle = "red", a.lineWidth = 1, a.beginPath(), a.moveTo(r.x + r.w / 2, r.y + r.h / 2 - 10), a.lineTo(r.x + r.w / 2, r.y + r.h / 2 + 10), a.stroke(), a.beginPath(), a.moveTo(r.x + r.w / 2 - 10, r.y + r.h / 2), a.lineTo(r.x + r.w / 2 + 10, r.y + r.h / 2), a.stroke();
}
function Or(e, t, n, r = { color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.backgroundColor, o.fillRect(t.x, t.y, t.w, t.h), o.fillStyle = r.color, o.fillRect(t.x, t.y, t.w * n / 100, t.h), o.strokeStyle = "white", o.lineWidth = 1;
  for (let i = 0; i < 10; i++)
    o.beginPath(), o.moveTo(t.x + t.w * i / 10, t.y), o.lineTo(t.x + t.w * i / 10, t.y + t.h), o.stroke();
  t.h >= 20 && t.w >= 40 && (o.fillStyle = "white", o.font = "20px serif", o.fillText(n + "%", t.x + t.w / 2 - 20, t.y + t.h / 2 + 6));
}
function Ts() {
  let e = document.createElement("canvas");
  e.width = 200, e.height = 20, document.body.appendChild(e);
  let t = { x: 0, y: 0, w: 200, h: 20 }, n = 0;
  setInterval(() => {
    Or(e, t, n), n += 1, n > 100 && (n = 0);
  }, 100);
}
const Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  binDrawGrid2d: gs,
  drawCountour: bs,
  drawGrid2d: ws,
  drawProgress: Or,
  drawQTree2d: te,
  drawSample: xs,
  drawSample2: Ss,
  drawText: Ms,
  drawTrueColorGrid2d: Es,
  testProgress: Ts
}, Symbol.toStringTag, { value: "Module" }));
function _s(e, t, n, r, o = 1, i = 1) {
  let s = new Array(t), l = (r - n) / t;
  for (let a = 0; a < t; a++)
    s[a] = e(2 * Math.PI * o * (n + a * l)) * i;
  return s;
}
function ge(e, t) {
  return {
    real: e.real * t.real - e.imag * t.imag,
    imag: e.real * t.imag + e.imag * t.real
  };
}
function Cr(e, t) {
  return {
    real: e.real + t.real,
    imag: e.imag + t.imag
  };
}
function kr(e, t) {
  return {
    real: e.real - t.real,
    imag: e.imag - t.imag
  };
}
function Lr(e, t) {
  let n = -2 * Math.PI * e / t;
  return { real: Math.cos(n), imag: Math.sin(n) };
}
function Ps(e) {
  return e.imag *= -1, e;
}
function Rs(e, t) {
  let n = [];
  for (let r = 0; r < t; r++)
    n.push({ real: e[r], imag: 0 });
  return n;
}
function Fr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[Os(r, t)];
  return n;
}
function Os(e, t) {
  let n = e.toString(2);
  return n = n.split("").reverse().join(""), n = n + "0".repeat(Math.log2(t) - n.length), parseInt(n, 2);
}
function Nr(e) {
  let t = e.length, n = Rs(e, t), o = Fr(n).slice();
  for (let i = 1; i < Math.log2(t) + 1; i++) {
    let s = Math.pow(2, i), l = Lr(1, s);
    for (let a = 0; a < t; a += s) {
      let u = { real: 1, imag: 0 };
      for (let c = 0; c < s / 2; c++) {
        let h = ge(u, o[a + c + s / 2]), d = o[a + c];
        o[a + c] = Cr(d, h), o[a + c + s / 2] = kr(d, h), u = ge(u, l);
      }
    }
  }
  return o;
}
function Cs(e) {
  let n = Je(e).map((o) => o.map((i) => Math.sqrt(i.real * i.real + i.imag * i.imag)));
  return vr(Je(n, "column"));
}
function Br(e) {
  let t = e.length, r = Fr(e).slice();
  for (let o = 1; o < Math.log2(t) + 1; o++) {
    let i = Math.pow(2, o), s = Lr(-1, i);
    for (let l = 0; l < t; l += i) {
      let a = { real: 1, imag: 0 };
      for (let u = 0; u < i / 2; u++) {
        let c = ge(a, r[l + u + i / 2]), h = r[l + u];
        r[l + u] = Cr(h, c), r[l + u + i / 2] = kr(h, c), a = ge(a, s);
      }
    }
  }
  for (let o = 0; o < t; o++)
    r[o].real /= t, r[o].imag /= t;
  return r;
}
function kn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Ir(e[r]);
  return n;
}
function Dr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function ks(e, t = "row") {
  return t === "row" ? Ln(e) : Te(Ln($t(e)));
}
function Ln(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Dr(e[r]);
  return n;
}
function Je(e, t = "row") {
  return t === "row" ? Fn(e) : $t(Fn(Te(e)));
}
function Fn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill(0));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Nr(e[o]);
  return r;
}
function Ls(e, t = "row") {
  return t === "row" ? Nn(e) : $t(Nn($t(e)));
}
function Nn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill({ real: 0, imag: 0 }));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Br(e[o]);
  return r;
}
function Te(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[o][r];
  }
  return n;
}
function $t(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[o][r];
  }
  return n;
}
function Ir(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].imag;
  return n;
}
function Fs(e, t = "row") {
  return t === "row" ? kn(e) : Te(kn($t(e)));
}
function jr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function Bn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = jr(e[r]);
  return n;
}
function Ns(e, t = "row") {
  return t === "row" ? Bn(e) : Te(Bn($t(e)));
}
function vr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[(r + t / 2) % t][(o + t / 2) % t];
  }
  return n;
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FFT: Nr,
  FFT2: Je,
  FFTImag: Ir,
  FFTImag2: Fs,
  FFTReal: jr,
  FFTReal2: Ns,
  FFTShift: vr,
  IFFT: Br,
  IFFT2: Ls,
  IFFTReal: Dr,
  IFFTReal2: ks,
  conj: Ps,
  fastFFT2: Cs,
  sample: _s
}, Symbol.toStringTag, { value: "Module" }));
export {
  qs as CGUtils,
  Vs as Colors,
  Ws as Coverage,
  zs as Delaunay,
  Gs as Fourier,
  vs as Geometry,
  Us as Measuration,
  Ys as Meta,
  Js as Noise,
  $s as QuadTree,
  js as Reference,
  Xs as Renderer,
  Hs as Shell,
  Is as Unit,
  Ds as Utils
};
