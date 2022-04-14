// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
//Uso de some para comprobar si alguno de los elementos da false
const areSomeTrue = bools.some( element => !element)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true