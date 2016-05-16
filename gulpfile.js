var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpConfiguration = require('./gulpconfig');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');


gulp.task('typescript', function() {

    // var target = gulp.src(gulpConfiguration.Files.IndexFile);
    // var sources = gulp.src(gulpConfiguration.Files.TypeScriptAppRoot, { read: false });

    gulp.src(gulpConfiguration.Files.TypeScriptFiles)
        .pipe(plumber({}))
        .pipe(ts({              
  
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false,    
    "noExternalResolve": true

    
}))
       
});

gulp.task('watch', function() {

    gulp.watch([gulpConfiguration.Files.LessFiles], ['less']);
    gulp.watch([gulpConfiguration.Files.TypeScriptFiles], ['typescript']);
    gulp.watch([gulpConfiguration.Files.HtmlFiles], ['less']);

});


gulp.task('default', ['watch', 'typescript']); 