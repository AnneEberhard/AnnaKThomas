//for header
let menuTitles = [
  { de: "Home", en: "Home", link: "/index.html" },
  { de: "Fantasy", en: "Fantasy", link: "/fantasy.html" },
  { de: "Historisch", en: "Historical", link: "/historical.html" },
  { de: "Novellen", en: "Novellas", link: "/novellas.html" },
  { de: "Über mich", en: "About Me", link: "/about-me.html" }
];

//for booksites
let topSites = [
  {
    siteId: "mask",
    translationExists: "true",
    languages: {
      de: {
        title:
          "Die Masken von Florenz - Historischer Roman zur Zeit der Renaissance",
        paragraphs: ["Mein zweiter historischer Roman."],
        links: [
          { text: "HintergrundInfo", url: "/" },
          { text: "Bonuskapitel", url: "/" },
          { text: "Personenverzeichnis", url: "/" },
          { text: "Zeittafel", url: "/" },
          { text: "Stammbaum der Medici", url: "/" },
          { text: "Begriffe und Quellen", url: "/" },
        ],
      },
      en: {
        title:
          "The Masks of Florence - Historical novel set during the Renaissance",
        paragraphs: ["My second historical novel."],
        links: [
          { text: "Background info", url: "/" },
          { text: "Bonus chapter", url: "/" },
          { text: "Personage", url: "/" },
          { text: "Timeline", url: "/" },
          { text: "Family tress of the Medici", url: "/" },
          { text: "Glossary and Sources", url: "/" },
        ],
      },
    },
  },
  {
    siteId: "alster",
    translationExists: "true",
    languages: {
      de: {
        title:
          "Alsterdiamanten - Historischer Roman im Hamburg des Biedermeiers",
        paragraphs: ["Mein zweiter historischer Roman."],
        links: [
          { text: "HintergrundInfo", url: "/" },
          { text: "Personenverzeichnis", url: "/" },
          { text: "Quellen und Links zu den Karten", url: "/" },
        ],
      },
      en: {
        title: "Alster Diamonds - Historical novel set during the Renaissance",
        paragraphs: ["My second historical novel."],
        links: [
          { text: "Background info", url: "/" },
          { text: "Personage", url: "/" },
          { text: "Sources and links to maps", url: "/" },
        ],
      },
    },
  },
  {
    siteId: "odyssee",
    translationExists: "false",
    languages: {
      de: {
        title:
          "Irrfahrt ins Gelobte Land - Historischer Roman aus der Zeit des Kreuzzüge",
        paragraphs: ["Mein erster historischer Roman."],
        links: [
          { text: "HintergrundInfo", url: "/" },
          { text: "Bonuskapitel", url: "/" },
          { text: "Personenverzeichnis", url: "/" },
          { text: "Zeittafel", url: "/" },
          { text: "Konflikt zwischen Staufer und Welfen", url: "/" },
          { text: "Stammbäume der Staufer und Welfen", url: "/" },
          { text: "Begriffe und Quellen", url: "/" },
        ],
      },
      en: {
        title:
          "Odyssee to the Promised Land - Historical novel at the time of the Crusades",
        paragraphs: ["My second historical novel."],
        links: [
          { text: "Background info", url: "/" },
          { text: "Bonus chapter", url: "/" },
          { text: "Personage", url: "/" },
          { text: "Timeline", url: "/" },
          { text: "Conflict between Staufer and Welfen", url: "/" },
          { text: "Family tress of Staufer and Welfen", url: "/" },
          { text: "Glossary and Sources", url: "/" },
        ],
      },
    },
  },
  {
    siteId: "mind",
    translationExists: "false",
    languages: {
      de: {
        title:
          "Der Geist in Brand - Ein Krautjunker zwischen Rokoko und Revolution",
        paragraphs: [
          "Zwölf Jahre Schreibzeit und fast zwei Dekaden umspannend.",
        ],
        links: [
          { text: "HintergrundInfo", url: "/" },
          { text: "Bonuskapitel", url: "/" },
          { text: "Personenverzeichnis", url: "/" },
          { text: "Quellen", url: "/" },
        ],
      },
      en: {
        title: "The Mind on Fire - A Krautjunker between Rococo and Revolution",
        paragraphs: [
          "Twelve years of writing and spanning almost two decades.",
        ],
        links: [
          { text: "Background info", url: "/" },
          { text: "Bonus chapter", url: "/" },
          { text: "Personage", url: "/" },
          { text: "Sources", url: "/" },
        ],
      },
    },
  }
];

