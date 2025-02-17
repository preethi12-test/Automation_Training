import { ApiTestingPage } from "./apiTestingPage";

export class HomePage {
    constructor(page) {
        this.page = page
        this.menuOptions=page.locator(`.nav.navbar-nav li a`)
        this.carsoul=page.locator(`#slider-carousel .carousel-inner .item`)
        this.categories=page.locator(`.panel.panel-default .panel-heading .panel-title`)
        this.brandList=page.locator(`.brands-name ul li a`)
        this.featuredItem=page.locator(`.single-products`)
        this.emailSubsciptionBox=page.locator(`#susbscribe_email`)
        this.subscribeButton=page.locator(`#subscribe`)
        this.mensCategori=page.locator(`//a[normalize-space()='Men']`)
        this.tshirtSubCategori=page.locator(`//a[normalize-space()='Tshirts']`)
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
    async getMenuOptions()
    {
        const menuOption = await this.menuOptions.allTextContents()
        return menuOption
    }
    async getCarsoulCount(){
        const carsoulCount = await this.carsoul.count()
        return carsoulCount
    }
    async getCategories(){
        const categoriesCount= await this.categories.count()
        return categoriesCount
    }
    async getBrandList(){
       const brandList= await this.brandList.count()
       return brandList
    }
    async getFeaturedItems()
    {
        const featuredItem= await this.featuredItem.count()
        return featuredItem
    }
    async getFooterSection()
    {
       const emailBox=await this.emailSubsciptionBox.isVisible()
       const subscribeBtn=await this.subscribeButton.isVisible()
       return {emailBox,subscribeBtn}
    }
    async navigateToMensCategories(){
        await this.mensCategori.click()
        await this.tshirtSubCategori.click()
    }

    
}