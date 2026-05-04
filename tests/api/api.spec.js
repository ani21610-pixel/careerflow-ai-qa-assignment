const { test, expect } = require('@playwright/test');
const { getUsers } = require('../../utils/apiClient');

test('Validate user API', async () => {
    const response = await getUsers();
  
    expect(response.status()).toBe(200);
  
    const body = await response.json();
  
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('name');
  });