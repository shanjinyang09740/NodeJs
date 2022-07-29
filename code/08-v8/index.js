const v8 = require("v8");
// console.log(v8);
console.log(1111111111, v8.cachedDataVersionTag());
v8.setFlagsFromString("--allow_natives_syntax");
console.log(2222222222, v8.getHeapStatistics().number_of_native_contexts);
console.log(3333333333, v8.getHeapStatistics().number_of_detached_contexts);