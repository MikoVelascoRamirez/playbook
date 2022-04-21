class Biography {
  constructor(id, profileName, about) {
    this.id = id;
    this.profileName = profileName;
    (this.info = {
      workplace: [],
      schooling: [],
      livePlaces: [],
      basic: {}
    }),
    (this.about = about);
    this.nicknames = [];
    this.specialEvents = [];
  }

  get getInfoWorkPlace() {
    return this.info.workplace.map(place => {
      const {
        nameCompany,
        role,
        city,
        description,
        startFrom,
        currentWork
      } = place;

      return {
        nameCompany,
        role,
        city,
        description,
        startFrom,
        currentWork
      };
    });
  }

  get getSchooling() {
    return this.info.schooling.filter(school => school.privacity === "public");
  }

  get getLivePlaces() {
    return this.info.livePlaces.filter(place => place.privacity === "public");
  }

  get getSpecialEvents() {
    return this.specialEvents.map( event => event);
  }

  set setWorkplace(workplace) {
    this.info["workplace"].push(workplace);
  }

  set setSchooling(schooling) {
    this.info["schooling"].push(schooling);
  }

  set setLivePlace(livePlace) {
    this.info["livePlaces"].push(livePlace);
  }

  set setBasicInfo(basic) {
    this.info["basic"] = basic;
  }

  set setNickname(nickname) {
    this.nicknames.push(nickname);
  }

  set setSpecialEvents(event) {
    this.specialEvents = [
      ...this.specialEvents,
      event
    ];
  }
}

const bio = new Biography("sdasmdk1301229", "Juanito Ṕérez", "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Nunc scelerisque viverra mauris in aliquam sem. Nec nam aliquam sem et.");

bio.setWorkplace = {
  nameCompany: "Bimbo",
  role: "Software Analyst",
  city: "Pachuca de Soto",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
  startFrom: "Junio 2020",
  currentWork: true,
  privacity: "public"
};

bio.setSchooling = {
  name: "Universidad de las Américas",
  grade: "Universidad",
  startFrom: "Agosto 2012",
  finishTo: "Junio 2016",
  wasFinished: true,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
  degree: "Licenciatura en Ingeniería en Software",
  privacity: "public"
};

bio.setSchooling = {
  name: "Esc. Sec. Fernando Urzúa",
  grade: "Secundaria",
  startFrom: "Agosto 2006",
  finishTo: "Junio 2016",
  wasFinished: true,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi.",
  degree: "Certificado de secundaria",
  privacity: "private"
}

bio.setLivePlace = {
  city: "Guadalajara",
  currentCity: true,
  privacity: "public"
}

bio.setLivePlace = {
  city: "Ciudad de México",
  currentCity: false,
  privacity: "private"
}

bio.setBasicInfo = {
  bornPlace: "Acapulco",
  phone: "1278312111",
  email: "juanito98@gmail.com",
  gender: "masculino",
  bornDate: "14 de Febrero",
  year: 1992,
  status: "soltero"
}

bio.setNickname = "Juancho";
bio.setNickname = "El milaneso";

bio.setSpecialEvents = {
  category: "work",
  description: "Empecé a trabajar en Bimbo en la hermosa ciudad de Guadalajara, hogar del tequila"
}

console.log("Información\n---------------------\n");
console.log(bio.getInfoWorkPlace);
console.log("Información básica y de contacto")
console.log(bio.info.basic);
console.log("\nEmpleo");
console.log(bio.getInfoWorkPlace);
console.log("\nFormación")
console.log(bio.getSchooling)
console.log("\nLugares de residencia")
console.log(bio.getLivePlaces)
console.log("\nAcontecimientos importantes")
console.log(bio.getSpecialEvents)
