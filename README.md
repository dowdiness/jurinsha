# 十輪車LPサイト

綾傘鉾の絵本の紹介サイトです。

[minista](https://minista.qranoko.jp/)を使っています。

## Quick Start

```sh
# 依存関係のダウンロード
npm run install
# 開発時
npm run dev
# ビルド時
npm run build
# ビルドしたサイトのプレビュー
npm run preview
# クラウドフレアへのデプロイ
npm run deploy
```

## 公開時の注意

現在は検索に乗らないように設定しているので、サイト公開時には

- robots.txt
- \<meta name="robots" content="noindex, nofollow"></meta>

を消すこと。
