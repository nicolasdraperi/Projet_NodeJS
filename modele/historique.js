
const Sequelize = require('sequelize')

const sequelize = require('../database/database')
const DataTypes = require('sequelize')

const historique = sequelize.define('Historique',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    quantite:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
  freezeTableName: true,  
})

module.exports = Historique
