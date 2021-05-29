const Sequelize = require('sequelize')
require('dotenv').config()

const conecction = new Sequelize (
    process.env.BANCODEDADOS,
    process.env.USUARIO,
    process.env.SENHA,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);

module.exports = conecction; 
