import { test, expect } from '@playwright/test';

test('会社紹介ページの自動チェック', async ({ page }) => {
  // 1. 作成したHTMLファイルを開く
  await page.goto('http://localhost:3000/index.html');

  // 2. 要件定義通り、会社名がヘッダーにあるかチェック！
  await expect(page.locator('header')).toContainText('テック株式会社');

  // 3. キャッチコピーが正しく表示されているかチェック！
  await expect(page.locator('h1')).toHaveText('未来を創るIT');

  // 4. お問い合わせボタンがちゃんと存在するかチェック！
  const button = page.locator('text=お問い合わせはこちら');
  await expect(button).toBeVisible();
});
