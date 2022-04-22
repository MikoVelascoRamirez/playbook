class Hashtag{
    constructor(name, category, relatedTrends, trending){
        this.name = name;
        this.category = category;
        this.relatedTrends = relatedTrends;
        this.outstandings = [];
        this.most_recents = [];
        this.trending = trending;
    }

    //Getters
    get getNumberOfTweets(){
        return this.most_recents.length;
    }

    get getNumberOfUsers(){
        return this.people.length
    }

    get getGeneralInfo(){
        return `Hashtag: ${this.name}
        Category: ${this.category}
        Tweets: ${this.getNumberOfTweets}
        Related Trends: ${this.relatedTrends}
        ${this.trending ? 'Tendencias' : ''}`;
    }

    get getOutstandings(){
        return this.outstandings.filter( outstanding => outstanding.tweetContent.includes("hola"));
    }

    get getMostRecentTweets(){
        return this.most_recents.map( most_recent => most_recent);
    }

    //Setters

    set addRecentTweet(tweet){
        this.most_recents = [...this.most_recents, tweet];
    }

    set addOutstandingTweet(tweet){
        this.outstandings = [...this.outstandings, tweet];
    }
}

//Instances
const hashtag = new Hashtag("#video","tendencias",["Cristiano Ronaldo", "Ucrania"],false);

//Implementation

hashtag.addRecentTweet = {
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

hashtag.addOutstandingTweet = {
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

hashtag.addRecentTweet = {
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

hashtag.addOutstandingTweet = {
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

console.log(`${hashtag.getGeneralInfo}`);