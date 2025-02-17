import { CartPage } from "./cartPage";

export class ProductPage{
    constructor(page)
    {
        this.page=page
        this.productAddedMessage=this.page.locator(`//p[normalize-space()='Your product has been added to cart.']`)
        this.continueShoppingBtn=this.page.locator(`.btn.btn-success.close-modal.btn-block`)
        this.viewCartBtn=this.page.locator(`//u[normalize-space()='View Cart']`)
    }
    async viewProduct(productName)
    {
        const productLocator = this.page.locator(`//div[@class='overlay-content']//p[contains(text(),'${productName}')]`);
        await productLocator.scrollIntoViewIfNeeded();
    }
    async verifyProductDetails(productName)
    {
        const addToCartBtn=this.page.locator(`//div[@class='overlay-content']//p[contains(text(),'${productName}')]//following-sibling::a`)
        return await addToCartBtn.isVisible()
    }
    async hoverOverTheProduct(productName)
    {
         await this.page.getByText(productName).first().hover();
         await this.page.locator(`//div[@class='overlay-content']//p[contains(text(),'${productName}')]//following-sibling::a`).click()
         const productAddedMessage = await this.page.locator("//p[normalize-space()='Your product has been added to cart.']");
         const messageText = await productAddedMessage.textContent();
         return messageText;

    }
    async continueShopping()
    {
        await this.continueShoppingBtn.click()
    }
    async viewCart()
    {
        await this.viewCartBtn.click()
        return new CartPage(this.page)
    }
}