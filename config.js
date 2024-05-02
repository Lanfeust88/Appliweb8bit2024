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

// Elements sonores
const volmoins = document.getElementById("-");
const volplus = document.getElementById("+");
const musique = new Audio("Musiques/204_full_8bit-adventure_0155_preview.mp3");
const musicOn = document.getElementById("musicon");
const musicoff=document.getElementById("off");

musicOn.addEventListener("click",()=>{
    musique.play();
    musicOn.style.display=("none")
});
musicoff.addEventListener("click",()=>{
    musique.volume=0
});
volmoins.addEventListener("click",()=>{
    musique.volume= musique.volume - 0.1;
});
volplus.addEventListener("click",()=>{
    musique.volume= musique.volume + 0.1;
});
const musiclose= new Audio("Musiques/304.mp3");

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
function displaypopup(){
    let popup = document.getElementById("pop")
    popup.style.display= ""

    buttonpop.addEventListener("click",()=>{
        popup.style.display= "none";
        zonedepart.style.display="" 
    })
    }
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

avatar01.genre ==="femme" ? dialut.src = "images/_a61c3a5d-2276-41f5-901d-e13c8b447ca2.jpeg" :dialut.src = "images/_5bb61b85-dd98-4c22-be8e-5a1b622c5b80.jpeg";

avatar01.genre ==="femme" ? imgprofilh.style.display="none":imgprofilf.style.display="none";


dialogbox.appendChild(dialut);
boutontext02.addEventListener("click",()=>
{dialut.style.display="none"})}
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
let text04 = document.createElement("p")
text04.classList.add("textsdialogues3")
let text05 = document.createElement("p")
text05.classList.add("textsdialogues4")
let text06=document.createElement("p")
text06.classList.add("textsdialogues4")
let text07=document.createElement("p")
text07.classList.add("textsdialogues")
let text08=document.createElement("p")
text08.classList.add("textsdialogues4")
let boutontextrestart= document.createElement("button")
boutontextrestart.textContent="Try again ?";
boutontextrestart.classList.add("boutonrestart");
let boutontext03= document.createElement("button")
boutontext03.textContent="Suite";
boutontext03.classList.add("boutonstexts2");
let boutontext04= document.createElement("button")
boutontext04.textContent="Linkedin"
boutontext04.classList.add("boutonstexts3");
boutontext04.onclick= function(){
    document.location.href="https://www.linkedin.com/in/cyril-plou/"
};
//Dial03
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
    text03.textContent="MotionDesigner pendant 13 ans, j'ai eu l'opportunité de travailler sur un grand nombre de supers projets !"
    text04.textContent="A présent, je veux me tourner vers une autre passion : le code ! Je me suis auto-formé en HTML, CSS et Javascript. J'ai aussi de très bonnes notions en Wordpress."
    text06.textContent="Au mois de septembre, j'intègre la formation Développeur Web & mobile en alternance chez Simplon..."
    text07.textContent=" Dynamique, passionné et investi, j'aspire à intégrer en septembre une équipe avec qui partager, échanger et apprendre !"
    text08.textContent=" Alors si vous désirez que l'on échange, par message ou de vive voix, contactez-moi via Linkedin."
    dialogbox.appendChild(text02)
    dialogbox.appendChild(text03)
    dialogbox.appendChild(boutontext01)
    dialogbox.appendChild(boutontext02)
    dialogbox.appendChild(text04)
    dialogbox.appendChild(text06)
    dialogbox.appendChild(boutontext03)
    zoneprofil.textContent = avatar01.nom;
    boutontext03.addEventListener("click",()=>
{
    text02.style.display="none"
    text03.style.display="none"
    text04.style.display="none"
    text06.style.display="none"
    dialogbox.appendChild(text07)
    boutontext03.style.display="none"
    dialogbox.appendChild(text08)
    dialogbox.appendChild(boutontext04)
})
};




  
   
    
        
       
    
    
  
