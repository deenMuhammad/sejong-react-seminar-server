const Post = require('./../../db/models/post');

const post = async (obj, {title, image, text}) => {
    let res = await Post.create({
        title: title,
        image: image,
        text: text,
        likes: 0,
        date_added: Date.now() 
    })
    if(!res){
        return false
    }
    return true
}

const likePost = async (obj, {_id})=>{
    let res = await Post.findByIdAndUpdate({_id: _id}, {$inc: {likes: 1}}).exec();
    if(!res){
        return false
    }
    return true
}

module.exports = {
    post,
    likePost
}