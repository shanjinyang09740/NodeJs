/**
 * @description 引入nodejs核心模块http
*/
const http = require("http");
/**
 * @description 创建服务
*/
const server = http.createServer((req,res)=>{
    res.end("server starting...");
});
sleepFunc(5);
server.listen("8080", () => {
    console.log("服务启动了");
});

function sleepFunc(time) {
    const sleep = Date.now() + time*1000;
    while (Date.now() < sleep) {
        
    }
    return;
}