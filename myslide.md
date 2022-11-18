---
title: Vivliostyle、もう一つのブルーオーシャン
---

# Vivliostyle<br/>もう一つのブルーオーシャン{.cover}

## 小形克宏

### 2022年11月20日<br/>Vivliostyle ユーザーと開発者の集い2022秋


# 本日のアジェンダ{#agenda}

- Vivliostyle.jsは組版エンジンです
- それと同時に、ライブラリです
- ライブラリはアプリを構成する部品です
- Vivliostyle.jsから、また別のアプリが作れるわけです
- つまり、Vivliostyleにはたくさんの未来があり得ます


# Vivliostyleといえば<br/>印刷用PDFの作成？{#preconception}

- 技術書典が近づくとVivliostyle CLIのダウンロードが増える
- 印刷用PDFの作成はVivliostyleのブルーオーシャン
- しかし、Vivliostyleの用途ってそれだけ？


# 9月に話題になったQiitaの記事{qiita#}

- [納品ドキュメントの作成に<br/>Markdown+Vivliostyleを採用した話](https://qiita.com/tommyecguitar/items/2d1817cc8a09c15ad43e)
    - 社内文書の共同編集／閲覧にVivliostyleを利用
    - ざっと趣旨を紹介→

# 納品ドキュメントの作成に<br/>Markdown+Vivliostyle①{#tommy-1}

- 社内文書にWordを使うデメリット
    - 共同編集すると、編集したところが消える
    - フォントやデザインがなぜか統一されない
    - セクションごとに担当を分けても、マージが手作業


# 納品ドキュメントの作成に<br/>Markdown+Vivliostyle②{#tommy-2}

- Markdownのメリット・デメリット
    - Markdownが使うことで執筆とデザインを分離できる
    - その一方で図版キャプション等、記法に限界がある



# 納品ドキュメントの作成に<br/>Markdown+Vivliostyle③{#tommy-3}

- Vivliostyleのメリット・デメリット
   - VFMなら図版キャプションができる
   - SCSSでスタイル指定できる
   - ページごとにスタイルを変えられる
   - PDF出力が簡単
   - しかし、tableにキャプションが入れられない

# 納品ドキュメントの作成に<br/>Markdown+Vivliostyle④{#tommy-4}

- 作者のとみー氏は10月開発者会議でさらに詳しく報告
    - [製造業でドキュメントをVivliostyleで運用した話](https://wwwimages2.adobe.com/content/dam/cc/jp/legal/servicetou/Adobe_Fonts_Additional_Terms_ja_JP_20200416.pdf)
- VivliostyleのSlackで公開しています

# ファーストマリンサービス(株)の活用事例①{#fms-1}

- 同社は国際輸送の船舶管理会社
- 同社が管理する船舶は世界中に散在している
- 海外運行中の船舶向け各種書類を、Vivliostyle Pubで作成


# ファーストマリンサービス(株)の活用事例②{#fms-2}

![同社のシステム](FMS-system.jpg)

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

