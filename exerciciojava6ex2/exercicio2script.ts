import {Plane} from './plane';
const prompt = require ('prompt-sync');

//const plane = new Plane();
const accents = Number(prompt('Quantidade de Acentos:'));
const airline = prompt('Companhia Aérea: ');
const airplaneModel = prompt('Modelo do Avião: ');
const airplaneWeight = prompt('Peso do Avião: ');
const numberOfPassengers = prompt('Número de Passageiros: ');

const flight1 = new Plane({airline, airplaneModel, airplaneWeight, accents, numberOfPassengers});

console.clear();
console.log(`Faça seu check in\nquantidade de Acentos: ${flight1.accents}\nCompanhia Aérea: ${flight1.airline}\nmodelo da aeronave: ${flight1.airplaneModel}\npeso do Avião: ${flight1.airplaneWeight}\nquantidade de Passageiros: ${flight1.numberOfPassengers}\n`);
console.log(flight1.toFly());