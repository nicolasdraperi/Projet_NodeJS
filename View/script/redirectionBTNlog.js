async function log_OR_Logout() {

    
    valeurLog=document.getElementById('log')
    if(valeurLog.textContent=="Login"){
        localStorage.removeItem("image");
        location.assign("Accueil.html");
    }else{
        location.assign("login.html");
        }
    
    }
    
    log_OR_Logout()