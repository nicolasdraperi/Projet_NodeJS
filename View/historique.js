async function historique(){

    await fetch('http://localhost:8000/historique/show', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    
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