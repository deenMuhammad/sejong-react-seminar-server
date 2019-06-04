const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
require('./db/index')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

//in order to listen to requests 
const app = express();
server.applyMiddleware({ app });

// This `listen` method launches a web-server.  Existing apps
const port = process.env.PORT || 3000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),)
