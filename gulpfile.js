var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('mix', function() {
 	return gulp.src('./*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());

});

gulp.task('mix_css', function() {
 	return gulp.src('./css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());

});

gulp.task('html_reload', function() {
 	return gulp.src('./*.html')
    .pipe(livereload());

});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./*.js', ['mix']);
  gulp.watch('css/*.css', ['mix_css']);
  gulp.watch('*.html', ['html_reload']);
});