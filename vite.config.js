import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // 获取当前工作目录
    const root = process.cwd();
    // 获取环境变量
    const env = loadEnv(mode, root);
    return {
        plugins: [vue()],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, './src'),
                },
            ],
        },
        server: {
            // 开启热更新
            hmr: true,
            proxy: {
                '/visualization': {
                    target: 'https://api.imooc-web.lgdsunday.club/api',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
                [env.VITE_APP_API_BASEURL]: {
                    target: 'https://api.imooc-web.lgdsunday.club/api',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    };
});
