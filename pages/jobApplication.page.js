const { BasePage } = require('./base.page');

class JobApplicationPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.submitBtn = '#submit';
    this.successModal = '.modal-content';
  }

  async goto() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillForm(data) {
    await this.type(this.firstName, data.firstName);
    await this.type(this.lastName, data.lastName);
    await this.type(this.email, data.email);
  
    // ✅ REQUIRED FIXES
    await this.page.click('label[for="gender-radio-1"]'); // Male
  
    await this.type('#userNumber', data.mobile);
  
    await this.type('#currentAddress', 'Test Address Delhi');
  }

  async submit() {
    // Scroll to bottom (important)
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  
    await this.page.click(this.submitBtn);
  }
}

module.exports = { JobApplicationPage };