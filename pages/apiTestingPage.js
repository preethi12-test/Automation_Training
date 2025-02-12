export class ApiTestingPage{
    constructor(page) {
        this.page = page
    }
    async getAllApi(){
        const uElements = await this.page.locator('u').allTextContents();

        const apiDetails = []

  for (let elementText of uElements) {
    const linkSelector = `//a[normalize-space()="${elementText}"]`;
    await this.page.click(linkSelector);
    await this.page.waitForTimeout(1000); 
    const listItems = await this.page.locator('#collapse1 .list-group-item').allTextContents();
            
    const apiURL = listItems.find(item => item.includes('API URL:')).split(':')[1]?.trim();
            const requestMethod = listItems.find(item => item.includes('Request Method:')).split(':')[1]?.trim();
            const requestParameter = listItems.find(item => item.includes('Request Parameter:'))?.split(':')[1]?.trim();
            const responseCode = listItems.find(item => item.includes('Response Code:')).split(':')[1]?.trim();
            const responseMessage = listItems.find(item => item.includes('Response Message:'))?.split(':')[1]?.trim();
            const responseJSON = listItems.find(item => item.includes('Response JSON:'))?.split(':')[1]?.trim();

            apiDetails.push({
                apiURL,
                requestMethod,
                requestParameter,
                responseCode,
                responseMessage,
                responseJSON
            });
      
    }
    return apiDetails
}
}