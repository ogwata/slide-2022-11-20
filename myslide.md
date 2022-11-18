---
title: Vivliostyle、もう一つのブルーオーシャン
---

# Vivliostyle<br/>もう一つのブルーオーシャン{.cover}

## 小形克宏

### 2022年11月20日<br/>Vivliostyle ユーザーと開発者の集い2022秋


# 2. 本日のアジェンダ{#agenda}

- Vivliostyle.jsはライブラリです
- その用途は思われているよりずっと多様です


# 3. Vivliostyleといえば印刷用PDFの作成？{#preconception}

- 技術書典が近づくとVivliostyle CLIのダウンロードが増える
- 印刷用PDFの作成はVivliostyleのブルーオーシャン
- しかし、Vivliostyleの用途ってそれだけ？


# Webフォントを読み込む方法{#}

- ①@font-face
     - サーバに置いたフォントを読み込む
- ②@import／link要素
    - サーバに置いたスタイルシートを読み込む
- ③script要素
    - JavaScriptでフォントのサブセットを動的に生成し読み込む

→Vivliostyle.jsはすべての方式に対応ずみ

# Webフォントサービスごとの読み込み方法{#}

- FONTPLUS（SBテクノロジー）③
- TypeSquare（モリサワ）③
- fonts.com（Monotype）②
- DynaFont Online（ダイナコムウェア）②③
- REALTYPE（リアルタイプ）③
- Google Fonts（Google）②

JavaScript方式を採用しないのはfonts.comとGoogle Fontsのみ

# 利用規約からみた<br/>Webフォントサービスの3類型{#}

- ⓐ…「利用者のWebサイト以外での使用を禁止」方式
- ⓑ…「利用者がデザイン、開発、作成するWebサイト以外を禁止」方式
- ⓒ…「印刷物／Webサイトデザイン／電子書籍を許諾」方式
    - ⓒ-b…「印刷物／利用者のWebサイトデザインを許諾」方式

→ⓑはAdobe Fonts、ⓒはダイナコムウェア、ⓐはそれ以外全部

# ⓐ「利用者のWebサイト以外での使用を禁止」方式{#}

- [FONTPLUS](https://fontplus.jp/terms)、[TypeSquare](https://typesquare.com/ja/privacy/rule)、[fonts.com](https://www.fonts.com/info/legal/eula/pay-once)、[REALTYPE](https://info.realtype.jp/terms/%e5%88%a9%e7%94%a8%e8%a6%8f%e7%b4%84/)
- 実際には「利用者のWebサイト」の定義が曖昧
   - たとえば作成者と所有者が分離している場合
        - Webデザイナーが制作するWebサイト
        - 「利用者」はWebデザイナーかサイト所有者か？
    - そこでドメインを登録してもらい「利用者」を特定
        - つまり利用規約＋その運用によって問題を解決

# ⓑ利用者がデザイン、開発、作成するWebサイト以外を禁止方式{#}

- [Adobe Fonts](https://wwwimages2.adobe.com/content/dam/cc/jp/legal/servicetou/Adobe_Fonts_Additional_Terms_ja_JP_20200416.pdf)
- 「利用者のWebサイト以外での使用を禁止」方式の修正版
- 利用者の**使途**を定義することで許諾範囲を明確化
    - 単に「利用者のWebサイト」ではなく「利用者がデザイン、開発、作成するWebサイト」と使途を明確化
        - ドメイン登録はなし
    - →Dreamweaverで仕事をする人（クリエイター）のための利用規約

# ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式{#}



- [DynaSmartV](https://www.dynacw.co.jp/FileUpload/Portals/file/DynaSmart/DynaSmartV-license.pdf)に付帯するDynaFont Online
    - ローカルフォント年間ライセンスにWebフォントサービスが付帯している 
        - ローカルフォントとWebフォントが同じ利用規約
        - ローカルフォントと同じ許諾範囲でWebフォントが使える
- **ⓒ-b「印刷物／利用者のWebサイトデザインを許諾」方式**
    - [DynaSmartT](https://www.dynacw.co.jp/FileUpload/Portals/file/DynaSmart/DynaSmartT-license.pdf)に有償オプションでDynaFont Onlineが利用可能
    - ⓒと同じ構造だが、範囲を絞っている

</div>

# Vivliostyleで利用できる<br/>Webフォントサービス{#}

- 基本的には契約者間で決めること
- 第三者であるVivliostyleが利用保証はできない
- 以下に示すのは、ユーザの便宜をはかるため、各社と会話した上で独自に判断したもの
- 私達が推奨した場合でも、個別に問い合わせて確認してほしい
- 凡例
   - 🙆……推奨
   - 🙅……利用規約外の可能性が高い

# Vivliostyleプロダクトの2類型{#}

プログラムが置かれる場所によって2種類に分類できる

- **ⒶVivliostyleのサイト上に置かれたVivliostyle**
    - Vivliostyle Pub https://vivliostyle-pub-develop.vercel.app
    - Vivliostyle Viewer https://vivliostyle.org/viewer/
- **Ⓑ自分のPC上のVivliostyle（http://localhost）**
    - Vivliostyle Viewer 
    - Vivliostyle CLI

# 置かれる場所ごとの<br/>Webフォント利用可否①{#}

<div style="font-size: 88%;">

- **ⒶVivliostyleのサイト上に置かれたVivliostyle**
    - ⓐ「利用者のWebサイト以外での使用を禁止」方式
        - 「利用者のWebサイト」でないので🙅
    - ⓑ利用者がデザイン、開発、作成するページ以外を禁止方式
        - 「利用者がデザイン、開発、作成したWebサイト」でないので🙅
    - ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式
        - 「Webサイトのデザイン制作」なので🙆
    - ⓒ-b「印刷物／利用者のWebサイトデザインを許諾」方式
        - 「利用者のWebサイト」でないので🙅

</div>

# 置かれる場所ごとの<br/>Webフォント利用可否②{#}

<div style="font-size: 90%;">

- **Ⓑ自分のPC上のVivliostyle（http://localhost）**
    - ⓐ「利用者のWebサイト以外での使用を禁止」方式
        - 「利用者のWebサイト」なので🙆
    - ⓑ利用者がデザイン、開発、作成するページ以外を禁止方式
        - 「利用者がデザイン、開発、作成したWebサイト」なので🙆
    - ⓒ「印刷物／Webサイトデザイン／電子書籍を許諾」方式
        - 「Webサイトのデザイン制作」なので🙆
    - ⓒ-b「印刷物／利用者のWebサイトデザインを許諾」方式
        - 「利用者のWebサイト」なので🙆

</div>

# プロダクトごとの利用可否①{#}



# プロダクトごとの利用可否②{#}





※……localhostでのみ利用可、Vivliostyleのサイトでは不可



# プロダクトごとの利用可否③{#}


※……FONTPLUSは「利用者のWebサイト以外での使用を禁止」方式だが、ブログと同じと解釈しプレビューのみ🙆　ただし、PDF出力等については要問い合わせ



# 謝辞

## この発表における和文書体は<br/>下記Webフォントサービスを利用しました

- [Dyna Font Online（ダイナコムウェア）／ＤＦ金剛黒体 Pro-6N Medium](https://www.dynacw.co.jp/king/)




**ありがとうございました**

