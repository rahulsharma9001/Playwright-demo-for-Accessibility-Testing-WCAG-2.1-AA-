import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { runAxeAnalysis } from '../../fixtures/axe-core.helper';

test.describe('Accessibility Audit - Home Page (WCAG 2.1 AA)', () => {
  test('should not have any WCAG 2.1 AA violations', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto(process.env.BASE_URL ?? 'http://localhost:3000');

    const results = await runAxeAnalysis(page);
    const violations = results.violations;

    console.log(`🔍 Found ${violations.length} accessibility violations`);
    for (const v of violations) {
      console.log(`❌ ${v.id}: ${v.help} (${v.impact})`);
    }

    expect(violations.length, 
    violations.length > 0 
        ? ` Found ${violations.length} WCAG 2.1 AA violation(s):\n${violations.map(v => `- ${v.id}: ${v.description}`).join('\n')}` 
        : ' No WCAG 2.1 AA violations found'
    ).toBe(0);
  });
});
