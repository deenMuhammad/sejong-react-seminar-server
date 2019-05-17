const { gql } = require('apollo-server');
const types = require('./types');

const query = gql`
  type Query {
      getPosts: [Post],
      getSinglePost(
        _id: String!
      ):Post
    }
type Mutation {
    post(
        title: String!,
        image: String!,
        text: String!,
    ):Boolean,
    likePost(
      _id: String
    ):Boolean
}
  `
  module.exports = [query, types];