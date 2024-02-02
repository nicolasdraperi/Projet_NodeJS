async function log() {
    const valeurLog = document.getElementById('log');

    if (sessionStorage.getItem('TOKEN')) {
        // L'utilisateur est connecté (JWT présent dans la session)
        valeurLog.textContent = "Logout";
        valeurLog.href = "Accueil.html";  // Remplacez "logout.html" par le chemin que vous souhaitez

    } else {
        // L'utilisateur n'est pas connecté
        valeurLog.textContent = "Login";
        valeurLog.href = "login.html";  // Remplacez "login.html" par le chemin que vous souhaitez
    }
}

// Ajoutez cette fonction pour gérer le clic sur le bouton "Logout"
function logout() {
    sessionStorage.removeItem('TOKEN');
    // Redirigez vers la page d'accueil après la déconnexion
    window.location.href = "Accueil.html";  // Remplacez "accueil.html" par le chemin de votre page d'accueil
}

log();
