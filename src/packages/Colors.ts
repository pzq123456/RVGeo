/**
 * 用于值-颜色映射的函数
 */

function linearStretch(value: number, statistics: {max: number, min: number, mean: number}) : number
{
    return (value - statistics.min) / (statistics.max - statistics.min);
}


/**
 * 单波段单色带渲染（灰色）
 * @param statistics - 波段统计信息
 * @param value - 当前像素值
 * @param strachFunc - 拉伸函数
 */
export function simpleColorBand(
    statistics: {max: number, min: number, mean: number},
    value: number,
    strachFunc: (value:number, statistics: {max: number, min: number, mean: number}) => Number = linearStretch
) : string
{
    let stretchValue = strachFunc(value, statistics) as number;
    let colorValue = Math.floor(stretchValue * 255);
    return `rgb(${colorValue},${colorValue},${colorValue})`;
}

