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

    // Wait longer + proper handling
    await expect(modal).toBeVisible({ timeout: 10000 });
  });

  test('Invalid email should show validation error', async ({ page }) => {
    const form = new JobApplicationPage(page);

    await form.goto();

    await form.fillForm({
        firstName: 'Test',
        lastName: 'User',
        email: 'invalid-email',
        mobile: '9876543210'
      });

    await form.submit();

    // Assertion: form should not submit
    await expect(page.locator(form.successModal)).not.toBeVisible();
  });

});