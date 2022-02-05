const request = require("request");
const dotenv = require("dotenv");

dotenv.config();

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let handleSetupProfileAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      let URL = `https://graph.facebook.com/v12.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
      let request_body = {
        get_started: {
          payload: "GET_STARTED",
        },
        persistent_menu: [
          {
            locale: "default",
            composer_input_disabled: false,
            call_to_actions: [
              {
                type: "postback",
                title: "Talk to an agent",
                payload: "TALK_AGENT",
              },
              {
                type: "postback",
                title: "Restart this conversation",
                payload: "RESTART_CONVERSATION",
              },
              {
                type: "web_url",
                title: "View Facebook Fan Page",
                url: "https://www.facebook.com/thesriatelier/",
                webview_height_ratio: "full",
              },
            ],
          },
        ],
        whitelisted_domains: ["https://theateliernew.herokuapp.com/"],
      };

      request(
        {
          uri: URL,
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            console.log(body);
            resolve("done");
          } else {
            reject("Unable to send message:" + err);
            console.log(err);
          }
        }
      );
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

let getFacebookUserName = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let URL = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;

      request(
        {
          uri: URL,
          method: "GET",
        },
        (err, res, body) => {
          if (!err) {
            //convert string to json object
            body = JSON.parse(body);
            let username = `${body.first_name}`;
            resolve(username);
        } else {
            reject("Unable to send message:" + err);
        }
        }
      );
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

module.exports = {
  handleSetupProfileAPI: handleSetupProfileAPI,
  getFacebookUserName: getFacebookUserName,
};
