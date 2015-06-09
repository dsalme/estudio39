(function () {
  'use strict';
  var gulp = require('gulp');
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');

  gulp.task('default', ['concat', 'minify']);

  gulp.task('concat', function(){
    gulp.src(['./app/app.js','./app/*/*.js', './app/*/*/*.js', './app/*/*/*/*.js'])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('concat'));
  });

  gulp.task('minify', function(){
    gulp.src('concat/all.js')
      .pipe(uglify())
      .pipe(gulp.dest('min'));
  })
})();