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
const plumber = require('gulp-plumber');

const SASS_DIR = 'src/sass/*.scss';
const JS_DIR = 'src/js/*.js';

gulp.task('sass', () => {
  return gulp.src(SASS_DIR)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: [
        '>1%',
        'last 2 versions',
      ],
    }))
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});

gulp.task('js', () => {
  return gulp.src(JS_DIR)
    .pipe(plumber())
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

gulp.task('zip', ['build', 'copy'], () => {
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

gulp.task('copy', () => {
  return gulp.src(['src/img*/**', 'src/font*/**'])
    .pipe(gulp.dest('assets'));
});

gulp.task('default', ['build', 'copy'], () => {
  livereload.listen();
  gulp.watch([SASS_DIR, JS_DIR], ['build']);
});
