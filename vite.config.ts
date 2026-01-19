import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer()],
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.obj'],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
    exclude: ['three/examples'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      '@types': path.resolve(__dirname, './src/types/index.ts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@shaders': path.resolve(__dirname, './src/components/shaders/index.ts'),
      '@models': path.resolve(__dirname, './src/components/models/index.ts'),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router'],
          // Three.js and related libraries
          // 'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'three-library': ['three'],
          'three-extras': ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    chunkSizeWarningLimit: 1200, // raising this because ThreeJS is really hard to get smaller
  },
})
