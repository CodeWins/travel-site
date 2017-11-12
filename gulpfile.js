var gulp = require('gulp');
var watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require(' postcss-simple-vars'),
    nested = require('post-css-nested');

gulp.task('default', function () {
    console.log("Gulp task is working")
});

gulp.task('html', function () {
    console.log("Imgagine something useful done to your html file")
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

});



gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });

});