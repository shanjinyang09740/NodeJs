const path = require("path");
const fs = require("fs");
const jsonstream = require("JSONStream");
const resolve = (dir) => path.join(__dirname, dir);
(async() => {
    const readable = fs.createReadStream(resolve("./json/index.json"), {
        encoding: "utf-8",
        highWaterMark: 10,
    });
    const parser = jsonstream.parse(".");
    // const parser = jsonstream.parse(".");
    readable.pipe(parser);
    parser.on("data", (data) => {
        console.log("data", data);
    });
})();