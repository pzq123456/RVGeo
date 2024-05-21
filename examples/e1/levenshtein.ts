// Levenshtein Distance implementation in TypeScript Recursive & Dynamic Programming

// recursive implementation
export function levR(
    a: string,
    b: string
){
    if(a.length === 0) return b.length;
    if(b.length === 0) return a.length;

    if(a[0] == b[0]) return levR(a.slice(1),b.slice(1));
    
    let lev1 = levR(a.slice(1),b) + 1;
    let lev2 = levR(a,b.slice(1)) + 1;
    let lev3 = levR(a.slice(1),b.slice(1)) + 1;

    return Math.min(lev1,lev2,lev3);
}

// dynamic programming implementation
export function lev(a: string, b: string) {
    const m = a.length;
    const n = b.length;

    // 创建二维数组来存储子问题的解
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 初始化dp数组的边界情况
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // 填充dp数组
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1,   // 删除a的一个字符
                                    dp[i][j - 1] + 1,   // 插入b的一个字符
                                    dp[i - 1][j - 1] + 1); // 替换a的一个字符
            }
        }
    }

    return dp;
}
