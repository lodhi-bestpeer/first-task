const express = require("express")
const userRouter = require("./user.route")
const postRouter = require("./post.route")
const router = express()

router.use("/user",userRouter)
router.use("/post",postRouter)

module.exports = router