// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout)

var fs = require('fs');

var lines = fs.readFileSync(process.argv[2]);//returns buffer object
var allLines = lines.toString();// converrt buffer to string
var splitLines = allLines.split('\n');
console.log(splitLines.length -1);
//return strLines;
//return strLines.length-1;
