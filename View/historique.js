async function historique(){


//on envoie a l'authenticator




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
        const listHistorique=document.getElementById('test')
        

        historique.forEach(histo => {
            const listItem= document.createElement('tr')
            listItem.innerHTML =`<td>${histo.id} </td> <td>${histo.date}</td><td>${histo.quantite}</td><td>${histo.jeuId}</td>`

            listHistorique.appendChild(listItem)
        });
    
    })
    .catch(error=>console.log('erreur lors de la récupération'));
    
}

historique()