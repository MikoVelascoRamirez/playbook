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

  get getWorkPlace() {
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

  set specialEvents(event) {
    this.specialEvents.push(event);
  }
}

