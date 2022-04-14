// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas (con método substring)
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map( country => country.toUpperCase().substring(0,3))
const countriesFirstThreeLetters2 = countries6.map( country => country.toUpperCase().slice(0,3))

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)
console.log(countriesFirstThreeLetters2)