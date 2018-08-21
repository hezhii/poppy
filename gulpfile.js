const gulp = require('gulp');
const webpack = require('webpack');
const zip = require('gulp-zip');

const webpackConfig = require('./build/webpack.prod');

gulp.task('webpack', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw err;
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n');

    callback();
  });
});

gulp.task('zip', ['webpack'], () => {
  const packageJson = require('./package.json');
  const filename = `${packageJson.name}-${packageJson.version}.zip`;

  return gulp.src([
    '**',
    '!node_modules', '!node_modules/**',
    '!dist', '!dist/**',
    '!build', '!build/**',
    '!src', '!src/**',
    '!yarn.lock',
  ])
    .pipe(zip(filename))
    .pipe(gulp.dest('dist'));
});