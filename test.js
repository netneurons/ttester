console.log('test.js running');const express = require("express");
const {
  setAuth,
  loadChatId,
  clearContext,
  sendMessage,
  getMessage,
} = require("poe-npm");
const WebSocket = require('ws');
const url = require('url');
const app = express();
const fetch = require("node-fetch");
const formkey = "24740fbf83f10ac69cec1c6d76441f9d";
const cookie = "VHOtnHuzh8f1ODx6xx-sFg==";
setAuth("Quora-Formkey", formkey);
setAuth("Cookie", `m-b=${cookie}`);
app.use(express.static("public"));
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', function connection(ws, req) {
  console.log('WebSocket connection opened');

  ws.on('message', function incoming(message) {
    const decoder = new TextDecoder();
    const decodedMessage = decoder.decode(message);
    const result = complete(decodedMessage);
    ws.send(result);
  });

  ws.on('close', function close() {
    console.log('WebSocket connection closed');
  });
});

app.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, socket => {
    wss.emit('connection', socket, request);
  });
});
async function complete(prompt) {
  const bot = "abdeltest";
  const chatId = await loadChatId(bot);
  await clearContext(chatId);
  const text = prompt;
  await sendMessage(bot, chatId, text);
  const response = await getMessage(bot, chatId);
  return response;
}

app.listen(3000, () => {
  console.log("Server listening on port 1234");
});
