/* Ajout d'un évènement d'écoute lors du scroll */
window.addEventListener("scroll", function(event) {

    let y = this.scrollY; /* Initialisation de la variable y avec la positon Y dans la page */
    const SizeNavBar = document.getElementById("navbar"); /* Initialisation de la variable SizeNavbar avec l'id de la navbar dans la page */
    const TopBtn = document.getElementById("top_btn"); /* Initialisation de la variable TopBtn avec l'id du bouton Top_btn dans la page */
    const BannerTop = document.querySelector(".banner-top img"); /* Initialisation de la variable BannerTop avec la class et le type de balise de la bannière de haut de page */

    let pos = 5;
    let op = 1;
    let newPos = pos+y/4+"px";
    let newOp = op-y/280;

    BannerTop.style.marginTop = newPos; /* Donner à la bannière un margin-top avec les valeurs données dans la variable newPos */
    BannerTop.style.opacity = newOp; /* Donner à la bannière une opacité avec les valeurs données par la variable newOp */

    /* Condition si y est supérieure ou égale à 100, ajouter la classe scrolled à la navbar sinon si ce n'est pas le cas, l'enlever */
    if (y >= 100) {
        SizeNavBar.classList.add("scrolled");
    }
    else {
        SizeNavBar.classList.remove("scrolled");
    }


    /* Condition si y est supérieure ou égale à 500, changer l'opacité du bouton et son Z-index et si ce n'est pas le cas, remettre les valeurs par défauts */
    if (y >= 500) {
        TopBtn.style.opacity = "0.7";
        TopBtn.style.zIndex = "99";
    }
    else {
        TopBtn.style.opacity = "0";
        TopBtn.style.zIndex = "-1"
    }

    
  
}, false);

/* Fonction permettant de changer l'opacité à 0.9 */
function ch_op_b(a) {
    a.style.opacity = "0.9";
}

/* Fonction permettant de chager l'opacité à 0.7 */
function ch_op_a(a) {
    a.style.opacity = "0.7"
}

/* Fonction permettant au bouton TopBtn de remonter jusqu'au haut de page */
function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


  