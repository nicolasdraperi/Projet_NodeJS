const sequelize = require('../database/database')
const DataTypes = require('sequelize')

const Jeux = sequelize.define('Jeux',{
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
    categorie:{
        type: DataTypes.STRING,
        allowNull: false  
      },
      agelimite:{
        type: DataTypes.INTEGER,
        allowNull: false  
      },
      plateform:{
        type: DataTypes.STRING,
        allowNull: false  
      },
      nombreJoueur:{
        type: DataTypes.INTEGER,
        allowNull: false  
      },
      formejeux:{
        type: DataTypes.STRING,
        allowNull: false  
      },
      prix:{
        type: DataTypes.FLOAT,
        allowNull: false  
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false  
      },
      avis:{
        type: DataTypes.STRING,
        allowNull: false  
      },
      date:{
        type: DataTypes.DATE,
        allowNull: false  
      },
      stock:{
        type: DataTypes.INTEGER,
        allowNull: false  
      }
},
{freezeTableName:true})


module.exports = Jeux