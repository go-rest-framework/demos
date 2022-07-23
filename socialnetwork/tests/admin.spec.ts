/*
user scenario
    user 1
        go to main page
        see name
        see page name
        see login form
        fill form
        see login errors
        click Sign Up btn
        fill wrong data
        see errors
        fill form with correct data
        see success msg
        see candidat page
        see email approve request
        do email approve with special endpoint for test user
        see user page
            see 0 elements in main container
            see msg btn and counter
            see user menu bnt
            see add element btn
            see search field
        click add element bnt
    user 2
        go to main page
        see name
        see page name
        see login with google btn
        click login with google btn

*/

import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto("http://localhost:3000/");
    await expect(page.locator("body")).toContainText("Demogram");
    // Find an element with the text 'About Page' and click on it
    //await page.click("text=About Page");
    // The new url should be "/about" (baseURL is used there)
    //await expect(page).toHaveURL("http://localhost:3000/about");
    // The new page should contain an h1 with "About Page"
    //await expect(page.locator("h1")).toContainText("About Page");
});
