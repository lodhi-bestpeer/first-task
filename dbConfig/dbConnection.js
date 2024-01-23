
const mongoose = require("mongoose")

const connection = ()=>{
  mongoose.connect("mongodb://localhost:27017/test").then(()=>{
    console.log("db connected")
  }).catch((error)=>{
    console.log(error)
  })
}

module.exports = {connection}