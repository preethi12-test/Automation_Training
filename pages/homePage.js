import { ApiTestingPage } from "./apiTestingPage";

export class HomePage {
    constructor(page) {
        this.page = page
    }
    async navToHome()
    {
        await this.page.goto('https://automationexercise.com/')
    }
    async navToApiTesting()
    {
        await this.page.locator(`//a[normalize-space()='API Testing']`).click()
        return new ApiTestingPage(this.page)
    }
    
}