class Profile{
    constructor(userName, car, photo, license, trips, rating, years, languages, cityBorn, countryBorn, funFact, mostMemorableTrip){
        this.userName = userName;
        this.car = car;
        this.photo = photo;
        this.license = license;
        this.trips = trips;
        this.rating = rating;
        this.years = years;
        this.languages = languages;
        this.cityBorn = cityBorn;
        this.countryBorn = countryBorn;
        this.funFact = funFact;
        this.mostMemorableTrip = mostMemorableTrip;
        this.riderCompliments = [];
        this.thankyouNotes = [];
        this.driverAchivements = [];
    }

    //Getters

    get getRiderCompliments(){
        return this.riderCompliments.map( compliment => compliment)
    }

    get getThankYouNotes(){
        return this.thankyouNotes;
    }

    get getdriverAchievements(){
        return this.driverAchievments;
    }

    get getProfileInfo(){
        return `
        Name: ${this.userName}
        ${this.car} - ${this.license}
        ${this.trips} trips - ${this.rating} ⭐ rating - ${this.years} years
        Speaks ${this.languages}
        From ${this.cityBorn}, ${this.countryBorn}
        Fun fact: ${this.funFact}
        Most memorable trip: ${this.mostMemorableTrip}
        `
    }

    //Setters

    set addCompliment(compliment){
        this.riderCompliments = [...this.riderCompliments, compliment];
    }

    set addThankfulNote(note){
        this.thankyouNotes = [...this.thankyouNotes, note];
    }

    set addAchievement(achievement){
        this.driverAchivements = [...this.addAchievement, achievement];
    }
}

//Instance

//Implementation