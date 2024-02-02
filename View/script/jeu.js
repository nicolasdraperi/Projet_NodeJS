
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

        const listJeux = document.querySelector('#liste-jeux tbody');

        jeux.forEach(jeu => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `
            <td>${jeu.id}</td>
            <td>${jeu.nom}</td>
            <td>${jeu.categorie}</td>
            <td>${jeu.agelimite}</td>
            <td>${jeu.plateform}</td>
            <td>${jeu.nombreJoueur}</td>
            <td>${jeu.formejeux}</td>
            <td>${jeu.avis}</td>
            <td>${jeu.date}</td>
            <td>${jeu.stock}</td>
            <td><input type="number" id="quantite-${jeu.id}" placeholder="Quantité"></td>
            <td><button onclick="acheterJeu(${jeu.id}, document.getElementById('quantite-${jeu.id}').value)">Acheter</button></td>
            `;
            listJeux.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
    }
}

async function acheterJeu(jeuId, quantite) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/jeux/acheterJeux`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jeuxId: jeuId,
                quantite: quantite,
                token:sessionStorage.getItem('TOKEN')
            }),
        });
        const data = await response.json();
        location.reload();
    } catch (error) {
        console.error('Erreur lors de l\'achat du jeu:', error);
    }
}

afficherListeJeux();



