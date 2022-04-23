class Travel{
    constructor(id, traveler, driver, origin, destiny, departure, checkIn, payment, route){
        this.id = id;
        this.traveler = traveler;
        this.driver = driver;
        this.origin = origin;
        this.destiny = destiny;
        this.date = new Date();
        this.departure = departure;
        this.checkIn = checkIn;
        this.payment = payment;
        this.route = route;
        this.rating = null;
    }

    //Getters
    get getTravelInfo(){
        return `
        Viaje ${this.idTravel}
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

//Implementation