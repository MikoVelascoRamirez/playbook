class Biography {
  constructor(id, profileName, about) {
    this.id = id;
    this.profileName = profileName;
    this.info = {
      workplace: [],
      schooling: [],
      livePlaces: [],
      basic: {}
    },
    this.about = about;
    this.nicknames = [];
    this.specialEvents = [];
  }

  get getInfoWorkPlace() {
    return this.info.workPlace.map(place => {
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
    return `
    Nombre: ${this.profileName}
    Acerca de: ${this.about}
    Apodos: ${this.nicknames}
    `;
  }

  set setWorkplace(workplace) {
    this.info["workplace"].push(workplace);
  }

  set setSchooling(schooling) {
    this.info["schooling"].push(schooling);
  }

  set setLivePlace(livePlaces) {
    this.info["livePlaces"].push(livePlaces);
  }

  set setBasicInfo(basic) {
    this.info["basic"].push(basic);
  }

  set setNickname(nickname) {
    this.nicknames.push(nickname);
  }

  set setSpecialEvents(event) {
    this.specialEvents = [...this.specialEvents, event];
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

console.log(bio.getInfoWorkPlace())