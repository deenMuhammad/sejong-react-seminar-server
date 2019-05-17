const { gql } = require('apollo-server');
const types = require('./types');

const query = gql`
  type Query {
      getPosts: [Posts]
    }
type Mutation {
    post(
        title: String,
        image: String,
        text: String,
    ):Boolean
}
  `
  module.exports = [query, types];