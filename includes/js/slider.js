// Assigne à des variables tous les élements à propose de la description 
let title = document.getElementById("desc_title")
let subtitle1 = document.getElementById("subtitle_1")
let subtitle2 = document.getElementById("subtitle_2")
let text1 = document.getElementById("text_1")
let text2 = document.getElementById("text_2")


// Attends le chargement complet du DOM et initialise le splide
document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
      arrows: false,
      autoplay: true,
      loop: true,
      interval: 4000,
    } );
    
    // Ecoute si il y a un changement de slide
    splide.on( 'pagination:updated', function () {
        // retourne l'index du slide actif 
        let index = splide.index
        
        //Conditionnel qui permet d'afficher le bon texte selon l'index du slide
        if (index === 0) {
          title.innerHTML = "A la pointe de la technologie verte <br> Panneaux et ombrières solaires";
          subtitle1.innerHTML = "Implantation";
          subtitle2.innerHTML = "Nos engagements";
          text1.innerHTML = "Implanté dans la région Occitanie et travaillant avec les métropoles montpelliéraines et toulousaines, Sunpower vous accompagne dans votre projet d’installation de panneaux et d’ombrières solaires.";
          text2.innerHTML = "Pleinement engagé dans la lutte contre le changement climatique et dans la transition énergétique, Sunpower voit dans chaque projet l’opportunité de mettre en place une action en faveur de l’environnement. Les ombrières solaires: un concept clé de l’énergie verte. Avec des panneaux à haut rendement, il est désormais possible de charger vos voitures électriques grâce à l’énergie solaire.";
        } else if (index === 1) {
          title.innerHTML = "Aussi bien dans les collectivités que chez les particuliers";
          subtitle1.innerHTML = "Rejoignez-nous!";
          subtitle2.innerHTML = "Notre projet";
          text1.innerHTML = "Nous intervenons aussi bien auprès des collectivités que des particuliers. Un projet ? Contactez-nous via nos formulaires de demandes adaptés selon votre situation.";
          text2.innerHTML = " Chez Sunpower, nous participons au développement de vos projets, quel que soit votre structure. Que vous soyez une collectivité voulant mettre l’accent sur une démarche écologique de grande ampleur ou bien un particulier souhaitant l’autonomie énergétique, nous vous épaulons dans vos projets.";
        } else if (index === 2){
          title.innerHTML = "Recherches & Développement";
          subtitle1.innerHTML = "Nos valeurs";
          subtitle2.innerHTML = "Projets conjoints";
          text1.innerHTML = "La recherche et le développement constituent l’ADN de notre société et s’expriment avec l’amélioration constante de nos technologies.";
          text2.innerHTML = "Un de nos projets phares, que nous menons conjointement avec le CEA et le groupe PSA, est un système de recharge par induction à haute puissance sur des distances de plus de 1 mètre. Nos principaux travaux concernent <br> - L’électronique de puissance <br> - Le développement des BMS (Battery Mangement System) <br>- L’électronique embarquée";
        }
    } );

    // Créer le slider
    splide.mount();
  } );