require('dotenv').config();
const convOperations = require("../db/services/conv_crud.js");
const { WebSocketServer } = require('ws');

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

const messageController = {
  getWebHooks(req, res) {
    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
      // Checks the mode and token sent is correct
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        // Responds with the challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }
  },

  postWebHooks(req, res) {
    // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === "page") {
      // Iterate over each entry - there may be multiple if batched
      body.entry.forEach(function (entry) {
        if(entry.messaging){
            // Gets the body of the webhook event
          let webhook_event = entry.messaging[0];
          console.log(webhook_event);

          // Get the sender PSID
          let sender_psid = webhook_event.sender.id;
          console.log("Sender PSID: " + sender_psid);

          // Check if the event is a message or postback and
          // pass the event to the appropriate handler function
          if (webhook_event.message) {
            handleMessage(sender_psid, webhook_event);
          } else if (webhook_event.postback) {
            handlePostback(sender_psid, webhook_event.postback);
          }
        }
        else if(entry.changes){
          let webhook_event = entry.changes[0].value;
          console.log(webhook_event);
        }
      });

      // Return a '200 OK' response to all events
      res.status(200).send("EVENT_RECEIVED");
    } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  },
  
};

function handleMessage(senderId,webhook_event){
  const convObject = {
    type: 'chat',
    pageId : webhook_event.recipient.id,
    senderId: webhook_event.sender.id,
    message: webhook_event.message.text,
    messageDoc : webhook_event,
  }
  convOperations.saveConversation(convObject);
  ws.send('data changed');
}

function handlePostback(senderId,postback){

}

const sockserver = new WebSocketServer({ port: 443 })
sockserver.on('connection', ws => {
  console.log('New client connected!')
  ws.send('connection established')
  ws.on('close', () => console.log('Client has disconnected!'))
  
  ws.on('message', data => {
    sockserver.clients.forEach(client => {
      console.log(`data change request sent to App`)
      client.send(`change`)
    })
  })
  
  ws.onerror = function () {
    console.log('websocket error')
  }
 })

module.exports = messageController;
