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

- 字游工房
    - TypeSquare（モリサワ）
    - Adobe Fonts（アドビ）
- ダイナコムウェア
    - Dyna Font Online（ダイナコムウェア）

→Webフォントサービス＝フォントファウンダリーではない

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
- DynaFont Online（ダイナコムウェア）②③
- REALTYPE（リアルタイプ）③
- Google Fonts（Google）②

# 利用規約からみた<br/>Webフォントサービスの3類型{#terms-of-use-for-webfont-service}

- ⓐ…「利用者のWebサイト以外での使用を禁止」方式
- ⓑ…「利用者がデザイン、開発、作成するWebサイト以外を禁止」方式
- ⓒ…「印刷物／Webサイトデザイン／電子書籍を許諾」方式
    - ⓒ-b…「印刷物／利用者のWebサイトデザインを許諾」方式

# ⓐ「利用者のWebサイト以外での使用を禁止」方式{#prohibition-of-use-other-than-the-users-website-1}

- FONTPLUS、TypeSquare、fonts.com、REALTYPE
- 実際には「利用者のWebサイト」の定義が曖昧
   - たとえば作成者と所有者が分離している場合
        - Webデザイナーが制作するWebサイト
        - 「利用者」はWebデザイナーかサイト所有者か？
    - そこでドメインを登録してもらい「利用者」を特定
        - つまり利用規約＋その運用によって問題を解決

# ⓑ利用者がデザイン、開発、作成するWebサイト以外を禁止方式{#prohibition-of-use-other-than-the-users-website-2}

- Adobe Fonts
- 利用者の**使途**を定義することで許諾範囲を明確化
    - 単に「利用者のWebサイト」ではなく「利用者がデザイン、開発、作成するWebサイト以外」と使途を明確化
    - →Dreamweaverで仕事をする人（クリエイター）のための利用規約

# ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式

<div style="font-size: 95%;">

- DynaSmartVに付帯するDynaFont Online
    - ローカルフォント年間ライセンスにWebフォントサービスが付帯している 
        - ローカルフォントとWebフォントが同じ利用規約
        - ローカルフォントと同じ許諾範囲でWebフォントが使える
- **ⓒ-b「印刷物／利用者のWebサイトデザインを許諾」方式**
    - DynaSmartTに有償オプションでDynaFont Onlineが利用可能
    - ⓒと同じ構造だが、範囲を絞っている

</div>

# Vivliostyleで利用できる<br/>Webフォントサービス{#webfont-services-available-in-vivliostyle-1}

- 基本的には契約者間で決めること
- 第三者であるVivliostyleが利用保証はできない
- 以下に示すのは、ユーザの便宜をはかるため、各社と会話した上で独自に判断したもの
- 私達が推奨した場合でも、個別に問い合わせて確認してほしい
- 凡例
   - 🙆……推奨
   - 🙅……利用規約外の可能性が高い

# Vivliostyleプロダクトの3類型{#how-each-vivliostyle-product-handles-user-files-1}

プログラムが置かれた場所によって3種類に分類できる

- ⒶVivliostyleのサイト上に置かれたVivliostyle
    - Vivliostyle Viewer https://vivliostyle.org/viewer/
    - Vivliostyle Pub https://vivliostyle-pub-develop.vercel.app
- Ⓑ自分のPC上のVivliostyle（localhost）
    - Vivliostyle Viewer 
    - Vivliostyle CLI
- Ⓒ自分のPC上のVivliostyle（fileプロトコル）
    - Vivliostyle CLI

# 置かれた場所ごとの<br/>Webフォント利用可否①{#how-each-vivliostyle-product-handles-user-files-3}

<div style="font-size: 88%;">

- ⒶVivliostyleのサイト上に置かれたVivliostyle
    - ⓐ「利用者のWebサイト以外での使用を禁止」方式
        - 「利用者のWebサイト」ではないので🙅
    - ⓑ利用者がデザイン、開発、作成するページ以外を禁止方式
        - 「利用者がデザイン、開発、作成したWebサイト」ではないので🙅
    - ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式
        - 「Webサイトのデザイン制作」に該当し🙆
    - ⓒ-b「印刷物／利用者のWebサイトデザインを許諾」方式
        - 「利用者のWebサイト」ではないので🙅

</div>

# 置かれている場所ごとの<br/>Webフォント利用可否②

- Ⓑ自分のPC上のVivliostyle（localhost）
    - ⓐ「利用者のWebサイト以外での使用を禁止」方式
        - 「利用者のWebサイト」なので🙆
    - ⓑ利用者がデザイン、開発、作成するページ以外を禁止方式
        - 「利用者がデザイン、開発、作成したWebサイト」なので🙆
    - ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式
        - 「Webサイトのデザイン制作」に該当し🙆

# 置かれている場所ごとの<br/>Webフォント利用可否②

- Ⓒ自分のPC上のVivliostyle（fileプロトコル）
    - ⓐ「利用者のWebサイト以外での使用を禁止」方式
        - そもそも「Webサイト」ではないので🙅
    - ⓑ利用者がデザイン、開発、作成するページ以外を禁止方式
        - そもそも「Webサイト」ではないので🙅
    - ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式
        - 「Webサイトのデザイン制作」に該当し🙆

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
