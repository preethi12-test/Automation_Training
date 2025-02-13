// @ts-check
import { test, expect, request } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { log } from 'console';

test.describe('API documanetation',()=>{
  test('Navigation to Home and APiTesting', async ({ page,request }) => {
    const homepage = new HomePage(page);
    await homepage.navToHome();
    const apiPage = await homepage.navToApiTesting();
    await apiPage.getApi()
    const apiInfo = await apiPage.getapiDetails(0)
    let response = await request.get(apiInfo.url);
  // Validate Response
  expect(response.status()).toBe(apiInfo.expectedStatus);

   
});
})

