---
title: VivliostyleでWebフォントを使う：調査編
---

# Vivliostyleで<br/>Webフォントを使う：調査編 {.cover}

## 小形克宏<br/>2022年4月23日<br/>Vivliostyle ユーザーと開発者の集い

# ToC {.toc hidden}

1. {}
2. {}
3. {}
4. {}
5. {}
6. {}
7. {}
8. {}
9. {}
10. {}
11. {}
12. {}

# Webフォントサービスと<br/>フォントファウンダリー①

- SCREENホールディングス
    - REALTYPE（リアルタイプ）
    - TypeSquare（モリサワ）
    - FONTPLUS（SBテクノロジー）
    - fonts.com（Monotype）

# Webフォントサービスと<br/>フォントファウンダリー②

- 大日本印刷
    - REALTYPE（リアルタイプ）
    - TypeSquare（モリサワ）
    - FONTPLUS（SBテクノロジー）
    - Adobe Fonts（アドビ）

# Webフォントサービスと<br/>フォントファウンダリー③

- 字游工房
    - TypeSquare（モリサワ）
    - Adobe Fonts（アドビ）
- ダイナコムウェア
    - Dyna Font Online（ダイナコムウェア）

→フォントファウンダリー＝Webフォントサービスではない

# Webフォントを読み込む方法

- ①@font-face
     - サーバに置いたフォントを読み込む
- ②@import／link要素
    - サーバに置いたスタイルシートを読み込む
- ③script要素
    - JavaScriptでフォントのサブセットを動的に生成し読み込む

# Webフォントサービスごとの読み込み方法

- FONTPLUS（SBテクノロジー）③
- TypeSquare（モリサワ）③
- fonts.com（Monotype）②
- DynaFontOnline（ダイナコムウェア）②③
- REALTYPE（リアルタイプ）③
- Google Fonts（Google）②

# Webフォントサービスの<br/>利用規約

- **ⓐ利用者のWebサイト以外での使用を禁止**→FONTPLUS、TypeSquare、fonts.com、REALTYPE
- **ⓑ利用者がデザイン、開発、作成するWebページコンテンツ以外での使用を禁止**→Adobe Fonts
- **ⓒ印刷物の制作、Webサイトのデザイン制作、電子書籍で使用を許諾**→DynaSmart V
- **ⓓ印刷物の制作や、利用者自身のWeb サイトのデザイン制作を許諾**→DynaSmart T

# 「利用者のWebサイト以外での使用を禁止」の問題点①

- 「利用者のWebサイト」の定義が曖昧
   - たとえば作成者と所有者が分離している場合
    - Webデザイナーが制作するWebサイト
    - 「利用者」はWebデザイナーかサイト所有者か？

# 「利用者のWebサイト以外での使用を禁止」の問題点②

- ⓐの利用規約では解決不能
    - そこでドメインを登録してもらい「利用者」を特定
    - →利用規約というより運用によって解決
- ⓑは利用規約で利用者の範囲を明確化した
    - →Webデザイナーを対象とするサービスゆえに明確化した？

# 「利用者のWebサイト以外での使用を禁止」の問題点③

- ⓒはローカルフォントにWebフォントサービスが付帯
    - →だから利用規約にローカルフォントとWebフォントの区別がない

# Vivliostyle各プロダクトが<br/>ユーザファイルを扱う仕組み①

- Ⓐネット上の任意のURLから読み込む（オンライン）→「利用者のWebサイト」ではない
    - Vivliostyle Viewer https://vivliostyle.org/viewer/
    - Vivliostyle Pub https://vivliostyle-pub-develop.vercel.app
    - Vivliostyle CLI buildの際、ファイルのURLを指定可能

# Vivliostyle各プロダクトが<br/>ユーザファイルを扱う仕組み②

- Ⓑhttp://localhost から読み込む（ローカル）→まさに「利用者のWebサイト」
    - Vivliostyle Viewer 
    - Vivliostyle CLI

# Vivliostyle各プロダクトが<br/>ユーザファイルを扱う仕組み③

- Ⓒfile:// から読み込む（ローカル）→そもそもWebサイトではない
    - Vivliostyle CLI

# Vivliostyleで利用できる<br/>Webフォントサービス①

- 基本的には契約者間で決めること
- 第三者であるVivliostyleが利用保証はできない
- 以下に示すのは、ユーザの便宜をはかるため、各社と会話した上で独自に判断したもの
- 私達が推奨した場合でも、個別に問い合わせて確認してほしい

# Vivliostyleで利用できる<br/>Webフォントサービス②

- 凡例
   - ○……推奨
   - ×……利用規約外の可能性が高い

# Vivliostyle CLI①

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- Ⓑhttp://localhost でプレビュー
    - ○……DynaSmart V、DynaSmart T、TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
    - ×……なし
- Ⓒfile:// でプレビュー
    - ○……DynaSmart V

# Vivliostyle CLI②

- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Viewer①

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- Ⓑhttp://localhost でプレビュー
    - ○……DynaSmart V、DynaSmart T、TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
    - ×……なし

# Vivliostyle Viewer②

- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts
- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Pub①

- Ⓐネット上の任意のURLでプレビュー
    - ○……DynaSmart V、DynaSmart T、FONTPLUS（すべて登録サイトのみ可）
    - ×……TypeSquare、fonts.com、Adobe Fonts
- PDFの出力とオフセット印刷
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts

# Vivliostyle Pub②

- PDFやその印刷物の有償販売
    - ○……DynaSmart V、DynaSmart T（http://localhost の場合のみ可）
    - ×……TypeSquare、fonts.com、FONTPLUS、Adobe Fonts


