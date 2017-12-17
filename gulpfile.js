const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');

gulp.task('sass', () => {
  return gulp.src('./assets/scss/*.scss')
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
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});