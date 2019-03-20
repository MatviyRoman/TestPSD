const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");

gulp.task('prefix', () =>
    gulp.src('./css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
);

gulp.task('sass-compile', function() {
	return gulp.src('./sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css/'))
})
gulp.task('watch', function (){
	gulp.watch('./sass/**/*.sass', gulp.series('sass-compile', 'prefix'))
})