const mix = require('laravel-mix');

mix.setPublicPath('./dist')
    .sass('src/styles/main.scss', 'dist/css')
    .sass('src/styles/font.scss', 'dist/css')
    .sass('src/styles/button.scss', 'dist/css')
    .sass('src/styles/format.scss', 'dist/css')
    .ts('src/ts/background.ts', 'dist/js')
    .ts('src/ts/popup.ts', 'dist/js').vue()
    .options({
        processCssUrls: false
    });