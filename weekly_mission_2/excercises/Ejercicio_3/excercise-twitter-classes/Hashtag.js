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


//Implementation