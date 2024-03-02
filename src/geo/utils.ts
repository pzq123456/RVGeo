export function isEPSG3857(srsname?: string): boolean {
    // ok cases:
    // EPSG:3857 EPSG:900913 epsg:3857 epsg:900913 EPSG-3857 EPSG-900913 epsg-3857 epsg-900913
    // 900913 3857
    if(!srsname) return false; // null or undefined
    return /^(epsg:|EPSG:)?3857$/.test(srsname)   || 
           /^(epsg:|EPSG:)?900913$/.test(srsname) || 
           /^(epsg-|EPSG-)?3857$/.test(srsname)   || 
           /^(epsg-|EPSG-)?900913$/.test(srsname) || 
           srsname === '900913'                   || 
           srsname === '3857';
}

export function isEPSG4326(srsname?: string): boolean {
    // ok cases:
    // EPSG:4326 epsg:4326 EPSG-4326 epsg-4326 4326
    // WGS84 wgs84
    if(!srsname) return false; // null or undefined
    return /^(epsg:|EPSG:)?4326$/.test(srsname) || 
           /^(epsg-|EPSG-)?4326$/.test(srsname) || 
           srsname === '4326'                   ||
           srsname.toLowerCase() === 'wgs84';
}