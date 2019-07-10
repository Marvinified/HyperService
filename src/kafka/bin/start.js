const admin = require('./admin')
const consume = require('./consume')
const registerConsumers = require('../registerConsumers')
const fs = require('fs')
let topicsToCreate = fs.readFileSync(__dirname + '/../topics.json');

module.exports = () => {

    registerConsumers(consume)

    const topics = JSON.parse(topicsToCreate)
    
    admin.listTopics((err, res) => {
        console.log({ res, err });
        console.log('Creating topics if not exist')
        admin.createTopics(topics, (err, res) => {
            console.log({ err, res })
        })
    });
}