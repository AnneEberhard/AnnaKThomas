//for header
let menuTitles = [
  { de: "Home", en: "Home", link: "/index.html" },
  { de: "Fantasy", en: "Fantasy", link: "/fantasy.html" },
  { de: "Historisch", en: "Historical", link: "/historical.html" },
  { de: "Novellen", en: "Novellas", link: "/novellas.html" },
  { de: "Über mich", en: "About Me", link: "/about-me.html" },
];

//for booksites
let topSites = [
  {
    siteId: "bards",
    translationExists: "planned",
    languages: {
      de: {
        title: "Die Sänger von Thurán - eine klassische Fantasytrilogie",
        paragraphs: [
          "Dies ist mein Erstlingswerk, der Grund, weshalb ich mich überhaupt jemals dazu durchringen konnte, eine meiner Geschichten loszulassen. Es hat sicher eine Menge Erstlingsfehler - aber willkommen in der Welt von Thurán!",
          "Und weil ich so lange daran geschrieben habe, so viel damit zu tun hatte, gibt es hier ein paar kleine Extras und ein bisschen was zum Nachschlagen. Darunter ist die Geschichte, wie es überhaupt dazu kam, sowie auch vier Kapitel, von denen es eines nie in die Bücher schaffte und drei, die den Kürzungen von Elfenweg und Weltenringen am Ende zum Opfer fielen.",
          "Hinweis: Die Unterseiten sind derzeit nur auf deutsch verfügbar.",
        ],
        links: [
          {
            text: "HintergrundInfo",
            url: "/subsitesBards/bards-background.html",
          },
          {
            text: "Bonuskapitel Elfenweg",
            url: "/subsitesThuran/bonus-elven-way.html",
          },
          {
            text: "Bonuskapitel Elfenweg - Sumpfzauber",
            url: "/subsitesThuran/bonus-elven-swamp.html",
          },
          {
            text: "Bonuskapitel Weltenringen: Irionne und Niturio",
            url: "/subsitesThuran/bonus-world-irionne.html",
          },
          {
            text: "Bonuskapitel Bonuskapitel Weltenringen: Syl und Nycas",
            url: "/subsitesThuran/bonus-world-syl.html",
          },
          { text: "Karten", url: "/subsitesThuran/thuran-maps.html" },
          {
            text: "Personenverzeichnis",
            url: "/subsitesThuran/thuran-persons.html",
          },
          {
            text: "Begriffsverzeichnis",
            url: "/subsitesThuran/thuran-glossary.html",
          },
        ],
      },
      en: {
        title: "The Bards of Thurán - a Classic Fantasy Trilogy",
        paragraphs: [
          "This is my debut work, the reason I could ever bring myself to release one of my stories in the first place. It certainly has a lot of first-time mistakes - but welcome to the world of Thurán!",
          "And because I spent so long writing it and had so much to do with it, here are a few little extras and a few things to look up. These include the story of how it came about in the first place, as well as four chapters, one of which never made it into the books and three that fell victim to the shortening of Elfenweg and Weltenringen at the end.",
          "Note: The subpages are currently only available in German.",
        ],
        links: [
          {
            text: "Background info",
            url: "/subsitesBards/bards-background.html",
          },
          {
            text: "Bonus chapter Elven Way",
            url: "/subsitesThuran/bonus-elven-way.html",
          },
          {
            text: "Bonus chapter Eleven Way - Swamp Magic",
            url: "/subsitesThuran/bonus-elven-swamp.html",
          },
          {
            text: "Bonus chapter World Struggle - Irionne and Niturio",
            url: "/subsitesThuran/bonus-world-irionne.html",
          },
          {
            text: "Bonus chapter World Struggle - Syl and Nycas",
            url: "/subsitesThuran/bonus-world-syl.html",
          },
          { text: "Maps", url: "/subsitesThuran/thuran-maps.html" },
          { text: "Personage", url: "/subsitesThuran/thuran-persons.html" },
          { text: "Glossary", url: "/subsitesThuran/thuran-glossary.html" },
        ],
      },
    },
  },
  {
    siteId: "children",
    translationExists: "progress",
    languages: {
      de: {
        title: "Die Kinder der Engel - eine Urban Fantasy Trilogie",
        paragraphs: [
          "Eigentlich wollte ich nach den Sängern nie wieder Fantasy schreiben. Ich wollte nie wieder eine Welt erfinden, sondern mich lieber auf historische Werke stürzen. Aber dann begegnete mir Flo - und tja, was soll ich sagen ... Hier sind sie: meine Dämonenjäger!",
        ],
        links: [
          {
            text: "HintergrundInfo",
            url: "/subsitesChildren/children-background.html",
          },
          {
            text: "Bonuskapitel",
            url: "/subsitesChildren/children-bonus.html",
          },
          {
            text: "Personenverzeichnis",
            url: "/subsitesChildren/children-persons.html",
          },
          { text: "Quellen", url: "/subsitesChildren/children-sources.html" },
        ],
      },
      en: {
        title: "The Children of Angels - an Urban Fantasy Trilogy",
        paragraphs: [
          "Actually, I never wanted to write fantasy again after The Bards. I never wanted to invent a world again, but would rather focus on historical works. But then I met Flo - and well, what can I say ... Here they are: my demon hunters!",
        ],
        links: [
          {
            text: "Background info",
            url: "/subsitesChildren/children-background.html",
          },
          {
            text: "Bonus chapter",
            url: "/subsitesChildren/children-bonus.html",
          },
          { text: "Personage", url: "/subsitesChildren/children-persons.html" },
          { text: "Sources", url: "/subsitesChildren/children-sources.html" },
        ],
      },
    },
  },
  {
    siteId: "elves",
    translationExists: "true",
    languages: {
      de: {
        title: "Von Elfen und Wölfen - eine Urban Fantasy Trilogie",
        paragraphs: [""],
        links: [
          {
            text: "HintergrundInfo",
            url: "/subsitesElves/elves-background.html",
          },
          {
            text: "Bonuskapitel Von Elfen und Wölfen: Noel",
            url: "/subsitesElves/elves-bonus-Noel.html",
          },
          {
            text: "Bonuskapitel Im Namen der Menschen: Diana",
            url: "/subsitesElves/elves-bonus-diana.html",
          },
          {
            text: "Personenverzeichnis",
            url: "/subsitesElves/elves-persons.html",
          },
          { text: "Stammbäume", url: "/subsitesElves/elves-familytrees.html" },
        ],
      },
      en: {
        title:
          "Of Elves and Wolves - an Urban Fantasy Story in three arcs and nine books",
        paragraphs: [""],
        links: [
          {
            text: "Background info",
            url: "/subsitesElves/elves-background.html",
          },
          {
            text: "Bonus chapter - Lucie arc: Noel",
            url: "/subsitesElves/elves-bonus-Noel.html",
          },
          {
            text: "Bonus chapter - Lena arc: Diana",
            url: "/subsitesElves/elves-bonus-diana.html",
          },
          { text: "Personage", url: "/subsitesElves/elves-persons.html" },
          {
            text: "Family Trees",
            url: "/subsitesElves/elves-familytrees.html",
          },
        ],
      },
    },
  },
  {
    siteId: "odyssee",
    translationExists: "planned",
    languages: {
      de: {
        title:
          "Irrfahrt ins Gelobte Land - Historischer Roman aus der Zeit des Kreuzzüge",
        paragraphs: ["Mein erster historischer Roman."],
        links: [
          {
            text: "HintergrundInfo",
            url: "/subsitesOdyssee/odyssee-background.html",
          },
          { text: "Bonuskapitel", url: "/subsitesOdyssee/odyssee-bonus.html" },
          {
            text: "Personenverzeichnis",
            url: "/subsitesOdyssee/odyssee-persons.html",
          },
          { text: "Zeittafel", url: "/subsitesOdyssee/odyssee-timeline.html" },
          {
            text: "Konflikt zwischen Staufer und Welfen",
            url: "/subsitesOdyssee/odyssee.conflict.html",
          },
          {
            text: "Stammbäume der Staufer und Welfen",
            url: "/subsitesOdyssee/odyssee-familytrees.html",
          },
          {
            text: "Begriffe und Quellen",
            url: "/subsitesOdyssee/odyssee.glossary.html",
          },
        ],
      },
      en: {
        title:
          "Odyssee to the Promised Land - Historical novel at the time of the Crusades",
        paragraphs: ["My second historical novel."],
        links: [
          {
            text: "Background info",
            url: "/subsitesOdyssee/odyssee-background.html",
          },
          { text: "Bonus chapter", url: "/subsitesOdyssee/odyssee-bonus.html" },
          { text: "Personage", url: "/subsitesOdyssee/odyssee-persons.html" },
          { text: "Timeline", url: "/subsitesOdyssee/odyssee-timeline.html" },
          {
            text: "Conflict between Staufer and Welfen",
            url: "/subsitesOdyssee/odyssee.conflict.html",
          },
          {
            text: "Family trees of Staufer and Welfen",
            url: "/subsitesOdyssee/odyssee-familytrees.html",
          },
          {
            text: "Glossary and Sources",
            url: "/subsitesOdyssee/odyssee.glossary.html",
          },
        ],
      },
    },
  },
  {
    siteId: "masks",
    translationExists: "true",
    languages: {
      de: {
        title:
          "Die Masken von Florenz - Historischer Roman zur Zeit der Renaissance",
        paragraphs: ["Mein zweiter historischer Roman."],
        links: [
          {
            text: "HintergrundInfo",
            url: "/subsitesMasks/masks-background.html",
          },
          { text: "Bonuskapitel", url: "/subsitesMasks/masks-bonus.html" },
          {
            text: "Personenverzeichnis",
            url: "/subsitesMasks/masks-persons.html",
          },
          { text: "Zeittafel", url: "/subsitesMasks/masks-timeline.html" },
          {
            text: "Stammbaum der Medici",
            url: "/subsitesMasks/masks-familytrees.html",
          },
          {
            text: "Begriffe und Quellen",
            url: "/subsitesMasks/masks-glossary.html",
          },
        ],
      },
      en: {
        title:
          "The Masks of Florence - Historical novel set during the Renaissance",
        paragraphs: ["My second historical novel."],
        links: [
          {
            text: "Background info",
            url: "/subsitesMasks/masks-background.html",
          },
          { text: "Bonus chapter", url: "/subsitesMasks/masks-bonus.html" },
          { text: "Personage", url: "/subsitesMasks/masks-persons.html" },
          { text: "Timeline", url: "/subsitesMasks/masks-timeline.html" },
          {
            text: "Family trees of the Medici",
            url: "/subsitesMasks/masks-familytrees.html",
          },
          {
            text: "Glossary and Sources",
            url: "/subsitesMasks/masks-glossary.html",
          },
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
          {
            text: "HintergrundInfo",
            url: "/subsitesAlster/alster-background.html",
          },
          {
            text: "Personenverzeichnis",
            url: "/subsitesAlster/alster-persons.html",
          },
          { text: "Stammbaum", url: "/subsitesAlster/alster-familytrees.html" },
          {
            text: "Quellen und Links zu den Karten",
            url: "/subsitesAlster/alster-sources.html",
          },
        ],
      },
      en: {
        title: "Alster Diamonds - Historical novel set during the Renaissance",
        paragraphs: ["My second historical novel."],
        links: [
          {
            text: "Background info",
            url: "/subsitesAlster/alster-background.html",
          },
          { text: "Personage", url: "/subsitesAlster/alster-persons.html" },
          {
            text: "Family Tree",
            url: "/subsitesAlster/alster-familytrees.html",
          },
          {
            text: "Quellen und Links zu den Karten",
            url: "/subsitesAlster/alster-sources.html",
          },
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
          {
            text: "HintergrundInfo",
            url: "/subsitesMind/mind-background.html",
          },
          { text: "Bonuskapitel", url: "/subsitesMind/mind-bonus.html" },
          {
            text: "Personenverzeichnis",
            url: "/subsitesMind/mind-persons.html",
          },
          { text: "Quellen", url: "/subsitesMind/mind-sources.html" },
        ],
      },
      en: {
        title: "The Mind on Fire - A Krautjunker between Rococo and Revolution",
        paragraphs: [
          "Twelve years of writing and spanning almost two decades.",
        ],
        links: [
          {
            text: "Background info",
            url: "/subsitesMind/mind-background.html",
          },
          { text: "Bonus chapter", url: "/subsitesMind/mind-bonus.html" },
          { text: "Personage", url: "/subsitesMind/mind-persons.html" },
          { text: "Sources", url: "/subsitesMind/mind-sources.html" },
        ],
      },
    },
  },
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
    siteId: "masks",
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
  {
    siteId: "children",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu Fantasy",
            url: "/fantasy.html",
          },
          {
            text: "Zurück zu Die Kinder der Engel",
            url: "/booksites/children-of-angels.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to Fantasy", url: "/fantasy.html" },
          {
            text: "Back to The Children of Angels",
            url: "/booksites/children-of-angels.html",
          },
        ],
      },
    },
  },
  {
    siteId: "elves",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu Fantasy",
            url: "/fantasy.html",
          },
          {
            text: "Zurück zu Von Elfen und Wölfen",
            url: "/booksites/of-elves-and-wolves.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to Fantasy", url: "/fantasy.html" },
          {
            text: "Back to The Children of Angels",
            url: "/booksites/of-elves-and-wolves.html",
          },
        ],
      },
    },
  },
  {
    siteId: "bards",
    languages: {
      de: {
        links: [
          { text: "Zurück zur Homepage", url: "/index.html" },
          {
            text: "Zurück zu Fantasy",
            url: "/fantasy.html",
          },
          {
            text: "Zurück zu Die Sänger von Thurán",
            url: "/booksites/bards-of-thuran.html",
          },
        ],
      },
      en: {
        links: [
          { text: "Back to Homepage", url: "/index.html" },
          { text: "Back to Fantasy", url: "/fantasy.html" },
          {
            text: "Back to The Bards of Thurán",
            url: "/booksites/bards-of-thuran.html",
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
          "",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Der Überblick über meine Bücher:",
            links: [
              {
                text: "",
                url: "",
              },
            ],
          },
        ],
      },
      en: {
        title: "Hello!",
        paragraphs: [
          "And welcome to my website!",
          "I've been writing stories for decades, but in 2017 I ventured out into the world and started publishing books online. Since I've written and built so much around it, and still have so much planned, the idea for this website was born to give a little more info, a little more to share - and maybe a little more to hear ...",
          "I write in German, but there are now English translations of some of my works. Where this is the case, you can view the English texts.",
          "",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "The overview of my books:",
            links: [
              {
                text: "",
                url: "/booksites/",
              },
            ],
          },
        ],
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
          "Auf jeder der nachfolgenden Seiten findet Ihr Links zu den Büchern, Hintergrundinfos, Bonuskapitel und vieles mehr.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Klassische Fantasy",
            links: [
              {
                text: "Die Sänger von Thurán",
                url: "/booksites/bards-of-thuran.html",
              },
            ],
          },
          {
            paragraphs: ["", ""],
            subtitle: "Urban Fantasy",
            links: [
              {
                text: "Die Kinder der Engel",
                url: "/booksites/children-of-angels.html",
              },
              {
                text: "Von Elfen und Wölfen",
                url: "/booksites/of-elves-and-wolves.html",
              },
            ],
          },
        ],
      },
      en: {
        title: "Fantasy",
        paragraphs: [
          "What fascinates me about the fantasy genre is that there are no limits - except at some point the limits of logic within a story. I have written three trilogies, two of them urban fantasy and one classic fantasy.",
          "The Of Elves and Wolves trilogy has been translated into English, where it became nine books in three arcs.",
          "On each of the following pages you will find links to the books, background information, bonus chapters and much more.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Classic fantasy",
            links: [
              {
                text: "The Bards of Thurán",
                url: "/booksites/bards-of-thuran.html",
              },
            ],
          },
          {
            paragraphs: ["", ""],
            subtitle: "Urban Fantasy",
            links: [
              {
                text: "Children Of Angels",
                url: "/booksites/children-of-angels.html",
              },
              {
                text: "Of Elves and Wolves",
                url: "/booksites/of-elves-and-wolves.html",
              },
            ],
          },
        ],
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
          "Auf jeder der nachfolgenden Seiten findet Ihr Links zu den Büchern, Hintergrundinfos, Bonuskapitel und vieles mehr.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Historische Romane",
            links: [
              {
                text: "Irrfahrt ins Gelobte Land",
                url: "/booksites/odyssee.html",
              },
              {
                text: "Die Masken von Florenz",
                url: "/booksites/masks-of-florence.html",
              },
              {
                text: "Alsterdiamanten",
                url: "/booksites/alster-diamonds.html",
              },
              {
                text: "Der Geist in Brand",
                url: "/booksites/mind-on-fire.html",
              },
            ],
          },
        ],
      },
      en: {
        title: "Historical novels",
        paragraphs: [
          "I love historical novels - provided they are well researched. For mine, I delved deep into the respective periods and hopefully didn't make any major blunders. If you find anything, let me know!",
          "Of my historic books, the Alster Diamonds and The Masks of Florence have been translated into English.",
          "On each of the following pages you will find links to the books, background information, bonus chapters and much more.",
        ],
        sections: [
          {
            paragraphs: ["", ""],
            subtitle: "Historical novels",
            links: [
              {
                text: "Irrfahrt ins Gelobte Land",
                url: "/booksites/odyssee.html",
              },
              {
                text: "The Masks of Florence",
                url: "/booksites/masks-of-florence.html",
              },
              {
                text: "Alster Diamonds",
                url: "/booksites/alster-diamonds.html",
              },
              {
                text: "Der Geist in Brand",
                url: "/booksites/mind-on-fire.html",
              },
            ],
          },
        ],
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
            links: [
              {
                text: "",
                url: "",
              },
            ],
          },
        ],
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
            links: [
              {
                text: "",
                url: "",
              },
            ],
          },
        ],
      },
    },
  },
];

