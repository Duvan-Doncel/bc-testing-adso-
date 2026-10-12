import { expect, test } from '@playwright/test';

test('should show an error when artist is empty', async ({ page }) => {
  // Arrange: abrir la página
  await page.goto('/');

  // Act: la persona llena nombre y año, deja el artista vacío y guarda
  await page.getByLabel('Nombre').fill('Pieza sin artista');
  await page.getByLabel('Año').fill('1990');
  await page.getByRole('button', { name: 'Guardar' }).click();

  // Assert: la persona ve el mensaje de error
  await expect(page.getByRole('alert')).toHaveText('El artista es obligatorio');
});