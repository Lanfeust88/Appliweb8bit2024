// Récupération des mes éléments HTML de départ //
let popup = document.getElementById("pop");
let buttonpop = document.getElementById("buttonpop");
let zonedepart= document.getElementById("depart");
let boutondepart = document.getElementById("decouvrir")
let avataremployeurH =document.getElementById("avatarhomme")
let avataremployeurF =document.getElementById("avatarfemme")
let phraseavatar =document.getElementById("choixav")
let avatarcyril =document.getElementById("avatarcyrilintro")
let profilut=document.getElementById("profil")
let imgprofilh=document.getElementById("avatarhommeprofil")
let imgprofilf=document.getElementById("avatarfemmeprofil")
let zoneprofil=document.getElementById("nomprofil")
const letsgo =document.getElementById("buttonpop");




// Récupération des mes éléments HTML d'introduction //
let dialogbox = document.getElementById("dialogue");
let blockemployeur =document.getElementById("nomemployeur");
let elementsintro = document.getElementById("introduction");
let boutonint = document.getElementById("boutonintro")
let allavatar = document.getElementById('avataremployeur')
let nomavatar = document.getElementById("nomemp")
let validernom2 = document.getElementById("validernom")

//Objets utilisateur//
let profil =document.getElementById("profil")

//null défini par le "click" avatar et la box "text"
let dialcyril = document.createElement("img")
dialcyril.src = "images/_996826cf-77ab-4fc6-8aef-fb999d0662df.jpeg";
dialcyril.classList.add("lesavatarscyril");

//choix avatar utilisateur//
let imgprofil=document.getElementById("imgprofil")
let avatar01 = {
    genre : null,
    nom : null ,
}

// Config de mes fonctions//
    

function depart (){

profilut.style.display="none"
dialogbox.style.display="none"
elementsintro.style.display="none";
nomavatar.style.display="none";
blockemployeur.style.display="none";
boutondepart.addEventListener("click",()=>{

    zonedepart.style.display="none";
    elementsintro.style.display="";
    dialogbox.style.display=""

})
}

function dial01(){
dialogbox.appendChild(dialcyril)
let dialut = document.createElement("img");
dialut.classList.add("lesavatarsut");



    if(avatar01.genre === 'femme'){
        dialut.src = "images/_a61c3a5d-2276-41f5-901d-e13c8b447ca2.jpeg";  
    }
    else{
        dialut.src = "images/_5bb61b85-dd98-4c22-be8e-5a1b622c5b80.jpeg";
    }
    if(avatar01.genre === 'femme')
    {  
        imgprofilh.style.display="none";
    }
    else{
        
        imgprofilf.style.display="none";
    }

dialogbox.appendChild(dialut);
boutontext02.addEventListener("click",()=>
{
    dialut.style.display="none"

})
}


// Dialogues //

//Dial 01
let text01 = document.createElement("p")
text01.classList.add("textsdialogues")

let boutontext01= document.createElement("button")
boutontext01.textContent="Show me your skills, Cyril !";
boutontext01.classList.add("boutonstexts");
let boutontext02= document.createElement("button")
boutontext02.textContent="Non désolé, je m'en vais";
boutontext02.classList.add("boutonstexts");

//Dial 02

let text02 = document.createElement("p")
text02.classList.add("textsdialogues")

let text03 = document.createElement("p")
text03.classList.add("textsdialogues2")

let boutontextrestart= document.createElement("button")
boutontextrestart.textContent="Try again ?";
boutontextrestart.classList.add("boutonrestart");


function textsdialogue(){
    
    text01.textContent=" Enchanté "+ avatar01.nom +" !"+ " Comme vous le savez sûrement, je suis à la recherche d'une alternance pour la rentrée de septembre 2024. Peut-être pourriez-vous m'aider ?"
    dialogbox.appendChild(text01)
    dialogbox.appendChild(boutontext01)
    dialogbox.appendChild(boutontext02)
    zoneprofil.textContent = avatar01.nom;

};

function textsdialogue02(){
    
    text02.textContent="Mince... Si vous changez d'avis, n'hésitez pas à cliquer sur le bouton ci-dessous"
    dialogbox.appendChild(text02)
    dialogbox.appendChild(boutontextrestart)
    zoneprofil.textContent = avatar01.nom;

    boutontextrestart.addEventListener("click", function(event){
        location.reload(true);
    })
};

function textsdialogue03(){
    
    text02.textContent="Super ! C'est parti alors !"
    text03.textContent="MotionDesigner pendant 13 ans, j'ai eu l'opportunité de travailler sur un max de super projet !"
    
    dialogbox.appendChild(text02)
    dialogbox.appendChild(text03)
    dialogbox.appendChild(boutontext01)
    dialogbox.appendChild(boutontext02)
    zoneprofil.textContent = avatar01.nom;
};



  
   
    
        
       
    
    
  
