const Jeux=require('../modele/jeux')


exports.creatTab= async(req,res)=>{
    await Jeux.sync({ alter: true });
    res.status(200).json("table Animaux créer")

}
