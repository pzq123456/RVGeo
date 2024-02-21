// worker.ts

self.onmessage = function(event: MessageEvent): void {
    const { data, index } = event.data;
    // 在这里执行实际的处理任务
    // 例如对数组进行采样、处理等
    const result = processData(data);
    self.postMessage({ result, index });
};

export function processData(data: any[]): any[] {
    // 在这里可以执行实际的数据处理任务
    // 例如对大数组进行采样、压缩、处理等
    // 返回处理后的结果
    return data.map(row => row.map((cell: number) => cell * 2)); // 这里简单地将数组中的每个元素乘以 2 作为示例
}