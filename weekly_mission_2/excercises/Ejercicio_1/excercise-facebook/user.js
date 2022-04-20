const User = {
  id: "121o2o1o2121!z@!0",
  name: "@Pepito",
  friends: [
    {
        id: "121o2o1o2121!z@!0",
        name: "@JuanitaSexy69",
    },
    {
        id: "981o2o1o2145!w@!0",
        name: "@ToñoElTigre",
    },
    {
        id: "900o2o1o2121!z@'3",
        name: "@PaquitoFlowBakano",
    }
  ],
  url: "https://www.facebook.com/pepito.ortiz98",
  pictureProfile: "https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0rrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=6263FC36",
  portraitPicture: "https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0zrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=6263FC23",
  posts: ["sdcosdk29r934", "oacosdk29r921", "asdsasd29r555"],
  friend: true,
  photos: ["https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0rrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=6263FC36", "https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0rrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=09281FG"],
  getNumberOfFriends: function(){
      return this.friends.length;
  },
  getFriends: function(){
      return this.friends.map(friend => friend.name)
  },
  getPosts: function(){
      return this.posts;
  },
  getPhotos: function(){
      return this.photos;
  },
  getPersonalInfo: function(){
      return `
      ${this.name}
      ${this.getNumberOfFriends()} amigos
      ${this.getFriends()}
      ${this.friend ? "✔️ Amigo" : "👨🏻 Agregar a mis amigos"}
      Posts: ${this.getPosts()}
      Photos: ${this.getPhotos()}`
  }
};

console.log("Profile: " + User.getPersonalInfo())
