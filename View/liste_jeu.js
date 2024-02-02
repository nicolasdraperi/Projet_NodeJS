async function afficherListeJeux() {
    try {
        const response = await fetch('http://127.0.0.1:8000/jeux/adminJeux', {
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
            <td id="IdJeu">${jeu.id}</td>
            <td>${jeu.nom}</td>
            <td>${jeu.categorie}</td>
            <td>${jeu.agelimite}</td>
            <td>${jeu.plateform}</td>
            <td>${jeu.stock}</td>
            <td>
            <input type="number" id="quantite-${jeu.id}" placeholder="Quantité">
            <button onclick="ajouterStock(${jeu.id}, document.getElementById('quantite-${jeu.id}').value)">Restocker</button>
            <button onclick="deleteJeux(${jeu.id},document.getElementById('IdJeu').value)">Supprimer</button>
            </td>
            `;
            listJeux.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
    }
}
async function deleteJeux(jeuId) {
    console.log(jeuId)
    try {
        const token = sessionStorage.getItem("TOKEN");
        const response = await fetch(`http://127.0.0.1:8000/jeux/deleteJeux`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: jeuId,
                token: token
            }),
        });
        const data = await response.json();
        location.reload();
    } catch (error) {
        console.error('Erreur lors de la suppression du jeu:', error);
    }
}

async function ajouterStock(jeuId, quantite) {
    try {
        const token = sessionStorage.getItem("TOKEN")
        const response = await fetch(`http://127.0.0.1:8000/jeux/ajouterStock`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jeuxId: jeuId,
                quantite: quantite,
                token:token
            }),
        });
        const data = await response.json();
        location.reload();
    } catch (error) {
        console.error('Erreur lors du restockage:', error);
    }
}
afficherListeJeux()

async function historique(){
    await fetch('http://localhost:8000/historique/show', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token:sessionStorage.getItem('TOKEN')
        })
    
    }).then((response)=>response.json())
    .then(historique=>{
        const listHistorique=document.getElementById('historiqueid')
        

        historique.forEach(histo => {
            const listItem= document.createElement('tr')
            listItem.innerHTML =`
            <td>${histo.id}</td>
            <td>${histo.date}</td>
            <td>${histo.quantite}</td>
            <td>${histo.jeuId}</td>
            <td>${histo.userId}</td>`
            listHistorique.appendChild(listItem)
        });
    
    })
    .catch(error=>console.log(error));
    
}
historique()


