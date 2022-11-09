// Recupére les éléments de la nav bar
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const nav_element = document.querySelectorAll(".nav-link");

// Fonction qui permet d'ouvrir et des fermer la nav
const openNav = () => {
    //ajoute la class open pour afficher le burger menu (voir css)
    burger.classList.toggle("open");
    //Recupère l'attribut aria pour l'accésibilité
    const showAria = burger.getAttribute
    //Ajoute ou retire l'attribut aria selon l'état de la nav
    ("aria-expanded") === "true" ? "false" : "true";
    burger.setAttribute("aria-expanded", showAria)
    // ajoute la class open pour ouvrir la nav (voir css)
    nav.classList.toggle("open")


    //animation pour le burger menu
    if (burger.classList.contains("open") === true) {
        //initialise un delai de base
        let delay = 700
        //Pour chaque element dans la nav retirer l'opacité à chaque appel de la fonction
        nav_element.forEach(element => {
                element.style.transition = "opacity 0s ease-out";
                element.style.opacity = "0";
        });
        //Pour chaque element, affiche avec un délai qui s'incrémente l'element de la nav
        nav_element.forEach(element => {
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transition = "opacity 0.4s ease-out";
            }, delay.toString())
            delay += 100
        });
    }
}

//Appelle la fonction openNav à chaque clique du burger menu
burger.addEventListener("click", openNav)


//Observer qui ecoute si la page se resize(evite que les element nav soit transparent lors qu'on resize) et gere la transition des éléments
new ResizeObserver(entries => {
    if(entries[0].contentRect.width > 832) {
        nav_element.forEach(element => {
            element.style.opacity = "1";
            element.style.transition = "opacity 0.4s ease-out";
        });
        nav.style.transition = "0s";
    } else if (entries[0].contentRect.width <= 832) {
        nav.style.transition = "0.5s";
    }
}).observe(document.body)





