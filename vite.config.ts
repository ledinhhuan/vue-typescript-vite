import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port: 4500,
		open: true,
		cors: true
	},
	build: {
		minify: 'esbuild',
		outDir: 'dist',
		brotliSize: false,
		chunkSizeWarningLimit: 2000,
		assetsDir: 'static/assets',
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
			}
		},
		cssTarget: ''
	}
});
