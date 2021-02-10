"use strict";

var gulp = require("gulp");
var sass = require("gulp-scss-combine");

gulp.task("default", mergeSass);

function mergeSass(done) {
  return gulp
    .src("src/resources.scss") // Reads all files in src
    .pipe(sass()) // Serves to remove @import statements from the output
    .pipe(gulp.dest("./dist")); // Writes the file to root
}
