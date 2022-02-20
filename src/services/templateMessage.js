let sendCategoriesTemplateEn = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Felt crafts",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/240729868_377368687272792_530394064735075555_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHldVAs1xq0HKE8iTI4L6kW0IdFkw0UEMPQh0WTDRQQwyL2mQr51_yD8GMH8c_xqme7MhFNcNvEZ9U7Zt960W3I&_nc_ohc=A9m9SOISMKMAX-NpU3_&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_UvTlzaGaVX-wnim-gdsmqAliTkdomnXWo1Qfw-eBCpQ&oe=621298D3",
            subtitle: "DIY felt crafts ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show felt crafts",
                payload: "SHOW_EN",
              },
            ],
          },
          {
            title: "French Beaded Flowers",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/239556483_375525094123818_938602325005879121_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGkQZ9024zUHNCA00vN5Tqv_QwQCCfynLv9DBAIJ_Kcu2o27Ig_SVdT9XcyZ9Ot6r69dxoboAGU2CSss-uI7zkL&_nc_ohc=a1gvNjfWUsQAX_65mF-&_nc_oc=AQlvzLyar6Cs2QqtLJppH7q-e2ZNbMDmbHC3ewXDNR5ZJAlMDNTq0qBz9rexwQI9Cn0&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT-O2NNxvzHrd4pf6lL2kzbxS5n_jgI9EiuPO5OR6gBWlg&oe=6212714B",
            subtitle: "French beaded flowers ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show beaded Flowers",
                payload: "SHOW_EN",
              },
            ],
          },
          {
            title: "Crochet flowers",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/237340024_372915344384793_7929463785915765464_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGD0I-myJbTZ1_TB7hGS3mcUurCf1wGkqpS6sJ_XAaSqoMeDd8IUPXF6Z-ktkd4v9ADth3UipHZI6wzmrgm8GQK&_nc_ohc=ronuWlVmGncAX-YVHDw&tn=mV95uOjsVNPsfYyZ&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_ya4rbG1Ls8RYBaP5Y_fY3OPIsBnlWw_X7ZwlLv8U5Kw&oe=62129369",
            subtitle: "crochet flower ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show crochet flowers",
                payload: "SHOW_EN",
              },
            ],
          },
          {
            title: "Thread Arts",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/237549418_372314817778179_677947715148601571_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeErbBPahOU_zH06InEC4Of3NE3PatWwIjg0Tc9q1bAiOG0OZkbhuyqI_eB5bJC4NBeyzeSL9c4c_1QCa624OL0Z&_nc_ohc=rnfEjwjBIYYAX_l9cKA&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT8ml3VwHBG1X__DMga8r4J8F4uoVLTPDm45Gq-o2cTcPw&oe=6215AEA5",
            subtitle: "DIY Thread arts ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show Thread Arts",
                payload: "SHOW_EN",
              },
            ],
          },
          {
            title: "River Pebbles arts",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/236891927_370824257927235_6226573400997273994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEmHhPb57HctrfE0jIbTcYc2I1FVcOEtkzYjUVVw4S2THyS2xWP4OvYusMZji0DfhEXdQM8HVt1yql_uYYPCIum&_nc_ohc=VMwPWa8RFb4AX8p4ANf&tn=mV95uOjsVNPsfYyZ&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_pX_YAG0fWyt65pq68IqZT4-nNqBQtK9qDPUlNnsQy7w&oe=62156098",
            subtitle: "DIY River Pebbles Arts ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show River pebbles arts",
                payload: "SHOW_EN",
              },
            ],
          },
          {
            title: "Beads works",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/236971524_369587931384201_6548188776295171332_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGMOicj3LbuJzVjVxRkN-Xm__zgavs6qiv__OBq-zqqK27ps2ylyn8pdTclpJyhNU3Jl0PhtyYFmO4K_RNm6kg1&_nc_ohc=gzXr9m89Mf0AX8HOWr6&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_lcq_7X6rD9xPbad-JfiHAXpqYd_w08D8-mLPD_CAMxw&oe=62155874",
            subtitle: "DIY beads works ideas and inspirations",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "View on Page",
              },
              {
                type: "postback",
                title: "Show beads works",
                payload: "SHOW_EN",
              },
            ],
          },
        ],
      },
    },
  };
};

