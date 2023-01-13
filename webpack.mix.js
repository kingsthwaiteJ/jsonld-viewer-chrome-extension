const mix = require('laravel-mix');

mix.setPublicPath('./dist')
    .copy('public/icons', 'dist/icons')
    // .copy('src/_locales', 'dist/_locales')
    .copy('src/manifest.json', 'dist/manifest.json')
    .copy('src/onboarding.html', 'dist/onboarding.html')
    .copy('src/popup.html', 'dist/popup.html')
    .sass('src/styles/styles.scss', 'dist/css')
    .ts('src/ts/background.ts', 'dist/js')
    .ts('src/ts/popup.ts', 'dist/js').vue()
    .options({
        processCssUrls: false
    });

mix.minify('dist/js/popup.js');
mix.minify('dist/js/background.js');
mix.minify('dist/css/styles.css');