const resolvers = {
    Query: {
        users(root, args, context) {
            return context.prisma.users({ where: { name: args.name } })
        },
    },
    Mutation: {
        createUser(root, args, context) {
            context.producer.send([{ topic: 'topic1', messages: 'Here', partition: 0 }], (err, data) => {
                console.log({ err, data })
            })
            return context.prisma.createUser({ name: args.name })
        }
    }
}

module.exports = resolvers