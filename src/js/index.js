import '../scss/main.scss';

/* place your code below */

console.log("Hello there");
console.log("General Kenobi!");
console.log("Witaj strudzony przybyszu. Internet to miejsce dziwne, ale wspaniałe. A najlepszym, co może Cię spotkać w Internecie, są memy. Jeśli podzielasz to zdanie, zapraszam na podstronę Memes.");

//Praca domowa - utworz funkcję powitalną, jako parametr niech przyjmuje imię i wiek

const hello = (name, age) => {
    console.log(`Mam na imię ${name} i mam ${age} lat, a Ty?`);
    return console.log(`psst, żeby się przywitać wpisz: sayHello("TwojeImię", TwójWiek) i wciśnij enter:)`);
};

let helloKrysia = hello("Krysia", 26);


const sayHello = (name, age) => {
    console.log(`Cześć Krysia, ja mam na imię ${name} i mam ${age} lat!`);
    
};


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.nav__list--js');
    nav.classList.toggle('nav__list--open');

    const menuOpen = document.querySelector('.hamburger__svg--js');
    menuOpen.classList.toggle('hamburger__svg--invisible');

    const menuClose = document.querySelector('.hamburger__close--js');
    menuClose.classList.toggle('hamburger__close--visible');

})
