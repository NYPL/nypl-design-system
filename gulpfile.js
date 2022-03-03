"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", mergeSass);

function mergeSass(done) {
  return gulp
    .src([
      "src/styles/base/_01-breakpoints.scss",
      "src/styles/base/_02-mixins.scss",
      "src/styles/space/_space-inline.scss",
      "src/styles/space/_space-inset.scss",
      "src/styles/space/_space-stack.scss",
    ]) // Reads all files in src
    .pipe(concat("resources.scss"))
    .pipe(gulp.dest("./dist")); // Writes the file to root
}
