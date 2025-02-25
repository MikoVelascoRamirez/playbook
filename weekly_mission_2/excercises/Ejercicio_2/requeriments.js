const explorers = require('./explorers');

// Lista de requerimientos a realizar sobre archivo de explorers.js

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

console.log("1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH");

explorers.forEach( explorer => console.log(explorer.name))

// 2. Imprime el stack de cada explorer, usa FOR EACH

console.log("\n2. Imprime el stack de cada explorer, usa FOR EACH");

explorers.forEach( explorer => console.log(explorer.stack))

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

console.log("\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")

const stacks_Explorers = explorers.map(explorer => (
    {name: explorer["name"], stack: explorer["stack"]}
))

console.log(stacks_Explorers)

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

console.log("\n4. Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")

const js_Explorers = explorers.filter(explorer => explorer.stack.includes("js"));

console.log(js_Explorers)

// 5. Busca el primer explorer que sea de la CDMX, usa FIND

console.log("\n5. Busca el primer explorer que sea de la CDMX, usa FIND")

const firstExplorerFromCDMX = explorers.find(explorer => explorer.city === "CDMX");

console.log(firstExplorerFromCDMX)


// 6. Obtén la suma de todos los exercises_completed, usa REDUCE

console.log("\n6. Obtén la suma de todos los exercises_completed, usa REDUCE")

const totalExcercisesCompleted = explorers.reduce( (acc, explorer)=> acc+=explorer.exercises_completed, 0)

console.log(`Total excercises completed: ${totalExcercisesCompleted}`)

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

console.log("\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")

const isAnExplorerFinishFrontend = explorers.some( explorer => explorer.missions.frontend.isFinished)

console.log(isAnExplorerFinishFrontend);

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

console.log("\n8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");

const allTheExplorersFinishedOnboarding = explorers.every( explorer => explorer.missions.onboarding.isFinished)

console.log(allTheExplorersFinishedOnboarding);