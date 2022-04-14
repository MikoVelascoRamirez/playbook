// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

//Normal function (explicit return)
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){
    return num * num
})

//Arrow function
const numbersSquareArrow = numbers4.map(num => num * num)

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare, numbersSquareArrow)