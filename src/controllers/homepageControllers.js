const dotenv = require("dotenv");
dotenv.config();
const request = require("request");
const homepageService = require("../services/homepageService");
const chatbotService = require("../services/chatbotService");

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let getHomepage = (req, res) => {
  return res.render("homepage.ejs");
};
let getWebhook = (req, res) => {
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
};
let postWebhook = (req, res) => {
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {
      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log("Sender PSID: " + sender_psid);
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};

// Handles messages events
let handleMessage = async (sender_psid, received_message) => {
  //check the incoming message is a quick reply?
  if (
    received_message &&
    received_message.quick_reply &&
    received_message.quick_reply.payload
  ) {
    let payload = received_message.quick_reply.payload;
    if (payload === "SINHALA") {
      await chatbotService.getStartedSi(sender_psid);
    } else if (payload === "ENGLISH") {
      await chatbotService.getStartedEn(sender_psid);
    } else if (payload === "CATEGORIES_SI") {
      await chatbotService.sendCategoriesSi(sender_psid);
    } else if (payload === "CATEGORIES_EN") {
      await chatbotService.sendCategoriesEn(sender_psid);
    } else if (payload === "LOOKUP_ORDER_SI") {
      await chatbotService.sendLookUpOrderSi(sender_psid);
    } else if (payload === "LOOKUP_ORDER_EN") {
      await chatbotService.sendLookUpOrderEn(sender_psid);
    } else if (payload === "TALK_AGENT_SI") {
      await chatbotService.sendTalkAgentSi(sender_psid);
    } else if (payload === "TALK_AGENT_EN") {
      await chatbotService.sendTalkAgentEn(sender_psid);
    }
    return;
  }
  let response;

  // Checks if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = {
      text: `You sent the message: "${received_message.text}". Now send me an attachment!`,
    };
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachment_url,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: "yes",
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: "no",
                },
              ],
            },
          ],
        },
      },
    };
  }

  // Send the response message
  await chatbotService.sendMessage(sender_psid, response);
};

// Handles messaging_postbacks events
let handlePostback = async (sender_psid, received_postback) => {
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  switch (payload) {
    case "GET_STARTED":
    case "RESTART_CONVERSATION":
      await chatbotService.sendWelcomeNewUser(sender_psid);
      break;
    case "yes":
      response = { text: "Thanks!" };
      break;
    case "no":
      response = { text: "Oops, try sending another image." };
      break;
    default:
      console.log("ran default");
  }
  /* if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }*/
};

// Sends response messages via the Send API

let handleSetupProfile = async (req, res) => {
  try {
    await homepageService.handleSetupProfileAPI();
    return res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

let getSetUpProfilePage = (req, res) => {
  return res.render("profile.ejs");
};

module.exports = {
  getHomepage: getHomepage,
  getWebhook: getWebhook,
  postWebhook: postWebhook,
  handleSetupProfile: handleSetupProfile,
  getSetUpProfilePage: getSetUpProfilePage,
};
