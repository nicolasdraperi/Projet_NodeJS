
const Sequelize = require('sequelize')
const Jeux=require('../modele/jeux')
const User=require('../modele/user')
const sequelize = require('../database/database')
const DataTypes = require('sequelize')

const Historique = sequelize.define('Historique',{
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
Jeux.hasMany(Historique, { foreignKey: 'jeuId' });
Historique.belongsTo(Jeux, { foreignKey: 'jeuId' });

User.hasMany(Historique, { foreignKey: 'userId' });
Historique.belongsTo(User, { foreignKey: 'userId' });

module.exports = Historique 