module.exports = (consume) => {
    consume([
        { topic: 'topic1', partitions: 0 }
    ], ({ message, error }) => {
        console.log("Consumer")
        console.log({ error, message })
        // console.log('topic 1 event handle' + message)
    })
}