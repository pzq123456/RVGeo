export enum stretchType {
    linear,
    square,
    log,
    power,
    groupStretch
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

function groupStretch(value: number, statistics: {max: number, min: number, mean: number}) : number{
    // 只绘制 mean 附近 10% 的像素
    let threshold = 0.1;
    if(value < statistics.mean - threshold || value > statistics.mean + threshold){
        return 0;
    }
    else{
        return (value - statistics.min) / (statistics.max - statistics.min);
    }
    
}


function stretchFactory(type: stretchType, isReverse?: boolean
    ) : (value: number, statistics: {max: number, min: number, mean: number}) => Number
{   
    switch(type)
    {
        case stretchType.linear:
            if(isReverse){
                return (value: number, statistics: {max: number, min: number, mean: number}) => 1 - linearStretch(value, statistics);
            }else{
                return linearStretch;
            }
        case stretchType.square:
            if(isReverse){
                return (value: number, statistics: {max: number, min: number, mean: number}) => 1 - squareStretch(value, statistics);
            }
            else{
                return squareStretch;
            }
        case stretchType.log:
            if(isReverse){
                return (value: number, statistics: {max: number, min: number, mean: number}) => 1 - logStretch(value, statistics);
            }
            else{
                return logStretch;
            }
        case stretchType.power:
            if(isReverse){
                return (value: number, statistics: {max: number, min: number, mean: number}) => 1 - powerStretch(value, statistics);
            }
            else{
                return powerStretch;
            }
        case stretchType.groupStretch:
            if(isReverse){
                return (value: number, statistics: {max: number, min: number, mean: number}) => 1 - groupStretch(value, statistics);
            }
            else{
                return groupStretch;
            }
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

export function simpleColorBandFactory(type: stretchType, isReverse?: boolean) : (statistics: {max: number, min: number, mean: number},value: number) => string
{
    return (statistics: {max: number, min: number, mean: number},value: number) => simpleColorBand(statistics, value, stretchFactory(type, isReverse));
}

const defaultColorList = ["#163544","#495a45","#767d58","#76a477","#d7bd7f","#d7221f"];

export const CountourColorList = [
    "#ffffff00","#ff9a00","#3ec1d3","#6c5b7b",
    "#355c7d","#f8b500","#119da4","#ff165d",
    "#8ECFC9","#FFBE7A","#82B0D2","#BEB8DC",
    "#E7DAD2","#119da4","#ff165d","#ffffff00",
];

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


// binary color band render
export function binaryColorBand(
    value: number,
    colorList: string[] = ["#000000", "#ffffff"]
): string{
    if(value === 0){
        return colorList[0];
    }
    else{
        return colorList[1];
    }
}

/**
 * 简单离散值颜色计算函数
 * - 离散值范围为整数
 * - 默认与色带索引一一对应
 * @param value 
 * @param colorList 
 */
export function simplePseudoColorBand(
    value: number,
    colorList: string[] = CountourColorList
) : string
{
    return colorList[value];
}