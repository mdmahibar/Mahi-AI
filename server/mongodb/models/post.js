//This is format of our mongoDB database means what thing we store in database
import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;