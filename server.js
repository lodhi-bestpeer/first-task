const express = require("express")
const {connection} = require("./dbConfig/dbConnection")
const Router = require("./routes/index")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/v1",Router)


app.listen(8080,()=>{
    connection()
    console.log("server is running at 8080")
})