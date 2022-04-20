const explorers = require('./explorers');

// Lista de requerimientos a realizar sobre archivo de explorers.js

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

explorers.forEach( explorer => console.log(explorer.name))

// 2. Imprime el stack de cada explorer, usa FOR EACH

explorers.forEach( explorer => console.log(explorer.stack))