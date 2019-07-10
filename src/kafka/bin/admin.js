const kafka = require('kafka-node')
const client = new kafka.KafkaClient({ 
    kafkaHost: process.env.KAFKA_CLUSTER
});
const admin = new kafka.Admin(client);

module.exports = admin