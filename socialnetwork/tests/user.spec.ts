/*
user scenario
    TODO separate spec to small specialized specs
    admin 1
        go to main page
        see name
        see page name
        see login form
        fill form
        see admin dashboard page
        see user diagram
        see elements diagram
        see views diagram
        see activity diagram
        click menu btn
        see users list menu item
        click user list menu item
        see users list
        click user
        see user info
        block users
        delete all users
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