//for bottom nav
let navSites = [
  {
    siteId: "general",
    languages: {
      de: {
        links: [{ text: "Zurück zur Homepage", url: "/index.html" }],
      },
      en: {
        links: [{ text: "Back to Homepage", url: "/index.html" }],
      },
    },
  },
  {
    siteId: "historical",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu historischen Geschichten",
            url: "/historical.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to historical novels", url: "/historical.html" },
        ],
      },
    },
  },
  {
    siteId: "mask",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu historischen Geschichten",
            url: "/historical.html",
          },
          {
            text: "Zurück zu Die Masken von Florenz",
            url: "/booksites/masks-of-florence.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to historical novels", url: "/historical.html" },
          {
            text: "Zurück zu The Masks of Florence",
            url: "/booksites/masks-of-florence.html",
          },
        ],
      },
    },
  },
  {
    siteId: "alster",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu historischen Geschichten",
            url: "/historical.html",
          },
          {
            text: "Zurück zu Alsterdiamanten",
            url: "/booksites/alster-diamonds.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to historical novels", url: "/historical.html" },
          {
            text: "Back to Alster Diamonds",
            url: "/booksites/alster-diamonds.html",
          },
        ],
      },
    },
  },
  {
    siteId: "odyssee",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu historischen Geschichten",
            url: "/historical.html",
          },
          {
            text: "Zurück zu Irrfahrt ins Gelobte Land",
            url: "/booksites/odyssee.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to historical novels", url: "/historical.html" },
          {
            text: "Back to Odyssee to the Promised Land",
            url: "/booksites/odyssee.html",
          },
        ],
      },
    },
  },
  {
    siteId: "mind",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu historischen Geschichten",
            url: "/historical.html",
          },
          {
            text: "Zurück zu Der Geist in Brand",
            url: "/booksites/mind-on-fire.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to historical novels", url: "/historical.html" },
          {
            text: "Back to The Mind on Fire",
            url: "/booksites/mind-on-fire.html",
          },
        ],
      },
    },
  },
];

