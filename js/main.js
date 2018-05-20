// const userAge = prompt('Entrez votre age :');
// if (userAge < 13) {
//     console.log(` ${userAge} :Acces refusé !`);

// } else if (userAge > 12 && userAge < 18) {
//     console.log(`${userAge} :Encore un peu de patience . . .`);

// } else {
//     console.log(`${userAge} :Bienvenue !`);

// }

const monFrigo = {
    tomates: 3,
    oeufs: 4,
    pain: 0,
    jambons: 2,
    poulet: 0,
    fromage: 1
}

if (monFrigo.pain > 0 && monFrigo.jambons > 0 && (monFrigo.tomates > 0 || monFrigo.fromage) > 0) {
    console.log(`ce soir c'est sandwich !`);

} else if (monFrigo.poulet > 0) {
    console.log(`ce soir c'est poulet`);

} else if (monFrigo.oeufs > 2) {
    console.log(`et pourquoi pas une omelette`);

} else {
    console.log(`bon ben je vais manger des chips ...`);

}

for (let i = 1; i < 11; i++) {
    console.log(i);

}

for (let i = 10; i > 1; i--) {
    console.log(i);

}

// for (let i = 2; i < 101; i += 2) {
//     console.log(i);

// }

// let userChoice = '';

// while (userChoice !== 'oui' || userChoice !== 'o' || userChoice !== 'non' || userChoice !== 'n') {
//     userChoice = prompt('Quitter? oui(o) / non(0)');
//     if (userChoice === 'oui' || userChoice === 'o') {
//         console.log(`à bientot`);
//         break;
//     } else if (userChoice === 'non' || userChoice === 'n') {
//         console.log(`merci de rester en notre compagnie`);
//         break;
//     }
// }

const square = (a) => a * a;
console.log(square(5));

// const somme = prompt(`quelle somme voulez vous convertir?`);
// const convert = (somme) => {
//     const choix = parseInt(prompt('1 pour une conversion en bitcoin / 2 pour une conversion euro'));
//     switch (choix) {
//         case 1:
//             console.log(somme * 7000);

//             break;
//         case 2:
//             console.log(somme / 7000);

//             break;
//     }
// }
// convert(somme);

var globale = `je suis accessible partout`;
function myPreetyFunction () {
    var locale =`Je ne suis accessible que dans la fonction`;
    globale2 = `Je serais accessible en dehors de la fonction`;
    console.log(globale);
}
// console.log(globale2);
myPreetyFunction();
console.log(globale);
// console.log(locale);
console.log(globale2);

const title = document.createElement('h1');
title.id = title; 
title.textContent = "Hey j'ai changé mon titre en JS";

const p = document.createElement('p');
p.textContent = "un super paragraphe JS";
const container = document.getElementsByClassName('container')[0];
container.textContent =" JS JS JS";
container.appendChild(p);

const randomColor = () => {
    let rgb = `rgb(`;
    let rgbColor = '';
    for (let i = 0; i < 3; i++) {
        
        const piff = Math.round(Math.random() * 255);
        rgbColor += `${piff},`;        
    }
    return rgb += rgbColor.slice(0,-1) + ')';
}
randomColor();

const body = document.getElementsByTagName("body")[0];
document.body.insertBefore(title, body.firstElementChild );
body.style.backgroundColor = randomColor();
p.style.height = '21px';
const link = document.createElement('a');
link.textContent = "mozilla";
link.setAttribute('href', 'https://developer.mozilla.org');
link.style.color = randomColor();
link.style.textDecoration = "none";
container.appendChild(link);

