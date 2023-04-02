import gulp from 'gulp'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import htmlmin from 'gulp-htmlmin'
import concat from 'gulp-concat'
import del from 'del'
import imagemin from 'gulp-imagemin'
import size from 'gulp-size'
import newer from 'gulp-newer'
import browsersync from 'browser-sync'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import include from 'gulp-include'

import webpackStream from 'webpack-stream'

// Пути к изначальным файлам и файлам назначения
export const paths = {
    html: {
        src: 'src/*.html',
        dest: 'main-page'
    },
    styles: {
        src: ["src/styles/**/*.sass", "src/styles/**/*.scss", "src/styles/**/*.less"],
        src: ["src/styles/**/*.sass"],
        dest: "main-page/css"
    },
    scripts: {
        src: "src/scripts/**/*.js",
        dest: "main-page/scripts/js"
    },
    images: {
        src: "src/img/**",
        dest: "main-page/img"
    },
    fonts: {
        src: "src/fonts/**",
        dest: "main-page/fonts"
    },

}



// Очистка каталога
export function clean() {
    return del(['main-page/**', '!main-page/img', '!main-page/vue', '!main-page/fonts']) // !dist/img исключаем из удаления каталог img
}


export function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
}

export function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browsersync.stream())
}

// Задача для обработки стилей
export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        // .pipe(less())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: "main",
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.stream())
}

//Задача для обработки скриптов
export function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(webpackStream({
            mode: 'production',
            entry: {
                main: './src/scripts/index.js',
                greenbook: './src/scripts/greenbook_db.js',
                swiper: './src/scripts/Sliders/swiper-bundle.min.js',
                slider: './src/scripts/Sliders/sliders.js',
            },
            output: {
                filename: '[name].min.js',
            },
            //   devtool: 'source-map',
        }))
        // .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))

}


//Для сжжатия изображений
export function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.images.dest))
}

// Отслеживание изменений
export function watch() {
    browsersync.init({
        server: {
            baseDir: "./main-page/"
        }
    })
    gulp.watch(paths.html.dest).on('change', browsersync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, img)
}

export const build = gulp.series(fonts, clean, html, gulp.parallel(styles, scripts, img, fonts), watch)

export default build
