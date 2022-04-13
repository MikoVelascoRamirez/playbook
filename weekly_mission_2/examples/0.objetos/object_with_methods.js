//Ejemplo 4: Objeto con métodos
const pet = {
  name: "Dory",
  //Función que se guarda como propiedad
  sayHello: function () {
    console.log(`${this.name} te saluda en español!`);
  }
};

console.log("Ejemplo 4: Objeto con métodos");
pet.sayHello();