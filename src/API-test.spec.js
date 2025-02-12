// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { log } from 'console';

test('has title', async ({ page }) => {
  // await page.goto('https://automationexercise.com/')
  // // const response = await page.request.get('https://automationexercise.com/');
  // await page.locator(`//a[normalize-space()='API Testing']`).click()
  
  // // expect(response.status()).toBe(200);
  const homepage = new HomePage(page);
  await homepage.navToHome()
 const list= await homepage.navToApiTesting()
 const li= await list.getAllApi()
 console.log(li);
 
});

