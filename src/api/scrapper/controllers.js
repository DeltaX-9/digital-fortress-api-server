const apifyService = require('./apify_service');


module.exports.getScreenShot = async(req,res) => {
    try {
        const { url } = req.query;
        const { defaultDatasetId } = await apifyService.actor('apify/screenshot-url').call({
            "delay": 5,
            "proxy": {
              "useApifyProxy": true
            },
            "scrollToBottom": false,
            "urls": [
              {
                "url": url
              }
            ],
            "waitUntil": "networkidle0",
            "waitUntilNetworkIdleAfterScroll": false,
            "format": "png",
            "viewportWidth": 1280,
            "delayAfterScrolling": 2500,
            "waitUntilNetworkIdleAfterScrollTimeout": 30000,
            "selectorsToHide": ""
          });

          // Lists items from the Actor's dataset.
        const { items } = await apifyService.dataset("kOTtw0G5dt97WspP5").listItems();
        console.log(items);
        return res.send(items);

    } catch (error) {
        throw error;
    }
}

module.exports.getTwitter = async(req,res) => {
    try {
        const { query, max_item } = req.query;

        // const { defaultDatasetId } = await apifyService.actor('apidojo/tweet-scraper').call({
        //     "customMapFunction": "(object) => { return {...object} }",
        //     "includeSearchTerms": false,
        //     "maxItems": parseInt(max_item) && parseInt(max_item) <= 10 ? parseInt(max_item) : 10,
        //     "minimumFavorites": 5,
        //     "minimumReplies": 5,
        //     "minimumRetweets": 5,
        //     "onlyImage": false,
        //     "onlyQuote": false,
        //     "onlyTwitterBlue": false,
        //     "onlyVerifiedUsers": false,
        //     "onlyVideo": false,
        //     "sort": "Latest",
        //     "tweetLanguage": "en",
        //     "searchTerms": query.split(','),
        //   });

        //   // Lists items from the Actor's dataset.
        // const { items } = await apifyService.dataset(defaultDatasetId).listItems();
        // return res.send(items);

        return res.send([
          {
              "type": "tweet",
              "id": "1840503004857774267",
              "url": "https://x.com/PavlovicArc/status/1840503004857774267",
              "twitterUrl": "https://twitter.com/PavlovicArc/status/1840503004857774267",
              "text": "Well well well… The €113m bargain couldn’t hack it against Atletico. Not surprised\n\nNot every team is Espanyol, Sociedad or Betis. https://t.co/B2nhkd9yWc",
              "source": "Twitter for iPhone",
              "retweetCount": 6,
              "replyCount": 6,
              "likeCount": 24,
              "quoteCount": 1,
              "viewCount": 444,
              "createdAt": "Sun Sep 29 21:24:45 +0000 2024",
              "lang": "en",
              "quoteId": "1840094283908399602",
              "bookmarkCount": 0,
              "isReply": false,
              "conversationId": "1840503004857774267",
              "possiblySensitive": false,
              "isPinned": false,
              "author": {
                  "type": "user",
                  "userName": "PavlovicArc",
                  "url": "https://x.com/PavlovicArc",
                  "twitterUrl": "https://twitter.com/PavlovicArc",
                  "id": "1602767567864713218",
                  "name": "P",
                  "isVerified": false,
                  "isBlueVerified": false,
                  "profilePicture": "https://pbs.twimg.com/profile_images/1840446170436341760/GZiBYyH4_normal.jpg",
                  "coverPicture": "https://pbs.twimg.com/profile_banners/1602767567864713218/1693656156",
                  "description": "@leroyloverboi 🕊️🕊️ | Backup: @Joy_Boey",
                  "location": "",
                  "followers": 760,
                  "following": 475,
                  "status": "",
                  "canDm": true,
                  "canMediaTag": true,
                  "createdAt": "Tue Dec 13 20:49:14 +0000 2022",
                  "entities": {
                      "description": {
                          "urls": []
                      }
                  },
                  "fastFollowersCount": 0,
                  "favouritesCount": 10483,
                  "hasCustomTimelines": false,
                  "isTranslator": false,
                  "mediaCount": 754,
                  "statusesCount": 7412,
                  "withheldInCountries": [],
                  "affiliatesHighlightedLabel": {},
                  "possiblySensitive": false,
                  "pinnedTweetIds": [
                      "1807045853179179394"
                  ]
              },
              "extendedEntities": {
                  "media": [
                      {
                          "display_url": "pic.x.com/b2nhkd9ywc",
                          "expanded_url": "https://twitter.com/PavlovicArc/status/1840503004857774267/photo/1",
                          "id_str": "1840503000797720576",
                          "indices": [
                              131,
                              154
                          ],
                          "media_key": "3_1840503000797720576",
                          "media_url_https": "https://pbs.twimg.com/media/GYrHulKWsAAgxi8.jpg",
                          "type": "photo",
                          "url": "https://t.co/B2nhkd9yWc",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": [
                                      {
                                          "x": 95,
                                          "y": 660,
                                          "h": 59,
                                          "w": 59
                                      },
                                      {
                                          "x": 605,
                                          "y": 247,
                                          "h": 79,
                                          "w": 79
                                      }
                                  ]
                              },
                              "medium": {
                                  "faces": [
                                      {
                                          "x": 88,
                                          "y": 614,
                                          "h": 54,
                                          "w": 54
                                      },
                                      {
                                          "x": 563,
                                          "y": 229,
                                          "h": 73,
                                          "w": 73
                                      }
                                  ]
                              },
                              "small": {
                                  "faces": [
                                      {
                                          "x": 50,
                                          "y": 348,
                                          "h": 31,
                                          "w": 31
                                      },
                                      {
                                          "x": 319,
                                          "y": 130,
                                          "h": 41,
                                          "w": 41
                                      }
                                  ]
                              },
                              "orig": {
                                  "faces": [
                                      {
                                          "x": 95,
                                          "y": 660,
                                          "h": 59,
                                          "w": 59
                                      },
                                      {
                                          "x": 605,
                                          "y": 247,
                                          "h": 79,
                                          "w": 79
                                      }
                                  ]
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 927,
                                  "w": 1289,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 863,
                                  "w": 1200,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 489,
                                  "w": 680,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 927,
                              "width": 1289,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 57,
                                      "w": 1289,
                                      "h": 722
                                  },
                                  {
                                      "x": 149,
                                      "y": 0,
                                      "w": 927,
                                      "h": 927
                                  },
                                  {
                                      "x": 206,
                                      "y": 0,
                                      "w": 813,
                                      "h": 927
                                  },
                                  {
                                      "x": 380,
                                      "y": 0,
                                      "w": 464,
                                      "h": 927
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1289,
                                      "h": 927
                                  }
                              ]
                          },
                          "allow_download_status": {
                              "allow_download": true
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840503000797720576"
                              }
                          }
                      }
                  ]
              },
              "card": {},
              "place": {},
              "entities": {
                  "hashtags": [],
                  "media": [
                      {
                          "display_url": "pic.x.com/b2nhkd9ywc",
                          "expanded_url": "https://twitter.com/PavlovicArc/status/1840503004857774267/photo/1",
                          "id_str": "1840503000797720576",
                          "indices": [
                              131,
                              154
                          ],
                          "media_key": "3_1840503000797720576",
                          "media_url_https": "https://pbs.twimg.com/media/GYrHulKWsAAgxi8.jpg",
                          "type": "photo",
                          "url": "https://t.co/B2nhkd9yWc",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": [
                                      {
                                          "x": 95,
                                          "y": 660,
                                          "h": 59,
                                          "w": 59
                                      },
                                      {
                                          "x": 605,
                                          "y": 247,
                                          "h": 79,
                                          "w": 79
                                      }
                                  ]
                              },
                              "medium": {
                                  "faces": [
                                      {
                                          "x": 88,
                                          "y": 614,
                                          "h": 54,
                                          "w": 54
                                      },
                                      {
                                          "x": 563,
                                          "y": 229,
                                          "h": 73,
                                          "w": 73
                                      }
                                  ]
                              },
                              "small": {
                                  "faces": [
                                      {
                                          "x": 50,
                                          "y": 348,
                                          "h": 31,
                                          "w": 31
                                      },
                                      {
                                          "x": 319,
                                          "y": 130,
                                          "h": 41,
                                          "w": 41
                                      }
                                  ]
                              },
                              "orig": {
                                  "faces": [
                                      {
                                          "x": 95,
                                          "y": 660,
                                          "h": 59,
                                          "w": 59
                                      },
                                      {
                                          "x": 605,
                                          "y": 247,
                                          "h": 79,
                                          "w": 79
                                      }
                                  ]
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 927,
                                  "w": 1289,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 863,
                                  "w": 1200,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 489,
                                  "w": 680,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 927,
                              "width": 1289,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 57,
                                      "w": 1289,
                                      "h": 722
                                  },
                                  {
                                      "x": 149,
                                      "y": 0,
                                      "w": 927,
                                      "h": 927
                                  },
                                  {
                                      "x": 206,
                                      "y": 0,
                                      "w": 813,
                                      "h": 927
                                  },
                                  {
                                      "x": 380,
                                      "y": 0,
                                      "w": 464,
                                      "h": 927
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1289,
                                      "h": 927
                                  }
                              ]
                          },
                          "allow_download_status": {
                              "allow_download": true
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840503000797720576"
                              }
                          }
                      }
                  ],
                  "symbols": [],
                  "timestamps": [],
                  "urls": [],
                  "user_mentions": []
              },
              "isRetweet": false,
              "isQuote": true,
              "quote": {
                  "type": "tweet",
                  "id": "1840094283908399602",
                  "text": "Well well well… The €60m bargain couldn’t hack it against Leverkusen. Not surprised\n\nNot every team is Bremen, Zagreb or Kiel. https://t.co/lE0h7FvL9j",
                  "source": "Twitter for iPhone",
                  "retweetCount": 7,
                  "replyCount": 49,
                  "likeCount": 458,
                  "quoteCount": 16,
                  "viewCount": 61300,
                  "createdAt": "Sat Sep 28 18:20:39 +0000 2024",
                  "lang": "en",
                  "bookmarkCount": 13,
                  "possiblySensitive": false,
                  "isPinned": false,
                  "author": {
                      "type": "user",
                      "userName": "Fs_FTBL",
                      "url": "https://x.com/Fs_FTBL",
                      "twitterUrl": "https://twitter.com/Fs_FTBL",
                      "id": "1089359583708012545",
                      "name": "𝙁𝙎 🇵🇸",
                      "isVerified": false,
                      "isBlueVerified": true,
                      "profilePicture": "https://pbs.twimg.com/profile_images/1826340714491346944/wk5mLxTl_normal.jpg",
                      "coverPicture": "https://pbs.twimg.com/profile_banners/1089359583708012545/1717005652",
                      "description": "Football fan • 🇸🇦 23 • DM for Business 📩",
                      "location": "🇵🇸🤍",
                      "followers": 69604,
                      "following": 550,
                      "status": "",
                      "canDm": true,
                      "canMediaTag": true,
                      "createdAt": "Sun Jan 27 03:08:58 +0000 2019",
                      "entities": {
                          "description": {
                              "urls": []
                          }
                      },
                      "fastFollowersCount": 0,
                      "favouritesCount": 54376,
                      "hasCustomTimelines": true,
                      "isTranslator": false,
                      "mediaCount": 21765,
                      "statusesCount": 90143,
                      "withheldInCountries": [],
                      "affiliatesHighlightedLabel": {},
                      "possiblySensitive": false,
                      "pinnedTweetIds": [
                          "1827401875131343189"
                      ]
                  },
                  "extendedEntities": {
                      "media": [
                          {
                              "display_url": "pic.x.com/le0h7fvl9j",
                              "expanded_url": "https://twitter.com/Fs_FTBL/status/1840094283908399602/photo/1",
                              "id_str": "1840094276878827520",
                              "indices": [
                                  127,
                                  150
                              ],
                              "media_key": "3_1840094276878827520",
                              "media_url_https": "https://pbs.twimg.com/media/GYlT_t6XgAAFRGS.jpg",
                              "type": "photo",
                              "url": "https://t.co/lE0h7FvL9j",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 50,
                                              "y": 30,
                                              "h": 52,
                                              "w": 52
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 554,
                                      "w": 1169,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 554,
                                      "w": 1169,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 322,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 554,
                                  "width": 1169,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 989,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 554,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 486,
                                          "h": 554
                                      },
                                      {
                                          "x": 7,
                                          "y": 0,
                                          "w": 277,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1169,
                                          "h": 554
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840094276878827520"
                                  }
                              }
                          }
                      ]
                  },
                  "card": {},
                  "place": {},
                  "entities": {
                      "hashtags": [],
                      "media": [
                          {
                              "display_url": "pic.x.com/le0h7fvl9j",
                              "expanded_url": "https://twitter.com/Fs_FTBL/status/1840094283908399602/photo/1",
                              "id_str": "1840094276878827520",
                              "indices": [
                                  127,
                                  150
                              ],
                              "media_key": "3_1840094276878827520",
                              "media_url_https": "https://pbs.twimg.com/media/GYlT_t6XgAAFRGS.jpg",
                              "type": "photo",
                              "url": "https://t.co/lE0h7FvL9j",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 50,
                                              "y": 30,
                                              "h": 52,
                                              "w": 52
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 86,
                                              "y": 53,
                                              "h": 91,
                                              "w": 91
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 554,
                                      "w": 1169,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 554,
                                      "w": 1169,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 322,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 554,
                                  "width": 1169,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 989,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 554,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 486,
                                          "h": 554
                                      },
                                      {
                                          "x": 7,
                                          "y": 0,
                                          "w": 277,
                                          "h": 554
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1169,
                                          "h": 554
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840094276878827520"
                                  }
                              }
                          }
                      ],
                      "symbols": [],
                      "timestamps": [],
                      "urls": [],
                      "user_mentions": []
                  }
              },
              "media": [
                  "https://pbs.twimg.com/media/GYrHulKWsAAgxi8.jpg"
              ],
              "isConversationControlled": false
          },
          {
              "type": "tweet",
              "id": "1840497238533140833",
              "url": "https://x.com/TheRabbitHole84/status/1840497238533140833",
              "twitterUrl": "https://twitter.com/TheRabbitHole84/status/1840497238533140833",
              "text": "Laziness can be an efficiency hack",
              "source": "Twitter for iPhone",
              "retweetCount": 11,
              "replyCount": 30,
              "likeCount": 112,
              "quoteCount": 2,
              "viewCount": 10965,
              "createdAt": "Sun Sep 29 21:01:51 +0000 2024",
              "lang": "en",
              "bookmarkCount": 1,
              "isReply": false,
              "conversationId": "1840497238533140833",
              "isPinned": false,
              "author": {
                  "type": "user",
                  "userName": "TheRabbitHole84",
                  "url": "https://x.com/TheRabbitHole84",
                  "twitterUrl": "https://twitter.com/TheRabbitHole84",
                  "id": "1485689970593468416",
                  "name": "The Rabbit Hole",
                  "isVerified": false,
                  "isBlueVerified": true,
                  "profilePicture": "https://pbs.twimg.com/profile_images/1522017422550528001/6AceRKJQ_normal.png",
                  "coverPicture": "https://pbs.twimg.com/profile_banners/1485689970593468416/1651711479",
                  "description": "Navigating the discourse",
                  "location": "Mars, PA",
                  "followers": 694455,
                  "following": 1509,
                  "status": "",
                  "canDm": true,
                  "canMediaTag": false,
                  "createdAt": "Mon Jan 24 19:05:23 +0000 2022",
                  "entities": {
                      "description": {
                          "urls": []
                      },
                      "url": {
                          "urls": [
                              {
                                  "display_url": "therabbithole84.substack.com",
                                  "expanded_url": "https://therabbithole84.substack.com/",
                                  "url": "https://t.co/Y5aSDpz7f9",
                                  "indices": [
                                      0,
                                      23
                                  ]
                              }
                          ]
                      }
                  },
                  "fastFollowersCount": 0,
                  "favouritesCount": 59466,
                  "hasCustomTimelines": true,
                  "isTranslator": false,
                  "mediaCount": 6880,
                  "statusesCount": 45280,
                  "withheldInCountries": [],
                  "affiliatesHighlightedLabel": {},
                  "possiblySensitive": false,
                  "pinnedTweetIds": []
              },
              "extendedEntities": {},
              "card": {},
              "place": {},
              "entities": {
                  "hashtags": [],
                  "symbols": [],
                  "timestamps": [],
                  "urls": [],
                  "user_mentions": []
              },
              "isRetweet": false,
              "isQuote": false,
              "media": [],
              "isConversationControlled": false
          },
          {
              "type": "tweet",
              "id": "1840490505370513838",
              "url": "https://x.com/BuffaloJetFan/status/1840490505370513838",
              "twitterUrl": "https://twitter.com/BuffaloJetFan/status/1840490505370513838",
              "text": "Still have hopes the #Jets can break the playoff drought, but feels like a firm ceiling is on the team with Bob &amp; Hack leading the way.  Maybe 2011 Aaron Rodgers could compensate for it, but lord he's limping already. \n\npanic meter: solid 5.5/10",
              "source": "Twitter Web App",
              "retweetCount": 5,
              "replyCount": 16,
              "likeCount": 151,
              "quoteCount": 0,
              "viewCount": 4885,
              "createdAt": "Sun Sep 29 20:35:05 +0000 2024",
              "lang": "en",
              "bookmarkCount": 1,
              "isReply": false,
              "conversationId": "1840490505370513838",
              "isPinned": false,
              "author": {
                  "type": "user",
                  "userName": "BuffaloJetFan",
                  "url": "https://x.com/BuffaloJetFan",
                  "twitterUrl": "https://twitter.com/BuffaloJetFan",
                  "id": "1497961850377588737",
                  "name": "The Buffalo Jet Fan",
                  "isVerified": false,
                  "isBlueVerified": true,
                  "profilePicture": "https://pbs.twimg.com/profile_images/1514013182238638081/_dcOob2e_normal.jpg",
                  "description": "Will McDonald Propagandist.",
                  "location": "",
                  "followers": 12335,
                  "following": 3162,
                  "status": "",
                  "canDm": false,
                  "canMediaTag": false,
                  "createdAt": "Sun Feb 27 15:48:47 +0000 2022",
                  "entities": {
                      "description": {
                          "urls": []
                      }
                  },
                  "fastFollowersCount": 0,
                  "favouritesCount": 18931,
                  "hasCustomTimelines": true,
                  "isTranslator": false,
                  "mediaCount": 1553,
                  "statusesCount": 25859,
                  "withheldInCountries": [],
                  "affiliatesHighlightedLabel": {},
                  "possiblySensitive": false,
                  "pinnedTweetIds": [
                      "1833840023529013284"
                  ]
              },
              "extendedEntities": {},
              "card": {},
              "place": {},
              "entities": {
                  "hashtags": [
                      {
                          "indices": [
                              21,
                              26
                          ],
                          "text": "Jets"
                      }
                  ],
                  "symbols": [],
                  "timestamps": [],
                  "urls": [],
                  "user_mentions": []
              },
              "isRetweet": false,
              "isQuote": false,
              "media": [],
              "isConversationControlled": false
          },
          {
              "type": "tweet",
              "id": "1840469135396147268",
              "url": "https://x.com/derrickvanorden/status/1840469135396147268",
              "twitterUrl": "https://twitter.com/derrickvanorden/status/1840469135396147268",
              "text": "Nice Stolen Valor Hat, Not so Tiny Dancer.\n\nFor those who don’t know what that symbol is on the hat @Tim_Walz is wearing, it is the glorious symbol that my Green Beret Brothers wear. \n\nTimmy was never a Special Forces Soldier, he could not hack it.",
              "source": "Twitter for iPhone",
              "retweetCount": 19,
              "replyCount": 10,
              "likeCount": 69,
              "quoteCount": 1,
              "viewCount": 2185,
              "createdAt": "Sun Sep 29 19:10:10 +0000 2024",
              "lang": "en",
              "quoteId": "1840367954430402764",
              "bookmarkCount": 1,
              "isReply": false,
              "conversationId": "1840469135396147268",
              "possiblySensitive": false,
              "isPinned": false,
              "author": {
                  "type": "user",
                  "userName": "derrickvanorden",
                  "url": "https://x.com/derrickvanorden",
                  "twitterUrl": "https://twitter.com/derrickvanorden",
                  "id": "2580992246",
                  "name": "Derrick Van Orden",
                  "isVerified": false,
                  "isBlueVerified": true,
                  "profilePicture": "https://pbs.twimg.com/profile_images/1239571006202753025/uKZPJwIf_normal.jpg",
                  "coverPicture": "https://pbs.twimg.com/profile_banners/2580992246/1624750664",
                  "description": "Father of 4, Grandpa to 11! American. Congressman WI-03. Retired Navy SEAL, Author, Actor.",
                  "location": "Prairie du Chien, WI",
                  "followers": 47509,
                  "following": 741,
                  "status": "",
                  "canDm": false,
                  "canMediaTag": true,
                  "createdAt": "Sat Jun 21 20:23:32 +0000 2014",
                  "entities": {
                      "description": {
                          "urls": []
                      },
                      "url": {
                          "urls": [
                              {
                                  "display_url": "vanordenforcongress.com",
                                  "expanded_url": "https://vanordenforcongress.com",
                                  "url": "https://t.co/fA8egZx8WV",
                                  "indices": [
                                      0,
                                      23
                                  ]
                              }
                          ]
                      }
                  },
                  "fastFollowersCount": 0,
                  "favouritesCount": 13339,
                  "hasCustomTimelines": true,
                  "isTranslator": false,
                  "mediaCount": 3042,
                  "statusesCount": 17095,
                  "withheldInCountries": [],
                  "affiliatesHighlightedLabel": {},
                  "possiblySensitive": false,
                  "pinnedTweetIds": [
                      "1807180927979708837"
                  ]
              },
              "extendedEntities": {
                  "media": [
                      {
                          "display_url": "pic.x.com/2efdrfkue9",
                          "expanded_url": "https://twitter.com/derrickvanorden/status/1840469135396147268/photo/1",
                          "id_str": "1840468910723731456",
                          "indices": [
                              249,
                              272
                          ],
                          "media_key": "3_1840468910723731456",
                          "media_url_https": "https://pbs.twimg.com/media/GYqouRvWkAA8Svp.jpg",
                          "type": "photo",
                          "url": "https://t.co/2efDRfkUE9",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": []
                              },
                              "medium": {
                                  "faces": []
                              },
                              "small": {
                                  "faces": []
                              },
                              "orig": {
                                  "faces": []
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 2048,
                                  "w": 1116,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 1200,
                                  "w": 654,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 680,
                                  "w": 371,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 2048,
                              "width": 1116,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 148,
                                      "w": 1116,
                                      "h": 625
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 1116
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 1272
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1024,
                                      "h": 2048
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 2048
                                  }
                              ]
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840468910723731456"
                              }
                          }
                      },
                      {
                          "display_url": "pic.x.com/2efdrfkue9",
                          "expanded_url": "https://twitter.com/derrickvanorden/status/1840469135396147268/photo/1",
                          "id_str": "1840468910803451904",
                          "indices": [
                              249,
                              272
                          ],
                          "media_key": "3_1840468910803451904",
                          "media_url_https": "https://pbs.twimg.com/media/GYqouSCXAAAfP3s.jpg",
                          "type": "photo",
                          "url": "https://t.co/2efDRfkUE9",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": []
                              },
                              "medium": {
                                  "faces": []
                              },
                              "small": {
                                  "faces": []
                              },
                              "orig": {
                                  "faces": []
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 1164,
                                  "w": 1170,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 1164,
                                  "w": 1170,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 677,
                                  "w": 680,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 1164,
                              "width": 1170,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 404,
                                      "w": 1170,
                                      "h": 655
                                  },
                                  {
                                      "x": 3,
                                      "y": 0,
                                      "w": 1164,
                                      "h": 1164
                                  },
                                  {
                                      "x": 75,
                                      "y": 0,
                                      "w": 1021,
                                      "h": 1164
                                  },
                                  {
                                      "x": 294,
                                      "y": 0,
                                      "w": 582,
                                      "h": 1164
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1170,
                                      "h": 1164
                                  }
                              ]
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840468910803451904"
                              }
                          }
                      }
                  ]
              },
              "card": {},
              "place": {},
              "entities": {
                  "hashtags": [],
                  "media": [
                      {
                          "display_url": "pic.x.com/2efdrfkue9",
                          "expanded_url": "https://twitter.com/derrickvanorden/status/1840469135396147268/photo/1",
                          "id_str": "1840468910723731456",
                          "indices": [
                              249,
                              272
                          ],
                          "media_key": "3_1840468910723731456",
                          "media_url_https": "https://pbs.twimg.com/media/GYqouRvWkAA8Svp.jpg",
                          "type": "photo",
                          "url": "https://t.co/2efDRfkUE9",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": []
                              },
                              "medium": {
                                  "faces": []
                              },
                              "small": {
                                  "faces": []
                              },
                              "orig": {
                                  "faces": []
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 2048,
                                  "w": 1116,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 1200,
                                  "w": 654,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 680,
                                  "w": 371,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 2048,
                              "width": 1116,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 148,
                                      "w": 1116,
                                      "h": 625
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 1116
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 1272
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1024,
                                      "h": 2048
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1116,
                                      "h": 2048
                                  }
                              ]
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840468910723731456"
                              }
                          }
                      },
                      {
                          "display_url": "pic.x.com/2efdrfkue9",
                          "expanded_url": "https://twitter.com/derrickvanorden/status/1840469135396147268/photo/1",
                          "id_str": "1840468910803451904",
                          "indices": [
                              249,
                              272
                          ],
                          "media_key": "3_1840468910803451904",
                          "media_url_https": "https://pbs.twimg.com/media/GYqouSCXAAAfP3s.jpg",
                          "type": "photo",
                          "url": "https://t.co/2efDRfkUE9",
                          "ext_media_availability": {
                              "status": "Available"
                          },
                          "features": {
                              "large": {
                                  "faces": []
                              },
                              "medium": {
                                  "faces": []
                              },
                              "small": {
                                  "faces": []
                              },
                              "orig": {
                                  "faces": []
                              }
                          },
                          "sizes": {
                              "large": {
                                  "h": 1164,
                                  "w": 1170,
                                  "resize": "fit"
                              },
                              "medium": {
                                  "h": 1164,
                                  "w": 1170,
                                  "resize": "fit"
                              },
                              "small": {
                                  "h": 677,
                                  "w": 680,
                                  "resize": "fit"
                              },
                              "thumb": {
                                  "h": 150,
                                  "w": 150,
                                  "resize": "crop"
                              }
                          },
                          "original_info": {
                              "height": 1164,
                              "width": 1170,
                              "focus_rects": [
                                  {
                                      "x": 0,
                                      "y": 404,
                                      "w": 1170,
                                      "h": 655
                                  },
                                  {
                                      "x": 3,
                                      "y": 0,
                                      "w": 1164,
                                      "h": 1164
                                  },
                                  {
                                      "x": 75,
                                      "y": 0,
                                      "w": 1021,
                                      "h": 1164
                                  },
                                  {
                                      "x": 294,
                                      "y": 0,
                                      "w": 582,
                                      "h": 1164
                                  },
                                  {
                                      "x": 0,
                                      "y": 0,
                                      "w": 1170,
                                      "h": 1164
                                  }
                              ]
                          },
                          "media_results": {
                              "result": {
                                  "media_key": "3_1840468910803451904"
                              }
                          }
                      }
                  ],
                  "symbols": [],
                  "timestamps": [],
                  "urls": [],
                  "user_mentions": [
                      {
                          "id_str": "85726335",
                          "name": "Tim Walz",
                          "screen_name": "Tim_Walz",
                          "indices": [
                              100,
                              109
                          ]
                      }
                  ]
              },
              "isRetweet": false,
              "isQuote": true,
              "quote": {
                  "type": "tweet",
                  "id": "1840367954430402764",
                  "text": "I’ll always be a Minnesota guy. But after meeting some great people at the Big House, I must admit – Michiganders know how to host a good game day. https://t.co/i3kALnDkFZ",
                  "source": "Twitter for iPhone",
                  "retweetCount": 2785,
                  "replyCount": 3456,
                  "likeCount": 31240,
                  "quoteCount": 280,
                  "viewCount": 1419806,
                  "createdAt": "Sun Sep 29 12:28:07 +0000 2024",
                  "lang": "en",
                  "bookmarkCount": 249,
                  "possiblySensitive": false,
                  "isPinned": false,
                  "author": {
                      "type": "user",
                      "userName": "Tim_Walz",
                      "url": "https://x.com/Tim_Walz",
                      "twitterUrl": "https://twitter.com/Tim_Walz",
                      "id": "85726335",
                      "name": "Tim Walz",
                      "isVerified": false,
                      "isBlueVerified": true,
                      "profilePicture": "https://pbs.twimg.com/profile_images/1825983572496338945/jq4utY7w_normal.jpg",
                      "coverPicture": "https://pbs.twimg.com/profile_banners/85726335/1722953898",
                      "description": "Running to win this thing with @KamalaHarris.",
                      "location": "Minnesota, USA",
                      "followers": 1261290,
                      "following": 1831,
                      "status": "",
                      "canDm": false,
                      "canMediaTag": true,
                      "createdAt": "Wed Oct 28 02:36:26 +0000 2009",
                      "entities": {
                          "description": {
                              "urls": []
                          },
                          "url": {
                              "urls": [
                                  {
                                      "display_url": "kamalaharris.com",
                                      "expanded_url": "http://kamalaharris.com/",
                                      "url": "https://t.co/b8SPF4Kxdf",
                                      "indices": [
                                          0,
                                          23
                                      ]
                                  }
                              ]
                          }
                      },
                      "fastFollowersCount": 0,
                      "favouritesCount": 2125,
                      "hasCustomTimelines": true,
                      "isTranslator": false,
                      "mediaCount": 1472,
                      "statusesCount": 4165,
                      "withheldInCountries": [],
                      "affiliatesHighlightedLabel": {},
                      "possiblySensitive": false,
                      "pinnedTweetIds": []
                  },
                  "extendedEntities": {
                      "media": [
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947182673920",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947182673920",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bPWkAAV33g.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": []
                                  },
                                  "medium": {
                                      "faces": []
                                  },
                                  "small": {
                                      "faces": []
                                  },
                                  "orig": {
                                      "faces": []
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1080,
                                      "w": 1616,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 802,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 454,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1080,
                                  "width": 1616,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 72,
                                          "w": 1616,
                                          "h": 905
                                      },
                                      {
                                          "x": 469,
                                          "y": 0,
                                          "w": 1080,
                                          "h": 1080
                                      },
                                      {
                                          "x": 536,
                                          "y": 0,
                                          "w": 947,
                                          "h": 1080
                                      },
                                      {
                                          "x": 739,
                                          "y": 0,
                                          "w": 540,
                                          "h": 1080
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1616,
                                          "h": 1080
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947182673920"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947199512576",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947199512576",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bTXgAA5rvM.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 74,
                                              "y": 352,
                                              "h": 84,
                                              "w": 84
                                          },
                                          {
                                              "x": 1268,
                                              "y": 686,
                                              "h": 120,
                                              "w": 120
                                          },
                                          {
                                              "x": 386,
                                              "y": 448,
                                              "h": 156,
                                              "w": 156
                                          },
                                          {
                                              "x": 756,
                                              "y": 432,
                                              "h": 148,
                                              "w": 148
                                          },
                                          {
                                              "x": 974,
                                              "y": 460,
                                              "h": 166,
                                              "w": 166
                                          },
                                          {
                                              "x": 1680,
                                              "y": 624,
                                              "h": 176,
                                              "w": 176
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 43,
                                              "y": 206,
                                              "h": 49,
                                              "w": 49
                                          },
                                          {
                                              "x": 742,
                                              "y": 401,
                                              "h": 70,
                                              "w": 70
                                          },
                                          {
                                              "x": 226,
                                              "y": 262,
                                              "h": 91,
                                              "w": 91
                                          },
                                          {
                                              "x": 442,
                                              "y": 253,
                                              "h": 86,
                                              "w": 86
                                          },
                                          {
                                              "x": 570,
                                              "y": 269,
                                              "h": 97,
                                              "w": 97
                                          },
                                          {
                                              "x": 984,
                                              "y": 365,
                                              "h": 103,
                                              "w": 103
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 24,
                                              "y": 116,
                                              "h": 27,
                                              "w": 27
                                          },
                                          {
                                              "x": 421,
                                              "y": 227,
                                              "h": 39,
                                              "w": 39
                                          },
                                          {
                                              "x": 128,
                                              "y": 148,
                                              "h": 51,
                                              "w": 51
                                          },
                                          {
                                              "x": 251,
                                              "y": 143,
                                              "h": 49,
                                              "w": 49
                                          },
                                          {
                                              "x": 323,
                                              "y": 152,
                                              "h": 55,
                                              "w": 55
                                          },
                                          {
                                              "x": 557,
                                              "y": 207,
                                              "h": 58,
                                              "w": 58
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 74,
                                              "y": 352,
                                              "h": 84,
                                              "w": 84
                                          },
                                          {
                                              "x": 1268,
                                              "y": 686,
                                              "h": 120,
                                              "w": 120
                                          },
                                          {
                                              "x": 386,
                                              "y": 448,
                                              "h": 156,
                                              "w": 156
                                          },
                                          {
                                              "x": 756,
                                              "y": 432,
                                              "h": 148,
                                              "w": 148
                                          },
                                          {
                                              "x": 974,
                                              "y": 460,
                                              "h": 166,
                                              "w": 166
                                          },
                                          {
                                              "x": 1680,
                                              "y": 624,
                                              "h": 176,
                                              "w": 176
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1365,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 800,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 453,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1365,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1365,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1197,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 683,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1365
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947199512576"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947207921664",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947207921664",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bVX0AAVZqU.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 1394,
                                              "y": 736,
                                              "h": 68,
                                              "w": 68
                                          },
                                          {
                                              "x": 496,
                                              "y": 652,
                                              "h": 100,
                                              "w": 100
                                          },
                                          {
                                              "x": 1802,
                                              "y": 584,
                                              "h": 104,
                                              "w": 104
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 816,
                                              "y": 431,
                                              "h": 39,
                                              "w": 39
                                          },
                                          {
                                              "x": 290,
                                              "y": 382,
                                              "h": 58,
                                              "w": 58
                                          },
                                          {
                                              "x": 1055,
                                              "y": 342,
                                              "h": 60,
                                              "w": 60
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 462,
                                              "y": 244,
                                              "h": 22,
                                              "w": 22
                                          },
                                          {
                                              "x": 164,
                                              "y": 216,
                                              "h": 33,
                                              "w": 33
                                          },
                                          {
                                              "x": 598,
                                              "y": 193,
                                              "h": 34,
                                              "w": 34
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 1394,
                                              "y": 736,
                                              "h": 68,
                                              "w": 68
                                          },
                                          {
                                              "x": 496,
                                              "y": 652,
                                              "h": 100,
                                              "w": 100
                                          },
                                          {
                                              "x": 1802,
                                              "y": 584,
                                              "h": 104,
                                              "w": 104
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1365,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 800,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 453,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1365,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 195,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 495,
                                          "y": 0,
                                          "w": 1365,
                                          "h": 1365
                                      },
                                      {
                                          "x": 579,
                                          "y": 0,
                                          "w": 1197,
                                          "h": 1365
                                      },
                                      {
                                          "x": 836,
                                          "y": 0,
                                          "w": 683,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1365
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947207921664"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947191037952",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947191037952",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bRWMAAuoUR.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 838,
                                              "y": 414,
                                              "h": 92,
                                              "w": 92
                                          },
                                          {
                                              "x": 978,
                                              "y": 414,
                                              "h": 102,
                                              "w": 102
                                          },
                                          {
                                              "x": 710,
                                              "y": 508,
                                              "h": 106,
                                              "w": 106
                                          },
                                          {
                                              "x": 1080,
                                              "y": 364,
                                              "h": 98,
                                              "w": 98
                                          },
                                          {
                                              "x": 1402,
                                              "y": 372,
                                              "h": 110,
                                              "w": 110
                                          },
                                          {
                                              "x": 500,
                                              "y": 422,
                                              "h": 108,
                                              "w": 108
                                          },
                                          {
                                              "x": 1540,
                                              "y": 374,
                                              "h": 114,
                                              "w": 114
                                          },
                                          {
                                              "x": 1534,
                                              "y": 440,
                                              "h": 176,
                                              "w": 176
                                          },
                                          {
                                              "x": 1448,
                                              "y": 1022,
                                              "h": 376,
                                              "w": 376
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 491,
                                              "y": 242,
                                              "h": 53,
                                              "w": 53
                                          },
                                          {
                                              "x": 573,
                                              "y": 242,
                                              "h": 59,
                                              "w": 59
                                          },
                                          {
                                              "x": 416,
                                              "y": 297,
                                              "h": 62,
                                              "w": 62
                                          },
                                          {
                                              "x": 632,
                                              "y": 213,
                                              "h": 57,
                                              "w": 57
                                          },
                                          {
                                              "x": 821,
                                              "y": 217,
                                              "h": 64,
                                              "w": 64
                                          },
                                          {
                                              "x": 292,
                                              "y": 247,
                                              "h": 63,
                                              "w": 63
                                          },
                                          {
                                              "x": 902,
                                              "y": 219,
                                              "h": 66,
                                              "w": 66
                                          },
                                          {
                                              "x": 898,
                                              "y": 257,
                                              "h": 103,
                                              "w": 103
                                          },
                                          {
                                              "x": 848,
                                              "y": 598,
                                              "h": 220,
                                              "w": 220
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 278,
                                              "y": 137,
                                              "h": 30,
                                              "w": 30
                                          },
                                          {
                                              "x": 324,
                                              "y": 137,
                                              "h": 33,
                                              "w": 33
                                          },
                                          {
                                              "x": 235,
                                              "y": 168,
                                              "h": 35,
                                              "w": 35
                                          },
                                          {
                                              "x": 358,
                                              "y": 120,
                                              "h": 32,
                                              "w": 32
                                          },
                                          {
                                              "x": 465,
                                              "y": 123,
                                              "h": 36,
                                              "w": 36
                                          },
                                          {
                                              "x": 166,
                                              "y": 140,
                                              "h": 35,
                                              "w": 35
                                          },
                                          {
                                              "x": 511,
                                              "y": 124,
                                              "h": 37,
                                              "w": 37
                                          },
                                          {
                                              "x": 509,
                                              "y": 146,
                                              "h": 58,
                                              "w": 58
                                          },
                                          {
                                              "x": 480,
                                              "y": 339,
                                              "h": 124,
                                              "w": 124
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 838,
                                              "y": 414,
                                              "h": 92,
                                              "w": 92
                                          },
                                          {
                                              "x": 978,
                                              "y": 414,
                                              "h": 102,
                                              "w": 102
                                          },
                                          {
                                              "x": 710,
                                              "y": 508,
                                              "h": 106,
                                              "w": 106
                                          },
                                          {
                                              "x": 1080,
                                              "y": 364,
                                              "h": 98,
                                              "w": 98
                                          },
                                          {
                                              "x": 1402,
                                              "y": 372,
                                              "h": 110,
                                              "w": 110
                                          },
                                          {
                                              "x": 500,
                                              "y": 422,
                                              "h": 108,
                                              "w": 108
                                          },
                                          {
                                              "x": 1540,
                                              "y": 374,
                                              "h": 114,
                                              "w": 114
                                          },
                                          {
                                              "x": 1534,
                                              "y": 440,
                                              "h": 176,
                                              "w": 176
                                          },
                                          {
                                              "x": 1448,
                                              "y": 1022,
                                              "h": 376,
                                              "w": 376
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1564,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 916,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 519,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1564,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 484,
                                          "y": 0,
                                          "w": 1564,
                                          "h": 1564
                                      },
                                      {
                                          "x": 676,
                                          "y": 0,
                                          "w": 1372,
                                          "h": 1564
                                      },
                                      {
                                          "x": 1196,
                                          "y": 0,
                                          "w": 782,
                                          "h": 1564
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1564
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947191037952"
                                  }
                              }
                          }
                      ]
                  },
                  "card": {},
                  "place": {},
                  "entities": {
                      "hashtags": [],
                      "media": [
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947182673920",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947182673920",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bPWkAAV33g.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": []
                                  },
                                  "medium": {
                                      "faces": []
                                  },
                                  "small": {
                                      "faces": []
                                  },
                                  "orig": {
                                      "faces": []
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1080,
                                      "w": 1616,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 802,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 454,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1080,
                                  "width": 1616,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 72,
                                          "w": 1616,
                                          "h": 905
                                      },
                                      {
                                          "x": 469,
                                          "y": 0,
                                          "w": 1080,
                                          "h": 1080
                                      },
                                      {
                                          "x": 536,
                                          "y": 0,
                                          "w": 947,
                                          "h": 1080
                                      },
                                      {
                                          "x": 739,
                                          "y": 0,
                                          "w": 540,
                                          "h": 1080
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1616,
                                          "h": 1080
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947182673920"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947199512576",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947199512576",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bTXgAA5rvM.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 74,
                                              "y": 352,
                                              "h": 84,
                                              "w": 84
                                          },
                                          {
                                              "x": 1268,
                                              "y": 686,
                                              "h": 120,
                                              "w": 120
                                          },
                                          {
                                              "x": 386,
                                              "y": 448,
                                              "h": 156,
                                              "w": 156
                                          },
                                          {
                                              "x": 756,
                                              "y": 432,
                                              "h": 148,
                                              "w": 148
                                          },
                                          {
                                              "x": 974,
                                              "y": 460,
                                              "h": 166,
                                              "w": 166
                                          },
                                          {
                                              "x": 1680,
                                              "y": 624,
                                              "h": 176,
                                              "w": 176
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 43,
                                              "y": 206,
                                              "h": 49,
                                              "w": 49
                                          },
                                          {
                                              "x": 742,
                                              "y": 401,
                                              "h": 70,
                                              "w": 70
                                          },
                                          {
                                              "x": 226,
                                              "y": 262,
                                              "h": 91,
                                              "w": 91
                                          },
                                          {
                                              "x": 442,
                                              "y": 253,
                                              "h": 86,
                                              "w": 86
                                          },
                                          {
                                              "x": 570,
                                              "y": 269,
                                              "h": 97,
                                              "w": 97
                                          },
                                          {
                                              "x": 984,
                                              "y": 365,
                                              "h": 103,
                                              "w": 103
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 24,
                                              "y": 116,
                                              "h": 27,
                                              "w": 27
                                          },
                                          {
                                              "x": 421,
                                              "y": 227,
                                              "h": 39,
                                              "w": 39
                                          },
                                          {
                                              "x": 128,
                                              "y": 148,
                                              "h": 51,
                                              "w": 51
                                          },
                                          {
                                              "x": 251,
                                              "y": 143,
                                              "h": 49,
                                              "w": 49
                                          },
                                          {
                                              "x": 323,
                                              "y": 152,
                                              "h": 55,
                                              "w": 55
                                          },
                                          {
                                              "x": 557,
                                              "y": 207,
                                              "h": 58,
                                              "w": 58
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 74,
                                              "y": 352,
                                              "h": 84,
                                              "w": 84
                                          },
                                          {
                                              "x": 1268,
                                              "y": 686,
                                              "h": 120,
                                              "w": 120
                                          },
                                          {
                                              "x": 386,
                                              "y": 448,
                                              "h": 156,
                                              "w": 156
                                          },
                                          {
                                              "x": 756,
                                              "y": 432,
                                              "h": 148,
                                              "w": 148
                                          },
                                          {
                                              "x": 974,
                                              "y": 460,
                                              "h": 166,
                                              "w": 166
                                          },
                                          {
                                              "x": 1680,
                                              "y": 624,
                                              "h": 176,
                                              "w": 176
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1365,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 800,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 453,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1365,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1365,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 1197,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 683,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1365
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947199512576"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947207921664",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947207921664",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bVX0AAVZqU.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 1394,
                                              "y": 736,
                                              "h": 68,
                                              "w": 68
                                          },
                                          {
                                              "x": 496,
                                              "y": 652,
                                              "h": 100,
                                              "w": 100
                                          },
                                          {
                                              "x": 1802,
                                              "y": 584,
                                              "h": 104,
                                              "w": 104
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 816,
                                              "y": 431,
                                              "h": 39,
                                              "w": 39
                                          },
                                          {
                                              "x": 290,
                                              "y": 382,
                                              "h": 58,
                                              "w": 58
                                          },
                                          {
                                              "x": 1055,
                                              "y": 342,
                                              "h": 60,
                                              "w": 60
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 462,
                                              "y": 244,
                                              "h": 22,
                                              "w": 22
                                          },
                                          {
                                              "x": 164,
                                              "y": 216,
                                              "h": 33,
                                              "w": 33
                                          },
                                          {
                                              "x": 598,
                                              "y": 193,
                                              "h": 34,
                                              "w": 34
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 1394,
                                              "y": 736,
                                              "h": 68,
                                              "w": 68
                                          },
                                          {
                                              "x": 496,
                                              "y": 652,
                                              "h": 100,
                                              "w": 100
                                          },
                                          {
                                              "x": 1802,
                                              "y": 584,
                                              "h": 104,
                                              "w": 104
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1365,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 800,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 453,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1365,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 195,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 495,
                                          "y": 0,
                                          "w": 1365,
                                          "h": 1365
                                      },
                                      {
                                          "x": 579,
                                          "y": 0,
                                          "w": 1197,
                                          "h": 1365
                                      },
                                      {
                                          "x": 836,
                                          "y": 0,
                                          "w": 683,
                                          "h": 1365
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1365
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947207921664"
                                  }
                              }
                          },
                          {
                              "display_url": "pic.x.com/i3kalndkfz",
                              "expanded_url": "https://twitter.com/Tim_Walz/status/1840367954430402764/photo/1",
                              "id_str": "1840367947191037952",
                              "indices": [
                                  148,
                                  171
                              ],
                              "media_key": "3_1840367947191037952",
                              "media_url_https": "https://pbs.twimg.com/media/GYpM5bRWMAAuoUR.jpg",
                              "type": "photo",
                              "url": "https://t.co/i3kALnDkFZ",
                              "ext_media_availability": {
                                  "status": "Available"
                              },
                              "features": {
                                  "large": {
                                      "faces": [
                                          {
                                              "x": 838,
                                              "y": 414,
                                              "h": 92,
                                              "w": 92
                                          },
                                          {
                                              "x": 978,
                                              "y": 414,
                                              "h": 102,
                                              "w": 102
                                          },
                                          {
                                              "x": 710,
                                              "y": 508,
                                              "h": 106,
                                              "w": 106
                                          },
                                          {
                                              "x": 1080,
                                              "y": 364,
                                              "h": 98,
                                              "w": 98
                                          },
                                          {
                                              "x": 1402,
                                              "y": 372,
                                              "h": 110,
                                              "w": 110
                                          },
                                          {
                                              "x": 500,
                                              "y": 422,
                                              "h": 108,
                                              "w": 108
                                          },
                                          {
                                              "x": 1540,
                                              "y": 374,
                                              "h": 114,
                                              "w": 114
                                          },
                                          {
                                              "x": 1534,
                                              "y": 440,
                                              "h": 176,
                                              "w": 176
                                          },
                                          {
                                              "x": 1448,
                                              "y": 1022,
                                              "h": 376,
                                              "w": 376
                                          }
                                      ]
                                  },
                                  "medium": {
                                      "faces": [
                                          {
                                              "x": 491,
                                              "y": 242,
                                              "h": 53,
                                              "w": 53
                                          },
                                          {
                                              "x": 573,
                                              "y": 242,
                                              "h": 59,
                                              "w": 59
                                          },
                                          {
                                              "x": 416,
                                              "y": 297,
                                              "h": 62,
                                              "w": 62
                                          },
                                          {
                                              "x": 632,
                                              "y": 213,
                                              "h": 57,
                                              "w": 57
                                          },
                                          {
                                              "x": 821,
                                              "y": 217,
                                              "h": 64,
                                              "w": 64
                                          },
                                          {
                                              "x": 292,
                                              "y": 247,
                                              "h": 63,
                                              "w": 63
                                          },
                                          {
                                              "x": 902,
                                              "y": 219,
                                              "h": 66,
                                              "w": 66
                                          },
                                          {
                                              "x": 898,
                                              "y": 257,
                                              "h": 103,
                                              "w": 103
                                          },
                                          {
                                              "x": 848,
                                              "y": 598,
                                              "h": 220,
                                              "w": 220
                                          }
                                      ]
                                  },
                                  "small": {
                                      "faces": [
                                          {
                                              "x": 278,
                                              "y": 137,
                                              "h": 30,
                                              "w": 30
                                          },
                                          {
                                              "x": 324,
                                              "y": 137,
                                              "h": 33,
                                              "w": 33
                                          },
                                          {
                                              "x": 235,
                                              "y": 168,
                                              "h": 35,
                                              "w": 35
                                          },
                                          {
                                              "x": 358,
                                              "y": 120,
                                              "h": 32,
                                              "w": 32
                                          },
                                          {
                                              "x": 465,
                                              "y": 123,
                                              "h": 36,
                                              "w": 36
                                          },
                                          {
                                              "x": 166,
                                              "y": 140,
                                              "h": 35,
                                              "w": 35
                                          },
                                          {
                                              "x": 511,
                                              "y": 124,
                                              "h": 37,
                                              "w": 37
                                          },
                                          {
                                              "x": 509,
                                              "y": 146,
                                              "h": 58,
                                              "w": 58
                                          },
                                          {
                                              "x": 480,
                                              "y": 339,
                                              "h": 124,
                                              "w": 124
                                          }
                                      ]
                                  },
                                  "orig": {
                                      "faces": [
                                          {
                                              "x": 838,
                                              "y": 414,
                                              "h": 92,
                                              "w": 92
                                          },
                                          {
                                              "x": 978,
                                              "y": 414,
                                              "h": 102,
                                              "w": 102
                                          },
                                          {
                                              "x": 710,
                                              "y": 508,
                                              "h": 106,
                                              "w": 106
                                          },
                                          {
                                              "x": 1080,
                                              "y": 364,
                                              "h": 98,
                                              "w": 98
                                          },
                                          {
                                              "x": 1402,
                                              "y": 372,
                                              "h": 110,
                                              "w": 110
                                          },
                                          {
                                              "x": 500,
                                              "y": 422,
                                              "h": 108,
                                              "w": 108
                                          },
                                          {
                                              "x": 1540,
                                              "y": 374,
                                              "h": 114,
                                              "w": 114
                                          },
                                          {
                                              "x": 1534,
                                              "y": 440,
                                              "h": 176,
                                              "w": 176
                                          },
                                          {
                                              "x": 1448,
                                              "y": 1022,
                                              "h": 376,
                                              "w": 376
                                          }
                                      ]
                                  }
                              },
                              "sizes": {
                                  "large": {
                                      "h": 1564,
                                      "w": 2048,
                                      "resize": "fit"
                                  },
                                  "medium": {
                                      "h": 916,
                                      "w": 1200,
                                      "resize": "fit"
                                  },
                                  "small": {
                                      "h": 519,
                                      "w": 680,
                                      "resize": "fit"
                                  },
                                  "thumb": {
                                      "h": 150,
                                      "w": 150,
                                      "resize": "crop"
                                  }
                              },
                              "original_info": {
                                  "height": 1564,
                                  "width": 2048,
                                  "focus_rects": [
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1147
                                      },
                                      {
                                          "x": 484,
                                          "y": 0,
                                          "w": 1564,
                                          "h": 1564
                                      },
                                      {
                                          "x": 676,
                                          "y": 0,
                                          "w": 1372,
                                          "h": 1564
                                      },
                                      {
                                          "x": 1196,
                                          "y": 0,
                                          "w": 782,
                                          "h": 1564
                                      },
                                      {
                                          "x": 0,
                                          "y": 0,
                                          "w": 2048,
                                          "h": 1564
                                      }
                                  ]
                              },
                              "allow_download_status": {
                                  "allow_download": true
                              },
                              "media_results": {
                                  "result": {
                                      "media_key": "3_1840367947191037952"
                                  }
                              }
                          }
                      ],
                      "symbols": [],
                      "timestamps": [],
                      "urls": [],
                      "user_mentions": []
                  }
              },
              "media": [
                  "https://pbs.twimg.com/media/GYqouRvWkAA8Svp.jpg",
                  "https://pbs.twimg.com/media/GYqouSCXAAAfP3s.jpg"
              ],
              "isConversationControlled": false
          },
          {
              "type": "tweet",
              "id": "1840449696432579064",
              "url": "https://x.com/KevinSzabo14/status/1840449696432579064",
              "twitterUrl": "https://twitter.com/KevinSzabo14/status/1840449696432579064",
              "text": "Earning money in one currency and spending it in a weaker currency is a life hack.\n\nThis is why I left Canada and moved to Mexico.\n\nEarning USD online but spending in pesos.\n\nMy quality of like easily went up 500% after.",
              "source": "Twitter for iPhone",
              "retweetCount": 8,
              "replyCount": 59,
              "likeCount": 123,
              "quoteCount": 1,
              "viewCount": 1824,
              "createdAt": "Sun Sep 29 17:52:56 +0000 2024",
              "lang": "en",
              "bookmarkCount": 9,
              "isReply": false,
              "conversationId": "1840449696432579064",
              "isPinned": false,
              "author": {
                  "type": "user",
                  "userName": "KevinSzabo14",
                  "url": "https://x.com/KevinSzabo14",
                  "twitterUrl": "https://twitter.com/KevinSzabo14",
                  "id": "1548042314655797250",
                  "name": "Kevin Szabo",
                  "isVerified": false,
                  "isBlueVerified": true,
                  "profilePicture": "https://pbs.twimg.com/profile_images/1799815164281135104/zpquj6rZ_normal.jpg",
                  "coverPicture": "https://pbs.twimg.com/profile_banners/1548042314655797250/1705094924",
                  "description": "Ghostwriter for CEOs | Brand builder | Solopreneur | X business coach. Escaped my 9-5 and Generated over $600,000 for 30+ clients. DM to book a Coaching call!",
                  "location": "Canada",
                  "followers": 19459,
                  "following": 484,
                  "status": "",
                  "canDm": true,
                  "canMediaTag": true,
                  "createdAt": "Fri Jul 15 20:30:44 +0000 2022",
                  "entities": {
                      "description": {
                          "urls": []
                      },
                      "url": {
                          "urls": [
                              {
                                  "display_url": "kevinszabo14.com",
                                  "expanded_url": "http://kevinszabo14.com",
                                  "url": "https://t.co/jgayy6U6nk",
                                  "indices": [
                                      0,
                                      23
                                  ]
                              }
                          ]
                      }
                  },
                  "fastFollowersCount": 0,
                  "favouritesCount": 316362,
                  "hasCustomTimelines": false,
                  "isTranslator": false,
                  "mediaCount": 448,
                  "statusesCount": 72906,
                  "withheldInCountries": [],
                  "affiliatesHighlightedLabel": {},
                  "possiblySensitive": false,
                  "pinnedTweetIds": [
                      "1840437120772563273"
                  ]
              },
              "extendedEntities": {},
              "card": {},
              "place": {},
              "entities": {
                  "hashtags": [],
                  "symbols": [],
                  "timestamps": [],
                  "urls": [],
                  "user_mentions": []
              },
              "isRetweet": false,
              "isQuote": false,
              "media": [],
              "isConversationControlled": false
          }
      ])

    } catch (error) {
        throw error;
    }
}