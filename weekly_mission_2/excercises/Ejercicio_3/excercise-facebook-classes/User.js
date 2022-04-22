class User{
    constructor(id, name, url, pictureProfile, portraitPicture, photos){
        this.id = id;
        this.name = name;
        this.friends = [];
        this.url = url;
        this.pictureProfile = pictureProfile;
        this.portraitPicture = portraitPicture;
        this.posts = [];
        this.photos = photos;
        this.friend = false;
    }
}