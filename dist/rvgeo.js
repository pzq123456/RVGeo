var Ur = Object.defineProperty;
var qr = (e, t, n) => t in e ? Ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (qr(e, typeof t != "symbol" ? t + "" : t, n), n);
const mt = 11102230246251565e-32, R = 134217729, In = (3 + 8 * mt) * mt;
function ut(e, t, n, r, o) {
  let s, i, l, a, h = t[0], u = r[0], f = 0, d = 0;
  u > h == u > -h ? (s = h, h = t[++f]) : (s = u, u = r[++d]);
  let b = 0;
  if (f < e && d < n)
    for (u > h == u > -h ? (i = h + s, l = s - (i - h), h = t[++f]) : (i = u + s, l = s - (i - u), u = r[++d]), s = i, l !== 0 && (o[b++] = l); f < e && d < n; )
      u > h == u > -h ? (i = s + h, a = i - s, l = s - (i - a) + (h - a), h = t[++f]) : (i = s + u, a = i - s, l = s - (i - a) + (u - a), u = r[++d]), s = i, l !== 0 && (o[b++] = l);
  for (; f < e; )
    i = s + h, a = i - s, l = s - (i - a) + (h - a), h = t[++f], s = i, l !== 0 && (o[b++] = l);
  for (; d < n; )
    i = s + u, a = i - s, l = s - (i - a) + (u - a), u = r[++d], s = i, l !== 0 && (o[b++] = l);
  return (s !== 0 || b === 0) && (o[b++] = s), b;
}
function bt(e, t, n, r, o, s, i, l) {
  return ut(ut(e, t, n, r, i), i, o, s, l);
}
function M(e, t, n, r) {
  let o, s, i, l, a, h, u, f, d, b, y;
  u = R * n, b = u - (u - n), y = n - b;
  let g = t[0];
  o = g * n, u = R * g, f = u - (u - g), d = g - f, i = d * y - (o - f * b - d * b - f * y);
  let O = 0;
  i !== 0 && (r[O++] = i);
  for (let _ = 1; _ < e; _++)
    g = t[_], l = g * n, u = R * g, f = u - (u - g), d = g - f, a = d * y - (l - f * b - d * b - f * y), s = o + a, h = s - o, i = o - (s - h) + (a - h), i !== 0 && (r[O++] = i), o = l + s, i = s - (o - l), i !== 0 && (r[O++] = i);
  return (o !== 0 || O === 0) && (r[O++] = o), O;
}
function Dn(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function V(e) {
  return new Float64Array(e);
}
const zr = (3 + 16 * mt) * mt, Hr = (2 + 12 * mt) * mt, Yr = (9 + 64 * mt) * mt * mt, Ut = V(4), fn = V(8), cn = V(12), dn = V(16), yt = V(4);
function Wr(e, t, n, r, o, s, i) {
  let l, a, h, u, f, d, b, y, g, O, _, D, v, J, tt, nt, st, rt;
  const C = e - o, q = n - o, U = t - s, z = r - s;
  J = C * z, d = R * C, b = d - (d - C), y = C - b, d = R * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * q, d = R * U, b = d - (d - U), y = U - b, d = R * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, f = tt - _, Ut[0] = tt - (_ + f) + (f - st), D = J + _, f = D - J, v = J - (D - f) + (_ - f), _ = v - nt, f = v - _, Ut[1] = v - (_ + f) + (f - nt), rt = D + _, f = rt - D, Ut[2] = D - (rt - f) + (_ - f), Ut[3] = rt;
  let et = Dn(4, Ut), c = Hr * i;
  if (et >= c || -et >= c || (f = e - C, l = e - (C + f) + (f - o), f = n - q, h = n - (q + f) + (f - o), f = t - U, a = t - (U + f) + (f - s), f = r - z, u = r - (z + f) + (f - s), l === 0 && a === 0 && h === 0 && u === 0) || (c = Yr * i + In * Math.abs(et), et += C * u + z * l - (U * h + q * a), et >= c || -et >= c))
    return et;
  J = l * z, d = R * l, b = d - (d - l), y = l - b, d = R * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = a * q, d = R * a, b = d - (d - a), y = a - b, d = R * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, f = tt - _, yt[0] = tt - (_ + f) + (f - st), D = J + _, f = D - J, v = J - (D - f) + (_ - f), _ = v - nt, f = v - _, yt[1] = v - (_ + f) + (f - nt), rt = D + _, f = rt - D, yt[2] = D - (rt - f) + (_ - f), yt[3] = rt;
  const m = ut(4, Ut, 4, yt, fn);
  J = C * u, d = R * C, b = d - (d - C), y = C - b, d = R * u, g = d - (d - u), O = u - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * h, d = R * U, b = d - (d - U), y = U - b, d = R * h, g = d - (d - h), O = h - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, f = tt - _, yt[0] = tt - (_ + f) + (f - st), D = J + _, f = D - J, v = J - (D - f) + (_ - f), _ = v - nt, f = v - _, yt[1] = v - (_ + f) + (f - nt), rt = D + _, f = rt - D, yt[2] = D - (rt - f) + (_ - f), yt[3] = rt;
  const p = ut(m, fn, 4, yt, cn);
  J = l * u, d = R * l, b = d - (d - l), y = l - b, d = R * u, g = d - (d - u), O = u - g, tt = y * O - (J - b * g - y * g - b * O), nt = a * h, d = R * a, b = d - (d - a), y = a - b, d = R * h, g = d - (d - h), O = h - g, st = y * O - (nt - b * g - y * g - b * O), _ = tt - st, f = tt - _, yt[0] = tt - (_ + f) + (f - st), D = J + _, f = D - J, v = J - (D - f) + (_ - f), _ = v - nt, f = v - _, yt[1] = v - (_ + f) + (f - nt), rt = D + _, f = rt - D, yt[2] = D - (rt - f) + (_ - f), yt[3] = rt;
  const x = ut(p, cn, 4, yt, dn);
  return dn[x - 1];
}
function Qt(e, t, n, r, o, s) {
  const i = (t - s) * (n - o), l = (e - o) * (r - s), a = i - l, h = Math.abs(i + l);
  return Math.abs(a) >= zr * h ? a : -Wr(e, t, n, r, o, s, h);
}
const $r = (10 + 96 * mt) * mt, Jr = (4 + 48 * mt) * mt, Vr = (44 + 576 * mt) * mt * mt, Ct = V(4), kt = V(4), Lt = V(4), Mt = V(4), Et = V(4), Tt = V(4), pt = V(4), wt = V(4), Pe = V(8), Re = V(8), Oe = V(8), Ce = V(8), ke = V(8), Le = V(8), se = V(8), le = V(8), ae = V(8), Bt = V(4), It = V(4), Dt = V(4), k = V(8), I = V(16), ot = V(16), it = V(16), K = V(32), Ft = V(32), lt = V(48), gt = V(64);
let Ht = V(1152), Fe = V(1152);
function at(e, t, n) {
  e = ut(e, Ht, t, n, Fe);
  const r = Ht;
  return Ht = Fe, Fe = r, e;
}
function Xr(e, t, n, r, o, s, i, l, a) {
  let h, u, f, d, b, y, g, O, _, D, v, J, tt, nt, st, rt, C, q, U, z, et, c, m, p, x, S, T, w, E, L, P, F, N, j, B;
  const H = e - i, Y = n - i, W = o - i, X = t - l, $ = r - l, G = s - l;
  P = Y * G, m = R * Y, p = m - (m - Y), x = Y - p, m = R * G, S = m - (m - G), T = G - S, F = x * T - (P - p * S - x * S - p * T), N = W * $, m = R * W, p = m - (m - W), x = W - p, m = R * $, S = m - (m - $), T = $ - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, Ct[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, Ct[1] = L - (w + c) + (c - N), B = E + w, c = B - E, Ct[2] = E - (B - c) + (w - c), Ct[3] = B, P = W * X, m = R * W, p = m - (m - W), x = W - p, m = R * X, S = m - (m - X), T = X - S, F = x * T - (P - p * S - x * S - p * T), N = H * G, m = R * H, p = m - (m - H), x = H - p, m = R * G, S = m - (m - G), T = G - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, kt[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, kt[1] = L - (w + c) + (c - N), B = E + w, c = B - E, kt[2] = E - (B - c) + (w - c), kt[3] = B, P = H * $, m = R * H, p = m - (m - H), x = H - p, m = R * $, S = m - (m - $), T = $ - S, F = x * T - (P - p * S - x * S - p * T), N = Y * X, m = R * Y, p = m - (m - Y), x = Y - p, m = R * X, S = m - (m - X), T = X - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, Lt[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, Lt[1] = L - (w + c) + (c - N), B = E + w, c = B - E, Lt[2] = E - (B - c) + (w - c), Lt[3] = B, h = ut(
    ut(
      ut(
        M(M(4, Ct, H, k), k, H, I),
        I,
        M(M(4, Ct, X, k), k, X, ot),
        ot,
        K
      ),
      K,
      ut(
        M(M(4, kt, Y, k), k, Y, I),
        I,
        M(M(4, kt, $, k), k, $, ot),
        ot,
        Ft
      ),
      Ft,
      gt
    ),
    gt,
    ut(
      M(M(4, Lt, W, k), k, W, I),
      I,
      M(M(4, Lt, G, k), k, G, ot),
      ot,
      K
    ),
    K,
    Ht
  );
  let Rt = Dn(h, Ht), Xt = Jr * a;
  if (Rt >= Xt || -Rt >= Xt || (c = e - H, u = e - (H + c) + (c - i), c = t - X, b = t - (X + c) + (c - l), c = n - Y, f = n - (Y + c) + (c - i), c = r - $, y = r - ($ + c) + (c - l), c = o - W, d = o - (W + c) + (c - i), c = s - G, g = s - (G + c) + (c - l), u === 0 && f === 0 && d === 0 && b === 0 && y === 0 && g === 0) || (Xt = Vr * a + In * Math.abs(Rt), Rt += (H * H + X * X) * (Y * g + G * f - ($ * d + W * y)) + 2 * (H * u + X * b) * (Y * G - $ * W) + ((Y * Y + $ * $) * (W * b + X * d - (G * u + H * g)) + 2 * (Y * f + $ * y) * (W * X - G * H)) + ((W * W + G * G) * (H * y + $ * u - (X * f + Y * b)) + 2 * (W * d + G * g) * (H * $ - X * Y)), Rt >= Xt || -Rt >= Xt))
    return Rt;
  if ((f !== 0 || y !== 0 || d !== 0 || g !== 0) && (P = H * H, m = R * H, p = m - (m - H), x = H - p, F = x * x - (P - p * p - (p + p) * x), N = X * X, m = R * X, p = m - (m - X), x = X - p, j = x * x - (N - p * p - (p + p) * x), w = F + j, c = w - F, Mt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, Mt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, Mt[2] = E - (B - c) + (w - c), Mt[3] = B), (d !== 0 || g !== 0 || u !== 0 || b !== 0) && (P = Y * Y, m = R * Y, p = m - (m - Y), x = Y - p, F = x * x - (P - p * p - (p + p) * x), N = $ * $, m = R * $, p = m - (m - $), x = $ - p, j = x * x - (N - p * p - (p + p) * x), w = F + j, c = w - F, Et[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, Et[1] = L - (w - c) + (N - c), B = E + w, c = B - E, Et[2] = E - (B - c) + (w - c), Et[3] = B), (u !== 0 || b !== 0 || f !== 0 || y !== 0) && (P = W * W, m = R * W, p = m - (m - W), x = W - p, F = x * x - (P - p * p - (p + p) * x), N = G * G, m = R * G, p = m - (m - G), x = G - p, j = x * x - (N - p * p - (p + p) * x), w = F + j, c = w - F, Tt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, Tt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, Tt[2] = E - (B - c) + (w - c), Tt[3] = B), u !== 0 && (O = M(4, Ct, u, Pe), h = at(h, bt(
    M(O, Pe, 2 * H, I),
    I,
    M(M(4, Tt, u, k), k, $, ot),
    ot,
    M(M(4, Et, u, k), k, -G, it),
    it,
    K,
    lt
  ), lt)), b !== 0 && (_ = M(4, Ct, b, Re), h = at(h, bt(
    M(_, Re, 2 * X, I),
    I,
    M(M(4, Et, b, k), k, W, ot),
    ot,
    M(M(4, Tt, b, k), k, -Y, it),
    it,
    K,
    lt
  ), lt)), f !== 0 && (D = M(4, kt, f, Oe), h = at(h, bt(
    M(D, Oe, 2 * Y, I),
    I,
    M(M(4, Mt, f, k), k, G, ot),
    ot,
    M(M(4, Tt, f, k), k, -X, it),
    it,
    K,
    lt
  ), lt)), y !== 0 && (v = M(4, kt, y, Ce), h = at(h, bt(
    M(v, Ce, 2 * $, I),
    I,
    M(M(4, Tt, y, k), k, H, ot),
    ot,
    M(M(4, Mt, y, k), k, -W, it),
    it,
    K,
    lt
  ), lt)), d !== 0 && (J = M(4, Lt, d, ke), h = at(h, bt(
    M(J, ke, 2 * W, I),
    I,
    M(M(4, Et, d, k), k, X, ot),
    ot,
    M(M(4, Mt, d, k), k, -$, it),
    it,
    K,
    lt
  ), lt)), g !== 0 && (tt = M(4, Lt, g, Le), h = at(h, bt(
    M(tt, Le, 2 * G, I),
    I,
    M(M(4, Mt, g, k), k, Y, ot),
    ot,
    M(M(4, Et, g, k), k, -H, it),
    it,
    K,
    lt
  ), lt)), u !== 0 || b !== 0) {
    if (f !== 0 || y !== 0 || d !== 0 || g !== 0 ? (P = f * G, m = R * f, p = m - (m - f), x = f - p, m = R * G, S = m - (m - G), T = G - S, F = x * T - (P - p * S - x * S - p * T), N = Y * g, m = R * Y, p = m - (m - Y), x = Y - p, m = R * g, S = m - (m - g), T = g - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, pt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, pt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, pt[2] = E - (B - c) + (w - c), pt[3] = B, P = d * -$, m = R * d, p = m - (m - d), x = d - p, m = R * -$, S = m - (m - -$), T = -$ - S, F = x * T - (P - p * S - x * S - p * T), N = W * -y, m = R * W, p = m - (m - W), x = W - p, m = R * -y, S = m - (m - -y), T = -y - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, wt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, wt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, wt[2] = E - (B - c) + (w - c), wt[3] = B, st = ut(4, pt, 4, wt, le), P = f * g, m = R * f, p = m - (m - f), x = f - p, m = R * g, S = m - (m - g), T = g - S, F = x * T - (P - p * S - x * S - p * T), N = d * y, m = R * d, p = m - (m - d), x = d - p, m = R * y, S = m - (m - y), T = y - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, It[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, It[1] = L - (w + c) + (c - N), B = E + w, c = B - E, It[2] = E - (B - c) + (w - c), It[3] = B, q = 4) : (le[0] = 0, st = 1, It[0] = 0, q = 1), u !== 0) {
      const ft = M(st, le, u, it);
      h = at(h, ut(
        M(O, Pe, u, I),
        I,
        M(ft, it, 2 * H, K),
        K,
        lt
      ), lt);
      const ct = M(q, It, u, k);
      h = at(h, bt(
        M(ct, k, 2 * H, I),
        I,
        M(ct, k, u, ot),
        ot,
        M(ft, it, u, K),
        K,
        Ft,
        gt
      ), gt), y !== 0 && (h = at(h, M(M(4, Tt, u, k), k, y, I), I)), g !== 0 && (h = at(h, M(M(4, Et, -u, k), k, g, I), I));
    }
    if (b !== 0) {
      const ft = M(st, le, b, it);
      h = at(h, ut(
        M(_, Re, b, I),
        I,
        M(ft, it, 2 * X, K),
        K,
        lt
      ), lt);
      const ct = M(q, It, b, k);
      h = at(h, bt(
        M(ct, k, 2 * X, I),
        I,
        M(ct, k, b, ot),
        ot,
        M(ft, it, b, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (f !== 0 || y !== 0) {
    if (d !== 0 || g !== 0 || u !== 0 || b !== 0 ? (P = d * X, m = R * d, p = m - (m - d), x = d - p, m = R * X, S = m - (m - X), T = X - S, F = x * T - (P - p * S - x * S - p * T), N = W * b, m = R * W, p = m - (m - W), x = W - p, m = R * b, S = m - (m - b), T = b - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, pt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, pt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, pt[2] = E - (B - c) + (w - c), pt[3] = B, z = -G, et = -g, P = u * z, m = R * u, p = m - (m - u), x = u - p, m = R * z, S = m - (m - z), T = z - S, F = x * T - (P - p * S - x * S - p * T), N = H * et, m = R * H, p = m - (m - H), x = H - p, m = R * et, S = m - (m - et), T = et - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, wt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, wt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, wt[2] = E - (B - c) + (w - c), wt[3] = B, rt = ut(4, pt, 4, wt, ae), P = d * b, m = R * d, p = m - (m - d), x = d - p, m = R * b, S = m - (m - b), T = b - S, F = x * T - (P - p * S - x * S - p * T), N = u * g, m = R * u, p = m - (m - u), x = u - p, m = R * g, S = m - (m - g), T = g - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, Dt[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, Dt[1] = L - (w + c) + (c - N), B = E + w, c = B - E, Dt[2] = E - (B - c) + (w - c), Dt[3] = B, U = 4) : (ae[0] = 0, rt = 1, Dt[0] = 0, U = 1), f !== 0) {
      const ft = M(rt, ae, f, it);
      h = at(h, ut(
        M(D, Oe, f, I),
        I,
        M(ft, it, 2 * Y, K),
        K,
        lt
      ), lt);
      const ct = M(U, Dt, f, k);
      h = at(h, bt(
        M(ct, k, 2 * Y, I),
        I,
        M(ct, k, f, ot),
        ot,
        M(ft, it, f, K),
        K,
        Ft,
        gt
      ), gt), g !== 0 && (h = at(h, M(M(4, Mt, f, k), k, g, I), I)), b !== 0 && (h = at(h, M(M(4, Tt, -f, k), k, b, I), I));
    }
    if (y !== 0) {
      const ft = M(rt, ae, y, it);
      h = at(h, ut(
        M(v, Ce, y, I),
        I,
        M(ft, it, 2 * $, K),
        K,
        lt
      ), lt);
      const ct = M(U, Dt, y, k);
      h = at(h, bt(
        M(ct, k, 2 * $, I),
        I,
        M(ct, k, y, ot),
        ot,
        M(ft, it, y, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (d !== 0 || g !== 0) {
    if (u !== 0 || b !== 0 || f !== 0 || y !== 0 ? (P = u * $, m = R * u, p = m - (m - u), x = u - p, m = R * $, S = m - (m - $), T = $ - S, F = x * T - (P - p * S - x * S - p * T), N = H * y, m = R * H, p = m - (m - H), x = H - p, m = R * y, S = m - (m - y), T = y - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, pt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, pt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, pt[2] = E - (B - c) + (w - c), pt[3] = B, z = -X, et = -b, P = f * z, m = R * f, p = m - (m - f), x = f - p, m = R * z, S = m - (m - z), T = z - S, F = x * T - (P - p * S - x * S - p * T), N = Y * et, m = R * Y, p = m - (m - Y), x = Y - p, m = R * et, S = m - (m - et), T = et - S, j = x * T - (N - p * S - x * S - p * T), w = F + j, c = w - F, wt[0] = F - (w - c) + (j - c), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L + N, c = w - L, wt[1] = L - (w - c) + (N - c), B = E + w, c = B - E, wt[2] = E - (B - c) + (w - c), wt[3] = B, nt = ut(4, pt, 4, wt, se), P = u * y, m = R * u, p = m - (m - u), x = u - p, m = R * y, S = m - (m - y), T = y - S, F = x * T - (P - p * S - x * S - p * T), N = f * b, m = R * f, p = m - (m - f), x = f - p, m = R * b, S = m - (m - b), T = b - S, j = x * T - (N - p * S - x * S - p * T), w = F - j, c = F - w, Bt[0] = F - (w + c) + (c - j), E = P + w, c = E - P, L = P - (E - c) + (w - c), w = L - N, c = L - w, Bt[1] = L - (w + c) + (c - N), B = E + w, c = B - E, Bt[2] = E - (B - c) + (w - c), Bt[3] = B, C = 4) : (se[0] = 0, nt = 1, Bt[0] = 0, C = 1), d !== 0) {
      const ft = M(nt, se, d, it);
      h = at(h, ut(
        M(J, ke, d, I),
        I,
        M(ft, it, 2 * W, K),
        K,
        lt
      ), lt);
      const ct = M(C, Bt, d, k);
      h = at(h, bt(
        M(ct, k, 2 * W, I),
        I,
        M(ct, k, d, ot),
        ot,
        M(ft, it, d, K),
        K,
        Ft,
        gt
      ), gt), b !== 0 && (h = at(h, M(M(4, Et, d, k), k, b, I), I)), y !== 0 && (h = at(h, M(M(4, Mt, -d, k), k, y, I), I));
    }
    if (g !== 0) {
      const ft = M(nt, se, g, it);
      h = at(h, ut(
        M(tt, Le, g, I),
        I,
        M(ft, it, 2 * G, K),
        K,
        lt
      ), lt);
      const ct = M(C, Bt, g, k);
      h = at(h, bt(
        M(ct, k, 2 * G, I),
        I,
        M(ct, k, g, ot),
        ot,
        M(ft, it, g, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  return Ht[h - 1];
}
function Gr(e, t, n, r, o, s, i, l) {
  const a = e - i, h = n - i, u = o - i, f = t - l, d = r - l, b = s - l, y = h * b, g = u * d, O = a * a + f * f, _ = u * f, D = a * b, v = h * h + d * d, J = a * d, tt = h * f, nt = u * u + b * b, st = O * (y - g) + v * (_ - D) + nt * (J - tt), rt = (Math.abs(y) + Math.abs(g)) * O + (Math.abs(_) + Math.abs(D)) * v + (Math.abs(J) + Math.abs(tt)) * nt, C = $r * rt;
  return st > C || -st > C ? st : Xr(e, t, n, r, o, s, i, l, rt);
}
function qe(e, t = 0) {
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
function Xe(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], o = e[1], s = t[0], i = t[1], l = n[0], a = n[1], h = (s - r) * (a - o) - (i - o) * (l - r);
  return h = Jt(h), h;
}
function ee(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), o = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return o = o * 180 / Math.PI, o < 0 && (o += 360), o;
}
function Kr(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let o = e[0], s = e[1], i = t[0], l = t[1], a = n[0], h = n[1], u = Qt(o, s, i, l, a, h);
  return r && (u = -u), u = Jt(u), u;
}
function Qr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], s = e[1], i = t[0], l = t[1], a = n[0], h = n[1], u = r[0], f = r[1], d = Gr(o, s, i, l, a, h, u, f);
  return d = Jt(d), d;
}
function Zr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], s = e[1], i = t[0], l = t[1], a = n[0], h = n[1], u = r[0], f = r[1];
  const d = o - u, b = s - f, y = i - u, g = l - f, O = a - u, _ = h - f, D = d * d + b * b, v = y * y + g * g, J = O * O + _ * _;
  let tt = d * (g * J - v * _) - b * (y * J - v * O) + D * (y * _ - g * O);
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
    Array.isArray(t) ? t.forEach((s) => {
      o.push(r[s]);
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
  ccw: Xe,
  ccwRobust: Kr,
  concatEL2DArray: eo,
  fillIndexArray: Un,
  flattenArray: vn,
  getAngle: ee,
  inCircle: Zr,
  inCircleRobust: Qr,
  randomIndexArray: ro,
  round: qe,
  sign: Jt,
  subColumnInEL2DArray: no
}, Symbol.toStringTag, { value: "Module" })), qn = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = qn.a, Ge = {
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
}, Ke = {
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
}, Qe = {
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
function Ze(e, t = "kilometers") {
  const n = Ge[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function oo(e, t = "kilometers") {
  const n = Ge[t];
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
  const n = Ke[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function pe(e, t) {
  const n = Ke[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function so(e, t, n) {
  return pe(zn(e, t), n);
}
const js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: Qe,
  degreesToRadians: Yt,
  earthRadius: dt,
  factors: Ge,
  factors2: Ke,
  lengthToRadians: oo,
  metersTo: pe,
  radiansToDegrees: io,
  radiansToLength: Ze,
  toMeters: zn,
  unitTounit: so
}, Symbol.toStringTag, { value: "Module" }));
function At(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, o = dt, s = Array.isArray(e) ? e : e.to2DArray(), i = jn(s[0]);
  let l = Yt(i), a = Yt(s[1]);
  return l = Ze(l, "meters"), a = o * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * a)), l > r && (l = r), l < -r && (l = -r), a > r && (a = r), a < -r && (a = -r), l = qe(pe(l, t), n), a = qe(pe(a, t), n), [l, a];
}
function jt(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function lo(e, t = "meters", n = 6) {
  if (e[0] instanceof xt) {
    let r = [];
    for (let o = 0; o < e.length; o++)
      r.push(At(e[o], t, n));
    return r;
  } else {
    let r = [];
    for (let o = 0; o < e.length; o++)
      r.push(At(e[o], t, n));
    return r;
  }
}
function ao(e, t = "meters", n = 6) {
  let r = [], o = At([e[0], e[1]], t, n), s = At([e[2], e[3]], t, n);
  return r = [o[0], o[1], s[0], s[1]], r;
}
function uo(e, t = "meters", n = 6) {
  let r = [], o = jt([e[0], e[1]]), s = jt([e[2], e[3]]);
  return r = [o[0], o[1], s[0], s[1]], r;
}
const vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: ao,
  convertToMercator: At,
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
function ho(e) {
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
function fo(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s][0], l = e[s][1];
    t = Math.min(t, i), n = Math.min(n, l), r = Math.max(r, i), o = Math.max(o, l);
  }
  return [t, n, r, o];
}
function Wn(e, t) {
  let n = t[0], r = t[1], o = t[2], s = t[3], i = e[0], l = e[1];
  return i >= n && i <= o && l >= r && l <= s;
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
class xt {
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
    return At(this, t);
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
class tn extends $n {
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
        r.push(new xt(t[o][0], t[o][1]));
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
    for (let s = 0; s < this.coordinates.length; s++) {
      let i = this.coordinates[s].to2DArray();
      t = Math.min(t, i[0]), n = Math.min(n, i[1]), r = Math.max(r, i[0]), o = Math.max(o, i[1]);
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
      let s = r, i = o;
      return new xt(s, i);
    } else {
      let n = 0, r = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        let l = this.coordinates[i].to2DArray();
        n += l[0], r += l[1];
      }
      let o = n / this.coordinates.length, s = r / this.coordinates.length;
      return new xt(o, s);
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
    let n = xt.isPoint(t) ? t : new xt(t[0], t[1]);
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
class en extends tn {
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
      let s = ee(n, r.toXY()), i = ee(n, o.toXY());
      return s < i ? -1 : s > i ? 1 : 0;
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
    for (let s = 0; s < this.coordinates.length; s++) {
      let i = this.coordinates[s].getMBR();
      t = Math.min(t, i[0]), n = Math.min(n, i[1]), r = Math.max(r, i[2]), o = Math.max(o, i[3]);
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
class co extends Jn {
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
    let n = Hn(t), r = Math.abs(n.x - this.x), o = Math.abs(n.y - this.y), s = this.r, i = n.w / 2, l = n.h / 2, a = Math.pow(r - i, 2) + Math.pow(o - l, 2);
    return r > s + i || o > s + l ? !1 : r <= i || o <= l ? !0 : a <= this.rSquared;
  }
}
const Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: mo,
  LineString: en,
  MultiLineString: Jn,
  MultiPoint: tn,
  Point: xt,
  Polygon: co,
  getPointsMBR: fo,
  mbrToPolygon: Yn,
  mbrToRectangle: Hn,
  pointInMBR: Wn,
  rectangleToMBR: ho
}, Symbol.toStringTag, { value: "Module" })), mn = qn.a;
function yo(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), o = Array.isArray(t) ? t : t.to2DArray();
  r.map((u, f) => {
    r[f] = Yt(u);
  }), o.map((u, f) => {
    o[f] = Yt(u);
  });
  const s = o[1] - r[1], i = o[0] - r[0], l = r[1], a = o[1], h = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(s / 2), 2) + Math.pow(Math.sin(i / 2), 2) * Math.cos(l) * Math.cos(a)
    )
  );
  return Ze(h, n);
}
function po(e, t = "kilometers") {
  let n = en.isLineString(e) ? e.toXYArray() : e;
  if (n.length < 3)
    return 0;
  xt.isPoint(n[0]) && (n = n, n.map((s, i) => {
    n[i] = s.toXY();
  })), n = n;
  let r = 0, o = n.length - 1;
  for (let s = 0; s < n.length; s++)
    r += (n[o][0] + n[s][0]) * (n[o][1] - n[s][1]), o = s;
  return r = r * Qe[t] / 2, Math.abs(r);
}
function wo(e, t = "kilometers") {
  let n = en.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  xt.isPoint(n[0]) && (n = n, n.map((i, l) => {
    n[l] = i.to2DArray();
  })), n = n;
  let r = 0, o = n.length, s = [];
  for (let i = 0; i < o; i++) {
    s.push([]);
    for (let l = 0; l < 2; l++) {
      let a = Yt(n[i][l]);
      s[i].push(a);
    }
  }
  for (let i = 0; i < o; i++) {
    let l = (i + 1) % o, a = (i + 2) % o;
    r += (s[i][0] - s[a][0]) * Math.sin(s[l][1]);
  }
  return r = r * mn * mn / 2, r = r * Qe[t], Math.abs(r);
}
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: po,
  SpherePolygonArea: wo,
  haversine: yo
}, Symbol.toStringTag, { value: "Module" }));
function fe(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function go(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ze(e, t, n, r, o = At, s = jt, i = !1) {
  o && (e = o(e), t = o(t), n = o(n), r = o(r));
  let l = [t[0] - e[0], t[1] - e[1]], a = [r[0] - n[0], r[1] - n[1]], h = fe(l, a);
  if (h === 0)
    return console.log("两条线段平行或共线"), null;
  let u = fe([n[0] - e[0], n[1] - e[1]], a) / h, f = fe([n[0] - e[0], n[1] - e[1]], l) / h;
  return !i && (u < 0 || u > 1 || f < 0 || f > 1) ? (console.log("交点不在两条线段上"), null) : s ? s([e[0] + l[0] * u, e[1] + l[1] * u]) : [e[0] + l[0] * u, e[1] + l[1] * u];
}
function nn(e, t, n = !1) {
  if (n) {
    let r = At(e), o = t[0], s = t[1], i = t[2], l = t[3];
    return [o, s] = At([o, s]), [i, l] = At([i, l]), r[0] < o || r[0] > i || r[1] < s || r[1] > l;
  } else {
    let r = t[0], o = t[1], s = t[2], i = t[3];
    return e[0] < r || e[0] > s || e[1] < o || e[1] > i;
  }
}
function Vn(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function Xn(e, t) {
  return Gn(e, Yn(t));
}
function Gn(e, t) {
  let n = e[e.length - 1], r, o, s, i = t;
  for (let l in e) {
    r = e[l];
    let a = i;
    i = [], o = a[a.length - 1];
    for (let h in a) {
      if (s = a[h], ce(s, n, r)) {
        if (!ce(o, n, r)) {
          let u = ze(
            o,
            s,
            n,
            r,
            At,
            jt,
            !0
          );
          i.push(u);
        }
        i.push(s);
      } else if (ce(o, n, r)) {
        let u = ze(
          o,
          s,
          n,
          r,
          At,
          jt,
          !0
        );
        i.push(u);
      }
      o = s;
    }
    n = r;
  }
  return i;
}
function bo(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++)
    t[r][1] > e[1] != t[o][1] > e[1] && e[0] < (t[o][0] - t[r][0]) * (e[1] - t[r][1]) / (t[o][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function xo(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    i[0] < t && (t = i[0]), i[0] > r && (r = i[0]), i[1] < n && (n = i[1]), i[1] > o && (o = i[1]);
  }
  return [t, n, r, o];
}
function Ao(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function So(e, t) {
  return (e - 1 + t) % t;
}
function ce(e, t, n) {
  return Xe(t, n, e) > 0;
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: Vn,
  PointInsidePolygon: bo,
  PointOutsideMBR: nn,
  calculateMBR: xo,
  cross: fe,
  cutPolygonByMBR: Xn,
  dot: go,
  intersection: ze,
  intersectionPolygon: Gn,
  iterPolygonEdge: Ao,
  pointInEdge: ce,
  prePointInPolygon: So
}, Symbol.toStringTag, { value: "Module" })), yn = Math.pow(2, -52), ue = new Uint32Array(512);
class vt {
  static from(t, n = Kn, r = Qn) {
    const o = t.length, s = new Float64Array(o * 2);
    for (let i = 0; i < o; i++) {
      const l = t[i];
      s[2 * i] = n(l), s[2 * i + 1] = r(l);
    }
    return new vt(s);
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
    const { coords: t, _hullPrev: n, _hullNext: r, _hullTri: o, _hullHash: s } = this, i = t.length >> 1;
    let l = 1 / 0, a = 1 / 0, h = -1 / 0, u = -1 / 0;
    for (let C = 0; C < i; C++) {
      const q = t[2 * C], U = t[2 * C + 1];
      q < l && (l = q), U < a && (a = U), q > h && (h = q), U > u && (u = U), this._ids[C] = C;
    }
    const f = (l + h) / 2, d = (a + u) / 2;
    let b, y, g;
    for (let C = 0, q = 1 / 0; C < i; C++) {
      const U = Ne(f, d, t[2 * C], t[2 * C + 1]);
      U < q && (b = C, q = U);
    }
    const O = t[2 * b], _ = t[2 * b + 1];
    for (let C = 0, q = 1 / 0; C < i; C++) {
      if (C === b)
        continue;
      const U = Ne(O, _, t[2 * C], t[2 * C + 1]);
      U < q && U > 0 && (y = C, q = U);
    }
    let D = t[2 * y], v = t[2 * y + 1], J = 1 / 0;
    for (let C = 0; C < i; C++) {
      if (C === b || C === y)
        continue;
      const q = To(O, _, D, v, t[2 * C], t[2 * C + 1]);
      q < J && (g = C, J = q);
    }
    let tt = t[2 * g], nt = t[2 * g + 1];
    if (J === 1 / 0) {
      for (let U = 0; U < i; U++)
        this._dists[U] = t[2 * U] - t[0] || t[2 * U + 1] - t[1];
      qt(this._ids, this._dists, 0, i - 1);
      const C = new Uint32Array(i);
      let q = 0;
      for (let U = 0, z = -1 / 0; U < i; U++) {
        const et = this._ids[U], c = this._dists[et];
        c > z && (C[q++] = et, z = c);
      }
      this.hull = C.subarray(0, q), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Qt(O, _, D, v, tt, nt) < 0) {
      const C = y, q = D, U = v;
      y = g, D = tt, v = nt, g = C, tt = q, nt = U;
    }
    const st = this.circumcenter(O, _, D, v, tt, nt);
    this._cx = st.x, this._cy = st.y;
    for (let C = 0; C < i; C++)
      this._dists[C] = Ne(t[2 * C], t[2 * C + 1], st.x, st.y);
    qt(this._ids, this._dists, 0, i - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[g] = y, r[y] = n[b] = g, r[g] = n[y] = b, o[b] = 0, o[y] = 1, o[g] = 2, s.fill(-1), s[this._hashKey(O, _)] = b, s[this._hashKey(D, v)] = y, s[this._hashKey(tt, nt)] = g, this.trianglesLen = 0, this._addTriangle(b, y, g, -1, -1, -1);
    for (let C = 0, q, U; C < this._ids.length; C++) {
      const z = this._ids[C], et = t[2 * z], c = t[2 * z + 1];
      if (C > 0 && Math.abs(et - q) <= yn && Math.abs(c - U) <= yn || (q = et, U = c, z === b || z === y || z === g))
        continue;
      let m = 0;
      for (let w = 0, E = this._hashKey(et, c); w < this._hashSize && (m = s[(E + w) % this._hashSize], !(m !== -1 && m !== r[m])); w++)
        ;
      m = n[m];
      let p = m, x;
      for (; x = r[p], Qt(et, c, t[2 * p], t[2 * p + 1], t[2 * x], t[2 * x + 1]) >= 0; )
        if (p = x, p === m) {
          p = -1;
          break;
        }
      if (p === -1)
        continue;
      let S = this._addTriangle(p, z, r[p], -1, -1, o[p]);
      o[z] = this._legalize(S + 2), o[p] = S, rt++;
      let T = r[p];
      for (; x = r[T], Qt(et, c, t[2 * T], t[2 * T + 1], t[2 * x], t[2 * x + 1]) < 0; )
        S = this._addTriangle(T, z, x, o[z], -1, o[T]), o[z] = this._legalize(S + 2), r[T] = T, rt--, T = x;
      if (p === m)
        for (; x = n[p], Qt(et, c, t[2 * x], t[2 * x + 1], t[2 * p], t[2 * p + 1]) < 0; )
          S = this._addTriangle(x, z, p, -1, o[p], o[x]), this._legalize(S + 2), o[x] = S, r[p] = p, rt--, p = x;
      this._hullStart = n[z] = p, r[p] = n[T] = z, r[z] = T, s[this._hashKey(et, c)] = z, s[this._hashKey(t[2 * p], t[2 * p + 1])] = p;
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
    let s = 0, i = 0;
    for (; ; ) {
      const l = r[t], a = t - t % 3;
      if (i = a + (t + 2) % 3, l === -1) {
        if (s === 0)
          break;
        t = ue[--s];
        continue;
      }
      const h = l - l % 3, u = a + (t + 1) % 3, f = h + (l + 2) % 3, d = n[i], b = n[t], y = n[u], g = n[f];
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
        const _ = r[f];
        if (_ === -1) {
          let v = this._hullStart;
          do {
            if (this._hullTri[v] === f) {
              this._hullTri[v] = t;
              break;
            }
            v = this._hullPrev[v];
          } while (v !== this._hullStart);
        }
        this._link(t, _), this._link(l, r[i]), this._link(i, f);
        const D = h + (l + 1) % 3;
        s < ue.length && (ue[s++] = D);
      } else {
        if (s === 0)
          break;
        t = ue[--s];
      }
    }
    return i;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, o, s, i) {
    const l = this.trianglesLen;
    return this._triangles[l] = t, this._triangles[l + 1] = n, this._triangles[l + 2] = r, this._link(l, o), this._link(l + 1, s), this._link(l + 2, i), this.trianglesLen += 3, l;
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
    const o = n[0] - t[0], s = n[1] - t[1], i = r[0] - t[0], l = r[1] - t[1], a = o * o + s * s, h = i * i + l * l, u = 0.5 / (o * l - s * i), f = (l * a - s * h) * u, d = (o * h - i * a) * u;
    return f * f + d * d;
  }
  circumcenter(t, n, r, o, s, i) {
    const l = r - t, a = o - n, h = s - t, u = i - n, f = l * l + a * a, d = h * h + u * u, b = 0.5 / (l * u - a * h), y = t + (u * f - a * d) * b, g = n + (l * d - h * f) * b;
    return { x: y, y: g };
  }
}
function Mo(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Ne(e, t, n, r) {
  const o = e - n, s = t - r;
  return o * o + s * s;
}
function Eo(e, t, n, r, o, s, i, l) {
  const a = e - i, h = t - l, u = n - i, f = r - l, d = o - i, b = s - l, y = a * a + h * h, g = u * u + f * f, O = d * d + b * b;
  return a * (f * O - g * b) - h * (u * O - g * d) + y * (u * b - f * d) < 0;
}
function To(e, t, n, r, o, s) {
  const i = n - e, l = r - t, a = o - e, h = s - t, u = i * i + l * l, f = a * a + h * h, d = 0.5 / (i * h - l * a), b = (h * u - l * f) * d, y = (i * f - a * u) * d;
  return b * b + y * y;
}
function qt(e, t, n, r) {
  if (r - n <= 20)
    for (let o = n + 1; o <= r; o++) {
      const s = e[o], i = t[s];
      let l = o - 1;
      for (; l >= n && t[e[l]] > i; )
        e[l + 1] = e[l--];
      e[l + 1] = s;
    }
  else {
    const o = n + r >> 1;
    let s = n + 1, i = r;
    Gt(e, o, s), t[e[n]] > t[e[r]] && Gt(e, n, r), t[e[s]] > t[e[r]] && Gt(e, s, r), t[e[n]] > t[e[s]] && Gt(e, n, s);
    const l = e[s], a = t[l];
    for (; ; ) {
      do
        s++;
      while (t[e[s]] < a);
      do
        i--;
      while (t[e[i]] > a);
      if (i < s)
        break;
      Gt(e, s, i);
    }
    e[n + 1] = e[i], e[i] = l, r - s + 1 >= i - n ? (qt(e, t, s, r), qt(e, t, n, i - 1)) : (qt(e, t, n, i - 1), qt(e, t, s, r));
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
  const r = e[0] * e[0] + e[1] * e[1], o = t[0] * t[0] + t[1] * t[1], s = n[0] * n[0] + n[1] * n[1], i = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / i * (r * (t[1] - n[1]) + o * (n[1] - e[1]) + s * (e[1] - t[1])),
    1 / i * (r * (n[0] - t[0]) + o * (e[0] - n[0]) + s * (t[0] - e[0]))
  ];
}
function Zn(e, t, n, r = jt) {
  const o = Po(t, n).map((i) => e[i]);
  let s = Oo(o[0], o[1], o[2]);
  return r && (s = r(s)), s;
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
function Be(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.triangles.length; o++) {
    const s = t.triangles[tr(o)];
    if (!r.has(s)) {
      r.add(s);
      const a = Co(t, o).map(Ro).map((h) => Zn(e, t, h));
      n(s, a);
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
    return Be(t, n, (o, s) => r.set(o, s)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return Be(n, r, (s, i) => {
      this.isInsideMBR(i, t) || (i = Xn(i, t)), o.set(s, i);
    }), o;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, o = /* @__PURE__ */ new Map();
    return Be(n, r, (s, i) => {
      this.isInsideMBR(i, t) && o.set(s, i);
    }), o;
  }
  isInsideMBR(t, n) {
    const [r, o, s, i] = n;
    for (let l = 0; l < t.length; l++) {
      const [a, h] = t[l];
      if (a < r || a > s || h < o || h > i)
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
const Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: vt,
  Voronoi: ko,
  complateMap: Lo,
  triangleCenter: Zn
}, Symbol.toStringTag, { value: "Module" }));
function Fo(e) {
  const t = e.map((s, i) => [...s.toXY(), i]);
  let n = t[0];
  for (let s = 1; s < t.length; s++)
    t[s][1] < n[1] && (n = t[s]);
  t.sort((s, i) => {
    let l = ee([n[0], n[1]], [s[0], s[1]]), a = ee([n[0], n[1]], [i[0], i[1]]);
    if (l < a)
      return -1;
    if (l > a)
      return 1;
    {
      let h = Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2), u = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2);
      return h < u ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let s = 2; s < t.length; s++) {
    for (; r.length > 1 && Xe([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[s][0], t[s][1]]) <= 0; )
      r.pop();
    r.push(t[s]);
  }
  let o = [];
  for (let s = 0; s < r.length; s++) {
    let i = r[s][2];
    o.push(e[i]);
  }
  return o;
}
function No(e, t) {
  let n = e.map((i) => i.toXY());
  return vt.from(n).getTriangleIndices().filter((i) => {
    let l = [n[i[0]], n[i[1]], n[i[2]]];
    return vt.circumRadius(l[0], l[1], l[2]) * t < 1;
  });
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: No,
  convexHull: Fo
}, Symbol.toStringTag, { value: "Module" }));
function er(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bo } = Object.prototype, { getPrototypeOf: rn } = Object, be = ((e) => (t) => {
  const n = Bo.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => be(t) === e), xe = (e) => (t) => typeof t === e, { isArray: Vt } = Array, ne = xe("undefined");
function Io(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const nr = Pt("ArrayBuffer");
function Do(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && nr(e.buffer), t;
}
const jo = xe("string"), St = xe("function"), rr = xe("number"), Ae = (e) => e !== null && typeof e == "object", vo = (e) => e === !0 || e === !1, de = (e) => {
  if (be(e) !== "object")
    return !1;
  const t = rn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Uo = Pt("Date"), qo = Pt("File"), zo = Pt("Blob"), Ho = Pt("FileList"), Yo = (e) => Ae(e) && St(e.pipe), Wo = (e) => {
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
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (r = 0; r < i; r++)
      l = s[r], t.call(null, e[l], l, e);
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
function He() {
  const { caseless: e } = sr(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && or(t, o) || o;
    de(t[s]) && de(r) ? t[s] = He(t[s], r) : de(r) ? t[s] = He({}, r) : Vt(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && oe(arguments[r], n);
  return t;
}
const Vo = (e, t, n, { allOwnKeys: r } = {}) => (oe(t, (o, s) => {
  n && St(o) ? e[s] = er(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Xo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Go = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ko = (e, t, n, r) => {
  let o, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && rn(e);
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
}, ti = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && rn(Uint8Array)), ei = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
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
  oe(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
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
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Vt(e) ? r(e) : r(String(e).split(t)), n;
}, ai = () => {
}, ui = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ie = "abcdefghijklmnopqrstuvwxyz", wn = "0123456789", ar = {
  DIGIT: wn,
  ALPHA: Ie,
  ALPHA_DIGIT: Ie + Ie.toUpperCase() + wn
}, hi = (e = 16, t = ar.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function fi(e) {
  return !!(e && St(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ci = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Vt(r) ? [] : {};
        return oe(r, (i, l) => {
          const a = n(i, o + 1);
          !ne(a) && (s[l] = a);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, di = Pt("AsyncFunction"), mi = (e) => e && (Ae(e) || St(e)) && St(e.then) && St(e.catch), A = {
  isArray: Vt,
  isArrayBuffer: nr,
  isBuffer: Io,
  isFormData: Wo,
  isArrayBufferView: Do,
  isString: jo,
  isNumber: rr,
  isBoolean: vo,
  isObject: Ae,
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
  merge: He,
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
  generateString: hi,
  isSpecCompliantForm: fi,
  toJSONObject: ci,
  isAsyncFn: di,
  isThenable: mi
};
function Q(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
A.inherits(Q, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ur = Q.prototype, hr = {};
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
  hr[e] = { value: e };
});
Object.defineProperties(Q, hr);
Object.defineProperty(ur, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, o, s) => {
  const i = Object.create(ur);
  return A.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Q.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const yi = null;
function Ye(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function fr(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gn(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = fr(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function pi(e) {
  return A.isArray(e) && !e.some(Ye);
}
const wi = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Se(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, O) {
    return !A.isUndefined(O[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, s = n.dots, i = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function h(y) {
    if (y === null)
      return "";
    if (A.isDate(y))
      return y.toISOString();
    if (!a && A.isBlob(y))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(y) || A.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, g, O) {
    let _ = y;
    if (y && !O && typeof y == "object") {
      if (A.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), y = JSON.stringify(y);
      else if (A.isArray(y) && pi(y) || (A.isFileList(y) || A.endsWith(g, "[]")) && (_ = A.toArray(y)))
        return g = fr(g), _.forEach(function(v, J) {
          !(A.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? gn([g], J, s) : i === null ? g : g + "[]",
            h(v)
          );
        }), !1;
    }
    return Ye(y) ? !0 : (t.append(gn(O, g, s), h(y)), !1);
  }
  const f = [], d = Object.assign(wi, {
    defaultVisitor: u,
    convertValue: h,
    isVisitable: Ye
  });
  function b(y, g) {
    if (!A.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(y), A.forEach(y, function(_, D) {
        (!(A.isUndefined(_) || _ === null) && o.call(
          t,
          _,
          A.isString(D) ? D.trim() : D,
          g,
          d
        )) === !0 && b(_, g ? g.concat(D) : [D]);
      }), f.pop();
    }
  }
  if (!A.isObject(e))
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
function on(e, t) {
  this._pairs = [], e && Se(e, this, t);
}
const cr = on.prototype;
cr.append = function(t, n) {
  this._pairs.push([t, n]);
};
cr.toString = function(t) {
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
  let s;
  if (o ? s = o(t, n) : s = A.isURLSearchParams(t) ? t.toString() : new on(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const xn = bi, mr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xi = typeof URLSearchParams < "u" ? URLSearchParams : on, Ai = typeof FormData < "u" ? FormData : null, Si = typeof Blob < "u" ? Blob : null, Mi = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Ei = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _t = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xi,
    FormData: Ai,
    Blob: Si
  },
  isStandardBrowserEnv: Mi,
  isStandardBrowserWebWorkerEnv: Ei,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ti(e, t) {
  return Se(e, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return _t.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _i(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Pi(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function yr(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), a = s >= n.length;
    return i = !i && A.isArray(o) ? o.length : i, a ? (A.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !A.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && A.isArray(o[i]) && (o[i] = Pi(o[i])), !l);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(_i(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ri(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const sn = {
  transitional: mr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = A.isObject(t);
    if (s && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o && o ? JSON.stringify(yr(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ti(t, this.formSerializer).toString();
      if ((l = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Se(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Ri(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || sn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && A.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  sn.headers[e] = {};
});
const ln = sn, Oi = A.toObjectSet([
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
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Oi[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, An = Symbol("internals");
function Kt(e) {
  return e && String(e).trim().toLowerCase();
}
function me(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(me) : String(e);
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
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function Fi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ni(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
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
    function s(l, a, h) {
      const u = Kt(a);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = A.findKey(o, u);
      (!f || o[f] === void 0 || h === !0 || h === void 0 && o[f] !== !1) && (o[f || a] = me(l));
    }
    const i = (l, a) => A.forEach(l, (h, u) => s(h, u, a));
    return A.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : A.isString(t) && (t = t.trim()) && !Li(t) ? i(Ci(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Kt(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ki(o);
        if (A.isFunction(n))
          return n.call(this, o, r);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Kt(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || De(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Kt(i), i) {
        const l = A.findKey(r, i);
        l && (!n || De(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || De(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, s) => {
      const i = A.findKey(r, s);
      if (i) {
        n[i] = me(o), delete n[s];
        return;
      }
      const l = t ? Fi(s) : String(s).trim();
      l !== s && delete n[s], n[l] = me(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && A.isArray(r) ? r.join(", ") : r);
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
    const r = (this[An] = this[An] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const l = Kt(i);
      r[l] || (Ni(o, i), r[l] = !0);
    }
    return A.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(Me.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(Me);
const Ot = Me;
function je(e, t) {
  const n = this || ln, r = t || n, o = Ot.from(r.headers);
  let s = r.data;
  return A.forEach(e, function(l) {
    s = l.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function pr(e) {
  return !!(e && e.__CANCEL__);
}
function ie(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
A.inherits(ie, Q, {
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
const Ii = _t.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, s, i, l) {
        const a = [];
        a.push(n + "=" + encodeURIComponent(r)), A.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), A.isString(s) && a.push("path=" + s), A.isString(i) && a.push("domain=" + i), l === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Di(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ji(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wr(e, t) {
  return e && !Di(t) ? ji(e, t) : t;
}
const vi = _t.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
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
    return r = o(window.location.href), function(i) {
      const l = A.isString(i) ? o(i) : i;
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
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const h = Date.now(), u = r[s];
    i || (i = h), n[o] = a, r[o] = h;
    let f = s, d = 0;
    for (; f !== o; )
      d += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), h - i < t)
      return;
    const b = u && h - u;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}
function Sn(e, t) {
  let n = 0;
  const r = qi(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, l = s - n, a = r(l), h = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && i && h ? (i - s) / a : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const zi = typeof XMLHttpRequest < "u", Hi = zi && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Ot.from(e.headers).normalize(), i = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let h;
    A.isFormData(o) && (_t.isStandardBrowserEnv || _t.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? A.isString(h = s.getContentType()) && s.setContentType(h.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const f = wr(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), dr(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function d() {
      if (!u)
        return;
      const y = Ot.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), O = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Bi(function(D) {
        n(D), a();
      }, function(D) {
        r(D), a();
      }, O), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new Q("Request aborted", Q.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || mr;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Q(
        g,
        O.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        u
      )), u = null;
    }, _t.isStandardBrowserEnv) {
      const y = vi(f) && e.xsrfCookieName && Ii.read(e.xsrfCookieName);
      y && s.set(e.xsrfHeaderName, y);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && A.forEach(s.toJSON(), function(g, O) {
      u.setRequestHeader(O, g);
    }), A.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Sn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Sn(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (y) => {
      u && (r(!y || y.type ? new ie(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const b = Ui(f);
    if (b && _t.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, We = {
  http: yi,
  xhr: Hi
};
A.forEach(We, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mn = (e) => `- ${e}`, Yi = (e) => A.isFunction(e) || e === null || e === !1, gr = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !Yi(n) && (r = We[(i = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Mn).join(`
`) : " " + Mn(s[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: We
};
function ve(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie(null, e);
}
function En(e) {
  return ve(e), e.headers = Ot.from(e.headers), e.data = je.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gr.getAdapter(e.adapter || ln.adapter)(e).then(function(r) {
    return ve(e), r.data = je.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ot.from(r.headers), r;
  }, function(r) {
    return pr(r) || (ve(e), r && r.response && (r.response.data = je.call(
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
  function r(h, u, f) {
    return A.isPlainObject(h) && A.isPlainObject(u) ? A.merge.call({ caseless: f }, h, u) : A.isPlainObject(u) ? A.merge({}, u) : A.isArray(u) ? u.slice() : u;
  }
  function o(h, u, f) {
    if (A.isUndefined(u)) {
      if (!A.isUndefined(h))
        return r(void 0, h, f);
    } else
      return r(h, u, f);
  }
  function s(h, u) {
    if (!A.isUndefined(u))
      return r(void 0, u);
  }
  function i(h, u) {
    if (A.isUndefined(u)) {
      if (!A.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, u);
  }
  function l(h, u, f) {
    if (f in t)
      return r(h, u);
    if (f in e)
      return r(void 0, h);
  }
  const a = {
    url: s,
    method: s,
    data: s,
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
    headers: (h, u) => o(Tn(h), Tn(u), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = a[u] || o, d = f(e[u], t[u], u);
    A.isUndefined(d) && f !== l || (n[u] = d);
  }), n;
}
const br = "1.6.0", an = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  an[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _n = {};
an.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + br + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new Q(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !_n[i] && (_n[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function Wi(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const l = e[s], a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new Q("option " + s + " must be " + a, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + s, Q.ERR_BAD_OPTION);
  }
}
const $e = {
  assertOptions: Wi,
  validators: an
}, Nt = $e.validators;
class we {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new xn(),
      response: new xn()
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
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && $e.assertOptions(r, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : $e.assertOptions(o, {
      encode: Nt.function,
      serialize: Nt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && A.merge(
      s.common,
      s[n.method]
    );
    s && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete s[y];
      }
    ), n.headers = Ot.concat(i, s);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (a = a && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(g) {
      h.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, d;
    if (!a) {
      const y = [En.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, h), d = y.length, u = Promise.resolve(n); f < d; )
        u = u.then(y[f++], y[f++]);
      return u;
    }
    d = l.length;
    let b = n;
    for (f = 0; f < d; ) {
      const y = l[f++], g = l[f++];
      try {
        b = y(b);
      } catch (O) {
        g.call(this, O);
        break;
      }
    }
    try {
      u = En.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, d = h.length; f < d; )
      u = u.then(h[f++], h[f++]);
    return u;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = wr(t.baseURL, t.url);
    return dr(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(n, r) {
    return this.request(Wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, l) {
      return this.request(Wt(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  we.prototype[t] = n(), we.prototype[t + "Form"] = n(!0);
});
const ye = we;
class un {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, l) {
      r.reason || (r.reason = new ie(s, i, l), n(r.reason));
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
      token: new un(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const $i = un;
function Ji(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Vi(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Je = {
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
Object.entries(Je).forEach(([e, t]) => {
  Je[t] = e;
});
const Xi = Je;
function xr(e) {
  const t = new ye(e), n = er(ye.prototype.request, t);
  return A.extend(n, ye.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return xr(Wt(e, o));
  }, n;
}
const ht = xr(ln);
ht.Axios = ye;
ht.CanceledError = ie;
ht.CancelToken = $i;
ht.isCancel = pr;
ht.VERSION = br;
ht.toFormData = Se;
ht.AxiosError = Q;
ht.Cancel = ht.CanceledError;
ht.all = function(t) {
  return Promise.all(t);
};
ht.spread = Ji;
ht.isAxiosError = Vi;
ht.mergeConfig = Wt;
ht.AxiosHeaders = Ot;
ht.formToJSON = (e) => yr(A.isHTMLForm(e) ? new FormData(e) : e);
ht.getAdapter = gr.getAdapter;
ht.HttpStatusCode = Xi;
ht.default = ht;
const Gi = ht;
function Ar(e) {
  if (e.length === 2)
    return new xt(e[0], e[1]);
  if (e.length === 3)
    return new xt(e[0], e[1], e[2]);
  if (e.length > 4)
    return new xt(e[0], e[1], e[2], ...e.slice(3));
  throw new Error("Error: the length of array is not correct");
}
function Sr(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] == null)
      continue;
    let r = Ar(e[n]);
    t.push(r);
  }
  return t;
}
function Ki(e) {
  let t = Sr(e);
  return new tn(t);
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
    for (let s = 0; s < t[r].length; s++)
      o = t[r][s];
    n.push(o);
  }
  return n;
}
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: Zi,
  GeoPolygons2SimpleArr: ts,
  createMultiPointFromArr: Ki,
  createPointListFromArr: Sr,
  cretePointFromArr: Ar,
  readDataFromGeoJSON: Qi
}, Symbol.toStringTag, { value: "Module" }));
class hn {
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
    let r = t[0], o = t[1], s = t[2], i = t[3], l = [];
    for (let a of n) {
      let h = [];
      for (let u = r; u <= s; u++) {
        let f = [];
        for (let d = o; d <= i; d++)
          f.push(this.data[a][u][d]);
        h.push(f);
      }
      l.push(h);
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
    for (let i = 0; i < this.rows; i++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[i][l];
        a !== 0 && (r += a, o++);
      }
    let s = r / o;
    for (let i = 0; i < this.rows; i++)
      for (let l = 0; l < this.cols; l++) {
        let a = n[i][l];
        (a === 0 || a === -9999 || a === 999999) && (n[i][l] = s);
      }
  }
  /**
   * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGridObj(t, n = [0]) {
    let r = t[0], o = t[1], s = t[2], i = t[3], l = [];
    for (let h of n) {
      let u = [];
      for (let f = r; f <= s; f++) {
        let d = [];
        for (let b = o; b <= i; b++)
          d.push(this.data[h][f][b]);
        u.push(d);
      }
      l.push(u);
    }
    return new hn(t, l);
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], o = t[2], s = t[3], i = this.getGridCoord([n, r]), l = this.getGridCoord([o, s]);
    if (i === null || l === null)
      return null;
    {
      let a = i[0], h = i[1], u = l[0], f = l[1];
      return [a, h, u, f];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if (nn(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], o = this.MBR[0], s = this.MBR[1], i = this.MBR[2], l = this.MBR[3], a = Math.floor((r - s) / (l - s) * this.rows), h = Math.floor((n - o) / (i - o) * this.cols);
      return [a, h];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], o = this.MBR[0], s = this.MBR[1], i = this.MBR[2], l = this.MBR[3], a = (r + 0.5) / this.cols * (i - o) + o, h = (n + 0.5) / this.rows * (l - s) + s;
    return [a, h];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], o = n[0][0], s = 0;
    for (let l = 0; l < this.rows; l++)
      for (let a = 0; a < this.cols; a++) {
        let h = n[l][a];
        h > r && (r = h), h < o && (o = h), s += h;
      }
    let i = s / (this.rows * this.cols);
    return {
      max: r,
      min: o,
      mean: i
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
    for (let s = 0; s < this.rows; s++) {
      let i = [];
      for (let l = 0; l < this.cols; l++)
        r[s][l] < n ? i.push(0) : i.push(1);
      o.push(i);
    }
    return o;
  }
  getCoutourCode(t, n, r) {
    let o = this.binarization(t, n), s = [];
    for (let i = 0; i < this.rows - 1; i++) {
      let l = [];
      for (let a = 0; a < this.cols - 1; a++) {
        let h = 0;
        h += o[i][a] * 8, h += o[i][a + 1] * 4, h += o[i + 1][a + 1] * 2, h += o[i + 1][a] * 1, l.push(h);
      }
      s.push(l);
    }
    if (r) {
      for (let a = 0; a < s.length; a++) {
        let h = s[a];
        h.unshift(h[0]), h.push(h[h.length - 1]);
      }
      let i = s[0], l = s[s.length - 1];
      s.unshift(i), s.push(l);
    }
    return s;
  }
  getMean(t) {
    let n = this.data[t], r = 0;
    for (let o = 0; o < this.rows; o++)
      for (let s = 0; s < this.cols; s++)
        r += n[o][s];
    return r / (this.rows * this.cols);
  }
  getSorted1DArray(t) {
    let n = this.data[t], r = [];
    for (let o = 0; o < this.rows; o++)
      for (let s = 0; s < this.cols; s++)
        r.push(n[o][s]);
    return r.sort((o, s) => o - s), r;
  }
}
function es(e, t, n) {
  let r = e.data[t], o = [];
  for (let s = 0; s < e.rows; s++) {
    let i = [];
    for (let l = 0; l < e.cols; l++)
      r[s][l] < n ? i.push(0) : i.push(1);
    o.push(i);
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
    let o = e[0], s = e[1], i = e[2], l = e[3], a = (o + i) / 2;
    a = Math.floor(a);
    let h = (s + l) / 2;
    h = Math.floor(h);
    let u = [o, h, a, l], f = [a, h, i, l], d = [o, s, a, h], b = [a, s, i, h], y = Zt(u, t + 1, n), g = Zt(f, t + 1, n), O = Zt(d, t + 1, n), _ = Zt(b, t + 1, n);
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
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: hn,
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
    return nn(t, this.boundary) ? !1 : this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0);
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, o = this.boundary[3] - n, s = new zt([t, n + o / 2, t + r / 2, n + o], this.capacity), i = new zt([t + r / 2, n + o / 2, t + r, n + o], this.capacity), l = new zt([t, n, t + r / 2, n + o / 2], this.capacity), a = new zt([t + r / 2, n, t + r, n + o / 2], this.capacity);
    this.northWest = s, this.northEast = i, this.southWest = l, this.southEast = a, this.isDivided = !0, this.depth++;
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
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: zt
}, Symbol.toStringTag, { value: "Module" })), is = Math.E;
function Ue(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function ss(e, t) {
  let o = e, s = t;
  o *= 3284157443, s ^= o << 128 | o >> 256 - 128, s *= 1911520717, o ^= s << 128 | s >> 256 - 128, o *= 2048419325;
  const i = o * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(i),
    y: Math.sin(i)
  };
}
function he(e, t, n, r) {
  const o = ss(e, t), s = n - e, i = r - t;
  return s * o.x + i * o.y;
}
function ls(e, t) {
  const n = Math.floor(e), r = n + 1, o = Math.floor(t), s = o + 1, i = e - n, l = t - o, a = he(n, o, e, t), h = he(r, o, e, t), u = Ue(a, h, i), f = he(n, s, e, t), d = he(r, s, e, t), b = Ue(f, d, i);
  return Ue(u, b, l);
}
function as(e, t) {
  return Math.pow(is, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function us(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
function hs(e, t, n) {
  const r = new Array(e).fill(0).map(() => new Array(t).fill(0)), o = new Array(n).fill(0).map(() => ({
    x: Math.random() * e,
    y: Math.random() * t
  }));
  for (let s = 0; s < e; s++)
    for (let i = 0; i < t; i++) {
      let l = 1e5;
      for (let a = 0; a < n; a++) {
        const h = Math.sqrt(
          Math.pow(o[a].x - s, 2) + Math.pow(o[a].y - i, 2)
        );
        h < l && (l = h);
      }
      r[s][i] = l;
    }
  return r;
}
function fs(e, t, n, r = "horizontal") {
  const o = new Array(e).fill(0).map(() => new Array(t).fill(0)), s = Math.floor(e / n);
  for (let i = 0; i < e; i++)
    for (let l = 0; l < t; l++)
      r === "vertical" ? o[i][l] = Math.floor(i / s) % 2 === 0 ? 1 : 0 : r === "horizontal" ? o[i][l] = Math.floor(l / s) % 2 === 0 ? 1 : 0 : r === "diagonal" ? o[i][l] = Math.floor((i + l) / s) % 2 === 0 ? 1 : 0 : r === "all" && (o[i][l] = Math.floor((i + l) / s) % 2 === 0 ? 1 : 0, o[i][l] += Math.floor(i / s) % 2 === 0 ? 1 : 0, o[i][l] += Math.floor(l / s) % 2 === 0 ? 1 : 0);
  return o;
}
const Vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: ls,
  Sin3D: us,
  dampedSin3D: as,
  worleyNoise: hs,
  zebraNoise: fs
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
function Ee(e, t) {
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
function Te(e, t, n = re) {
  let r = n(t, e), o = Math.floor(r * 255);
  return `rgb(${o},${o},${o})`;
}
function Tr(e, t, n = re) {
  let r = Math.floor(n(t[0], e[0]) * 255), o = Math.floor(n(t[1], e[1]) * 255), s = Math.floor(n(t[2], e[2]) * 255);
  return `rgb(${r},${o},${s})`;
}
function cs(e, t) {
  return (n, r) => Tr(n, r, Ee(e, t));
}
function ds(e, t) {
  return (n, r) => Te(n, r, Ee(e, t));
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
  let s = o(t, e), i = 0;
  if (n === void 0)
    i = Math.floor(s * r.length);
  else
    for (let l = 0; l < n.length; l++)
      if (s < n[l]) {
        i = l;
        break;
      }
  return r[i];
}
function ys(e, t, n = _r) {
  return (r, o) => ms(r, o, t, n, Ee(e));
}
function Rr(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function ps(e, t = Pr) {
  return t[e];
}
function ws(e, t = 0, n) {
  let r = new Array(256).fill(0), o = Ee(t);
  if (n === void 0) {
    n = {
      max: 0,
      min: 0,
      mean: 0
    };
    for (let s = 0; s < e.length; s++)
      for (let i = 0; i < e[0].length; i++)
        n.max = Math.max(n.max, e[s][i]), n.min = Math.min(n.min, e[s][i]), n.mean += e[s][i];
  }
  for (let s = 0; s < e.length; s++)
    for (let i = 0; i < e[0].length; i++) {
      let l = o(e[s][i], n), a = Math.floor(l * 255);
      r[a] += 1;
    }
  return r;
}
const Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CountourColorList: Pr,
  binaryColorBand: Rr,
  colorListType: Er,
  hist: ws,
  pseudoColorBandFactory: ys,
  simpleColorBand: Te,
  simpleColorBandFactory: ds,
  simplePseudoColorBand: ps,
  stretchType: Mr,
  trueColorBand: Tr,
  trueColorBandFactory: cs
}, Symbol.toStringTag, { value: "Module" }));
function gs(e, t, n, r, o = Te, s) {
  let i = n.w / t[0].length, l = n.h / t.length, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let h = 0; h < t.length; h++)
    for (let u = 0; u < t[0].length; u++) {
      let f = t[h][u], d = o(r, f);
      a.fillStyle = d, a.fillRect(n.x + u * i, n.y + h * l, i, l);
    }
  if (s) {
    let [h, u, f, d] = s;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(n.x + h * i, n.y + u * l, (f - h) * i, (d - u) * l);
  }
}
function bs(e, t, n, r = Rr) {
  let o = n.w / t[0].length, s = n.h / t.length, i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let h = t[l][a], u = r(h);
      i.fillStyle = u, i.fillRect(n.x + a * o, n.y + l * s, o, s);
    }
}
function xs(e, t, n, r = "white") {
  let o = n.w / t[0].length, s = n.h / t.length, i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let a = 0; a < t[0].length; a++) {
      let h = t[l][a];
      As(h, { x: n.x + a * o, y: n.y + l * s, w: o, h: s }, i, r);
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
function te(e, t, n, r, o = Te, s, i) {
  let l = e.getContext("2d");
  if (l === null)
    throw new Error("无法获取canvas绘图上下文");
  let h = r.getSubGridObj(n.boundary).getBandStatistics(0), u = h.mean;
  i ? (i.max = Math.max(i.max, h.max), i.min = Math.min(i.min, h.min), i.mean = (i.mean + h.mean) / 2) : i = h, s || (s = u);
  let f = o(i, u);
  l.fillStyle = f, l.fillRect(t.x, t.y, t.w, t.h), requestAnimationFrame(() => {
    if (n.isDivided) {
      let d = [
        { x: t.x + t.w / 2, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x + t.w / 2, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y, w: t.w / 2, h: t.h / 2 },
        { x: t.x, y: t.y + t.h / 2, w: t.w / 2, h: t.h / 2 }
      ];
      te(e, d[0], n.children[0], r, o, s, i), te(e, d[1], n.children[1], r, o, s, i), te(e, d[2], n.children[2], r, o, s, i), te(e, d[3], n.children[3], r, o, s, i);
    }
  });
}
function Ss(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, o = !1, s) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  s || (s = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, h) => a + h) / n.length
  }), i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color, i.lineWidth = 1;
  let l = 2;
  for (let a = 0; a < n.length; a++) {
    let h = t.x + t.w * a / n.length, u = t.y + t.h * (1 - (n[a] - s.min) / (s.max - s.min));
    i.beginPath(), i.arc(h, u, l, 0, 2 * Math.PI), i.fill();
  }
  i.strokeStyle = r.color, i.beginPath(), i.moveTo(t.x, t.y + t.h * (1 - (n[0] - s.min) / (s.max - s.min)));
  for (let a = 0; a < n.length; a++) {
    let h = t.x + t.w * a / n.length, u = t.y + t.h * (1 - (n[a] - s.min) / (s.max - s.min));
    i.lineTo(h, u);
  }
  if (i.stroke(), i.strokeStyle = "white", i.beginPath(), i.moveTo(t.x, t.y + 12), i.lineTo(t.x + t.w, t.y + 12), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h), i.lineTo(t.x + t.w, t.y + t.h), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h / 2), i.lineTo(t.x + t.w, t.y + t.h / 2), i.stroke(), i.fillText(s.max.toFixed(2), t.x, t.y + 12), i.fillText(s.min.toFixed(2), t.x, t.y + t.h), i.fillText(s.mean.toFixed(2), t.x, t.y + t.h / 2), o) {
    i.fillStyle = "green", i.font = "12px serif";
    for (let a = 0; a < n.length; a += 16) {
      let h = t.x + t.w * a / n.length, u = t.y + t.h * (1 - (n[a] - s.min) / (s.max - s.min));
      i.fillText(n[a].toFixed(2), h, u);
    }
  }
}
function Ms(e, t, n, r = { color: "black", backgroundColor: "rgba(0,0,0,0)" }, o, s = !1) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, h) => a + h) / n.length
  }), i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color;
  let l = t.w / n.length;
  for (let a = 0; a < n.length; a++) {
    let h = t.x + l * a, u = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    i.fillRect(h, u, l, t.h - u + t.y);
  }
  s && (i.fillStyle = "green", i.font = "12px serif", i.fillText(o.max.toFixed(2), t.x, t.y + 12), i.fillText(o.min.toFixed(2), t.x, t.y + t.h), i.fillText(o.mean.toFixed(2), t.x, t.y + t.h / 2)), i.strokeStyle = "white", i.beginPath(), i.moveTo(t.x, t.y + 12), i.lineTo(t.x + t.w, t.y + 12), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h), i.lineTo(t.x + t.w, t.y + t.h), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h / 2), i.lineTo(t.x + t.w, t.y + t.h / 2), i.stroke();
}
function Es(e, t, n, r = { color: "black", font: "12px serif" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.color, o.font = r.font, o.fillText(n, t.x, t.y);
}
function Ts(e, t, n, r, o, s) {
  let i = r.w / t.width, l = r.h / t.height, a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  let h = [], u = [];
  n.forEach((f) => {
    h.push(t.getBand(f)), u.push(t.getBandStatistics(f));
  });
  for (let f = 0; f < t.height; f++)
    for (let d = 0; d < t.width; d++) {
      let b = n.map((g) => h[g][f][d]), y = o(u, b);
      a.fillStyle = y, a.fillRect(r.x + d * i, r.y + f * l, i, l);
    }
  if (s) {
    let [f, d, b, y] = s;
    a.strokeStyle = "red", a.lineWidth = 1, a.strokeRect(r.x + f * i, r.y + d * l, (b - f) * i, (y - d) * l);
  }
  a.strokeStyle = "red", a.lineWidth = 1, a.beginPath(), a.moveTo(r.x + r.w / 2, r.y + r.h / 2 - 10), a.lineTo(r.x + r.w / 2, r.y + r.h / 2 + 10), a.stroke(), a.beginPath(), a.moveTo(r.x + r.w / 2 - 10, r.y + r.h / 2), a.lineTo(r.x + r.w / 2 + 10, r.y + r.h / 2), a.stroke();
}
function Or(e, t, n, r = { color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.backgroundColor, o.fillRect(t.x, t.y, t.w, t.h), o.fillStyle = r.color, o.fillRect(t.x, t.y, t.w * n / 100, t.h), o.strokeStyle = "white", o.lineWidth = 1;
  for (let s = 0; s < 10; s++)
    o.beginPath(), o.moveTo(t.x + t.w * s / 10, t.y), o.lineTo(t.x + t.w * s / 10, t.y + t.h), o.stroke();
  t.h >= 20 && t.w >= 40 && (o.fillStyle = "white", o.font = "20px serif", o.fillText(n + "%", t.x + t.w / 2 - 20, t.y + t.h / 2 + 6));
}
function _s() {
  let e = document.createElement("canvas");
  e.width = 200, e.height = 20, document.body.appendChild(e);
  let t = { x: 0, y: 0, w: 200, h: 20 }, n = 0;
  setInterval(() => {
    Or(e, t, n), n += 1, n > 100 && (n = 0);
  }, 100);
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  binDrawGrid2d: bs,
  drawCountour: xs,
  drawGrid2d: gs,
  drawProgress: Or,
  drawQTree2d: te,
  drawSample: Ss,
  drawSample2: Ms,
  drawText: Es,
  drawTrueColorGrid2d: Ts,
  testProgress: _s
}, Symbol.toStringTag, { value: "Module" }));
function Ps(e, t, n, r, o = 1, s = 1) {
  let i = new Array(t), l = (r - n) / t;
  for (let a = 0; a < t; a++)
    i[a] = e(2 * Math.PI * o * (n + a * l)) * s;
  return i;
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
function Rs(e) {
  return e.imag *= -1, e;
}
function Os(e, t) {
  let n = [];
  for (let r = 0; r < t; r++)
    n.push({ real: e[r], imag: 0 });
  return n;
}
function Fr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[Cs(r, t)];
  return n;
}
function Cs(e, t) {
  let n = e.toString(2);
  return n = n.split("").reverse().join(""), n = n + "0".repeat(Math.log2(t) - n.length), parseInt(n, 2);
}
function Nr(e) {
  let t = e.length, n = Os(e, t), o = Fr(n).slice();
  for (let s = 1; s < Math.log2(t) + 1; s++) {
    let i = Math.pow(2, s), l = Lr(1, i);
    for (let a = 0; a < t; a += i) {
      let h = { real: 1, imag: 0 };
      for (let u = 0; u < i / 2; u++) {
        let f = ge(h, o[a + u + i / 2]), d = o[a + u];
        o[a + u] = Cr(d, f), o[a + u + i / 2] = kr(d, f), h = ge(h, l);
      }
    }
  }
  return o;
}
function ks(e) {
  let n = Ve(e).map((o) => o.map((s) => Math.sqrt(s.real * s.real + s.imag * s.imag)));
  return vr(Ve(n, "column"));
}
function Br(e) {
  let t = e.length, r = Fr(e).slice();
  for (let o = 1; o < Math.log2(t) + 1; o++) {
    let s = Math.pow(2, o), i = Lr(-1, s);
    for (let l = 0; l < t; l += s) {
      let a = { real: 1, imag: 0 };
      for (let h = 0; h < s / 2; h++) {
        let u = ge(a, r[l + h + s / 2]), f = r[l + h];
        r[l + h] = Cr(f, u), r[l + h + s / 2] = kr(f, u), a = ge(a, i);
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
    n[r] = Dr(e[r]);
  return n;
}
function Ir(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function Ls(e, t = "row") {
  return t === "row" ? Ln(e) : _e(Ln($t(e)));
}
function Ln(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Ir(e[r]);
  return n;
}
function Ve(e, t = "row") {
  return t === "row" ? Fn(e) : $t(Fn(_e(e)));
}
function Fn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let s = 0; s < n; s++)
      e[s] = e[s].concat(new Array(o - t).fill(0));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Nr(e[o]);
  return r;
}
function Fs(e, t = "row") {
  return t === "row" ? Nn(e) : $t(Nn($t(e)));
}
function Nn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let s = 0; s < n; s++)
      e[s] = e[s].concat(new Array(o - t).fill({ real: 0, imag: 0 }));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Br(e[o]);
  return r;
}
function _e(e) {
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
function Dr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].imag;
  return n;
}
function Ns(e, t = "row") {
  return t === "row" ? kn(e) : _e(kn($t(e)));
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
function Bs(e, t = "row") {
  return t === "row" ? Bn(e) : _e(Bn($t(e)));
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
const Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FFT: Nr,
  FFT2: Ve,
  FFTImag: Dr,
  FFTImag2: Ns,
  FFTReal: jr,
  FFTReal2: Bs,
  FFTShift: vr,
  IFFT: Br,
  IFFT2: Fs,
  IFFTReal: Ir,
  IFFTReal2: Ls,
  conj: Rs,
  fastFFT2: ks,
  sample: Ps
}, Symbol.toStringTag, { value: "Module" }));
export {
  zs as CGUtils,
  Xs as Colors,
  $s as Coverage,
  Hs as Delaunay,
  Ks as Fourier,
  Us as Geometry,
  qs as Measuration,
  Ws as Meta,
  Vs as Noise,
  Js as QuadTree,
  vs as Reference,
  Gs as Renderer,
  Ys as Shell,
  js as Unit,
  Ds as Utils
};
