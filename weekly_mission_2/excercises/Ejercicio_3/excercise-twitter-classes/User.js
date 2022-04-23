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
const apostol_cule = new User("Apóstol Culé", "@CruyffistaMX", "https://pbs.twimg.com/profile_images/1358915800883732481/Iw61tRwk_400x400.jpg", "https://pbs.twimg.com/profile_banners/1358912820998508546/1612825750/1500x500", "Blaugrana desde 2004 | Mexicano-Tijuanense | Seguidor y predicador del mejor futbol jamás visto | ¿mi pastor?, Cruyff | ¿vamos al Camp Nou? cuando quieras. 🇲🇽", 300, 66);

//Implementation

// --> Agregando tweets
apostol_cule.tweet = {
    idTweet: 123434354,
    datePublished: "8/02/2021",
    hourPublished: "20:21",
    tweetContent: "Hola, le voy al FC Barcelona",
    media: ["https://youtu.be/bC7-Yqh-svU"],
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
    analytics: {
      likes: 5,
      retweets: 1,
      comments: 1,
      impressions: 110,
      interactions: 5,
      extensionsDetails: 5,
      viewProfiles: 0,
      newFollowers: 0
    },
    sourceLabel: "Twitter for Android"
}

console.log(`${apostol_cule.getBasicInfo}`);
console.log(`${apostol_cule.getNumberOfFollows} siguiendo ${apostol_cule.getNumberOfFollowers} seguidores`);
console.log(apostol_cule.renderTweets);