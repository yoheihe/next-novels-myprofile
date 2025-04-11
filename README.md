# next-novels-myprofile Portforio

## 🔥 概要
このポートフォリオは、私のスキルや実績をまとめたものです。  
小説投稿サイトに掲載している作品を一元管理できるようにしたいと考え、ポートフォリオ作成することにしました。  
主にReactフレームワークのNext.jsやReactUIフレームワークのMUIを使い、シンプルなレイアウトを意識して開発しました。

## 💻 使用技術
- フロントエンド: React（Next.js）, Material UI
- バックエンド: 
- データベース: 
- インフラ: 

## ✨ 特徴
- レスポンシブ対応
- API連携

## 🎥 デモ
[こちらからデモをご覧ください]()

## 🧠 工夫したポイント
- コードの可読性と保守性を意識し、コンポーネントを分割
- 状態管理にReact Contextを使用
- 非同期処理やエラーハンドリングを丁寧に実装

## 📁 ディレクトリ構成
<pre>
 
next-novels-myprofile/
├── src/
│   ├── app/
│   │   ├── page.js               // トップページ
│   │   ├── globals.css           // グローバルCSS
│   │
│   │   ├── about/                // 自己紹介ページ
│   │   │   └── page.js
│   │
│   │   ├── works/                // 作品紹介ページ
│   │   │   ├── page.js
│   │
│   │   ├── contact/              // お問い合わせページ
│   │   │   └── page.js
│
├── components/                   // 再利用可能なUIコンポーネント群
│   ├── ButtonGroup.js
│   ├── ProfileSectionGroup.js
│   ├── aSakura.js
│
├── public/                       // 公開用ファイル（画像など）
│   └── img/                      // 画像ファイルをここに保存

</pre>


## 🚀 セットアップ方法
```bash
git clone https://github.com/yourname/yourportfolio.git
cd yourportfolio
npm install
npm start
```

自身の書いた小説をまとめるポートフォリオを作成
小説投稿サイトに掲載している作品を一元管理できるようにしたいと考え、ポートフォリオ作成することにしました

Next.js実行 npx create-next-app@latest プロジェクト名  

MUI利用　プロジェクトフォルダに移動してから（pwdで階層確認、cdで移動） npm install @mui/material @mui/icons-material @emotion/react @emotion/styled  

トップページはapp/pageに記載  

（page.jsに'use client'を記述。レンダリングでエラーが発生するため）  

CSSはwrapperを付与してグローバルCSSに記述  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

ファイル名はプレフィックスにて記述
ファイル名とclassNameに統一性をもたせる

## To Do Next
①トップページのコンポーネント化
・ダッシュボード、自己紹介、SNSリンクの3コンポーネントに分割
・ダッシュボードのWorkボタンクリック時の動作修正。検索テキストボックスの表示をなくす？
　About、Work、Contactのボタンクリック時にそれぞれのページに遷移させる
・ページを動的にする
②Aboutページの作成
・画像の取得
・レイアウト調整
　globals.cssを当てるもCSSが崩れる。ファイルの読み込みパスが違っている。現在のファイルの位置を基準に対象ファイルまでのパスを記述する。../はひとつ上の階層を指定。
　画像が表示されない。imgフォルダに格納されている画像のリンク設定src="/img/画像ファイル名.png"
③Contactページの作成
・問い合わせフォームのレイアウト
・問い合わせ受付の機能（バックエンド）
　npm install nodemailer

<pre>
 study/
│── src/
│   ├── app/
│   │   ├── globals.css
│── pages/
│   ├── about.js
</pre>

2025.4.5
・メニューバーの固定
　MUIのAppBar position="sticky"にて実装
・メニューのスマホ対応（レスポンシブ）
　useMediaQuery + theme.breakpoints.down('sm') を使って画面サイズを判定
　down('sm') → スマホ（600px以下）のときにtrue
　isMobile フラグで表示内容を切り替え
 ※アニメーションにするか検討（npm install framer-motion）
・リポジトリの再作成とデータ移行
・READMEの精査
・リスト用のページを作成（好きな本）

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
