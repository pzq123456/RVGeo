import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    build: {
      lib: isDev
        ? undefined // 开发时不需要构建库
        : {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'RVGeo',
            fileName: 'rvgeo',
          },
    },
    plugins: [
      // 开发模式不需要类型声明插件
      ...(isDev ? [] : [dts({ rollupTypes: true })]),
    ],
    server: {
      open: true, // 启动开发服务器时自动打开浏览器
    },
  };
});
