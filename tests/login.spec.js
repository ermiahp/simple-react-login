import { test, expect } from '@playwright/test'

test('should navigate to the login page', async ({ page }) => {
	await page.goto('http://localhost:3000/')
	expect(page.url()).toBe('http://localhost:3000/login')
})

test('should login with valid credentials', async ({ page }) => {
	await page.goto('http://localhost:3000/login')
	await page.locator('div').filter({ hasText: /^Username$/ }).locator('div').click();
	await page.getByLabel('Username').fill('123');
	await page.getByLabel('Password').click();
	await page.getByLabel('Password').fill('123');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.waitForNavigation();
	expect(page.url()).toBe('http://localhost:3000/dashboard');
})


test('should logout and redirect to the login page', async ({ page }) => {
	await page.goto('http://localhost:3000/login');
	await page.locator('div').filter({ hasText: /^Username$/ }).locator('div').click();
	await page.getByLabel('Username').fill('123');
	await page.getByLabel('Password').click();
	await page.getByLabel('Password').fill('123');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.getByText('username: admin').click();
	await page.getByRole('button', { name: 'Logout' }).click();
	await page.waitForNavigation();
	expect(page.url()).toBe('http://localhost:3000/login');
});