// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox{
    static getMostUsefulMethods(){ return ["Command Line", "git", "Text Editor"] }
}

console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase

//const toolbox = new Toolbox();

//al definir un método estático, no debemos instanciar un objeto como medio para utilizarlo.
//console.log(toolbox.getMostUsefulMethods()) //Esto NO ESTÁ PERMITIDO

console.log(Toolbox.getMostUsefulMethods()) //Esto SI ESTÁ PERMITIDO