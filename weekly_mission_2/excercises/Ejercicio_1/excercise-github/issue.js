const Issue = {
    title: "No me compila el código",
    repositoryNameAssociated : "Abogabot",
    status: "opened",
    numberOfComments: 14,
    labels: ["issue", "bug"],
    author: "MikoVelascoRamirez",
    dateCreated: "13/04/2022",
    lastUpudated: "yesterday",
    getTitleAndAuthor: function(){ 
        return `The issue "${this.title}" was opened by ${this.author}`
    },
    getGeneralInfo: function(){ 
        return `${this.title}
        Created by ${this.author} on ${this.dateCreated}
        Last update: ${this.lastUpudated}
        Comments: ${this.numberOfComments}
        Status: ${this.status}
        Labels: ${this.labels}`
    }
}

console.log(Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());