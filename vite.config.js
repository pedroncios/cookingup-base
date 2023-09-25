import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Permite o uso das variáveis globais dentro dos testes
    setupFiles: ['./src/test/setup.js'],  // Arquivo de setup que roda antes de todos os testes
    environment: 'jsdom',
  }
})
