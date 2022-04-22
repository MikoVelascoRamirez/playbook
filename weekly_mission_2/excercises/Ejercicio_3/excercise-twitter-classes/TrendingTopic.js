class TrendingTopic{
    constructor(name, category, relatedTrends, trending){
        this.name = name;
        this.category = category;
        this.relatedTrends = relatedTrends;
        this.outstandings = [];
        this.most_recents = [];
        this.people = [];
        this.photos = [];
        this.videos = [];
        this.trending = trending;
    }

    //Getters
    get getNumberOfTweets(){
        return this.most_recents.length;
    }

    get getNumberOfUsers(){
        return this.people.length
    }

    get getOutstandings(){
        return this.outstandings.filter( outstanding => outstanding.tweetContent.includes("hola"))
        .forEach( outstanding => console.log(outstanding));
    }

    get getMostRecentTweets(){
        return this.most_recents.forEach( most_recent => console.log(most_recent));
    }

    get getGeneralInfo(){
        return `Hashtag: ${this.name}
        Category: ${this.category}
        Tweets: ${this.getNumberOfTweets}        
        Related Trends: ${this.relatedTrends}
        ${this.trending ? 'Tendencias' : ''}`;
    }

    get getPeople(){
        return this.people;
    }

    get getPhotos(){
        return this.photos;
    }

    get getVideos(){
        return this.videos;
    }

    //Setters
    set addRecentTweet(tweet){
        this.most_recents = [...this.most_recents, tweet];
    }

    set addOutstandingTweet(tweet){
        this.outstandings = [...this.outstandings, tweet];
    }

    set addPeople(person){
        this.people = [...this.people, person];
    }

    set addPhoto(photo){
        this.photos = [...this.photos, photo];
    }

    set addVideo(video){
        this.videos = [...this.videos, video];
    }
}

//Instance
const tt = new TrendingTopic("Riqui", "Deportes", ["Piqué", "FC Barcelona"], true);

//Implementation
tt.addRecentTweet = {
    idTweet: 123434354,
    datePublished: "8/02/2021",
    hourPublished: "20:21",
    tweetContent: "Visca el Barca",
    media: [],
    comments: [
      {
        idTweet: 10291291,
        user: "@ZonaBlaugrana",
        datePublished: "8/02/2021",
        hourPublished: "20:34",
        sourceLabel: "Twitter Web App",
        retweets: 0,
        respondTo: 123434354,
        comments: 0
      }
    ],
    sourceLabel: "Twitter for iPhone"
}

tt.addOutstandingTweet = {
    idTweet: 123434354,
    datePublished: "8/02/2021",
    hourPublished: "20:21",
    tweetContent: "Visca el Barca",
    media: [],
    comments: [
      {
        idTweet: 10291291,
        user: "@ZonaBlaugrana",
        datePublished: "8/02/2021",
        hourPublished: "20:34",
        sourceLabel: "Twitter Web App",
        retweets: 0,
        respondTo: 123434354,
        comments: 0
      }
    ],
    sourceLabel: "Twitter for iPhone"
} 

tt.addRecentTweet = {
    idTweet: 123434354,
    datePublished: "19/03/2022",
    hourPublished: "10:00",
    tweetContent: "hola a todos",
    media: [],
    comments: [
      {
        idTweet: 10291291,
        user: "@LaCocinaDeKaty",
        datePublished: "19/03/2022",
        hourPublished: "13:56",
        sourceLabel: "Twitter for iPhone",
        retweets: 1,
        respondTo: 123434354,
        comments: 0
      }
    ],
    sourceLabel: "Twitter for iPhone"
}

tt.addOutstandingTweet = {
    idTweet: 123434354,
    datePublished: "19/03/2022",
    hourPublished: "10:00",
    tweetContent: "hola a todos",
    media: [],
    comments: [
      {
        idTweet: 10291291,
        user: "@LaCocinaDeKaty",
        datePublished: "19/03/2022",
        hourPublished: "13:56",
        sourceLabel: "Twitter for iPhone",
        retweets: 1,
        respondTo: 123434354,
        comments: 0
      }
    ],
    sourceLabel: "Twitter for iPhone"
}

tt.addPeople = {
    userName: "Riqui Puig",
    profileName: "@RiquiPuig",
    followed: true
}

tt.addPeople = {
    userName: "Riqui Gell",
    profileName: "@riquigell",
    followed: false
}

tt.addPeople = {
    userName: "Riqui Hispanidad",
    profileName: "@libertadrichi",
    followed: false
}

tt.addPhoto = {
    media: [
      "https://pbs.twimg.com/media/FQqiyhVWYBAhIfT?format=jpg&name=large", "https://pbs.twimg.com/media/FQqiywjWQAYv-92?format=jpg&name=large"
    ],
    tweetId: 10291921
}

tt.addVideo = {
    media: ["https://twitter.com/i/status/1515997418017497097"],
    tweetId: 12010212
}

console.log(`${tt.getGeneralInfo}`);
console.log("Recent Tweets: ")
tt.getMostRecentTweets
console.log("Destacados: ")
tt.getOutstandings
console.log("People: ")
console.log(tt.getPeople)
console.log("Photos: ")
console.log(tt.getPhotos);
console.log("Videos: ")
console.log(tt.getVideos);