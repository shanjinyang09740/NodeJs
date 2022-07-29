/**
 * @description 引入事件模块events
*/
const EventEmitter = require("events");

/**
 * @description 实例化事件
*/
const myEvent = new EventEmitter();

/**
 * @description 订阅事件
*/
myEvent.on("事件1", ()=>{
    console.log("事件1执行了...");
});

/**
 * @description 触发事件
*/
myEvent.emit("事件1");