// for home page
let overview = [
  {
    de: "Fantasy",
    en: "Fantasy",
    genreLink: "/fantasy.html",
    books: [
      {
        bookId: "bards",
        internalLink: "/booksites/bards-of-thuran.html",
        translationExists: "false",
        languages: {
          de: "Die Sänger von Thurán Trilogie",
          en: "Bards of Thurán Trilogie",
        },
      },
      {
        bookId: "children",
        internalLink: "/booksites/children-of-angels.html",
        translationExists: "false",
        languages: {
          de: "Die Kinder der Engel Trilogie",
          en: "Children of Angels Trilogy",
        },
      },
      {
        bookId: "elves",
        internalLink: "/booksites/of-elves-and-wolves.html",
        translationExists: "false",
        languages: {
          de: "Von Elfen und Wölfen Trilogie",
          en: "Of Elves and Wolves in three arcs",
        },
      },
    ],
  },
  {
    de: "Historisch",
    en: "Historical",
    genreLink: "/historical.html",
    books: [
      {
        bookId: "odyssee",
        internalLink: "/booksites/odyssee.html",
        translationExists: "false",
        languages: {
          de: "Irrfahrt ins Gelobte Land",
          en: "Odyssee to the Promised Land",
        },
      },
      {
        bookId: "masks",
        internalLink: "/booksites/masks-of-florence.html",
        translationExists: "true",
        languages: {
          de: "Die Masken von Florenz",
          en: "The Masks of Florence",
        },
      },
      {
        bookId: "alster",
        internalLink: "/booksites/alster-diamonds.html",
        translationExists: "true",
        languages: {
          de: "Alsterdiamanten",
          en: "Alster Diamonds",
        },
      },
      {
        bookId: "mind",
        internalLink: "/booksites/mind-on-fire.html",
        translationExists: "true",
        languages: {
          de: "Der Geist in Brand",
          en: "The Mind on Fire",
        },
      },
    ],
  },
  {
    de: "Kurzgeschichten",
    en: "Short Stories",
    genreLink: "/novellas.html",
    books: [
      {
        bookId: "life",
        internalLink: "/booksites/masks-of-florence.html",
        translationExists: "true",
        languages: {
          de: "LebensAbschnitt",
          en: "LifeStages",
        },
      },
      {
        bookId: "dance",
        internalLink: "/novellas.html",
        translationExists: "true",
        languages: {
          de: "Tanz mit dem Wind",
          en: "Dance the Wind",
        },
      },
    ],
  },
];

