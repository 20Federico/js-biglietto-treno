
alert('Benvenuto, per calcolare il prezzo del tuo biglietto, clicca ok');

const km = prompt('Quanti chilometri devi percorrere?');
const age = prompt('Quanti anni hai?');
const price = (0.21 * km).toFixed(2);
const priceYoung = (price - (price / 5)).toFixed(2);
const priceOld = (price - (price * 2 / 5)).toFixed(2);
const msgPrice = 'Il prezzo del tuo biglietto è di ';

if (isNaN(km) || isNaN(age) || km < 0 || age < 0) {
  alert('Numero non valido. Ricarica la pagina e riprova.');
} else {

  if (age <= 18) {
    alert(msgPrice + priceYoung + '€.');
  } else if (age >= 65) {
    alert(msgPrice + priceOld + '€.');
  } else {
    alert(msgPrice + price + '€.');
  }

}

