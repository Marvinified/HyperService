const kafka = require('kafka-node')
const Producer = kafka.Producer
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_CLUSTER })
const producer = new Producer(client)
const { SchemaRegistryClient } = require('schema-registry-client');
const schemaRegistry = SchemaRegistryClient.create(process.env.SCHEMA_REGISTRY);

producer.on('ready', function () {
    console.log("Producer Ready")
});

producer.on('error', function (error) {
    console.log({ error })
});

const publish = ({ messages, topic, partition }, callback) => {
    schemaRegistry
        .encodeBySubject(messages, `${topic}-value`)
        .then(schemaRegistryAvroBuffer => {
            console.log(schemaRegistryAvroBuffer)
            producer.send([{ topic, messages: schemaRegistryAvroBuffer }], (error, data) => {
                if (error) {
                    callback({ error })
                }
                callback({ data })
            })
        })
        .catch(error => {
            console.log(error.message)
            callback({ error })

        })

}

module.exports = {
    publish
}