'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');
    var jshint = require('gulp-jshint');
    var autoprefix = require('gulp-autoprefixer');
    var concat = require('gulp-concat');
    var minifyCSS = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');

    gulp.task('browser-sync', function () {
        var files = [
           './*.html',
           './css/*.css',
           './images/*.{png,jpg,gif, jpeg}',
           './js/*.js'
        ];
     
        browserSync.init(files, {
           server: {
              baseDir: "./"
           }
        });
     
     });

     gulp.task('styles', function() {
        gulp.src(['css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
     });
     
     
     // Images
    gulp.task('imagemin', function() {
    return gulp.src('images/*.{png,jpg,gif, jpeg}')
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('dist/images'));
  });

    // Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('*.html')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});



     // Default task
     gulp.task('default', ['browser-sync'], function() {
  
     });

      
      gulp.task('build',['imagemin', 'styles'], function() {});