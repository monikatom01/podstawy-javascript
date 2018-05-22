//operatory arytmetyczne
// %-modulo, zwraca reszte z dzielenia
console.log(3%2);
console.log(10%4);

let zmienna = 3;
//console.log(zmienna++); // wyrzuci 3 (najpierw uzyj pozniej zwiekrz)
console.log(++zmienna); // wyrzuci 4 (najpier zwiekrz pozniej uzyj)



// operatory porownania

if(2 == '2') {
    //w przypadku == sprawdzamy czy dane z lewej i prawej sa sobie rowne (niezaleznie od typu)
    console.log('2 == "2"');
}

//w przypadku === sprawdzamy czy dane z lewej i prawej sa sobie rowne i czy sa tego samego typu

if(2 === '2') {
    //console.log sie nie wykona
    console.log('2 === "2"');
}

// zeby sprawdzic jaka dana console.log(typeof   )



// operatory logiczne 


if(2 == '2' && 3 == '3'){
    console.log("2 == '2' && 3 == '3'");
}


if(2 == '2' || 3 === '3'){
    console.log("2 == '2' || 3 === '3'");
}

// boolenowska na wartosc false (!boolenowska)-zaprzeczenie falszu czyli prawda
let boolenowska = false;
if(!boolenowska) {
    console.log('Zaprzeczenie dla boolenowska = false');
}


// operatory warunkowe

// warunek ? wartosc_jezeli_prawda : wartosc_jezeli_falsz

let liczba = 100;
let wynik = (liczba < 0) ? 'prawda' : 'falsz';
console.log(wynik);


// instrukcje warunkowe 
 // if-else

if(2 === '2'){
    console.log("2 === '2'");
} else {
    console.log("2 !== '2'");
}

// else-if

if(2 === '2'){
    console.log("2 === '2'");
} else if (3 >=1 && 3 <=5) {
    console.log('3 miesci sie w przedziale 1-5');
} else {
    console.log("2 !== '2'");
}

// switch 

let kolor = 'czerwony';
switch(kolor){
    case 'niebieski':
        console.log('podales kolor niebieski');
        break;
    case 'zielony':
        console.log('podales kolor zielony');
        break;
    case 'czerwony':
        console.log('podales kolor czerwony');
        break;
    default:
        console.log('jestes daltonista');
}







































