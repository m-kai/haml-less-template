var gulp = require("gulp")
var haml = require("gulp-haml")
var less = require("gulp-less")

gulp.task("default", function() {
  gulp.src("src/*.haml")
  .pipe(haml())
  .pipe(gulp.dest("dest"))

  gulp.src("src/less/*.less")
  .pipe(less())
  .pipe(gulp.dest("dest/css"))
})

gulp.task("watch", function() {
  gulp.watch("src/**/*.*", ["default"])
})
