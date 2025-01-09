// / <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'
import type { InlineConfig } from 'vitest/node'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    // setupFiles: './src/setupTests.ts',
  },
} as VitestConfigExport)