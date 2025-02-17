    import { test, expect, request } from '@playwright/test';
    import { HomePage } from '../pages/homePage';

    test.describe('Home Page Verification in Web',()=>{
        let homepage
        test.beforeEach(async ({ page }) => {
            homepage = new HomePage(page);
            await homepage.navToHome();
        });
    test('To check Navigation Menu in Home Page', async ({ page,request }) => {
        
        const list=await homepage.getMenuOptions()
        const cleanedMenuOptionTexts = list.map(item => 
            item.trim()  
                .toLowerCase() 
                .replace(/[^a-z0-9\s]/g, '')  
                .replace(/\s+/g, ' ')  
        );
        const expectedMenuOptions = [
            'home', ' products', 'cart', 'signup login', 
            'test cases', 'api testing', 'video tutorials', 'contact us'
        ];
    
        expect(cleanedMenuOptionTexts).toEqual(expectedMenuOptions);
    });
    test('To Veify Carsoul slides count',async() =>{

        const carsoulCount=await homepage.getCarsoulCount()
        expect(carsoulCount).toEqual(3)
    })
    test('To Veify Categories count',async() =>{

        const categoriesCount=await homepage.getCategories()
        expect(categoriesCount).toEqual(3)
    })
    test('To Veify Brand Section ',async() =>{

        const brandCount = await homepage.getBrandList();
        expect(brandCount).toEqual(8)
    })
    test('To Veify Featured Items ',async() =>{

        const featuredItem = await homepage.getFeaturedItems();
        expect(featuredItem).toBeGreaterThan(1)
    })
    
    test('To Veify Footer Sectioon is visible ',async() =>{

        expect(await homepage.getFooterSection()).toBeTruthy
    })
    

})