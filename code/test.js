const { on, EventEmitter } = require("events");

(async() => {
    const ee = new EventEmitter();
    const ite = on(ee, "foo");

    process.nextTick(() => {
        ee.emit("foo", "Hello");
        console.log(1111111);
        ee.emit("error", new Error("unknown mistake."));
        console.log(2222222);
        ee.emit("foo", "Node.js");
        console.log(3333333);
    });

    try {
        for await (const event of ite) {
            console.log(event); // prints ['Hello']
        }
    } catch (err) {
        console.log(err.message); // unknown mistake.
    }
})();