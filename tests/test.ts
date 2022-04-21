import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Fuck you, Moe');
});

test('h1 handles custom moe queryParam', async ({ page }) => {
	await page.goto('/?moe=Smith');
	expect(await page.textContent('h1')).toBe('Fuck you, Moe Smiths');
});

test('h1 handles url-encoded moe queryParam', async ({ page }) => {
	await page.goto('/?moe=Encoded%20Text');
	expect(await page.textContent('h1')).toBe('Fuck you, Moe Encoded Text');
});

test('404 page has expected h1', async ({ page }) => {
	await page.goto('/404');
	expect(await page.textContent('h1')).toContain('404 fucking idiot');
});
