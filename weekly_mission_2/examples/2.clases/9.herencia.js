// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const carloDev = new Developer("Miko", "js", ["React", "Node", "PHP"])
  console.log(carloDev)
  
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{}
  
  
  const mikoLaunchXDev = new LaunchXStudent("Miko", "js", ["CSS3", "C++", "PHP"])
  console.log(mikoLaunchXDev)
  console.log(mikoLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija