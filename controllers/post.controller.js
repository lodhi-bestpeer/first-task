const { Post } = require("../models")


const addPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addLikeOnPost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.body.userId)) {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $push: { likes: req.body.userId } },
            { new: true }
          );
          res.json(updatedPost);
        } else {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $pull: { likes: req.body.userId } },
            { new: true }
          );
          res.json(updatedPost);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addCommentOnPost = async (req, res) => {
    try {
        const { userId, text } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, { $push: { comments: { userId, text } } }, { new: true });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getLikes = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // console.log("post",post)
        res.json({
            likes: post.likes.length
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPosts = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("user");
        // console.log("post",post)
        res.json({
           post: post
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports ={
    getLikes,
    addCommentOnPost,
    addLikeOnPost,
    addPost,
    getPosts
}
