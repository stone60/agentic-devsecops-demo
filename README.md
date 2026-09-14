# テック株式会社 会社紹介ホームページ

テック株式会社の公式コーポレートサイトプロジェクトです。

## 概要
- **技術スタック**: HTML5, CSS3, Node.js, Playwright
- **デザイン**: プレーンCSS（レスポンシブ対応）
- **品質管理**: Playwright による自動E2Eテスト / GitHub Actions CI

## ローカル開発手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 自動テストの実行
```bash
npm test
```

## CI/CD パイプライン (GitHub Actions)
`.github/workflows/ci.yml` により、プッシュ・プルリクエスト時に自動で以下を実行します：
1. **セキュリティスキャン (DevSecOps)**: `npm audit` による脆弱性検証
2. **E2E自動テスト**: Playwright によるブラウザ表示・動作の検証
