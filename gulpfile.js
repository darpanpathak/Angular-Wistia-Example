var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js', 'src/**/*.js'];
var nodemon = require('nodemon');

gulp.task('serve', function () {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3005
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Hey restarting ....');
        });
});