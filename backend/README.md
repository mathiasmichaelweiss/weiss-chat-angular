# Aufgabe: Chat

Ziel dieser Aufgabe ist es eine Chatapplikation zu implementieren. Dazu sei eine API gegeben.

Folgende Informationen sind dazu relevant.

## Installation

Um die API starten zu können, müssen zunächst alle Pakete durch `npm` installiert werden. Benutzen Sie dazu den Befehl `npm install`.

Um die Applikation zu starten können Sie entweder `node chat.js` oder `npm run start` nutzen.

## Ablauf

1. Benutzer meldet sich an `POST /api/user/register` an und erhält eine neue ID.
2. Abspeichern der ID für weitere Verwendung - Falls beim Aufrufen eine ID gefunden wird, kann diese wiederverwendet werden. - Ein Abmelden oder Löschen eines Benutzers ist in diesem Beispiel nicht vorgesehen.
3. Benutzer meldet sich an Websocket an um Benachrichtigungen zu erhalten. Wichtig: Hier wird die ID gebraucht.
4. Alte Nachrichten können über den entsprechenden GET Request abgerufen werden.
5. Benutzer bekommt neue Nachrichten über den Websocket.
6. Benutzer kann neue Nachrichten über API versenden.


## Endpunkte REST

Bei allen Endpunkten `/api/chat/*` wird zwingend der `userid`-Parameter erwartet!

| Endpunkt | Funktion|
|----|----|
| GET /api/now | Abfrage der aktuellen Serverzeit - Zu Testzwecken |
| GET /api/user | Liste aller Benutzer |
| POST /api/user/register | Benutzer registrieren - Parameter `name` muss als QueryParameter übergeben werden und bildet den Benutzernamen - Rückgegeben wird ein Benutzerobjekt mit generierter ID |
| GET /api/chat/message | Liste aller Nachrichten | 
| POST /api/chat/message | Neue Nachricht versenden - Parameter `userid` muss als Query Parameter übergeben werden - Rückgabe Nachricht Objekt - Nachricht wird per Websocket an alle anderen Benutzer gesendet |
| DELETE /api/chat/message | Nachrichten werden geleert |


## Websocket

Folgende Nachrichten werden an Websocket-Clients versendet:

Wichtig: **Benutzer ID muss als Query Parameter in URL zum Verbinden mit dem Websocket vorhanden sein. Beispiel:** `ws://localhost:5001?userid=c11afa8f-2b0d-4f2f-b15a-66a5b6e609b0`

Wenn eine neue Nachricht empfangen wird, wird die neue Nachricht als Nachrichten Objekt an alle Clients anderer Benutzer versendet - An alle Clients außer die des Benutzers mit angemeldeter ID.

Folgende Aktionen werden per Websocket übertragen:

| Aktion | Nachrichtinhalt | Beschreibung |
|----|----|----|
| `new-message` | Nachrichten-Objekt (siehe unten) | Eingang einer neuen Nachricht |
| `new-user` | Benutzer-Objekt (siehe unten) | Anmeldung eines Benutzers am Chat |
| `error` | Fehlermeldung | Fehlermeldung an den Client | 
| `info` | Nachricht | Information an den Client |
| `reset-messages` | leer | Nachrichten werden zurückgesetzt |


## Objekte

Benutzer:

```js
const user = {
    id: '<uuid string>',
    name: '<Benutzer Name>'
}
```

Nachricht:

```js
const message = {
    userId: '<uuid string>',
    user: User,
    message: '<Nachrichten Inhalt>',
    timestamp: '<Zeitstempel des Empfangs>'
}

```

Websocket-Nachricht:

```js
const websocketMessage = {
    action: '<Aktion>',
    message: '<Nachricht Inhalt>
}
```
