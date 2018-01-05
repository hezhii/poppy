const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const del = require('del');
const rename = require('gulp-rename');

// Need to install LiveReload extension in the browser
const livereload = require('gulp-livereload');

const SOURCE_PATH = './assets/scss/poppy.scss';

gulp.task('clean', function () {
  return del(['assets/dist/**']);
});

gulp.task('sass', () => {
  return gulp.src(SOURCE_PATH)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR'
      ],
      flexbox: 'no-2009',
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/dist'))
    .pipe(livereload());
});

gulp.task('build', ['clean', 'sass']);

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch(SOURCE_PATH, ['sass']);
});

gulp.task('dev', ['build', 'sass:watch']);

gulp.task('default', ['build']);
