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
        this.photo = [...this.photo, photo];
    }

    set addVideo(video){
        this.video = [...this.video, video];
    }
}

//Instance
const tt = new TrendingTopic("Riqui", "Deportes", ["Piqué", "FC Barcelona"], true);

//Implementation