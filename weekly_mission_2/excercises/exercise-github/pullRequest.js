const PullRequest = {
    title: "Módulo de descargas - favor de revisar",
    branchName: "main",
    dateCreated: "11/04/2022",
    status: "opened",
    author: "MikoVelascoRamirez",
    repositoryNameAssociated: "Abogabot",
    getStatus: function(){
        return `The PR with the name "${this.title}" is ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `The Pull Request with the name "${this.title}" was created by ${this.author}`
    }
}

console.log(`Status of the PR: ${PullRequest.getStatus()}`)
console.log(`Name and author: ${PullRequest.getTitleAndAuthor()}`)