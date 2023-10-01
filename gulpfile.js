var gulp            = require('gulp');
var babel           = require('gulp-babel');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');
var run             = require('gulp-run');

gulp.task('vue', () => gulp.src('./amd/src/components/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.vue.js' }))
    .pipe(gulp.dest('./amd/src/components'))
    .pipe(run('grunt amd --force'))
);

gulp.task('watch', () => {
 
    gulp.watch('./amd/src/components/*.vue', gulp.parallel('vue'));
});
 