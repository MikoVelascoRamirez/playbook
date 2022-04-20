const Hashtag = {
  name: "#video",
  category: "tendencias",
  relatedTrends: [
    "Cristiano Ronaldo", "Ucrania"
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
  trending: false,
  getNumberOfTweets: function () {
    return this.most_recents.length;
  },
  getNumberOfUsers: function () {
    return this.people.length;
  },
  getGeneralInfo() {
    return `Hashtag: ${this.name}
    Category: ${this.category}
    Tweets: ${this.getNumberOfTweets()}
    Related Trends: ${this.relatedTrends}
    ${this.trending ? 'Tendencias' : ''}`;
  },
  getOutstandings: function () {
    this.outstandings.map( outstanding => console.log(outstanding));
  },
  getMostRecentTweets: function(){
    this.most_recents.map( most_recent => console.log(most_recent));
  }
};

console.log(`${Hashtag.getGeneralInfo()}`);
