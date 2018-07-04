const gulpfile = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');

gulpfile.task('sass', function() {
  return gulpfile.src('assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
      ],
    }))
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulpfile.dest('assets/built'))
    .pipe(livereload());
});

gulpfile.task('build', ['sass'], () => {
  return livereload.listen(1234);
});

gulpfile.task('zip', ['sass'], function() {
  const themeName = require('./package.json').name;
  const filename = themeName + '.zip';

  return gulpfile.src([
    '**',
    '!node_modules', '!node_modules/**',
    '!dist', '!dist/**',
  ])
    .pipe(zip(filename))
    .pipe(gulpfile.dest('dist'));
});

gulpfile.task('default', ['build'], () => {
  gulpfile.watch('assets/scss/*.scss', ['sass']);
});