// for main pages
let mainSites = [
  {
    siteId: "home",
    translationExists: "true",
    languages: {
      de: {
        title: "Hallo!",
        paragraphs: [
          "Und willkommen auf meiner Webseite!",
          "Ich schreibe schon seit Jahrzehnten Geschichten, aber 2017 habe ich mich nach draußen in die Welt getraut und angefangen, online Bücher zu veröffentlichen. Da ich so viel drum herum geschrieben und gebaut habe, und auch noch so vieles plane, entstand die Idee zu dieser Webseite, um ein wenig mehr Info zu geben, ein bisschen mehr zu teilen - und vielleicht ebenso ein bisschen mehr zu hören ...",
          "Ich schreibe auf deutsch, aber mittlerweile gibt es englische Übersetzungen einiger meiner Werke. Wo dies der Fall ist, könnt Ihr Euch die englischen Texte anzeigen lassen.",
          ""
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Der Überblick über meine Bücher:",
            links: [{
              text: "",
              url: ""
            }],
          }
        ]
      },
      en: {
        title: "Hello!",
        paragraphs: [
          "And welcome to my website!",
          "I've been writing stories for decades, but in 2017 I ventured out into the world and started publishing books online. Since I've written and built so much around it, and still have so much planned, the idea for this website was born to give a little more info, a little more to share - and maybe a little more to hear ...",
          "I write in German, but there are now English translations of some of my works. Where this is the case, you can view the English texts.",
          ""
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "The overview of my books:",
            links: [{
              text: "",
              url: "/booksites/"
            }],
          }
        ]
      },
    },
  },
  {
    siteId: "fantasy",
    translationExists: "true",
    languages: {
      de: {
        title: "Fantasy",
        paragraphs: [
          "An dem Genre Fantasy fasziniert mich, dass einem keine Grenzen gesetzt sind - außer irgendwann die Grenzen der Logik innerhalb einer Geschichte. Ich habe drei Trilogien geschrieben, davon zwei Urban Fantasy und eine klassische Fantasy.",
          "Die Von Elfen und Wölfen Trilogie ist ins Englische übersetzt worden und wurde dort zu neun Büchern.",
          "Auf jeder der nachfolgenden Seiten findet Ihr Links zu den Büchern, Hintergrundinfos, Bonuskapitel und vieles mehr."
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Klassische Fantasy",
            links: [{
              text: "Die Sänger von Thurán",
              url: "/booksites/bards-of-thuran.html"
            }],
          },   
          {
            paragraphs: ["", ""],
            subtitle: "Urban Fantasy",
            links: [
              {
                text: "Die Kinder der Engel",
                url: "/booksites/children-of-angels.html"
              },
              {
                text: "Von Elfen und Wölfen",
                url: "/booksites/of-elves-and-wolves.html"
              }
            ],
          }
        ]
      },
      en: {
        title: "Fantasy",
        paragraphs: [
          "What fascinates me about the fantasy genre is that there are no limits - except at some point the limits of logic within a story. I have written three trilogies, two of them urban fantasy and one classic fantasy.",
          "The Of Elves and Wolves trilogy has been translated into English, where it became nine books in three arcs.",
          "On each of the following pages you will find links to the books, background information, bonus chapters and much more."
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Classic fantasy",
            links: [{
              text: "The Bards of Thurán",
              url: "/booksites/bards-of-thuran.html"
            }],
          },
          {
            paragraphs: ["", ""],
            subtitle: "Urban Fantasy",
            links: [     {
              text: "Children Of Angels",
              url: "/booksites/children-of-angels.html"
            },
            {
              text: "Of Elves and Wolves",
              url: "/booksites/of-elves-and-wolves.html"
            }],
          }
        ]
      },
    },
  },
  {
    siteId: "historical",
    translationExists: "true",
    languages: {
      de: {
        title: "Historische Romane",
        paragraphs: [
          "Ich liebe historische Romane - vorausgesetzt, sie sind gut recherchiert. Für die meinen bin ich tief in die jeweiligen Zeiten eingestiegen und habe mir hoffentlich keine groben Patzer geleistet. Solltet Ihr etwas finden, lasst es mich wissen!",
          "Von meinen historischen Büchern sind die Alsterdiamanten und Die Masken von Florenz ins Englische übersetzt worden.",
          "Auf jeder der nachfolgenden Seiten findet Ihr Links zu den Büchern, Hintergrundinfos, Bonuskapitel und vieles mehr."
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Historische Romane",
            links: [{
              text: "Irrfahrt ins Gelobte Land",
              url: "/booksites/odyssee.html"
            },{
              text: "Die Masken von Florenz",
              url: "/booksites/masks-of-florence.html"
            },{
              text: "Alsterdiamanten",
              url: "/booksites/alster-diamonds.html"
            },{
              text: "Der Geist in Brand",
              url: "/booksites/mind-on-fire.html"
            }],
          }
        ]
      },
      en: {
        title: "Historical novels",
        paragraphs: [
          "I love historical novels - provided they are well researched. For mine, I delved deep into the respective periods and hopefully didn't make any major blunders. If you find anything, let me know!",
          "Of my historic books, the Alster Diamonds and The Masks of Florence have been translated into English.",
          "On each of the following pages you will find links to the books, background information, bonus chapters and much more."
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Historical novels",
            links: [{
              text: "Irrfahrt ins Gelobte Land",
              url: "/booksites/odyssee.html"
            },{
              text: "The Masks of Florence",
              url: "/booksites/masks-of-florence.html"
            },{
              text: "Alster Diamonds",
              url: "/booksites/alster-diamonds.html"
            },{
              text: "Der Geist in Brand",
              url: "/booksites/mind-on-fire.html"
            }
          ],
          }
        ]
      },
    },
  },
  {
    siteId: "novellas",
    translationExists: "true",
    languages: {
      de: {
        title: "Novellen und Kurzgeschichten",
        paragraphs: [
          "Mit Kurzgeschichten fing es an - unser Start in die Welt der Veröffentlichungen. Zwei Kurzgeschichten gab ich her, damit wir ausprobieren konnten, wie alles funktionierte, bevor wir uns an die größeren Werke wagten. Am liebsten hätte ich sie umsonst angeboten, aber das war nicht erlaubt. So kosten sie eben den Mindestpreis.",
          "Beide veröffentlichte Geschichten sind ins Englische übersetzt worden.",
          "Und als Bonus gibt es noch eine Geschichte, die ich nach einem Traum niederschrieb. Wie so viele Geschichten, die ich eigentlich geträumt habe, hat auch diese sich ein wenig verselbständigt.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Veröffentlichte Novellen und Kurzgeschichten",
            links: [{
              text: "",
              url: ""
            }],
          }
        ]
      },
      en: {
        title: "Novellas and short stories",
        paragraphs: [
          "It all started with short stories - our start in the world of publishing. I gave away two short stories so that we could try out how everything worked before we ventured into the larger works. I would have preferred to offer them for free, but that wasn't allowed. So they cost the minimum price.",
          "Both published stories have been translated into English.",
          "And as a bonus, there's another story that I wrote down after a dream (but only in German). Like so many stories that I actually dreamt, this one also took on a life of its own.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Published novellas and short stories",
            links: [{
              text: "",
              url: ""
            }],
          }
        ]
      },
    },
  },
];