//for familyTreeTopSites
let familyTree = [
  {
    backgroundId: "elves",
    languages: {
      de: {
        headline: "Stammbäume für Von Elven und Wölfen",
        subheader:
          "Da ich irgendwann anfing, den Überblick zu verlieren, habe ich mir Stammbäume gezeichnet - ich hoffe, sie helfen euch so, wie sie mir geholfen haben.",
        images: [
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-martins-lamprechts-de.PNG",
          },
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-birnbaums-others-de.PNG",
          },
        ],
      },
      en: {
        headline: "Family Trees for Of Elves and Wolves",
        subheader:
          "As I started to lose track at some point, I drew family trees - I hope they help you as much as they helped me.",
        images: [
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-martins-lamprechts-en.PNG",
          },
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-birnbaums-others-en.PNG",
          },
        ],
      },
    },
  },
  {
    backgroundId: "odyssee",
    languages: {
      de: {
        headline: "Staufer/Welfen/Salier/Babenberger",
        subheader: "Status 1147",
        images: [
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-odyssee-de.PNG",
          },
        ],
      },
      en: {
        headline: "Staufer/Welfen/Salier/Babenberger",
        subheader: "Stand 1147",
        images: [
          {
            subheaderImages: "",
            imageUrl: "/assets/img/family-tree-odyssee-en.PNG",
          },
        ],
      },
    },
  },
  {
    backgroundId: "masks",
    languages: {
      de: {
        headline: "Stammbäume für Die Masken von Florenz",
        subheader:
          "Um den Überblick über die verschachtelten Zweige nicht zu verlieren, legte ich mir diesen Stammbaum an. Ich hoffe, er hilft Euch ebenfalls.",
        images: [
          {
            subheaderImages: "Ältere Linie der Medici (Auszüge)",
            imageUrl: "/assets/img/family-tree-medici1-de.PNG",
          },
          {
            subheaderImages: "Jüngere Linie der Medici (Auszüge)",
            imageUrl: "/assets/img/family-tree-medici1-en.PNG",
          },
        ],
      },
      en: {
        headline: "Family Trees for The Masks of Florence",
        subheader:
          "In order not to lose track of the nested branches, I created this family tree. I hope it helps you too.",
        images: [
          {
            subheaderImages: "Older line of the Medici (excerpts)",
            imageUrl: "/assets/img/family-tree-medici2-de.PNG",
          },
          {
            subheaderImages: "Younger line of the Medici (excerpts)",
            imageUrl: "/assets/img/family-tree-odyssee-en.PNG",
          },
        ],
      },
    },
  },
  {
    backgroundId: "alster",
    languages: {
      de: {
        headline: "Stammbaum der Familie Achtmann",
        subheader: "",
        images: [
          {
            subheaderImages: "Status 1838",
            imageUrl: "/assets/img/family-tree-achtmanns-de.PNG",
          },
        ],
      },
      en: {
        headline: "Family Trees of The Achtmanns",
        subheader: "",
        images: [
          {
            subheaderImages: "Stand 1838",
            imageUrl: "/assets/img/family-tree-achtmanns-en.PNG",
          },
        ],
      },
    },
  },
];

