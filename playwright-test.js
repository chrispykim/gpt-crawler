import { chromium } from 'playwright';

(async () => {
  try {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    await page.waitForTimeout(5000); // Wait for 5 seconds
    await browser.close();
    console.log('Browser launched successfully in headful mode.');
  } catch (error) {
    console.error('Error launching browser:', error);
  }
})();
