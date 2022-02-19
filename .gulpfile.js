// VARIABLES & PATHS
let preprocessor = 'sass', // Preprocessor (sass, scss, less, styl)
    fileswatch   = 'html,htm,txt,json,md,woff2,php', // List of files extensions for watching & hard reload (comma separated)
    pageversion  = 'html,htm,php', // List of files extensions for watching change version files (comma separated)
    imageswatch  = 'jpg,jpeg,png,webp,svg', // List of images extensions for watching & compression (comma separated)
    online       = true, // If «false» - Browsersync will work offline without internet connection
    basename     = require('path').basename(__dirname),
    forProd      = [
					'/**',
					' * @author Alexsab.ru',
					' */',
					''].join('\n');

const { src, dest, parallel, series, watch, task } = require('gulp'),
	sass           = require('gulp-sass')(require('sass')),
	cleancss       = require('gulp-clean-css'),
	concat         = require('gulp-concat'),
	browserSync    = require('browser-sync').create(),
	uglify         = require('gulp-uglify-es').default,
	autoprefixer   = require('gulp-autoprefixer'),
	newer          = require('gulp-newer'),
	rsync          = require('gulp-rsync'),
	del            = require('del'),
	connect        = require('gulp-connect-php'),
	header         = require('gulp-header'),
	notify         = require('gulp-notify'),
	rename         = require('gulp-rename'),
	merge          = require('merge-stream'),
	// version        = require('gulp-version-number'),
	// revAll         = require('gulp-rev-all'),
	{ spawn, exec } = require('child_process'),
	replace        = require('gulp-replace');

if(typeof projects == 'undefined') 
	global.projects = {};
if(typeof port == 'undefined') 
	global.port = 8100;


projects.my_hyundai = {

	port: ++port,

	base: basename,
	dest: basename,

	styles: {
		src:    basename + '/' + preprocessor + '/main.'+preprocessor,
		watch:  basename + '/' + preprocessor + '/**/*.'+preprocessor,
		dest:   basename + '/css',
		output: 'styles.min.css',
	},

	scripts: {
		src: [
			basename + '/js/common.js', // Custom scripts. Always at the end
		],
		dest:       basename + '/js',
		output:     'scripts.min.js',
	},

	code: {
		src: [
			basename  + '/**/*.{' + fileswatch + '}',
			'!' + basename + '/cars.json'
		],
	},

	forProd: [
		'/**',
		' * @author https://github.com/newstreetpunk',
		' * @editor https://github.com/alexsab',
		' */',
		''].join('\n'),
}


/* my_hyundai BEGIN */

// Local Server
function my_hyundai_browsersync() {
	connect.server({
		port: projects.my_hyundai.port,
		base: projects.my_hyundai.base,
	}, function (){
		browserSync.init({
			// server: { baseDir: projects.my_hyundai.base + '/' },
			proxy: '127.0.0.1:' + projects.my_hyundai.port,
			notify: false,
			online: online
		});
	});
};

// Custom Styles
function my_hyundai_styles() {
	return src(projects.my_hyundai.styles.src)
	.pipe(eval(preprocessor)({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(concat(projects.my_hyundai.styles.output))
	.pipe(autoprefixer({ grid: true, overrideBrowserslist: ['last 10 versions'] }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(dest(projects.my_hyundai.styles.dest))
	.pipe(browserSync.stream())

};

// Scripts & JS Libraries
function my_hyundai_scripts() {
	return src(projects.my_hyundai.scripts.src)
	.pipe(concat(projects.my_hyundai.scripts.output))
	.pipe(uglify()) // Minify js (opt.)
	.pipe(header(projects.my_hyundai.forProd))
	.pipe(dest(projects.my_hyundai.scripts.dest))
	.pipe(browserSync.stream())
};

function npx_tailwindcss() {

	console.log('npx tailwindcss -o '+ projects.my_hyundai.styles.dest +'/tailwind.css --jit --purge ' + projects.my_hyundai.code.src);
	// var build = exec('npx tailwindcss -o '+ projects.my_hyundai.styles.dest +'/tailwind.css --jit --purge ' + projects.my_hyundai.code.src);
	// build.on('change', browserSync.reload);
	// return build;
}

function my_hyundai_watch() {
	watch(projects.my_hyundai.styles.watch, my_hyundai_styles);
	watch(projects.my_hyundai.scripts.src, my_hyundai_scripts);
	watch(projects.my_hyundai.code.src).on('change', browserSync.reload);
};

exports.my_hyundai = parallel(my_hyundai_styles, my_hyundai_scripts, my_hyundai_browsersync, my_hyundai_watch);

/* my_hyundai END */