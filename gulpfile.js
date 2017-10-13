const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

gulp.task('test', function () {
    require('./test/config/env')('test');
    runTest();
});

gulp.task('prod', function () {
    require('./test/config/env')('prod');
    runTest();
});

function runTest() {
    return gulp
        .src(['test/*.js'], {read: false})
        .pipe(mocha({
            reporter: 'mochawesome',
            reporterOptions: {
                reportDir: 'customReportDir',
                reportName: 'cutomReportName'
            }
        }))
}