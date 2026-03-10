import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    headless: true
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]]
});
