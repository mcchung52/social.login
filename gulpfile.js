'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var gutil = require('gulp-util');
var run = require('gulp-run');
var concat = require('gulp-concat');

var paths = {
  filesrc: './source/**/*',
  codesrc: './source/**/*.js',
  htmlsrc: './source/**/*.html',
  dest: './public'
}

gulp.task('default', ['build', 'watch']);

gulp.task('watch', function(){
  gulp.watch(paths.filesrc, ['build']);
});

//gulp.task('build', ['clean', 'bower', 'buildjs', 'buildhtml']);

gulp.task('build', ['clean', 'bower'], function(){
  gulp.src(paths.filesrc)
    .pipe(gulp.dest(filedest))

});

gulp.task('clean', function(cb){
  rimraf(paths.dest, cb);
});

gulp.task('bower', function(cb){
  run('bower i').exec(cb);
});