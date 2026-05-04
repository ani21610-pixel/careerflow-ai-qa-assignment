const { test, expect } = require('@playwright/test');
const { JobApplicationPage } = require('../../pages/jobApplication.page');

test.describe('Job Application Flow', () => {

  test('Valid submission should succeed', async ({ page }) => {
    const form = new JobApplicationPage(page);

    await form.goto();

    await form.fillForm({
      firstName: 'Animesh',
      lastName: 'QA',
      email: 'test@test.com',
      mobile: '9876543210'
    });

    await form.submit();

    const modal = page.locator(form.successModal);

    await expect(modal).toBeVisible({ timeout: 10000 });
    await expect(modal).toContainText('Thanks for submitting the form');
  });

  test('Form allows invalid email (validation gap)', async ({ page }) => {
    const form = new JobApplicationPage(page);
  
    await form.goto();
  
    await form.fillForm({
      firstName: 'Test',
      lastName: 'User',
      email: '',
      mobile: '9876543210'
    });
  
    await form.submit();
  
    const modal = page.locator(form.successModal);
  
    // Modal appears → shows validation gap
    await expect(modal).toBeVisible();
  
    // Optional: log observation
    console.log('Validation gap: invalid email accepted');
  });
});