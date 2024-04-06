/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
/*RISPOSTA1*/ 
for (let i = 0 ; i < pets.length ; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/*RISPOSTA 2 */
/*pets.sort();
console.log(pets); se faccio così , mi stampa l'array in console(su una sola riga). Se invece voglio fare la stampa come sopra, si usa il for*/






/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//RISPOSTA 3
 
/* pets.reverse();
console.log(pets);      //così stampa su una sola riga in console
for (let i = 0 ; i < pets.length ; i++){
  console.log(pets[i]);    //così stampa ogni singolo elemento,su righe diverse in console
}*/



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
//RISPOSTA4
//utilizzo i metodi degli array: prima tolgo l'elemento dall'inizio dell'array e lo racchiudo in una costante, e poi lo rimetto in coda
const primoElemento = pets.shift();
pets.push(primoElemento);
console.log(pets);
 




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


//RISPOSTA5

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = Math.floor(Math.random() * 100000); //ho pensato di farmi associare un numero casuale di 5 cifre diverso per ogni targa
}
console.log(cars);



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//RISPOSTA 6
//mi creo prima un oggetto nuovo e poi dopo lo inseriamo con il push nell'array(calcolo l'aggiunta anche del licensePlat)
const newCar = {
  brand: 'Fiat',
  model: '500XL',
  color: 'grey',
  trims: ['life', 'st'],
  licensePlate : Math.floor(Math.random() * 100000)
}
cars.push(newCar);
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0 ; i < cars.length ; i++){
  let firstTrim = cars[i].trims[0]; //creo una variabile che prende,per ogni elemento di cars,il primo valore di trims e poi lo aggiungo in justTrims
  justTrims.push(firstTrim);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
//RISPOSTA8

let messaggio = "";          //creo prima una variabile messaggio        
for (let i = 0 ; i < cars.length ; i++){
  firstLetter = cars[i].color.slice(0,1); //qua gli dico "prendimi ogni prima lettera del valore del colore per ogni elemento[i] dell'array" 
  if(firstLetter === "b"){                //e lo racchiudo in una variabile così è più ordinato fare il confronto nell'if
    messaggio = "Fizz";                   //se la prima lettera è uguale a "b", scrivimi Fizz nel messaggio ,altrimenti scrivimi Buzz
  }else{
    messaggio = "Buzz";
  }
  console.log(messaggio);    //qui messaggio mi stampa buzz,fizz,fizz,buzz (dato che i colori che ho sono red,blue,black,gray)
}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log(numericArray);

let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) { //gli sto dicendo: fino a quando c'è qualcosa nell'array e fino a quando non incontri il numero 32,stampa l'array
  console.log(numericArray[i]);
  i++;
}

//posso farlo anche con il for
for ( let i = 0 ; i < numericArray.length ; i++){
  if(numericArray[i] === 32 ){
    break ; 
  }
  console.log(numericArray[i]);
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
let charactersArrayNumber = [];


for (let i = 0; i < charactersArray.length; i++) {
  let valore = 0;
  switch (charactersArray[i]) {               //Qui gli sto dicendo: cicla dentro l'array charactesArray e controlla ogni valore:
    case 'd':                                 //nel caso in cui incontri la d , spingimi dentro l'array vuoto charactersArrayNumber un elemento a cui ho assegnato valore di 4
      charactersArrayNumber.push(valore = 4); //e fai questo per tutta la lunghezza nel codice: in base ai "case" mi spingi dentro il secondo array il valore corrispondente
      break;                                  //Quando hai finito tutto il ciclo for, esci e stampami il nuovo array compilato
    case 'g':
      charactersArrayNumber.push(valore = 7);
      break;
    case 'n':
      charactersArrayNumber.push(valore = 14);
      break;
    case 'u':
      charactersArrayNumber.push(valore = 21);
      break;
    case 'z':
      charactersArrayNumber.push(valore = 26);
      break; 
  }
  
}

console.log(charactersArrayNumber);


//se volessimo fare un codice switch completo per tutte le lettere dell'alfabeto(anche maiuscole e minuscole) in modo che qualsiasi array di lettere che ci viene fornito possiamo fare la stessa cosa,
//allora il codice completo dello switch è questo: (ovviamente all'occorrenza vanno modificati i nomi degli array) 

switch (charactersArray[i]) {
  case 'a':
  case 'A':
    charactersArrayNumber.push(valore = 1);
    break;
  case 'b':
  case 'B':
    charactersArrayNumber.push(valore = 2);
    break;
  case 'c':
  case 'C':
    charactersArrayNumber.push(valore = 3);
    break;
  case 'd':
  case 'D':
    charactersArrayNumber.push(valore = 4);
    break;
  case 'e':
  case 'E':
    charactersArrayNumber.push(valore = 5);
    break;
  case 'f':
  case 'F':
    charactersArrayNumber.push(valore = 6);
    break;
  case 'g':
  case 'G':
    charactersArrayNumber.push(valore = 7);
    break;
  case 'h':
  case 'H':
    charactersArrayNumber.push(valore = 8);
    break;
  case 'i':
  case 'I':
    charactersArrayNumber.push(valore = 9);
    break;
  case 'j':
  case 'J':
    charactersArrayNumber.push(valore = 10);
    break;
  case 'k':
  case 'K':
    charactersArrayNumber.push(valore = 11);
    break;
  case 'l':
  case 'L':
    charactersArrayNumber.push(valore = 12);
    break;
  case 'm':
  case 'M':
    charactersArrayNumber.push(valore = 13);
    break;
  case 'n':
  case 'N':
    charactersArrayNumber.push(valore = 14);
    break;
  case 'o':
  case 'O':
    charactersArrayNumber.push(valore = 15);
    break;
  case 'p':
  case 'P':
    charactersArrayNumber.push(valore = 16);
    break;
  case 'q':
  case 'Q':
    charactersArrayNumber.push(valore = 17);
    break;
  case 'r':
  case 'R':
    charactersArrayNumber.push(valore = 18);
    break;
  case 's':
  case 'S':
    charactersArrayNumber.push(valore = 19);
    break;
  case 't':
  case 'T':
    charactersArrayNumber.push(valore = 20);
    break;
  case 'u':
  case 'U':
    charactersArrayNumber.push(valore = 21);
    break;
  case 'v':
  case 'V':
    charactersArrayNumber.push(valore = 22);
    break;
  case 'w':
  case 'W':
    charactersArrayNumber.push(valore = 23);
    break;
  case 'x':
  case 'X':
    charactersArrayNumber.push(valore = 24);
    break;
  case 'y':
  case 'Y':
    charactersArrayNumber.push(valore = 25);
    break;
  case 'z':
  case 'Z':
    charactersArrayNumber.push(valore = 26);
    break;
}