var gulp = require("gulp");
const terser = require('gulp-terser');
var ts = require("gulp-typescript");
const imagemin = require('gulp-imagemin');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('copy', async function () {
    gulp.src('./src/public/fonts/*').pipe(gulp.dest('./dist/public/fonts'))
    gulp.src('./src/public/stylesheets/*.css').pipe(gulp.dest('./dist/public/stylesheets'))
    gulp.src('./src/views/*.ejs').pipe(gulp.dest('./dist/views'))
})

gulp.task('uglify', async function () {
  gulp.src('./src/public/scripts/*.js')
      .pipe(terser())
      .pipe(gulp.dest('./dist/public/scripts'));
})

gulp.task('compress-img', async function () {
  gulp.src('./src/public/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/public/images'))
})

gulp.task("ts-compile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task('build', gulp.series('copy', 'uglify', 'compress-img', 'ts-compile'))

gulp.task('default', gulp.series('build'))