//for glossaries
let glossaryMasks = [
  {
    name: "Auripigment",
    de: "Gelbe Farbe zum Malen",
    en: "Yellow color for painting",
  },
  {
    name: "Bargello",
    de: "Der „Polizeikommandant“, heute ist nach ihm der alte Palazzo del Podesta in Florenz benannt",
    en: "The 'police commander', today the old Palazzo del Podesta in Florence is named after him",
  },
  {
    name: "Bleiweiß",
    de: "Weiße Farbe zum Malen",
    en: "White color for painting",
  },
  {
    name: "Capitano del Popolo",
    de: "Der „Volkshauptmann“",
    en: "The 'people's captain'",
  },
  {
    name: "Carro",
    de: "Wagen, beinhaltet die Rahmen, Papier und Druckformen",
    en: "Trolley, includes the frames, paper and printing forms",
  },
  {
    name: "Cassa",
    de: "Kasten, in dem die Typen aufbewahrt werden",
    en: "Box in which the types are stored",
  },
  {
    name: "Cassettinos",
    de: "Einzelne Boxen in der cassa für die unterschiedlichen Typen",
    en: "Individual boxes in the cassa for the different types",
  },
  {
    name: "Compositoio",
    de: "Schiene zum Zusammensetzen der Typen für eine Buchstabenreihe",
    en: "Rail for assembling the types for a row of letters",
  },
  {
    name: "Condottiere",
    de: "Söldnerführer",
    en: "Mercenary leader",
  },
  {
    name: "Florin",
    de: "Florentische Goldmünze",
    en: "Florentine gold coin",
  },
  {
    name: "Forma",
    de: "Druckform, Rahmen mit den eingesetzten Schienen und Typen",
    en: "Printing form, frame with the rails used and types",
  },
  {
    name: "Fraschetta",
    de: "Mit Papier oder Pergament bezogener Rahmen, am timpano befestigt",
    en: "Frame covered with paper or parchment, attached to the timpano",
  },
  {
    name: "Gesso",
    de: "Feiner Gips zum Herstellen von Abdrücken",
    en: "Fine plaster for making impressions",
  },
  {
    name: "Gonfaloniere",
    de: "Der „Bannerträger“, oberstes Amt von Florenz, wechselte teilweise alle zwei Monate",
    en: "The 'standard bearer', the highest office of Florence, sometimes changed every two months",
  },
  {
    name: "Karmin/Carmine",
    de: "Rote Farbe zum Malen",
    en: "Red color for painting",
  },
  {
    name: "Levatrice",
    de: "Hebamme",
    en: "Midwife",
  },
  {
    name: "Massicot",
    de: "Grüne Farbe zum Malen",
    en: "Green paint for painting",
  },
  {
    name: "Piano",
    de: "Tiegel, bringt den nötigen Druck auf die Form",
    en: "Crucible, brings the necessary pressure to the mold",
  },
  {
    name: "Podesta",
    de: "Der „Stadtvogt“, wurde im Mittelalter in Norditalien gerne mit ortsfremden Personen besetzt",
    en: "The 'town bailiff', was in the Middle Ages in north-ern Italy gladly filled with non-local persons",
  },
  {
    name: "Signoria",
    de: "Der offiziell regierende Rat",
    en: "The official ruling council",
  },
  {
    name: "Stinche",
    de: "Eines der Gefängnisse von Florenz",
    en: "One of the prisons of Florence",
  },
  {
    name: "Strega",
    de: "Hexe",
    en: "Witch",
  },
  {
    name: "Timpano",
    de: "Mit Papier oder Pergament bezogener Rahmen, am carro befestigt",
    en: "Frame covered with paper or parchment, attached to the carro",
  },
  {
    name: "Type",
    de: "Metallene Buchstaben zum Drucken",
    en: "Metal letters for printing",
  },
];

