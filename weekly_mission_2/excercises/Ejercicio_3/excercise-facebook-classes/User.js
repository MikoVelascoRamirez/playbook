class User{
    constructor(id, name, url, pictureProfile, portraitPicture){
        this.id = id;
        this.name = name;
        this.friends = [];
        this.url = url;
        this.pictureProfile = pictureProfile;
        this.portraitPicture = portraitPicture;
        this.posts = [];
    }

    //Getters

    get getFriends(){ 
        return this.friends;
    }

    get getNumberOfFriends(){
        return this.friends.length;
    }

    get getPosts(){
        return this.posts;
    }

    get getPhotos(){
        return this.photos;
    }

    get getPersonalInfo(){
        return `
        ${this.name}
        ${this.getNumberOfFriends} amigos
        ${this.getFriends}
        ${this.friend ? "✔️ Amigo" : "👨🏻 Agregar a mis amigos"}
        Posts: ${this.getPosts}
        Photos: ${this.getPhotos}`
    }

    //Setters

    set addFriend(friend){
        this.friends = [...this.friends, friend];
    }

    set addPost(post){
        this.posts = [...this.posts, post];
    }

    set addPhoto(photo){
        this.photos = [...this.photos, photo];
    }
}
