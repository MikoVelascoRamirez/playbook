class User{
    constructor(id, name, url, pictureProfile, portraitPicture){
        this.id = id;
        this.name = name;
        this.friends = [];
        this.url = url;
        this.pictureProfile = pictureProfile;
        this.portraitPicture = portraitPicture;
        this.posts = [];
        this.photos = [];
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

const usuario = new User("121o2o1o2121!z@!0", "@Pepito", "https://www.facebook.com/pepito.ortiz98", "fotodePepito.jpg", "cheemsPortait.png");

usuario.addFriend = {
    id: "121o2o1o2121!z@!0",
    name: "@JuanitaSexy69",
}

usuario.addFriend = {
    id: "981o2o1o2145!w@!0",
    name: "@ToñoElTigre",
}

usuario.addFriend = {
    id: "900o2o1o2121!z@'3",
    name: "@PaquitoFlowBakano",
}

usuario.addPost = "sdcosdk29r934";
usuario.addPost = "oacosdk29r921";
usuario.addPost = "asdsasd29r555";

usuario.addPhoto = "https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0rrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=6263FC36";
usuario.addPhoto = "https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/262867595_854940358504935_7541021694322251397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dWNlTZgisLIAX8rkzdI&_nc_ht=scontent.flov1-1.fna&oh=00_AT_Qhn1dcA_bbr0rrf5jtv8lpb7r6knG74N4_NxQUFb8Sw&oe=09281FG";

console.log(usuario.getPersonalInfo)