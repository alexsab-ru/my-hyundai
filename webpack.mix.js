let mix = require('laravel-mix');

// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyPlugin = require('copy-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// mix.webpackConfig({
//     plugins: [
// 	    new CopyPlugin({
// 	    	patterns: [
// 		    	{ from: "src/img", to: "img/" },
// 	    	],
// 	    	options: {
// 	    		concurrency: 100,
// 	    	},
// 	    }),
//         new ImageminPlugin({
//             test: /\.(jpg|jpeg|png|gif|svg)$/i,
//             optipng: {
//             	optimizationLevel: 9
//             },
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 70,
// 			        progressive: true
//                 })
//             ]
//         })
//     ]
// });

require('mix-tailwindcss');

mix
	.js('src/js/app.js', 'js/scripts.js')
	.sass('src/sass/main.sass', 'css/styles.css')
	.tailwind()
	.setPublicPath('dist/');

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({ 
		server: {
			baseDir: "./",
		},
		files: ['index.html', 'dist/css/styles.css', 'dist/js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();