// imports always go at the top
import gulp from "gulp";
import sass from "gulp-sass";
import dart from "sass"; // this is the dart-sass compiler

const sassify = sass(dart); // configure the sass plugin to work with the dart sass compiler

function compileSass(done) {
  return gulp
    .src("sass/**/*.scss") // get every scss file in the sass directory
    .pipe(sassify({ outputStyle: "compressed" }).on("error", sassify.logError)) // run it thru the compiler, and also compress it
    .pipe(gulp.dest("css")); // save the compiled file to the CSS directory
}

function watch() {
  console.log("watching files...");

  gulp.watch("sass/**/*.scss", compileSass);
}

export { watch as default, compileSass as compile };
