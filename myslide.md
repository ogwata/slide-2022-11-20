---
title: VivliostyleでWebフォントを使う：調査編
---

# Vivliostyleで<br/>Webフォントを使う：調査編 {.cover}

## 小形克宏<br/>2022年4月23日<br/>Vivliostyle ユーザーと開発者の集い

# ToC {.toc hidden style="display: none"}

1. [Webフォントサービスとフォントファウンダリー①](#webfontservices-and-fontfoundries-1)
2. [Webフォントサービスとフォントファウンダリー②](#webfontservices-and-fontfoundries-2)
3. [Webフォントサービスとフォントファウンダリー③](#webfontservices-and-fontfoundries-3)
4. [Webフォントを読み込む方法](#how-to-load-Webfonts)
5. [Webフォントサービスごとの読み込み方法](#how-to-load-each-webfont-service)
6. [Webフォントサービスの利用規約](#terms-of-use-for-webfont-service)
7. [「利用者のWebサイト以外での使用を禁止」の問題点①](#prohibition-of-use-other-than-the-users-website-1)
8. [「利用者のWebサイト以外での使用を禁止」の問題点②](#prohibition-of-use-other-than-the-users-website-2)
10. [Vivliostyle各プロダクトがユーザファイルを扱う仕組み①](#how-each-vivliostyle-product-handles-user-files-1)
11. [Vivliostyle各プロダクトがユーザファイルを扱う仕組み②](#how-each-vivliostyle-product-handles-user-files-2)
12. [Vivliostyle各プロダクトがユーザファイルを扱う仕組み③](#how-each-vivliostyle-product-handles-user-files-3)
13. [Vivliostyleで利用できるWebフォントサービス](#webfont-services-available-in-vivliostyle-1)
15. [Vivliostyle CLI①](#vivliostyle-cli-1)
16. [Vivliostyle CLI②](#vivliostyle-cli-2)
17. [Vivliostyle Viewer①](#vivliostyle-viewer-1)
18. [Vivliostyle Viewer②](#vivliostyle-viewer-2)
19. [Vivliostyle Pub①](#vivliostyle-pub-1)
20. [Vivliostyle Pub②](#vivliostyle-pub-2)
21. [まとめ](#summary)

# Webフォントサービスと<br/>フォントファウンダリー①{#webfontservices-and-fontfoundries-1}

- SCREENホールディングス
    - REALTYPE（リアルタイプ）
    - TypeSquare（モリサワ）
    - FONTPLUS（SBテクノロジー）
    - fonts.com（Monotype）

# Webフォントサービスと<br/>フォントファウンダリー②{#webfontservices-and-fontfoundries-2}

- 大日本印刷
    - REALTYPE（リアルタイプ）
    - TypeSquare（モリサワ）
    - FONTPLUS（SBテクノロジー）
    - Adobe Fonts（アドビ）

# Webフォントサービスと<br/>フォントファウンダリー③{#webfontservices-and-fontfoundries-3}

- 字游工房
    - TypeSquare（モリサワ）
    - Adobe Fonts（アドビ）
- ダイナコムウェア
    - Dyna Font Online（ダイナコムウェア）

→フォントファウンダリー＝Webフォントサービスではない

# Webフォントを読み込む方法{#how-to-load-Webfonts}

- ①@font-face
     - サーバに置いたフォントを読み込む
- ②@import／link要素
    - サーバに置いたスタイルシートを読み込む
- ③script要素
    - JavaScriptでフォントのサブセットを動的に生成し読み込む

# Webフォントサービスごとの読み込み方法{#how-to-load-each-webfont-service}

- FONTPLUS（SBテクノロジー）③
- TypeSquare（モリサワ）③
- fonts.com（Monotype）②
- DynaFontOnline（ダイナコムウェア）②③
- REALTYPE（リアルタイプ）③
- Google Fonts（Google）②

# Webフォントサービスの<br/>利用規約{#terms-of-use-for-webfont-service}

- **ⓐ利用者のWebサイト以外での使用を禁止**→FONTPLUS、TypeSquare、fonts.com、REALTYPE
- **ⓑ利用者がデザイン、開発、作成するWebページコンテンツ以外での使用を禁止**→Adobe Fonts
- **ⓒ印刷物の制作、Webサイトのデザイン制作、電子書籍で使用を許諾**→DynaSmart V
- **ⓓ印刷物の制作や、利用者自身のWeb サイトのデザイン制作を許諾**→DynaSmart T

# 「利用者のWebサイト以外での使用を禁止」の問題点①{#prohibition-of-use-other-than-the-users-website-1}

- 「利用者のWebサイト」の定義が曖昧
   - たとえば作成者と所有者が分離している場合
    - Webデザイナーが制作するWebサイト
    - 「利用者」はWebデザイナーかサイト所有者か？

# 「利用者のWebサイト以外での使用を禁止」の問題点②{#prohibition-of-use-other-than-the-users-website-2}

- ⓐ：利用規約では解決不能
    - そこでドメインを登録してもらい「利用者」を特定
    - →利用規約および運用によって解決
- ⓑ：利用規約で利用者の範囲を明確化した
    - →Webデザイナーを対象とするサービスなので明確化？
- ⓒ：ローカルフォントにWebフォントサービスが付帯
    - →利用規約はローカルフォントとWebフォントを区別せず

# Vivliostyle各プロダクトが<br/>ユーザファイルを扱う仕組み①{#how-each-vivliostyle-product-handles-user-files-1}

- Ⓐネット上の任意のURLから読み込む（オンライン）→「利用者のWebサイト」ではない
    - Vivliostyle Viewer https://vivliostyle.org/viewer/
    - Vivliostyle Pub https://vivliostyle-pub-develop.vercel.app
    - Vivliostyle CLI buildの際、ファイルのURLを指定可能
- Ⓑhttp://localhost から読み込む（ローカル）→まさに「利用者のWebサイト」
    - Vivliostyle Viewer 
    - Vivliostyle CLI

# Vivliostyle各プロダクトが<br/>ユーザファイルを扱う仕組み②{#how-each-vivliostyle-product-handles-user-files-3}

- Ⓒfile:// から読み込む（ローカル）→そもそもWebサイトではない
    - Vivliostyle CLI

# Vivliostyleで利用できる<br/>Webフォントサービス{#webfont-services-available-in-vivliostyle-1}

- 基本的には契約者間で決めること
- 第三者であるVivliostyleが利用保証はできない
- 以下に示すのは、ユーザの便宜をはかるため、各社と会話した上で独自に判断したもの
- 私達が推奨した場合でも、個別に問い合わせて確認してほしい
- 凡例
   - ○……推奨
   - ×……利用規約外の可能性が高い

# Vivliostyle CLI①{#vivliostyle-cli-1}

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- Ⓑhttp://localhost でプレビュー
    - ○……DynaSmart V、DynaSmart T、TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
    - ×……なし
- Ⓒfile:// でプレビュー
    - ○……DynaSmart V
    - ×……DynaSmart T、TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle CLI②{#vivliostyle-cli-2}

- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Viewer①{#vivliostyle-viewer-1}

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- Ⓑhttp://localhost でプレビュー
    - ○……DynaSmart V、DynaSmart T、TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
    - ×……なし

# Vivliostyle Viewer②{#vivliostyle-viewer-2}

- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Pub①{#vivliostyle-pub-1}

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Pub②{#vivliostyle-pub-2}

- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# まとめ{#summary}
