var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpConfiguration = require('./gulpconfig.js');
var typescriptJson = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');

console.log(gulpConfiguration.Files.TypeScriptFiles);

gulp.task('typescript', function() {

    // var target = gulp.src(gulpConfiguration.Files.IndexFile);
    // var sources = gulp.src(gulpConfiguration.Files.TypeScriptAppRoot, { read: false });

    gulp.src(gulpConfiguration.Files.TypeScriptFiles)
        .pipe(plumber({}))
        .pipe(ts(typescriptJson.compilerOptions))
        .pipe(gulp.dest(gulpConfiguration.Files.AppRoot))
       
});

gulp.task('watch', function() {

    gulp.watch([gulpConfiguration.Files.LessFiles], ['less']);
    gulp.watch([gulpConfiguration.Files.TypeScriptFiles], ['typescript']);
    gulp.watch([gulpConfiguration.Files.HtmlFiles], ['less']);

});


gulp.task('default', ['watch', 'typescript']); 