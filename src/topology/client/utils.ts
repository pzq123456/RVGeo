export function identity(x : any) : any {
    return x;
}

export function bisect(a : number[], x : number) : number {
    var lo = 0, hi = a.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
}