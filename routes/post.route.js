const express = require("express")
const { getLikes, addPost, addLikeOnPost, addCommentOnPost, getPosts } = require("../controllers/index")


const Router = express()

Router.route("/addPost").post(addPost)
Router.route("/like/:id").patch(addLikeOnPost)
Router.route("/comment/:id").put(addCommentOnPost)
Router.route("/getLikes/:id").get(getLikes)
Router.route("/getPosts/:id").get(getPosts)



module.exports = Router