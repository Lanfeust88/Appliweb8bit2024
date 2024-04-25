
// This is where everything begin ;) //

depart()

avataremployeurF.addEventListener("click",()=>{
    avatar01.genre = 'femme';
    allavatar.style.display='none'
    nomavatar.style.display="";
    phraseavatar.style.display='none'
    blockemployeur.style.display=""; 
})

avataremployeurH.addEventListener("click",()=>{
    avatar01.genre = 'Homme';
    allavatar.style.display='none'
    nomavatar.style.display="";
    phraseavatar.style.display='none'
    blockemployeur.style.display="";
    profilut.style.display=""
    
})

validernom2.addEventListener("click",()=>{
    avatar01.nom = nomavatar.value;
    blockemployeur.style.display="none"
    elementsintro.style.display="none"
    profilut.style.display=""
    dial01()
    console.log(avatar01.nom)
    textsdialogue()
 

})







