// Levenshtein Distance implementation in TypeScript Recursive & Dynamic Programming
export function lev(
    a: string,
    b: string
){
    if(a.length === 0) return a.length;
    if(b.length === 0) return b.length;

    if(a[0] == b[0]) lev(a.slice(1),b.slice(1));
    
    let lev1 = lev(a.slice(1),b) + 1;
    let lev2 = lev(a,b.slice(1)) + 1;
    let lev3 = lev(a.slice(1),b.slice(1)) + 1;

    return Math.min(lev1,lev2,lev3);
}

// test
// console.log(lev("kitten","sitting")); // 3
// console.log(lev("kitten","kitten")); // 0