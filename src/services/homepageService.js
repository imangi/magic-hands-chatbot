const request = require("request");
const dotenv = require("dotenv");

dotenv.config();

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let handleSetupProfileAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      let URL = `https://graph.facebook.com/v12.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
      let URLP = `https://graph.facebook.com/v12.0/me/custom_user_settings?access_token=${PAGE_ACCESS_TOKEN}`;
      let request_body = {
        get_started: {
          payload: "GET_STARTED",
        },

        data: [
          {
            user_level_persistent_menu: [
              {
                locale: "default",
                composer_input_disabled: false,
                call_to_actions: [
                  {
                    type: "postback",
                    title: "Talk to an agent",
                    payload: "CARE_HELP",
                  },
                  {
                    type: "postback",
                    title: "Restart this conversation",
                    payload: "RESTART_CONVERSATION",
                  },
                  {
                    type: "web_url",
                    title: "Google",
                    url: "https://www.google.com/",
                    webview_height_ratio: "full",
                  },
                ],
              },
            ],
            page_level_persistent_menu: [
              {
                locale: "default",
                composer_input_disabled: false,
                call_to_actions: [
                  {
                    type: "web_url",
                    title: "View Facebook Fan Page",
                    url: "https://www.facebook.com/thesriatelier",
                    webview_height_ratio: "full",
                  },
                ],
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
handlePresetsAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      let URL = `https://graph.facebook.com/v12.0/me/custom_user_settings?access_token=${PAGE_ACCESS_TOKEN}`;
      let request_body = {
        data: [
          {
            user_level_persistent_menu: [
              {
                locale: "default",
                composer_input_disabled: false,
                call_to_actions: [
                  {
                    type: "postback",
                    title: "Talk to an agent",
                    payload: "CARE_HELP",
                  },
                  {
                    type: "postback",
                    title: "Restart this conversation",
                    payload: "RESTART_CONVERSATION",
                  },
                  {
                    type: "web_url",
                    title: "Google",
                    url: "https://www.google.com/",
                    webview_height_ratio: "full",
                  },
                ],
              },
            ],
            page_level_persistent_menu: [
              {
                locale: "default",
                composer_input_disabled: false,
                call_to_actions: [
                  {
                    type: "web_url",
                    title: "View Facebook Fan Page",
                    url: "https://www.facebook.com/thesriatelier",
                    webview_height_ratio: "full",
                  },
                ],
              },
            ],
          },
        ],
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

module.exports = {
  handleSetupProfileAPI: handleSetupProfileAPI,
};
