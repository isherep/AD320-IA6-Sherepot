var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
//if the file has extention .txt - show in console
//extreme - retruns extention
  list.forEach(function (file) {

  if(path.extname(file) ==='.' + process.argv[3]){
    console.log(file);
  }
})
})