let sendCategoriesTemplateSi = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "ෆෙල්ට් අත්වැඩ",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/240729868_377368687272792_530394064735075555_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHldVAs1xq0HKE8iTI4L6kW0IdFkw0UEMPQh0WTDRQQwyL2mQr51_yD8GMH8c_xqme7MhFNcNvEZ9U7Zt960W3I&_nc_ohc=A9m9SOISMKMAX-NpU3_&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_UvTlzaGaVX-wnim-gdsmqAliTkdomnXWo1Qfw-eBCpQ&oe=621298D3",
            subtitle: "ෆෙල්ට් අත්වැඩ සහ නිර්මාර්ණාත්මක අදහස් ",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
          {
            title: "ෆ්‍රෙන්ච් පබළු මල්",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/239556483_375525094123818_938602325005879121_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGkQZ9024zUHNCA00vN5Tqv_QwQCCfynLv9DBAIJ_Kcu2o27Ig_SVdT9XcyZ9Ot6r69dxoboAGU2CSss-uI7zkL&_nc_ohc=a1gvNjfWUsQAX_65mF-&_nc_oc=AQlvzLyar6Cs2QqtLJppH7q-e2ZNbMDmbHC3ewXDNR5ZJAlMDNTq0qBz9rexwQI9Cn0&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT-O2NNxvzHrd4pf6lL2kzbxS5n_jgI9EiuPO5OR6gBWlg&oe=6212714B",
            subtitle: "ෆ්‍රෙන්ච් පබළු මල් සහ නිර්මාර්ණාත්මක අදහස්",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
          {
            title: "වූල් මල්",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/237340024_372915344384793_7929463785915765464_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGD0I-myJbTZ1_TB7hGS3mcUurCf1wGkqpS6sJ_XAaSqoMeDd8IUPXF6Z-ktkd4v9ADth3UipHZI6wzmrgm8GQK&_nc_ohc=ronuWlVmGncAX-YVHDw&tn=mV95uOjsVNPsfYyZ&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_ya4rbG1Ls8RYBaP5Y_fY3OPIsBnlWw_X7ZwlLv8U5Kw&oe=62129369",
            subtitle: "වූල් මල් සහ නිර්මාර්ණාත්මක අදහස්",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
          {
            title: "ත්‍රෙඩ් නිර්මාණ",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/237549418_372314817778179_677947715148601571_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeErbBPahOU_zH06InEC4Of3NE3PatWwIjg0Tc9q1bAiOG0OZkbhuyqI_eB5bJC4NBeyzeSL9c4c_1QCa624OL0Z&_nc_ohc=rnfEjwjBIYYAX_l9cKA&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT8ml3VwHBG1X__DMga8r4J8F4uoVLTPDm45Gq-o2cTcPw&oe=6215AEA5",
            subtitle: "ත්‍රෙඩ් නිර්මාණ සහ නිර්මාර්ණාත්මක අදහස්",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
          {
            title: "රිවර් පෙබල්ස් නිර්මාණ",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/236891927_370824257927235_6226573400997273994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEmHhPb57HctrfE0jIbTcYc2I1FVcOEtkzYjUVVw4S2THyS2xWP4OvYusMZji0DfhEXdQM8HVt1yql_uYYPCIum&_nc_ohc=VMwPWa8RFb4AX8p4ANf&tn=mV95uOjsVNPsfYyZ&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_pX_YAG0fWyt65pq68IqZT4-nNqBQtK9qDPUlNnsQy7w&oe=62156098",
            subtitle: "රිවර් පෙබල්ස් නිර්මාණ සහ නිර්මාර්ණාත්මක අදහස්",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
          {
            title: "පබළු නිර්මාණ",
            image_url:
              "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/236971524_369587931384201_6548188776295171332_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGMOicj3LbuJzVjVxRkN-Xm__zgavs6qiv__OBq-zqqK27ps2ylyn8pdTclpJyhNU3Jl0PhtyYFmO4K_RNm6kg1&_nc_ohc=gzXr9m89Mf0AX8HOWr6&_nc_ht=scontent.fcmb10-1.fna&oh=00_AT_lcq_7X6rD9xPbad-JfiHAXpqYd_w08D8-mLPD_CAMxw&oe=62155874",
            subtitle: "පබළු නිර්මාණ සහ නිර්මාර්ණාත්මක අදහස්",
            default_action: {
              type: "web_url",
              url: "https://www.facebook.com/thesriatelier",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/thesriatelier",
                title: "ෆේස්බූක් පිටුව වෙත",
              },
              {
                type: "postback",
                title: "තවදුර අදහස්",
                payload: "SHOW_SI",
              },
            ],
          },
        ],
      },
    },
  };
};

