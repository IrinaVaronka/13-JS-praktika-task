console.clear()
/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. 
Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. 
Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, 
    kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
 Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. 
 (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar 
pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs 
ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. 
Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('-----1------');

const a = 65;
const b = 6;
if (a === b) {
    console.log('a ir b lygus');
} else  if (a > b) {
    console.log('a didesnes uz b');
} else if (a < b) {
    console.log('b didesnes uz a');
}

console.log('-----2------');
for (let i = 1; i <= 10; i++) {
   console.log(i);
    
}
console.log('-----3------');
for (let i = 0; i <= 10; i = i+2) {
    console.log(i);
     
 }

 console.log('-----4------');

for (let i = 0; i < 5; i++) {
    console.log(rand(1, 10));
}
console.log('-----5------');

let randNumber = 0;
while (randNumber != 5) {

    randNumber = rand(1, 10);
    console.log(randNumber)
}
console.log('-----6------');

let arr = [];
let biggest = 0;
for (let i = 0; i < rand(20, 30); i++) {
    arr[i] = rand(10, 30);
    if (arr[i] >= biggest) {
        biggest = arr[i];
    }
}
console.log(arr);
console.log('didziausia masyvo reiksme: ' + biggest);


console.log('-----7------');

// let arrRaides = [];
// let raides = 'ABCD';
// for (let i = 0; i <= 100; i++) {
// }

console.log('-----8------');
function lygineSuma(c, d) {
    if (typeof c === 'number' && typeof d === 'number') {
        let sumNumbers = c + d;
        if (sumNumbers % 2 == 0) {
            return 'suma nelyginė';
        } else {
           return sumNumbers; 
        }
    } else if (Array.isArray(c) && Array.isArray(d)) {
        let sumArr = c.length + d.length;
        if (sumArr % 2 !== 0) {
            return 'suma nelyginė';
        } else {
            return sumArr; 
         }
    } else {
        return 'not a number and not an array'
    }

} 

console.log(lygineSuma([1, 1], [1, 1]));

console.log('-----9------');

function pirminisSkaicius(y) {
    let f = 0;
    if (typeof y === 'number') {
        for(let i = 2; i < y; i++) {
            if (y % i === 0) {
                return 'pirminis skaicius';
            } else {
                return 'nepirminis skaicius';
            }
         }
        
        }
    }
console.log(pirminisSkaicius(2));