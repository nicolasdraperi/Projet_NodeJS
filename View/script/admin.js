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
async function inscription() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('mail').value;
    const password = document.getElementById('password').value;


    const response = await fetch('http://127.0.0.1:8000/user/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            nom,
            prenom,
            email, 
            password,
            role:"utilisateur"
            }),
        });

        
        const data = await response.json();
        document.location.href="./Accueil.html"; 
}


const createUserForm = document.getElementById('loginForm');
    createUserForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      // Récupérer les valeurs du formulaire
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
 
      // Effectuer l'appel à l'API pour créer un utilisateur
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then((response)=>response.json())
    .then((data)=>{
        sessionStorage.setItem('TOKEN',data.token)
        sessionStorage.setItem('etat',data.etat)

        location.assign("View.html");
        if(data==false){
            location.assign("login.html");

        }else{
            location.assign("Accueil.html");

        }
    })
    JSON.stringify(sessionStorage.getItem('TOKEN'), null, 2);
    
    
});







