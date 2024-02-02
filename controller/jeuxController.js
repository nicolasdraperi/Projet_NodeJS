const Jeux=require('../modele/jeux')
const User=require('../modele/user')
const Historique=require('../modele/historique')


exports.creatTables= async(req,res)=>{
    await Jeux.sync({ alter: true });
    await User.sync({ alter: true });
    await Historique.sync({ alter: true });

    res.status(200).json("table Animaux créer")

}
exports.addJeux = async(req,res)=>{
    const { nom , categorie , agelimite,plateforme,nombrejoueur,formejeux,prix,description,avis,date,stock } = req.body;
    await Jeux.create({
        nom: nom,
        categorie: categorie,
        agelimite: agelimite,
        plateform: plateforme,
        nombreJoueur: nombrejoueur,
        formejeux: formejeux,
        prix: prix,
        description: description,
        avis: avis,
        date: date,
        stock: stock
    });
    res.status(200).json("insertion réalisé") 
}
exports.updateJeux = async (req, res) => {
    const { id } = req.params; 
    const { nom, categorie, agelimite, plateforme, nombrejoueur, formejeux, prix, description, avis, date, stock } = req.body;

    await Jeux.update({
        nom: nom,
        categorie: categorie,
        agelimite: agelimite,
        plateform: plateforme,
        nombreJoueur: nombrejoueur,
        formejeux: formejeux,
        prix: prix,
        description: description,
        avis: avis,
        date: date,
        stock: stock
        }, {
            where: { id: id }
        });

    res.status(200).json('Mise à jour réalisée');

};
exports.deleteJeux = async (req, res) => {
    const { id } = req.params; 
    await Jeux.destroy({
        where: { id: id }
    });
    res.status(200).json('Suppression réalisée');

};
exports.listeJeux = async (req, res) => {

    const jeux = await Jeux.findAll();
    res.status(200).json(jeux);

};
exports.acheterJeux = async (req, res) => {
    const { jeuxId, quantite , userId } = req.body;
    const jeu = await Jeux.findByPk(jeuxId);
    const jeuxAchete = jeu.stock - quantite;
    await Jeux.update({ stock: jeuxAchete }, { where: { id: jeuxId } });
    res.status(200).json('Achat réalisé avec succès');
    await Historique.create({
        date: new Date(), 
        quantite: quantite,
        jeuId: jeuxId,
        userId:userId
    });

};
exports.ajouterStock = async (req, res) => {
    const { jeuxId, quantite , userId } = req.body;
    const jeu = await Jeux.findByPk(jeuxId);
    const jeuxAchete = jeu.stock + quantite;
    await Jeux.update({ stock: jeuxAchete }, { where: { id: jeuxId } });
    res.status(200).json('Achat réalisé avec succès');
    await Historique.create({
        date: new Date(), 
        quantite: quantite,
        jeuId: jeuxId,
        userId:userId
    });

};
exports.getHistoriqueUtilisateur = async (req, res) => {
    try {
        const { idUtilisateur } = req.params;

        const historique = await Historique.findAll({
            where: { userid: idUtilisateur },
            include: [{ model: User, attributes: ['nom'] }],
        });

        if (!historique || historique.length === 0) {
            return res.status(404).json({ error: "Historique non trouvé" });
        }

        res.json(historique);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération de l'historique de l'utilisateur" });
    }
};


