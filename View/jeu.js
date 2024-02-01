// jeu.js

async function fetchAndDisplayJeux() {
    try {
        const response = await fetch('http://127.0.0.1:8000/jeux/jeux');
        const jeux = await response.json();
        const tbody = document.querySelector('#liste-jeux tbody');
        tbody.innerHTML = '';
        jeux.forEach(jeu => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${jeu.id}</td>
            <td>${jeu.categorie}</td>
            <td>${jeu.agelimite}</td>
            <td>${jeu.plateform}</td>
            <td>${jeu.nombreJoueur}</td>
            <td>${jeu.formejeux}</td> 
            <td>${jeu.avis}</td>
            <td>${jeu.date}</td>
            <td>${jeu.stock}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des jeux:', error);
    }
}
fetchAndDisplayJeux()


