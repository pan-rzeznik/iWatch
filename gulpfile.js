const gulp = require('gulp'),
      sass = require ('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCss = require('gulp-clean-css'),
      sourceMap = require('gulp-sourcemaps'),
      browserSync = require('browser-sync');



const SRC = {
    directly: './src',
    sass: './src/scss/main.scss',
    allSass: './src/scss/*.scss',
    css: './src/css',
    index: './src/index.html',
    js: './src/js/index.js'
}

const DIST = {
    directly: './dist',
    css: './dist/css',
    js: './dist/js'
}


function style(){
    return gulp.src(SRC.sass)
    .pipe(sourceMap.init({loadMaps: true}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourceMap.write())
    .pipe(gulp.dest(SRC.css))
}

function stylePROD(){
    return gulp.src(SRC.sass)
    .pipe(sourceMap.init({loadMaps: true}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleanCss())
    .pipe(sourceMap.write())
    .pipe(gulp.dest(DIST.css))
}

function htmlPROD(){
    return gulp.src(SRC.index)
    .pipe(gulp.dest(DIST.directly))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: SRC.directly
        },
        port: 8080,
        online: true,
        tunnel: false,
        logLevel: "debug"
    })
    gulp.watch(SRC.allSass, style)
    gulp.watch(SRC.index).on('change', browserSync.reload);
    gulp.watch(`${SRC.directly}/css/*.css`).on('change', browserSync.reload);
}

function prod(){
    stylePROD();
    htmlPROD();
}

exports.prod = prod;
exports.style = style;
exports.watch = watch;
exports.stylePROD = stylePROD;
exports.htmlPROD = htmlPROD;