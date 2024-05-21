// Levenshtein Distance implementation in TypeScript Recursive & Dynamic Programming

// recursive implementation
export function lev(
    a: string,
    b: string
){
    if(a.length === 0) return b.length;
    if(b.length === 0) return a.length;

    if(a[0] == b[0]) return lev(a.slice(1),b.slice(1));
    
    let lev1 = lev(a.slice(1),b) + 1;
    let lev2 = lev(a,b.slice(1)) + 1;
    let lev3 = lev(a.slice(1),b.slice(1)) + 1;

    return Math.min(lev1,lev2,lev3);
}

// def wagner_fischer(s1, s2):
//     len_s1, len_s2 = len(s1), len(s2)
//     if len_s1 > len_s2:
//         s1, s2 = s2, s1
//         len_s1, len_s2 = len_s2, len_s1

//     current_row = range(len_s1 + 1)
//     for i in range(1, len_s2 + 1):
//         previous_row, current_row = current_row, [i] + [0] * len_s1
//         for j in range(1, len_s1 + 1):
//             add, delete, change = previous_row[j] + 1, current_row[j-1] + 1, previous_row[j-1]
//             if s1[j-1] != s2[i-1]:
//                 change += 1
//             current_row[j] = min(add, delete, change)

//     return current_row[len_s1]