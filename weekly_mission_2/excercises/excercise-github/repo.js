const repo = {
    name: "LaunchX",
    author: "MikoVelascoRamirez",
    language: "JavaScript",
    numberOfCommits: 80,
    stars: 199,
    forks: 299,
    issues_open: 2,
    issues_close: 4,
    getTotalIssues: function(){ 
        return this.issues_close + this.issues_open
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log(`Nombre de la repo: ${repo.name}
Issues totales: ${repo.getTotalIssues()}
${repo.getGeneralInfo()}`)