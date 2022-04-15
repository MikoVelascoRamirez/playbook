import Viajero from './viajero.js';

//Modularizando clases y utilizándolas mediante módulos

const viajero1 = new Viajero("Miko", "LaunchX", "Node JS", "Abril 2022");
console.log(viajero1)
console.log(viajero1.getGeneralInfo()) //Método de la clase hija
console.log(viajero1.getNameAndUsername()) //Método heredado de la clase padre