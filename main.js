const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

/* stringa che conterrà il codice HTML delle slides*/
let slides = "";

for(let i = 0; i < items.length; i++){
    slides += ` <img src="${items[i]}" alt="immagine ${i + 1}">
                <div class="details">
                    <h2 class="title">${title[i]}</h2>
                    <p class="description">${text[i]}</p>    
                </div>`;
                
}

/* variabile che contrrà il tag "padre" delle immagini*/
let mainImageContainer = document.querySelector(".main-image");
mainImageContainer.innerHTML = slides;


/* slide in cui si trova attulamente l'utente*/
let slideCorrente = 0;

/* prendo il vettore di tutte le immagini e aggiungo la classe active all'indice corretto*/
let vettoreImmagini = document.querySelectorAll(".main-image img");
vettoreImmagini[slideCorrente].classList.add("active");

/* prendo il vettore di tutte le miniature e aggiungo la classe active all'indice corrente*/
let vettoreMiniature = document.querySelectorAll(".thumb");
vettoreMiniature[slideCorrente].classList.add("active");


/* Variabili dei 2 bottoni*/
let BottoneSu = document.getElementById("button-up");
let BottoneGiu = document.getElementById("button-down");


/* evento del bottone su*/
BottoneSu.addEventListener("click", function(){
    
    /* se l'utente è sulla prima slide quando clicca, allora resetto tornando all'ultima*/
    if(slideCorrente == 0){
        vettoreImmagini[slideCorrente].classList.remove("active");
        vettoreMiniature[slideCorrente].classList.remove("active");

        slideCorrente = vettoreImmagini.length - 1;

        vettoreImmagini[slideCorrente].classList.add("active");
        vettoreMiniature[slideCorrente].classList.add("active");
    }else{ //altrimenti decremento il contatore della slide
        vettoreImmagini[slideCorrente].classList.remove("active");
        vettoreMiniature[slideCorrente].classList.remove("active");

        slideCorrente--;

        vettoreImmagini[slideCorrente].classList.add("active");
        vettoreMiniature[slideCorrente].classList.add("active");

    }
});

/* evento del bottone giù*/
BottoneGiu.addEventListener("click", function(){
    
     /* se l'utente è sull'ultima slide quando clicca, allora resetto tornando alla prima*/
    if(slideCorrente == vettoreImmagini.length - 1){
        vettoreImmagini[slideCorrente].classList.remove("active");
        vettoreMiniature[slideCorrente].classList.remove("active");

        slideCorrente = 0;

        vettoreImmagini[slideCorrente].classList.add("active");
        vettoreMiniature[slideCorrente].classList.add("active");
    }else{ //altrimenti incremento il contatore della slide
        vettoreImmagini[slideCorrente].classList.remove("active");
        vettoreMiniature[slideCorrente].classList.remove("active");

        slideCorrente++;

        vettoreImmagini[slideCorrente].classList.add("active");
        vettoreMiniature[slideCorrente].classList.add("active");

    }
})

