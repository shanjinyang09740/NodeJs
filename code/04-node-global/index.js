// console.log("global", global);
// console.log("__filename", __filename);
// console.log("__dirname", __dirname);
// console.log("process", process);
// console.log("require", require);
// console.log("module", module);

// console.log(this === global); //默认情况 this 是空对象，和global是不一样的

(function () {
    //外面包一层立即执行匿名函数体，则this与global是一样的
   console.log(this === global); 
})()