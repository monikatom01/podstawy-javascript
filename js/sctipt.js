'use scrict';

//    zimienne

let liczba = 10;
let Liczba = 20;
//w javascripy wielkosc liter ma znaczenie 
//duże litery zarezerwowane sa dla klas
console.log(liczba);
console.log(Liczba);

//     funkcje


//funkcja loguje do konsoli "123"

function logujDoKonsoli() {
    console.log('123');
}
logujDoKonsoli();


//funkcja dodaje do siebie trzy elementy 

function dodaj(par1, par2, par3) {
//    console.log(par1 + par2 + par3);
    return par1 + par2 + par3;
}
//chcemy ta funkcja dodac 123
//dodaj(1,2,3);


//funkcja odejmuje od siebie 2 cyfry 

function odejmij(par1, par2, par3) {
    console.log(par1 - par2 - par3);
//    return par1 - par2 - par3;
}
//wywolujemy funkcje odejmujemy 
odejmij(dodaj(1,2,3),150,200);


//      instrukcja return

//return pozwala na zwrocenie wartosi - tzn. odda nam wartosc, ktora mozna dalej wykorzystac (returna nie widzis w konsoli)

//console.log() loguje tylko do konsoli -nie zwraca wartosci



//      zasieg zmiennych






















