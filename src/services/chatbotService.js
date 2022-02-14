const dotenv = require("dotenv");
dotenv.config();
const request = require("request");
const homepageService = require("./homepageService");

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const sendWelcomeNewUser = (sender_psid, response) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await homepageService.getFacebookUserName(sender_psid);
      let response = {
        text: `Hey! ${username}. Pick your language:`,
        quick_replies: [
          {
            content_type: "text",
            title: "සිංහල",
            payload: "SINHALA",
          },
          {
            content_type: "text",
            title: "English",
            payload: "ENGLISH",
          },
        ],
      };
      await sendMessage(sender_psid, response);
    } catch (e) {}
  });
};

const sendMessage = (sender_psid, response) => {
  return new Promise(async (resolve, reject) => {
    try {
      await homepageService.markMessageRead(sender_psid);
      await homepageService.sendTypingOn(sender_psid);
      await homepageService.sendTypingOff(sender_psid);
      // Construct the message body
      let request_body = {
        recipient: {
          id: sender_psid,
        },
        message: response,
      };

      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: "https://graph.facebook.com/v12.0/me/messages",
          qs: { access_token: PAGE_ACCESS_TOKEN },
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            console.log("message sent!");
          } else {
            console.error("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  sendMessage: sendMessage,
  sendWelcomeNewUser: sendWelcomeNewUser,
};
