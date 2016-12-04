/**
 * Created by Vali on 12/4/2016.
 */

var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    gulpinject = require('gulp-inject'),
    jshint = require('gulp-jshint'),
    serverLivereload = require('gulp-server-livereload'),
    angularFilesort = require('gulp-angular-filesort');


gulp.task("insert", function () {
    var jscripts = gulp.src("app/scripts/*.js");
    return gulp.src("app/index.html")
        .pipe(gulpinject(jscripts, {relative: true}))
        .pipe(gulp.dest("app"));
});