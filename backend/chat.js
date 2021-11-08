const express = require("express");
const WebSocket = require("ws");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const url = require("url");

// My code (cors для решение проблемы с cors policy)
const cors = require("cors");

// Constants
const app = express();
const webServer = http.createServer(app);
app.use(express.json(), cors());
const webSocketServer = new WebSocket.Server({ server: webServer });

// Config
const webServerHost = "localhost";
const webServerPort = 5000;
const webSocketPort = 5001;

const messages = []; // message
const users = {}; // userId -> user

/**
 * Build dto message object
 */
buildMessage = message => ({ ...message, user: users[message.userId] });

/**
 * Get server time as string.
 *
 * Can be used as test for api access.
 * Use `http://localhost:5000/api/now` in browser to test.
 */
app.get("/api/now", (req, res) => {
  return res.send(`${new Date()}`);
});

app.post("/api/chat/message", (req, res) => {
  // Parameters
  const userId = req.query.userid;
  const messageContent = req.body.messageContent;
  console.log("test messageContent ", req.query);
  console.log("test userId ", req.body);
  // Check if user exists
  if (!userId || users[userId] === undefined) {
    res.status(404).send("User not found");
    console.log(`/api/chat/message User with id = '${userId}' not found!`);
    return;
  }

  console.log(
    `New message: ${messageContent} from user '${users[userId].name}'`
  );

  const message = {
    userId: userId,
    message: messageContent,
    timestamp: new Date(),
    name: users[userId].name
  };

  messages.push(message);

  // Send to other clients - exclude sending userId
  sendMessageToAllClients("new-message", buildMessage(message), [userId]);

  res.send(buildMessage(message));
});

/**
 * Get all messages from local storage.
 */
app.get("/api/chat/message", (req, res) => {
  // Parameters
  const userId = req.query.userid;

  // Check if user exists
  if (!userId || users[userId] === undefined) {
    res.status(404).send("User not found");
    console.log(`Get all messages User with id = '${userId}' not found!`);
    return;
  }

  res.send(messages.map(k => buildMessage(k)));
});

/**
 * Delete all messages from local storage.
 */
app.delete("/api/chat/message", (req, res) => {
  // Parameters
  const userId = req.query.userid;

  // Check if user exists
  if (!userId || users[userId] === undefined) {
    res.status(404).send("User not found");
    console.log(`Delete all messages User with id = '${userId}' not found!`);
    return;
  }

  messages.splice(0, messages.length);
  res.send(JSON.stringify([]));
});

/**
 * Get all users ever registered.
 */
app.get("/api/user", (req, res) => {
  res.send(Object.keys(users).map(k => users[k]));
});

/**
 * Register new user
 */
app.post("/api/user/register", (req, res) => {
  console.log(req.body);
  const userName = req.body.name.toString();

  if (!userName) {
    res.status(405).send("Missing property user name.");
    return;
  }

  // User already registered - return existing id
  const userIdFound = Object.keys(users).find(
    k => users[k].name.toLowerCase() === userName.toLowerCase()
  );

  if (userIdFound) {
    res.send(users[userIdFound]);
    return;
  }

  const newId = uuidv4();
  const newUser = {
    id: newId,
    name: userName
  };

  users[newId] = newUser;

  res.send(newUser);
});

// WebSocket
webSocketServer.on("connection", (ws, req) => {
  const userId = url.parse(req.url, true).query.userid;

  // user id not found
  if (!userId || !users[userId]) {
    ws.send(
      JSON.stringify({
        action: "error",
        message: "User not found. Cannot connect to websocket."
      })
    );
    ws.close();

    console.log("User not found. Cannot connect to websocket.");
    return;
  }

  ws.userId = userId;

  console.log(`New client for user ${userId}`);
  ws.on("message", message => {
    // not used
    console.log(`New websocket message ${message}`);
  });

  sendMessageToAllClients("new-user", users[userId], [userId]);

  ws.send(
    JSON.stringify({
      action: "info",
      message: "Connected successful"
    })
  );
});

/**
 * Send message to all connected websocket clients
 */
sendMessageToAllClients = (action, message, excludedUserIds = []) => {
  webSocketServer.clients.forEach(k => {
    if (!excludedUserIds.some(x => x === k.userId)) {
      k.send(
        JSON.stringify({
          action: action,
          message: message
        })
      );
    }
  });
};

app.listen(webServerPort, webServerHost, () => {
  console.log(
    `WebServer wurde gestartet. Adresse = http://${webServerHost}:${webServerPort}`
  );
});

webServer.listen(webSocketPort, webServerHost, () => {
  console.log(
    `WebSocket Server wurde gestartet. Adresse = http://${webServerHost}:${webSocketPort}`
  );
});
