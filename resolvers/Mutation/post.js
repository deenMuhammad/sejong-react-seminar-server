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

module.exports = {
    post
}