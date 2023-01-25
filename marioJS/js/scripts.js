// On va chercher tous les éléments sur lesquels on intervient
let mario = document.querySelector("#mario");
let solHaut = document.querySelector("#sol-haut");
let solBas = document.querySelector("#sol-bas");
let paysage = document.querySelector("#paysage");
let ciel = document.querySelector("body");

// On conserve le "décalage" des éléments
let decalage = 0;

window.onload = () =>{
   document.addEventListener("keydown", marcher)
   document.addEventListener("keyup",stopper)
}
/**
 * Cette fonction fait marcher Mario Bross
 */
function marcher(e) {
    switch (event.key) {
        case "ArrowLeft":
            // on fait marcher mario
            mario.classList.add("mario-gauche")
            mario.classList.remove("mario-droite")
            //on anime les différents éléments
            parallaxe()
            /**ces eléments ont été introduits dans la fonction parralaxe
            solBas.style.backgroundPositionX = (decalage*4)+"px"
            solHaut.style.backgroundPositionX = (decalage*4)+"px"
            paysage.style.backgroundPositionX = (decalage*2)+"px"
            ciel.style.backgroundPositionX = (decalage*1)+"px"*/
            decalage++
            break;
            case "ArrowRight":
                 // on fait marcher mario
                mario.classList.add("mario-droite")
            mario.classList.remove("mario-gauche")
            parallaxe()
            /**
             * ces eléments ont été introduits dans la fonction parralaxe
            * solBas.style.backgroundPositionX = (decalage*4)+"px"
            solHaut.style.backgroundPositionX = (decalage*4)+"px"
            paysage.style.backgroundPositionX = (decalage*2)+"px"
            ciel.style.backgroundPositionX = (decalage*1)+"px"
            */
            

            decalage--
            
                break;
    
        default:
            break;
    }
    
}

/**
 * Cette fonction arrête Mario Bross
 * 
 */
function stopper(e) {
    mario.classList.remove("mario-gauche")
    mario.classList.remove("mario-droite")
}

/**
 * On décale les différents éléments
 */
function parallaxe() {
    solBas.style.backgroundPositionX = (decalage*8)+"px"
            solHaut.style.backgroundPositionX = (decalage*8)+"px"
            paysage.style.backgroundPositionX = (decalage*4)+"px"
            ciel.style.backgroundPositionX = (decalage*2)+"px"
    
 }
