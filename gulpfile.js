const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
    require('./config/env')('test');
    runTest();
});

gulp.task('prod', function(){
    require('./config/env')('prod');
    runTest();
});

function runTest() {
    return gulp
        .src(['test/*.js'], {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
}