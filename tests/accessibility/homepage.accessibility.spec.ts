import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Accessibility Audit - Home Page (WCAG 2.1 AA)', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'http://localhost:3000');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2aa'])
    .analyze();

  const { violations } = accessibilityScanResults;

  if (violations.length > 0) {
    console.log(`\n🔍 Found ${violations.length} accessibility violation(s):`);
    violations.forEach((v, i) => {
      console.log(`\n${i + 1}. ❌ ${v.id.toUpperCase()} (${v.impact || 'unknown'} impact)`);
      console.log(`   ➜ ${v.help}`);
      console.log(`   📖 ${v.helpUrl}`);
      console.log(`   🧩 Affected Nodes: ${v.nodes.map(n => n.target).join(', ')}`);
    });
  } else {
    console.log('\n✅ No WCAG 2.1 AA violations found');
  }

  expect(violations.length, violations.length > 0 
    ? `Found ${violations.length} WCAG 2.1 AA violation(s). Check logs above for details.`
    : 'No WCAG 2.1 AA violations found.'
  ).toBe(0);
});
