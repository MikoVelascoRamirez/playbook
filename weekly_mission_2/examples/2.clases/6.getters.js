// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
  constructor(name, age, stack) {
    this.name = name;
    this.age = age;
    this.stack = stack;
    this.exercises_completed = 0;
    this.exercises_todo = 99;
  }

  //Acceder a los atributos de la clase
  get getExcercisesCompleted() { return this.exercises_completed} //Método get se agrega al objeto como atributo
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const Woopy = new Ajolonauta("Woopy", 1, []);
console.log(Woopy.getExcercisesCompleted)