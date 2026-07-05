import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log("========== Launch Browser ==========");
});

test.beforeEach(async ({ page }) => {
    console.log("========== Login Application ==========");

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.waitForLoadState('networkidle');
});

test.afterEach(async ({ page }) => {
    console.log("========== Logout Application ==========");

    await page.locator(".oxd-userdropdown-tab").click();
    await page.getByText("Logout").click();
});

test.afterAll(async () => {
    console.log("========== Close Browser ==========");
});

// Test Case 1
test("Verify Dashboard Page", async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator("h6")).toContainText("Dashboard");
});

// Test Case 2
test("Verify Admin Menu", async ({ page }) => {
    await page.locator("//span[text()='Admin']").click();
    // Wait until Admin page loads
    await page.waitForURL("**/admin/**");
    // Verify heading
    await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();
});


// Test Case 3
test("Verify PIM Menu", async ({ page }) => {
    await page.locator("//span[text()='PIM']").click();
    await expect(page).toHaveURL(/pim/);
    await expect(page.getByRole("heading", { name: "PIM" })).toBeVisible(); 
});

// Test Case 4
test("Verify Leave Menu", async ({ page }) => {
    await page.locator("//span[text()='Leave']").click();
    await expect(page).toHaveURL(/leave/);
        await expect(page.getByRole("heading", { name: "Leave" })).toBeVisible(); 
});


        // Test Case 5
test("Verify Time Menu", async ({ page }) => {
    await page.locator("//span[text()='Time']").click();
    await expect(page).toHaveURL(/time/);
            await expect(page.getByRole("heading", { name: "Time" })).toBeVisible(); 

});

// Test Case 6
test("Verify Recruitment Menu", async ({ page }) => {
    await page.locator("//span[text()='Recruitment']").click();
    await expect(page).toHaveURL(/recruitment/);
    await expect(page.locator("h6")).toContainText("Recruitment");
});

// Test Case 7
test("Verify My Info Menu", async ({ page }) => {
    await page.locator("//span[text()='My Info']").click();
    await expect(page).toHaveURL(/viewPersonalDetails/);
    await expect(page.locator("h6")).toContainText("Personal Details");
});

// Test Case 8
test("Verify Performance Menu", async ({ page }) => {
    await page.locator("//span[text()='Performance']").click();
    await expect(page).toHaveURL(/performance/);
    await expect(page.locator("h6")).toContainText("Performance");
});

// Test Case 9
test("Verify Directory Menu", async ({ page }) => {
    await page.locator("//span[text()='Directory']").click();
    await expect(page).toHaveURL(/directory/);
    await expect(page.locator("h6")).toContainText("Directory");
});

// Test Case 10
test("Verify Maintenance Menu", async ({ page }) => {
    await page.locator("//span[text()='Maintenance']").click();

    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL(/maintenance/);
});

// Test Case 11
test("Verify Claim Menu", async ({ page }) => {
    await page.locator("//span[text()='Claim']").click();
    await expect(page).toHaveURL(/claim/);
    await expect(page.locator("h6")).toContainText("Claim");
});

// Test Case 12
test("Verify Buzz Menu", async ({ page }) => {
    await page.locator("//span[text()='Buzz']").click();
    await expect(page).toHaveURL(/buzz/);
    await expect(page.locator("h6")).toContainText("Buzz");
});

// Test Case 13
test("Verify Search Functionality", async ({ page }) => {
    await page.locator("input[placeholder='Search']").fill("Admin");
    await expect(page.locator("//span[text()='Admin']")).toBeVisible();
});

// Test Case 14
test("Verify User Dropdown", async ({ page }) => {
    await page.locator(".oxd-userdropdown-tab").click();
    await expect(page.getByText("About")).toBeVisible();
    await expect(page.getByText("Support")).toBeVisible();
    await expect(page.getByText("Change Password")).toBeVisible();
    await expect(page.getByText("Logout")).toBeVisible();
});

// Test Case 15
test("Verify OrangeHRM Logo", async ({ page }) => {
    await expect(page.locator("img[alt='client brand banner']")).toBeVisible();
});

// Test Case 16
test("Verify Dashboard Widgets", async ({ page }) => {
    await expect(page.getByText("Time at Work")).toBeVisible();
    await expect(page.getByText("My Actions")).toBeVisible();
    await expect(page.getByText("Quick Launch")).toBeVisible();
    await expect(page.getByText("Buzz Latest Posts")).toBeVisible();
});

// Test Case 17
test("Verify Quick Launch Section", async ({ page }) => {
    await expect(page.getByText("Assign Leave")).toBeVisible();
    await expect(page.getByText("Leave List")).toBeVisible();
    await expect(page.getByText("Timesheets")).toBeVisible();
    await expect(page.getByText("Apply Leave")).toBeVisible();
});

// Test Case 18
test("Verify Help Icon", async ({ page }) => {
    await expect(page.locator(".oxd-icon.bi-question-lg")).toBeVisible();
});

// Test Case 19
test("Verify Sidebar Collapse", async ({ page }) => {
    await page.locator(".oxd-main-menu-button").click();
    await page.waitForTimeout(1000);
});

// Test Case 20
test("Verify Page Refresh", async ({ page }) => {
    await page.reload();
    await expect(page).toHaveURL(/dashboard/);
});