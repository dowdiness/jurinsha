# 十輪車LPサイト

綾傘鉾の絵本の紹介サイトです。
[minista](https://minista.qranoko.jp/)を使っています。

[Github](https://github.com/dowdiness/jurinsha)
[Site](https://jurinsha.koji-ishimoto.workers.dev)

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

## サイトの構成

あらすじ
登場人物
絵本と紙芝居べつの紹介
制作チームプロフィール
制作記録動画

を乗せたらOK？
キービジュアルみたいなものは必要かも？

## 公開時の注意

現在は検索に乗らないように設定しているので、サイト公開時には

- robots.txt
- \<meta name="robots" content="noindex, nofollow"></meta>

を消すこと。
