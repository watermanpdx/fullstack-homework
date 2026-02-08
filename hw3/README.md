# Homework 3 - React and Socket.IO

The following describes how to run the contents for Homework 3. Contained is the resultant code from a [React Tic-Tac-Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe) and [Socket.IO Chat Tutorial](https://socket.io/get-started/chat) (Homework 3 Option 1). Below contains details on how to execute the final code, and a high-level overview of their contents.

## React - Tic-Tac-Toe

Contents can be found in the `./hw3/react/` directory.

This tutorial contains a Tic-Tac-Toe game build fully on [React](https://react.dev/). The game allows two players (in one browser) to play Tic-Tac-Toe, alternately placing X and Os. It includes a "history" feature summarizing previous moves and allows the user to jump back to previous states in the game.

This tutorial covers basic React functionality, including building of modular components, event-handling, and how to manage data and callbacks between components via props.

## How to Run

All commmands reference the `./hw3/react/` directory. From the root directory of this repo, enter the react directory first:

```bash
cd ./hw3/react/
```

### Install Node Packages

```bash
npm install
```

### Run Tic-Tac-Toe on LocalHost

```bash
npm start
```

The Tic-Tac-Toe game will automatically be launched in your browser on LocalHost. If it fails to auto-launch, once the server application is running, it can also be directly accessed via the browser of your choice at [http://localhost:3000/](http://localhost:3000/)

## Socket.IO Chat

Contents can be found in the `./hw3/socketio/` directory.

This tutorial contains a basic browser-based chat implementation built on [Socket.IO](https://socket.io/). The user is able to send and recieve messages displayed in the browser from all other users in other browsers. It can be tested by opening multiple instances in the browser at [http://localhost:3000/](http://localhost:3000/). All browsers/users are able to see all messages from all other users (after entering a session).

## How to Run

All commmands reference the `./hw3/socketio/` directory. From the root directory of this repo, enter the react directory first:

```bash
cd ./hw3/socketio/
```

### Install Node Packages

```bash
npm install
```

### Chat on LocalHost

Start the chat server:

```bash
node index.js
```

Open a chat session (in browser). This can be run in multiple tabs/browsers on LocalHost to experience the multi-user "chat" experience. In a browser open [http://localhost:3000/](http://localhost:3000/).
