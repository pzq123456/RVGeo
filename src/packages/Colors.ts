export enum stretchType {
    linear,
    square,
    log,
    power
}

export enum colorListType {
    default,
}

/**
 * 用于线性归一化的拉伸函数
 */

function linearStretch(value: number, statistics: {max: number, min: number, mean: number}) : number
{
    return (value - statistics.min) / (statistics.max - statistics.min);
}

/**
 * 用于平方根归一化的拉伸函数
 * @param value - 当前像素值
 * @param statistics - 波段统计信息
 * @returns 
 */
function squareStretch(value: number, statistics: {max: number, min: number, mean: number}) : number
{
    return Math.sqrt((value - statistics.min) / (statistics.max - statistics.min));
}

function logStretch(value: number, statistics: {max: number, min: number, mean: number}) : number
{
    return Math.log((value - statistics.min) / (statistics.max - statistics.min) + 1);
}

function powerStretch(value: number, statistics: {max: number, min: number, mean: number}) : number
{
    return Math.pow((value - statistics.min) / (statistics.max - statistics.min), 2);
}



function stretchFactory(type: stretchType) : (value: number, statistics: {max: number, min: number, mean: number}) => Number
{
    switch(type)
    {
        case stretchType.linear:
            return linearStretch;
        case stretchType.square:
            return squareStretch;
        case stretchType.log:
            return logStretch;
        case stretchType.power:
            return powerStretch;
        default:
            throw new Error("未知的拉伸类型");
    }
}

/**
 * 连续单波段单色带渲染（灰色）
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

export function simpleColorBandFactory(type: stretchType) : (statistics: {max: number, min: number, mean: number},value: number) => string
{
    return (statistics: {max: number, min: number, mean: number},value: number) => simpleColorBand(statistics, value, stretchFactory(type));
}

const defaultColorList = ["#163544","#495a45","#767d58","#76a477","#d7bd7f","#d7221f"];

/**
 * 伪彩色带渲染
 * @param statistics - 波段统计信息
 * @param value - 当前像素值
 * @param level - [0, 1] 之间的数组，表示每个颜色的分界点 
 * - --->| 0.2 |--->| 0.5|--->| 0.8 |--->| 1.0 |
 * - 如果不传入该参数，则默认为等分
 * @param colorList - 颜色列表
 */
function pseudoColorBand(
statistics: {max: number, min: number, mean: number},
value: number,
level?: number[],
colorList: string[] = defaultColorList,
strachFunc: (value:number, statistics: {max: number, min: number, mean: number}) => Number = linearStretch){
    let stretchValue = strachFunc(value, statistics) as number;
    let colorIndex = 0;
    if(level === undefined){
        colorIndex = Math.floor(stretchValue * colorList.length);
    }
    else{
        for(let i = 0; i < level.length; i++){
            if(stretchValue < level[i]){
                colorIndex = i;
                break;
            }
        }
    }
    return colorList[colorIndex];
}

/**
 * 伪彩色带渲染工厂函数
 * @param type - 拉伸类型
 * @param level - [0, 1] 之间的数组，表示每个颜色的分界点
 * @param colorList - 颜色列表
 * @returns 
 */
export function pseudoColorBandFactory(type: stretchType, level?: number[], colorList: string[] = defaultColorList){
    return (statistics: {max: number, min: number, mean: number},value: number) => pseudoColorBand(statistics, value, level, colorList, stretchFactory(type));
}