'use strict';

let osoba = {
    name: 'Marcin',
    height: 184,
    print: function(){console.log(this.name);}  //this - oswolanie do tego konkretnego ele.
}


console.log(osoba);
console.log(osoba.name);
//console.log(osoba.name + ' ' + osoba.height);
//osoba.print();

//aby dodac nowy klucz do obiektu, podajemy nazwe zmniennej pod ktora trzymamy obiekt, kropke i nazwe nowego klucza wraz z przypisana wartoscia. Mozemy przypisywac rozniez metody

osoba.weight = 60;
osoba.wyswietlaDane = function() {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
osoba.wyswietlaDane();

// aby utworzyc klase, uzywamy slowa kluczowego class, podajemy nazwe klasy (z duzej litery), otwieramy nawias klamrowy i definiujemy construktor (ktory jest potrzebny do utworzenia obiektu z klasy) mastepnie mozemy zdefiniowac metody 

class Osoba {
    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlDaneOsobowe() {
        console.log(this.imie+ ' ' + this.nazwisko);
    }
}

let marcin = new Osoba('Marcin', 'G');
let krzysztof = new Osoba('Krzysztof', 'M');

marcin.wyswietlDaneOsobowe();
krzysztof.wyswietlDaneOsobowe();


// warsztat

// zmienna ktorej funkcja przypisuje losowa liczbe od 100 do 0

let warsztat = Math.floor((Math.random() * 100) + 1);

console.log(warsztat);







