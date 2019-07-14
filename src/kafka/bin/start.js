
const consume = require('./consume')
const registerConsumers = require('../registerConsumers')


module.exports = (prisma) => {

    registerConsumers(consume, prisma)
}