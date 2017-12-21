const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

// Need to install LiveReload extension in the browser
const livereload = require('gulp-livereload');

const SOURCE_PATH = './assets/scss/**/*.scss';

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
    .pipe(concat('poppy.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/dist'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch(SOURCE_PATH, ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
