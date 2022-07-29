const fs = require("fs"),
  path = require("path");

// /**
//  * @description 读取文件目录、文件及大小
// */
// fs.stat('./code/06-fs/logs/hello.log', (err, stats) => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}else{
// 		console.log('目录', stats.isDirectory());
// 		console.log('文件', stats.isFile());
// 		console.log('大小', stats.size);
// 	}
// });

// /**
//  * @description 创建目录
// */
// fs.mkdir('./code/06-fs/logs2', err => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
// 	console.log('logs目录创建成功');
// });

// /**
//  * @description 文件写入内容
// */
// fs.writeFile('./code/06-fs/logs/hello.log', '[{id:1},{id:2},{id:3}]', (err, stats) => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
// 	console.log('写入文件成功');
// });

// /**
//  * @description 读取文件内容及字节数
// */
// fs.readFile('./code/06-fs/logs/hello.log', 'utf-8', (err, data) => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
// 	console.log(data.length+' bytes');
// 	console.log('data', data.toString('utf-8'));
// });

// /**
//  * @description 创建index.js文件并写入内容
// */
// fs.writeFile('./code/06-fs/logs/index.js', `var str="123";
// function ecofunc(str){
// 	console.log(str);
// }
// ecofunc(str);`, (err, data)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('成功创建写入文件');
// 	}
// });

// /**
//  * @description 向文件中追加内容
// */
// fs.appendFile('./code/06-fs/logs/index.js', `const newObj={};`, (err, data)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('成功添加内容');
// 	}
// });

/**
 * @description 从文件流中读取数据
 */
var readStream = fs.createReadStream("./code/06-fs/logs/index.js");
var result = "";
//读取内容
readStream.on("data", (chunk) => {
  result += chunk;
});
//读取完成
readStream.on("end", (chunk) => {
  console.log("读取完成", result);
  //创建可写流 fs.WriteStream 类的对象，继承自 <stream.Writable>
  const writer = fs.createWriteStream("./code/06-fs/logs/index.js", {
    //默认值为w， 通过调用writer.write方法写入数据的时候，会直接覆盖文件所有的内容，
    // 即会把文件之前的内容全部再删除，写入新的数据
    flags: "w",
  });

  console.log("result", result+'写入完成');
  //写入数据到流
  writer.write(result+'写入完成');
});
//读取失败
readStream.on("error", (err) => {
  console.log("err", err);
});
