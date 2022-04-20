const Profile = {
    userName: "Jonathan",
    car: "Toyota Prius",
    photo: "http://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/image5-4.png",
    license: "5FLXYZ",
    trips: 2228,
    rating: 4.9,
    years: 2,
    languages: ["English", "German"],
    cityBorn: "Vancouver",
    countryBorn: "Canada",
    funFact: "I am a certified grandmaster at chess!",
    mostMemorableTrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    riderCompliments: [
        {
            name: "Awesome DJ",
            number: 96
        },
        {
            name: "Neat & Tidy",
            number: 26
        },
        { 
            name: "Cool car",
            number: 9
        }
    ],
    thankyouNotes: ["Hilarious person with a coolest car", "Thanks for taking music requests"],
    driverAchievments: ["50 5-star trips", "2 years with Uber", "100 late night trips"],

    getRiderCompliments: function(){
        this.riderCompliments.forEach( compliment => console.log(compliment))
    },

    getThankYouNotes: function(){
        return this.thankyouNotes;
    },

    getdriverAchievements: function(){
        return this.driverAchievments
    },

    getProfileInfo: function(){
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
}
console.log(Profile.getProfileInfo());
console.log("Rider compliments\n");
Profile.getRiderCompliments();
console.log("\nRider thank you notes");
console.log(Profile.getThankYouNotes())
console.log("\nDriver achievements");
console.log(Profile.getdriverAchievements())