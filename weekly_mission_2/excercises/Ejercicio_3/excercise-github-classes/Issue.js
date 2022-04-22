//Definición de clase
class Issue{
    //Constructor
    constructor(title, repositoryNameAssociated, numberOfComments, labels, author){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = "opened";
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    //Getters

    get getTitleAndAuthor(){
        return `The issue "${this.title}" was opened by ${this.author}`
    }

    get getGeneralInfo(){ 
        return `${this.title}
        Created by ${this.author} on ${this.dateCreated}
        Last update: ${this.lastUpudated}
        Comments: ${this.numberOfComments}
        Status: ${this.status}
        Labels: ${this.labels}`
    }

    //Setters

    set setStatus(status){ 
        this.status = status;
    }

    set setUpdate(date){
        this.lastUpdated = date;
    }

    set setIssueLabels(labels){
        this.labels = labels;
    }

    //Methods

    setNumberOfComments(){
        this.numberOfComments += 1;
    }
}

//Instanciación

//Implementación