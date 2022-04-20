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

### **Activity 1.3.2.** Modeling a Post Entity

Modelado del siguiente diagrama de clases de un post de Facebook.

El diagrama es el siguiente:

```mermaid
classDiagram
class Post
Post : +String id
Post : +String publisher
Post : +String date
Post : +String time
Post : +String description
Post : +String privacity
Post : +Object reactions
Post : +List<String> media
Post : +List<Object> comments
Post : +int shares
Post : +getNumberOfReactions()
Post : +getComments()
Post : +getNumberOfComments()
Post : +getPostInfo()
```

### **Activity 1.3.3.** Modeling a Biography Entity

Modelado del siguiente diagrama de clases de un post de Facebook.

El diagrama es el siguiente:

```mermaid
classDiagram
class Biography
Biography : +String idProfile
Biography : +String profileName
Biography : +Object info
Biography : +String about
Biography : +List<String> nicknames
Biography : +List<Object> specialEvents
Biography : +getWorkpPlace()
Biography : +getSchooling()
Biography : +getLivePlaces()
Biography : +getSpecialEvents()
Biography : +getBasicInfo()
```

## 1.4 **Uber Objects**

### **Activity 1.4.1.** Modeling a User Profile Entity

Modelado del siguiente diagrama de clases de un pefil de usuario de Uber, siendo este el caso de un conductor.

El diagrama es el siguiente:

```mermaid
classDiagram
class Profile
Profile : +String userName
Profile : +String car
Profile : +String photo
Profile : +String license
Profile : +int trips
Profile : +float rating
Profile : +int years
Profile : +List<String> languages
Profile : +String cityBorn
Profile : +String countryBorn
Profile : +String funFact
Profile : +String mostMemorableTrip
Profile : +List<Object> riderCompliments
Profile : +List<String> thankyouNotes
Profile : +List<String> driverAchievments
Profile : +getRiderCompliments()
Profile : +getThankYouNotes()
Profile : +getdriverAchievements()
Profile : +getProfileInfo()
```

### **Activity 1.4.2.** Modeling a Travel Entity

Modelado del siguiente diagrama de clases de un viaje de usuario de Uber.

El diagrama es el siguiente:

```mermaid
classDiagram
class Travel
Travel : +String idTravel
Travel : +String traveler
Travel : +String driver
Travel : +String origin
Travel : +String destiny
Travel : +String date
Travel : +String departure
Travel : +String checkIn
Travel : +String payment
Travel : +float price
Travel : +List<String> route
Travel : +int rating
Travel : +getTravelInfo()
```