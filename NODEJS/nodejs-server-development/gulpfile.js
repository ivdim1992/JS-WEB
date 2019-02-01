let gulp = require('gulp');
let uglify = require('gulp-uglify');
let del = require('del');

gulp.task('scripts',function() {
    del.sync('build/**'); // cleans the folder

    return gulp.src([
        'content/bower_components/jquery/dist/jquery.js' // takes this file
    ])
    .pipe(uglify()) // smashing the file
    .pipe(gulp.dest('build')); // pushing the file to the new folder build
});