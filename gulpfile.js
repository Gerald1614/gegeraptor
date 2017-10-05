'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');
    var autoprefix = require('gulp-autoprefixer');
    var concat = require('gulp-concat');
    var minify = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var changed = require('gulp-changed');
    var htmlmin = require('gulp-htmlmin');

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
     
     gulp.task('minifyhtml', function() {
        return gulp.src('*.html')
          .pipe(htmlmin({collapseWhitespace: true}))
          .pipe(gulp.dest('dist'));
      });

     // Images
    gulp.task('imagemin', function() {
        gulp.src('images/*.{png,jpg,gif,jpeg}')
        .pipe(changed('dist/images'))
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/images'));
        });

    // Concatenate  JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('portfolio.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function(){
    gulp.src('css/*.css')
    .pipe(concat('customcss.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css/'));
 });

     // Default task
     gulp.task('default', ['browser-sync', 'imagemin', 'scripts', 'css' ], function() {
           
     });

      
      gulp.task('build',['imagemin', 'scripts', 'css','minifyhtml'], function() {});