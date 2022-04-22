class Post{
    constructor(id, publisher, description, privacity, media){
        this.id = id;
        this.publisher = publisher;
        this.datetime = new Date().toString();
        this.description = description;
        this.privacity = privacity;
        this.media = media;
        this.reactions ={
            laughs: 0, //me divierte
            likes: 0, //me gusta
            sads: 0, //me entristece
            loves: 0, //me encanta
            wonders: 0, //me asombra
            cares: 0, //me importa
            angries: 0 //me enoja
        }
        this.comments = [],
        this.shares = 0;
    }

    //Getters

    get getNumberOfReactions() {
        return Object.values(this.reactions).reduce((acc, reaction) => acc+=reaction)
    }
    get getComments(){
        this.comments.forEach(comment => {
            const {idUser, content, elapsed, numberOfComments} = comment;
            console.log({idUser, content, elapsed, numberOfComments})
        })
    }

    get getReactions(){
        return Object.entries(this.reactions).map(reaction => {
            const [react, number] = reaction;
            return `${number} ${react}`
        })
    }

    get getNumberOfComments(){
        return this.comments.length;
    }
    get getPostInfo(){
        return `
        ${this.publisher}
        Media: ${this.media}
        Fecha: ${this.datetime} ${this.privacity}
        ${this.description}
        ${this.getNumberOfReactions} reacciones:
        ${this.getReactions}         
        ${this.shares} veces compartido
        `
    }

    //Setters

    set setReaction(reaction) {
        this.reactions[reaction] += 1;
    }
    
    set setComment(comment) {
        this.comments = [...this.comments, comment];
    }

    //Methods
    setNumberOfShares(){ 
        this.shares += 1;
    }

}

const post = new Post("smdw0e-e32ṕ23pq", "Camy Rodriguez","🥺🥺🥺", "Público", ["Foto_de_un_perrito.jpg", "Foto_de_piolín.png"]);

post.setReaction = "likes";
post.setReaction = "laughs";
post.setReaction = "laughs";
post.setReaction = "loves";

post.setComment = {
    id: "981o2o1o2145",
    idUser: "102wp1e0102",
    content: "Jajaja, ponte a estudiar tía xD",
    elapsed: Date.now().toString(),
    reactions: {
        laughs: 0,
        likes: 0,
        sads: 0,
        loves: 0,
        wonders: 0,
        cares: 0,
        angries: 0
    },
    numberOfComments: 0
}

post.setComment = {
    id: "77sadsa788as",
    idUser: "109sda32832",
    content: "No mijo, salúdame a tu mamá",
    elapsed: Date.now().toString(),
    reactions: {
        laughs: 0,
        likes: 0,
        sads: 0,
        loves: 0,
        wonders: 0,
        cares: 0,
        angries: 0
    },
    numberOfComments: 0
};

post.setNumberOfShares();
post.setNumberOfShares();

console.log("Post: " + post.getPostInfo);
console.log("Comentarios:")
post.getComments