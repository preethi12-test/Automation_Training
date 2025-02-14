export class ApiTestingPage {
    constructor(page) {
        this.page = page;
        this.api1 = page.locator(`//u[normalize-space(text())='API 1: Get All Products List']`);
        this.api2=page.locator(`//u[normalize-space(text())='API 5: POST To Search Product']`)
    }

    async getapiDetails(listNum) {
        const apiDetails = await this.page.locator('ul.list-group').nth(listNum);
        const apidetails = {};
    
        const listItems = await apiDetails.locator('li').all();
        for (const li of listItems) {
            const text = await li.innerText();
    
            if (text.includes("API URL:")) {
                apidetails.url = await li.locator('a').getAttribute('href');
            } else if (text.includes("Request Method:")) {
                apidetails.method = text.split("Request Method:")[1].trim();
            } else if (text.includes("Request Parameters:")) {
                apidetails.requestParams = text.split("Request Parameters:")[1].trim().split(',').map(param => param.trim());
            } else if (text.includes("Response Code:")) {
                apidetails.expectedStatus = parseInt(text.split("Response Code:")[1].trim(), 10);
            } else if (text.includes("Response Message:")) {
                apidetails.expectedMessage = text.split("Response Message:")[1].trim();
            } else if (text.includes("Response JSON:")) {
                apidetails.validateResponse = text.split("Response JSON:")[1].trim();
            }
        }
    
        return apidetails;
    }

    // Function to click and expand the specific API list
    async getApi_get() {
        await this.page.locator(this.api1)
    }
    async getApi_Post(){
        await this.page.locator(this.api2)
    }
}