let glossaryOdyssee = [
  {
    name: "Al-Quds",
    de: "arabischer Name für Jerusalem",
    en: "Arabic name for Jerusalem",
  },
  {
    name: "Ash-Shām",
    de: "arabischer Name für Norden, wird u.a. für Damaskus oder Syrien verwandt",
    en: "Arabic name for north, used for Damascus or Syria, among others",
  },
  {
    name: "Beinlinge",
    de: "eher wie einzelne Strumpfhosenbeine als wie eine Hose",
    en: "Leggings",
  },
  {
    name: "Bruche",
    de: "eine Art Unterhose für Männer",
    en: "a kind of underpants for men",
  },
  {
    name: "Gebende",
    de: "Kopfbedeckung, die um Stirn und Kinn gebunden wird",
    en: "",
  },
  {
    name: "Kotte ",
    de: "Oberkleid, wird über dem Untergewand oder Hemd getragen",
    en: "Outer garment, worn over the undergarment or shirt",
  },
  {
    name: "Surcout",
    de: "Mantelartig, über dem Oberkleid getragen",
    en: "Coat-like, worn over the outer garment",
  },
  {
    name: "Hemus",
    de: "heute: Hoher Balkan",
    en: "today: Balkan mountain range",
  },
];

//for sources
let sourcesOdyssee = [
  "A History of the Crusades; Kenneth M. Setton (General Editor), Auszug:",
  "XV: The Second Crusade, pg. 463-512",
  "XVI: The Career of Nur-ad-Din pg. 513-527",
  "Important Dates and Events pg. 622-625",
  "Chronik der Deutschen, 3. Auflage 1995, s. 212-213",
  "Die Geschichte der Kreuzzüge; Steven Runciman, dtv, 5. Auflage Juni 2006",
];

