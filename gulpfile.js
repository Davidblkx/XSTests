var gulp = require("gulp");
var ts = require("gulp-typescript");
var del = require("del");
var ext_replace = require("gulp-ext-replace");
var zip = require("gulp-zip");

var tsProject = ts.createProject("tsconfig.json");

let distFolder = "./dist/";
let zipFolder = "./deploy/";
let typings = "./typings/";

function getTimestamp(){
    return new Date()
        .toISOString()
        .replace(/-/g, '')
        .replace(/T/g, '')
        .replace(/:/g, '')
        .replace(/Z/g, '')
        .replace(/\./g, '')
}

gulp.task("clean", function(){
    return del(distFolder + "**");
});

gulp.task("cp:static", function(){
    return gulp.src(typings + "**")
        .dest(distFolder);
});

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(distFolder));
});

gulp.task("ts:xsjs", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(ext_replace(".xsjslib", ".js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("zip", function(){
    let uniqName = `hanaXSTest.${getTimestamp()}.zip`
    return gulp.src(distFolder + "**/*")
        .pipe(zip(uniqName))
        .pipe(gulp.dest(zipFolder));
});

gulp.task("default", gulp.series("clean", gulp.parallel("ts")));
gulp.task("build", gulp.series("clean", gulp.series("ts:xsjs", gulp.series("zip"))));