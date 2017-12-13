const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist'));
});