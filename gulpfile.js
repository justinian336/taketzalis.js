var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    react_babel = require('babel-preset-react');
    
gulp.task('default',function(){
    return browserify('./source/main.js')
            .transform(babelify,{presets:'react'})
            .bundle()
            .pipe(source('./build/taketzalis.js'))
            .pipe(gulp.dest('./source'));
});

gulp.task('watch',function(){
   gulp.watch('./source/main.js',['default']); 
});