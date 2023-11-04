var fr = Object.defineProperty;
var dr = (e, t, n) => t in e ? fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => (dr(e, typeof t != "symbol" ? t + "" : t, n), n);
const mt = 11102230246251565e-32, P = 134217729, An = (3 + 8 * mt) * mt;
function ut(e, t, n, r, s) {
  let o, i, a, f, u = t[0], l = r[0], h = 0, m = 0;
  l > u == l > -u ? (o = u, u = t[++h]) : (o = l, l = r[++m]);
  let b = 0;
  if (h < e && m < n)
    for (l > u == l > -u ? (i = u + o, a = o - (i - u), u = t[++h]) : (i = l + o, a = o - (i - l), l = r[++m]), o = i, a !== 0 && (s[b++] = a); h < e && m < n; )
      l > u == l > -u ? (i = o + u, f = i - o, a = o - (i - f) + (u - f), u = t[++h]) : (i = o + l, f = i - o, a = o - (i - f) + (l - f), l = r[++m]), o = i, a !== 0 && (s[b++] = a);
  for (; h < e; )
    i = o + u, f = i - o, a = o - (i - f) + (u - f), u = t[++h], o = i, a !== 0 && (s[b++] = a);
  for (; m < n; )
    i = o + l, f = i - o, a = o - (i - f) + (l - f), l = r[++m], o = i, a !== 0 && (s[b++] = a);
  return (o !== 0 || b === 0) && (s[b++] = o), b;
}
function bt(e, t, n, r, s, o, i, a) {
  return ut(ut(e, t, n, r, i), i, s, o, a);
}
function _(e, t, n, r) {
  let s, o, i, a, f, u, l, h, m, b, p;
  l = P * n, b = l - (l - n), p = n - b;
  let g = t[0];
  s = g * n, l = P * g, h = l - (l - g), m = g - h, i = m * p - (s - h * b - m * b - h * p);
  let O = 0;
  i !== 0 && (r[O++] = i);
  for (let x = 1; x < e; x++)
    g = t[x], a = g * n, l = P * g, h = l - (l - g), m = g - h, f = m * p - (a - h * b - m * b - h * p), o = s + f, u = o - s, i = s - (o - u) + (f - u), i !== 0 && (r[O++] = i), s = a + o, i = o - (s - a), i !== 0 && (r[O++] = i);
  return (s !== 0 || O === 0) && (r[O++] = s), O;
}
function Sn(e, t) {
  let n = t[0];
  for (let r = 1; r < e; r++)
    n += t[r];
  return n;
}
function J(e) {
  return new Float64Array(e);
}
const mr = (3 + 16 * mt) * mt, pr = (2 + 12 * mt) * mt, yr = (9 + 64 * mt) * mt * mt, vt = J(4), rn = J(8), sn = J(12), on = J(16), pt = J(4);
function wr(e, t, n, r, s, o, i) {
  let a, f, u, l, h, m, b, p, g, O, x, j, U, $, tt, nt, it, rt;
  const C = e - s, q = n - s, v = t - o, z = r - o;
  $ = C * z, m = P * C, b = m - (m - C), p = C - b, m = P * z, g = m - (m - z), O = z - g, tt = p * O - ($ - b * g - p * g - b * O), nt = v * q, m = P * v, b = m - (m - v), p = v - b, m = P * q, g = m - (m - q), O = q - g, it = p * O - (nt - b * g - p * g - b * O), x = tt - it, h = tt - x, vt[0] = tt - (x + h) + (h - it), j = $ + x, h = j - $, U = $ - (j - h) + (x - h), x = U - nt, h = U - x, vt[1] = U - (x + h) + (h - nt), rt = j + x, h = rt - j, vt[2] = j - (rt - h) + (x - h), vt[3] = rt;
  let et = Sn(4, vt), c = pr * i;
  if (et >= c || -et >= c || (h = e - C, a = e - (C + h) + (h - s), h = n - q, u = n - (q + h) + (h - s), h = t - v, f = t - (v + h) + (h - o), h = r - z, l = r - (z + h) + (h - o), a === 0 && f === 0 && u === 0 && l === 0) || (c = yr * i + An * Math.abs(et), et += C * l + z * a - (v * u + q * f), et >= c || -et >= c))
    return et;
  $ = a * z, m = P * a, b = m - (m - a), p = a - b, m = P * z, g = m - (m - z), O = z - g, tt = p * O - ($ - b * g - p * g - b * O), nt = f * q, m = P * f, b = m - (m - f), p = f - b, m = P * q, g = m - (m - q), O = q - g, it = p * O - (nt - b * g - p * g - b * O), x = tt - it, h = tt - x, pt[0] = tt - (x + h) + (h - it), j = $ + x, h = j - $, U = $ - (j - h) + (x - h), x = U - nt, h = U - x, pt[1] = U - (x + h) + (h - nt), rt = j + x, h = rt - j, pt[2] = j - (rt - h) + (x - h), pt[3] = rt;
  const d = ut(4, vt, 4, pt, rn);
  $ = C * l, m = P * C, b = m - (m - C), p = C - b, m = P * l, g = m - (m - l), O = l - g, tt = p * O - ($ - b * g - p * g - b * O), nt = v * u, m = P * v, b = m - (m - v), p = v - b, m = P * u, g = m - (m - u), O = u - g, it = p * O - (nt - b * g - p * g - b * O), x = tt - it, h = tt - x, pt[0] = tt - (x + h) + (h - it), j = $ + x, h = j - $, U = $ - (j - h) + (x - h), x = U - nt, h = U - x, pt[1] = U - (x + h) + (h - nt), rt = j + x, h = rt - j, pt[2] = j - (rt - h) + (x - h), pt[3] = rt;
  const y = ut(d, rn, 4, pt, sn);
  $ = a * l, m = P * a, b = m - (m - a), p = a - b, m = P * l, g = m - (m - l), O = l - g, tt = p * O - ($ - b * g - p * g - b * O), nt = f * u, m = P * f, b = m - (m - f), p = f - b, m = P * u, g = m - (m - u), O = u - g, it = p * O - (nt - b * g - p * g - b * O), x = tt - it, h = tt - x, pt[0] = tt - (x + h) + (h - it), j = $ + x, h = j - $, U = $ - (j - h) + (x - h), x = U - nt, h = U - x, pt[1] = U - (x + h) + (h - nt), rt = j + x, h = rt - j, pt[2] = j - (rt - h) + (x - h), pt[3] = rt;
  const A = ut(y, sn, 4, pt, on);
  return on[A - 1];
}
function Kt(e, t, n, r, s, o) {
  const i = (t - o) * (n - s), a = (e - s) * (r - o), f = i - a, u = Math.abs(i + a);
  return Math.abs(f) >= mr * u ? f : -wr(e, t, n, r, s, o, u);
}
const gr = (10 + 96 * mt) * mt, br = (4 + 48 * mt) * mt, Ar = (44 + 576 * mt) * mt * mt, Ct = J(4), Lt = J(4), Bt = J(4), _t = J(4), Mt = J(4), Rt = J(4), yt = J(4), wt = J(4), be = J(8), Ae = J(8), Se = J(8), Ee = J(8), _e = J(8), Me = J(8), ne = J(8), re = J(8), se = J(8), Nt = J(4), It = J(4), jt = J(4), L = J(8), I = J(16), st = J(16), ot = J(16), K = J(32), Dt = J(32), at = J(48), gt = J(64);
let Ht = J(1152), Re = J(1152);
function lt(e, t, n) {
  e = ut(e, Ht, t, n, Re);
  const r = Ht;
  return Ht = Re, Re = r, e;
}
function Sr(e, t, n, r, s, o, i, a, f) {
  let u, l, h, m, b, p, g, O, x, j, U, $, tt, nt, it, rt, C, q, v, z, et, c, d, y, A, E, R, w, M, B, T, D, k, F, N;
  const H = e - i, X = n - i, W = s - i, V = t - a, Y = r - a, G = o - a;
  T = X * G, d = P * X, y = d - (d - X), A = X - y, d = P * G, E = d - (d - G), R = G - E, D = A * R - (T - y * E - A * E - y * R), k = W * Y, d = P * W, y = d - (d - W), A = W - y, d = P * Y, E = d - (d - Y), R = Y - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, Ct[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, Ct[1] = B - (w + c) + (c - k), N = M + w, c = N - M, Ct[2] = M - (N - c) + (w - c), Ct[3] = N, T = W * V, d = P * W, y = d - (d - W), A = W - y, d = P * V, E = d - (d - V), R = V - E, D = A * R - (T - y * E - A * E - y * R), k = H * G, d = P * H, y = d - (d - H), A = H - y, d = P * G, E = d - (d - G), R = G - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, Lt[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, Lt[1] = B - (w + c) + (c - k), N = M + w, c = N - M, Lt[2] = M - (N - c) + (w - c), Lt[3] = N, T = H * Y, d = P * H, y = d - (d - H), A = H - y, d = P * Y, E = d - (d - Y), R = Y - E, D = A * R - (T - y * E - A * E - y * R), k = X * V, d = P * X, y = d - (d - X), A = X - y, d = P * V, E = d - (d - V), R = V - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, Bt[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, Bt[1] = B - (w + c) + (c - k), N = M + w, c = N - M, Bt[2] = M - (N - c) + (w - c), Bt[3] = N, u = ut(
    ut(
      ut(
        _(_(4, Ct, H, L), L, H, I),
        I,
        _(_(4, Ct, V, L), L, V, st),
        st,
        K
      ),
      K,
      ut(
        _(_(4, Lt, X, L), L, X, I),
        I,
        _(_(4, Lt, Y, L), L, Y, st),
        st,
        Dt
      ),
      Dt,
      gt
    ),
    gt,
    ut(
      _(_(4, Bt, W, L), L, W, I),
      I,
      _(_(4, Bt, G, L), L, G, st),
      st,
      K
    ),
    K,
    Ht
  );
  let Pt = Sn(u, Ht), Jt = br * f;
  if (Pt >= Jt || -Pt >= Jt || (c = e - H, l = e - (H + c) + (c - i), c = t - V, b = t - (V + c) + (c - a), c = n - X, h = n - (X + c) + (c - i), c = r - Y, p = r - (Y + c) + (c - a), c = s - W, m = s - (W + c) + (c - i), c = o - G, g = o - (G + c) + (c - a), l === 0 && h === 0 && m === 0 && b === 0 && p === 0 && g === 0) || (Jt = Ar * f + An * Math.abs(Pt), Pt += (H * H + V * V) * (X * g + G * h - (Y * m + W * p)) + 2 * (H * l + V * b) * (X * G - Y * W) + ((X * X + Y * Y) * (W * b + V * m - (G * l + H * g)) + 2 * (X * h + Y * p) * (W * V - G * H)) + ((W * W + G * G) * (H * p + Y * l - (V * h + X * b)) + 2 * (W * m + G * g) * (H * Y - V * X)), Pt >= Jt || -Pt >= Jt))
    return Pt;
  if ((h !== 0 || p !== 0 || m !== 0 || g !== 0) && (T = H * H, d = P * H, y = d - (d - H), A = H - y, D = A * A - (T - y * y - (y + y) * A), k = V * V, d = P * V, y = d - (d - V), A = V - y, F = A * A - (k - y * y - (y + y) * A), w = D + F, c = w - D, _t[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, _t[1] = B - (w - c) + (k - c), N = M + w, c = N - M, _t[2] = M - (N - c) + (w - c), _t[3] = N), (m !== 0 || g !== 0 || l !== 0 || b !== 0) && (T = X * X, d = P * X, y = d - (d - X), A = X - y, D = A * A - (T - y * y - (y + y) * A), k = Y * Y, d = P * Y, y = d - (d - Y), A = Y - y, F = A * A - (k - y * y - (y + y) * A), w = D + F, c = w - D, Mt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, Mt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, Mt[2] = M - (N - c) + (w - c), Mt[3] = N), (l !== 0 || b !== 0 || h !== 0 || p !== 0) && (T = W * W, d = P * W, y = d - (d - W), A = W - y, D = A * A - (T - y * y - (y + y) * A), k = G * G, d = P * G, y = d - (d - G), A = G - y, F = A * A - (k - y * y - (y + y) * A), w = D + F, c = w - D, Rt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, Rt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, Rt[2] = M - (N - c) + (w - c), Rt[3] = N), l !== 0 && (O = _(4, Ct, l, be), u = lt(u, bt(
    _(O, be, 2 * H, I),
    I,
    _(_(4, Rt, l, L), L, Y, st),
    st,
    _(_(4, Mt, l, L), L, -G, ot),
    ot,
    K,
    at
  ), at)), b !== 0 && (x = _(4, Ct, b, Ae), u = lt(u, bt(
    _(x, Ae, 2 * V, I),
    I,
    _(_(4, Mt, b, L), L, W, st),
    st,
    _(_(4, Rt, b, L), L, -X, ot),
    ot,
    K,
    at
  ), at)), h !== 0 && (j = _(4, Lt, h, Se), u = lt(u, bt(
    _(j, Se, 2 * X, I),
    I,
    _(_(4, _t, h, L), L, G, st),
    st,
    _(_(4, Rt, h, L), L, -V, ot),
    ot,
    K,
    at
  ), at)), p !== 0 && (U = _(4, Lt, p, Ee), u = lt(u, bt(
    _(U, Ee, 2 * Y, I),
    I,
    _(_(4, Rt, p, L), L, H, st),
    st,
    _(_(4, _t, p, L), L, -W, ot),
    ot,
    K,
    at
  ), at)), m !== 0 && ($ = _(4, Bt, m, _e), u = lt(u, bt(
    _($, _e, 2 * W, I),
    I,
    _(_(4, Mt, m, L), L, V, st),
    st,
    _(_(4, _t, m, L), L, -Y, ot),
    ot,
    K,
    at
  ), at)), g !== 0 && (tt = _(4, Bt, g, Me), u = lt(u, bt(
    _(tt, Me, 2 * G, I),
    I,
    _(_(4, _t, g, L), L, X, st),
    st,
    _(_(4, Mt, g, L), L, -H, ot),
    ot,
    K,
    at
  ), at)), l !== 0 || b !== 0) {
    if (h !== 0 || p !== 0 || m !== 0 || g !== 0 ? (T = h * G, d = P * h, y = d - (d - h), A = h - y, d = P * G, E = d - (d - G), R = G - E, D = A * R - (T - y * E - A * E - y * R), k = X * g, d = P * X, y = d - (d - X), A = X - y, d = P * g, E = d - (d - g), R = g - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, yt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, yt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, yt[2] = M - (N - c) + (w - c), yt[3] = N, T = m * -Y, d = P * m, y = d - (d - m), A = m - y, d = P * -Y, E = d - (d - -Y), R = -Y - E, D = A * R - (T - y * E - A * E - y * R), k = W * -p, d = P * W, y = d - (d - W), A = W - y, d = P * -p, E = d - (d - -p), R = -p - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, wt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, wt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, wt[2] = M - (N - c) + (w - c), wt[3] = N, it = ut(4, yt, 4, wt, re), T = h * g, d = P * h, y = d - (d - h), A = h - y, d = P * g, E = d - (d - g), R = g - E, D = A * R - (T - y * E - A * E - y * R), k = m * p, d = P * m, y = d - (d - m), A = m - y, d = P * p, E = d - (d - p), R = p - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, It[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, It[1] = B - (w + c) + (c - k), N = M + w, c = N - M, It[2] = M - (N - c) + (w - c), It[3] = N, q = 4) : (re[0] = 0, it = 1, It[0] = 0, q = 1), l !== 0) {
      const ht = _(it, re, l, ot);
      u = lt(u, ut(
        _(O, be, l, I),
        I,
        _(ht, ot, 2 * H, K),
        K,
        at
      ), at);
      const ft = _(q, It, l, L);
      u = lt(u, bt(
        _(ft, L, 2 * H, I),
        I,
        _(ft, L, l, st),
        st,
        _(ht, ot, l, K),
        K,
        Dt,
        gt
      ), gt), p !== 0 && (u = lt(u, _(_(4, Rt, l, L), L, p, I), I)), g !== 0 && (u = lt(u, _(_(4, Mt, -l, L), L, g, I), I));
    }
    if (b !== 0) {
      const ht = _(it, re, b, ot);
      u = lt(u, ut(
        _(x, Ae, b, I),
        I,
        _(ht, ot, 2 * V, K),
        K,
        at
      ), at);
      const ft = _(q, It, b, L);
      u = lt(u, bt(
        _(ft, L, 2 * V, I),
        I,
        _(ft, L, b, st),
        st,
        _(ht, ot, b, K),
        K,
        Dt,
        gt
      ), gt);
    }
  }
  if (h !== 0 || p !== 0) {
    if (m !== 0 || g !== 0 || l !== 0 || b !== 0 ? (T = m * V, d = P * m, y = d - (d - m), A = m - y, d = P * V, E = d - (d - V), R = V - E, D = A * R - (T - y * E - A * E - y * R), k = W * b, d = P * W, y = d - (d - W), A = W - y, d = P * b, E = d - (d - b), R = b - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, yt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, yt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, yt[2] = M - (N - c) + (w - c), yt[3] = N, z = -G, et = -g, T = l * z, d = P * l, y = d - (d - l), A = l - y, d = P * z, E = d - (d - z), R = z - E, D = A * R - (T - y * E - A * E - y * R), k = H * et, d = P * H, y = d - (d - H), A = H - y, d = P * et, E = d - (d - et), R = et - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, wt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, wt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, wt[2] = M - (N - c) + (w - c), wt[3] = N, rt = ut(4, yt, 4, wt, se), T = m * b, d = P * m, y = d - (d - m), A = m - y, d = P * b, E = d - (d - b), R = b - E, D = A * R - (T - y * E - A * E - y * R), k = l * g, d = P * l, y = d - (d - l), A = l - y, d = P * g, E = d - (d - g), R = g - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, jt[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, jt[1] = B - (w + c) + (c - k), N = M + w, c = N - M, jt[2] = M - (N - c) + (w - c), jt[3] = N, v = 4) : (se[0] = 0, rt = 1, jt[0] = 0, v = 1), h !== 0) {
      const ht = _(rt, se, h, ot);
      u = lt(u, ut(
        _(j, Se, h, I),
        I,
        _(ht, ot, 2 * X, K),
        K,
        at
      ), at);
      const ft = _(v, jt, h, L);
      u = lt(u, bt(
        _(ft, L, 2 * X, I),
        I,
        _(ft, L, h, st),
        st,
        _(ht, ot, h, K),
        K,
        Dt,
        gt
      ), gt), g !== 0 && (u = lt(u, _(_(4, _t, h, L), L, g, I), I)), b !== 0 && (u = lt(u, _(_(4, Rt, -h, L), L, b, I), I));
    }
    if (p !== 0) {
      const ht = _(rt, se, p, ot);
      u = lt(u, ut(
        _(U, Ee, p, I),
        I,
        _(ht, ot, 2 * Y, K),
        K,
        at
      ), at);
      const ft = _(v, jt, p, L);
      u = lt(u, bt(
        _(ft, L, 2 * Y, I),
        I,
        _(ft, L, p, st),
        st,
        _(ht, ot, p, K),
        K,
        Dt,
        gt
      ), gt);
    }
  }
  if (m !== 0 || g !== 0) {
    if (l !== 0 || b !== 0 || h !== 0 || p !== 0 ? (T = l * Y, d = P * l, y = d - (d - l), A = l - y, d = P * Y, E = d - (d - Y), R = Y - E, D = A * R - (T - y * E - A * E - y * R), k = H * p, d = P * H, y = d - (d - H), A = H - y, d = P * p, E = d - (d - p), R = p - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, yt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, yt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, yt[2] = M - (N - c) + (w - c), yt[3] = N, z = -V, et = -b, T = h * z, d = P * h, y = d - (d - h), A = h - y, d = P * z, E = d - (d - z), R = z - E, D = A * R - (T - y * E - A * E - y * R), k = X * et, d = P * X, y = d - (d - X), A = X - y, d = P * et, E = d - (d - et), R = et - E, F = A * R - (k - y * E - A * E - y * R), w = D + F, c = w - D, wt[0] = D - (w - c) + (F - c), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B + k, c = w - B, wt[1] = B - (w - c) + (k - c), N = M + w, c = N - M, wt[2] = M - (N - c) + (w - c), wt[3] = N, nt = ut(4, yt, 4, wt, ne), T = l * p, d = P * l, y = d - (d - l), A = l - y, d = P * p, E = d - (d - p), R = p - E, D = A * R - (T - y * E - A * E - y * R), k = h * b, d = P * h, y = d - (d - h), A = h - y, d = P * b, E = d - (d - b), R = b - E, F = A * R - (k - y * E - A * E - y * R), w = D - F, c = D - w, Nt[0] = D - (w + c) + (c - F), M = T + w, c = M - T, B = T - (M - c) + (w - c), w = B - k, c = B - w, Nt[1] = B - (w + c) + (c - k), N = M + w, c = N - M, Nt[2] = M - (N - c) + (w - c), Nt[3] = N, C = 4) : (ne[0] = 0, nt = 1, Nt[0] = 0, C = 1), m !== 0) {
      const ht = _(nt, ne, m, ot);
      u = lt(u, ut(
        _($, _e, m, I),
        I,
        _(ht, ot, 2 * W, K),
        K,
        at
      ), at);
      const ft = _(C, Nt, m, L);
      u = lt(u, bt(
        _(ft, L, 2 * W, I),
        I,
        _(ft, L, m, st),
        st,
        _(ht, ot, m, K),
        K,
        Dt,
        gt
      ), gt), b !== 0 && (u = lt(u, _(_(4, Mt, m, L), L, b, I), I)), p !== 0 && (u = lt(u, _(_(4, _t, -m, L), L, p, I), I));
    }
    if (g !== 0) {
      const ht = _(nt, ne, g, ot);
      u = lt(u, ut(
        _(tt, Me, g, I),
        I,
        _(ht, ot, 2 * G, K),
        K,
        at
      ), at);
      const ft = _(C, Nt, g, L);
      u = lt(u, bt(
        _(ft, L, 2 * G, I),
        I,
        _(ft, L, g, st),
        st,
        _(ht, ot, g, K),
        K,
        Dt,
        gt
      ), gt);
    }
  }
  return Ht[u - 1];
}
function Er(e, t, n, r, s, o, i, a) {
  const f = e - i, u = n - i, l = s - i, h = t - a, m = r - a, b = o - a, p = u * b, g = l * m, O = f * f + h * h, x = l * h, j = f * b, U = u * u + m * m, $ = f * m, tt = u * h, nt = l * l + b * b, it = O * (p - g) + U * (x - j) + nt * ($ - tt), rt = (Math.abs(p) + Math.abs(g)) * O + (Math.abs(x) + Math.abs(j)) * U + (Math.abs($) + Math.abs(tt)) * nt, C = gr * rt;
  return it > C || -it > C ? it : Sr(e, t, n, r, s, o, i, a, rt);
}
function De(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const n = Math.pow(10, t || 0);
  return Math.round(e * n) / n;
}
function En(e) {
  return Math.abs(e) <= 180 ? e : e - Yt(e) * 360;
}
function Yt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function ve(e, t, n) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let r = e[0], s = e[1], o = t[0], i = t[1], a = n[0], f = n[1], u = (o - r) * (f - s) - (i - s) * (a - r);
  return u = Yt(u), u;
}
function Qt(e, t) {
  let n = Array.isArray(e) ? e : e.toXY(), r = Array.isArray(t) ? t : t.toXY(), s = Math.atan2(r[1] - n[1], r[0] - n[0]);
  return s = s * 180 / Math.PI, s < 0 && (s += 360), s;
}
function _r(e, t, n, r = !0) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY();
  let s = e[0], o = e[1], i = t[0], a = t[1], f = n[0], u = n[1], l = Kt(s, o, i, a, f, u);
  return r && (l = -l), l = Yt(l), l;
}
function Mr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], o = e[1], i = t[0], a = t[1], f = n[0], u = n[1], l = r[0], h = r[1], m = Er(s, o, i, a, f, u, l, h);
  return m = Yt(m), m;
}
function Rr(e, t, n, r) {
  e = Array.isArray(e) ? e : e.toXY(), t = Array.isArray(t) ? t : t.toXY(), n = Array.isArray(n) ? n : n.toXY(), r = Array.isArray(r) ? r : r.toXY();
  let s = e[0], o = e[1], i = t[0], a = t[1], f = n[0], u = n[1], l = r[0], h = r[1];
  const m = s - l, b = o - h, p = i - l, g = a - h, O = f - l, x = u - h, j = m * m + b * b, U = p * p + g * g, $ = O * O + x * x;
  let tt = m * (g * $ - U * x) - b * (p * $ - U * O) + j * (p * x - g * O);
  return Yt(tt);
}
function xr(e) {
  let t = [], n = e;
  for (; Array.isArray(n); )
    t.push(n.length), n = n[0];
  return t;
}
function _n(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? t.push(..._n(r)) : t.push(r);
  }
  return t;
}
function Mn(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    Array.isArray(s) ? n.push(Mn(s, t)) : n.push(t[s]);
  }
  return n;
}
function Tr(e, t) {
  return e.forEach((n, r) => {
    e[r] = n.concat(t[r]);
  }), e;
}
function Pr(e, t) {
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
const Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjust_lon: En,
  calculateArrayShape: xr,
  ccw: ve,
  ccwRobust: _r,
  concatEL2DArray: Tr,
  fillIndexArray: Mn,
  flattenArray: _n,
  getAngle: Qt,
  inCircle: Rr,
  inCircleRobust: Mr,
  randomIndexArray: Or,
  round: De,
  sign: Yt,
  subColumnInEL2DArray: Pr
}, Symbol.toStringTag, { value: "Module" })), Rn = {
  a: 6378137,
  // 长半轴
  b: 63710088e-1,
  // 短半轴
  Name: "Normal Sphere ( r= 6371008.8 )"
  // 正球
}, dt = Rn.a, qe = {
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
}, ze = {
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
  const n = qe[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Cr(e, t = "kilometers") {
  const n = qe[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function Xt(e) {
  return e % 360 * Math.PI / 180;
}
function Lr(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function xn(e, t) {
  const n = ze[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e / n;
}
function fe(e, t) {
  const n = ze[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return e * n;
}
function Br(e, t, n) {
  return fe(xn(e, t), n);
}
const $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: He,
  degreesToRadians: Xt,
  earthRadius: dt,
  factors: qe,
  factors2: ze,
  lengthToRadians: Cr,
  metersTo: fe,
  radiansToDegrees: Lr,
  radiansToLength: Xe,
  toMeters: xn,
  unitTounit: Br
}, Symbol.toStringTag, { value: "Module" }));
function St(e, t = "meters", n = 6) {
  const r = 20037508342789244e-9, s = dt, o = Array.isArray(e) ? e : e.to2DArray(), i = En(o[0]);
  let a = Xt(i), f = Xt(o[1]);
  return a = Xe(a, "meters"), f = s * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * f)), a > r && (a = r), a < -r && (a = -r), f > r && (f = r), f < -r && (f = -r), a = De(fe(a, t), n), f = De(fe(f, t), n), [a, f];
}
function Ft(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function Dr(e, t = "meters", n = 6) {
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
function kr(e, t = "meters", n = 6) {
  let r = [], s = St([e[0], e[1]], t, n), o = St([e[2], e[3]], t, n);
  return r = [s[0], s[1], o[0], o[1]], r;
}
function Nr(e, t = "meters", n = 6) {
  let r = [], s = Ft([e[0], e[1]]), o = Ft([e[2], e[3]]);
  return r = [s[0], s[1], o[0], o[1]], r;
}
const Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBR2Plane: kr,
  convertToMercator: St,
  convertToMercators: Dr,
  convertToWgs84: Ft,
  plane2MBR: Nr
}, Symbol.toStringTag, { value: "Module" }));
function Tn(e) {
  return {
    x: (e[0] + e[2]) / 2,
    y: (e[1] + e[3]) / 2,
    w: e[2] - e[0],
    h: e[3] - e[1]
  };
}
function Ir(e) {
  return [
    e.x - e.w / 2,
    e.y - e.h / 2,
    e.x + e.w / 2,
    e.y + e.h / 2
  ];
}
function Pn(e) {
  let t = e[0], n = e[1], r = e[2], s = e[3];
  return [
    [t, n],
    [t, s],
    [r, s],
    [r, n],
    [t, n]
  ];
}
function jr(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o][0], a = e[o][1];
    t = Math.min(t, i), n = Math.min(n, a), r = Math.max(r, i), s = Math.max(s, a);
  }
  return [t, n, r, s];
}
function On(e, t) {
  let n = t[0], r = t[1], s = t[2], o = t[3], i = e[0], a = e[1];
  return i >= n && i <= s && a >= r && a <= o;
}
class Cn {
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
class We extends Cn {
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
      for (let a = 0; a < t.length; a++)
        n += t[a];
      for (let a = 0; a < t.length; a++)
        t[a] /= n;
      let r = 0, s = 0;
      for (let a = 0; a < this.coordinates.length; a++) {
        let f = this.coordinates[a].to2DArray();
        r += f[0] * t[a], s += f[1] * t[a];
      }
      let o = r, i = s;
      return new At(o, i);
    } else {
      let n = 0, r = 0;
      for (let i = 0; i < this.coordinates.length; i++) {
        let a = this.coordinates[i].to2DArray();
        n += a[0], r += a[1];
      }
      let s = n / this.coordinates.length, o = r / this.coordinates.length;
      return new At(s, o);
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
class Ye extends We {
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
      let o = Qt(n, r.toXY()), i = Qt(n, s.toXY());
      return o < i ? -1 : o > i ? 1 : 0;
    });
  }
}
class Ln extends Cn {
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
class Fr extends Ln {
  constructor(t, ...n) {
    super(t, ...n), this.type = "Polygon";
  }
  static isPolygon(t) {
    return t.type === "Polygon";
  }
}
class Ur {
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
    let n = Tn(t), r = Math.abs(n.x - this.x), s = Math.abs(n.y - this.y), o = this.r, i = n.w / 2, a = n.h / 2, f = Math.pow(r - i, 2) + Math.pow(s - a, 2);
    return r > o + i || s > o + a ? !1 : r <= i || s <= a ? !0 : f <= this.rSquared;
  }
}
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: Ur,
  LineString: Ye,
  MultiLineString: Ln,
  MultiPoint: We,
  Point: At,
  Polygon: Fr,
  getPointsMBR: jr,
  mbrToPolygon: Pn,
  mbrToRectangle: Tn,
  pointInMBR: On,
  rectangleToMBR: Ir
}, Symbol.toStringTag, { value: "Module" })), an = Rn.a;
function vr(e, t, n = "kilometers") {
  Array.isArray(e) && (e = [...e]), Array.isArray(t) && (t = [...t]);
  const r = Array.isArray(e) ? e : e.to2DArray(), s = Array.isArray(t) ? t : t.to2DArray();
  r.map((l, h) => {
    r[h] = Xt(l);
  }), s.map((l, h) => {
    s[h] = Xt(l);
  });
  const o = s[1] - r[1], i = s[0] - r[0], a = r[1], f = s[1], u = 2 * Math.asin(
    Math.sqrt(
      Math.pow(Math.sin(o / 2), 2) + Math.pow(Math.sin(i / 2), 2) * Math.cos(a) * Math.cos(f)
    )
  );
  return Xe(u, n);
}
function qr(e, t = "kilometers") {
  let n = Ye.isLineString(e) ? e.toXYArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((o, i) => {
    n[i] = o.toXY();
  })), n = n;
  let r = 0, s = n.length - 1;
  for (let o = 0; o < n.length; o++)
    r += (n[s][0] + n[o][0]) * (n[s][1] - n[o][1]), s = o;
  return r = r * He[t] / 2, Math.abs(r);
}
function zr(e, t = "kilometers") {
  let n = Ye.isLineString(e) ? e.toArray() : e;
  if (n.length < 3)
    return 0;
  At.isPoint(n[0]) && (n = n, n.map((i, a) => {
    n[a] = i.to2DArray();
  })), n = n;
  let r = 0, s = n.length, o = [];
  for (let i = 0; i < s; i++) {
    o.push([]);
    for (let a = 0; a < 2; a++) {
      let f = Xt(n[i][a]);
      o[i].push(f);
    }
  }
  for (let i = 0; i < s; i++) {
    let a = (i + 1) % s, f = (i + 2) % s;
    r += (o[i][0] - o[f][0]) * Math.sin(o[a][1]);
  }
  return r = r * an * an / 2, r = r * He[t], Math.abs(r);
}
const Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlanePolygonArea: qr,
  SpherePolygonArea: zr,
  haversine: vr
}, Symbol.toStringTag, { value: "Module" }));
function ae(e, t) {
  return e[0] * t[1] - t[0] * e[1];
}
function Hr(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ke(e, t, n, r, s = St, o = Ft, i = !1) {
  s && (e = s(e), t = s(t), n = s(n), r = s(r));
  let a = [t[0] - e[0], t[1] - e[1]], f = [r[0] - n[0], r[1] - n[1]], u = ae(a, f);
  if (u === 0)
    return console.log("两条线段平行或共线"), null;
  let l = ae([n[0] - e[0], n[1] - e[1]], f) / u, h = ae([n[0] - e[0], n[1] - e[1]], a) / u;
  return !i && (l < 0 || l > 1 || h < 0 || h > 1) ? (console.log("交点不在两条线段上"), null) : o ? o([e[0] + a[0] * l, e[1] + a[1] * l]) : [e[0] + a[0] * l, e[1] + a[1] * l];
}
function $e(e, t, n = !1) {
  if (n) {
    let r = St(e), s = t[0], o = t[1], i = t[2], a = t[3];
    return [s, o] = St([s, o]), [i, a] = St([i, a]), r[0] < s || r[0] > i || r[1] < o || r[1] > a;
  } else {
    let r = t[0], s = t[1], o = t[2], i = t[3];
    return e[0] < r || e[0] > o || e[1] < s || e[1] > i;
  }
}
function Bn(e, t) {
  return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1]);
}
function Dn(e, t) {
  return kn(e, Pn(t));
}
function kn(e, t) {
  let n = e[e.length - 1], r, s, o, i = t;
  for (let a in e) {
    r = e[a];
    let f = i;
    i = [], s = f[f.length - 1];
    for (let u in f) {
      if (o = f[u], le(o, n, r)) {
        if (!le(s, n, r)) {
          let l = ke(
            s,
            o,
            n,
            r,
            St,
            Ft,
            !0
          );
          i.push(l);
        }
        i.push(o);
      } else if (le(s, n, r)) {
        let l = ke(
          s,
          o,
          n,
          r,
          St,
          Ft,
          !0
        );
        i.push(l);
      }
      s = o;
    }
    n = r;
  }
  return i;
}
function Xr(e, t) {
  let n = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++)
    t[r][1] > e[1] != t[s][1] > e[1] && e[0] < (t[s][0] - t[r][0]) * (e[1] - t[r][1]) / (t[s][1] - t[r][1]) + t[r][0] && (n = !n);
  return n;
}
function Wr(e) {
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    i[0] < t && (t = i[0]), i[0] > r && (r = i[0]), i[1] < n && (n = i[1]), i[1] > s && (s = i[1]);
  }
  return [t, n, r, s];
}
function Yr(e, t) {
  for (let n = 0, r = e.length - 1; n < e.length; r = n++)
    t(e[n], e[r]);
}
function $r(e, t) {
  return (e - 1 + t) % t;
}
function le(e, t, n) {
  return ve(t, n, e) > 0;
}
const Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MBRIntersectMBR: Bn,
  PointInsidePolygon: Xr,
  PointOutsideMBR: $e,
  calculateMBR: Wr,
  cross: ae,
  cutPolygonByMBR: Dn,
  dot: Hr,
  intersection: ke,
  intersectionPolygon: kn,
  iterPolygonEdge: Yr,
  pointInEdge: le,
  prePointInPolygon: $r
}, Symbol.toStringTag, { value: "Module" })), ln = Math.pow(2, -52), oe = new Uint32Array(512);
class Ut {
  static from(t, n = Nn, r = In) {
    const s = t.length, o = new Float64Array(s * 2);
    for (let i = 0; i < s; i++) {
      const a = t[i];
      o[2 * i] = n(a), o[2 * i + 1] = r(a);
    }
    return new Ut(o);
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
    let a = 1 / 0, f = 1 / 0, u = -1 / 0, l = -1 / 0;
    for (let C = 0; C < i; C++) {
      const q = t[2 * C], v = t[2 * C + 1];
      q < a && (a = q), v < f && (f = v), q > u && (u = q), v > l && (l = v), this._ids[C] = C;
    }
    const h = (a + u) / 2, m = (f + l) / 2;
    let b, p, g;
    for (let C = 0, q = 1 / 0; C < i; C++) {
      const v = xe(h, m, t[2 * C], t[2 * C + 1]);
      v < q && (b = C, q = v);
    }
    const O = t[2 * b], x = t[2 * b + 1];
    for (let C = 0, q = 1 / 0; C < i; C++) {
      if (C === b)
        continue;
      const v = xe(O, x, t[2 * C], t[2 * C + 1]);
      v < q && v > 0 && (p = C, q = v);
    }
    let j = t[2 * p], U = t[2 * p + 1], $ = 1 / 0;
    for (let C = 0; C < i; C++) {
      if (C === b || C === p)
        continue;
      const q = Gr(O, x, j, U, t[2 * C], t[2 * C + 1]);
      q < $ && (g = C, $ = q);
    }
    let tt = t[2 * g], nt = t[2 * g + 1];
    if ($ === 1 / 0) {
      for (let v = 0; v < i; v++)
        this._dists[v] = t[2 * v] - t[0] || t[2 * v + 1] - t[1];
      qt(this._ids, this._dists, 0, i - 1);
      const C = new Uint32Array(i);
      let q = 0;
      for (let v = 0, z = -1 / 0; v < i; v++) {
        const et = this._ids[v], c = this._dists[et];
        c > z && (C[q++] = et, z = c);
      }
      this.hull = C.subarray(0, q), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (Kt(O, x, j, U, tt, nt) < 0) {
      const C = p, q = j, v = U;
      p = g, j = tt, U = nt, g = C, tt = q, nt = v;
    }
    const it = this.circumcenter(O, x, j, U, tt, nt);
    this._cx = it.x, this._cy = it.y;
    for (let C = 0; C < i; C++)
      this._dists[C] = xe(t[2 * C], t[2 * C + 1], it.x, it.y);
    qt(this._ids, this._dists, 0, i - 1), this._hullStart = b;
    let rt = 3;
    r[b] = n[g] = p, r[p] = n[b] = g, r[g] = n[p] = b, s[b] = 0, s[p] = 1, s[g] = 2, o.fill(-1), o[this._hashKey(O, x)] = b, o[this._hashKey(j, U)] = p, o[this._hashKey(tt, nt)] = g, this.trianglesLen = 0, this._addTriangle(b, p, g, -1, -1, -1);
    for (let C = 0, q, v; C < this._ids.length; C++) {
      const z = this._ids[C], et = t[2 * z], c = t[2 * z + 1];
      if (C > 0 && Math.abs(et - q) <= ln && Math.abs(c - v) <= ln || (q = et, v = c, z === b || z === p || z === g))
        continue;
      let d = 0;
      for (let w = 0, M = this._hashKey(et, c); w < this._hashSize && (d = o[(M + w) % this._hashSize], !(d !== -1 && d !== r[d])); w++)
        ;
      d = n[d];
      let y = d, A;
      for (; A = r[y], Kt(et, c, t[2 * y], t[2 * y + 1], t[2 * A], t[2 * A + 1]) >= 0; )
        if (y = A, y === d) {
          y = -1;
          break;
        }
      if (y === -1)
        continue;
      let E = this._addTriangle(y, z, r[y], -1, -1, s[y]);
      s[z] = this._legalize(E + 2), s[y] = E, rt++;
      let R = r[y];
      for (; A = r[R], Kt(et, c, t[2 * R], t[2 * R + 1], t[2 * A], t[2 * A + 1]) < 0; )
        E = this._addTriangle(R, z, A, s[z], -1, s[R]), s[z] = this._legalize(E + 2), r[R] = R, rt--, R = A;
      if (y === d)
        for (; A = n[y], Kt(et, c, t[2 * A], t[2 * A + 1], t[2 * y], t[2 * y + 1]) < 0; )
          E = this._addTriangle(A, z, y, -1, s[y], s[A]), this._legalize(E + 2), s[A] = E, r[y] = y, rt--, y = A;
      this._hullStart = n[z] = y, r[y] = n[R] = z, r[z] = R, o[this._hashKey(et, c)] = z, o[this._hashKey(t[2 * y], t[2 * y + 1])] = y;
    }
    this.hull = new Uint32Array(rt);
    for (let C = 0, q = this._hullStart; C < rt; C++)
      this.hull[C] = q, q = r[q];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(t, n) {
    return Math.floor(Jr(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(t) {
    const { _triangles: n, _halfedges: r, coords: s } = this;
    let o = 0, i = 0;
    for (; ; ) {
      const a = r[t], f = t - t % 3;
      if (i = f + (t + 2) % 3, a === -1) {
        if (o === 0)
          break;
        t = oe[--o];
        continue;
      }
      const u = a - a % 3, l = f + (t + 1) % 3, h = u + (a + 2) % 3, m = n[i], b = n[t], p = n[l], g = n[h];
      if (Vr(
        s[2 * m],
        s[2 * m + 1],
        s[2 * b],
        s[2 * b + 1],
        s[2 * p],
        s[2 * p + 1],
        s[2 * g],
        s[2 * g + 1]
      )) {
        n[t] = g, n[a] = m;
        const x = r[h];
        if (x === -1) {
          let U = this._hullStart;
          do {
            if (this._hullTri[U] === h) {
              this._hullTri[U] = t;
              break;
            }
            U = this._hullPrev[U];
          } while (U !== this._hullStart);
        }
        this._link(t, x), this._link(a, r[i]), this._link(i, h);
        const j = u + (a + 1) % 3;
        o < oe.length && (oe[o++] = j);
      } else {
        if (o === 0)
          break;
        t = oe[--o];
      }
    }
    return i;
  }
  _link(t, n) {
    this._halfedges[t] = n, n !== -1 && (this._halfedges[n] = t);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(t, n, r, s, o, i) {
    const a = this.trianglesLen;
    return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = r, this._link(a, s), this._link(a + 1, o), this._link(a + 2, i), this.trianglesLen += 3, a;
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
    const s = n[0] - t[0], o = n[1] - t[1], i = r[0] - t[0], a = r[1] - t[1], f = s * s + o * o, u = i * i + a * a, l = 0.5 / (s * a - o * i), h = (a * f - o * u) * l, m = (s * u - i * f) * l;
    return h * h + m * m;
  }
  circumcenter(t, n, r, s, o, i) {
    const a = r - t, f = s - n, u = o - t, l = i - n, h = a * a + f * f, m = u * u + l * l, b = 0.5 / (a * l - f * u), p = t + (l * h - f * m) * b, g = n + (a * m - u * h) * b;
    return { x: p, y: g };
  }
}
function Jr(e, t) {
  const n = e / (Math.abs(e) + Math.abs(t));
  return (t > 0 ? 3 - n : 1 + n) / 4;
}
function xe(e, t, n, r) {
  const s = e - n, o = t - r;
  return s * s + o * o;
}
function Vr(e, t, n, r, s, o, i, a) {
  const f = e - i, u = t - a, l = n - i, h = r - a, m = s - i, b = o - a, p = f * f + u * u, g = l * l + h * h, O = m * m + b * b;
  return f * (h * O - g * b) - u * (l * O - g * m) + p * (l * b - h * m) < 0;
}
function Gr(e, t, n, r, s, o) {
  const i = n - e, a = r - t, f = s - e, u = o - t, l = i * i + a * a, h = f * f + u * u, m = 0.5 / (i * u - a * f), b = (u * l - a * h) * m, p = (i * h - f * l) * m;
  return b * b + p * p;
}
function qt(e, t, n, r) {
  if (r - n <= 20)
    for (let s = n + 1; s <= r; s++) {
      const o = e[s], i = t[o];
      let a = s - 1;
      for (; a >= n && t[e[a]] > i; )
        e[a + 1] = e[a--];
      e[a + 1] = o;
    }
  else {
    const s = n + r >> 1;
    let o = n + 1, i = r;
    Vt(e, s, o), t[e[n]] > t[e[r]] && Vt(e, n, r), t[e[o]] > t[e[r]] && Vt(e, o, r), t[e[n]] > t[e[o]] && Vt(e, n, o);
    const a = e[o], f = t[a];
    for (; ; ) {
      do
        o++;
      while (t[e[o]] < f);
      do
        i--;
      while (t[e[i]] > f);
      if (i < o)
        break;
      Vt(e, o, i);
    }
    e[n + 1] = e[i], e[i] = a, r - o + 1 >= i - n ? (qt(e, t, o, r), qt(e, t, n, i - 1)) : (qt(e, t, n, i - 1), qt(e, t, o, r));
  }
}
function Vt(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Nn(e) {
  return e[0];
}
function In(e) {
  return e[1];
}
function Kr(e) {
  return [3 * e, 3 * e + 1, 3 * e + 2];
}
function Qr(e, t) {
  return Kr(t).map((n) => e.triangles[n]);
}
function Zr(e) {
  return Math.floor(e / 3);
}
function ts(e, t, n) {
  const r = e[0] * e[0] + e[1] * e[1], s = t[0] * t[0] + t[1] * t[1], o = n[0] * n[0] + n[1] * n[1], i = 2 * (e[0] * (t[1] - n[1]) + t[0] * (n[1] - e[1]) + n[0] * (e[1] - t[1]));
  return [
    1 / i * (r * (t[1] - n[1]) + s * (n[1] - e[1]) + o * (e[1] - t[1])),
    1 / i * (r * (n[0] - t[0]) + s * (e[0] - n[0]) + o * (t[0] - e[0]))
  ];
}
function jn(e, t, n, r = Ft) {
  const s = Qr(t, n).map((i) => e[i]);
  let o = ts(s[0], s[1], s[2]);
  return r && (o = r(o)), o;
}
function Fn(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}
function es(e, t) {
  const n = [];
  let r = t;
  do {
    n.push(r);
    const s = Fn(r);
    r = e.halfedges[s];
  } while (r !== -1 && r !== t);
  return n;
}
function Te(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (let s = 0; s < t.triangles.length; s++) {
    const o = t.triangles[Fn(s)];
    if (!r.has(o)) {
      r.add(o);
      const f = es(t, s).map(Zr).map((u) => jn(e, t, u));
      n(o, f);
    }
  }
}
class ns {
  // points array
  /**
   * - 从点数组构造 Voronoi 图或包装 Delaunator
   * - Construct Voronoi diagram from points array or wrap Delaunator
   * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
   * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
   * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
   */
  // 构造函数重载
  constructor(t, n = Nn, r = In) {
    Z(this, "delaunay");
    // Delaunay triangulation
    Z(this, "points");
    t instanceof Ut ? (this.delaunay = t, this.points = t.getPoints()) : (this.points = t, this.delaunay = Ut.from(t, n, r));
  }
  /**
   * - 获取 Voronoi cell 的顶点数组
   * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
   */
  getVoronoi() {
    const { points: t, delaunay: n } = this, r = /* @__PURE__ */ new Map();
    return Te(t, n, (s, o) => r.set(s, o)), r;
  }
  /**
   * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
   * @param MBR 
   * @returns 
   */
  cutVoronoiByMBR(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return Te(n, r, (o, i) => {
      this.isInsideMBR(i, t) || (i = Dn(i, t)), s.set(o, i);
    }), s;
  }
  /**
   * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
   * @param MBR 
   * @returns 
   */
  robustVoronoi(t) {
    const { points: n, delaunay: r } = this, s = /* @__PURE__ */ new Map();
    return Te(n, r, (o, i) => {
      this.isInsideMBR(i, t) && s.set(o, i);
    }), s;
  }
  isInsideMBR(t, n) {
    const [r, s, o, i] = n;
    for (let a = 0; a < t.length; a++) {
      const [f, u] = t[a];
      if (f < r || f > o || u < s || u > i)
        return !1;
    }
    return !0;
  }
}
function rs(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (let [r, s] of e)
    t.has(r) ? n.set(r, t.get(r)) : n.set(r, s);
  return n;
}
const Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delaunator: Ut,
  Voronoi: ns,
  complateMap: rs,
  triangleCenter: jn
}, Symbol.toStringTag, { value: "Module" }));
function ss(e) {
  const t = e.map((o, i) => [...o.toXY(), i]);
  let n = t[0];
  for (let o = 1; o < t.length; o++)
    t[o][1] < n[1] && (n = t[o]);
  t.sort((o, i) => {
    let a = Qt([n[0], n[1]], [o[0], o[1]]), f = Qt([n[0], n[1]], [i[0], i[1]]);
    if (a < f)
      return -1;
    if (a > f)
      return 1;
    {
      let u = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2), l = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2);
      return u < l ? -1 : 1;
    }
  });
  let r = [];
  r.push(t[0]), r.push(t[1]);
  for (let o = 2; o < t.length; o++) {
    for (; r.length > 1 && ve([r[r.length - 2][0], r[r.length - 2][1]], [r[r.length - 1][0], r[r.length - 1][1]], [t[o][0], t[o][1]]) <= 0; )
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
function os(e, t) {
  let n = e.map((i) => i.toXY());
  return Ut.from(n).getTriangleIndices().filter((i) => {
    let a = [n[i[0]], n[i[1]], n[i[2]]];
    return Ut.circumRadius(a[0], a[1], a[2]) * t < 1;
  });
}
const Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alphaComplex: os,
  convexHull: ss
}, Symbol.toStringTag, { value: "Module" }));
function Un(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: is } = Object.prototype, { getPrototypeOf: Je } = Object, me = ((e) => (t) => {
  const n = is.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (e) => (e = e.toLowerCase(), (t) => me(t) === e), pe = (e) => (t) => typeof t === e, { isArray: $t } = Array, Zt = pe("undefined");
function as(e) {
  return e !== null && !Zt(e) && e.constructor !== null && !Zt(e.constructor) && Et(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vn = Tt("ArrayBuffer");
function ls(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vn(e.buffer), t;
}
const us = pe("string"), Et = pe("function"), qn = pe("number"), ye = (e) => e !== null && typeof e == "object", cs = (e) => e === !0 || e === !1, ue = (e) => {
  if (me(e) !== "object")
    return !1;
  const t = Je(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, hs = Tt("Date"), fs = Tt("File"), ds = Tt("Blob"), ms = Tt("FileList"), ps = (e) => ye(e) && Et(e.pipe), ys = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Et(e.append) && ((t = me(e)) === "formdata" || // detect form-data instance
  t === "object" && Et(e.toString) && e.toString() === "[object FormData]"));
}, ws = Tt("URLSearchParams"), gs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), $t(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
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
const Hn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Xn = (e) => !Zt(e) && e !== Hn;
function Ne() {
  const { caseless: e } = Xn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && zn(t, s) || s;
    ue(t[o]) && ue(r) ? t[o] = Ne(t[o], r) : ue(r) ? t[o] = Ne({}, r) : $t(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && te(arguments[r], n);
  return t;
}
const bs = (e, t, n, { allOwnKeys: r } = {}) => (te(t, (s, o) => {
  n && Et(s) ? e[o] = Un(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), As = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ss = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Es = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Je(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, _s = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ms = (e) => {
  if (!e)
    return null;
  if ($t(e))
    return e;
  let t = e.length;
  if (!qn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Rs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Je(Uint8Array)), xs = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ts = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ps = Tt("HTMLFormElement"), Os = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), un = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Cs = Tt("RegExp"), Wn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  te(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ls = (e) => {
  Wn(e, (t, n) => {
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
}, Bs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return $t(e) ? r(e) : r(String(e).split(t)), n;
}, Ds = () => {
}, ks = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Pe = "abcdefghijklmnopqrstuvwxyz", cn = "0123456789", Yn = {
  DIGIT: cn,
  ALPHA: Pe,
  ALPHA_DIGIT: Pe + Pe.toUpperCase() + cn
}, Ns = (e = 16, t = Yn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Is(e) {
  return !!(e && Et(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const js = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ye(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = $t(r) ? [] : {};
        return te(r, (i, a) => {
          const f = n(i, s + 1);
          !Zt(f) && (o[a] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Fs = Tt("AsyncFunction"), Us = (e) => e && (ye(e) || Et(e)) && Et(e.then) && Et(e.catch), S = {
  isArray: $t,
  isArrayBuffer: vn,
  isBuffer: as,
  isFormData: ys,
  isArrayBufferView: ls,
  isString: us,
  isNumber: qn,
  isBoolean: cs,
  isObject: ye,
  isPlainObject: ue,
  isUndefined: Zt,
  isDate: hs,
  isFile: fs,
  isBlob: ds,
  isRegExp: Cs,
  isFunction: Et,
  isStream: ps,
  isURLSearchParams: ws,
  isTypedArray: Rs,
  isFileList: ms,
  forEach: te,
  merge: Ne,
  extend: bs,
  trim: gs,
  stripBOM: As,
  inherits: Ss,
  toFlatObject: Es,
  kindOf: me,
  kindOfTest: Tt,
  endsWith: _s,
  toArray: Ms,
  forEachEntry: xs,
  matchAll: Ts,
  isHTMLForm: Ps,
  hasOwnProperty: un,
  hasOwnProp: un,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wn,
  freezeMethods: Ls,
  toObjectSet: Bs,
  toCamelCase: Os,
  noop: Ds,
  toFiniteNumber: ks,
  findKey: zn,
  global: Hn,
  isContextDefined: Xn,
  ALPHABET: Yn,
  generateString: Ns,
  isSpecCompliantForm: Is,
  toJSONObject: js,
  isAsyncFn: Fs,
  isThenable: Us
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
Q.from = (e, t, n, r, s, o) => {
  const i = Object.create($n);
  return S.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const vs = null;
function Ie(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Vn(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hn(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Vn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function qs(e) {
  return S.isArray(e) && !e.some(Ie);
}
const zs = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function we(e, t, n) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = S.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, O) {
    return !S.isUndefined(O[g]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null)
      return "";
    if (S.isDate(p))
      return p.toISOString();
    if (!f && S.isBlob(p))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(p) || S.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, g, O) {
    let x = p;
    if (p && !O && typeof p == "object") {
      if (S.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (S.isArray(p) && qs(p) || (S.isFileList(p) || S.endsWith(g, "[]")) && (x = S.toArray(p)))
        return g = Vn(g), x.forEach(function(U, $) {
          !(S.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? hn([g], $, o) : i === null ? g : g + "[]",
            u(U)
          );
        }), !1;
    }
    return Ie(p) ? !0 : (t.append(hn(O, g, o), u(p)), !1);
  }
  const h = [], m = Object.assign(zs, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Ie
  });
  function b(p, g) {
    if (!S.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(p), S.forEach(p, function(x, j) {
        (!(S.isUndefined(x) || x === null) && s.call(
          t,
          x,
          S.isString(j) ? j.trim() : j,
          g,
          m
        )) === !0 && b(x, g ? g.concat(j) : [j]);
      }), h.pop();
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
function Ve(e, t) {
  this._pairs = [], e && we(e, this, t);
}
const Gn = Ve.prototype;
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
function Hs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Kn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Hs, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = S.isURLSearchParams(t) ? t.toString() : new Ve(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Xs {
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
const dn = Xs, Qn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ws = typeof URLSearchParams < "u" ? URLSearchParams : Ve, Ys = typeof FormData < "u" ? FormData : null, $s = typeof Blob < "u" ? Blob : null, Js = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Vs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ws,
    FormData: Ys,
    Blob: $s
  },
  isStandardBrowserEnv: Js,
  isStandardBrowserWebWorkerEnv: Vs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Gs(e, t) {
  return we(e, new xt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return xt.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ks(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Qs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Zn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const a = Number.isFinite(+i), f = o >= n.length;
    return i = !i && S.isArray(s) ? s.length : i, f ? (S.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !S.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && S.isArray(s[i]) && (s[i] = Qs(s[i])), !a);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return S.forEachEntry(e, (r, s) => {
      t(Ks(r), s, n, 0);
    }), n;
  }
  return null;
}
function Zs(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ge = {
  transitional: Qn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = S.isObject(t);
    if (o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return s && s ? JSON.stringify(Zn(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Gs(t, this.formSerializer).toString();
      if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return we(
          a ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Zs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ge.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && S.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
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
  Ge.headers[e] = {};
});
const Ke = Ge, to = S.toObjectSet([
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
]), eo = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && to[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, mn = Symbol("internals");
function Gt(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(ce) : String(e);
}
function no(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ro = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oe(e, t, n, r, s) {
  if (S.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!S.isString(t)) {
    if (S.isString(r))
      return t.indexOf(r) !== -1;
    if (S.isRegExp(r))
      return r.test(t);
  }
}
function so(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function oo(e, t) {
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
class ge {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, f, u) {
      const l = Gt(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = S.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || f] = ce(a));
    }
    const i = (a, f) => S.forEach(a, (u, l) => o(u, l, f));
    return S.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : S.isString(t) && (t = t.trim()) && !ro(t) ? i(eo(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Gt(t), t) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return no(s);
        if (S.isFunction(n))
          return n.call(this, s, r);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Gt(t), t) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Oe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Gt(i), i) {
        const a = S.findKey(r, i);
        a && (!n || Oe(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Oe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return S.forEach(this, (s, o) => {
      const i = S.findKey(r, o);
      if (i) {
        n[i] = ce(s), delete n[o];
        return;
      }
      const a = t ? so(o) : String(o).trim();
      a !== o && delete n[o], n[a] = ce(s), r[a] = !0;
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
    const r = (this[mn] = this[mn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Gt(i);
      r[a] || (oo(s, i), r[a] = !0);
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(ge.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
S.freezeMethods(ge);
const Ot = ge;
function Ce(e, t) {
  const n = this || Ke, r = t || n, s = Ot.from(r.headers);
  let o = r.data;
  return S.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function tr(e) {
  return !!(e && e.__CANCEL__);
}
function ee(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
S.inherits(ee, Q, {
  __CANCEL__: !0
});
function io(e, t, n) {
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
      write: function(n, r, s, o, i, a) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), S.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), S.isString(o) && f.push("path=" + o), S.isString(i) && f.push("domain=" + i), a === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function lo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uo(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function er(e, t) {
  return e && !lo(t) ? uo(e, t) : t;
}
const co = xt.isStandardBrowserEnv ? (
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
      const a = S.isString(i) ? s(i) : i;
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
function ho(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fo(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let h = o, m = 0;
    for (; h !== s; )
      m += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const b = l && u - l;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function pn(e, t) {
  let n = 0;
  const r = fo(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, a = o - n, f = r(a), u = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: f || void 0,
      estimated: f && i && u ? (i - o) / f : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const mo = typeof XMLHttpRequest < "u", po = mo && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = Ot.from(e.headers).normalize(), i = e.responseType;
    let a;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    let u;
    S.isFormData(s) && (xt.isStandardBrowserEnv || xt.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? S.isString(u = o.getContentType()) && o.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + g));
    }
    const h = er(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Kn(h, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function m() {
      if (!l)
        return;
      const p = Ot.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), O = {
        data: !i || i === "text" || i === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: p,
        config: e,
        request: l
      };
      io(function(j) {
        n(j), f();
      }, function(j) {
        r(j), f();
      }, O), l = null;
    }
    if ("onloadend" in l ? l.onloadend = m : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, l.onabort = function() {
      l && (r(new Q("Request aborted", Q.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || Qn;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Q(
        g,
        O.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        l
      )), l = null;
    }, xt.isStandardBrowserEnv) {
      const p = co(h) && e.xsrfCookieName && ao.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in l && S.forEach(o.toJSON(), function(g, O) {
      l.setRequestHeader(O, g);
    }), S.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), i && i !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", pn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", pn(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (p) => {
      l && (r(!p || p.type ? new ee(null, e, l) : p), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const b = ho(h);
    if (b && xt.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, je = {
  http: vs,
  xhr: po
};
S.forEach(je, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yn = (e) => `- ${e}`, yo = (e) => S.isFunction(e) || e === null || e === !1, nr = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !yo(n) && (r = je[(i = String(n)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, f]) => `adapter ${a} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(yn).join(`
`) : " " + yn(o[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: je
};
function Le(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ee(null, e);
}
function wn(e) {
  return Le(e), e.headers = Ot.from(e.headers), e.data = Ce.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nr.getAdapter(e.adapter || Ke.adapter)(e).then(function(r) {
    return Le(e), r.data = Ce.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ot.from(r.headers), r;
  }, function(r) {
    return tr(r) || (Le(e), r && r.response && (r.response.data = Ce.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ot.from(r.response.headers))), Promise.reject(r);
  });
}
const gn = (e) => e instanceof Ot ? e.toJSON() : e;
function Wt(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h) {
    return S.isPlainObject(u) && S.isPlainObject(l) ? S.merge.call({ caseless: h }, u, l) : S.isPlainObject(l) ? S.merge({}, l) : S.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h) {
    if (S.isUndefined(l)) {
      if (!S.isUndefined(u))
        return r(void 0, u, h);
    } else
      return r(u, l, h);
  }
  function o(u, l) {
    if (!S.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (S.isUndefined(l)) {
      if (!S.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, l);
  }
  function a(u, l, h) {
    if (h in t)
      return r(u, l);
    if (h in e)
      return r(void 0, u);
  }
  const f = {
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
    validateStatus: a,
    headers: (u, l) => s(gn(u), gn(l), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const h = f[l] || s, m = h(e[l], t[l], l);
    S.isUndefined(m) && h !== a || (n[l] = m);
  }), n;
}
const rr = "1.6.0", Qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Qe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bn = {};
Qe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + rr + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new Q(
        s(i, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return n && !bn[i] && (bn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function wo(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], f = a === void 0 || i(a, o, e);
      if (f !== !0)
        throw new Q("option " + o + " must be " + f, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Q("Unknown option " + o, Q.ERR_BAD_OPTION);
  }
}
const Fe = {
  assertOptions: wo,
  validators: Qe
}, kt = Fe.validators;
class de {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new dn(),
      response: new dn()
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
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Fe.assertOptions(r, {
      silentJSONParsing: kt.transitional(kt.boolean),
      forcedJSONParsing: kt.transitional(kt.boolean),
      clarifyTimeoutError: kt.transitional(kt.boolean)
    }, !1), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Fe.assertOptions(s, {
      encode: kt.function,
      serialize: kt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && S.merge(
      o.common,
      o[n.method]
    );
    o && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = Ot.concat(i, o);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (f = f && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let l, h = 0, m;
    if (!f) {
      const p = [wn.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, u), m = p.length, l = Promise.resolve(n); h < m; )
        l = l.then(p[h++], p[h++]);
      return l;
    }
    m = a.length;
    let b = n;
    for (h = 0; h < m; ) {
      const p = a[h++], g = a[h++];
      try {
        b = p(b);
      } catch (O) {
        g.call(this, O);
        break;
      }
    }
    try {
      l = wn.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, m = u.length; h < m; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = er(t.baseURL, t.url);
    return Kn(n, t.params, t.paramsSerializer);
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
    return function(o, i, a) {
      return this.request(Wt(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  de.prototype[t] = n(), de.prototype[t + "Form"] = n(!0);
});
const he = de;
class Ze {
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
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new ee(o, i, a), n(r.reason));
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
const go = Ze;
function bo(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ao(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Ue = {
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
Object.entries(Ue).forEach(([e, t]) => {
  Ue[t] = e;
});
const So = Ue;
function sr(e) {
  const t = new he(e), n = Un(he.prototype.request, t);
  return S.extend(n, he.prototype, t, { allOwnKeys: !0 }), S.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return sr(Wt(e, s));
  }, n;
}
const ct = sr(Ke);
ct.Axios = he;
ct.CanceledError = ee;
ct.CancelToken = go;
ct.isCancel = tr;
ct.VERSION = rr;
ct.toFormData = we;
ct.AxiosError = Q;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
  return Promise.all(t);
};
ct.spread = bo;
ct.isAxiosError = Ao;
ct.mergeConfig = Wt;
ct.AxiosHeaders = Ot;
ct.formToJSON = (e) => Zn(S.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = nr.getAdapter;
ct.HttpStatusCode = So;
ct.default = ct;
const Eo = ct;
function or(e) {
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
    let r = or(e[n]);
    t.push(r);
  }
  return t;
}
function _o(e) {
  let t = ir(e);
  return new We(t);
}
function Mo(e) {
  return Eo.get(e);
}
function Ro(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(n.geometry.coordinates);
  }), t;
}
function xo(e) {
  let t = e, n = [];
  for (let r = 0; r < t.length; r++) {
    let s;
    for (let o = 0; o < t[r].length; o++)
      s = t[r][o];
    n.push(s);
  }
  return n;
}
const ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GeoFeatures2Arr: Ro,
  GeoPolygons2SimpleArr: xo,
  createMultiPointFromArr: _o,
  createPointListFromArr: ir,
  cretePointFromArr: or,
  readDataFromGeoJSON: Mo
}, Symbol.toStringTag, { value: "Module" }));
class tn {
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
    let r = t[0], s = t[1], o = t[2], i = t[3], a = [];
    for (let f of n) {
      let u = [];
      for (let l = r; l <= o; l++) {
        let h = [];
        for (let m = s; m <= i; m++)
          h.push(this.data[f][l][m]);
        u.push(h);
      }
      a.push(u);
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
    let r = t[0], s = t[1], o = t[2], i = t[3], a = [];
    for (let u of n) {
      let l = [];
      for (let h = r; h <= o; h++) {
        let m = [];
        for (let b = s; b <= i; b++)
          m.push(this.data[u][h][b]);
        l.push(m);
      }
      a.push(l);
    }
    return new tn(t, a);
  }
  /**
   * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
   * - 若外部坐标不全部在网格范围内，则返回 null
   * @param MBR - 网格行列号范围
   */
  ConvertToGridMBR(t) {
    let n = t[0], r = t[1], s = t[2], o = t[3], i = this.getGridCoord([n, r]), a = this.getGridCoord([s, o]);
    if (i === null || a === null)
      return null;
    {
      let f = i[0], u = i[1], l = a[0], h = a[1];
      return [f, u, l, h];
    }
  }
  /**
   * 计算输入点的网格坐标（整数行列号坐标）
   * @param Point - 输入点坐标，格式为：[lon, lat]
   * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
   */
  getGridCoord(t) {
    if ($e(t, this.MBR))
      return null;
    {
      let n = t[0], r = t[1], s = this.MBR[0], o = this.MBR[1], i = this.MBR[2], a = this.MBR[3], f = Math.floor((r - o) / (a - o) * this.rows), u = Math.floor((n - s) / (i - s) * this.cols);
      return [f, u];
    }
  }
  /**
   * 由行列号反算经纬度坐标（栅格中心点）
   * @param GridCoord - 网格坐标，格式为：[row, col]
   * @returns - 返回经纬度坐标，格式为：[lon, lat]
   */
  getCoordByGridCoord(t) {
    let n = t[0], r = t[1], s = this.MBR[0], o = this.MBR[1], i = this.MBR[2], a = this.MBR[3], f = (r + 0.5) / this.cols * (i - s) + s, u = (n + 0.5) / this.rows * (a - o) + o;
    return [f, u];
  }
  /**
   * 获取指定波段的最大值、最小值、平均值
   * @param band - 波段号
   */
  getBandStatistics(t) {
    let n = this.data[t], r = n[0][0], s = n[0][0], o = 0;
    for (let a = 0; a < this.rows; a++)
      for (let f = 0; f < this.cols; f++) {
        let u = n[a][f];
        u > r && (r = u), u < s && (s = u), o += u;
      }
    let i = o / (this.rows * this.cols);
    return {
      max: r,
      min: s,
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
    let r = this.data[t], s = [];
    for (let o = 0; o < this.rows; o++) {
      let i = [];
      for (let a = 0; a < this.cols; a++)
        r[o][a] < n ? i.push(0) : i.push(1);
      s.push(i);
    }
    return s;
  }
  getCoutourCode(t, n, r) {
    let s = this.binarization(t, n), o = [];
    for (let i = 0; i < this.rows - 1; i++) {
      let a = [];
      for (let f = 0; f < this.cols - 1; f++) {
        let u = 0;
        u += s[i][f] * 8, u += s[i][f + 1] * 4, u += s[i + 1][f + 1] * 2, u += s[i + 1][f] * 1, a.push(u);
      }
      o.push(a);
    }
    if (r) {
      for (let f = 0; f < o.length; f++) {
        let u = o[f];
        u.unshift(u[0]), u.push(u[u.length - 1]);
      }
      let i = o[0], a = o[o.length - 1];
      o.unshift(i), o.push(a);
    }
    return o;
  }
}
function To(e, t, n) {
  let r = e.data[t], s = [];
  for (let o = 0; o < e.rows; o++) {
    let i = [];
    for (let a = 0; a < e.cols; a++)
      r[o][a] < n ? i.push(0) : i.push(1);
    s.push(i);
  }
  return s;
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Grid: tn,
  binarization: To
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
    return $e(t, this.boundary) ? !1 : this.points.length < this.capacity && this.depth < this.maxDepth ? (this.points.push(t), !0) : (this.isDivided || this.subdivide(), this.northEast.insert(t), this.northWest.insert(t), this.southEast.insert(t), this.southWest.insert(t), !0);
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
    let t = this.boundary[0], n = this.boundary[1], r = this.boundary[2] - t, s = this.boundary[3] - n, o = new zt([t, n + s / 2, t + r / 2, n + s], this.capacity), i = new zt([t + r / 2, n + s / 2, t + r, n + s], this.capacity), a = new zt([t, n, t + r / 2, n + s / 2], this.capacity), f = new zt([t + r / 2, n, t + r, n + s / 2], this.capacity);
    this.northWest = o, this.northEast = i, this.southWest = a, this.southEast = f, this.isDivided = !0, this.depth++;
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
    if (!Bn(this.boundary, t))
      return n;
    for (let r = 0; r < this.points.length; r++)
      On(this.points[r], t) && n.push(this.points[r]);
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
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QuadTree: zt
}, Symbol.toStringTag, { value: "Module" })), Po = Math.E;
function Be(e, t, n) {
  return (t - e) * (3 - n * 2) * n * n + e;
}
function Oo(e, t) {
  let s = e, o = t;
  s *= 3284157443, o ^= s << 128 | s >> 256 - 128, o *= 1911520717, s ^= o << 128 | o >> 256 - 128, s *= 2048419325;
  const i = s * (3.14159265 / ~(-1 >>> 1));
  return {
    x: Math.cos(i),
    y: Math.sin(i)
  };
}
function ie(e, t, n, r) {
  const s = Oo(e, t), o = n - e, i = r - t;
  return o * s.x + i * s.y;
}
function Co(e, t) {
  const n = Math.floor(e), r = n + 1, s = Math.floor(t), o = s + 1, i = e - n, a = t - s, f = ie(n, s, e, t), u = ie(r, s, e, t), l = Be(f, u, i), h = ie(n, o, e, t), m = ie(r, o, e, t), b = Be(h, m, i);
  return Be(l, b, a);
}
function Lo(e, t) {
  return Math.pow(Po, -Math.pow(Math.sqrt(e * e + t * t), 1 / 2)) * Math.sin(Math.sqrt(e * e + t * t));
}
function Bo(e, t) {
  return Math.sin(Math.sqrt(e * e + t * t));
}
const ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Perlin: Co,
  Sin3D: Bo,
  dampedSin3D: Lo
}, Symbol.toStringTag, { value: "Module" }));
var ar = /* @__PURE__ */ ((e) => (e[e.linear = 0] = "linear", e[e.square = 1] = "square", e[e.log = 2] = "log", e[e.power = 3] = "power", e))(ar || {}), lr = /* @__PURE__ */ ((e) => (e[e.default = 0] = "default", e))(lr || {});
function en(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function Do(e, t) {
  return Math.sqrt((e - t.min) / (t.max - t.min));
}
function ko(e, t) {
  return Math.log((e - t.min) / (t.max - t.min) + 1);
}
function No(e, t) {
  return Math.pow((e - t.min) / (t.max - t.min), 2);
}
function ur(e) {
  switch (e) {
    case 0:
      return en;
    case 1:
      return Do;
    case 2:
      return ko;
    case 3:
      return No;
    default:
      throw new Error("未知的拉伸类型");
  }
}
function nn(e, t, n = en) {
  let r = n(t, e), s = Math.floor(r * 255);
  return `rgb(${s},${s},${s})`;
}
function Io(e) {
  return (t, n) => nn(t, n, ur(e));
}
const cr = ["#163544", "#495a45", "#767d58", "#76a477", "#d7bd7f", "#d7221f"], jo = [
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
function Fo(e, t, n, r = cr, s = en) {
  let o = s(t, e), i = 0;
  if (n === void 0)
    i = Math.floor(o * r.length);
  else
    for (let a = 0; a < n.length; a++)
      if (o < n[a]) {
        i = a;
        break;
      }
  return r[i];
}
function Uo(e, t, n = cr) {
  return (r, s) => Fo(r, s, t, n, ur(e));
}
function hr(e, t = ["#000000", "#ffffff"]) {
  return e === 0 ? t[0] : t[1];
}
function vo(e, t = jo) {
  return t[e];
}
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  binaryColorBand: hr,
  colorListType: lr,
  pseudoColorBandFactory: Uo,
  simpleColorBand: nn,
  simpleColorBandFactory: Io,
  simplePseudoColorBand: vo,
  stretchType: ar
}, Symbol.toStringTag, { value: "Module" }));
function qo(e, t, n, r, s = nn, o) {
  let i = n.w / t[0].length, a = n.h / t.length, f = e.getContext("2d");
  if (f === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let u = 0; u < t.length; u++)
    for (let l = 0; l < t[0].length; l++) {
      let h = t[u][l], m = s(r, h);
      f.fillStyle = m, f.fillRect(n.x + l * i, n.y + u * a, i, a);
    }
  if (o) {
    let [u, l, h, m] = o;
    f.strokeStyle = "red", f.lineWidth = 1, f.strokeRect(n.x + u * i, n.y + l * a, (h - u) * i, (m - l) * a);
  }
}
function zo(e, t, n, r = hr) {
  let s = n.w / t[0].length, o = n.h / t.length, i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let a = 0; a < t.length; a++)
    for (let f = 0; f < t[0].length; f++) {
      let u = t[a][f], l = r(u);
      i.fillStyle = l, i.fillRect(n.x + f * s, n.y + a * o, s, o);
    }
}
function Ho(e, t, n, r = "white") {
  let s = n.w / t[0].length, o = n.h / t.length, i = e.getContext("2d");
  if (i === null)
    throw new Error("无法获取canvas绘图上下文");
  for (let a = 0; a < t.length; a++)
    for (let f = 0; f < t[0].length; f++) {
      let u = t[a][f];
      Xo(u, { x: n.x + f * s, y: n.y + a * o, w: s, h: o }, i, r);
    }
}
function Xo(e, t, n, r = "white") {
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
const oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  binDrawGrid2d: zo,
  drawCountour: Ho,
  drawGrid2d: qo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ko as CGUtils,
  si as Colors,
  ei as Coverage,
  Qo as Delaunay,
  Vo as Geometry,
  Go as Measuration,
  ti as Meta,
  ri as Noise,
  ni as QuadTree,
  Jo as Reference,
  oi as Renderer,
  Zo as Shell,
  $o as Unit,
  Yo as Utils
};
