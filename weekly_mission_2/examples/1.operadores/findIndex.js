// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.

const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex( name => name.includes("2"))
console.log("Ejemplo 13: Primer elemento cuya palabra contenga el << 2 >> esta en la posición "+ result)