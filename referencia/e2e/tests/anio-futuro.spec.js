import { expect, test } from '@playwright/test';

test('should show an error when year is in the future', async ({ page }) => {
  // Arrange: abrir la pagina
  await page.goto('/');

  // Act: la persona llena nombre, artista y un anio futuro, y guarda
  await page.getByLabel('Nombre').fill(`Pieza futura ${Date.now()}`);
  await page.getByLabel('Artista').fill('Artista de prueba');
  await page.getByLabel('A\u00f1o').fill('2999');
  await page.getByRole('button', { name: 'Guardar' }).click();

  // Assert: la persona ve el mensaje de error
  await expect(page.getByRole('alert')).toHaveText('year cannot be in the future');
});