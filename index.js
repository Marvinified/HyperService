const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./src/graphql/resolvers')
const { start, consume, producer } = require('./src/kafka/bin')

start()

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: {
        prisma,
        producer,
        consume
    },
})

server.start(() => console.log('Server is running on http://localhost:4000'))