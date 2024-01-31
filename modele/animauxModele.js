const sequelize = require('../database/database')
const Personne = require('./personneModele')
const DataTypes = require('sequelize')

const AnimauxCompagnie = sequelize.define('AnimauxCompagnie',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER
    }
},
{freezeTableName:true})

Personne.hasMany(AnimauxCompagnie,{foreignKey:"PersonneId"})
AnimauxCompagnie.belongsTo(Personne,{foreignKey:"PersonneId"})

module.exports = AnimauxCompagnie