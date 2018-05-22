'use strict'

let liczba = 10; //zainicjowana zmienna globalna

//tworze funkcje
function zmienWartosc() {
//    zmieniam wartosc zmiennej globalnej
    liczba = 20;
    console.log(liczba);
}

console.log(liczba); //liczba bedzie miala wartosc 10 bo przed wykonaniem funkcji
zmienWartosc(); //liczba bedzie 20
console.log(liczba); //iczba = 20 bo po wykonaniu funkcji


