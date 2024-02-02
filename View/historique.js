async function historique(){
    await fetch('http://localhost:8000/historique/showUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token:sessionStorage.getItem('TOKEN')
        })
    
    }).then((response)=>response.json())
    .then(historique=>{
        const listHistorique=document.getElementById('test')
        

        historique.forEach(histo => {
            const listItem= document.createElement('tr')
            listItem.innerHTML =`
            <td>${histo.jeuId}</td>
            <td>${histo.Jeux.nom}</td>
            <td>${histo.quantite}</td>
            <td>${histo.date}</td>`

            listHistorique.appendChild(listItem)
        });
    
    })
    .catch(error=>console.log(error));
    
}
async function getHistorique() {
    const idUtilisateur = document.getElementById('userId').value;

    try {
        const response = await fetch('http://localhost:8000/historique/showUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            token:sessionStorage.getItem('TOKEN')
        })
        });

        if (response.ok) {
            const historique = await response.json();
            console.log('Historique:', historique);
        } else {
            console.error('Erreur de récupération de l\'historique. Status:', response.status);
        }
    } catch (error) {
        console.error('Erreur', error);
    }
}

historique()