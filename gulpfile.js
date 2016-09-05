'use strict';

var gulp = require('gulp'),
    path = require('path');

// SASS
gulp.task('css', function () {
    return gulp
        .src([path.join('css', 'main.scss')])
        .pipe(require('gulp-sass')())
        .pipe(gulp.dest('css'));
});
