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
        return this.driverAchivements;
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
        this.driverAchivements = [...this.driverAchivements, achievement];
    }
}

//Instance
const Jonathan = new Profile("Jonathan", "Toyota Prius", "http://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/image5-4.png", "5FLXYZ", 2228, 4.9, 2, ["English", "German"], "Vancouver", "Canada", "I am a certified grandmaster at chess!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

//Implementation

Jonathan.addCompliment = {
    name: "Awesome DJ",
    number: 96
}

Jonathan.addCompliment = {
    name: "Neat & Tidy",
    number: 26
}

Jonathan.addCompliment = {
    name: "Cool car",
    number: 9
}

Jonathan.addThankfulNote = "Hilarious person with a coolest car";
Jonathan.addThankfulNote = "Thanks for taking music requests";

Jonathan.addAchievement = "50 5-star trips";
Jonathan.addAchievement = "2 years with Uber";
Jonathan.addAchievement = "100 late night trips";

console.log(Jonathan.getProfileInfo);
console.log("Rider compliments\n");
console.log(Jonathan.getRiderCompliments);
console.log("\nRider thank you notes");
console.log(Jonathan.getThankYouNotes)
console.log("\nDriver achievements");
console.log(Jonathan.getdriverAchievements)