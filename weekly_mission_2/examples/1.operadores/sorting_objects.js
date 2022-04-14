// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]

users.sort((a,b) => a.age < b.age ? -1 : 1)

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending