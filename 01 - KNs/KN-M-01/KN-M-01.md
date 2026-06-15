# KN-M-01



## A) 
### Cloude Init Datei
[Link](cloudinit-mongodb.yaml)
### MongoDB Compass 
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__a1.jpg)
### Connection String authSource=admin Erklärung
Der Parameter `authSource=admin` gibt an, gegen welche Datenbank sich der Benutzer authentifiziert.
Da der Admin-Benutzer in der `admin`-Datenbank erstellt wurde, muss auch dort die Authentifizierung stattfinden.
Wuerde man eine andere Datenbank angeben, schlaegt der Login fehl, weil MongoDB den Benutzer dort nicht findet.
### Erklaerung der sed-Befehle
**Befehl 1**
```bash
sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf
```
Dieser Befehl ersetzt in der MongoDB Konfigurationsdatei die IP `127.0.0.1` (localhost) mit `0.0.0.0`. Das bedeutet MongoDB hoert nicht mehr nur auf lokale Verbindungen, sondern akzeptiert Verbindungen von allen IP-Adressen. Ohne diese Aenderung koennte man sich nicht von aussen (z.B. mit Compass) verbinden.
**Befehl 2**
```bash
sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf
```
Dieser Befehl ersetzt den auskommentierten Eintrag `#security:` mit den zwei Zeilen `security:` und `authorization: enabled`. Das aktiviert die Authentifizierung in MongoDB, sodass man sich nur noch mit Benutzername und Passwort verbinden kann. Ohne diese Aenderung hätte jeder ohne Login Zugriff auf die Datenbank.



---



## B) 
### Einfügen JSON Datei
[Link](import.json)
### Datentyp-Änderung
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__b1.jpg)
### Export-Datei und Erklaerung Datentyp
[Link](grujic.luka.json)
**Erklaerung**
Um ein Datum direkt beim Einfuegen als echten Date-Typ zu speichern, haette man im JSON den MongoDB Extended JSON Format verwenden müssen:
```json
{ "Geburtsdatum": { "$date": "2000-01-01T00:00:00.000Z" } }
```
Ohne dieses Format interpretiert MongoDB den Wert als einfachen String.
Das ist auch bei anderen Datentypen relevant, z.B. bei Integer (`$numberInt`) oder ObjectId (`$oid`).
Der Umweg ist noetig, weil standard JSON keine Typen wie Datum oder Integer kennt, alles ist entweder String, Number oder Boolean.



---



## C) 
### Compass Shell
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__c1.jpg)
### Server Shell
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__c2.jpg)
### Erklaerung der Befehle
| Befehl | Erklaerung |
|---|---|
| `show dbs` | Zeigt alle Datenbanken an |
| `show databases` | Macht dasselbe wie show dbs, anderer Alias |
| `use <Datenbank>` | Wechselt zur angegebenen Datenbank |
| `show collections` | Zeigt alle Collections der aktuellen Datenbank |
| `show tables` | Alias für show collections, kommt aus der SQL-Welt |
**Unterschied Collections vs. Tables:**
Eine Table in einer relationalen Datenbank hat ein fixes Schema, jede Zeile hat dieselben Spalten.
Eine Collection in MongoDB ist flexibel, jedes Dokument kann andere Felder haben, kein fixes Schema nötig.



---



## D)
###  Fehler falsche authSource
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d1.jpg)
### Skript Benutzererstellung
[Link](create-users.js)
### Screenshots Benutzer 1
**Verbindungstext**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d21.jpg)
**Lesen**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d22.jpg)
**Schreiben**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d23.jpg)
### Screenshots Benutzer 2 
**Verbindungstext**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d31.jpg)
**Lesen**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d32.jpg)
**Schreiben**
![Image](../../02%20-%20Resources/01%20-%20Images/kn-m-01__d33.jpg)
