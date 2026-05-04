const { request } = require('@playwright/test');

async function getUsers() {
  const apiContext = await request.newContext();

  const response = await apiContext.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return response;
}

module.exports = { getUsers };