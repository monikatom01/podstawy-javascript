let tablica = [1, 150, 300, 420, 325, 100];
// petla for
//wyrarzenie poczatkowe, warunek, wyrazenie modyfikujace

//for(let i = 0; i < tablica.length; i++) {
//    //wypisz "indeks (iterakcje) lelement to: element"
//    console.log("index[" + i + "], a element to: " + tablica[i]);
//}


//petla forEach - tylko do tablic
tablica.forEach(function (element, index) {
    console.log("index[" + index + "], a element to: " + element);
});


//petla while
let liczba = 10;
while (liczba >= 1) {
    console.log(liczba);
    liczba--;
}

// petla do.....while -wykona sie choc raz mimo ze jest fausz (najpier zrob pozniej sprawdz warunek)

let liczba2 = 10;
do {
    console.log(liczba2);
    liczba2--;
} while (liczba2 < 1);


//przerywanie petli 

let i = 0;

while (true) {
    console.log("napis [i = " + i + "]");
    if (i++ >= 9) {
        break;
    };
}



for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue
    };
    /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji
    jeśli jest podzielna przez dwa to wypisz tą iterację */
    console.log(i + " ");
}

// JSON

let jsonObj = {

    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
            },
        {
            "firstName": "Anna",
            "lastName": "Smith"
            },
        {
            "firstName": "Peter",
            "lastName": "Jones"
            }
    ]
}

//chcemy wyciagnac johna
console.log(jsonObj.employees[0].firstName);
console.log(jsonObj.employees[2].lastName);

// chcemy wyciagnac wszystkich

for(let i = 0; i < jsonObj.employees.length; i++) {
    console.log(jsonObj.employees[i].firstName + ' ' + jsonObj.employees[i].lastName);
}












