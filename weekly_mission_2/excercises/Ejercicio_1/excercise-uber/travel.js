const Travel = {
    idTravel: "32llle12p3e",
    traveler: "María Sofía",
    driver: "Huge Jackman",
    origin: "Calle Pajaritos 09-XYZ",
    destiny: "Zona Arqueólogica de Huapalcalco",
    date: "20 de Abril",
    departure: "15.30",
    checkIn: "16.00",
    payment: "cash",
    price: 45.00,
    route: ["Siga recto por la calle pajaritos hasta calle champiñón, gire a la izquierda",
            "siga derecho 200 m hasta calle margaritas, doble a la derecha", 
            "Ha llegado a su destino: Zona Arqueológica Huapalcalco"],
    rating: 5,

    getTravelInfo: function(){
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
}

console.log("Información del viaje\n---------------------")
console.log(Travel.getTravelInfo())