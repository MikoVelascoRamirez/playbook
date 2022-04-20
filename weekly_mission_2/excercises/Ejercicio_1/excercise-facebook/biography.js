const Biography = {
  idProfile: "sdasmdk1301229",
  profileName: "Juanito Ṕérez",
  info: {
    workPlace: [
      {
        nameCompany: "Bimbo",
        role: "Software Analyst",
        city: "Pachuca de Soto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
        startFrom: "Junio 2020",
        currentWork: true,
        privacity: "public"
      }
    ],
    schooling: [
        {
          name: "Universidad de las Américas",
          grade: "Universidad",
          startFrom: "Agosto 2012",
          finishTo: "Junio 2016",
          wasFinished: true,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
          degree: "Licenciatura en Ingeniería en Software",
          privacity: "public"
        },
        {
          name: "Esc. Sec. Fernando Urzúa",
          grade: "Secundaria",
          startFrom: "Agosto 2006",
          finishTo: "Junio 2016",
          wasFinished: true,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
          degree: "Certificado de secundaria",
          privacity: "private"
        }
    ],
    livePlaces: [
      {
        city: "Guadalajara",
        currentCity: true,
        privacity: "public"
      }, 
      {
        city: "Ciudad de México",
        currentCity: false,
        privacity: "private"
      }
    ],
    basic: {
      bornPlace: "Acapulco",
      phone: "1278312111",
      email: "juanito98@gmail.com",
      gender: "masculino",
      bornDate: "14 de Febrero",
      year: 1992,
      status: "soltero"
    }
  },
  about: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Nunc scelerisque viverra mauris in aliquam sem. Nec nam aliquam sem et.",
  nicknames: [
    "Juancho", "El milaneso"
  ],
  specialEvents: [
    {
      category: "work",
      description: "Empecé a trabajar en Bimbo en la hermosa ciudad de Guadalajara, hogar del tequila"
    }
  ],

  getWorkpPlace: function () {
    return this.info.workPlace.map(place => {
      const { nameCompany, role, city, description, startFrom, currentWork } = place;

      return { nameCompany, role, city, description, startFrom, currentWork}
    });
  },

  getSchooling: function () {
      return this.info.schooling.filter( school => school.privacity === "public")
  },

  getLivePlaces: function(){
      return this.info.livePlaces.filter( place => place.privacity === "public")
  },

  getSpecialEvents: function () {
      return this.specialEvents.map( event => event)
  },

  getBasicInfo: function () {
    return `
      Nombre: ${this.profileName}
      Acerca de: ${this.about}
      Apodos: ${this.nicknames}
      `;
  }
};

console.log(Biography.getBasicInfo());
console.log("Información\n---------------------\n");
console.log("Información básica y de contacto")
console.log(Biography.info.basic);
console.log("\nEmpleo");
console.log(Biography.getWorkpPlace());
console.log("\nFormación")
console.log(Biography.getSchooling())
console.log("\nLugares de residencia")
console.log(Biography.getLivePlaces())
console.log("\nAcontecimientos importantes")
console.log(Biography.getSpecialEvents())
