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
}