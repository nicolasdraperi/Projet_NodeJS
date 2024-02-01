
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
        sessionStorage.setItem('TOKEN',data)
      
        location.assign("View.html");
        if(data==false){
            location.assign("login.html");

        }else{
            location.assign("Accueil.html");

        }
    })
    JSON.stringify(sessionStorage.getItem('TOKEN'), null, 2);

    });
