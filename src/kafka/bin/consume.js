const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const { SchemaRegistryClient } = require('schema-registry-client');
const schemaRegistry = SchemaRegistryClient.create(process.env.SCHEMA_REGISTRY);


module.exports = (topics, callback) => {
    const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_CLUSTER });
    const consumer = new Consumer(
        client,
        topics,
        {
            autoCommit: true
        }
    );
    consumer.on('ready', function () {
        console.log("Consumer Ready");
    });

    consumer.on('error', function (error) {
        console.log("Error Occured");
        callback({ error })
    });

    consumer.on('message', function (message) {
        console.log(`incoming message on topics: ${JSON.stringify(topics)}`);
        schemaRegistry
            .decode(Buffer.from(message.value))
            .then(message => {
                callback({ message })
            })
            .catch(error => {
                console.log(error.message)
                callback({ error })
            })
    });
}