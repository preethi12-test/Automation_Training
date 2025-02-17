import { test, expect, request } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { log } from 'console';
import { CartPage } from '../pages/cartPage';

test.describe('Verifying shopcart For Tshirts',async()=>{
    test('Verify shopcart',async({page})=>{
        const homePage = new HomePage(page)
        const productPage= new ProductPage(page)
        const cartpage = new CartPage(page)
        await homePage.navToHome(page)
        await homePage.navigateToMensCategories()
        //scroll the product to view
        const product1="Pure Cotton Neon Green Tshirt"
        await productPage.viewProduct(product1)
        const ProductDetails=await productPage.verifyProductDetails(product1)
        expect(ProductDetails).toBeTruthy()
        const productAddedMessage=await productPage.hoverOverTheProduct(product1)
        expect(productAddedMessage).toBeDefined()
        await productPage.continueShopping()
        //Add product 2 to cart
        const product2="Premium Polo T-Shirts"
        await productPage.viewProduct(product2)
        const ProductDetails2=await productPage.verifyProductDetails(product2)
        expect(ProductDetails2).toBeTruthy()
        const productAddedMessage2=await productPage.hoverOverTheProduct(product2)
        expect(productAddedMessage2).toBeDefined()

        await productPage.viewCart()

        const productNames = await cartpage.getProductNames();
        const productPrices = await cartpage.getProductPrices();

        // Check if the names and prices are correct
        expect(productNames).toContain(product1);
        expect(productNames).toContain(product2);

        expect(productPrices[0]).toBe('Rs. 850');
        expect(productPrices[1]).toBe('Rs. 1500');
        await cartpage.proceedToCheckOut()



       
        



    })

})