type StretchType = 'linear' | 'log' | 'exp' | 'sqrt';

/**
 * Column 类用于表示一列数据，提供了多种数据处理和统计方法
 * @class
 * @param data 初始数据，可以是数字数组或 Column 实例
 * @param name 列名（可选）
 */
export class Column {
    private _max: number = 0;
    private _min: number = 0;
    private _average: number = 0;
    private _data: number[] = [];

    /**
     * 创建一个新的 Column 实例
     * @param data 初始数据，可以是数字数组或 Column 实例
     * @param name 列名（可选）
     */
    constructor(data?: number[] | Column, public readonly name?: string) {
        if (data instanceof Column) {
            this._data = [...data.data];
            this._max = data.max;
            this._min = data.min;
            this._average = data.average;
        } else if (Array.isArray(data)) {
            this._data = [...data];
            this.update();
        }
    }

    /**
     * 从数组创建 Column 实例（工厂方法）
     * @param data 数字数组
     * @param name 列名（可选）
     */
    static fromArray(data: number[], name?: string): Column {
        return new Column(data, name);
    }

    /**
     * 创建指定范围的 Column 实例
     * @param start 起始值
     * @param end 结束值
     * @param step 步长（默认为1）
     * @param name 列名（可选）
     */
    static range(start: number, end: number, step: number = 1, name?: string): Column {
        const data: number[] = [];
        for (let i = start; i <= end; i += step) {
            data.push(i);
        }
        return new Column(data, name);
    }

    /**
     * 创建指定长度的随机数 Column 实例
     * @param length 长度
     * @param min 最小值（默认为0）
     * @param max 最大值（默认为1）
     * @param name 列名（可选）
     */
    static random(length: number, min: number = 0, max: number = 1, name?: string): Column {
        const data = Array.from({ length }, () => Math.random() * (max - min) + min);
        return new Column(data, name);
    }

    print(): void {
        console.log(`Column "${this.name || 'unnamed'}":`);
        console.log("  max:", this._max, "min:", this._min, "average:", this._average);
        console.log("  data:", this._data);
    }

    clear(): void {
        this._max = 0;
        this._min = 0;
        this._average = 0;
        this._data = [];
    }

    update(): void {
        this.dropna();
        
        if (this._data.length === 0) {
            this._max = 0;
            this._min = 0;
            this._average = 0;
            return;
        }

        this._max = Math.max(...this._data);
        this._min = Math.min(...this._data);
        this._average = this._data.reduce((a, b) => a + b, 0) / this._data.length;
    }

    dropna(): void {
        this._data = this._data.filter((value) => 
            value !== null && value !== undefined && !isNaN(value)
        );
    }

    append(values: number[] | Column, getVal: (value: number) => number = (v) => v): void {
        const dataToAdd = values instanceof Column ? values.data : values;
        this._data.push(...dataToAdd.map(getVal));
        this.update();
    }

    mapValue(value: number, isReverse: boolean = false, stretch: StretchType = 'linear'): number {
        if (this._max === this._min) {
            return isReverse ? 0 : 1;
        }

        let mappedValue = (value - this._min) / (this._max - this._min);

        switch (stretch) {
            case 'log':
                mappedValue = Math.log10(1 + mappedValue * 9);
                break;
            case 'exp':
                mappedValue = Math.pow(mappedValue, 2);
                break;
            case 'sqrt':
                mappedValue = Math.sqrt(mappedValue);
                break;
            case 'linear':
            default:
                // 保持原值
                break;
        }

        if (isReverse) {
            return Math.max(0, Math.min(1, 1 - mappedValue));
        }
        return Math.max(0, Math.min(1, mappedValue));
    }

    getGrades(num: number, fixed: number = 2): string[] {
        if (num <= 0 || this._max === this._min) {
            return [this._max.toFixed(fixed)];
        }

        const range = this._max - this._min;
        const roughStep = range / num;
        const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
        const niceStep = Math.ceil(roughStep / magnitude) * magnitude;

        const niceMin = Math.floor(this._min / niceStep) * niceStep;
        const niceMax = Math.ceil(this._max / niceStep) * niceStep;

        const grades: string[] = [];
        for (let i = niceMin; i <= niceMax + Number.EPSILON; i += niceStep) {
            grades.push(i.toFixed(fixed));
        }

        return grades;
    }

    getGradesFixed(num: number, fixed: number = 2): string[] {
        if (num <= 0 || this._max === this._min) {
            return [this._max.toFixed(fixed)];
        }

        const grades: string[] = [];
        const step = (this._max - this._min) / num;
        
        for (let i = 0; i <= num; i++) {
            grades.push((this._min + i * step).toFixed(fixed));
        }

        return grades;
    }

    // Getters for the statistics
    get max(): number { return this._max; }
    get min(): number { return this._min; }
    get average(): number { return this._average; }
    get data(): number[] { return [...this._data]; }
    get length(): number { return this._data.length; }

    // 添加类似 pandas 的常用方法
    sum(): number {
        return this._data.reduce((a, b) => a + b, 0);
    }

    median(): number {
        if (this._data.length === 0) return 0;
        const sorted = [...this._data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    std(): number {
        if (this._data.length === 0) return 0;
        const avg = this._average;
        const squareDiffs = this._data.map(value => Math.pow(value - avg, 2));
        return Math.sqrt(squareDiffs.reduce((a, b) => a + b, 0) / this._data.length);
    }
}