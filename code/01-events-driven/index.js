/**
 * @description 引入事件模块events
 */
const EventEmitter = require("events");

/**
 * @description 继承事件
 */
class MyEmitter extends EventEmitter {}

/**
 * @description 实例化事件
 */
const myEmitter = new MyEmitter();

/**
 * @description 订阅事件
 */
myEmitter.on("event01", function(a, b) {
    console.log(a, b, this);
});
myEmitter.once("event02", function(a, b) {
    console.log(a, b, this);
});

/**
 * @description 触发事件
 */
myEmitter.emit("event01", "123", "456");
myEmitter.emit("event01", "1231", "4561");
myEmitter.emit("event02", "78", "89");
myEmitter.emit("event02", "781", "891");