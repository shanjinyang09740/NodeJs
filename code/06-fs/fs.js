const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    const src = fs.createReadStream("./app.js");
    console.log("srcccc", src);
    src.pipe(res);
    console.log("srcccc2222", src);
});

server.listen(8000);