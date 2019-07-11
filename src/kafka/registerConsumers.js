module.exports = (consume) => {

    consume([
        { topic: 'log', partitions: 0 }
    ], ({ message, error }) => {
        console.log({ error, message })
    })

    consume([
        {topic: 'newUserCreated', partitions: 0}
    ], ({ message, error }) => {
        console.log('send notification to the admin')
        console.log({ error, message })
    })

}