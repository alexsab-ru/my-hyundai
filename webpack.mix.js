let mix = require('laravel-mix');

require('laravel-mix-serve');

require('mix-tailwindcss');

mix
	.js('src/js/app.js', 'js/scripts.js')
	.sass('src/sass/main.sass', 'css/styles.css')
	.tailwind()
	// .setPublicPath('dist/');
	.serve('php -S 127.0.0.1:8080 -t ./', {
		verbose: true,
		watch: true,
		dev: true,
	});

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		proxy: '127.0.0.1:8080',
		files: ['**.html', '**.php', 'css/styles.css', 'js/scripts.js'],
		// server: { baseDir: "./", },
		// files: ['index.html', 'css/styles.css', 'js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();