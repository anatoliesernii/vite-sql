import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./', 'src'),
    },
  },
})
