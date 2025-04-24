import fs from 'node:fs';

import { parse } from 'csv-parse/sync'

const URL = './data/cs_gdf.csv';

// node_id,lon,lat,built,fast,slow,total
// 32813,113.9525778,22.29709622,False,0,0,0

export default {
    watch: [URL],
    load() {
        const data = fs.readFileSync(URL, 'utf8');
        const records = parse(data, {
            columns: true,
            skip_empty_lines: true,
            // 赋予对应的数据类型
            cast: (value, context) => {
                if (context.header) {
                    return value;
                }
                if (context.column === 'lon' || context.column === 'lat') {
                    return Number(value);
                } else if (context.column === 'built') {
                    if (value === 'True') {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return Number(value);
                }
            }
        });
        return records;
    },
};

