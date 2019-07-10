const admin = require('./admin')
const consume = require('./consume')
const registerConsumers = require('../registerConsumers')
// const fs = require('fs')
// let topicsToCreate = fs.readFileSync('topics.json');

module.exports = () => {
    
    registerConsumers(consume)
    
    admin.listTopics((err, res) => {
        console.log('topics', res);
    });
}