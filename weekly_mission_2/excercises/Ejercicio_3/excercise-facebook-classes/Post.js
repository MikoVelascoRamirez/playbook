class Post{
    constructor(id, publisher, datetime, description, privacity, media){
        this.id = id;
        this.publisher = publisher;
        this.datetime = datetime;
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
}