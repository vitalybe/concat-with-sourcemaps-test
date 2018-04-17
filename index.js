var fs = require('fs');
var Concat = require('concat-with-sourcemaps')

var file1Content = fs.readFileSync("./test1.js");
var file2Content = fs.readFileSync("./test2.js");

var concat = new Concat(true, 'all.js', '\n');
concat.add(null, "// (c) John Doe");
concat.add('file1.js', file1Content);
concat.add('file2.js', file2Content);

var concatenatedContent = concat.content;
var sourceMapForContent = concat.sourceMap;

console.log(concatenatedContent.toString('utf8'))
console.log("////")
console.log(sourceMapForContent.toString('utf8'))
