const Historique = require('../modele/historique')
const Jeux = require('../modele/jeux')
const User = require('../modele/user')

const jwt = require('jsonwebtoken');


exports.show = async (req, res) => {

    const result = await Historique.findAll()

    return res.status(201).json(result)
}
exports.getHistoriqueUtilisateur = async (req, res) => {
    try {
        let id
        const token = req.body.token ? req.body.token : req.headers.authorization
        jwt.verify(token, process.env.API_KEY, async (err, decoded) => {

                const result = await User.findOne({ where: { email: (decoded.email) } })
                id = result.id;

                const historique = await Historique.findAll({
                    where: { userid: id },
                    include: [{ model: Jeux, attributes: ['nom'] }],
                });
            res.json(historique);
        })        



    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération de l'historique de l'utilisateur" });
    }
}