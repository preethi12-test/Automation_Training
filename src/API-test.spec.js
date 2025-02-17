// @ts-check
import { test, expect, request } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('API documanetation',()=>{
  test('Navigation to ApiTesting and validating get all product details', async ({ page,request }) => {
    const homepage = new HomePage(page);
    await homepage.navToHome();
    const apiPage = await homepage.navToApiTesting();
    await apiPage.getApi_get()
    const apiInfo = await apiPage.getapiDetails(0)
  let response = await request.get(apiInfo.url);
  // Validate Response
  expect(response.status()).toBe(apiInfo.expectedStatus);

   
});
test('Search Prooduct based on product name',async({page,request})=>{
  const homepage = new HomePage(page);
    await homepage.navToHome();
    const apiPage = await homepage.navToApiTesting();
    await apiPage.getApi_Post()
    const apiInfo = await apiPage.getapiDetails(4)
    const requestPayload = {
      search_product:"tshirt"
    };
    const response = await request.post(apiInfo.url, {
      form: requestPayload
    });
    expect(response.status()).toBe(apiInfo.expectedStatus);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('responseCode', apiInfo.expectedStatus);
    
})
})

