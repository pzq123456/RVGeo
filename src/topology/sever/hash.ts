type equalfun = (a: any, b: any) => boolean;

export function hashset(size: number, hash: (value: any) => number, equal: equalfun, type = Array, empty = null) {

    var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
        mask = size - 1;

    for (var i = 0; i < size; ++i) {
        store[i] = empty;
    }

    function add(value : any) {
        var index = hash(value) & mask,
            match = store[index],
            collisions = 0;
        while (match != empty) {
        if (equal(match, value)) return true;
        if (++collisions >= size) throw new Error("full hashset");
        match = store[index = (index + 1) & mask];
        }
        store[index] = value;
        return true;
    }

    function has(value : any) {
        var index = hash(value) & mask,
            match = store[index],
            collisions = 0;
        while (match != empty) {
        if (equal(match, value)) return true;
        if (++collisions >= size) break;
        match = store[index = (index + 1) & mask];
        }
        return false;
    }

    function values() {
        var values = [];
        for (var i = 0, n = store.length; i < n; ++i) {
        var match = store[i];
        if (match != empty) values.push(match);
        }
        return values;
    }

    return {
        add: add,
        has: has,
        values: values
    };
}

export function hashmap(size: number, hash: (value: any) => number, equal: equalfun, keyType: any = Array, keyEmpty: any = null, valueType: any = Array) {  
    var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
        valstore = new valueType(size),
        mask = size - 1;
  
    for (var i = 0; i < size; ++i) {
      keystore[i] = keyEmpty;
    }
  
    function set(key: any, value: any) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;
      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index] = value;
        if (++collisions >= size) throw new Error("full hashmap");
        matchKey = keystore[index = (index + 1) & mask];
      }
      keystore[index] = key;
      valstore[index] = value;
      return value;
    }
  
    function maybeSet(key: any, value: any) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;
      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index];
        if (++collisions >= size) throw new Error("full hashmap");
        matchKey = keystore[index = (index + 1) & mask];
      }
      keystore[index] = key;
      valstore[index] = value;
      return value;
    }
  
    function get(key: any, missingValue?: any) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;
      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index];
        if (++collisions >= size) break;
        matchKey = keystore[index = (index + 1) & mask];
      }
      return missingValue;
    }
  
    function keys() {
      var keys = [];
      for (var i = 0, n = keystore.length; i < n; ++i) {
        var matchKey = keystore[i];
        if (matchKey != keyEmpty) keys.push(matchKey);
      }
      return keys;
    }
  
    return {
      set: set,
      maybeSet: maybeSet, // set if unset
      get: get,
      keys: keys
    };
  }
  
export function equalPoint(pointA : number[], pointB : number[]) : boolean {
    return pointA[0] === pointB[0] && pointA[1] === pointB[1];
} 

let buffer = new ArrayBuffer(16),
    floats = new Float64Array(buffer),
    uints = new Uint32Array(buffer);

export function hashPoint(point : [number,number]){
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 0x7fffffff;
}