let sourcesMasks = [
  "Luca Landucci: Ein Florentinisches Tagebuch 1450-1516. Eugen Diederichs Verlag 1978",
  "E.L. Steely: Stories of the Italien Artists by Vasari. Chatto, Windus & Duffield 1908",
  "Niccolo Machiavelli: History of Florence and of the affairs of Italy from the earliest times to the death of Lorenzo the Magnificent. Universal Classics Library 1901",
  "Jacob Burckhardt: Die Kultur der Renaissance in Italien. Sonderausgabe für Nikol Verlags­gesell­schaft 2004",
  "Richard C. Trexler: Public Life in Renaissance Florence. Cornell University Press 1991",
  "Peter Burke: Die europäische Renaissance. Verlag C.H. Beck 2005",
  "Volker Reinhardt: Die Renaissance in Italien – Geschichte und Kultur. Verlag C. H. Beck 2007",
  "Eugenio Garin (Herausgeber): Der Mensch der Renaissance. Magnus Verlag 2004",
  "Ingeborg Walter: Der Prächtige. Lorenzo de’ Medici und seine Zeit. Piper Verlag 2005",
  "James Cleugh: Die Medici. Piper Verlag 2003",
  "Chiara Basta: Botticelli. Rizzoli International Publications 2005",
  "Frank Zöllner: Leonardo. Taschen 2005",
  "Brian Richardson: Printing, Writers and Reader in Renaissance Italy. Cambridge University Press 1999",
];

