// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

//FIltrar elementos que solo incluyan la subcadena "land" en su cadena.
const countriesContainingLand = countries.filter( country => country.includes("land"))

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('nd'))
console.log("Ejemplo 7: Paises que terminan en nd")
console.log(countriesEndsByia);