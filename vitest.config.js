/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['./src/**/*.test.{ts,tsx,js,jsx}'],
    deps: {
      moduleDirectories: [
        resolve(__dirname, 'node_modules'),
        resolve(__dirname, 'src'),
      ],
    },
    globals: true,
    setupFiles: './tests/setup.ts',
    coverage: {
      reporter: ['text', 'html', 'json-summary'],
      exclude: ['**/index.ts', '**/*.d.ts'],
    },
  },
})
