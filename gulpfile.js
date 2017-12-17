const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});