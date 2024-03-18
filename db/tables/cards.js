const { sequelize, Sequelize } = require('../connect');

const Cards = sequelize.define('cards', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Cards.sync({force: false});

module.exports = Cards;