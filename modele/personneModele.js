
const Sequelize = require('sequelize')

const sequelize = require('../database/database')
const DataTypes = require('sequelize')

const Personne = sequelize.define('Personne',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER
    }
},{
  freezeTableName: true,  
})

module.exports = Personne

/*
const reload = async()=>{
    await sequelize.sync({force:true})
}
reload()
*/