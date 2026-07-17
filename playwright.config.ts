import { defineConfig, devices } from '@playwright/test';

// Browser tests run against the production build (`astro preview` over
// dist/), not the dev server, so what passes here is what ships.
// Run `npm run build` first, or use `npm run verify` which handles order.
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  reporter: 'line',
  use: {
    // Port 4331 (not Astro's default 4321) so tests never accidentally
    // reuse a dev server left running by another Astro project.
    baseURL: 'http://localhost:4331',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host localhost --port 4331',
    url: 'http://localhost:4331',
    reuseExistingServer: true,
    timeout: 60_000,
  },
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 5'] } },
  ],
});
