async function addJeux() {
    const nom = document.getElementById('nom').value;
    const categorie = document.getElementById('categorie').value;
    const agelimite = document.getElementById('agelimite').value;
    const plateforme = document.getElementById('plateforme').value;
    const nombrejoueur = document.getElementById('nombrejoueur').value;
    const formejeux = document.getElementById('formejeux').value;
    const prix = document.getElementById('prix').value;
    const description = document.getElementById('description').value;
    const avis = document.getElementById('avis').value;
    const date = document.getElementById('date').value;
    const stock = document.getElementById('stock').value;
const token=  sessionStorage.getItem('TOKEN')


    try {
        const response = await fetch('http://127.0.0.1:8000/jeux/ajouterJeux', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom:nom,
                categorie:categorie,
                agelimite:agelimite,
                plateforme:plateforme,
                nombrejoueur:nombrejoueur,
                formejeux:formejeux,
                prix:prix,
                description:description,
                avis:avis,
                date:date,
                stock:stock,
                token:token
               
                
                
                
            }),
        });

        if (response.ok) {
            const result = await response.json();
            document.location.href="espace-admin.html"; 
        } else {
            console.error('Erreur lors de la requete');
        }
    } catch (error) {
        console.error('Erreur :', error);
    }
  
}

async function updateJeux() {
    const idJeux = document.getElementById('idJeux').value; // Remplacez par le bon identifiant
    const nom = document.getElementById('nom').value;
    const categorie = document.getElementById('categorie').value;
    const agelimite = document.getElementById('agelimite').value;
    const plateforme = document.getElementById('plateforme').value;
    const nombrejoueur = document.getElementById('nombrejoueur').value;
    const formejeux = document.getElementById('formejeux').value;
    const prix = document.getElementById('prix').value;
    const description = document.getElementById('description').value;
    const avis = document.getElementById('avis').value;
    const date = document.getElementById('date').value;
    const stock = document.getElementById('stock').value;

    try {
        const response = await fetch(`http://votre-api.com/chemin/vers/modifier/jeux/${idJeux}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
                categorie,
                agelimite,
                plateforme,
                nombrejoueur,
                formejeux,
                prix,
                description,
                avis,
                date,
                stock
            }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result); 
        } else {
            console.error('Erreur lors de la requête PUT');
        }
    } catch (error) {
        console.error('Erreur :', error);
    }
}

