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
    try {
        const { jeuxId, quantite, userId } = req.body;

        // Vérification si la quantité est inférieure ou égale à 0
        if (quantite <= 0) {
            return res.status(400).json({ error: "La quantité doit être supérieure à 0" });
        }

        const jeu = await Jeux.findByPk(jeuxId);

        if (!jeu || quantite > jeu.stock) {
            return res.status(400).json({ error: "Quantité non disponible en stock" });
        }
        const jeuxAchete = jeu.stock - quantite;
        await Jeux.update({ stock: jeuxAchete }, { where: { id: jeuxId } });
        await Historique.create({
            date: new Date(),
            quantite: quantite,
            jeuId: jeuxId,
            userId: userId,
        });

        res.status(200).json('Achat réalisé avec succès');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'achat du jeu" });
    }
};
exports.ajouterStock = async (req, res) => {
    const { jeuxId, quantite , userId } = req.body;
    const jeu = await Jeux.findByPk(jeuxId);
    const jeuxAchete = jeu.stock + parseInt(quantite);
    await Jeux.update({ stock: jeuxAchete }, { where: { id: jeuxId } });
    res.status(200).json('Achat réalisé avec succès');
    await Historique.create({
        date: new Date(), 
        quantite: quantite,
        jeuId: jeuxId,
        userId:userId
    });

};



