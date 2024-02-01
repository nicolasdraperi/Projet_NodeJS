async function log() {
valeurLog=document.getElementById('log')
if(sessionStorage.getItem('TOKEN').length==0){
    valeurLog.textContent="Login"
}else{
    valeurLog.textContent="Logout"
}
}

log()