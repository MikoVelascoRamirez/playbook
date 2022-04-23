class Travel{
    constructor(id, traveler, driver, origin, destiny, departure, checkIn, payment, price, route){
        this.id = id;
        this.traveler = traveler;
        this.driver = driver;
        this.origin = origin;
        this.destiny = destiny;
        this.date = new Date();
        this.departure = departure;
        this.checkIn = checkIn;
        this.payment = payment;
        this.price = price;
        this.route = route;
        this.rating = null;
    }

    //Getters
    get getTravelInfo(){
        return `
        Viaje ${this.id}
        Origen: ${this.origin}
        Destino: ${this.destiny}
        Fecha: ${this.date}
        Hora de salida: ${this.departure}
        Hora de llegada: ${this.checkIn}
        Ruta: ${this.route}
        Conductor: ${this.driver}
        Calificación: ${this.rating} ⭐
        Total: $${this.price}.00 MXN
        `
    }

    //Setters
    set setRate(rate){
        this.rate = rate;
    }
}

// Instance
const sofiaTravel = new Travel("32llle12p3e", "María Sofía", "Huge Jackman", "Calle Pajaritos 09-XYZ", "Zona Arqueólogica de Huapalcalco", "15:30", "16:00", "cash", 45.00, ["Siga recto por la calle pajaritos hasta calle champiñón, gire a la izquierda",
"siga derecho 200 m hasta calle margaritas, doble a la derecha", 
"Ha llegado a su destino: Zona Arqueológica Huapalcalco"]);

//Implementation
sofiaTravel.setRate = 4;

console.log(sofiaTravel.getTravelInfo)