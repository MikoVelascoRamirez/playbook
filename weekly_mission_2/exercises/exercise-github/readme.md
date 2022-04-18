# Week 2 - Excercises

## Excercise 1: Modeling JavaScript Objects

### 1.1. **Github Objects**

### **Activity 1.1.1.** Modeling a Repository Entity

Se modelará el siguiente diagrama de clases de una simulación de un repositorio de GitHub.

El diagrama es el siguiente:

```mermaid
classDiagram
class Repo
Repo : +String name
Repo : +String author
Repo : +String language
Repo : +int numberOfCommits
Repo : +int stars
Repo : +int forks
Repo : +int issues_open
Repo : +int issues_close
Repo : +getTotalIssues()
Repo : +getGeneralInfo()
```

### **Activity 1.1.2.** Modeling a Issue Entity

Se modelará el siguiente diagrama de clases de una Issue de GitHub.

El diagrama es el siguiente:

```mermaid
classDiagram
class Issue
Issue: +String title
Issue: +String repositoryNameAssociated
Issue: +String status
Issue: +int numberOfComments
Issue: +List<String> labels
Issue: +String author
Issue: +String dateCreated
Issue: +String lastUpdated
Issue: +getTitleAndAuthor()
Issue: +getGeneralInfo()
```

### **Activity 1.1.3.** Modeling a PullRequest Entity

Se modelará el siguiente diagrama de clases de una PullRequest de GitHub.

El diagrama es el siguiente:

```mermaid
classDiagram
class PullRequest
PullRequest: +String title
PullRequest: +String branchName
PullRequest: +String dateCreated
PullRequest: +String status
PullRequest: +String repositoryNameAssociated
PullRequest: +getStatus()
PullRequest: +getTitleAndAuthor()
```