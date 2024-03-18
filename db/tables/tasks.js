const { sequelize, Sequelize } = require('../connect');

const Tasks = sequelize.define('task', {
    cardId : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Tasks.sync({force: false});

module.exports = Tasks;