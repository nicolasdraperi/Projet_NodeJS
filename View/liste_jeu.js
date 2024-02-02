async function afficherListeJeux() {
    try {
        const response = await fetch('http://127.0.0.1:8000/jeux/jeux', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                token:sessionStorage.getItem('TOKEN')
            })
        });

        const jeux = await response.json();

        const listJeux = document.querySelector('#espace-admin tbody');

        jeux.forEach(jeu => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `
            <td>${jeu.id}</td>
            <td>${jeu.nom}</td>
            <td>${jeu.categorie}</td>
            <td>${jeu.agelimite}</td>
            <td>${jeu.plateform}</td>
            <td>${jeu.stock}</td>
            <td>
            <button onclick="modifierJeu(${jeu.id})">Modifier</button>
            <button onclick="supprimerJeu()">Supprimer</button>
            <button onclick="ajouterJeu()">Ajouter Jeu</button>
            </td>
            `;
            listJeux.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
    }
}
afficherListeJeux()


