export class CartPage {
    constructor(page) {
      this.page = page;
      // Selector for product name and price in the cart
      this.productRows = this.page.locator('tbody tr'); // Select each row in the cart
      this.proceedBtn= this.page.locator(`.btn.btn-default.check_out`)
    }
  
    // Get the names of products in the cart
    async getProductNames() {
      const productNameElements = await this.productRows.locator('.cart_description h4 a').allTextContents();
      return productNameElements;
    }
  
    // Get the prices of products in the cart
    async getProductPrices() {
      const productPriceElements = await this.productRows.locator('.cart_total_price').allTextContents();
      return productPriceElements;
    }
    async proceedToCheckOut()
    {
        await this.proceedBtn.click()
    }
  }
  