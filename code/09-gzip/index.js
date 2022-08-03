var path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
let sourcePath = resolve("./extral");

var fs = require("fs");
// var zlib = require("zlib");

// var gzip = zlib.createGzip();
// var inFile = fs.createReadStream(`${sourcePath}/test.txt.gz`);
// var out = fs.createWriteStream(`${sourcePath}/test123.txt`);

// inFile.pipe(gzip).pipe(out);

let binData = fs.readFileSync(`${sourcePath}/test123.txt`);
const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

const cent = Buffer.from(binData);
console.log(decoder.write(cent));

// var fs = require("fs");
// var zlib = require("zlib");

// var gzip = zlib.createGunzip();

// var inFile = fs.createReadStream("./test.txt.gz");
// var out = fs.createWriteStream("./test01.txt");

// inFile.pipe(gzip).pipe(out);