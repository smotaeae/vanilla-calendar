const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const FtpDeploy = require('ftp-deploy');

const ftp = require('./.ftp');

const paths = {
	src: 'src/*.*',
	dest: 'build/',
	fonts: {
		src: 'src/fonts/**/*.{woff,woff2}',
		dest: 'build/fonts/',
	},
	img: {
		src: 'src/img/**/*.{png,jpg,jpeg,svg}',
		dest: 'build/img/',
	},
	js: {
		src: 'src/js/**/*.js',
		dest: 'build/js/',
	},
	styles: {
		src: 'src/styles/**/*.scss',
		dest: 'build/css/',
	},
};

function clean() {
	return del(['build']);
}

function files() {
	return gulp.src(paths.src)
		.pipe(gulp.dest(paths.dest));
}

function fonts() {
	return gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dest));
}

function img() {
	return gulp.src(paths.img.src)
		.pipe(gulp.dest(paths.img.dest));
}

function js() {
	return gulp.src(paths.js.src)
		.pipe(babel())
		.pipe(gulp.dest(paths.js.dest));
}

function jsMinify() {
	return gulp.src(paths.js.src)
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest(paths.js.dest));
}

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(gulp.dest(paths.styles.dest));
}

function stylesMinify() {
	return gulp.src(paths.styles.src)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest(paths.styles.dest));
}

function watch() {
	gulp.watch(paths.src, files);
	gulp.watch(paths.js.src, gulp.parallel(js, jsMinify));
	gulp.watch(paths.styles.src, gulp.parallel(styles, stylesMinify));
}

function deploy() {
	return new FtpDeploy().deploy({
		user: ftp.user,
		password: ftp.password,
		host: ftp.host,
		port: ftp.port,
		remoteRoot: ftp.root,
		localRoot: paths.dest,
		include: ['.*', '*', '**/*'],
		exclude: ['.DS_Store'],
		deleteRemote: true,
		forcePasv: true,
		sftp: false,
	});
}

const clear = gulp.series(clean);
const build = gulp.series(clean, gulp.parallel(files, fonts, img), gulp.parallel(js, jsMinify), gulp.parallel(styles, stylesMinify));
const start = gulp.series(build, watch);

exports.clear = clear;
exports.watch = watch;
exports.build = build;
exports.start = start;
exports.ftp = deploy;

exports.default = build;
