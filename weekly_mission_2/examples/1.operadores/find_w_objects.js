// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find( item => item.score < 80);
const score_higher_than_80 = scores12.find( item => item.score > 80);

console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)
console.log("Ejemplo 12. Name score found:" + score_higher_than_80.name)