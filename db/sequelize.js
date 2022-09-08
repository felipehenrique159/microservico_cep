const Sequelize = require('sequelize')
const sequelize = new Sequelize('ceps', 'root', 'root',{
    host:"localhost",
    dialect: 'mysql'
})


module.exports = sequelize

/*
    sequelize.authenticate().then(() => {
        console.log("conectado com sucesso");
    }).catch(() => {
        console.log('falha ao se conectar');
    })
*/