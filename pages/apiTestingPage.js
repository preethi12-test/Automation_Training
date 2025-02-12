export class ApiTestingPage{
    constructor(page) {
        this.page = page
    }
    async getAllApi(){
        // await this.page.waitForSelector('u')
        const uElements = await this.page.locator('u').allTextContents();

        const apiDetails = []

  for (let elementText of uElements) {
    const linkSelector = `//a[normalize-space()="${elementText}"]`;
    await this.page.click(linkSelector);
    await this.page.waitForTimeout(1000); 

    const apiURL = await this.page.$eval('#collapse1 .list-group-item:nth-child(1)', (element) => element.textContent.trim());
    const requestMethod = await this.page.$eval('#collapse1 .list-group-item:nth-child(2)', (element) => element.textContent.trim());
    const responseCode = await this.page.$eval('#collapse1 .list-group-item:nth-child(3)', (element) => element.textContent.trim());
    const responseJSON = await this.page.$eval('#collapse1 .list-group-item:nth-child(4)', (element) => element.textContent.trim());
    const apiURLValue = apiURL.split(': ')[1];
    const requestMethodValue = requestMethod.split(': ')[1];
    const responseCodeValue = responseCode.split(': ')[1];
    const responseJSONValue = responseJSON.split(': ')[1];

    apiDetails.push({
        apiURL: apiURLValue,
        requestMethod: requestMethodValue,
        responseCode: responseCodeValue,
        responseJSON: responseJSONValue
    });
      
    }
    return apiDetails
}
}