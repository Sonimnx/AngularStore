/**
 * Created by Vali on 12/4/2016.
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gulpinject = require('gulp-inject'),
    serverLivereload = require('gulp-server-livereload'),
    angularFilesort = require('gulp-angular-filesort');


gulp.task("insert", function () {
    var jscripts = gulp.src("app/scripts/**/*.js");
    return gulp.src("app/index.html")
        .pipe(gulpinject(jscripts, {relative: true}))
        .pipe(gulp.dest("app"));
});

gulp.task("analyze", function () {
    gulp.src("app/scripts/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(jshint.reporter("fail"));
});
