const {gql} = require('apollo-server-express')

module.exports = gql`
    type Post {
        _id: String,
        title: String,
        image: String,
        text: String,
        likes: Int,
        date_added: Float 
    }
`