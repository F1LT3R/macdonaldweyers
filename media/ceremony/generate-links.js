var fs = require('fs');

var ext = '.jpg'
  , tmb = '-tmb.jpg'
  , markdownOutput = ''
  , format = '[![file](thumb)](file)'
  , dirs = [
      'ceremony',
      'party',
      'honeymoon',
    ]
  ;

function isThumb(filename){
  return filename.lastIndexOf(tmb) > -1;
}

function compileDir(path){
  console.log(path, 123123)
  fs.readdir(path, function(err, files){
    files.forEach(function(filename){
      console.log(filename);
      if (isThumb(filename)) {
        var fullresfile = filename.replace(tmb, ext);
        markdownOutput += format.replace(/file/g, fullresfile).replace(/thumb/g, filename) + '\n';
      }
    });
  });
}

dirs.forEach(function(path){
  compileDir(path);
});

