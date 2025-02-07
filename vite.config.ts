import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src', // Optional, allows importing files as '@/path/to/file'
        },
    },
    build: {
        outDir: 'dist', // Output directory for build files
    },
});