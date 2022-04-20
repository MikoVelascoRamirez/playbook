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

### 1.2. **Twitter Objects**

### **Activity 1.2.1.** Modeling a User Profile Entity

Modelado del siguiente diagrama de clases de un de un perfil de Twitter.

El diagrama es el siguiente:

```mermaid
classDiagram
class User
User : +String profileName
User : +String userName
User : +String profilePicture
User : +String coverProfile
User : +String description
User : +String registeredFrom
User : +int followers
User : +int following
User : +List<Object> tweets
User : +getNumberOfFollowers()
User : +getNumberOfFollows()
User : +getNumberOfTweets()
User : +getBasicInfo()
User : +renderTweets()
```

### **Activity 1.2.2.** Modeling a Trending Topic Entity

Modelado del siguiente diagrama de clases de un trending topic de Twitter.

El diagrama es el siguiente:

```mermaid
classDiagram
class TrendingTopic
TrendingTopic : +String name
TrendingTopic : +String category
TrendingTopic : +List<String> relatedTrends
TrendingTopic : +List<Object> outstandings
TrendingTopic : +List<Object> most_recents
TrendingTopic : +String registeredFrom
TrendingTopic : +List<Object> people
TrendingTopic : +List<Object> photos
TrendingTopic : +List<Object> videos
TrendingTopic : +Boolean trending
TrendingTopic : +getNumberOfTweets()
TrendingTopic : +getNumberOfUsers()
TrendingTopic : +getGeneralInfo()
TrendingTopic : +getOutstandings()
TrendingTopic : +getMostRecentTweets()
```

### **Activity 1.2.3.** Modeling a Hashtag Entity

Modelado del siguiente diagrama de clases de un hashtag de Twitter.

El diagrama es el siguiente:

```mermaid
classDiagram
class Hashtag
Hashtag : +String name
Hashtag : +String category
Hashtag : +List<String> relatedTrends
Hashtag : +List<Object> outstandings
Hashtag : +List<Object> most_recents
Hashtag : +Boolean trending
Hashtag : +getNumberOfTweets()
Hashtag : +getNumberOfUsers()
Hashtag : +getGeneralInfo()
Hashtag : +getOutstandings()
Hashtag : +getMostRecentTweets()
```

## 1.3 **Facebook Objects**

### **Activity 1.3.1.** Modeling a User Profile Entity

Modelado del siguiente diagrama de clases de un usuario de Facebook.

El diagrama es el siguiente:

```mermaid
classDiagram
class User
User : +String id
User : +String name
User : +List<Object> friends
User : +String url
User : +String pictureProfile
User : +String portraitPicture
User : +List<String> posts
User : +Boolean friend
User : +List<String> photos
User : +getNumberOfFriends()
User : +getFriends()
User : +getPosts()
User : +getPhotos()
User : +getPersonalInfo()
```