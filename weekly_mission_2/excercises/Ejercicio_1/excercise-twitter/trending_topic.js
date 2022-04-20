const trendingTopic = {
  name: "Riqui",
  category: "Deportes",
  relatedTrends: [
    "Piqué", "FC Barcelona"
  ],
  outstandings: [
    {
      idTweet: 123434354,
      datePublished: "8/02/2021",
      hourPublished: "20:21",
      tweetContent: "",
      media: [],
      comments: [
        {
          idTweet: 10291291,
          user: "@ZonaBlaugrana",
          datePublished: "8/02/2021",
          hourPublished: "20:34",
          sourceLabel: "Twitter Web App",
          retweets: 2,
          respondTo: 123434354,
          comments: 0
        }
      ],
      sourceLabel: "Twitter for iPhone"
    } //tweet
  ],
  most_recents: [
    {
      idTweet: 123434354,
      datePublished: "8/02/2021",
      hourPublished: "20:21",
      tweetContent: "",
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
    } //tweet
  ],
  people: [
    {
      userName: "Riqui Puig",
      profileName: "@RiquiPuig",
      followed: true
    }, {
      userName: "Riqui Gell",
      profileName: "@riquigell",
      followed: false
    }, {
      userName: "Riqui Hispanidad",
      profileName: "@libertadrichi",
      followed: false
    }
  ],
  photos: [
    {
      media: [
        "https://pbs.twimg.com/media/FQqiyhVWYBAhIfT?format=jpg&name=large", "https://pbs.twimg.com/media/FQqiywjWQAYv-92?format=jpg&name=large"
      ],
      tweetId: 10291921
    }
  ],
  videos: [
    {
      media: ["https://twitter.com/i/status/1515997418017497097"],
      tweetId: 12010212
    }
  ],
  trending: true,
  getNumberOfTweets: function () {
    return this.most_recents.length;
  },
  getNumberOfUsers: function () {
    return this.people.length;
  },
  getGeneralInfo() {
    return `Trending: ${this.name}
    Category: ${this.category}
    Tweets: ${this.getNumberOfTweets()}
    Related Trends: ${this.relatedTrends}
    ${this.trending ? 'Tendencias' : null}`;
  },
  getOutstandings: function () {
    this.outstandings.map( outstanding => console.log(outstanding));
  },
  getMostRecentTweets: function(){
    this.most_recents.map( most_recent => console.log(most_recent));
  }
};

console.log(`${trendingTopic.getGeneralInfo()}`);
console.log("Destacados\n---------------------")
console.log(trendingTopic.getOutstandings())
console.log("Tweets mas recientes\n---------------------")
console.log(trendingTopic.getMostRecentTweets())
