const dotenv = require("dotenv");
dotenv.config();
const request = require("request");
const homepageService = require("./homepageService");
const templateMessage = require("../services/templateMessage");

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

const getStartedSi = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "ස්තුතියි ඔබට! පහත යෙදුම් අතරින් ඕනෑම යෙදුමක් තෝරාගන්න.",
      };
      let response2 = {
        text: "අප ඔබට සහය විය යුත්තේ කෙසේද?",
        quick_replies: [
          {
            content_type: "text",
            title: "නිෂ්පාදන කාණ්ඩ",
            payload: "CATEGORIES_SI",
          },
          {
            content_type: "text",
            title: "ඇනවුම් පරීක්ෂණය",
            payload: "LOOKUP_ORDER_SI",
          },
          {
            content_type: "text",
            title: "නියෝජිත සහය",
            payload: "TALK_AGENT_SI",
          },
        ],
      };
      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      resolve("done");
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

const getStartedEn = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "Thank You so much! At any time, use the menu below to navigate through the features.",
      };
      let response2 = {
        text: "What can I do to help you today?",
        quick_replies: [
          {
            content_type: "text",
            title: "Categories",
            payload: "CATEGORIES",
          },
          {
            content_type: "text",
            title: "Lookup Order",
            payload: "LOOKUP_ORDER",
          },
          {
            content_type: "text",
            title: "Talk to an agent",
            payload: "TALK_AGENT",
          },
        ],
      };

      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      resolve("done");
    } catch (e) {
      reject(e);
    }
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

const sendCategoriesSi = (sender_psid) => {
  new Promise(async (resolve, reject) => {
    try {
      let response = templateMessage.sendCategoriesTemplateSi();
      await sendMessage(sender_psid, response);
      resolve("done");
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

const sendCategoriesEn = (sender_psid) => {
  new Promise(async (resolve, reject) => {
    try {
      let response = templateMessage.sendCategoriesTemplateEn();
      await sendMessage(sender_psid, response);
      resolve("done");
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

module.exports = {
  sendMessage: sendMessage,
  sendWelcomeNewUser: sendWelcomeNewUser,
  sendCategoriesSi: sendCategoriesSi,
  sendCategoriesEn: sendCategoriesEn,
  getStartedEn: getStartedEn,
  getStartedSi: getStartedSi,
};
