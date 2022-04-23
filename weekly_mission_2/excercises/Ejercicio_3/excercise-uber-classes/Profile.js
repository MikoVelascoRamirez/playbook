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
const Jonathan = new Profile("Jonathan", "Toyota Prius", "http://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/image5-4.png", "5FLXYZ", 2228, 4.9, 2, ["English", "German"], "Vancouver", "Canada", "I am a certified grandmaster at chess!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

//Implementation