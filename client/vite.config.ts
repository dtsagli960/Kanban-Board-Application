import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    allowedHosts: ['kanban-board-application-pjsc.onrender.com'],
    proxy: {
      '/api': {
        target: 'kanban-board-application-pjsc:10000',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'kanban-board-application-pjsc:10000',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
