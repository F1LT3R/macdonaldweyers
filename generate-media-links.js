var fs = require('fs');

var ext = '.jpg'
  , tmb = '-tmb.jpg'
  , markdownOutput = ''
  , format = '[![file](thumb)](file)'
  , dirs = [
      'media/ceremony',
      'media/party',
      'media/honeymoon',
    ]
  ;

function isThumb(filename){
  return filename.lastIndexOf(tmb) > -1;
}

function compileDir(path){
  fs.readdir(path, function(err, files){
    console.log('## '+ path);
    files.forEach(function(filename){
      if (isThumb(filename)) {
        filename = path+'/'+filename;
        // console.log(filename);
        var fullresfile = filename.replace(tmb, ext);
        console.log( format.replace(/file/g, fullresfile).replace(/thumb/g, filename) );
        // markdownOutput += format.replace(/file/g, fullresfile).replace(/thumb/g, filename) + '\n';
      }
    });
  });
}

dirs.forEach(function(path){
  compileDir(path);
});

// console.log(markdownOutput);

