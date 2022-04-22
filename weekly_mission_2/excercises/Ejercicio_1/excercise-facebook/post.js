const Post = {
  id: "smdw0e-e32ṕ23pq",
  publisher: "Camy Rodriguez",
  date: "13/01/2022",
  time: "17:09",
  description: "🥺🥺🥺",
  privacity: "Público",
  reactions: {
    laughs: 493, //me divierte
    likes: 71, //me gusta
    sads: 14, //me entristece
    loves: 3, //me encanta
    wonders: 1, //me asombra
    cares: 0, //me importa
    angries: 0 //me enoja
  },
  media: ["https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/278671793_7407743459300847_6120152942029295460_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=sU9U4ZirEPoAX9Y9BV2&tn=MV4QAxf0S1JLZFnO&_nc_ht=scontent.flov1-1.fna&oh=00_AT9xWBX1GhgJQBB65sWb9p1066anhBXvE7LJMqlnkjk4tg&oe=6263621E"],
  comments: [
    {
      id: "981o2o1o2145",
      idUser: "102wp1e0102",
      content: "Jajaja XD",
      elapsed: "2 semanas",
      reactions: {
        laughs: 0,
        likes: 1,
        sads: 0,
        loves: 0,
        wonders: 0,
        cares: 1,
        angries: 0
      },
      numberOfComments: 5
    }
  ],
  shares: 10000,
  getNumberOfReactions: function () {
      return Object.values(this.reactions).reduce((acc, reaction) => acc+=reaction)
  },
  getComments: function(){
      this.comments.forEach(comment => {
          const {idUser, content, elapsed, numberOfComments} = comment;
          console.log(idUser, content, elapsed, numberOfComments)
      })
  },
  getNumberOfComments: function(){
      return this.comments.length;
  },
  getPostInfo: function(){
      return `
      Media: ${this.media}
      ${this.publisher}
      ${this.date} a las ${this.time} ${this.privacity}
      ${this.description}
      ${this.getNumberOfReactions()} reacciones - ${this.getNumberOfComments()} comentario - ${this.shares} veces compartido
      `
  }
};


console.log("Post: " + Post.getPostInfo());
console.log("Comentarios:")
Post.getComments();