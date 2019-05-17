const Post = require('./../../db/models/post');

const getPosts = async () => {
    let res = await Post.find().exec();
    return res;
}

const getSinglePost = async (obj, {_id}) => {
    let res = await Post.findById({_id: _id}).exec();
    if(!res){
        throw new Error('PostNotFound')
    }
    return res
}

module.exports = {
    getPosts,
    getSinglePost
}