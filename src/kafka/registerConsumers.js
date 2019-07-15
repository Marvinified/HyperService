module.exports = (consume, prisma) => {
    consume([
        { topic: 'test', partitions: 0 }
    ], ({ message, error }) => {
        console.log('send notification to the admin')
        console.log({ error, message })
    })

}