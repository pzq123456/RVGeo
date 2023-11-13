var jr = Object.defineProperty;
var vr = (e, t, n) => t in e ? jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (vr(e, typeof t != "symbol" ? t + "" : t, n), n);
const mt = 11102230246251565e-32, P = 134217729, Bn = (3 + 8 * mt) * mt;
function ut(e, t, n, r, o) {
  let i, s, a, c, l = t[0], u = r[0], h = 0, d = 0;
  u > l == u > -l ? (i = l, l = t[++h]) : (i = u, u = r[++d]);
  let b = 0;
  if (h < e && d < n)
    for (u > l == u > -l ? (s = l + i, a = i - (s - l), l = t[++h]) : (s = u + i, a = i - (s - u), u = r[++d]), i = s, a !== 0 && (o[b++] = a); h < e && d < n; )
      u > l == u > -l ? (s = i + l, c = s - i, a = i - (s - c) + (l - c), l = t[++h]) : (s = i + u, c = s - i, a = i - (s - c) + (u - c), u = r[++d]), i = s, a !== 0 && (o[b++] = a);
  for (; h < e; )
    s = i + l, c = s - i, a = i - (s - c) + (l - c), l = t[++h], i = s, a !== 0 && (o[b++] = a);
  for (; d < n; )
    s = i + u, c = s - i, a = i - (s - c) + (u - c), u = r[++d], i = s, a !== 0 && (o[b++] = a);
  return (i !== 0 || b === 0) && (o[b++] = i), b;
}
function bt(e, t, n, r, o, i, s, a) {
  return ut(ut(e, t, n, r, s), s, o, i, a);
}
function M(e, t, n, r) {
  let o, i, s, a, c, l, u, h, d, b, y;
  u = P * n, b = u - (u - n), y = n - b;
  let g = t[0];
  o = g * n, u = P * g, h = u - (u - g), d = g - h, s = d * y - (o - h * b - d * b - h * y);
  let O = 0;
  s !== 0 && (r[O++] = s);
  for (let T = 1; T < e; T++)
    g = t[T], a = g * n, u = P * g, h = u - (u - g), d = g - h, c = d * y - (a - h * b - d * b - h * y), i = o + c, l = i - o, s = o - (i - l) + (c - l), s !== 0 && (r[O++] = s), o = a + i, s = i - (o - a), s !== 0 && (r[O++] = s);
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
const Ur = (3 + 16 * mt) * mt, qr = (2 + 12 * mt) * mt, zr = (9 + 64 * mt) * mt * mt, Ut = V(4), cn = V(8), hn = V(12), fn = V(16), yt = V(4);
function Hr(e, t, n, r, o, i, s) {
  let a, c, l, u, h, d, b, y, g, O, T, I, v, J, tt, nt, st, rt;
  const C = e - o, q = n - o, U = t - i, z = r - i;
  J = C * z, d = P * C, b = d - (d - C), y = C - b, d = P * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * q, d = P * U, b = d - (d - U), y = U - b, d = P * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), T = tt - st, h = tt - T, Ut[0] = tt - (T + h) + (h - st), I = J + T, h = I - J, v = J - (I - h) + (T - h), T = v - nt, h = v - T, Ut[1] = v - (T + h) + (h - nt), rt = I + T, h = rt - I, Ut[2] = I - (rt - h) + (T - h), Ut[3] = rt;
  let et = Dn(4, Ut), f = qr * s;
  if (et >= f || -et >= f || (h = e - C, a = e - (C + h) + (h - o), h = n - q, l = n - (q + h) + (h - o), h = t - U, c = t - (U + h) + (h - i), h = r - z, u = r - (z + h) + (h - i), a === 0 && c === 0 && l === 0 && u === 0) || (f = zr * s + Bn * Math.abs(et), et += C * u + z * a - (U * l + q * c), et >= f || -et >= f))
    return et;
  J = a * z, d = P * a, b = d - (d - a), y = a - b, d = P * z, g = d - (d - z), O = z - g, tt = y * O - (J - b * g - y * g - b * O), nt = c * q, d = P * c, b = d - (d - c), y = c - b, d = P * q, g = d - (d - q), O = q - g, st = y * O - (nt - b * g - y * g - b * O), T = tt - st, h = tt - T, yt[0] = tt - (T + h) + (h - st), I = J + T, h = I - J, v = J - (I - h) + (T - h), T = v - nt, h = v - T, yt[1] = v - (T + h) + (h - nt), rt = I + T, h = rt - I, yt[2] = I - (rt - h) + (T - h), yt[3] = rt;
  const m = ut(4, Ut, 4, yt, cn);
  J = C * u, d = P * C, b = d - (d - C), y = C - b, d = P * u, g = d - (d - u), O = u - g, tt = y * O - (J - b * g - y * g - b * O), nt = U * l, d = P * U, b = d - (d - U), y = U - b, d = P * l, g = d - (d - l), O = l - g, st = y * O - (nt - b * g - y * g - b * O), T = tt - st, h = tt - T, yt[0] = tt - (T + h) + (h - st), I = J + T, h = I - J, v = J - (I - h) + (T - h), T = v - nt, h = v - T, yt[1] = v - (T + h) + (h - nt), rt = I + T, h = rt - I, yt[2] = I - (rt - h) + (T - h), yt[3] = rt;
  const p = ut(m, cn, 4, yt, hn);
  J = a * u, d = P * a, b = d - (d - a), y = a - b, d = P * u, g = d - (d - u), O = u - g, tt = y * O - (J - b * g - y * g - b * O), nt = c * l, d = P * c, b = d - (d - c), y = c - b, d = P * l, g = d - (d - l), O = l - g, st = y * O - (nt - b * g - y * g - b * O), T = tt - st, h = tt - T, yt[0] = tt - (T + h) + (h - st), I = J + T, h = I - J, v = J - (I - h) + (T - h), T = v - nt, h = v - T, yt[1] = v - (T + h) + (h - nt), rt = I + T, h = rt - I, yt[2] = I - (rt - h) + (T - h), yt[3] = rt;
  const A = ut(p, hn, 4, yt, fn);
  return fn[A - 1];
}
function Qt(e, t, n, r, o, i) {
  const s = (t - i) * (n - o), a = (e - o) * (r - i), c = s - a, l = Math.abs(s + a);
  return Math.abs(c) >= Ur * l ? c : -Hr(e, t, n, r, o, i, l);
}
const Yr = (10 + 96 * mt) * mt, Wr = (4 + 48 * mt) * mt, $r = (44 + 576 * mt) * mt * mt, Ct = V(4), Lt = V(4), kt = V(4), Mt = V(4), Et = V(4), _t = V(4), pt = V(4), wt = V(4), Te = V(8), Re = V(8), Pe = V(8), Oe = V(8), Ce = V(8), Le = V(8), ie = V(8), se = V(8), ae = V(8), Bt = V(4), Dt = V(4), It = V(4), L = V(8), D = V(16), ot = V(16), it = V(16), K = V(32), Ft = V(32), at = V(48), gt = V(64);
let Ht = V(1152), ke = V(1152);
function lt(e, t, n) {
  e = ut(e, Ht, t, n, ke);
  const r = Ht;
  return Ht = ke, ke = r, e;
}
function Jr(e, t, n, r, o, i, s, a, c) {
  let l, u, h, d, b, y, g, O, T, I, v, J, tt, nt, st, rt, C, q, U, z, et, f, m, p, A, S, _, w, E, k, R, F, N, j, B;
  const H = e - s, Y = n - s, W = o - s, X = t - a, $ = r - a, G = i - a;
  R = Y * G, m = P * Y, p = m - (m - Y), A = Y - p, m = P * G, S = m - (m - G), _ = G - S, F = A * _ - (R - p * S - A * S - p * _), N = W * $, m = P * W, p = m - (m - W), A = W - p, m = P * $, S = m - (m - $), _ = $ - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, Ct[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, Ct[1] = k - (w + f) + (f - N), B = E + w, f = B - E, Ct[2] = E - (B - f) + (w - f), Ct[3] = B, R = W * X, m = P * W, p = m - (m - W), A = W - p, m = P * X, S = m - (m - X), _ = X - S, F = A * _ - (R - p * S - A * S - p * _), N = H * G, m = P * H, p = m - (m - H), A = H - p, m = P * G, S = m - (m - G), _ = G - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, Lt[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, Lt[1] = k - (w + f) + (f - N), B = E + w, f = B - E, Lt[2] = E - (B - f) + (w - f), Lt[3] = B, R = H * $, m = P * H, p = m - (m - H), A = H - p, m = P * $, S = m - (m - $), _ = $ - S, F = A * _ - (R - p * S - A * S - p * _), N = Y * X, m = P * Y, p = m - (m - Y), A = Y - p, m = P * X, S = m - (m - X), _ = X - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, kt[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, kt[1] = k - (w + f) + (f - N), B = E + w, f = B - E, kt[2] = E - (B - f) + (w - f), kt[3] = B, l = ut(
    ut(
      ut(
        M(M(4, Ct, H, L), L, H, D),
        D,
        M(M(4, Ct, X, L), L, X, ot),
        ot,
        K
      ),
      K,
      ut(
        M(M(4, Lt, Y, L), L, Y, D),
        D,
        M(M(4, Lt, $, L), L, $, ot),
        ot,
        Ft
      ),
      Ft,
      gt
    ),
    gt,
    ut(
      M(M(4, kt, W, L), L, W, D),
      D,
      M(M(4, kt, G, L), L, G, ot),
      ot,
      K
    ),
    K,
    Ht
  );
  let Pt = Dn(l, Ht), Xt = Wr * c;
  if (Pt >= Xt || -Pt >= Xt || (f = e - H, u = e - (H + f) + (f - s), f = t - X, b = t - (X + f) + (f - a), f = n - Y, h = n - (Y + f) + (f - s), f = r - $, y = r - ($ + f) + (f - a), f = o - W, d = o - (W + f) + (f - s), f = i - G, g = i - (G + f) + (f - a), u === 0 && h === 0 && d === 0 && b === 0 && y === 0 && g === 0) || (Xt = $r * c + Bn * Math.abs(Pt), Pt += (H * H + X * X) * (Y * g + G * h - ($ * d + W * y)) + 2 * (H * u + X * b) * (Y * G - $ * W) + ((Y * Y + $ * $) * (W * b + X * d - (G * u + H * g)) + 2 * (Y * h + $ * y) * (W * X - G * H)) + ((W * W + G * G) * (H * y + $ * u - (X * h + Y * b)) + 2 * (W * d + G * g) * (H * $ - X * Y)), Pt >= Xt || -Pt >= Xt))
    return Pt;
  if ((h !== 0 || y !== 0 || d !== 0 || g !== 0) && (R = H * H, m = P * H, p = m - (m - H), A = H - p, F = A * A - (R - p * p - (p + p) * A), N = X * X, m = P * X, p = m - (m - X), A = X - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, Mt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, Mt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, Mt[2] = E - (B - f) + (w - f), Mt[3] = B), (d !== 0 || g !== 0 || u !== 0 || b !== 0) && (R = Y * Y, m = P * Y, p = m - (m - Y), A = Y - p, F = A * A - (R - p * p - (p + p) * A), N = $ * $, m = P * $, p = m - (m - $), A = $ - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, Et[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, Et[1] = k - (w - f) + (N - f), B = E + w, f = B - E, Et[2] = E - (B - f) + (w - f), Et[3] = B), (u !== 0 || b !== 0 || h !== 0 || y !== 0) && (R = W * W, m = P * W, p = m - (m - W), A = W - p, F = A * A - (R - p * p - (p + p) * A), N = G * G, m = P * G, p = m - (m - G), A = G - p, j = A * A - (N - p * p - (p + p) * A), w = F + j, f = w - F, _t[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, _t[1] = k - (w - f) + (N - f), B = E + w, f = B - E, _t[2] = E - (B - f) + (w - f), _t[3] = B), u !== 0 && (O = M(4, Ct, u, Te), l = lt(l, bt(
    M(O, Te, 2 * H, D),
    D,
    M(M(4, _t, u, L), L, $, ot),
    ot,
    M(M(4, Et, u, L), L, -G, it),
    it,
    K,
    at
  ), at)), b !== 0 && (T = M(4, Ct, b, Re), l = lt(l, bt(
    M(T, Re, 2 * X, D),
    D,
    M(M(4, Et, b, L), L, W, ot),
    ot,
    M(M(4, _t, b, L), L, -Y, it),
    it,
    K,
    at
  ), at)), h !== 0 && (I = M(4, Lt, h, Pe), l = lt(l, bt(
    M(I, Pe, 2 * Y, D),
    D,
    M(M(4, Mt, h, L), L, G, ot),
    ot,
    M(M(4, _t, h, L), L, -X, it),
    it,
    K,
    at
  ), at)), y !== 0 && (v = M(4, Lt, y, Oe), l = lt(l, bt(
    M(v, Oe, 2 * $, D),
    D,
    M(M(4, _t, y, L), L, H, ot),
    ot,
    M(M(4, Mt, y, L), L, -W, it),
    it,
    K,
    at
  ), at)), d !== 0 && (J = M(4, kt, d, Ce), l = lt(l, bt(
    M(J, Ce, 2 * W, D),
    D,
    M(M(4, Et, d, L), L, X, ot),
    ot,
    M(M(4, Mt, d, L), L, -$, it),
    it,
    K,
    at
  ), at)), g !== 0 && (tt = M(4, kt, g, Le), l = lt(l, bt(
    M(tt, Le, 2 * G, D),
    D,
    M(M(4, Mt, g, L), L, Y, ot),
    ot,
    M(M(4, Et, g, L), L, -H, it),
    it,
    K,
    at
  ), at)), u !== 0 || b !== 0) {
    if (h !== 0 || y !== 0 || d !== 0 || g !== 0 ? (R = h * G, m = P * h, p = m - (m - h), A = h - p, m = P * G, S = m - (m - G), _ = G - S, F = A * _ - (R - p * S - A * S - p * _), N = Y * g, m = P * Y, p = m - (m - Y), A = Y - p, m = P * g, S = m - (m - g), _ = g - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, pt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, R = d * -$, m = P * d, p = m - (m - d), A = d - p, m = P * -$, S = m - (m - -$), _ = -$ - S, F = A * _ - (R - p * S - A * S - p * _), N = W * -y, m = P * W, p = m - (m - W), A = W - p, m = P * -y, S = m - (m - -y), _ = -y - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, wt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, st = ut(4, pt, 4, wt, se), R = h * g, m = P * h, p = m - (m - h), A = h - p, m = P * g, S = m - (m - g), _ = g - S, F = A * _ - (R - p * S - A * S - p * _), N = d * y, m = P * d, p = m - (m - d), A = d - p, m = P * y, S = m - (m - y), _ = y - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, Dt[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, Dt[1] = k - (w + f) + (f - N), B = E + w, f = B - E, Dt[2] = E - (B - f) + (w - f), Dt[3] = B, q = 4) : (se[0] = 0, st = 1, Dt[0] = 0, q = 1), u !== 0) {
      const ht = M(st, se, u, it);
      l = lt(l, ut(
        M(O, Te, u, D),
        D,
        M(ht, it, 2 * H, K),
        K,
        at
      ), at);
      const ft = M(q, Dt, u, L);
      l = lt(l, bt(
        M(ft, L, 2 * H, D),
        D,
        M(ft, L, u, ot),
        ot,
        M(ht, it, u, K),
        K,
        Ft,
        gt
      ), gt), y !== 0 && (l = lt(l, M(M(4, _t, u, L), L, y, D), D)), g !== 0 && (l = lt(l, M(M(4, Et, -u, L), L, g, D), D));
    }
    if (b !== 0) {
      const ht = M(st, se, b, it);
      l = lt(l, ut(
        M(T, Re, b, D),
        D,
        M(ht, it, 2 * X, K),
        K,
        at
      ), at);
      const ft = M(q, Dt, b, L);
      l = lt(l, bt(
        M(ft, L, 2 * X, D),
        D,
        M(ft, L, b, ot),
        ot,
        M(ht, it, b, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (h !== 0 || y !== 0) {
    if (d !== 0 || g !== 0 || u !== 0 || b !== 0 ? (R = d * X, m = P * d, p = m - (m - d), A = d - p, m = P * X, S = m - (m - X), _ = X - S, F = A * _ - (R - p * S - A * S - p * _), N = W * b, m = P * W, p = m - (m - W), A = W - p, m = P * b, S = m - (m - b), _ = b - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, pt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, z = -G, et = -g, R = u * z, m = P * u, p = m - (m - u), A = u - p, m = P * z, S = m - (m - z), _ = z - S, F = A * _ - (R - p * S - A * S - p * _), N = H * et, m = P * H, p = m - (m - H), A = H - p, m = P * et, S = m - (m - et), _ = et - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, wt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, rt = ut(4, pt, 4, wt, ae), R = d * b, m = P * d, p = m - (m - d), A = d - p, m = P * b, S = m - (m - b), _ = b - S, F = A * _ - (R - p * S - A * S - p * _), N = u * g, m = P * u, p = m - (m - u), A = u - p, m = P * g, S = m - (m - g), _ = g - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, It[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, It[1] = k - (w + f) + (f - N), B = E + w, f = B - E, It[2] = E - (B - f) + (w - f), It[3] = B, U = 4) : (ae[0] = 0, rt = 1, It[0] = 0, U = 1), h !== 0) {
      const ht = M(rt, ae, h, it);
      l = lt(l, ut(
        M(I, Pe, h, D),
        D,
        M(ht, it, 2 * Y, K),
        K,
        at
      ), at);
      const ft = M(U, It, h, L);
      l = lt(l, bt(
        M(ft, L, 2 * Y, D),
        D,
        M(ft, L, h, ot),
        ot,
        M(ht, it, h, K),
        K,
        Ft,
        gt
      ), gt), g !== 0 && (l = lt(l, M(M(4, Mt, h, L), L, g, D), D)), b !== 0 && (l = lt(l, M(M(4, _t, -h, L), L, b, D), D));
    }
    if (y !== 0) {
      const ht = M(rt, ae, y, it);
      l = lt(l, ut(
        M(v, Oe, y, D),
        D,
        M(ht, it, 2 * $, K),
        K,
        at
      ), at);
      const ft = M(U, It, y, L);
      l = lt(l, bt(
        M(ft, L, 2 * $, D),
        D,
        M(ft, L, y, ot),
        ot,
        M(ht, it, y, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  if (d !== 0 || g !== 0) {
    if (u !== 0 || b !== 0 || h !== 0 || y !== 0 ? (R = u * $, m = P * u, p = m - (m - u), A = u - p, m = P * $, S = m - (m - $), _ = $ - S, F = A * _ - (R - p * S - A * S - p * _), N = H * y, m = P * H, p = m - (m - H), A = H - p, m = P * y, S = m - (m - y), _ = y - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, pt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, pt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, pt[2] = E - (B - f) + (w - f), pt[3] = B, z = -X, et = -b, R = h * z, m = P * h, p = m - (m - h), A = h - p, m = P * z, S = m - (m - z), _ = z - S, F = A * _ - (R - p * S - A * S - p * _), N = Y * et, m = P * Y, p = m - (m - Y), A = Y - p, m = P * et, S = m - (m - et), _ = et - S, j = A * _ - (N - p * S - A * S - p * _), w = F + j, f = w - F, wt[0] = F - (w - f) + (j - f), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k + N, f = w - k, wt[1] = k - (w - f) + (N - f), B = E + w, f = B - E, wt[2] = E - (B - f) + (w - f), wt[3] = B, nt = ut(4, pt, 4, wt, ie), R = u * y, m = P * u, p = m - (m - u), A = u - p, m = P * y, S = m - (m - y), _ = y - S, F = A * _ - (R - p * S - A * S - p * _), N = h * b, m = P * h, p = m - (m - h), A = h - p, m = P * b, S = m - (m - b), _ = b - S, j = A * _ - (N - p * S - A * S - p * _), w = F - j, f = F - w, Bt[0] = F - (w + f) + (f - j), E = R + w, f = E - R, k = R - (E - f) + (w - f), w = k - N, f = k - w, Bt[1] = k - (w + f) + (f - N), B = E + w, f = B - E, Bt[2] = E - (B - f) + (w - f), Bt[3] = B, C = 4) : (ie[0] = 0, nt = 1, Bt[0] = 0, C = 1), d !== 0) {
      const ht = M(nt, ie, d, it);
      l = lt(l, ut(
        M(J, Ce, d, D),
        D,
        M(ht, it, 2 * W, K),
        K,
        at
      ), at);
      const ft = M(C, Bt, d, L);
      l = lt(l, bt(
        M(ft, L, 2 * W, D),
        D,
        M(ft, L, d, ot),
        ot,
        M(ht, it, d, K),
        K,
        Ft,
        gt
      ), gt), b !== 0 && (l = lt(l, M(M(4, Et, d, L), L, b, D), D)), y !== 0 && (l = lt(l, M(M(4, Mt, -d, L), L, y, D), D));
    }
    if (g !== 0) {
      const ht = M(nt, ie, g, it);
      l = lt(l, ut(
        M(tt, Le, g, D),
        D,
        M(ht, it, 2 * G, K),
        K,
        at
      ), at);
      const ft = M(C, Bt, g, L);
      l = lt(l, bt(
        M(ft, L, 2 * G, D),
        D,
        M(ft, L, g, ot),
        ot,
        M(ht, it, g, K),
        K,
        Ft,
        gt
      ), gt);
    }
  }
  return Ht[l - 1];
}
function Vr(e, t, n, r, o, i, s, a) {
  const c = e - s, l = n - s, u = o - s, h = t - a, d = r - a, b = i - a, y = l * b, g = u * d, O = c * c + h * h, T = u * h, I = c * b, v = l * l + d * d, J = c * d, tt = l * h, nt = u * u + b * b, st = O * (y - g) + v * (T - I) + nt * (J - tt), rt = (Math.abs(y) + Math.abs(g)) * O + (Math.abs(T) + Math.abs(I)) * v + (Math.abs(J) + Math.abs(tt)) * nt, C = Yr * rt;
  return st > C || -st > C ? st : Jr(e, t, n, r, o, i, s, a, rt);
}
function Ue(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
function In(e) {
  return Math.abs(e) <= 180 ? e : e - Jt(e) * 360;
}
function Jt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function Ve(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], o = e[1], i = t[0], s = t[1], a = n[0], c = n[1], l = (i - r) * (c - o) - (s - o) * (a - r);
  return l = Jt(l), l;
}
function ee(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), o = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return o = o * 180 / Math.PI, o < 0 && (o += 360), o;
}
function Xr(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let o = e[0], i = e[1], s = t[0], a = t[1], c = n[0], l = n[1], u = Qt(o, i, s, a, c, l);
  return r && (u = -u), u = Jt(u), u;
}
function Gr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], a = t[1], c = n[0], l = n[1], u = r[0], h = r[1], d = Vr(o, i, s, a, c, l, u, h);
  return d = Jt(d), d;
}
function Kr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let o = e[0], i = e[1], s = t[0], a = t[1], c = n[0], l = n[1], u = r[0], h = r[1];
  const d = o - u, b = i - h, y = s - u, g = a - h, O = c - u, T = l - h, I = d * d + b * b, v = y * y + g * g, J = O * O + T * T;
  let tt = d * (g * J - v * T) - b * (y * J - v * O) + I * (y * T - g * O);
  return Jt(tt);
}
function Qr(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function jn(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(...jn(r)) : t.push(r);
  }
  return t;
}
function vn(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    Array.isArray(o) ? n.push(vn(o, t)) : n.push(t[o]);
  }
  return n;
}
function Zr(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function to(e, t) {
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
function eo(e, t) {
  if (t > e)
    throw new Error("num must be less than length!");
  const n = [];
  for (; n.length < t; ) {
    const r = Math.floor(Math.random() * e);
    n.includes(r) || n.push(r);
  }
  return n;
}
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjust_lon: In,
  calculateArrayShape: Qr,
  ccw: Ve,
  ccwRobust: Xr,
  concatEL2DArray: Zr,
  fillIndexArray: vn,
  flattenArray: jn,
  getAngle: ee,
  inCircle: Kr,
  inCircleRobust: Gr,
  randomIndexArray: eo,
  round: Ue,
  sign: Jt,
  subColumnInEL2DArray: to
}, Symbol.toStringTag, { value: "Module" })), Un = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = Un.a, Xe = {
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
function no(e, t = "kilometers") {
  const n = Xe[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Yt(e) {
  return e % 360 * Math.PI / 180;
}
function ro(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function qn(e, t) {
  const n = Ge[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function ye(e, t) {
  const n = Ge[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function oo(e, t, n) {
  return ye(qn(e, t), n);
}
const ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: Ke,
  degreesToRadians: Yt,
  earthRadius: dt,
  factors: Xe,
  factors2: Ge,
  lengthToRadians: no,
  metersTo: ye,
  radiansToDegrees: ro,
  radiansToLength: Qe,
  toMeters: qn,
  unitTounit: oo
}, Symbol.toStringTag, { value: "Module" }));
function xt(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, o = dt, i = Array.isArray(e) ? e : e.to2DArray(), s = In(i[0]);
  let a = Yt(s), c = Yt(i[1]);
  return a = Qe(a, "meters"), c = o * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * c)), a > r && (a = r), a < -r && (a = -r), c > r && (c = r), c < -r && (c = -r), a = Ue(ye(a, t), n), c = Ue(ye(c, t), n), [a, c];
}
function jt(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function io(e, t = "meters", n = 6) {
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
function so(e, t = "meters", n = 6) {
  let r = [], o = xt([e[0], e[1]], t, n), i = xt([e[2], e[3]], t, n);
  return r = [o[0], o[1], i[0], i[1]], r;
}
function ao(e, t = "meters", n = 6) {
  let r = [], o = jt([e[0], e[1]]), i = jt([e[2], e[3]]);
  return r = [o[0], o[1], i[0], i[1]], r;
}
const Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: so,
  convertToMercator: xt,
  convertToMercators: io,
  convertToWgs84: jt,
  plane2MBR: ao
}, Symbol.toStringTag, { value: "Module" }));
function zn(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function lo(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Hn(e) {
  let t = e[0], n = e[1], r = e[2], o = e[3];
  return [
    [t, n],
    [t, o],
    [r, o],
    [r, n],
    [t, n]
  ];
}
function uo(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i][0], a = e[i][1];
    t = Math.min(t, s), n = Math.min(n, a), r = Math.max(r, s), o = Math.max(o, a);
  }
  return [t, n, r, o];
}
function Yn(e, t) {
  let n = t[0], r = t[1], o = t[2], i = t[3], s = e[0], a = e[1];
  return s >= n && s <= o && a >= r && a <= i;
}
class Wn {
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
class Ze extends Wn {
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
      for (let a = 0; a < t.length; a++)
        n += t[a];
      for (let a = 0; a < t.length; a++)
        t[a] /= n;
      let r = 0, o = 0;
      for (let a = 0; a < this.coordinates.length; a++) {
        let c = this.coordinates[a].to2DArray();
        r += c[0] * t[a], o += c[1] * t[a];
      }
      let i = r, s = o;
      return new At(i, s);
    } else {
      let n = 0, r = 0;
      for (let s = 0; s < this.coordinates.length; s++) {
        let a = this.coordinates[s].to2DArray();
        n += a[0], r += a[1];
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
class $n extends Wn {
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
class co extends $n {
  constructor(t, ...n) {
    super(t, ...n), this.type = "Polygon";
  }
  static isPolygon(t) {
    return t.type === "Polygon";
  }
}
class ho {
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
    let n = zn(t), r = Math.abs(n.x - this.x), o = Math.abs(n.y - this.y), i = this.r, s = n.w / 2, a = n.h / 2, c = Math.pow(r - s, 2) + Math.pow(o - a, 2);
    return r > i + s || o > i + a ? !1 : r <= s || o <= a ? !0 : c <= this.rSquared;
  }
}
const Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: ho,
  LineString: tn,
  MultiLineString: $n,
  MultiPoint: Ze,
  Point: At,
  Polygon: co,
  getPointsMBR: uo,
  mbrToPolygon: Hn,
  mbrToRectangle: zn,
  pointInMBR: Yn,
  rectangleToMBR: lo
}, Symbol.toStringTag, { value: "Module" })), dn = Un.a;
function fo(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), o = Array.isArray(t) ? t : t.to2DArray();
  r.map((u, h) => {
    r[h] = Yt(u);
  }), o.map((u, h) => {
    o[h] = Yt(u);
  });
  const i = o[1] - r[1], s = o[0] - r[0], a = r[1], c = o[1], l = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(i / 2), 2) + Math.pow(Math.sin(s / 2), 2) * Math.cos(a) * Math.cos(c)
    )
  );
  return Qe(l, n);
}
function mo(e, t = "kilometers") {
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
function yo(e, t = "kilometers") {
  let n = tn.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((s, a) => {
    n[a] = s.to2DArray();
  })), n = n;
  let r = 0, o = n.length, i = [];
  for (let s = 0; s < o; s++) {
    i.push([]);
    for (let a = 0; a < 2; a++) {
      let c = Yt(n[s][a]);
      i[s].push(c);
    }
  }
  for (let s = 0; s < o; s++) {
    let a = (s + 1) % o, c = (s + 2) % o;
    r += (i[s][0] - i[c][0]) * Math.sin(i[a][1]);
  }
  return r = r * dn * dn / 2, r = r * Ke[t], Math.abs(r);
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: mo,
  SpherePolygonArea: yo,
  haversine: fo
}, Symbol.toStringTag, { value: "Module" }));
function ce(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function po(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function qe(e, t, n, r, o = xt, i = jt, s = !1) {
  o && (e = o(e), t = o(t), n = o(n), r = o(r));
  let a = [t[0] - e[0], t[1] - e[1]], c = [r[0] - n[0], r[1] - n[1]], l = ce(a, c);
  if (l === 0)
    return console.log("两条线段平行或共线"), null;
  let u = ce([n[0] - e[0], n[1] - e[1]], c) / l, h = ce([n[0] - e[0], n[1] - e[1]], a) / l;
  return !s && (u < 0 || u > 1 || h < 0 || h > 1) ? (console.log("交点不在两条线段上"), null) : i ? i([e[0] + a[0] * u, e[1] + a[1] * u]) : [e[0] + a[0] * u, e[1] + a[1] * u];
}
function en(e, t, n = !1) {
  if (n) {
    let r = xt(e), o = t[0], i = t[1], s = t[2], a = t[3];
    return [o, i] = xt([o, i]), [s, a] = xt([s, a]), r[0] < o || r[0] > s || r[1] < i || r[1] > a;
  } else {
    let r = t[0], o = t[1], i = t[2], s = t[3];
    return e[0] < r || e[0] > i || e[1] < o || e[1] > s;
  }
}
function Jn(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function Vn(e, t) {
  return Xn(e, Hn(t));
}
function Xn(e, t) {
  let n = e[e.length - 1], r, o, i, s = t;
  for (let a in e) {
    r = e[a];
    let c = s;
    s = [], o = c[c.length - 1];
    for (let l in c) {
      if (i = c[l], he(i, n, r)) {
        if (!he(o, n, r)) {
          let u = qe(
            o,
            i,
            n,
            r,
            xt,
            jt,
            !0
          );
          s.push(u);
        }
        s.push(i);
      } else if (he(o, n, r)) {
        let u = qe(
          o,
          i,
          n,
          r,
          xt,
          jt,
          !0
        );
        s.push(u);
      }
      o = i;
    }
    n = r;
  }
  return s;
}
function wo(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++)
    t[r][1] > e[1] != t[o][1] > e[1] && e[0] < (t[o][0] - t[r][0]) * (e[1] - t[r][1]) / (t[o][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function go(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    s[0] < t && (t = s[0]), s[0] > r && (r = s[0]), s[1] < n && (n = s[1]), s[1] > o && (o = s[1]);
  }
  return [t, n, r, o];
}
function bo(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function Ao(e, t) {
  return (e - 1 + t) % t;
}
function he(e, t, n) {
  return Ve(t, n, e) > 0;
}
const Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: Jn,
  PointInsidePolygon: wo,
  PointOutsideMBR: en,
  calculateMBR: go,
  cross: ce,
  cutPolygonByMBR: Vn,
  dot: po,
  intersection: qe,
  intersectionPolygon: Xn,
  iterPolygonEdge: bo,
  pointInEdge: he,
  prePointInPolygon: Ao
}, Symbol.toStringTag, { value: "Module" })), mn = Math.pow(2, -52), le = new Uint32Array(512);
class vt {
  static from(t, n = Gn, r = Kn) {
    const o = t.length, i = new Float64Array(o * 2);
    for (let s = 0; s < o; s++) {
      const a = t[s];
      i[2 * s] = n(a), i[2 * s + 1] = r(a);
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
    let a = 1 / 0, c = 1 / 0, l = -1 / 0, u = -1 / 0;
    for (let C = 0; C < s; C++) {
      const q = t[2 * C], U = t[2 * C + 1];
      q < a && (a = q), U < c && (c = U), q > l && (l = q), U > u && (u = U), this._ids[C] = C;
    }
    const h = (a + l) / 2, d = (c + u) / 2;
    let b, y, g;
    for (let C = 0, q = 1 / 0; C < s; C++) {
      const U = Fe(h, d, t[2 * C], t[2 * C + 1]);
      U < q && (b = C, q = U);
    }
    const O = t[2 * b], T = t[2 * b + 1];
    for (let C = 0, q = 1 / 0; C < s; C++) {
      if (C === b)
        continue;
      const U = Fe(O, T, t[2 * C], t[2 * C + 1]);
      U < q && U > 0 && (y = C, q = U);
    }
    let I = t[2 * y], v = t[2 * y + 1], J = 1 / 0;
    for (let C = 0; C < s; C++) {
      if (C === b || C === y)
        continue;
      const q = Mo(O, T, I, v, t[2 * C], t[2 * C + 1]);
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
    if (Qt(O, T, I, v, tt, nt) < 0) {
      const C = y, q = I, U = v;
      y = g, I = tt, v = nt, g = C, tt = q, nt = U;
    }
    const st = this.circumcenter(O, T, I, v, tt, nt);
    this._cx = st.x, this._cy = st.y;
    for (let C = 0; C < s; C++)
      this._dists[C] = Fe(t[2 * C], t[2 * C + 1], st.x, st.y);
    qt(this._ids, this._dists, 0, s - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[g] = y, r[y] = n[b] = g, r[g] = n[y] = b, o[b] = 0, o[y] = 1, o[g] = 2, i.fill(-1), i[this._hashKey(O, T)] = b, i[this._hashKey(I, v)] = y, i[this._hashKey(tt, nt)] = g, this.trianglesLen = 0, this._addTriangle(b, y, g, -1, -1, -1);
    for (let C = 0, q, U; C < this._ids.length; C++) {
      const z = this._ids[C], et = t[2 * z], f = t[2 * z + 1];
      if (C > 0 && Math.abs(et - q) <= mn && Math.abs(f - U) <= mn || (q = et, U = f, z === b || z === y || z === g))
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
      let _ = r[p];
      for (; A = r[_], Qt(et, f, t[2 * _], t[2 * _ + 1], t[2 * A], t[2 * A + 1]) < 0; )
        S = this._addTriangle(_, z, A, o[z], -1, o[_]), o[z] = this._legalize(S + 2), r[_] = _, rt--, _ = A;
      if (p === m)
        for (; A = n[p], Qt(et, f, t[2 * A], t[2 * A + 1], t[2 * p], t[2 * p + 1]) < 0; )
          S = this._addTriangle(A, z, p, -1, o[p], o[A]), this._legalize(S + 2), o[A] = S, r[p] = p, rt--, p = A;
      this._hullStart = n[z] = p, r[p] = n[_] = z, r[z] = _, i[this._hashKey(et, f)] = z, i[this._hashKey(t[2 * p], t[2 * p + 1])] = p;
    }
    this.hull = new Uint32Array(rt);
    for (let C = 0, q = this._hullStart; C < rt; C++)
      this.hull[C] = q, q = r[q];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(xo(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: o } = this;
    let i = 0, s = 0;
    for (; ; ) {
      const a = r[t], c = t - t % 3;
      if (s = c + (t + 2) % 3, a === -1) {
        if (i === 0)
          break;
        t = le[--i];
        continue;
      }
      const l = a - a % 3, u = c + (t + 1) % 3, h = l + (a + 2) % 3, d = n[s], b = n[t], y = n[u], g = n[h];
      if (So(
        o[2 * d],
        o[2 * d + 1],
        o[2 * b],
        o[2 * b + 1],
        o[2 * y],
        o[2 * y + 1],
        o[2 * g],
        o[2 * g + 1]
      )) {
        n[t] = g, n[a] = d;
        const T = r[h];
        if (T === -1) {
          let v = this._hullStart;
          do {
            if (this._hullTri[v] === h) {
              this._hullTri[v] = t;
              break;
            }
            v = this._hullPrev[v];
          } while (v !== this._hullStart);
        }
        this._link(t, T), this._link(a, r[s]), this._link(s, h);
        const I = l + (a + 1) % 3;
        i < le.length && (le[i++] = I);
      } else {
        if (i === 0)
          break;
        t = le[--i];
      }
    }
    return s;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, o, i, s) {
    const a = this.trianglesLen;
    return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = r, this._link(a, o), this._link(a + 1, i), this._link(a + 2, s), this.trianglesLen += 3, a;
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
    const o = n[0] - t[0], i = n[1] - t[1], s = r[0] - t[0], a = r[1] - t[1], c = o * o + i * i, l = s * s + a * a, u = 0.5 / (o * a - i * s), h = (a * c - i * l) * u, d = (o * l - s * c) * u;
    return h * h + d * d;
  }
  circumcenter(t, n, r, o, i, s) {
    const a = r - t, c = o - n, l = i - t, u = s - n, h = a * a + c * c, d = l * l + u * u, b = 0.5 / (a * u - c * l), y = t + (u * h - c * d) * b, g = n + (a * d - l * h) * b;
    return { x: y, y: g };
  }
}
function xo(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function Fe(e, t, n, r) {
  const o = e - n, i = t - r;
  return o * o + i * i;
}
function So(e, t, n, r, o, i, s, a) {
  const c = e - s, l = t - a, u = n - s, h = r - a, d = o - s, b = i - a, y = c * c + l * l, g = u * u + h * h, O = d * d + b * b;
  return c * (h * O - g * b) - l * (u * O - g * d) + y * (u * b - h * d) < 0;
}
function Mo(e, t, n, r, o, i) {
  const s = n - e, a = r - t, c = o - e, l = i - t, u = s * s + a * a, h = c * c + l * l, d = 0.5 / (s * l - a * c), b = (l * u - a * h) * d, y = (s * h - c * u) * d;
  return b * b + y * y;
}
function qt(e, t, n, r) {
  if (r - n <= 20)
    for (let o = n + 1; o <= r; o++) {
      const i = e[o], s = t[i];
      let a = o - 1;
      for (; a >= n && t[e[a]] > s; )
        e[a + 1] = e[a--];
      e[a + 1] = i;
    }
  else {
    const o = n + r >> 1;
    let i = n + 1, s = r;
    Gt(e, o, i), t[e[n]] > t[e[r]] && Gt(e, n, r), t[e[i]] > t[e[r]] && Gt(e, i, r), t[e[n]] > t[e[i]] && Gt(e, n, i);
    const a = e[i], c = t[a];
    for (; ; ) {
      do
        i++;
      while (t[e[i]] < c);
      do
        s--;
      while (t[e[s]] > c);
      if (s < i)
        break;
      Gt(e, i, s);
    }
    e[n + 1] = e[s], e[s] = a, r - i + 1 >= s - n ? (qt(e, t, i, r), qt(e, t, n, s - 1)) : (qt(e, t, n, s - 1), qt(e, t, i, r));
  }
}
function Gt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Gn(e) {
  return e[0];
}
function Kn(e) {
  return e[1];
}
function Eo(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function _o(e, t) {
  return Eo(t).map((n) => e.triangles[n]);
}
function To(e) {
  return Math.floor(e / 3);
}
function Ro(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], o = t[0] * t[0] + t[1] * t[1], i = n[0] * n[0] + n[1] * n[1], s = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / s * (r * (t[1] - n[1]) + o * (n[1] - e[1]) + i * (e[1] - t[1])),
    1 / s * (r * (n[0] - t[0]) + o * (e[0] - n[0]) + i * (t[0] - e[0]))
  ];
}
function Qn(e, t, n, r = jt) {
  const o = _o(t, n).map((s) => e[s]);
  let i = Ro(o[0], o[1], o[2]);
  return r && (i = r(i)), i;
}
function Zn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function Po(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const o = Zn(r);
    r = e.halfedges[o];
  } while (r !== -1 && r !== t);
  return n;
}
function Ne(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.triangles.length; o++) {
    const i = t.triangles[Zn(o)];
    if (!r.has(i)) {
      r.add(i);
      const c = Po(t, o).map(To).map((l) => Qn(e, t, l));
      n(i, c);
    }
  }
}
class Oo {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Gn, r = Kn) {
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
      this.isInsideMBR(s, t) || (s = Vn(s, t)), o.set(i, s);
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
    for (let a = 0; a < t.length; a++) {
      const [c, l] = t[a];
      if (c < r || c > i || l < o || l > s)
        return !1;
    }
    return !0;
  }
}
function Co(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, o] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, o);
  return n;
}
const Is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: vt,
  Voronoi: Oo,
  complateMap: Co,
  triangleCenter: Qn
}, Symbol.toStringTag, { value: "Module" }));
function Lo(e) {
  const t = e.map((i, s) => [...i.toXY(), s]);
  let n = t[0];
  for (let i = 1; i < t.length; i++)
    t[i][1] < n[1] && (n = t[i]);
  t.sort((i, s) => {
    let a = ee([n[0], n[1]], [i[0], i[1]]), c = ee([n[0], n[1]], [s[0], s[1]]);
    if (a < c)
      return -1;
    if (a > c)
      return 1;
    {
      let l = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2), u = Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2);
      return l < u ? -1 : 1;
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
function ko(e, t) {
  let n = e.map((s) => s.toXY());
  return vt.from(n).getTriangleIndices().filter((s) => {
    let a = [n[s[0]], n[s[1]], n[s[2]]];
    return vt.circumRadius(a[0], a[1], a[2]) * t < 1;
  });
}
const js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: ko,
  convexHull: Lo
}, Symbol.toStringTag, { value: "Module" }));
function tr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fo } = Object.prototype, { getPrototypeOf: nn } = Object, be = ((e) => (t) => {
  const n = Fo.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Rt = (e) => (e = e.toLowerCase(), (t) => be(t) === e), Ae = (e) => (t) => typeof t === e, { isArray: Vt } = Array, ne = Ae("undefined");
function No(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const er = Rt("ArrayBuffer");
function Bo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && er(e.buffer), t;
}
const Do = Ae("string"), St = Ae("function"), nr = Ae("number"), xe = (e) => e !== null && typeof e == "object", Io = (e) => e === !0 || e === !1, fe = (e) => {
  if (be(e) !== "object")
    return !1;
  const t = nn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, jo = Rt("Date"), vo = Rt("File"), Uo = Rt("Blob"), qo = Rt("FileList"), zo = (e) => xe(e) && St(e.pipe), Ho = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || St(e.append) && ((t = be(e)) === "formdata" || // detect form-data instance
  t === "object" && St(e.toString) && e.toString() === "[object FormData]"));
}, Yo = Rt("URLSearchParams"), Wo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Vt(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function rr(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const or = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ir = (e) => !ne(e) && e !== or;
function ze() {
  const { caseless: e } = ir(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && rr(t, o) || o;
    fe(t[i]) && fe(r) ? t[i] = ze(t[i], r) : fe(r) ? t[i] = ze({}, r) : Vt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && re(arguments[r], n);
  return t;
}
const $o = (e, t, n, { allOwnKeys: r } = {}) => (re(t, (o, i) => {
  n && St(o) ? e[i] = tr(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Jo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Vo = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xo = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && nn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Go = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ko = (e) => {
  if (!e)
    return null;
  if (Vt(e))
    return e;
  let t = e.length;
  if (!nr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Qo = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nn(Uint8Array)), Zo = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ti = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ei = Rt("HTMLFormElement"), ni = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), yn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ri = Rt("RegExp"), sr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  re(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, oi = (e) => {
  sr(e, (t, n) => {
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
}, ii = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Vt(e) ? r(e) : r(String(e).split(t)), n;
}, si = () => {
}, ai = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Be = "abcdefghijklmnopqrstuvwxyz", pn = "0123456789", ar = {
  DIGIT: pn,
  ALPHA: Be,
  ALPHA_DIGIT: Be + Be.toUpperCase() + pn
}, li = (e = 16, t = ar.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ui(e) {
  return !!(e && St(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ci = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (xe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Vt(r) ? [] : {};
        return re(r, (s, a) => {
          const c = n(s, o + 1);
          !ne(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, hi = Rt("AsyncFunction"), fi = (e) => e && (xe(e) || St(e)) && St(e.then) && St(e.catch), x = {
  isArray: Vt,
  isArrayBuffer: er,
  isBuffer: No,
  isFormData: Ho,
  isArrayBufferView: Bo,
  isString: Do,
  isNumber: nr,
  isBoolean: Io,
  isObject: xe,
  isPlainObject: fe,
  isUndefined: ne,
  isDate: jo,
  isFile: vo,
  isBlob: Uo,
  isRegExp: ri,
  isFunction: St,
  isStream: zo,
  isURLSearchParams: Yo,
  isTypedArray: Qo,
  isFileList: qo,
  forEach: re,
  merge: ze,
  extend: $o,
  trim: Wo,
  stripBOM: Jo,
  inherits: Vo,
  toFlatObject: Xo,
  kindOf: be,
  kindOfTest: Rt,
  endsWith: Go,
  toArray: Ko,
  forEachEntry: Zo,
  matchAll: ti,
  isHTMLForm: ei,
  hasOwnProperty: yn,
  hasOwnProp: yn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: sr,
  freezeMethods: oi,
  toObjectSet: ii,
  toCamelCase: ni,
  noop: si,
  toFiniteNumber: ai,
  findKey: rr,
  global: or,
  isContextDefined: ir,
  ALPHABET: ar,
  generateString: li,
  isSpecCompliantForm: ui,
  toJSONObject: ci,
  isAsyncFn: hi,
  isThenable: fi
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
const lr = Q.prototype, ur = {};
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
  ur[e] = { value: e };
});
Object.defineProperties(Q, ur);
Object.defineProperty(lr, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, o, i) => {
  const s = Object.create(lr);
  return x.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const di = null;
function He(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function cr(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wn(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = cr(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function mi(e) {
  return x.isArray(e) && !e.some(He);
}
const yi = x.toFlatObject(x, {}, null, function(t) {
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
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(y) {
    if (y === null)
      return "";
    if (x.isDate(y))
      return y.toISOString();
    if (!c && x.isBlob(y))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, g, O) {
    let T = y;
    if (y && !O && typeof y == "object") {
      if (x.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), y = JSON.stringify(y);
      else if (x.isArray(y) && mi(y) || (x.isFileList(y) || x.endsWith(g, "[]")) && (T = x.toArray(y)))
        return g = cr(g), T.forEach(function(v, J) {
          !(x.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? wn([g], J, i) : s === null ? g : g + "[]",
            l(v)
          );
        }), !1;
    }
    return He(y) ? !0 : (t.append(wn(O, g, i), l(y)), !1);
  }
  const h = [], d = Object.assign(yi, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: He
  });
  function b(y, g) {
    if (!x.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(y), x.forEach(y, function(T, I) {
        (!(x.isUndefined(T) || T === null) && o.call(
          t,
          T,
          x.isString(I) ? I.trim() : I,
          g,
          d
        )) === !0 && b(T, g ? g.concat(I) : [I]);
      }), h.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function gn(e) {
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
const hr = rn.prototype;
hr.append = function(t, n) {
  this._pairs.push([t, n]);
};
hr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, gn);
  } : gn;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function pi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function fr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || pi, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = x.isURLSearchParams(t) ? t.toString() : new rn(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class wi {
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
const bn = wi, dr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gi = typeof URLSearchParams < "u" ? URLSearchParams : rn, bi = typeof FormData < "u" ? FormData : null, Ai = typeof Blob < "u" ? Blob : null, xi = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Si = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Tt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gi,
    FormData: bi,
    Blob: Ai
  },
  isStandardBrowserEnv: xi,
  isStandardBrowserWebWorkerEnv: Si,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Mi(e, t) {
  return Se(e, new Tt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Tt.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ei(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _i(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function mr(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && x.isArray(o) ? o.length : s, c ? (x.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !x.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && x.isArray(o[s]) && (o[s] = _i(o[s])), !a);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (r, o) => {
      t(Ei(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ti(e, t, n) {
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
  transitional: dr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = x.isObject(t);
    if (i && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return o && o ? JSON.stringify(mr(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Mi(t, this.formSerializer).toString();
      if ((a = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Se(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Ti(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || on.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && x.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Tt.classes.FormData,
    Blob: Tt.classes.Blob
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
const sn = on, Ri = x.toObjectSet([
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
]), Pi = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Ri[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, An = Symbol("internals");
function Kt(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(de) : String(e);
}
function Oi(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ci = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Li(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ki(e, t) {
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
    function i(a, c, l) {
      const u = Kt(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = x.findKey(o, u);
      (!h || o[h] === void 0 || l === !0 || l === void 0 && o[h] !== !1) && (o[h || c] = de(a));
    }
    const s = (a, c) => x.forEach(a, (l, u) => i(l, u, c));
    return x.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : x.isString(t) && (t = t.trim()) && !Ci(t) ? s(Pi(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Kt(t), t) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Oi(o);
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
        const a = x.findKey(r, s);
        a && (!n || De(r, r[a], a, n)) && (delete r[a], o = !0);
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
        n[s] = de(o), delete n[i];
        return;
      }
      const a = t ? Li(i) : String(i).trim();
      a !== i && delete n[i], n[a] = de(o), r[a] = !0;
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
    const r = (this[An] = this[An] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Kt(s);
      r[a] || (ki(o, s), r[a] = !0);
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
  return x.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function yr(e) {
  return !!(e && e.__CANCEL__);
}
function oe(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(oe, Q, {
  __CANCEL__: !0
});
function Fi(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Q(
    "Request failed with status code " + n.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ni = Tt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, a) {
        const c = [];
        c.push(n + "=" + encodeURIComponent(r)), x.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), x.isString(i) && c.push("path=" + i), x.isString(s) && c.push("domain=" + s), a === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Bi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Di(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pr(e, t) {
  return e && !Bi(t) ? Di(e, t) : t;
}
const Ii = Tt.isStandardBrowserEnv ? (
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
      const a = x.isString(s) ? o(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
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
function ji(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vi(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let h = i, d = 0;
    for (; h !== o; )
      d += n[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const b = u && l - u;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}
function xn(e, t) {
  let n = 0;
  const r = vi(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, c = r(a), l = i <= s;
    n = i;
    const u = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && s && l ? (s - i) / c : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Ui = typeof XMLHttpRequest < "u", qi = Ui && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = Ot.from(e.headers).normalize(), s = e.responseType;
    let a;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    let l;
    x.isFormData(o) && (Tt.isStandardBrowserEnv || Tt.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? x.isString(l = i.getContentType()) && i.setContentType(l.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + g));
    }
    const h = pr(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), fr(h, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function d() {
      if (!u)
        return;
      const y = Ot.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), O = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Fi(function(I) {
        n(I), c();
      }, function(I) {
        r(I), c();
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
      const O = e.transitional || dr;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Q(
        g,
        O.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Tt.isStandardBrowserEnv) {
      const y = Ii(h) && e.xsrfCookieName && Ni.read(e.xsrfCookieName);
      y && i.set(e.xsrfHeaderName, y);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && x.forEach(i.toJSON(), function(g, O) {
      u.setRequestHeader(O, g);
    }), x.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", xn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", xn(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (y) => {
      u && (r(!y || y.type ? new oe(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const b = ji(h);
    if (b && Tt.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, Ye = {
  http: di,
  xhr: qi
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
const Sn = (e) => `- ${e}`, zi = (e) => x.isFunction(e) || e === null || e === !1, wr = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !zi(n) && (r = Ye[(s = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Sn).join(`
`) : " " + Sn(i[0]) : "as no adapter specified";
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
    throw new oe(null, e);
}
function Mn(e) {
  return je(e), e.headers = Ot.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wr.getAdapter(e.adapter || sn.adapter)(e).then(function(r) {
    return je(e), r.data = Ie.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ot.from(r.headers), r;
  }, function(r) {
    return yr(r) || (je(e), r && r.response && (r.response.data = Ie.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ot.from(r.response.headers))), Promise.reject(r);
  });
}
const En = (e) => e instanceof Ot ? e.toJSON() : e;
function Wt(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, h) {
    return x.isPlainObject(l) && x.isPlainObject(u) ? x.merge.call({ caseless: h }, l, u) : x.isPlainObject(u) ? x.merge({}, u) : x.isArray(u) ? u.slice() : u;
  }
  function o(l, u, h) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(l))
        return r(void 0, l, h);
    } else
      return r(l, u, h);
  }
  function i(l, u) {
    if (!x.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, u);
  }
  function a(l, u, h) {
    if (h in t)
      return r(l, u);
    if (h in e)
      return r(void 0, l);
  }
  const c = {
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
    validateStatus: a,
    headers: (l, u) => o(En(l), En(u), !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = c[u] || o, d = h(e[u], t[u], u);
    x.isUndefined(d) && h !== a || (n[u] = d);
  }), n;
}
const gr = "1.6.0", an = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  an[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _n = {};
an.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + gr + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
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
    )), t ? t(i, s, a) : !0;
  };
};
function Hi(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new Q("option " + i + " must be " + c, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: Hi,
  validators: an
}, Nt = We.validators;
class pe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new bn(),
      response: new bn()
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
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, h = 0, d;
    if (!c) {
      const y = [Mn.bind(this), void 0];
      for (y.unshift.apply(y, a), y.push.apply(y, l), d = y.length, u = Promise.resolve(n); h < d; )
        u = u.then(y[h++], y[h++]);
      return u;
    }
    d = a.length;
    let b = n;
    for (h = 0; h < d; ) {
      const y = a[h++], g = a[h++];
      try {
        b = y(b);
      } catch (O) {
        g.call(this, O);
        break;
      }
    }
    try {
      u = Mn.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, d = l.length; h < d; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = pr(t.baseURL, t.url);
    return fr(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function(t) {
  pe.prototype[t] = function(n, r) {
    return this.request(Wt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(Wt(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  pe.prototype[t] = n(), pe.prototype[t + "Form"] = n(!0);
});
const me = pe;
class ln {
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
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      r.reason || (r.reason = new oe(i, s, a), n(r.reason));
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
      token: new ln(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Yi = ln;
function Wi(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function $i(e) {
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
const Ji = $e;
function br(e) {
  const t = new me(e), n = tr(me.prototype.request, t);
  return x.extend(n, me.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return br(Wt(e, o));
  }, n;
}
const ct = br(sn);
ct.Axios = me;
ct.CanceledError = oe;
ct.CancelToken = Yi;
ct.isCancel = yr;
ct.VERSION = gr;
ct.toFormData = Se;
ct.AxiosError = Q;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
  return Promise.all(t);
};
ct.spread = Wi;
ct.isAxiosError = $i;
ct.mergeConfig = Wt;
ct.AxiosHeaders = Ot;
ct.formToJSON = (e) => mr(x.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = wr.getAdapter;
ct.HttpStatusCode = Ji;
ct.default = ct;
const Vi = ct;
function Ar(e) {
  if (e.length === 2)
    return new At(e[0], e[1]);
  if (e.length === 3)
    return new At(e[0], e[1], e[2]);
  if (e.length > 4)
    return new At(e[0], e[1], e[2], ...e.slice(3));
  throw new Error("Error: the length of array is not correct");
}
function xr(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] == null)
      continue;
    let r = Ar(e[n]);
    t.push(r);
  }
  return t;
}
function Xi(e) {
  let t = xr(e);
  return new Ze(t);
}
function Gi(e) {
  return Vi.get(e);
}
function Ki(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(n.geometry.coordinates);
  }), t;
}
function Qi(e) {
  let t = e, n = [];
  for (let r = 0; r < t.length; r++) {
    let o;
    for (let i = 0; i < t[r].length; i++)
      o = t[r][i];
    n.push(o);
  }
  return n;
}
const vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: Ki,
  GeoPolygons2SimpleArr: Qi,
  createMultiPointFromArr: Xi,
  createPointListFromArr: xr,
  cretePointFromArr: Ar,
  readDataFromGeoJSON: Gi
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
  /**
   * 获取指定范围，指定波段的网格数据
   * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGrid(t, n = [0]) {
    let r = t[0], o = t[1], i = t[2], s = t[3], a = [];
    for (let c of n) {
      let l = [];
      for (let u = r; u <= i; u++) {
        let h = [];
        for (let d = o; d <= s; d++)
          h.push(this.data[c][u][d]);
        l.push(h);
      }
      a.push(l);
    }
    return a;
  }
  /**
   * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
   * @param GridMBR - 网格范围 行列号索引表示
   * @param band - 波段号数组
   * @returns - 返回网格数据，格式为：[band][row][col]
   */
  getSubGridObj(t, n = [0]) {
    let r = t[0], o = t[1], i = t[2], s = t[3], a = [];
    for (let l of n) {
      let u = [];
      for (let h = r; h <= i; h++) {
        let d = [];
        for (let b = o; b <= s; b++)
          d.push(this.data[l][h][b]);
        u.push(d);
      }
      a.push(u);
    }
    return new un(t, a);
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], o = t[2], i = t[3], s = this.getGridCoord([n, r]), a = this.getGridCoord([o, i]);
    if (s === null || a === null)
      return null;
    {
      let c = s[0], l = s[1], u = a[0], h = a[1];
      return [c, l, u, h];
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
      let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], a = this.MBR[3], c = Math.floor((r - i) / (a - i) * this.rows), l = Math.floor((n - o) / (s - o) * this.cols);
      return [c, l];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], o = this.MBR[0], i = this.MBR[1], s = this.MBR[2], a = this.MBR[3], c = (r + 0.5) / this.cols * (s - o) + o, l = (n + 0.5) / this.rows * (a - i) + i;
    return [c, l];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], o = n[0][0], i = 0;
    for (let a = 0; a < this.rows; a++)
      for (let c = 0; c < this.cols; c++) {
        let l = n[a][c];
        l > r && (r = l), l < o && (o = l), i += l;
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
      for (let a = 0; a < this.cols; a++)
        r[i][a] < n ? s.push(0) : s.push(1);
      o.push(s);
    }
    return o;
  }
  getCoutourCode(t, n, r) {
    let o = this.binarization(t, n), i = [];
    for (let s = 0; s < this.rows - 1; s++) {
      let a = [];
      for (let c = 0; c < this.cols - 1; c++) {
        let l = 0;
        l += o[s][c] * 8, l += o[s][c + 1] * 4, l += o[s + 1][c + 1] * 2, l += o[s + 1][c] * 1, a.push(l);
      }
      i.push(a);
    }
    if (r) {
      for (let c = 0; c < i.length; c++) {
        let l = i[c];
        l.unshift(l[0]), l.push(l[l.length - 1]);
      }
      let s = i[0], a = i[i.length - 1];
      i.unshift(s), i.push(a);
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
function Zi(e, t, n) {
  let r = e.data[t], o = [];
  for (let i = 0; i < e.rows; i++) {
    let s = [];
    for (let a = 0; a < e.cols; a++)
      r[i][a] < n ? s.push(0) : s.push(1);
    o.push(s);
  }
  return o;
}
function ts(e, t) {
  let n = e.rows * e.cols, r = es(n) + 3;
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
    let o = e[0], i = e[1], s = e[2], a = e[3], c = (o + s) / 2;
    c = Math.floor(c);
    let l = (i + a) / 2;
    l = Math.floor(l);
    let u = [o, l, c, a], h = [c, l, s, a], d = [o, i, c, l], b = [c, i, s, l], y = Zt(u, t + 1, n), g = Zt(h, t + 1, n), O = Zt(d, t + 1, n), T = Zt(b, t + 1, n);
    return r.children.push(y), r.children.push(g), r.children.push(O), r.children.push(T), r;
  }
}
function es(e) {
  let t = 0, n = 1;
  for (; n < e; )
    n *= 4, t++;
  return t;
}
function ns(e) {
  let t = -1 / 0, n = 1 / 0;
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      e[r][o] > t && (t = e[r][o]), e[r][o] < n && (n = e[r][o]);
  for (let r = 0; r < e.length; r++)
    for (let o = 0; o < e[0].length; o++)
      (e[r][o] === t || e[r][o] === n) && (e[r][o] = 0);
}
const Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: un,
  binarization: Zi,
  deMaxMin: ns,
  subdivide2QTree: ts
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, o = this.boundary[3] - n, i = new zt([t, n + o / 2, t + r / 2, n + o], this.capacity), s = new zt([t + r / 2, n + o / 2, t + r, n + o], this.capacity), a = new zt([t, n, t + r / 2, n + o / 2], this.capacity), c = new zt([t + r / 2, n, t + r, n + o / 2], this.capacity);
    this.northWest = i, this.northEast = s, this.southWest = a, this.southEast = c, this.isDivided = !0, this.depth++;
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
    if (!Jn(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      Yn(this.points[r], t) && n.push(this.points[r]);
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
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: zt
}, Symbol.toStringTag, { value: "Module" })), rs = Math.E;
function ve(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function os(e, t) {
  let o = e, i = t;
  o *= 3284157443, i ^= o << 128 | o >> 256 - 128, i *= 1911520717, o ^= i << 128 | i >> 256 - 128, o *= 2048419325;
  const s = o * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(s),
    y: Math.sin(s)
  };
}
function ue(e, t, n, r) {
  const o = os(e, t), i = n - e, s = r - t;
  return i * o.x + s * o.y;
}
function is(e, t) {
  const n = Math.floor(e), r = n + 1, o = Math.floor(t), i = o + 1, s = e - n, a = t - o, c = ue(n, o, e, t), l = ue(r, o, e, t), u = ve(c, l, s), h = ue(n, i, e, t), d = ue(r, i, e, t), b = ve(h, d, s);
  return ve(u, b, a);
}
function ss(e, t) {
  return Math.pow(rs, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function as(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
function ls(e, t, n) {
  const r = new Array(e).fill(0).map(() => new Array(t).fill(0)), o = new Array(n).fill(0).map(() => ({
    x: Math.random() * e,
    y: Math.random() * t
  }));
  for (let i = 0; i < e; i++)
    for (let s = 0; s < t; s++) {
      let a = 1e5;
      for (let c = 0; c < n; c++) {
        const l = Math.sqrt(
          Math.pow(o[c].x - i, 2) + Math.pow(o[c].y - s, 2)
        );
        l < a && (a = l);
      }
      r[i][s] = a;
    }
  return r;
}
function us(e, t, n, r = "horizontal") {
  const o = new Array(e).fill(0).map(() => new Array(t).fill(0)), i = Math.floor(e / n);
  for (let s = 0; s < e; s++)
    for (let a = 0; a < t; a++)
      r === "vertical" ? o[s][a] = Math.floor(s / i) % 2 === 0 ? 1 : 0 : r === "horizontal" ? o[s][a] = Math.floor(a / i) % 2 === 0 ? 1 : 0 : r === "diagonal" ? o[s][a] = Math.floor((s + a) / i) % 2 === 0 ? 1 : 0 : r === "all" && (o[s][a] = Math.floor((s + a) / i) % 2 === 0 ? 1 : 0, o[s][a] += Math.floor(s / i) % 2 === 0 ? 1 : 0, o[s][a] += Math.floor(a / i) % 2 === 0 ? 1 : 0);
  return o;
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: is,
  Sin3D: as,
  dampedSin3D: ss,
  worleyNoise: ls,
  zebraNoise: us
}, Symbol.toStringTag, { value: "Module" }));
var Sr = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e[e.groupStretch = 4] = "groupStretch", e))(Sr || {}), Mr = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(Mr || {});
function we(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function Tn(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function Rn(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function Pn(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function On(e, t) {
  let n = 0.1;
  return e < t.mean - n || e > t.mean + n ? 0 : (e - t.min) / (t.max - t.min);
}
function Er(e, t) {
  switch (e) {
    case 0:
      return t ? (n, r) => 1 - we(n, r) : we;
    case 1:
      return t ? (n, r) => 1 - Tn(n, r) : Tn;
    case 2:
      return t ? (n, r) => 1 - Rn(n, r) : Rn;
    case 3:
      return t ? (n, r) => 1 - Pn(n, r) : Pn;
    case 4:
      return t ? (n, r) => 1 - On(n, r) : On;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function Ee(e, t, n = we) {
  let r = n(t, e), o = Math.floor(r * 255);
  return `rgb(${o},${o},${o})`;
}
function cs(e, t) {
  return (n, r) => Ee(n, r, Er(e, t));
}
const _r = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"], Tr = [
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
function hs(e, t, n, r = _r, o = we) {
  let i = o(t, e), s = 0;
  if (n === void 0)
    s = Math.floor(i * r.length);
  else
    for (let a = 0; a < n.length; a++)
      if (i < n[a]) {
        s = a;
        break;
      }
  return r[s];
}
function fs(e, t, n = _r) {
  return (r, o) => hs(r, o, t, n, Er(e));
}
function Rr(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function ds(e, t = Tr) {
  return t[e];
}
const Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CountourColorList: Tr,
  binaryColorBand: Rr,
  colorListType: Mr,
  pseudoColorBandFactory: fs,
  simpleColorBand: Ee,
  simpleColorBandFactory: cs,
  simplePseudoColorBand: ds,
  stretchType: Sr
}, Symbol.toStringTag, { value: "Module" }));
function ms(e, t, n, r, o = Ee, i) {
  let s = n.w / t[0].length, a = n.h / t.length, c = e.getContext("2d");
  if (c === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let l = 0; l < t.length; l++)
    for (let u = 0; u < t[0].length; u++) {
      let h = t[l][u], d = o(r, h);
      c.fillStyle = d, c.fillRect(n.x + u * s, n.y + l * a, s, a);
    }
  if (i) {
    let [l, u, h, d] = i;
    c.strokeStyle = "red", c.lineWidth = 1, c.strokeRect(n.x + l * s, n.y + u * a, (h - l) * s, (d - u) * a);
  }
}
function ys(e, t, n, r = Rr) {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let a = 0; a < t.length; a++)
    for (let c = 0; c < t[0].length; c++) {
      let l = t[a][c], u = r(l);
      s.fillStyle = u, s.fillRect(n.x + c * o, n.y + a * i, o, i);
    }
}
function ps(e, t, n, r = "white") {
  let o = n.w / t[0].length, i = n.h / t.length, s = e.getContext("2d");
  if (s === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let a = 0; a < t.length; a++)
    for (let c = 0; c < t[0].length; c++) {
      let l = t[a][c];
      ws(l, { x: n.x + c * o, y: n.y + a * i, w: o, h: i }, s, r);
    }
}
function ws(e, t, n, r = "white") {
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
  let a = e.getContext("2d");
  if (a === null)
    throw new Error("无法获取canvas绘图上下文");
  let l = r.getSubGridObj(n.boundary).getBandStatistics(0), u = l.mean;
  s ? (s.max = Math.max(s.max, l.max), s.min = Math.min(s.min, l.min), s.mean = (s.mean + l.mean) / 2) : s = l, i || (i = u);
  let h = o(s, u);
  a.fillStyle = h, a.fillRect(t.x, t.y, t.w, t.h), requestAnimationFrame(() => {
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
function gs(e, t, n, r = { color: "black", width: 4, backgroundColor: "rgba(0,0,0,0)" }, o) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, c) => a + c) / n.length
  }), i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color, i.lineWidth = r.width / 2;
  let s = r.width / 2;
  for (let a = 0; a < n.length; a++) {
    let c = t.x + t.w * a / n.length, l = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    i.beginPath(), i.arc(c, l, s, 0, 2 * Math.PI), i.fill();
  }
  i.strokeStyle = r.color, i.beginPath(), i.moveTo(t.x, t.y + t.h * (1 - (n[0] - o.min) / (o.max - o.min)));
  for (let a = 0; a < n.length; a++) {
    let c = t.x + t.w * a / n.length, l = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    i.lineTo(c, l);
  }
  i.stroke(), i.fillStyle = "green", i.font = "12px serif";
  for (let a = 0; a < n.length; a += 16) {
    let c = t.x + t.w * a / n.length, l = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    i.fillText(n[a].toFixed(2), c, l);
  }
}
function bs(e, t, n, r = { color: "black", width: 4, backgroundColor: "rgba(0,0,0,0)" }, o) {
  let i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  o || (o = {
    max: Math.max(...n),
    min: Math.min(...n),
    mean: n.reduce((a, c) => a + c) / n.length
  }), i.fillStyle = r.backgroundColor, i.fillRect(t.x, t.y, t.w, t.h), i.fillStyle = r.color;
  let s = t.w / n.length;
  for (let a = 0; a < n.length; a++) {
    let c = t.x + s * a, l = t.y + t.h * (1 - (n[a] - o.min) / (o.max - o.min));
    i.fillRect(c, l, s, t.h - l + t.y);
  }
  i.fillStyle = "green", i.font = "12px serif", i.fillText(o.max.toFixed(2), t.x, t.y + 12), i.fillText(o.min.toFixed(2), t.x, t.y + t.h), i.fillText(o.mean.toFixed(2), t.x, t.y + t.h / 2), i.strokeStyle = "green", i.beginPath(), i.moveTo(t.x, t.y + 12), i.lineTo(t.x + t.w, t.y + 12), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h), i.lineTo(t.x + t.w, t.y + t.h), i.stroke(), i.beginPath(), i.moveTo(t.x, t.y + t.h / 2), i.lineTo(t.x + t.w, t.y + t.h / 2), i.stroke();
}
function As(e, t, n, r = { color: "black", font: "12px serif" }) {
  let o = e.getContext("2d");
  if (o === null)
    throw new Error("无法获取canvas绘图上下文");
  o.fillStyle = r.color, o.font = r.font, o.fillText(n, t.x, t.y);
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  binDrawGrid2d: ys,
  drawCountour: ps,
  drawGrid2d: ms,
  drawQTree2d: te,
  drawSample: gs,
  drawSample2: bs,
  drawText: As
}, Symbol.toStringTag, { value: "Module" }));
function xs(e, t, n, r, o = 1, i = 1) {
  let s = new Array(t), a = (r - n) / t;
  for (let c = 0; c < t; c++)
    s[c] = e(2 * Math.PI * o * (n + c * a)) * i;
  return s;
}
function ge(e, t) {
  return {
    real: e.real * t.real - e.imag * t.imag,
    imag: e.real * t.imag + e.imag * t.real
  };
}
function Pr(e, t) {
  return {
    real: e.real + t.real,
    imag: e.imag + t.imag
  };
}
function Or(e, t) {
  return {
    real: e.real - t.real,
    imag: e.imag - t.imag
  };
}
function Cr(e, t) {
  let n = -2 * Math.PI * e / t;
  return { real: Math.cos(n), imag: Math.sin(n) };
}
function Ss(e) {
  return e.imag *= -1, e;
}
function Ms(e, t) {
  let n = [];
  for (let r = 0; r < t; r++)
    n.push({ real: e[r], imag: 0 });
  return n;
}
function Lr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[Es(r, t)];
  return n;
}
function Es(e, t) {
  let n = e.toString(2);
  return n = n.split("").reverse().join(""), n = n + "0".repeat(Math.log2(t) - n.length), parseInt(n, 2);
}
function kr(e) {
  let t = e.length, n = Ms(e, t), o = Lr(n).slice();
  for (let i = 1; i < Math.log2(t) + 1; i++) {
    let s = Math.pow(2, i), a = Cr(1, s);
    for (let c = 0; c < t; c += s) {
      let l = { real: 1, imag: 0 };
      for (let u = 0; u < s / 2; u++) {
        let h = ge(l, o[c + u + s / 2]), d = o[c + u];
        o[c + u] = Pr(d, h), o[c + u + s / 2] = Or(d, h), l = ge(l, a);
      }
    }
  }
  return o;
}
function _s(e) {
  let n = Je(e).map((o) => o.map((i) => Math.sqrt(i.real * i.real + i.imag * i.imag)));
  return Ir(Je(n, "column"));
}
function Fr(e) {
  let t = e.length, r = Lr(e).slice();
  for (let o = 1; o < Math.log2(t) + 1; o++) {
    let i = Math.pow(2, o), s = Cr(-1, i);
    for (let a = 0; a < t; a += i) {
      let c = { real: 1, imag: 0 };
      for (let l = 0; l < i / 2; l++) {
        let u = ge(c, r[a + l + i / 2]), h = r[a + l];
        r[a + l] = Pr(h, u), r[a + l + i / 2] = Or(h, u), c = ge(c, s);
      }
    }
  }
  for (let o = 0; o < t; o++)
    r[o].real /= t, r[o].imag /= t;
  return r;
}
function Cn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Br(e[r]);
  return n;
}
function Nr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function Ts(e, t = "row") {
  return t === "row" ? Ln(e) : _e(Ln($t(e)));
}
function Ln(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Nr(e[r]);
  return n;
}
function Je(e, t = "row") {
  return t === "row" ? kn(e) : $t(kn(_e(e)));
}
function kn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill(0));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = kr(e[o]);
  return r;
}
function Rs(e, t = "row") {
  return t === "row" ? Fn(e) : $t(Fn($t(e)));
}
function Fn(e) {
  let t = e[0].length, n = e.length;
  if (Math.log2(t) % 1 !== 0) {
    let o = Math.pow(2, Math.ceil(Math.log2(t)));
    for (let i = 0; i < n; i++)
      e[i] = e[i].concat(new Array(o - t).fill({ real: 0, imag: 0 }));
  }
  let r = new Array(n);
  for (let o = 0; o < n; o++)
    r[o] = Fr(e[o]);
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
function Br(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].imag;
  return n;
}
function Ps(e, t = "row") {
  return t === "row" ? Cn(e) : _e(Cn($t(e)));
}
function Dr(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = e[r].real;
  return n;
}
function Nn(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = Dr(e[r]);
  return n;
}
function Os(e, t = "row") {
  return t === "row" ? Nn(e) : _e(Nn($t(e)));
}
function Ir(e) {
  let t = e.length, n = new Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = new Array(t);
    for (let o = 0; o < t; o++)
      n[r][o] = e[(r + t / 2) % t][(o + t / 2) % t];
  }
  return n;
}
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FFT: kr,
  FFT2: Je,
  FFTImag: Br,
  FFTImag2: Ps,
  FFTReal: Dr,
  FFTReal2: Os,
  FFTShift: Ir,
  IFFT: Fr,
  IFFT2: Rs,
  IFFTReal: Nr,
  IFFTReal2: Ts,
  conj: Ss,
  fastFFT2: _s,
  sample: xs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ds as CGUtils,
  Hs as Colors,
  Us as Coverage,
  Is as Delaunay,
  Ws as Fourier,
  Ns as Geometry,
  Bs as Measuration,
  vs as Meta,
  zs as Noise,
  qs as QuadTree,
  Fs as Reference,
  Ys as Renderer,
  js as Shell,
  ks as Unit,
  Ls as Utils
};
