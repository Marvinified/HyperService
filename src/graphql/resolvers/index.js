const resolvers = {
    Query: {
        users(root, args, context) {
            return context.prisma.users({ where: { name: args.name } })
        },
    },
    Mutation: {
        createUser(root, args, context) {
            context.producer.publish({
                topic: 'test', messages: {
                    message: "this is a mess",
                    type: "record"
                }, partition: 0
            }, ({error, data}) => {
                console.log({error, data})
                // throw err
            })
            // return context.prisma.createUser({ name: args.name })
        }
    }
}

module.exports = resolvers