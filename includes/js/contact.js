function upload() {
    // recupére l'element input
    const input = document.querySelector( '.inputfile' );
    // recupére l'element label qui suis l'elemnt input
    let label = input.nextElementSibling;
    // recupère la valeur de l'element label pour la modifier
    let labelVal = label.innerHTML;
    // créer un evenement change qui écoute tous les changements qui la stock dans une variable e
    input.addEventListener( 'change', function(e) {
        // recupére le chemin du fichier
        let fullPath = document.getElementById('file').value;
        if (fullPath) {
            let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            let filename = fullPath.substring(startIndex);
            // travaille la string pour la séparer en un ;array 
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                // récupère le nom du fichier
                filename = filename.substring(1);
            }
            // créer le string avec le symbole check
            let checksign = "&#10003";
            // ajoute le symbole check au nom du fichier pour l'afficher
            filename = (filename + " ") + checksign;
            //affiche le nom du fichier sur le label
            label.innerHTML = filename;
        }
    })
}

function validity() {
    //recupére tout les input avec la class check et boucle pour ecouter les elements
    const forms = document.querySelectorAll( '.check' ).forEach(item => {
        //ecoute les entrées des elements
        item.addEventListener('input', event => {
            //recupere la valeur actuel de l'array et la separe lettre par lettre pour la verifier
            let val = item.value.split('')
            // initialise et assigne l'array pour l'expression regulière
            let reg = ["1","2","3","4","5","6","7","8","9","0","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","`","{","|","}","~"]
            //Si le champs est un champs de text et que ce n'est pas le champ adresse
            if (item.type === "text" && item.name !== "adresse") {
                //initialise une variable qui verifie qu'il n'as pas de chiffre dans les champs de textes
                let found = 0
                //boucle pour vérifier si le champs posséde des elements de l'array reg
                reg.forEach(element => {
                    //increment si il en trouve
                    if (val.includes(element) ===  true) {
                        found++
                    }                    
                });
                //conditionnel qui verifie si l'entrée est un element interdit et que la valeur du champs posséde un des cractères de l'array reg
                if (reg.includes(event.data) === true && found > 0) {
                    //si oui ajoute la classe invalid
                    item.classList.add("invalid")
                } else if (found === 0) {
                    //sinon enleve la classe invalid si la valeur du champs ne posséde pas de cractères interdits
                    item.classList.remove("invalid")
                }
            }
        })
    })
}


//charge le code html du form pro
function load_pro() {
    $("#form-container").load('./../includes/templates/pro-contact.html');
}
//charge le code html du form particulier
function load_lambda() {
    $("#form-container").load('./../includes/templates/lambda-contact.html');
}
//charge le code html du form syndic
function load_syndic() {
    $("#form-container").load('./../includes/templates/syndic-contact.html');
}