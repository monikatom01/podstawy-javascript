'use strict';

//tablice indeksujemy od 0

let tablica = ['Agata', 'Michal', 'Andrzej'];

// zeby odwolac sie do konkretnego elementu tablicy urzywamy nazwa_tablicy[numer_indeksu]

console.log(tablica[1]);

//jezeli chcemy dodac wartosc do tablicy, mozemy zrobic to na kilka sposobow :

//1) nazwa_tablicy[numer_indeksu] = [przypisana_wartość]

tablica[3] = 'Stefan';
console.log(tablica);

//2) poprzez uzycie metody .push() - dodajemy element na koncu 

tablica.push('Monika');
console.log(tablica);

//3) aby dodac element na poczatek tablicy uzywamy metode .unshift()
tablica.unshift('imie');

//aby usunac ostatni element z tablilcy, wykonujemy metode .pop() - bezparametrowa

tablica.pop(); //usuwa ostatni z tablicy
console.log(tablica);

//aby usunac pierwszy element z tablicy, uzywamy metody .shift(); - bezparametrowa

tablica.shift();
console.log(tablica);

//aby zobaczyc dlugosc tablicy , uzywamy metody length

console.log(tablica.length);

//aby wypisac wszystkie lelementy tablicy w jednym ciagu uzywamy metody .join() - mozemy podac "lacznik"
console.log(tablica.join(' - '));

//odwracanie tablicy za pomoca metody .reverse()
console.log(tablica.reverse());
console.log(tablica);

//aby posortowac tablice uzywamy metody .sort()
console.log(tablica.sort());
console.log(tablica);









