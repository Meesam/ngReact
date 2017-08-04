
var gulp = require('gulp');
const babel = require('gulp-babel');
var react = require('gulp-react');
var rollup = require('gulp-rollup');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');


gulp.task('transple', () => {
  return gulp.src('*.jsx')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('react', function(){
  return gulp.src('*.jsx')
    .pipe(react())
    .pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('browserify-client', function() {
  return gulp.src('.tmp/scripts/*.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('default',['react'] );