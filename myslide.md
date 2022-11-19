---
title: Vivliostyle、もう一つのブルーオーシャン
---

# Vivliostyle<br/>もう一つのブルーオーシャン{.cover}

## 小形克宏

### 2022年11月20日<br/>Vivliostyle ユーザーと開発者の集い2022秋


# 本日のアジェンダ{#agenda}

- Vivliostyle.jsはライブラリです
- つまりVivliostyle.jsから、新たなアプリが作れます
- Vivliostyleは思われている以上の、たくさんの未来があります
- あなたがそれを作りさえすれば


# Vivliostyleといえば<br/>印刷用PDF作成{#preconception}

- 技術書典が近づくとVivliostyle CLIのダウンロードが増える
- Vivliostyleにとって印刷用PDF作成はブルーオーシャン
- しかし、Vivliostyleの用途はそれだけ？


# 社内文書の共同編集の事例{#tommy-1}

<div style="font-size: 96%;">

- 9月に話題になったQiitaの記事 
- [納品ドキュメントの作成にMarkdown+Vivliostyleを採用した話](https://qiita.com/tommyecguitar/items/2d1817cc8a09c15ad43e)
    - 社内文書の共同編集／閲覧にVivliostyleを利用
    - ざっとその趣旨を紹介→

</div>

# WordとMarkdownの比較{#tommy-2}

- **Wordの困ったところ**
    - 共同編集すると、編集したところが消える
    - フォントやデザインがなぜか統一されない
    - セクションごとに担当を分けても、マージが手作業
- **Markdownを使うとよいが、デメリットも**
    - 執筆とデザインを分離できる
    - マージするのにGitHub（ブランチ）を使える
    - その一方で図版キャプション等、記法に限界がある

# そこでVivliostyleを使ったら{#tommy-3}

- **Vivliostyleのメリット・デメリット**
    - （Markdownのメリットに加えて）
    - VFMなら図版キャプションが使える
    - SCSSでスタイル指定できる
    - ページごとにスタイルを変えられる
    - PDF出力が簡単
    - しかし、表にキャプションが入れられない
- **10月開発者会議で作者のとみー氏がさらなる詳細を報告**
    - →[製造業でドキュメントをVivliostyleで運用した話](https://wwwimages2.adobe.com/content/dam/cc/jp/legal/servicetou/Adobe_Fonts_Additional_Terms_ja_JP_20200416.pdf)
    - VivliostyleのSlackで公開中


# ファーストマリンサービス(株){#fms-1}

- 同社は国際輸送の船舶管理会社
- 海外運行中の船舶向け書類をVivliostyle Pubで共同編集
- 現在まで300本以上の文書をVivliostyle Pubで作成

<div style="text-align:center">

![キャプションです](FMS-system.jpg){width=45%}

</div>

# {#fms-2}

![](FMS_sample-b.png){width=55% margin:auto;}

# 日本語の文書も{#fms-3}

![](FMS_sample-c.png){width=50% margin:auto;}





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

