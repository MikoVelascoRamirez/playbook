# Week 2 - Excercise 1 

Se modelará el siguiente diagrama de clases de una simulación de un repositoriod e GitHub.

El diagrama es el siguiente:

```mermaid
    classDiagram
        Repo : +String name
        Repo : +String author
        Repo : +String language
        Repo : +int numberOfCommits
        Repo : +int stars
        Repo : +int forks
        Repo : +int issues_open
        Repo : +int issues_close
        Repo : +getTotalIssues() : int
        Repo : +getGeneralInfo() : String
    
```