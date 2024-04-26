
// Popup //

popup.style.display= "none";
zonedepart.style.display="none"
    function displaypopup(){
        let popup = document.getElementById("pop")
        popup.style.display= ""
        
        buttonpop.addEventListener("click",()=>{
            popup.style.display= "none";
            zonedepart.style.display=""
        })
        }

setTimeout (displaypopup, 500);

// This is where everything begin ;) //

depart()

avataremployeurF.addEventListener("click",()=>
{
    avatar01.genre = 'femme';
    allavatar.style.display='none'
    nomavatar.style.display="";
    phraseavatar.style.display='none'
    blockemployeur.style.display=""; 
})

avataremployeurH.addEventListener("click",()=>
{
    avatar01.genre = 'Homme';
    allavatar.style.display='none'
    nomavatar.style.display="";
    phraseavatar.style.display='none'
    blockemployeur.style.display="";
    profilut.style.display="none"
    
})

validernom2.addEventListener("click",()=>
{
    avatar01.nom = nomavatar.value;
    blockemployeur.style.display="none"
    elementsintro.style.display="none"
    profilut.style.display=""
    
    dial01()

    textsdialogue()
})

boutontext02.addEventListener("click",()=>
{
    boutontext01.style.display="none"
    boutontext02.style.display="none"
    text01.style.display="none"
    profilut.style.display="none";
    musique.volume="0"
    musiclose.play()

    textsdialogue02();
})
boutontext01.addEventListener("click",()=>
{
    boutontext01.style.display="none"
    boutontext02.style.display="none"
   
    text01.style.display="none"
    textsdialogue03()
})





