const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const SASS_DIR = 'scss/*.scss';
const JS_DIR = 'js/*.js';

gulp.task('sass', () => {
  return gulp.src(SASS_DIR)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: [
        '>1%',
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
    .pipe(gulp.dest('assets'))
    .pipe(livereload());
});

gulp.task('js', () => {
  return gulp.src(JS_DIR)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(livereload());
});

gulp.task('build', ['sass', 'js']);

gulp.task('zip', ['build'], () => {
  const themeName = require('./package.json').name;
  const filename = themeName + '.zip';

  return gulp.src([
    '**',
    '!node_modules', '!node_modules/**',
    '!dist', '!dist/**',
  ])
    .pipe(zip(filename))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'], () => {
  livereload.listen();
  gulp.watch([SASS_DIR, JS_DIR], ['build']);
});
