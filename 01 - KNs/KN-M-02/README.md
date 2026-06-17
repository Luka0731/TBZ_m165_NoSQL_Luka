# KN-M-02



## A) Konzeptionelles Datenmodell
### Diagramm
[Link](diagram.drawio)
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-02__a1.jpg)
### Erklärung Entitäten und Beziehungen
**Entitäten**
`User` -> A seller and buyer on the platform. Can create listings and save listings to their watchlist.
`Album` -> The album information like title, artist and release year. Referenced in listings.
`Listing` -> An advertisement posted by a seller for a specific CD. Contains price, condition and contact info.
`Watchlist` -> A collection of listings saved by a user. Represents the N:N relationship between users and listings they are interested in.
**Beziehungen**
`User` erstellt `Listing` (1:M) -> One user can have many listings, but each listing belongs to one user.
`Album` wird verlinkt in `Listing` (1:M) -> One album can appear in many listings, but each listing references one album.
`User` hat `Watchlist` (1:1) -> Each user has exactly one watchlist.
`Watchlist` enthält `Listing` (M:M) -> A watchlist can contain many listings, and a listing can appear in many watchlists. This is the N:N relationship.



---



## B) Logisches Modell für MongoDB
### Diagramm
[Link](diagram.drawio)
![Bild](../../02%20-%20Resources/01%20-%20Images/)
### Erklärung Verschachtelungen
**Album eingebettet in Listing**
Album wird direkt im Listing gespeichert weil ein Listing immer zusammen mit seinen Albuminfos gelesen wird. So braucht man keinen JOIN. Die Redundanz ist in MongoDB akzeptiert und sogar gewünscht, weil Document Stores genau dafür gemacht sind.
**Watchlist eingebettet in User**
Watchlists gehören immer zu einem User und werden nur im Kontext des Users gelesen. Daher macht Einbettung hier Sinn. Die N:N Beziehung zu Listings wird über das Array `saved_listing_ids` aufgelöst, ohne Zwischentabelle.



---



## C) Anwendung des Schemas in MongoDB
### Script
[Link Collections](create-collections.js)
### Screenshot Collections
![Bild](../../02%20-%20Resources/01%20-%20Images/kn-m-02__c1.jpg)