const sendShowTemplateSi = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "media",
        elements: [
          {
            media_type: "video",
            url: "https://www.facebook.com/thesriatelier/videos/512306883558484",
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/groups/259100661791058",
                title: "අපගේ ගෘපය වෙත",
              },
            ],
          },
        ],
      },
    },
  };
};
const sendShowTemplateEn = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "media",
        elements: [
          {
            media_type: "video",
            url: "https://www.facebook.com/thesriatelier/videos/512306883558484",
            buttons: [
              {
                type: "web_url",
                url: "https://www.facebook.com/groups/259100661791058",
                title: "Join Group",
              },
            ],
          },
        ],
      },
    },
  };
};

const sendReviewTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "customer_feedback",
        title: "Rate your experience with Magic Hands.", // Business needs to define.
        subtitle:
          "Let Magic Hands know how they are doing by answering two questions", // Business needs to define.
        button_title: "Rate Experience", // Business needs to define.
        feedback_screens: [
          {
            questions: [
              {
                id: "hauydmns8", // Unique id for question that business sets
                type: "csat",
                title: "How would you rate your experience with Magic Hands?", // Optional. If business does not define, we show standard text. Standard text based on question type ("csat", "nps", "ces" >>> "text")
                score_label: "neg_pos", // Optional
                score_option: "five_stars", // Optional
                // Optional. Inherits the title and id from the previous question on the same page.  Only free-from input is allowed. No other title will show.
                follow_up: {
                  type: "free_form",
                  placeholder: "Give additional feedback", // Optional
                },
              },
            ],
          },
        ],
        business_privacy: {
          url: "https://theateliernew.herokuapp.com/",
        },
        expires_in_days: 7, // Optional, default 1 day, business defines 1-7 days
      },
    },
  };
};
const sendLookUpOrderSi = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: "ඔබගේ ඇනවුම පරික්ෂා කිරිඉම සදහා පහල යෙදවුම් භාවිතා කරන්න",
        buttons: [
          {
            type: "postback",
            title: "ඇනවුම් පරීක්ෂාවට",
            payload: "SET_INFO_SI",
          },
          {
            type: "postback",
            title: "ප්‍රධාන මෙනුවට",
            payload: "BACK_TO_MAIN_MENU_SI",
          },
        ],
      },
    },
  };
};
const sendLookUpOrderEn = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: "OK. Let's set info about your order,",
        buttons: [
          {
            type: "postback",
            title: "Set Info",
            payload: "SET_INFO",
          },
          {
            type: "postback",
            title: "Main menu",
            payload: "BACK_TO_MAIN_MENU",
          },
        ],
      },
    },
  };
};
const backToMainMenuSi =() => {
  return {
    text: "ස්තුතියි ඔබට! පහත යෙදුම් අතරින් ඕනෑම යෙදුමක් තෝරාගන්න. අප ඔබට සහය විය යුත්තේ කෙසේද ?",
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
}
}

const backToMainMenuEn =() => {
 return  {
    text: "Thank You so much! At any time, use the menu below to navigate through the features. What can I do to help you today??",
    quick_replies: [
      {
        content_type: "text",
        title: "Categories",
        payload: "CATEGORIES_EN",
      },
      {
        content_type: "text",
        title: "Lookup Order",
        payload: "LOOKUP_ORDER_EN",
      },
      {
        content_type: "text",
        title: "Talk to an agent",
        payload: "TALK_AGENT",
      },
    ],
  };
}

module.exports = {
  sendCategoriesTemplateEn: sendCategoriesTemplateEn,
  sendCategoriesTemplateSi: sendCategoriesTemplateSi,
  sendShowTemplateEn: sendShowTemplateEn,
  sendShowTemplateSi: sendShowTemplateSi,
  sendReviewTemplate: sendReviewTemplate,
  sendLookUpOrderEn: sendLookUpOrderEn,
  sendLookUpOrderSi: sendLookUpOrderSi,
  backToMainMenuSi: backToMainMenuSi,
  backToMainMenuEn: backToMainMenuEn,
};