let sourcesAlster = [
  "Arne Cornelius Wasmuth: Hanseatische Dynastien – Alte Hamburger Familien öffnen ihre Alben. Verlag Die Hanse, 2001",
  "Eckart Klessmann: Geschichte der Stadt Hamburg. Hoffmann und Campe, 1988",
  "Gabriele Hofmann: Das Haus an der Elbchaussee – Die Geschichte einer Reederfamilie. Piper ebooks, 2018",
  "Irmtraud Jo Himmelheber: Leben im Biedermeier. Königshausen & Neumann, 2019",
  "Manfred Görtemaker: Deutschland im 19. Jahrhundert – Entwicklungslinien. Leske + Budrich, 1983",
  "Matthias Wegner: Hanseaten – Von stolzen Bürgern und schönen Legenden. Pantheon, 2008",
  "Michael P. Zerres und Christopher Zerres: Entwicklung des Welthandels im 19. Jahrhundert. Rainer Hampp Verlag, 2008",
  "Bernhard Pabst: Die Familie Anckelmann in Hamburg und Leipzig. Gelehrte, Rats- und Handelsherren. Teil 3: Die Familie Esich aus Bremen und die späten Hamburger Anckelmann. Stand 14.01.2007. 3. verbesserte und erweiterte Auflage, Berlin 2007",
  "Thomas Mann, 1901: Buddenbrooks. Verfall einer Familie.",
  "Amalie Sieveking, 1856: Vermächtniß für meine jungen Freundinnen. Gemeinfreies Buch",
  "https://de.wikipedia.org/wiki/Titularabt [13.08.2022]",
  "https://de.wikipedia.org/wiki/Reifrock#Krinoline [20.08.2022]",
  "Blog Koloniales Erbe, 01. März 2019: Opium: Eine Welt verfällt dem Rausch. [11.08.2022]",
  "https://www.wolfgang-amadeus.at/de/Werke_von_Mozart [15.08.2022]",
  "https://de.wikipedia.org/wiki/Polizei_Hamburg [16.08.2022]",
  "Karten: https://www.christian-terstegge.de/hamburg/karten_ereignisse/index.html [August 2022]",
];

