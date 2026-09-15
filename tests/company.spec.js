import { test, expect } from '@playwright/test';

test('会社紹介ページの自動チェック', async ({ page }) => {
  // 1. 作成したHTMLファイルを開く
  await page.goto('http://localhost:3000/index.html');

  // 2. 要件定義通り、会社名がヘッダーにあるかチェック！
  await expect(page.locator('header')).toContainText('石田マネジメント研究所');

  // 3. キャッチコピーが正しく表示されているかチェック！
  await expect(page.locator('h1')).toHaveText('未来を創るIT');

  // 4. お問い合わせボタンがちゃんと存在するかチェック！
  const button = page.locator('text=お問い合わせはこちら');
  await expect(button).toBeVisible();

  // 5. 新しい事業内容の3つのサービスが表示されているかチェック！
  await expect(page.locator('text=セキュリティコンサルティング')).toBeVisible();
  await expect(page.locator('text=IT戦略')).toBeVisible();
  await expect(page.locator('text=教育・人材育成')).toBeVisible();
});

