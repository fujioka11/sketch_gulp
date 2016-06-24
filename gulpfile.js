var gulp        = require('gulp');
var sketch      = require("gulp-sketch");
var imagemin    = require('gulp-imagemin');
var filelog     = require('gulp-filelog');


var paths = {
  srcDir : 'src/sketch',
  dstDir : 'src/sketch/exports',
}

gulp.task( 'sketchExport:slices', function(){
  var srcGlob    = paths.srcDir + '/*.sketch';
  var dstGlob    = paths.dstDir;

  var sketchOptions = {
    export     : 'slices'
  };

  var imageminOptions = {
    optimizationLevel: 7
  };

  return gulp.src( srcGlob )
    .pipe(sketch( sketchOptions ))
    .pipe(imagemin( imageminOptions ))
    .pipe(gulp.dest( dstGlob ))
    .pipe(filelog());
});

gulp.task( 'sketch', ['sketchExport:slices'] );
