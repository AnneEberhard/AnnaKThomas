let menuTitles = [
  { de: "Home", en: "Home", link: "/index.html" },
  { de: "Fantasy", en: "Fantasy", link: "/fantasy.html" },
  { de: "Historisch", en: "Historical", link: "/historical.html" },
  { de: "Novellen", en: "Novellas", link: "/novellas.html" },
  { de: "Über mich", en: "About Me", link: "/about-me.html" }
];

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
        links: [],
      },
      en: {
        title: "Novellas and short stories",
        paragraphs: [
          "It all started with short stories - our start in the world of publishing. I gave away two short stories so that we could try out how everything worked before we ventured into the larger works. I would have preferred to offer them for free, but that wasn't allowed. So they cost the minimum price.",
          "Both published stories have been translated into English.",
          "And as a bonus, there's another story that I wrote down after a dream (but only in German). Like so many stories that I actually dreamt, this one also took on a life of its own.",
        ],
        links: [],
      },
    },
  },
];

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


