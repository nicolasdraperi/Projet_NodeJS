const Historique=require('../modele/historique')



exports.show= async(req,res)=>{

    const result= await Historique.findAll()
   
    return res.status(201).json(result)
   }
