/**
 * @description 需求：希望有一个服务，可以根据请求接口的内容返回相应的数据
*/
import express from "express"
import { DataSource } from "./data"
const app = express()

app.get("/", (req,res) => {
    res.json(DataSource.dataList)
    // res.end("11442345324")
})

app.listen(8080, () => {
    console.log("服务启动了...");
})




