// Ejemplo 10: Overrinding methods

class Explorer {
  constructor(name, username, mission) {
    console.log("Mijo me espera, aguanta.")
    this.name = name;
    this.username = username;
    this.mission = mission;
    console.log("Ya mijo, aquí estoy, te llamarás " + this.name)
  }

  getNameAndUsername() {
    return `Explorer ${this.name}, username: ${this.username}`;
  }
}

class Viajero extends Explorer{
    constructor(name, username, mission, cycle){
        console.log("We, soy el hijo y me voy a ejecutar primero, deja espero a mi aṕá")        
        //SUPER llamará al constructor padre, inicializará los atributos en dicho constructor
        super(name, username, mission) // overriding?
        console.log("Ya acabó mi apá de ponerme nombre")
        this.cycle = cycle; //Atributo exclusivo de esta clase.
    }

    getGeneralInfo(){
        let getFullName = this.getNameAndUsername(); //getFullName es una variable de la función, NO de la clase
        return `${getFullName}, ciclo: ${this.cycle}`
    }
}

const viajero1 = new Viajero("Miko", "MikoVelascoRamirez", "NodeJS", "Abril-2022");
console.log("Ejemplo 10: overriding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) //Método de la clase padre
console.log(viajero1.getGeneralInfo())
