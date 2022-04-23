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
}