// import { test, expect } from '@playwright/test';
// import { runPa11yAudit } from '../../fixtures/pa11y.helper';

// test.describe('Pa11y Accessibility Audit (WCAG 2.1 AA)', () => {
//   test('should pass WCAG 2.1 AA compliance', async () => {
//     const url = process.env.BASE_URL ?? 'http://localhost:3000';
//     const results = await runPa11yAudit(url);

//     const errors = results.issues.filter(i => i.type === 'error');
//     console.log(`🔍 Pa11y found ${errors.length} WCAG 2.1 AA issues`);

//     errors.forEach(err => {
//       console.log(`❌ ${err.code}: ${err.message} (${err.selector})`);
//     });

//     expect(errors.length, 'No WCAG 2.1 AA errors expected').toBe(0);
//   });
// });
