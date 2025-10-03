import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders primary sections and navigates via anchors', async ({ page }) => {
    await page.goto('/')

    const desktopNav = page.locator('header nav').first()

    await expect(
      desktopNav.getByRole('link', { name: 'Jan-Yaeger Dhillon', exact: true })
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: "Projects I've Contributed To" })
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: "Teams I've Worked With" })
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: 'My Academic Journey' })
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: 'Technologies I Use' })
    ).toBeVisible()

    await desktopNav.getByRole('link', { name: 'Projects', exact: true }).click()
    await expect(page).toHaveURL(/#projects/)

    await desktopNav.getByRole('link', { name: 'Skills', exact: true }).click()
    await expect(page).toHaveURL(/#skills/)
  })
})
