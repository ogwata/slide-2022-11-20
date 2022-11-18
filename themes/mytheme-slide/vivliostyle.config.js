module.exports = {
  language: 'ja',
  theme: 'themes/mytheme-slide/theme_common.css',
  entry: ['example/slide.md'],
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
