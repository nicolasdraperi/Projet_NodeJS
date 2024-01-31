const Jeux=require('../modele/jeux')
const User=require('../modele/user')
const Historique=require('../modele/historique')


exports.creatTab= async(req,res)=>{
    await Jeux.sync({ alter: true });
    res.status(200).json("table Animaux créer")

}
