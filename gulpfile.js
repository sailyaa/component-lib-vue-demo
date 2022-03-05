/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-05 15:27:44
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 15:36:45
 */
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'));
const minifyCSS = require('gulp-minify-css')

gulp.task('sass', async function () {

  return gulp.src('components/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css'))  
})