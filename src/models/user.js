const connParams = require('../infra/connect');
const Sequelize = require('sequelize')

const User = connParams.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = User;