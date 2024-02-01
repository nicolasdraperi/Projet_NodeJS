const Jeux=require('../modele/jeux')
const User=require('../modele/user')
const Historique=require('../modele/historique')


exports.creatTables= async(req,res)=>{
    await Jeux.sync({ alter: true });
    await User.sync({ alter: true });
    await Historique.sync({ alter: true });

    res.status(200).json("table Animaux créer")

}
