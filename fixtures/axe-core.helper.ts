import { AxeBuilder } from '@axe-core/playwright';
import { Page } from '@playwright/test';

export async function runAxeAnalysis(page: Page) {
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  return accessibilityScanResults;
}
