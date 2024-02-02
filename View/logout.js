

async function log() {

const valeurLog=document.getElementById('log')

if(!sessionStorage.getItem('etat')){
        valeurLog.innerHTML="Login"
        valeurLog.href="login.html"
}else{

    valeurLog.innerHTML=sessionStorage.getItem('etat');

}




}

log()






