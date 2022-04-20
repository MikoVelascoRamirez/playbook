const explorers = require('./explorers');

// Lista de requerimientos a realizar sobre archivo de explorers.js

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

explorers.forEach( explorer => console.log(explorer.name))

// 2. Imprime el stack de cada explorer, usa FOR EACH

explorers.forEach( explorer => console.log(explorer.stack))

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

const stacks_Explorers = explorers.map(explorer => (
    {name: explorer["name"], stack: explorer["stack"]}
))

console.log(stacks_Explorers)