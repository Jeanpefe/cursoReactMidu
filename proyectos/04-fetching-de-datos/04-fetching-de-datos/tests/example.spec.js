// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app muestra random fact e imagen', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});

test('check button refresh', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const oldText = await page.getByRole('paragraph')
  const oldTextContent = await oldText.textContent()
  console.log(oldTextContent)

  const button = await page.getByRole('button')
  await button.click()

  const newText = await page.getByRole('paragraph')
  const newTextContent = await newText.textContent()
  console.log(newTextContent)
  await expect(oldTextContent).not.toEqual(newTextContent)
});