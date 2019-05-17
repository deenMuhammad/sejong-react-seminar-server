const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const book = [
  {
    name: 'Harry Potter and the Chamber of Secrets 2',
    author: 'J.K. Rowling',
    pics:[
        "https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/a5/c0/fb/a5c0fbaa-2fb5-fefa-0e2e-552207b0376f/pr_source.lsr/268x0w.png"
    ],
    price: 20,
    short_desc: "This is interesting book",
    long_desc: "The book was published in the United Kingdom on 2 July 1998 by Bloomsbury and later, in the United States on 2 June 1999 by Scholastic Inc. Although Rowling says she found it difficult to finish the book, it won high praise and awards from critics, young readers and the book industry, although some critics thought the story was perhaps too frightening for younger children.",
    date_added: 1550109654908,
  },
  {
    name: 'Jurassic Park',
    author: 'Michael Crichton',
    pics:[
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Jurassicpark.jpg/220px-Jurassicpark.jpg"
    ],
    price: 10,
    short_desc: "This is interesting book",
    long_desc: "Jurassic Park is a 1990 science fiction novel written by Michael Crichton, divided into seven sections (iterations). A cautionary tale about genetic engineering, it presents the collapse of an amusement park showcasing genetically recreated dinosaurs to illustrate the mathematical concept of chaos theory and its real world implications.",
    date_added: 1550109654910,
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    name: String
    author: String
    pics:[
       String
    ],
    price: Float,
    short_desc: String,
    long_desc: String,
    date_added: Float,
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => book,
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

//in order to listen to requests 
const app = express();
server.applyMiddleware({ app });

// This `listen` method launches a web-server.  Existing apps
const port = process.env.PORT || 4001;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),)