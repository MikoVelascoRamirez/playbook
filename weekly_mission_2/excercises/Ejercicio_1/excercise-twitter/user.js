const user = {
  profileName: "Apóstol Culé",
  userName: "@CruyffistaMX",
  profilePicture: "https://pbs.twimg.com/profile_images/1358915800883732481/Iw61tRwk_400x400.jpg",
  coverProfile: "https://pbs.twimg.com/profile_banners/1358912820998508546/1612825750/1500x500",
  description: "Blaugrana desde 2004 | Mexicano-Tijuanense | Seguidor y predicador del mejor futbol jamás visto | ¿mi pastor?, Cruyff | ¿vamos al Camp Nou? cuando quieras. 🇲🇽",
  registeredFrom: "Februrary 2021",
  followers: 300,
  following: 66,
  tweets: [
    {
      idTweet: 123434354,
      datePublished: "8/02/2021",
      hourPublished: "20:21",
      tweetContent: "",
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
  ],

  getNumberOfFollowers: function () {
    return this.followers;
  },
  getNumberOfFollows: function () {
    return this.following;
  },
  getNumberOfTweets: function () {
    return this.tweets.length;
  },
  getBasicInfo: function () {
    return `Profile: ${this.profileName}
        ${this.userName}
        ${this.description}
        Se unió en ${this.registeredFrom}`;
  },
  renderTweets: function () {
    return this.tweets
  }
};

console.log(`${user.getBasicInfo()}`);
console.log(`${user.getNumberOfFollows()} siguiendo ${user.getNumberOfFollowers()} seguidores`);
console.log(user.renderTweets());