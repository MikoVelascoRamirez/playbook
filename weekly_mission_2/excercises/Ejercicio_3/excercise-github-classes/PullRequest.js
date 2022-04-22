class PullRequest{
    constructor(title, author, repositoryNameAssociated){
        this.title = title;
        this.branchName = "main";
        this.dateCreated = new Date();
        this.status = "opened";
        this.author = author;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }
}