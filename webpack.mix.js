let mix = require('laravel-mix');

require('laravel-mix-serve');

require('mix-tailwindcss');

mix
	.js('src/js/app.js', 'js/scripts.js')
	.sass('src/sass/hyundai.sass', 'css/hyundai.css')
	.sass('src/sass/renault.sass', 'css/renault.css')
	.tailwind()
	.setPublicPath('/')
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
		files: ['**.html', '**.php', 'css/*.css', 'js/scripts.js'],
		// server: { baseDir: "./", },
		notify: false
	});
}

mix.disableSuccessNotifications();