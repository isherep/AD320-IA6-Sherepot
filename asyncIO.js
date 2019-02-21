var fs = require('fs');

fs.readFile(process.argv[2], function(err, text){

  var textStr = text.toString();
  var lines = textStr.split('\n');
  console.log(lines.length-1);
});
