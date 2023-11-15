import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3838,
	},
	envDir: './', // Indica o diretório onde o Vite procurará pelo arquivo .env
	plugins: [react()],
});
