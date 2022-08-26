const mix = require('laravel-mix');

mix.setPublicPath('./dist')
    .copy('public/icons/jsonld-logo-16x16.png', 'dist/icons/jsonld-logo-16x16.png')
    .copy('public/icons/jsonld-logo-24x24.png', 'dist/icons/jsonld-logo-24x24.png')
    .copy('public/icons/jsonld-logo-32x32.png', 'dist/icons/jsonld-logo-32x32.png')
    .copy('public/icons/jsonld-logo-48x48.png', 'dist/icons/jsonld-logo-48x48.png')
    .copy('public/icons/jsonld-logo-128x128.png', 'dist/icons/jsonld-logo-128x128.png')
    .sass('src/styles/main.scss', 'dist/css')
    .sass('src/styles/font.scss', 'dist/css')
    .sass('src/styles/button.scss', 'dist/css')
    .sass('src/styles/format.scss', 'dist/css')
    .ts('src/ts/background.ts', 'dist/js')
    .ts('src/ts/popup.ts', 'dist/js').vue()
    .options({
        processCssUrls: false
    });