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
                payload: "SHOW_FELT_CRAFTSEN",
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
                payload: "SHOW_BEADED_EN",
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
                payload: "SHOW_CROCHETEN",
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
                payload: "SHOW_FELT_CRAFTS_SI",
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
                payload: "SHOW_BEADED_SI",
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
                payload: "SHOW_CROCHET_SI",
              },
            ],
          },
        ],
      },
    },
  };
};

module.exports = {
    sendCategoriesTemplateEn:sendCategoriesTemplateEn,
    sendCategoriesTemplateSi:sendCategoriesTemplateSi
}
