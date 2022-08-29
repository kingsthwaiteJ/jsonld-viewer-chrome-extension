const mix = require('laravel-mix');

mix.setPublicPath('./dist')
    .copy('public/icons/jsonld-logo-16x16.png', 'dist/icons/jsonld-logo-16x16.png')
    .copy('public/icons/jsonld-logo-24x24.png', 'dist/icons/jsonld-logo-24x24.png')
    .copy('public/icons/jsonld-logo-32x32.png', 'dist/icons/jsonld-logo-32x32.png')
    .copy('public/icons/jsonld-logo-48x48.png', 'dist/icons/jsonld-logo-48x48.png')
    .copy('public/icons/jsonld-logo-128x128.png', 'dist/icons/jsonld-logo-128x128.png')
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