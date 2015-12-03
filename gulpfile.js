var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', function() {
  return gulp.src('app/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('default', ['static:dev', 'build:dev']);
