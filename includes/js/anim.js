const targettext = document.querySelector('.title-content h2');
let wordIndex = 0;
let letterIndex = 0;

if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const home = document.getElementById("home");
    home.classList.add("current");
    let array = ["Présentationㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/ombrieres/" || window.location.pathname === "/ombrieres") {
    const ombrieres = document.getElementById("ombrieres");
    ombrieres.classList.add("current");
    let array = ["Les ombrières solairesㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/politic-confidentiality/" || window.location.pathname === "/politic-confidentiality") {
    let array = ["Politique de confidentialitéㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/groupe/" || window.location.pathname === "/groupe" || window.location.pathname === "/groupe/#about-us" || window.location.pathname === "/groupe/#partners"|| window.location.pathname === "/groupe#about-us" || window.location.pathname === "/groupe#partners") {
    const group = document.getElementById("group");
    group.classList.add("current");
    let array = ["Le groupeㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/contact/" || window.location.pathname === "/contact") {
    const contact = document.getElementById("contact");
    contact.classList.add("current");
    let array = ["Nous contacterㅤ"];
    Animletter(array);
}

function Animletter(array) {
    const createLetter = () => {
        const letter = document.createElement('span');
        targettext.appendChild(letter);
      
        letter.textContent = array[wordIndex] [letterIndex];
      
        setTimeout(() => {
          letter.remove(); 
        }, 2000);
      }
      
      const loop = () => {
        setTimeout(() => {
          if(wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
          } else if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop()
          }else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
              loop();
            }, 2800);
          }
        }, 60)
      }
      loop();
}