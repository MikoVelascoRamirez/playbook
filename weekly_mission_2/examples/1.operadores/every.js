// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false

const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllString = names10.every( name => typeof name === 'string');

console.log("Ejemplo 10: ¿Son todos los nombres string?: " + areAllString)