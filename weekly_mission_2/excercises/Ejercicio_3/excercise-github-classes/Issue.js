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

    //Setters
}

//Instanciación

//Implementación