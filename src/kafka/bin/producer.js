const kafka = require('kafka-node')
const Producer = kafka.Producer
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_CLUSTER })
const producer = new Producer(client)

producer.on('ready', function () {
    console.log("Producer Ready")
});

producer.on('error', function (error) {
    console.log({ error })
});


module.exports = producer