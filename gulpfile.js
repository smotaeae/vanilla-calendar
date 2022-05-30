const glob = require('glob');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const TerserPlugin = require('terser-webpack-plugin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const strip = require('gulp-strip-css-comments');
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const del = require('del');
const FtpDeploy = require('ftp-deploy');
const {
	setDevelopmentEnvironment,
	setProductionEnvironment,
	isProduction,
	isDevelopment,
} = require('gulp-node-env');

//const ftp = require('./.ftp');

const paths = {
	src: 'src/*.*',
	dest: 'dest/',
	build: 'build/',
	npm: 'src/npm/**/*',
	fonts: {
		src: 'src/fonts/**/*.{woff,woff2}',
		dest: 'dest/fonts/',
	},
	img: {
		src: 'src/img/**/*.{png,jpg,jpeg,svg}',
		dest: 'dest/img/',
	},
	js: {
		watch: 'src/js/**/*.js',
		src: {
			catalog: 'src/js/',
			files: 'src/js/**/*.js',
			ignore: ['src/js/other/**/*.js'],
		},
		dest: 'dest/js/',
	},
	styles: {
		watch: 'src/styles/**/*.scss',
		src: ['src/styles/**/*.scss', '!src/styles/other/**/*.scss'],
		dest: 'dest/css/',
	},
};

function reload(done) {
	browserSync.reload();
	done();
}

function server(done) {
	browserSync.init({
		notify: false,
		ui: false,
		reloadDebounce: 1000,
		server: {
			baseDir: paths.dest,
		},
		snippetOptions: {
			rule: {
				match: /<head>/i,
				fn(snippet, match) {
					const {
						groups: { src },
					} = /src='(?<src>[^']+)'/u.exec(snippet);
					return `<script src="${src}" async></script>${match}`;
				},
			},
		},
	});
	done();
}


// function deploy() {
// 	return new FtpDeploy().deploy({
// 		user: ftp.user,
// 		password: ftp.password,
// 		host: ftp.host,
// 		port: ftp.port,
// 		remoteRoot: ftp.root,
// 		localRoot: paths.dest,
// 		include: ['.*', '*', '**/*'],
// 		exclude: ['.DS_Store'],
// 		deleteRemote: true,
// 		forcePasv: true,
// 		sftp: false,
// 	});
// }

// Tasks
function clean() {
	return del(['dest']);
}

function cleanBuild() {
	return del(['build']);
}

function other() {
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

function js(cb) {
	let count = 0;
	let total = 0;

	glob(paths.js.src.files, { ignore: paths.js.src.ignore }, (err, files) => {
		if (err) return;
		total = files.length;

		files.forEach((file) => {
			gulp.src(file)
				.pipe(webpackStream({
					mode: isDevelopment() ? 'development' : 'production',
					output: {
						filename: file.replace(paths.js.src.catalog, ''),
						library: 'my-library',
						libraryTarget: 'umd',
					},
					target: 'web',
					devtool: isDevelopment() ? 'inline-source-map' : false,
					performance: {
						hints: false,
					},
					optimization: {
						minimize: false,
					},
					module: isProduction() ? {
						rules: [
							{
								test: /\.(js|jsx)$/,
								exclude: /(node_modules)/,
								loader: 'babel-loader',
							},
						],
					} : {},
				}, webpack, () => {
					count += 1;

					if (count === total) {
						cb();
					}
				}))
				.pipe(gulp.dest(paths.js.dest));
		});
	});
}

function jsMinify(cb) {
	let count = 0;
	let total = 0;

	glob(paths.js.src.files, { ignore: paths.js.src.ignore }, (err, files) => {
		if (err) return;
		total = files.length;

		files.forEach((file) => {
			gulp.src(file)
				.pipe(webpackStream({
					mode: isDevelopment() ? 'development' : 'production',
					output: {
						filename: file.replace(paths.js.src.catalog, ''),
						library: 'my-library',
						libraryTarget: 'umd',
					},
					target: 'web',
					devtool: isDevelopment() ? 'inline-source-map' : false,
					performance: {
						hints: false,
					},
					optimization: {
						minimize: true,
						minimizer: [
							new TerserPlugin({
								parallel: true,
								extractComments: false,
								terserOptions: {
									format: {
										comments: false,
									},
								},
							}),
						],
					},
					module: isProduction() ? {
						rules: [
							{
								test: /\.(js|jsx)$/,
								exclude: /(node_modules)/,
								loader: 'babel-loader',
							},
						],
					} : {},
				}, webpack, () => {
					count += 1;

					if (count === total) {
						cb();
					}
				}))
				.pipe(rename({
					suffix: '.min',
				}))
				.pipe(gulp.dest(paths.js.dest));
		});
	});
}

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(gulpIf(isDevelopment(), sourcemaps.init()))
		.pipe(sass({
			includePaths: ['node_modules'],
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(gulpIf(isDevelopment(), sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest));
}

function stylesMinify() {
	return gulp.src(paths.styles.src)
		.pipe(gulpIf(isDevelopment(), sourcemaps.init()))
		.pipe(sass({
			includePaths: ['node_modules'],
			outputStyle: 'compressed',
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(gulpIf(isProduction(), strip({ preserve: false })))
		.pipe(csso({
			restructure: isProduction(),
			sourceMap: isDevelopment(),
		}))
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulpIf(isDevelopment(), sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest));
}

function npm() {
	return gulp.src(paths.npm)
		.pipe(gulp.dest(paths.build));
}

function copy() {
	return gulp.src(['dest/js/modules/*.js', 'dest/css/modules/*.css'])
		.pipe(gulp.dest(paths.build));
}

function watch() {
	gulp.watch(paths.src, gulp.series(other, reload));
	gulp.watch(paths.js.watch, gulp.series(gulp.parallel(js, jsMinify), reload));
	gulp.watch(paths.styles.watch, gulp.series(gulp.parallel(styles, stylesMinify), reload));
}

const dest = gulp.series(clean, gulp.parallel(other, fonts, img), gulp.parallel(styles, stylesMinify), gulp.parallel(js, jsMinify));
const build = gulp.series(cleanBuild, dest, npm, copy);
const start = gulp.series(dest, gulp.parallel(server, watch));

exports.clean = clean;
exports.dest = gulp.series(setDevelopmentEnvironment, dest);
exports.build = gulp.series(setProductionEnvironment, build);
exports.start = gulp.series(setDevelopmentEnvironment, start);
exports.watch = gulp.series(setDevelopmentEnvironment, watch);
//exports.ftp = deploy;
exports.js = js;
exports.copy = copy;

exports.default = build;
