import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'happy-dom',
	},
})
