const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const wineappbd = new Sequelize('wineapp','root','maycon',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = wineappbd