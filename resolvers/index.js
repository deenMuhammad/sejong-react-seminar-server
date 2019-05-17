const postQuery = require('./Query/post');
const postMutation = require('./Mutation/post');

module.exports = {
    Query: {
        getPosts: postQuery.getPosts,
        getSinglePost: postQuery.getSinglePost
    },
    Mutation: {
        post: postMutation.post,
        likePost: postMutation.likePost
    }
}