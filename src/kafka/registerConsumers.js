module.exports = (consume) => {

    consume([
        { topic: 'log', partitions: 0 }
    ], ({ message, error }) => {
        console.log({ error, message })
    })

}