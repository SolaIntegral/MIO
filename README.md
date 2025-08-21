# MIO Web App

HTML、CSS、JavaScript、TypeScriptを使用して構築されたモダンなWebアプリケーションです。

## 🚀 特徴

- **TypeScript対応**: 型安全性と開発効率の向上
- **モダンなデザイン**: 美しく直感的なユーザーインターフェース
- **レスポンシブ対応**: あらゆるデバイスで完璧に動作
- **高速パフォーマンス**: Viteを使用した最適化されたビルド
- **アニメーション**: スムーズなスクロールアニメーションとインタラクション
- **フォームバリデーション**: リアルタイムバリデーション機能

## 🛠️ 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリングとアニメーション
- **JavaScript**: インタラクティブな機能
- **TypeScript**: 型安全性と開発効率
- **Vite**: 高速な開発サーバーとビルドツール

## 📦 セットアップ

### 前提条件

- Node.js (v16以上)
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd MIO
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` を開く

## 📜 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用ビルド
- `npm run preview` - ビルド結果をプレビュー
- `npm run type-check` - TypeScriptの型チェック

## 🏗️ プロジェクト構造

```
MIO/
├── src/
│   ├── components/          # コンポーネント
│   │   ├── navigation.ts    # ナビゲーション
│   │   └── contact-form.ts  # お問い合わせフォーム
│   ├── utils/               # ユーティリティ
│   │   └── animations.ts    # アニメーション
│   ├── styles/              # スタイル
│   │   └── main.css         # メインCSS
│   ├── app.ts               # メインアプリケーション
│   └── main.ts              # エントリーポイント
├── index.html               # メインHTML
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
├── vite.config.ts           # Vite設定
└── README.md                # プロジェクト説明
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #6366f1 (インディゴ)
- **Secondary**: #f8fafc (グレー)
- **Accent**: #06b6d4 (シアン)
- **Text**: #1e293b (ダークグレー)

### タイポグラフィ
- **Font Family**: Inter
- **Font Sizes**: 0.75rem 〜 3rem
- **Line Height**: 1.6

### スペーシング
- **Base Unit**: 0.25rem
- **Scale**: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

## 📱 レスポンシブデザイン

- **Desktop**: 1200px以上
- **Tablet**: 768px - 1199px
- **Mobile**: 767px以下

## 🔧 カスタマイズ

### カラーの変更
`src/styles/main.css` の `:root` セクションでCSS変数を編集してください。

### フォントの変更
Google Fontsから新しいフォントを追加し、CSS変数を更新してください。

### アニメーションの調整
`src/utils/animations.ts` でアニメーションの設定をカスタマイズできます。

## 🚀 デプロイ

### Vercel
1. Vercelにプロジェクトを接続
2. ビルドコマンド: `npm run build`
3. 出力ディレクトリ: `dist`

### Netlify
1. Netlifyにプロジェクトを接続
2. ビルドコマンド: `npm run build`
3. 公開ディレクトリ: `dist`

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 お問い合わせ

プロジェクトに関する質問や提案がある場合は、お気軽にお問い合わせください。