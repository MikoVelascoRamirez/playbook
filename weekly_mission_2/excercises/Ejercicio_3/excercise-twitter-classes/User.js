class User{
    constructor(profileName, userName, profilePic, coverPic, description, followers, following){
        this.profileName = profileName;
        this.userName = userName;
        this.profilePic = profilePic;
        this.coverPic = coverPic;
        this.description = description;
        this.registeredFrom = new Date();
        this.followers = followers;
        this.following = following;
        this.tweets = [];
    }

    //Getters
    get getNumberOfFollowers(){
        return this.followers;
    }

    get getNumberOfFollows(){
        return this.following;
    }

    get getNumberOfTweets(){
        return this.tweets.length;
    }

    get getBasicInfo() {
        return `Profile: ${this.profileName}
            ${this.userName}
            ${this.description}
            Se unió en ${this.registeredFrom}`;
    }

    get renderTweets() {
        return this.tweets
    }

    //Setters
    set tweet(tweet){
        this.tweets = [...this.tweets, tweet];
    }

    //Methods

    addNewFollower(){
        this.followers += 1;
    }

    newFollow(){
        this.following += 1;
    }
}

//Instance


//Implementation