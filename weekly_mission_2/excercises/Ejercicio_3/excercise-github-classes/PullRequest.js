class PullRequest{
    constructor(title, author, repositoryNameAssociated){
        this.title = title;
        this.branchName = "main";
        this.dateCreated = new Date();
        this.status = "opened";
        this.author = author;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    //Getters
    get getStatus(){
        return `The PR with the name "${this.title}" is ${this.status}`
    }

    get getTitleAndAuthor(){
        return `The Pull Request with the name "${this.title}" was created by ${this.author}`
    }

    //Setters
    set setStatus(status){
        this.status = status;
    }
}