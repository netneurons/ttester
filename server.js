const express = require("express");
const {
  setAuth,
  loadChatId,
  clearContext,
  sendMessage,
  getMessage,
} = require("poe-npm");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const allowedOrigins = ["https://tor-xo4n.glitch.me"];
const corsOptions = {
  origin: "*", //(origin, callback) => {
  //if (allowedOrigins.indexOf(origin) !== -1) {
  // callback(null, true);
  //} else {
  // callback(new Error('Not allowed by CORS'));
  //}
  //}
};
app.use(cors(corsOptions));
const formkey = "24740fbf83f10ac69cec1c6d76441f9d";
const cookie = "VHOtnHuzh8f1ODx6xx-sFg==";
setAuth("Quora-Formkey", formkey);
setAuth("Cookie", `m-b=${cookie}`);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
async function conversation(prompt, first) {
  if (first === "true") {
    const bot = "simouhamed";
    const chatId = await loadChatId(bot);
    await clearContext(chatId);
    const text = prompt;
    await sendMessage(bot, chatId, text);
    const response = await getMessage(bot, chatId);
    return response;
  }
  const bot = "simouhamed";
  const chatId = await loadChatId(bot);
  const text = prompt;
  await sendMessage(bot, chatId, text);
  const response = await getMessage(bot, chatId);
  return response;
}
async function complete(prompt) {
  const bot = "abdeltest";
  const chatId = await loadChatId(bot);
  await clearContext(chatId);
  const text = prompt;
  await sendMessage(bot, chatId, text);
  const response = await getMessage(bot, chatId);
  return response;
}
async function music(subject) {
  const bot = "a2";
  const chatId = await loadChatId(bot);
  await clearContext(chatId);
  const text = "write me a full cool and amazing song about" + subject;
  await sendMessage(bot, chatId, text);
  const response = await getMessage(bot, chatId);
  return response;
}
async function pic(text) {
  console.log("picture triggered");
  const h = {
    Authorization: "Token 3140bf8c3fa874da3882f0b2084e8f6138016543",
    "Content-Type": "application/json",
    "Content-Length": "97",
    Origin: "https://beta.character.ai",
    Connection: "keep-alive",
  };
  const b = { image_description: text };
  const url = "https://beta.character.ai/chat/generate-image/";
  fetch(url, { method: "POST", headers: h, body: b, mode: "cors" })
    .then((response) => response.text())
    .then((responseText) => console.log(responseText))
    .catch((error) => console.error(error));
}
app.get("/picture", async (req, res) => {
  const subject = req.query.subject;
  const data = pic(subject);
  res.type("text").send("Sorry but we are doing our best to make it work!!!");
});
app.get("/conversation", async (req, res) => {
  const subject = req.query.subject;
  const is = req.query.is;
  const data = await conversation(subject, is);
  res.type("text").send(data);
});
app.get("/complete", async (req, res) => {
  const subject = req.query.subject;
  const data = await complete(subject);
  res.type("text").send(data);
});
app.get("/music", async (req, res) => {
  const subject = req.query.subject;
  const data = await music(subject);
  res.type("text").send(data);
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
