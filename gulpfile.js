/* global require: true, __dirname: true */

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var path = require('path');

gulp.task('styles', function () {
  gulp.src('./src/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(prefix('last 1 version'))
    .pipe(gulp.dest('./'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
  gulp.src('./src/*.less')
    .pipe(watch({ emit: 'all' }, function(files) {
      gulp.run('styles');
    }));
});
