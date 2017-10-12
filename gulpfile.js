const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', function () {
    gulp.src('test/test-demo.js', {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
});