let sourcesMind = [
  "Werner Schneiders: Das Zeitalter der Aufklärung. C.H. Beck Wissen, 4. Auflage 2008",
  "Ronald G. Asch: Europäischer Adel in der Frühen Neuzeit. Böhlau Verlag, 2008",
  "Stefan Zweig: Marie Antoinette – Bildnis eines mittleren Charakters. Fischer Taschenbuch Verlag, 27. Auflage 2007",
  "Madame de Staël: Über Deutschland. Insel Taschenbuch, nach der deutschen Erstübertragung 1814, herausgegeben von Monika Bosse, 1985",
  "Amanda Foreman: Die Herzogin von Devonshire – Das Leben einer leidenschaftlichen Frau. Piper, 2003",
  "Ian Kelly: Beau Brummell – The Ultimate Man of Style. Free press, 2006",
  "J. Holland Rose: Der jüngere Pitt. Verlag Hermann Rinn München, 1948",
  "Peter Wende: Englische Könige und Königinnen der Neuzeit. C.H. Beck, 1998",
  "Matthias Henke: Joseph Haydn. Deutscher Taschenbuchverlag (dtv), 2009",
  "Michael Wersin: Faszination Klassik – Eine kleine Musikgeschichte. Reclam, 2008",
  "Gina Kraus: Katharina die Große. Langen Müller, 2006 (Sonderproduktion)",
  "Vincent Cronin. Katharina die Große. Piper, 2. Auflage 2008",
  "Martin Winkler. Zarenlegende. Winkler Verlag 1940 (Neuauflage 1948)",
  "Nikolaus von Sementowsky-Kurilo: Alexander I. von Rußland. Frankfurter Societäts-Druckerei GmbH 1967",
  "Heinz Ohff: Preußens Könige. Piper 9. Auflage 2008",
  "Carolin Philipps: Friederike von Preußen – die leidenschaftliche Schwester der Königin Luise. Piper, ungekürzte Taschenbuchausgabe 2009",
  "Martin Geck: Ludwig van Beethoven. Rowohlt Taschenbuchverlag, 4. Auflage 2008",
  "Volker Ullrich: Napoleon. Rowohlt Taschenbuchverlag, 2006",
  "Fanny Deschamps: Louison oder Die köstliche Stunde. Rowohlt Taschenbuchverlag, 1991",
  "Fanny Deschamps: Louison oder Die Versuchung des Glücks. Rowohlt Taschenbuchverlag, 1994",
  "Peter Prange: Die Philosophin. Knaur Taschenbuchverlag, 2004",
  "Margit Walsø: Geliebter Voltaire. Deutscher Taschenbuchverlag (dtv) 2009",
  "Bettina Hennig: Luise – Königin aus Liebe. Goldmann, 2. Auflage 2009",
  "Annemarie Selinko: Désirée. Kiepenheuer & Witsch, 6. Auflage 2008",
  "Sabine Weiß: Die Wachsmalerin – Das Leben der Madame Tussaud. List Taschenbuch, 2008",
  "Tanja Kinkel: Wahnsinn, der das Herz zerfrißt. Goldmann, 1990",
];

//for timelines
let timelinesMasks = [
  {
    year: "1469",
    event: [
      {
        date: "",
        de: "Venedig gibt Johann von Speyer ein Buchdruck-Monopol über fünf Jahre",
        en: "",
      },
      {
        date: "",
        de: "Leonardo da Vinci kommt mit 17 Jahren zu Andrea del Verrocchio",
        en: "",
      },
      {
        date: "",
        de: "",
        en: "",
      },
    ],
  },
];

let timelinesOdyssee = [
  {
    year: "1144",
    event: [
      {
        date: "12",
        de: "Atabeg Zengi von Mosul erobert die Grafschaft Edessa",
        en: "Atabeg Zengi of Mosul conquers the county of Edessa",
      },
    ],
  },
  {
    year: "1145",
    event: [
      {
        date: "01.12.",
        de: "Papst Eugen III. verliest die Bulle Quantum praedecessores",
        en: "Pope Eugene III reads the bull Quantum praedecessores",
      },
      {
        date: "12",
        de: "Ludwig IX. von Frankreich äußert gegenüber seinem Hof den „Herzenswunsch“, Edessa zu befreien. Es erfolgt heftiger Gegenwind von den französischen Adligen, allen voran Abt Suger of St. Denis. Man entschei­det, die Frage an Bernhard von Clairvaux zu richten, welcher sie an den Papst weiterleitet.",
        en: "Louis IX of France expresses his 'heartfelt wish' to his court to liberate Edessa. There is fierce opposition from the French nobles, above all Abbot Suger of St. Denis. It was decided to address the question to Bernard of Clairvaux, who passed it on to the Pope.",
      },
      {
        date: "",
        de: "",
        en: "",
      },
    ],
  },
];
