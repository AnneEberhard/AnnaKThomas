
function jsonify() {
  const jsonString = JSON.stringify(timelineOdyssee, null, 2);
console.log(jsonString);
}


//for header
let menuTitles2 = [
  { id:"home", de: "Home", en: "Home", link: "/index.html" },
  { id:"fantasy", de: "Fantasy", en: "Fantasy", link: "/fantasy.html" },
  { id:"historical", de: "Historisch", en: "Historical", link: "/historical.html" },
  { id:"novellas", de: "Novellen", en: "Novellas", link: "/novellas.html" },
  { id:"aboutMe", de: "Über mich", en: "About Me", link: "/about-me.html" },
];

//for bottom nav
let navSites2 = [
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
let mainSites2 = [
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
let overview2 = [
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
        internalLink: "/novellas.html",
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

//for BackgroundInfo
let backgroundInfo = [
  {
    backgroundId: "bards",
    languages: {
      de: {
        headline: "Hintergrundinfo für Die Sänger von Thurán – Elfenweg, Sumpfzauber, Weltenringen",
        subheader: "2004-2005",
        paragraphs: [
          "Die Sänger waren die ersten Bücher, die ich jemals fertigschrieb – abgesehen von einigen wenigen Kurzgeschichten vorab. Ich habe unglaublich viel während des Schreibens gelernt, und, so hoffe ich, mich nach und nach auch dabei verbessert.", 
          "Die Geschichte selbst ist sehr alt: Mit circa drei Jahren dachte ich mir Anabellánien aus. Das ist von meiner Mutter so in meinen Kinderalben dokumentiert – wie ich ihr sagte, sie dürfe mich jetzt nicht stören, ich spiele Anna-Land. Einige Jahre später hatte ich eine Brieffreundin, mit der zusammen ich die Geschichte weiterspann: Sie schrieb mir ihre Abenteuer in unserem fernen Land, das damals noch Fantasien hieß (ehrlich, ich kannte die Unendliche Geschichte zu dem Zeitpunkt nicht), und ich schrieb ihr die meinen. Aus dieser Zeit stammen die Schwestern, Acanà, Jann, Derjam, Keito und Rawenzan, sowie Aruna und Caro, die ursprünglich auf das Konto meiner Freundin gingen, und die ich später adaptiert und verändert habe.", 
          "Das alles geschah, bevor ich ernsthaft zu schreiben begann – ich kann noch keine zehn Jahre alt gewesen sein. Mit zwölf entdeckte ich meine Liebe zu Computern und dem geschriebenen Wort, zu dem Erschaffen von Geschichten. Da ich aber nicht besonders ausdauernd war, blieb es bei Kurzgeschichten und meiner sogenannten „Übungsgeschichte“, die ich sicher niemals veröffentlichen werden (sie handelt von Prinzen und Prinzessinnen, es existieren mittlerweile über elf verschiedene Variationen, und ja, was will man von einer nicht gerade frühreifen Zwölfjährigen denn erwarten…).", 
          "Ich hatte immer vor, Acanàs und Janns Geschichte eines Tages aufzuschreiben. Über die Jahre startete ich mehrere Versuchen, spielte mit verschiedenen Perspektiven herum, aber nichts klappte so richtig. Und dann, eines Abends im September 2004, stand ich auf meinem Balkon und dachte plötzlich: Jetzt tue ich es. Jetzt bin ich soweit, jetzt schreibe ich sie auf.",
          "Ich ging hinein, an meinen Computer, fing an zu tippen. Ich hatte da bereits die erste Szene, eine Szene aus dem Mittelteil und das Ende. Was also blieb, war, sechs Jahre Reise zu füllen. Und das tat ich. Die nächsten drei, vier Monate machte ich nichts anderes als zu schreiben (und Vollzeit zu arbeiten, denn Rechnungen müssen schließlich bezahlt werden). Ich träumte von Jann und Acanà, ich lebte praktisch in Janns Kopf. Ich schrieb einen ganzen Urlaub durch, und die Freundin, mit der ich im Urlaub war, lachte und sagte – du schreibst auch noch einen zweiten und dritten Teil.", 
          "Dann seufzte ich immer nur und sagte – lass mich erst mal diesen fertigstellen. Ich habe noch nie etwas so Großes fertiggestellt.", 
          "Kurz vor Weihnachten 2004 war ich fertig und über alle Maßen stolz. Ich ließ drei Exemplare im Copyshop ausdrucken und binden (und sie passten gerade so in die Spiralbindung, super-unhandliche Dinger). Ich gab sie Freunden und Familie zum Lesen. Ich kontaktierte Verlage. Und als das Neue Jahr kam (und ich schon zwei Absagen kassiert hatte), wollte ich eine andere Geschichte zu Ende schreiben, meine ewige, nicht-enden-wollende Übungsgeschichte.", 
          "Aber ich konnte nicht. Ich konnte einfach nicht – Jann und Acanà ließen mich nicht los. Die Geschichte war noch nicht zu Ende. Ich hatte noch so viele Ideen!",
          "Und so tat ich das, was meine Freundin mir prophezeit hatte: Ich schrieb einen zweiten und dritten Teil. Das dauerte noch einmal jeweils vier Monate, so dass ich im September 2005 voller Stolz meinen letzten Satz schrieb und dachte – das war meine Fantasy-Geschichte. Jetzt ist sie auserzählt, und jetzt konzentriere ich mich voll und ganz auf historische Romane. Nie wieder werde ich ein zweites Thurán schaffen, und Jann und Acanà haben ihren Frieden verdient.", 
          "So ganz hat sich das nicht bewahrheitet – ich habe zwar kein zweites Thurán geschaffen, aber Urban Fantasy für mich entdeckt. Und ob ich mit Mia schon so fertig bin, weiß ich ebenfalls noch nicht.", 
          "Was ich weiß: Dies war mein erstes Baby. Es sind immer noch eine Menge Erstlingsfehler drin, dessen bin ich mir bewusst. Ich habe versucht, auszumerzen, was ging, aber es ist eben ein Erstlingswerk und manches, wie zum Beispiel die wechselnden Perspektiven, habe ich erst spät eingesehen.", 
          "Doch ohne die Sänger, ohne diesen persönlichen Erfolg, eine derart lange Geschichte tatsächlich fertiggestellt zu haben, hätte ich vermutlich niemals meine historischen Romane geschrieben, mir niemals zugetraut, überhaupt etwas zu schreiben, was eines Tages außer mir noch jemand lesen kann.",
          "Und so, wie die Sänger meine Schreiblust bestärkten, triggerten sie auch die Idee, etwa zu veröffentlichen. Auf meine initialen Bewerbungen hatte ich nur Ablehnungen bekommen und beschloss damals – 2005 – dass ich mir den Stress einfach nicht antun wollte, und außerdem, die Sänger waren mein und ich schrieb sowieso immer noch daran rum.", 
          "Zehn Jahre später gab es E-Books, und es war plötzlich machbar, etwas ohne einen großen Verlag oder sehr viel Geld im Rücken zu veröffentlichen. Es dauerte natürlich noch etwas – Cover finden, Titelchecks durchführen (und sich von liebgewordenen Titeln verabschieden, weil schon vergeben), lektorieren und hundert andere Kleinigkeiten, die der neue Mini-Verlag initiierte. Wir starteten mit zwei Kurzgeschichten einen Testlauf, bevor wir endlich, im Herbst 2017, die drei Teile hochluden – ohne Karten, weil wir einfach nicht rausfinden konnten, wie das ging, und weil die Zeit inzwischen aus anderen Gründen drängte.", 
          "Ich hatte nicht vor, danach jemals wieder in die Sänger reinzusehen – ich hatte sie losgelassen, und nun sollte es gut sein. Aber irgendwann tat ich es doch, war entsetzt von den Fehlern, die ich fand, und beschloss, dass dies nicht so bleiben konnte.", 
          "Deshalb gibt es jetzt eine zweite Auflage, und inzwischen sogar eine dritte, weil der Verlag gewechselt hat."],
      },
      en: {
        headline: "Background Information for The Bards of Thurán – Elven Way, Swamp Magic, World Struggle",
        subheader: "2004-20052",
        paragraphs: [
          "The Bards were the first books I ever finished writing - apart from a few short stories beforehand. I learnt an incredible amount while writing them and, I hope, gradually improved in the process.", 
          "The story itself is very old: I thought up Anabellánien when I was about three years old. This is documented by my mum in my childhood albums - as I told her not to disturb me now, I was playing Anna Land. A few years later, I had a pen pal with whom I continued the story: she wrote to me about her adventures in our distant land, which was still called Fantasia at the time (honestly, I didn't know The Neverending Story at the time), and I wrote to her about mine. The sisters, Acanà, Jann, Derjam, Keito and Rawenzan, as well as Aruna and Caro, who were originally written by my friend, and which I later adapted and changed, date from that time.", 
          "This all happened before I started writing seriously - I couldn't have been ten years old. At twelve, I discovered my love for computers and the written word, for creating stories. However, as I wasn't particularly persistent, I stuck to short stories and my so-called 'practice story', which I will certainly never publish (it's about princes and princesses, there are now over eleven different variations, and yes, what do you expect from a not exactly precocious twelve-year-old...).", 
          "I always intended to write down Acanà and Jann's story one day. Over the years I made several attempts, played around with different perspectives, but nothing really worked out. And then, one evening in September 2004, I was standing on my balcony and suddenly thought: Now I'm going to do it. Now I'm ready, now I'm going to write them down.",
          "I went inside, got on my computer and started typing. I already had the first scene, a scene from the middle section and the ending. So what remained was to fill six years of travelling. And that's what I did. For the next three or four months, I did nothing but write (and work full time, because bills have to be paid). I dreamt about Jann and Acanà, I practically lived in Jann's head. I wrote through an entire vacation, and the friend I was on vacation with laughed and said - you'll write a second and third part too.", 
          "Then I always just sighed and said - let me finish this one first. I've never finished anything this big before.", 
          "Shortly before Christmas 2004, I was finished and extremely proud. I had three copies printed and bound in the copy shop (and they just fitted into the spiral binding, super-awkward things). I gave them to friends and family to read. I contacted publishers. And when the New Year came (and I had already received two rejections), I wanted to finish another story, my eternal, never-ending practice story.", 
          "But I couldn't. I just couldn't - Jann and Acanà wouldn't let me go. The story wasn't over yet. I still had so many ideas!",
          "And so I did what my friend had predicted: I wrote a second and third part. That took another four months each, so that in September 2005 I proudly wrote my last sentence and thought - that was my fantasy story. Now it's finished and I'm concentrating fully on historical novels. I will never write another Thurán, and Jann and Acanà deserve their peace.", 
          "That hasn't quite materialised - I haven't created a second Thurán, but I have discovered Urban Fantasy for myself. And I'm not sure if I'm quite finished with Mia yet either.", 
          "What I do know is that this was my first baby. There are still a lot of first-time mistakes in it, I'm aware of that. I tried to eradicate what I could, but it's a first work and some things, such as the changing perspectives, I only realised late on.", 
          "But without my bards, without this personal success of having actually completed such a long story, I would probably never have written my historical novels, never have dared to write anything at all that anyone but me would be able to read one day.",
          "And just as the bards encouraged my desire to write, they also triggered the idea of publishing. I had only received rejections on my initial applications and decided back then - in 2005 - that I simply didn't want to put myself through the stress, and besides, the bards were mine and I was still re-writing anyway.", 
          "Ten years later, there were e-books, and it was suddenly feasible to publish something without a big publisher or a lot of money behind it. Of course, it still took some time - finding covers, carrying out title checks (and saying goodbye to beloved titles because they were already taken), editing and a hundred other little things that the new mini-publishing house initiated. We started a test run with two short stories before finally uploading the three parts in autumn 2017 - without maps, because we just couldn't figure out how to do it and because time was pressing for other reasons.", 
          "I had no intention of ever looking into the singers again after that - I had let them go and now it should be good. But at some point I did, was horrified by the mistakes I found and decided that it couldn't stay that way.", 
          "That is why there is now a second edition, and menawhile even a third, due to changing publishers."
        ],
      },
    },
  },
  {
    backgroundId: "children",
    languages: {
      de: {
        headline: "Hintergrundinfo für Die Kinder der Engel",
        subheader: "2015-2017",
        paragraphs: [
          "Zwischen 2008 und 2014 habe ich nicht besonders viel geschrieben. Vielleicht brauchte ich eine Pause. Vielleicht war auch der historische Roman, den ich damals am Wickel hatte, einfach zu kompliziert geworden und langweilte sogar mich. Ich legte ihn beiseite (und da liegt er immer noch).", 
          "2015 war ich mit einem Freund bei einer Ballett-Aufführung und sah einen blonden, zarten Tänzer, der seinen eigenen Tod tanzte, eine wunderbare, berührende Darstellung. In diesem Moment wurde in meinem Kopf Flo geboren, und der Prolog der Dämonenjäger. Ich war mir zunächst nicht ganz sicher, wohin ich mit dieser Geschichte wollte, und sie zu schreiben war alles andere als leicht. Zum einen war so viel Zeit vergangen seit meinem letzten, fertiggestellten Projekt, und zum anderen fiel es mir schwer, mich auf nur eine, maximal zwei Perspektiven zu beschränken, was ich mir seit der Fertigstellung der Sänger (und dem Einsehen, wie verwirrend und nervig das für einen Leser sonst ist) angewöhnt hatte. Nach vielen Diskussionen mit Freunden und Familie fand ich diesen Weg. Ich mache mir immer noch zu viele Sorgen, dass die Dämonenjäger zu philosophisch geworden sind – aber sie haben etwas geschafft, was ich lange verloren hatte: Ich schrieb wieder, und zwar mehr als nur Kurzgeschichten. Ich brauchte gut zwei Jahre dafür und stellte sie im September 2017 fertig, als Noel bereits durch meinen Kopf kreiste.", 
          "Ich bin froh, dass ich sie beenden konnte, bevor diese nächste Phase begann." 
        ],
      },
      en: {
        headline: "Background Information for The Children of Angels",
        subheader: "2015-2017",
        paragraphs: [
          "I didn't write very much between 2008 and 2014. Maybe I needed a break. Maybe the historical novel I had on my plate at the time had simply become too complicated and bored even me. I put it aside (and it's still there).", 
        "In 2015, I was at a ballet performance with a friend and saw a blonde, delicate dancer dancing his own death, a wonderful, touching performance. At that moment, Flo was born in my head, and the prologue of Demon Hunters. I wasn't quite sure where I wanted to go with this story at first, and writing it was anything but easy. For one thing, so much time had passed since my last completed project, and for another, I found it difficult to limit myself to just one, or at most two, perspectives, something I'd become accustomed to since finishing The Singers (and realising how confusing and annoying it is for a reader otherwise). After much discussion with friends and family, I found this way. I still worry too much that Demon Hunters has become too philosophical - but it did accomplish something I'd long lost: I was writing again, and more than just short stories. It took me a good two years and I finished them in September 2017, when Noel was already running through my head.", 
        "I'm glad I was able to finish it before this next phase began."],
      },
    },
  },
  {
    backgroundId: "elves",
    languages: {
      de: {
        headline: "Hintergrundinfo für Von Elven und Wölfen",
        subheader: "2017-2018",
        paragraphs: [
          "Die Bücher der Reihe 'Von Elfen und Wölfe' enthalten die Geschichte, die ich zu schreiben begann, als mir klar wurde, dass meine Mutter bald sterben würde, und die ich in dem Jahr nach ihrem Tod fertigstellte. Gerade deshalb sind sie nicht düster. Ich habe es schon früher in meinen Nachworten gesagt - ich brauchte das. Ich brauchte die Offenheit von Lucie, die Unbeschwertheit von Bina und die Nachdenklichkeit von Lena in einer ansonsten furchtbar bitteren Zeit. Viel mehr kann ich nicht sagen, außer dass ich einige Bonuskapitel habe, die es nicht in das endgültige Buch geschafft haben. Ich teile sie hier - mit einer Warnung: Sie sind natürlich voller Spoiler für diejenigen, die noch nichts gelesen haben."
        ],
      },
      en: {
        headline: "Background Information for Of Elves and Wolves",
        subheader: "2017-2018",
        paragraphs: [
          "The books that are part of the 'Of Elves and Wolves' series contain the story I started writing when I realised that my mother would soon die, and which I completed in the year after her death. That is precisely why they are not gloomy. I've said it before in my epilogues - I needed this. I needed Lucie's candour, Bina's light-heartedness and Lena's thoughtfulness in an otherwise terribly bitter time. There's not much more I can say, except that I have some bonus chapters that didn't make it into the final book. I'm sharing them here - with a warning: they are, of course, full of spoilers for those who haven't read anything yet."
      ],
      },
    },
  },
  {
    backgroundId: "odyssee",
    languages: {
      de: {
        headline: "Hintergrundinfo für Irrfahrt ins Gelobte Land",
        subheader: "2006-2007",
        paragraphs: [
          "Wie so viele Geschichten begann die Irrfahrt mit einer einzelnen Szene in meinem Kopf: Die Flucht der Kinder nach Laodikea. Ich wusste, ich wollte einen historischen Roman schreiben, etwas über die Zeit der Kreuzfahrer, und über das Überleben in einem vollkommen fremden Land. Mehr wusste ich nicht.", 
          "2006 war das bis dahin anstrengendste Jahr meines Lebens. Ich arbeitete mich ins Burnout, hielt die Hand meiner Großmutter, als sie starb, kündigte meinen Job, zog um, machte mehrere Prüfungen, wurde zur Tante, begann ein Aufbaustudium und absolvierte zwei Praktika. Ich sagte mir die ganze Zeit, jetzt habe ich keine Zeit zu schreiben, jetzt ist es ungünstig.", 
          "Max und Katja waren nicht meiner Meinung. Sie wollten nicht warten.", 
          "Da dies mein erster historischer Roman war, musste ich recherchieren. Ein wenig hatte ich das ja schon für die Sänger getan, aber dies war natürlich etwas ganz anderes. Dem Internet, dem Gutenberg-Projekt und vielen Autoren der Sekundärliteratur verdanke ich ein hoffentlich einigermaßen realistisches Bild der damaligen Zeit. Aber wie ich im Nachwort geschrieben habe, habe ich durchaus auch konträre Ansichten gefunden, vor allem bei einem solchen Thema, das auch heute wieder politisch brisant ist: dem Konflikt zwischen Ost und West.",
          "Ich hoffe, niemandem allzu sehr auf die Füße getreten zu haben.",
          "Am Ende ging es mir jedoch vor allem um meine Geschichte, die Geschichte von Max und Katja. Es ist wieder eine Geschichte über das Erwachsenwerden unter widrigen Umständen, um das Finden eines sicheren Hafens. Sie zu verfassen unterschied sich sehr von Fantasy – ich hatte einen Rahmen. Nachdem ich einmal den Zweiten Kreuzzug als den meinen identifiziert hatte, machte ich mir eine Zeitleiste der Ereignisse und webte meinen Plot herum. Es war demzufolge ein anderes Schreiben als zuvor. Ich hatte weitaus weniger Freiheiten, aber ich hatte auch sehr viel mehr Hilfen. Ich musste mir keine ganze Welt ausdenken, und viele Ereignisse waren einfach gesetzt. Am Anfang war es ungewohnt, machte aber letztendlich unheimlich viel Spaß. Und als ich damit fertig war, hatte ich schon die Idee für die Masken…"],
      },
      en: {
        headline: "Background Information for Odyssee to the Promised Land",
        subheader: "2022",
        paragraphs: [
          "Like so many stories, the odyssey began with a single scene in my head: the children's escape to Laodicea. I knew I wanted to write a historical novel, something about the time of the Crusaders, and about survival in a completely foreign country. That was all I knew.", 
          "2006 was the most stressful year of my life so far. I worked myself into burnout, held my grandmother's hand when she died, quit my job, moved house, took several exams, became an aunt, started a postgraduate degree and completed two internships. I told myself all the time, now I don't have time to write, now is not a good time.", 
          "Max and Katja didn't agree with me. They didn't want to wait.", 
          "As this was my first historical novel, I had to do some research. I had already done a bit of that for the singers, but this was of course something completely different. Thanks to the Internet, the Gutenberg project and many authors of secondary literature, I hope I have a reasonably realistic picture of the period. But as I wrote in the epilogue, I have also found contrary views, especially on a subject that is politically explosive again today: the conflict between East and West.",
          "I hope I haven't stepped on anyone's toes too much.",
          "In the end, however, I was mainly interested in my story, the story of Max and Katja. It's another story about growing up under adverse circumstances, about finding a safe harbour. Writing it was very different from writing fantasy - I had a framework. Once I'd identified the Second Crusade as mine, I made a timeline of events and wove my plot around it. As a result, it was different writing than before. I had far less freedom, but I also had a lot more help. I didn't have to think up a whole world, and many events were simply set. It was unusual at first, but in the end it was a lot of fun. And when I'd finished, I already had the idea for the masks..."],
      },
    },
  },
  {
    backgroundId: "masks",
    languages: {
      de: {
        headline: "Hintergrundinfo für Die Masken von Florenz",
        subheader: "2007-2008",
        paragraphs: [
          "Auch mein Renaissanceroman begann in meinem Kopf mit einer Szene: Der Moment, in dem Susanna ihre Maske ablegt und Luca in die Schatten folgt. Ich wusste – Karneval in Italien, ich wusste Renaissance. Die Entscheidung für Florenz fiel rasch, weil ich mich schon seit längerem für die Medici und die Kunst ihrer Zeit interessierte. Und dann kam auch noch Leonardo hinzu, und Botticelli, und ganz schnell stand der Zeitrahmen.", 
          "Da diese Zeit weitaus besser dokumentiert ist als das zwölfte Jahrhundert, hatte ich weitaus engere Vorgaben. Es erleichterte allerdings auch vieles, weil ich manche Dinge einfach nur aus Giannis Perspektive nacherzählen musste. Letztendlich wurde aber gerade dieses Buch am Ende schwer für mich – es zu Ende zu bringen hat mich eine Menge an Disziplin gekostet; vielleicht, weil ich nicht so frei war, wie ich es gerne gewesen wäre, oder vielleicht, weil es mein fünftes Buch innerhalb von weniger als vier Jahren war. Zwischendurch zog ich erneut um, begann einen neuen Job, machte meine Abschlussprüfung vom Aufbaustudium und war irgendwann einfach müde – schreibmüde. 2008 war ich mit den Masken fertig, und danach gab es eine lange, lange Pause.", 
          "Wie bei der Irrfahrt startete ich damals mit meinen Masken keinen Versuch, einen Verlag für mich zu gewinnen – man hatte meine Sänger abgelehnt, und ich war zufrieden, einfach nur für mich zu schreiben. Aber nachdem wir die Sänger bei Amazon hochgeladen hatten und alles ausprobiert war, alles erkundet, war dies der nächste logische Schritt. Die Masken folgten. Sie sind das letzte Buch, das meine Mutter Korrektur las.", 
          ],
      },
      en: {
        headline: "Background Information for The Masks of Florence",
        subheader: "2007-2008",
        paragraphs: [
          "My Renaissance novel also began with a scene in my head: the moment when Susanna takes off her mask and follows Luca into the shadows. I knew - Carnival in Italy, I knew Renaissance. I quickly decided in favour of Florence because I had long been interested in the Medici and the art of their time. And then Leonardo and Botticelli were added to the mix, and the time frame was quickly finalised.", 
          "As this period is much better documented than the twelfth century, I had much tighter guidelines. However, it also made a lot of things easier because I simply had to retell some things from Gianni's perspective. Ultimately, though, this book in particular ended up being difficult for me - finishing it took a lot of discipline; perhaps because I wasn't as free as I would have liked to be, or perhaps because it was my fifth book in less than four years. In between, I moved again, started a new job, took my final exams for my postgraduate degree and at some point I was simply tired - tired of writing. I finished Masks in 2008 and then took a long, long break.", 
          "As with the odyssey, I made no attempt to get a publisher for my masks at the time - they had rejected my bards and I was content to just write for myself. But once we had uploaded the singers to Amazon and tried everything out, explored everything, this was the next logical step. The masks followed. They are the last book my mum proofread.", 
          ],
      },
    },
  },  
  {
    backgroundId: "alster",
    languages: {
      de: {
        headline: "Hintergrundinfo für Alsterdiamanten",
        subheader: "2022",
        paragraphs: [
          "Diese Geschichte kursierte schon länger in meinem Kopf, aber bevor ich sie schreiben konnte, hatte ich mir geschworen, den Rokoko-Roman von Niklas zu beenden – und das dauerte, mit all den Verzögerungen, bis zum Ende 2021. Dann gab es noch ein paar andere Projekte, die dazwischenfunkten.", 
        "Doch danach war es endlich an der Zeit für diese Zwei.", 
        "Die Geschichte von Leander und der Familie Achtmann war da bereits vier Jahre in meinem Kopf, und auch auf Hamburg als Ort hatte ich mich irgendwann festgelegt – was jedoch fehlte, war die genaue Zeit. Ich wollte nicht in die Zeit der Hanse – zu lange her – aber auch nicht in die Gründerzeit, denn dazu gibt es schon so viel. Bei meinen Recherchen stolperte ich schließlich über den großen Hamburger Brand von 1842, und damit war die Periode klar. Und dann fand ich auch noch ein wunderbares Buch, das sehr detailliert und quellenbezogen die Geschichte der Familie Godeffroy darstellt, und schon war der Grundstein für die Rahmenhandlung gelegt.", 
        "Dieses Buch zu schreiben ging tatsächlich erstaunlich schnell, vor allem, wenn man in Betracht zieht, dass der historische Roman davor mit diversen Unterbrechungen zwölf Jahre gebraucht hat. Nach wenigen Wochen hatte ich das zu Papier gebracht, was seit Jahren in meinem Kopf kreiste. Meine Erstleser waren flott, mein Korrektorat ebenfalls. Und deshalb kommen die Alsterdiamanten vor dem Rokoko-Roman heraus – der jedoch, so hoffe ich, nicht mehr allzu lange auf sich warten lassen wird."],
      },
      en: {
        headline: "Background Information for Alster Diamonds",
        subheader: "2022",
        paragraphs: [
          "This story had been circulating in my head for a while, but before I could write it, I had vowed to finish Niklas' rococo novel - and that took until the end of 2021, with all the delays. Then there were a few other projects that interfered.", 
          "But then it was finally time for these two.", 
          "The story of Leander and the Achtmann family had already been in my head for four years, and I had also decided on Hamburg as the location at some point - but what was missing was the exact time. I didn't want to go back to the time of the Hanseatic League - too long ago - but I didn't want to go back to the Gründerzeit either, because there's already so much about it. During my research, I finally stumbled across the great Hamburg fire of 1842, and so the periode was clear. And then I also found a marvellous book that describes the history of the Godeffroy family in great detail and with reference to the sources, and the foundation stone for the framework story was laid.", 
          "Writing this book actually went surprisingly quickly, especially when you consider that the historical novel that preceded it took twelve years with various interruptions. After just a few weeks, I had put on paper what had been circling in my head for years. My first readers were quick, as was my proofreader. And that's why the Alster Diamonds will be published before the Rococo novel - which, I hope, won't be too long in coming."],
      },
    },
  },
  {
    backgroundId: "mind",
    languages: {
      de: {
        headline: "Hintergrundinfo für Der Geist in Brand",
        subheader: "2010 - 2022",
        paragraphs: [
          "Mitte 2010 zog ich jobbedingt in eine neue Stadt und schaffte es gerade noch vorher, die Masken zu beenden. Ich hatte schon die Idee für eine neue Geschichte. Das Rokoko und die Zeit vor und um Napoleon interessierte mich seit langem. Ich wollte diese Zeit aus der Sicht eines Sonnenkindes schreiben, eines Unkomplizierten - einer, der laut den Worten seines Mentors auszog, die Welt mit Charme zu erobern, so wie es Napoleon später mit Gewalt tun würde. Niklas und sein Ziehvater, der Baron, waren recht schnell geboren, auch Greta und die Hintergrundgeschichte des Barons. Aber der Umzug, die neue Stadt, neue Leute, all das warf mein Leben mehr durcheinander, als dies bei meinen vorherigen Umzügen und Jobwechseln der Fall gewesen war. Bis London schaffte ich die Geschichte noch, dann brach ich ab.", 
          "Über die folgenden zwölf Jahre nahm ich sie mir immer mal wieder vor, schrieb immer mal wieder ein Kapitel – Beau Brummell brachte neuen Schwung hinein, Colette, dann war meine Reisegesellschaft in Russland und ich steckte fest. Statt diese Geschichte weiterzuschreiben – die ich inzwischen nicht einmal mehr lesen mochte, so oft hatte ich sie angefasst – konzentrierte ich mich auf neue Projekte: Die Kinder der Engel entstanden, dann in sehr schneller Folge die drei Bände zu Von Elfen und Wölfen. Und dann widmete ich mich ganz anderen Projekten, bevor mich eine Erkrankung Mitte 2021 aus der Bahn warf.", 
          "Halb sitzend, halb liegend kann man ganz hervorragend Bücher schreiben, insbesondere, wenn Fernsehen langweilt. Ich brachte meine anderen Projekte zu Ende und schwor mir, bevor ich etwas Neues anfange (und die Alsterdiamanten waren schon in meinem Kopf), beende ich diese Geschichte. Sie war vollständig geplottet und musste „nur“ noch aufgeschrieben werden, und das würde ich ja wohl schaffen.", 
          "Tat ich auch, mit purer Willenskraft. Silvester 2021 schrieb ich die letzten Sätze, und obwohl ich dieses Ende im Sommer noch einmal kräftig redigieren musste und komplette Teile vom Anfang strich, war Niklas im Herbst 2022 endlich am Ziel. Ich war sehr unsicher, ob ich das Mammutprojekt veröffentlichen sollte, hatte überhaupt kein Gefühl mehr für die Qualität. Aber meine Erstleser bekräftigten mich, meine Lektorin ebenfalls – und so ist er jetzt flügge, der Geist in Brand, mein Krautjunker Niklas und seine Rokokowelt."],
      },
      en: {
        headline: "Background Information for The Mind on Fire ",
        subheader: "2022",
        paragraphs: [
          "In mid-2010, I moved to a new city for work and just managed to finish the masks before then. I already had an idea for a new story. I had been interested in the Rococo period and the time before and around Napoleon for a long time. I wanted to write this period from the point of view of a child of the sun, an uncomplicated person - one who, according to his mentor, set out to conquer the world with charm, just as Napoleon would later do with force. Niklas and his foster father, the Baron, were born quite quickly, as was Greta and the Baron's backstory. But the move, the new city, new people, all this threw my life more into disarray than my previous moves and job changes had done. I made it as far as London, then I dropped out.", 
          "Over the next twelve years, I revisited it from time to time, wrote a chapter every now and then - Beau Brummell gave it new impetus, Colette, then my travelling party was in Russia and I was stuck. Instead of continuing to write this story - which I didn't even want to read anymore, I had touched it so often - I concentrated on new projects: The Children of Angels was written, then the three volumes of Of Elves and Wolves in very quick succession. And then I devoted myself entirely to other projects before an illness threw me off track in mid-2021.", 
          "Half sitting, half lying down is a great way to write books, especially when TV is boring. I finished my other projects and swore to myself that before I started something new (and the Alster diamonds were already in my head), I would finish this story. It was fully plotted and 'just' needed to be written down, and I could probably manage that.", 
          "I did, with sheer willpower. I wrote the last sentences on New Year's Eve 2021, and although I had to edit the end again in the summer and cut entire sections from the beginning, Niklas finally reached his goal in autumn 2022. I was very unsure whether I should publish the mammoth project and had no feeling for the quality at all. But my first readers reassured me, as did my editor - and so he is now fledged, The Mind on Fire, my Krautjunker Niklas and his rococo world."],
      },
    },
  }
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
let glossaryMasks2 = [
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

let glossaryOdyssee2 = [
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
    en: "Headgear that is tied around the forehead and chin",
  },
  {
    name: "Kotte",
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
    en: "today: Balkan Mountains, Stara Planina",
  },
];

//for sources
let sourcesOdyssee2 = [
  "A History of the Crusades; Kenneth M. Setton (General Editor), Auszug: XV: The Second Crusade, pg. 463-512 / XVI: The Career of Nur-ad-Din pg. 513-527 / Important Dates and Events pg. 622-625",
  "An Arab-Syrian Gentleman & Warrior in the Period of the Crusades. Memoirs of Usmamah Ibn-Munquid. Translated by Philip K. Hitti, Columbia University Press 2000",
  "Byzantium – The Surprising Life of a Medieval Empire. Judith Herrin, Penguin Books 2007",
  "Chronik der Deutschen, 3. Auflage 1995, s. 212-213",
  "Die Geschichte der Kreuzzüge; Steven Runciman, dtv, 5. Auflage Juni 2006",
  "Die Kreuzzüge. Vom Krieg im Morgenland bis zum 13. Jahrhundert (Origi-nal: Historical Atlas of the Crusades). Angus Konstam; tosa 2005",
  "Kaufleute und Bankiers im Mittelalter. Jacques LeGoff. Wagenbach 2005",
  "Lebendiges Mittelalter. dtv 3rd Edition 1996",
  "Saladin – Der Sultan und seine Zeit 1138-1193. Hannes Möhring, C.H. Beck 2005",
];

let sourcesMasks2 = [
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

let sourcesAlster2 = [
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

let sourcesMind2 = [
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
let timelineHeaders = [{
  bookId: 'odyssee',
  de: 'Zeittafel des Zweiten Kreuzzuges (Auszug)',
  en: 'Timeline of the Second Crusade (excerpt)'
},
{
  bookId: 'masks',
  de: 'Zeittafel der historischen Erignisse',
  en: 'Timetable of historical events'
},
]

let timelineMasks = [
  {
    year: "1469",
    event: [
      {
        date: "",
        de: "Venedig gibt Johann von Speyer ein Buchdruck-Monopol über fünf Jahre",
        en: "Venice grants Johann of Speyer a monopoly on book printing for five years",
      },
      {
        date: "",
        de: "Leonardo da Vinci kommt mit 17 Jahren zu Andrea del Verrocchio",
        en: "Leonardo da Vinci comes to Andrea del Verrocchio at the age of 17",
      },
      {
        date: "7.2.",
        de: "Turnier für Lorenzo unter dem Namen der Lucrezia Donati (verheiratet mit Niccoló Ardinghelli), auf der Piazza San Croce, offiziell für die Verlobung mit Clarice Orsini",
        en: "Tournament for Lorenzo under the name of Lucrezia Donati (married to Niccoló Ardinghelli), in Piazza San Croce, officially for the engagement to Clarice Orsini",
      },
      {
        date: "3.5.",
        de: "Geburt Niccolò Machiavelli",
        en: "Birth of Niccolò Machiavelli",
      },
      {
        date: "27.5.",
        de: "Giuliano geht nach Rom, um Clarice zu holen (zusammen mit Gentile Becchi, Pierfrancesco de’ Medici, Guglielmo Pazzi, Bernardo Rucellai",
        en: "Giuliano goes to Rome to fetch Clarice (together with Gentile Becchi, Pierfrancesco de' Medici, Guglielmo Pazzi, Bernardo Rucellai",
      },
      {
        date: "4.6.",
        de: "Hochzeit Lorenzo mit Clarice, drei Tage lang Feier (1. Tag Sonntag, Braut auf dem Rücken eines Schlachtrosses (Geschenk König von Neapel) aus Palazzo Alessandri zu Palazzo Medici. Dienstagmorgen noch Messe)",
        en: "Marriage of Lorenzo to Clarice, three days of celebration (1st day Sunday, bride on the back of a warhorse (gift from the King of Naples) from Palazzo Alessandri to Palazzo Medici. Tuesday morning still mass)",
      },
      {
        date: "8.10.",
        de: "Tod Filippo Lippis",
        en: "Death of Filippo Lippi",
      },
      {
        date: "2.12.",
        de: "Piero il Gottoso de' Medici stirbt (53j); prachtvolles Begräbnis, Andrea del Verocchio, der gerade den bronzenen David für den Bargello vollendet hat, macht die Grabmalgestaltung.",
        en: "Piero il Gottoso de' Medici dies (53); magnificent funeral, Andrea del Verocchio, who has just completed the bronze David for the Bargello, designs the tomb.",
      },
      {
        date: "4.12.",
        de: "Lorenzo übernimmt die Macht, mit Tommaso Soderini zur Seite",
        en: "Lorenzo takes over, with Tommaso Soderini at his side",
      },
      ],
  },
  {
    year: "1470",
    event: [
      {
        date: "",
        de: "Johann von Speyer stirbt während des Druckes von Augustinus' De Civitate Dei",
        en: "John of Speyer dies during the printing of Augustine's De Civitate Dei",
      },  {
        date: "",
        de: "Bernardo Narci bemächtigt sich Pratos; plant mit Dietisalvi Neroni  gegen Florenz vorzugehen. Die Signoria von Florenz sendet Truppen aus, aber noch vor ihrem Eintreffen ist der podesta von Prato (Cesare Petrucci) wieder Herr Herr der Lage",
        en: "Bernardo Narci seizes Prato; plans to take action against Florence with Dietisalvi Neroni. The Signoria of Florence sends troops, but before they arrive, the podesta of Prato (Cesare Petrucci) is back in control of the situation",
      },  {
        date: "",
        de: "Dreibundtreffen in Florenz",
        en: "Triple Alliance meeting in Florence",
      },  {
        date: "22.12.",
        de: "allgemeine Liga unter den italienischen Mächten",
        en: "general league among the Italian powers",
      },
    ],
  },
  {
    year: "1471",
    event: [
      {
        date: "",
        de: "Galeazzo Maria Sforza und Bona von Savoyen im Frühling in Florenz, zu Gast in der Via Larga",
        en: "Galeazzo Maria Sforza and Bona of Savoy in spring in Florence, guests in the Via Larga",
      },{
        date: "",
        de: "Bruch der Fastenzeit, Brand in Santo Spirito, Kirche brennt bis auf die Grundmauern nieder",
        en: "Breaking of Lent, fire in Santo Spirito, church burns to the ground",
      },{
        date: "23.4.",
        de: "Giuliano in Mailand",
        en: "Giuliano in Mailand",
      },{
        date: "26.5.",
        de: "Luca Landucci kauft vom ersten Zucker, den Florenz aus Madeira bekommt",
        en: "Luca Landucci buys the first sugar Florence gets from Madeira",
      },{
        date: "27.5.",
        de: "Die Goldene Kuppel wird auf Santa Maria del Fiore gesetzt",
        en: "The golden dome is placed on Santa Maria del Fiore",
      },{
        date: "30.5.",
        de: "Tedeum in Santa Maria del Fiore",
        en: "Tedeum in Santa Maria del Fiore",
      },{
        date: "",
        de: "Im Sommer: Innenpolitische Reformen: Rat der Einhundert, Großer Rat, otto di guardia",
        en: "In summer: domestic reforms: Council of One Hundred, Grand Council, otto di guardia",
      },{
        date: "26.7.",
        de: "Tod Papst Paul II",
        en: "Death of Pope Paul II",
      },{
        date: "9.8.",
        de: "Francesco della Rovere zu Papst Sixtus IV. gewählt, bis Weihnachten zwei Neffen zu Kardinälen ernannt",
        en: "Francesco della Rovere elected Pope Sixtus IV, two nephews appointed cardinals by Christmas",
      },{
        date: "",
        de: "Buchdruck beginnt in Florenz",
        en: "Letterpress printing begins in Florence",
      },{
        date: "",
        de: "Taddeo Manfredi verkauft Imola an Mailand, Florenz protestiert.",
        en: "Taddeo Manfredi sells Imola to Milan, Florence protests.",
      },
    ],
  },
  {
    year: "1472",
    event: [
      {
        date: "15.2.",
        de: "Geburt Piero des Unglücklichen, Sohn von Lorenzo",
        en: "Birth of Piero the Unfortunate, son of Lorenzo",
      }, {
        date: "",
        de: "Johann von Köln arbeitet mit Wendelin von Speyer in Venedig",
        en: "Johann of Cologne works with Wendelin of Speyer in Venice",
      }, {
        date: "",
        de: "Lorenzo schafft Amt des Volkshauptmannes ab",
        en: "Lorenzo abolishes the office of governor",
      }, {
        date: "",
        de: "Signoria von Volterra prüft Vertrag bzgl. Konzession einer Handelsgesellschaft aus Siena bzgl. Alaun in Volterra und befindet ihn für ungesetzlich. Die Florentiner Gesellschaft wird ausgewiesen, legt in Florenz Widerspruch ein und bekommt Recht. Daraufhin kommt es zu einem Aufstand Volterra. Die dortige Signoria gewinnt Macht zurück, aber Lorenzo besteht gegen den Rat von Tommaso auf eine Unterwerfung durch die Florentnier Truppe unter Montefeltro. Es kommt zu Belagerung, die am 18.6. endet und entsetzliches Rauben und Morden nach sich zieht. Lorenzo reist daraufhin nach Volterra, um persönlich zu entschädigen",
        en: "Signoria of Volterra examines the contract regarding the concession of a trading company from Siena for alum in Volterra and finds it illegal. The Florentine company is expelled, lodges an objection in Florence and is vindicated. This leads to an uprising in Volterra. The Signoria there regains power, but Lorenzo insists on submission by the Florentine troops under Montefeltro, against Tommaso's advice. The siege ends on June 18 and is followed by horrific robberies and murders. Lorenzo then travels to Volterra to make amends in person",
      }, {
        date: "",
        de: "Giuliano will im März nach Venedig zu gehen, aber Volterra kommt dazwischen (Lorenzo verbietet es ihm, Giuliano reitet nach Cafaggiolo, Gentile Becchi muss vermitteln)",
        en: "Giuliano wants to go to Venice in March, but Volterra intervenes (Lorenzo forbids him, Giuliano rides to Cafaggiolo, Gentile Becchi has to mediate)",
      }, {
        date: "",
        de: "Universität von Pisa wird wieder aufgebaut",
        en: "The University of Pisa is being rebuilt",
      }, {
        date: "6",
        de: "Giuliano geht nach Padua, Vicenza und Verona, Mantua",
        en: "Giuliano goes to Padua, Vicenza and Verona, Mantua",
      }, {
        date: "15.11.",
        de: "Erste Schritte für einen Kardinalshut für Giuliano",
        en: "First steps towards a cardinal hat for Giuliano",
      }, {
        date: "",
        de: "Lorenzo ist in Rom. Er erhält die Verwaltung der päpstlichen Konten, die Konzession des Alaunabbaus von Viterbo, und Marmorbüsten von Kaiser Augustus und Agrippa. Galeazzo Maria Sforza ist auf das offensichtlich gute Einvernehmen zwischen Lorenzo und dem Papst eifersüchtig",
        en: "Lorenzo is in Rome. He receives the administration of the papal accounts, the concession to mine alum from Viterbo, and marble busts of Emperor Augustus and Agrippa. Galeazzo Maria Sforza is jealous of the apparently good understanding between Lorenzo and the Pope",
      },
    ],
  },
  {
    year: "1473",
    event: [
      {
        date: "7.5.",
        de: "Giuliano gehört nicht zu den neu ernannten Kardinälen und weigert sich, das Chorhemd anzuziehen. Stimmen mehren sich, die ihn für ungeeignet halten.",
        en: "Giuliano is not one of the newly appointed cardinals and refuses to put on the surplice. A growing number of voices consider him unsuitable.",
      }, {
        date: "",
        de: "Florentiner Schutzbündnis für Imola erlischt. Sixtus will unter dem Vorwand, dass Manfredi kein Zins gezahlt hat, Imola zurück an Kirche bringen. Er schlägt vor, die Stadt als Mitgift für Caterina Sforza zu verwenden. Nach Ablauf des Schutzbündnisses ist der Herzog von Mailand jedoch bereit, an Florenz zu verkaufen. Daraufhin kommt schärfster Protest aus Rom und ein Angebot über 40.000 Dukaten. Die Pazzi strecken dem Papst das Geld vor, die Medici weigern sich.",
        en: "Florentine protective alliance for Imola expires. Sixtus wants to return Imola to the Church on the pretext that Manfredi has not paid interest. He proposes using the city as a dowry for Caterina Sforza. However, after the protective alliance expires, the Duke of Milan is prepared to sell to Florence. This is followed by a fierce protest from Rome and an offer of 40,000 ducats. The Pazzi advance the money to the Pope, but the Medici refuse.",
      }, {
        date: "10",
        de: "Gentile Becchi erhält das Bistum Arezzo",
        en: "Gentile Becchi receives the bishopric of Arezzo",
      }, {
        date: "",
        de: "Lorenzo gibt Kardinalshut für Giuliano im Herbst auf",
        en: "Lorenzo gives up cardinal hat for Giuliano in the fall",
      }, {
        date: "",
        de: "Tod der Albiera degli Albizzi, Braut von Sigismondo della Stufa, kurz nach der Hochzeit",
        en: "Death of Albiera degli Albizzi, bride of Sigismondo della Stufa, shortly after the wedding",
      }, {
        date: "",
        de: "Agnolo Ambrogini (Poliziano) kommt mit 19 Jahren zu Lorenzo",
        en: "Agnolo Ambrogini (Poliziano) joins Lorenzo at the age of 19",
      }, {
        date: "",
        de: "Großer Streit Luigi Pulci mit Marsilio Ficino; beide verlieren die Gunst der Medici",
        en: "Major dispute between Luigi Pulci and Marsilio Ficino; both lose the Medici's favor",
      },
    ],
  },
  {
    year: "1474",
    event: [
      {
        date: "3.1.",
        de: "Pietro Riario stirbt. Kandidaten für die Nachfolge u.a. Gentile Becchi (Lorenzos Erzieher) und Francesco Salviati (hochan­gesehen, aber verschuldet, mit den Pazzi verwandt, eng mit den Riario verbunden)",
        en: "Pietro Riario dies. Candidates for the succession include Gentile Becchi (Lorenzo's tutor) and Francesco Salviati (highly respected but indebted, related to the Pazzi, closely linked to the Riario)",
      },      {
        date: "28.1.",
        de: "Rinaldo Orsini wird auf Lorenzos Betreiben Erzbischof von Florenz (er kam nie nach Florenz)",
        en: "Rinaldo Orsini becomes Archbishop of Florence at Lorenzo's instigation (he never came to Florence)",
      },      {
        date: "",
        de: "Giuliano della Rovere (päpstl. Neffe im Kardinalsrang) schlägt eine Heirat zwischen Giovanni della Rovere (gen. Zanetto) mit Lorenzos Tochter Lucrezia (noch keine 4 Jahre alt) vor. Es gibt Streit wegen Citta di Castello.",
        en: "Giuliano della Rovere (papal nephew with the rank of cardinal) proposes a marriage between Giovanni della Rovere (gen. Zanetto) and Lorenzo's daughter Lucrezia (not yet 4 years old). There is a dispute over Citta di Castello.",
      },      {
        date: "",
        de: "Giuliano della Rovere geht in Umbrien gegen einen Aufstand in Todi und Spoleto vor, der blutig niedergelegt wird. Danach begibt er sich in Richtung Città di Castello. Florenz steht jedoch zu dessen Regenten Niccoló Vitelli und schickt Truppen bei Santepolcro. Sixtus ist daraufhin zornig und entzieht Lorenzo und Giuliano das Amt des Depositars, was einen beträchtlichen ökonomischen Schaden darstellt",
        en: "Giuliano della Rovere takes action in Umbria against an uprising in Todi and Spoleto, which is bloodily put down. He then heads for Città di Castello. However, Florence stands by its regent Niccoló Vitelli and sends troops to Santepolcro. Sixtus is furious and deprives Lorenzo and Giuliano of the office of depositary, which causes considerable economic damage",
      },      {
        date: "16.7.",
        de: "Sixtus IV entlässt die Medici als Hausbankiers",
        en: "Sixtus IV dismisses the Medici as house bankers",
      },      {
        date: "21.8.",
        de: "Federico da Montefeltro wird vom Papst zum Herzog ernannt, sowie zum Generalkapitän der Kirche. Vitelli kapitulatiert.",
        en: "Federico da Montefeltro is appointed Duke and Captain General of the Church by the Pope. Vitelli capitulates.",
      },      {
        date: "25.9.",
        de: "Brief von Matteo Palmieri an Luca Landucci: in Volterra wurde ein Kind mit einem Stierkopf geboren",
        en: "Letter from Matteo Palmieri to Luca Landucci: a child with a bull's head was born in Volterra",
      },      {
        date: "10.10.",
        de: "Papst gibt die Verlobung von Giovanna da Montefeltro mit Giovanni della Rovere bekannt",
        en: "Pope announces the engagement of Giovanna da Montefeltro to Giovanni della Rovere",
      },      {
        date: "14.10.",
        de: "Tod Filippo de’ Medici, des Erzbischofs von Pisa. Salviati wird vom Papst zu seinem Nachfolger ernannt, was bewusst gegen Florentiner Recht verstößt. Salviati wird daraufhin der Zugang zum Bistum verwehrt.",
        en: "Death of Filippo de' Medici, Archbishop of Pisa. Salviati is appointed his successor by the Pope, which is deliberately contrary to Florentine law. Salviati is subsequently denied access to the bishopric.",
      },      {
        date: "",
        de: "Andrea del Verocchio und Leonardo malen die Taufe Christis - Andrea schwört laut Vasari, nie wieder zu malen",
        en: "Andrea del Verocchio and Leonardo paint the Baptism of Christ - according to Vasari, Andrea swears never to paint again",
      },      {
        date: "2.11.",
        de: "Neuer Dreibund: Florenz, Mailand, Venedig (anstelle Neapel)",
        en: "New Triple Alliance: Florence, Milan, Venice (instead of Naples)",
      },
    ],
  },
  {
    year: "1475",
    event: [
      {
        date: "29.1.",
        de: "Giulianos Turnier: 22 Turnierkämpfer, darunter Soderini, Della Stufa, Guicciardini, Merli, Sohn des Markgrafen von Mantua: Rodolfo Gonzaga; zwei Söhne von Roberto Sanseverino. Schönheitskönigin ist Simonetta Vespucci, Turnier­königin Lucrezia Donati",
        en: "Giuliano's tournament: 22 tournament fighters, including Soderini, Della Stufa, Guicciardini, Merli, son of the Marquis of Mantua: Rodolfo Gonzaga; two sons of Roberto Sanseverino. Beauty queen is Simonetta Vespucci, tournament queen Lucrezia Donati",
      }, {
        date: "",
        de: "Salviati wird Erzbischof von Pisa",
        en: "Salviati becomes Archbishop of Pisa",
      }, {
        date: "",
        de: "Agnolo Ambrogini wird der Erzieher für Piero de’ Medici (der Unglückliche)",
        en: "Agnolo Ambrogini becomes the tutor for Piero de' Medici (the unfortunate)",
      }, {
        date: "",
        de: "Antonio Pazzi bekommt im August das Bistum Sarno, die Pazzi machen öffentlich Front gegen Lorenzo",
        en: "Antonio Pazzi receives the bishopric of Sarno in August, the Pazzi publicly front against Lorenzo",
      }, {
        date: "",
        de: "Giuliano soll Tochter des reichen Mailänder Kaufmanns Giovanni Borromei heiraten, aber weigert sich",
        en: "Giuliano is supposed to marry the daughter of the rich Milanese merchant Giovanni Borromei, but refuses",
      },
    ],
  },
  {
    year: "1476",
    event: [
      {
        date: "26.4.",
        de: "Simonetta Vespucci stirbt an der Schwindsucht",
        en: "Simonetta Vespucci dies of consumption",
      },   {
        date: "",
        de: "Leonardo wird angeklagt, mit einem Malerburschen (Jacopo Saltarelli, 17 Jahre) Sex gehabt zu haben - entgeht nur knapp einer Verurteilung wegen Sodomie",
        en: "Leonardo is accused of having sex with a painter boy (Jacopo Saltarelli, 17 years old) - narrowly escapes a conviction for sodomy",
      },   {
        date: "",
        de: "Giuliano soll eine Schwester der Riarios heiraten",
        en: "Giuliano is to marry a sister of the Riarios",
      },   {
        date: "26.12.",
        de: "	Galeazzo Maria Sforza wird in Mailand von Carlo Visconti, Girolamo Olgiati und Gianandrea Lampgnani  erstochen; alle drei werden hingerichtet. Professor  Cola Montano hält Vorlesungen, in denen er den Tyrannenmord als heilig darstellt. In der Folfe kommt es zu diversen Mordanschlägen auf z.B. Ercole I von Ferrara",
        en: "Galeazzo Maria Sforza is stabbed to death in Milan by Carlo Visconti, Girolamo Olgiati and Gianandrea Lampgnani; all three are executed. Professor Cola Montano gives lectures in which he presents the murder of tyrants as sacred. This is followed by various assassination attempts on Ercole I of Ferrara, for example",
      },
    ],
  },
  {
    year: "1477",
    event: [
      {
        date: "",
        de: "Papstneffe Girolamo Riario heiratet die uneheliche Catarina Sforza und übernimmt Forli",
        en: "",
      }, {
        date: "",
        de: "Papstneffe Girolamo Riario heiratet die uneheliche Catarina Sforza und übernimmt Forli",
        en: "Pope's nephew Girolamo Riario marries the illegitimate Catarina Sforza and takes over Forli",
      }, {
        date: "",
        de: "Giuliano soll Semiramide heiraten, die Schwester von Jacopo d’Appiano, des neuen Herrn von Piombino, auch dies scheitert",
        en: "Giuliano is supposed to marry Semiramide, the sister of Jacopo d'Appiano, the new lord of Piombino, but this also fails",
      }, {
        date: "",
        de: "Erbschaftsgesetz: Bei fehlendem Sohn geht Erbe an Neffen, nicht an Töchter Anlass: Giovanni Pazzi ist mit der einzigen Tochter des reichen Giovanni Borromei verheiratet. Ihr Erbe geht daraufhin an ihren Vetter.",
        en: "Inheritance law: In the absence of a son, inheritance goes to nephews, not daughters Reason: Giovanni Pazzi is married to the only daughter of the wealthy Giovanni Borromei. Her inheritance then goes to her cousin.",
      }, {
        date: "",
        de: "Carlo Fortebraaci will nach 30 Jahren in venezianischem. Dienst nach Montone zurück. Perugia erhofft sich Unter­stützung von ihm gegen die Baglioni. Fortebracci will einen Soldvertrag mit Florenz, aber Venedig legt sein Veto ein. Daraufhin gibt es Ärger in Siena.",
        en: "Carlo Fortebraaci wants to return to Montone after 30 years in Venetian. service to Montone. Perugia is hoping for his support against the Baglioni. Fortebracci wants a pay treaty with Florence, but Venice vetoes this. This causes trouble in Siena.",
      }, {
        date: "",
        de: "Giovan Battista da Montesecco kommt als Abgesandter Girolamo Riarios nach Florenz, um Jacopo Pazzi für die Verschwörung zu gewinnen; Giovanni Tornabuoni, der vage Infos erhalten hat, warnt seinen Neffen",
        en: "Giovan Battista da Montesecco arrives in Florence as Girolamo Riario's emissary to win Jacopo Pazzi over to the conspiracy; Giovanni Tornabuoni, who has received vague information, warns his nephew",
      }
    ],
  },
  {
    year: "1478",
    event: [
      {
        date: "",
        de: "Raffaele Riario kommt zusammen mit Salviati in die Villa Jacopo Pazzis; Aufforderung an Lorenzo und Giuliano, den Kardinal in ihrer Villa nahe Fiesole zu bewirten. Lorenzo geht auch mit Poliziano und Piero nach Fiesole, aber Giuliano fühlt sich unwohl.",
        en: "Raffaele Riario arrives at Jacopo Pazzi's villa with Salviati; Lorenzo and Giuliano are asked to entertain the cardinal at their villa near Fiesole. Lorenzo also goes to Fiesole with Poliziano and Piero, but Giuliano feels uncomfortable.",
      },  {
        date: "26.4.",
        de: "Giuliano gegen 15 Uhr im Dom ermordet",
        en: "Giuliano murdered in the cathedral around 3 p.m.",
      },  {
        date: "",
        de: "Lorenzo flieht mit Poliziano und anderen in die Sakristei. Antonio Ridolfisaugt Lorenzos Wunde aus; Lorenzo fragt nur nach Giuliano; Sigismondo della Stufa klettert auf einer Leiter zum Guckloch bei den Orgeln, erkennt die Lage, Tür wird geöffnet, Lorenzo fortgebracht, ohne Giuliano zu sehen.",
        en: "Lorenzo flees with Poliziano and others into the sacristy. Antonio Ridolfi sucks out Lorenzo's wound; Lorenzo only asks for Giuliano; Sigismondo della Stufa climbs a ladder to the peephole by the organs, recognizes the situation, the door is opened, Lorenzo is taken away without seeing Giuliano.",
      },  {
        date: "",
        de: "Francesco Salviati, der Erzbischof von Pisa, versucht, die Macht im Palazzo della Signoria zu übernehmen und scheitert an der Geistesgegenwart des amtierenden Gonfaloniere",
        en: "Francesco Salviati, the Archbishop of Pisa, attempts to take power in the Palazzo della Signoria and fails due to the presence of mind of the incumbent Gonfaloniere",
      },  {
        date: "",
        de: "Messer Jacopo reitet durch Florenz mit dem Ruf: Volk und Freiheit!",
        en: "Messer Jacopo rides through Florence with the cry: People and freedom!",
      },  {
        date: "",
        de: "Auf der Piazza della Signoria findet blutiges Morden statt (Verschwörer werden aus den Fenstern geworfen, Vierteilung eines Geistlichen)",
        en: "Bloody murders take place in the Piazza della Signoria (conspirators are thrown out of the windows, a clergyman is quartered)",
      },  {
        date: "",
        de: "Der Kardinal Riario wird in den Palast della Signori gebracht und kann dabei nur mit Mühe sein Leben retten",
        en: "Cardinal Riario is taken to the Palazzo della Signori and barely manages to save his life",
      },  {
        date: "",
        de: "Abends: Jacopo di Messer Poggio Bracciolini, Francesco Salviati Franceschino de’ Pazzi werden an den Fenstern aufgehängt, und ca. zwanzig weitere Männern an den Fensters des Palazzo della Signoria, des Podesta, des Capitano.",
        en: "In the evening: Jacopo di Messer Poggio Bracciolini, Francesco Salviati Franceschino de' Pazzi are hanged from the windows, and about twenty other men from the windows of the Palazzo della Signoria, the Podesta, the Capitano.",
      },  {
        date: "27.4.",
        de: "Jacopo Salviati (Schwiegersohns Filippo Tornabouni) und ein weiterer Jacaopo Salviati werden an den Fenstern aufgehängt, so wie andere",
        en: "Jacopo Salviati (Filippo Tornabouni's son-in-law) and another Jacaopo Salviati are hung from the windows, as are others",
      },  {
        date: "28.4.",
        de: "Messer Jacopo wird in Falterona gefasst, in Belforte wird Renato de’ Pazzi gefasst",
        en: "Messer Jacopo is captured in Falterona, Renato de' Pazzi is captured in Belforte",
      },  {
        date: "",
        de: "Um 23 Uhr am Palazzo della Signoria aufgehängt: Jacopo de’ Pazzi, Renato de’ Pazzi – laut Landucci macht dies in drei Tagen mehr als 70 Männer",
        en: "Hanged at Palazzo della Signoria at 11 pm: Jacopo de' Pazzi, Renato de' Pazzi - according to Landucci, this makes more than 70 men in three days",
      },  {
        date: "",
        de: "Der Kardinal befindet sich im Palast und muss von eigener Hand dem Papst von den Ereignissen berichten",
        en: "The Cardinal is in the palace and has to report the events to the Pope by his own hand",
      },  {
        date: "",
        de: "Ausbruch von Gefangenen aus der Stinche, bis auf einen, der gefasst und gehängt wird",
        en: "Prisoners break out of the Stinche, except for one, who is caught and hanged",
      },  {
        date: "30.4.",
        de: "	Himmelfahrt, Beerdigung Giuliano",
        en: "Assumption, funeral of Giuliano",
      },  {
        date: "1.5.",
        de: "Einzug der neuen Signoria",
        en: "Entry of the new Signoria",
      },  {
        date: "",
        de: "Andrea de’ Pazzi und der Brigliaino werden gefangen",
        en: "Andrea de' Pazzi and the Brigliaino are captured",
      },  {
        date: "",
        de: "Messer Piero Vespucci wird auf dem Rückweg von Pisa gefangen (Simonettas Schwiegervater, hat Napoleone Francheso zur Flucht verholfen)",
        en: "Messer Piero Vespucci is captured on the way back from Pisa (Simonetta's father-in-law, helped Napoleone Francheso to escape)",
      },  {
        date: "3.5.",
        de: "Die beiden Priester Bagone und Maffei gefangen",
        en: "The two priests Bagone and Maffei captured",
      },  {
        date: "",
        de: "Hängen des Brigliaino und eines anderes, abgeschnitten, Streit der Knechte um Wämser und Strümpfe",
        en: "Hanging of the brigliaino and another, cut off, dispute of the servants over vests and stockings",
      },  {
        date: "4.5.",
        de: "Die beiden Priester aufgehängt, Montesecco geköpft",
        en: "The two priests hanged, Montesecco beheaded",
      },  {
        date: "5.5.",
        de: "	Lorenzo bekommt eine Leibwache, nachdem er zehn Tage das Haus überhaupt nicht verlassen hat (eigentlich ist   Waffentragen seit dem Ciompi-Aufstand verboten)",
        en: "Lorenzo is given a bodyguard after not leaving the house at all for ten days (carrying weapons has actually been forbidden since the Ciompi uprising)",
      },  {
        date: "9.5.",
        de: "Gesandtschaft des Papstes in Florenz; Kardinal wird aber nicht freigegeben",
        en: "Pope's legation in Florence; Cardinal is not released, however",
      },  {
        date: "",
        de: "In diesen Tagen werden viele Leute auf der Piazza angeworben, ein Bargello (Polizeikommandant) wird ernannt, Streifen werden durchgeführt, ab ein Uhr gilt Ausgangssperre, Waffenverbot",
        en: "During these days, many people are recruited in the piazza, a bargello (police commander) is appointed, patrols are carried out, curfew is enforced from one o'clock, weapons are banned",
      },{
        date: "15.5.",
        de: "Messer Jacopo ausgegraben und vor den Mauern der Stadt (zwischen Porta della Croce und Porta della Giustizia) wieder eingegraben",
        en: "Messer Jacopo dug up and reburied in front of the city walls (between Porta della Croce and Porta della Giustizia)",
      },  {
        date: "17.5.",
        de: "Messer Jacopo erneut ausgegraben (gegen 20 Uhr, von Kindern), um die Stadt geschleift, in den Arno geworfen",
        en: "Messer Jacopo dug up again (around 8 p.m., by children), dragged around the city, thrown into the Arno",
      },  {
        date: "18.5.",
        de: "Lorenzo, der ab dem 1.Mai einer der otto di guardia é balia war, legt sein Amt nieder (wohl um Rachevorwürfen vorzubeugen)",
        en: "Lorenzo, who was one of the otto di guardia é balia from May 1, resigns from office (probably to avoid accusations of revenge)",
      },  {
        date: "19.5.",
        de: "Andrea de’ Pazzi und zwei Brüder in den Turm in Volterra",
        en: "Andrea de' Pazzi and two brothers in the tower in Volterra",
      },  {
        date: "20.5",
        de: "Guglielmo verspricht, sich innerhalb der Banngrenzen zu halten (das entspricht seiner eigenen Villa)",
        en: "Guglielmo promises to stay within the boundaries of the ban (which corresponds to his own villa)",
      },  {
        date: "",
        de: "Piero Vespucci wird in die Stinche gebracht",
        en: "Piero Vespucci is taken to the Stinche",
      },  {
        date: "23.5.",
        de: "Gesetz gegen die Pazzi",
        en: "Law against the Pazzi",
      },  {
        date: "1.6.",
        de: "Hab und Gut der Pazzi wird verkauft",
        en: "The Pazzi's belongings are sold",
      }, {
        date: "5.6.",
        de: "Der Kardinal wird freigelassen",
        en: "The cardinal is released",
      },  {
        date: "7.6.",
        de: "Der Kardinal wird aus dem Palast hinausbegleitet, hat Angst vor der Menge",
        en: "The cardinal is escorted out of the palace, afraid of the crowd",
      },  {
        date: "12.6.",
        de: "Der Kardinal verlässt Florenz",
        en: "The Cardinal leaves Florence",
      },  {
        date: "20.6.",
        de: "Das Interdikt wird verkündet",
        en: "The interdict is proclaimed",
      },  {
        date: "3.7.",
        de: "nachträgliche Feier des Festes des San Giovanni (24.6.), mit Schaugerüsten, Prozessionen, Pferderennen für den Palio (Preis, Gewebe), Girandola (eine Art Feuerwerk)",
        en: "Subsequent celebration of the feast of San Giovanni (24.6.), with showpieces, processions, horse races for the Palio (prize, fabric), Girandola (a kind of firework display)",
      }, {
        date: "",
        de: "Leonardo notiert, er habe zwei Madonnen begonnen - beide sind heute verschollen",
        en: "Leonardo notes that he began two Madonnas - both are now lost",
      },  {
        date: "7",
        de: "Sixtus versucht Keil zwischen Florenz und Lorenzo (Dietisalvi Neroni), wird zurückgewiesen",
        en: "Sixtus tries to drive a wedge between Florence and Lorenzo (Dietisalvi Neroni), but is rejected",
      },  {
        date: "10.7.",
        de: "Philipp de Commines, Herrn von Argenton, kommt von Louis XI",
        en: "Philipp de Commines, Lord of Argenton, comes from Louis XI",
      },  {
        date: "13.7.",
        de: "Neapel erklärt Florenz den Krieg",
        en: "Naples declares war on Florence",
      },  {
        date: "19.7.",
        de: "Angriff Sienas, Kriegsbeginn",
        en: "Attack on Siena, start of the war",
      }, {
        date: "9",
        de: "Pestausbruch in Florenz, der Winter wird hart",
        en: "Plague outbreak in Florence, the winter gets tough",
      },  
    ],
  },
  {
    year: "1479",
    event: [
      {
        date: "",
        de: "Die Pest ist so schlimm, dass Landucci im April auf’s Land flieht",
        en: "The plague is so bad that Landucci flees to the countryside in April",
      },{
        date: "6.12.",
        de: "Lorenzo geht nach Neapel",
        en: "Lorenzo goes to Naples",
      },  {
        date: "23.12.",
        de: "Bernardo Bandini aus Konstantinopel zurückgebracht",
        en: "Bernardo Bandini brought back from Constantinople",
      },  {
        date: "28.12.",
        de: "Bernardo Bandini wird gehängt",
        en: "Bernardo Bandini is hanged",
      }
    ],
  },
  {
    year: "1480",
    event: [
      {
        date: "15.3.",
        de: "Lorenzo kommt zurück aus Neapel",
        en: "Lorenzo returns from Naples",
      },{
        date: "16.3.",
        de: "Frieden wird verkündet",
        en: "Peace is proclaimed",
      },{
        date: "27.5.",
        de: "Beatrice de Borromei und andere werden nach einem gescheiterten Befreiungsversuch in Volterra gefangen genommen",
        en: "Beatrice de Borromei and others are captured after a failed rescue attempt in Volterra",
      },{
        date: "6.8.",
        de: "Türken belagern Otranto",
        en: "Turks lay siege to Otranto",
      },{
        date: "4.11.",
        de: "Eine Gesandtschaft für den Papst wird ernannt und bricht am Folgetag auf",
        en: "An envoy for the Pope is appointed and departs the following day",
      },{
        date: "5.12.",
        de: "Florenz erfährt, dass der Papst es wieder gesegnet hat",
        en: "Florence learns that the Pope has blessed it again",
      },
    ],
  },
  {
    year: "1482",
    event: [
      {
        date: "25.3.",
        de: "Lucrezia Tournabouni stirbt",
        en: "Lucrezia Tournabouni dies",
      },
      {
        date: "",
        de: "Botticelli malt la Primavera",
        en: "Botticelli paints la Primavera",
      },{
        date: "",
        de: "Leonardo geht zu Ludovico Sforza nach Mailand (il moro)",
        en: "Leonardo goes to Ludovico Sforza in Milan (il moro)",
      }
    ],
  },
  {
    year: "1484",
    event: [
      {
        date: "",
        de: "Tod Papst Sixtus IV, Innozenz VIII wird Papst",
        en: "Death of Pope Sixtus IV, Innocent VIII becomes Pope",
      },
     {
        date: "",
        de: "Botticelli vollendet Geburt des Venus",
        en: "Botticelli completes Birth of Venus",
      }
    ],
  }
];

let timelineOdyssee = [
  {
    year: "1144",
    event: [
      {
        date: "12",
        de: "Atabeg Zengi von Mosul erobert die Grafschaft Edessa",
        en: "Atabeg Zengi of Mosul conquers the county of Edessa",
      }
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
      }
    ],
  },  
  {
    year: "1146",
    event: [
      {
        date: "01.03.",
        de: "Neuauflage der päpstlichen Bulle",
        en: "New edition of the papal bull",
      },
      {
        date: "31.03.",
        de: "Vézelay: an Ludwigs Hof hält Bernhard eine so flammende Rede, dass sich fast alle für den Kreuzzug anmelden – inklusive Eleonore von Aquitanien, Ludwigs Ehefrau.",
        en: "Vézelay: at Louis' court, Bernhard gives such a passionate speech that almost everyone signs up for the crusade - including Eleanor of Aquitaine, Louis' wife.",
      },  {
        date: "",
        de: "Ludwig schreibt an Roger von Sizilien, Manuel von Byzanz, Konrad III., Géza von Ungarn, um für freie Passage zu bitten.",
        en: "Louis writes to Roger of Sicily, Manuel of Byzantium, Conrad III and Géza of Hungary to ask for free passage.",
      },
      {
        date: "",
        de: "Papst Eugen schreibt an Manuel.",
        en: "Pope Eugene writes to Manuel.",
      },  {
        date: "",
        de: "Roger von Sizilien bietet Mitzug an, was jedoch aufgrund des Kon­fliktes mit Byzanz und dem Römischen Reich ein Problem ist.",
        en: "Roger of Sicily offers to join the procession, but this is a problem due to the conflict with Byzantium and the Roman Empire.",
      },
      {
        date: "",
        de: "Géza und Konrad stellen die Passage frei.",
        en: "Géza and Konrad allow the passage.",
      },
      {
        date: "",
        de: "Manuels Antwort ist eher verhalten.",
        en: "Manuel's response is rather restrained.",
      }, 
      {
        date: "",
        de: "Bernhard von Clairvaux geht auf Fahrt durch ganz Frankreich, schickt Briefe nach England, Flandern, an Manfred von Brescia, um für den Kreuzzug zu werben.",
        en: "Bernard of Clairvaux travels throughout France, sending letters to England, Flanders and Manfred of Brescia to promote the crusade.",
      }, 
      {
        date: "",
        de: "In Nordfrankreich flammt, getragen durch den Zisterziensermönch Radulf, Antisemitismus auf.",
        en: "Anti-Semitism flares up in northern France, fueled by the Cistercian monk Radulf.",
      },
      {
        date: "08",
        de: "Bernhard kommt nach Nordfrankreich, um Judenpogrome zu stop­pen. Radulf flieht nach Mainz, Köln, Worms, Speyer, löst dort eben­falls Pogrome aus. Der Erzbischof von Mainz beschwert sich bei Bernhard.",
        en: "Bernhard comes to northern France to stop Jewish pogroms. Radulf flees to Mainz, Cologne, Worms and Speyer, where he also triggers pogroms. The Archbishop of Mainz complains to Bernhard.",
      }, {
        date: "10",
        de: "Bernhard kommt nach Deutschland und gebietet Radulf Einhalt, indem er ihn ins Kloster zurückschickt.  ",
        en: "Bernhard arrives in Germany and puts a stop to Radulf by sending him back to the monastery.",
      }, {
        date: "11",
        de: "Bernhard ist in Frankfurt am Hof Konrad III. Getragen von der Idee des Kreuzzuges will er auch den deutschen König überzeugen mitzukommen, der aber wenig geneigt ist. Gegen eine Rekrutierung anderer in Deutschland hat Konrad hingegen nichts einzuwenden.",
        en: "Bernhard is in Frankfurt at the court of Konrad III. Driven by the idea of the crusade, he also wants to convince the German king to join him, but he is not very inclined. However, Konrad has no objections to recruiting others in Germany.",
      },  {
        date: "",
        de: "Bernhard ist in Konstanz, trifft Konrad von Zähringen",
        en: "Bernhard is in Constance and meets Conrad of Zähringen.",
      },  {
        date: "24.12.",
        de: "Bernhard ist in Speyer und hält erneut eine flammende Predigt. König Konrad gibt nach. Viele Herren schreiben sich ein, unter an­derem Friedrich von Schwaben.  ",
        en: "Bernhard is in Speyer and gives another fiery sermon. King Konrad gives in. Many lords sign up, including Frederick of Swabia.",
      },  {
        date: "",
        de: "Papst Eugen ist von Konrads Beteiligung am Kreuzzug nicht sehr angetan, da er auf dessen Unterstützung in Italien gegen den Nor­mannen Roger II. gehofft hat.",
        en: "Pope Eugene is not very pleased with Konrad's participation in the crusade, as he had hoped for his support in Italy against the Norman Roger II.",
      },  {
        date: "",
        de: "Währendessen wird auch der Spanische Kreuzzug organisiert. Der Papst erlaubt den Genuesen die Beteiligung an der Reconquista.",
        en: "Meanwhile, the Spanish Crusade is also being organized. The Pope allows the Genoese to take part in the Reconquista.",
      }
    ],
  } ,
  {
    year: "1147",
    event: [
      {
        date: "01",
        de: "Bernhard in Köln  ",
        en: "Bernhard in Cologne",
      }, {
        date: "01.02.",
        de: "Bernhard in Châlons-sur-Marne: Vorkonferenz der Kreuzfahrer mit Ludwig und Boten von Konrad und Welf",
        en: "St. Bernard in Châlons-sur-Marne: Preliminary conference of the crusaders with Louis and messengers from Konrad and Welf",
      }, {
        date: "16.02.",
        de: "Großes Treffen in Étampes: Entscheidung für die Landroute auf­grund des Konfliktes zwischen Konrad und Roger von Sizilien. Ro­ger von Sizilien sagt daraufhin seine Unterstützung ab.",
        en: "Major meeting in Étampes: decision in favor of the land route due to the conflict between Konrad and Roger of Sicily. Roger of Sicily then cancels his support.",
      },  {
        date: "02",
        de: "Konrad hält Hof in Regensburg; Adam von Ebrach predigt. Bischof Otto von Freising (Konrads Halbbruder) schreibt sich ein.",
        en: "Konrad holds court in Regensburg; Adam von Ebrach preaches. Bishop Otto von Freising ( Konrad's half-brother) enrolls.",
      },  {
        date: "13.03.",
        de: "Treffen in Frankfurt mit Bernhard. Konrads 10jähriger Sohn wird gewählt und als König ausgerufen (Vormünder: Erzbischof von Mainz und Wibald von Stablo), Landroute durch Ungarn wird angekündigt.",
        en: "Meeting in Frankfurt with Bernhard. Conrad's 10-year-old son is elected and proclaimed king (guardians: Archbishop of Mainz and Wibald of Stablo), land route through Hungary is announced.",
      },  {
        date: "30.03.",
        de: "Der Wendenkreuzzug wird geplant, unter Teilnahme von Albrecht dem Bären, Heinrich dem Löwen, Konrad von Zähringen. Päpst­liches Legat übernimmt Anselm von Havelberg.",
        en: "The Wendish Crusade is planned, with the participation of Albrecht the Bear, Henry the Lion and Conrad of Zähringen. Anselm of Havelberg takes over the papal legate.",
      },  {
        date: "20.04.",
        de: "Papst Eugen in Paris überzeugt den zögernden Abt Suger, Ludwig gehen zu lassen. Papst Eugen erhält einen zweiten Brief von Manuel, der sowohl Bedingungen, wie auch eine mögliche Vereinigung zwischen der östlichen und westlichen Kirche in den Raum stellt, die seit 100 Jahren getrennt sind.",
        en: "Pope Eugene in Paris convinces the reluctant Abbot Suger to let Ludwig go. Pope Eugene receives a second letter from Manuel, which sets out conditions as well as a possible union between the Eastern and Western Churches, which have been separated for 100 years.",
      },{
        date: "",
        de: "Papst Eugen ernennt Theodwin, Erzbischof von Porto und Guido von Florenz als Legaten.",
        en: "Pope Eugene appoints Theodwin, Archbishop of Porto and Guido of Florence as legates.",
      }, {
        date: "27.04.",
        de: "Beginn des Spanischen Kreuzzuges  ",
        en: "Start of the Spanish Crusade",
      }, {
        date: "05",
        de: "König Konrad bricht mit vermutlich über 200.000 Menschen aus Regensburg auf.",
        en: "King Konrad sets off from Regensburg with probably over 200,000 people.",
      },  {
        date: "",
        de: "Konrad in Ardagger und Wien, Ottokar von Styrien kommt dazu, es werden weitere Verhandlungen mit Géza von Ungarn aufgrund der Passage geführt.  ",
        en: "Konrad in Ardagger and Vienna, Ottokar of Styria joins them, further negotiations are held with Géza of Hungary due to the passage.",
      },  {
        date: "06",
        de: "Konrad setzt über ungarische Grenze, einige Ungarn schließen sich dem Zug an.",
        en: "Konrad crosses the Hungarian border, some Hungarians join the train.",
      },  {
        date: "20.07.",
        de: "Konrad ist in Branits an der Grenze zu Bulgarien, wo ihn zwei Bot­schafter von Kaiser Manuel erwarten, die ihm den Schwur abneh­men, Byzanz nicht zu verletzen.",
        en: "Konrad is in Branits on the border with Bulgaria, where two ambassadors from Emperor Manuel are waiting for him to swear not to violate Byzantium.",
      },  {
        date: "",
        de: "Konrad zieht weiter an der Morava entlang nach Niš und Sofia. Im reicheren Landstrich um Philippopolis kommt es zu ersten Plünderungen und zu Zwischenfällen mit der Endtruppe des Trosses und den Einwohnern. Prosouch folgt mit einer kleinen schlagkräftigen Truppe den Deutschen, um für Ruhe zu sorgen.",
        en: "Konrad continues along the Morava to Niš and Sofia. In the richer region around Philippopolis, the first looting and incidents with the final troop of the convoy and the inhabitants occur. Prosouch follows the Germans with a small, powerful force to ensure peace.",
      },{
        date: "",
        de: "Aufgrund der Probleme in Philipoppolis hält Konrad nicht in Adria­nopel, aber ein Verwandter bleibt wegen Krankheit zurück. Kurz darauf wird der Verwandte von griechischen Räubern angegriffen und seine Unterkunft angesteckt. Friedrich von Schwaben kehrt um und nimmt Rache, sucht nach gestohlenem Geld. Prosouch greift ein, der Frieden wird wieder hergestellt.",
        en: "Due to the problems in Philipoppolis, Konrad does not stop in Adrianople, but a relative stays behind due to illness. Shortly afterwards, the relative is attacked by Greek robbers and his lodgings are set on fire. Frederick of Swabia turns back and takes revenge, searching for stolen money. Prosouch intervenes and peace is restored.",
      }, {
        date: "",
        de: "Manuel will, dass Konrad die Dardanellen bei Sestus überquert und nicht am Bosporus, aber Konrad lehnt ab.   ",
        en: "Manuel wants Konrad to cross the Dardanelles at Sestus and not at the Bosporus, but Konrad refuses.",
      }, {
        date: "08.09.",
        de: "Flutkatastrophe in der Ebene von Choerobacchi (Melas-Fluss)",
        en: "Flood disaster in the Choerobacchi plain (Melas River)",
      },  {
        date: "10.09.",
        de: "Konrad vor Konstantinopel nimmt zunächst im Philopatium dann in Pera Unterkunft.",
        en: "Before Constantinople, Conrad first takes up residence in the Philopatium and then in Pera.",
      },  {
        date: "09",
        de: "Erste französische Soldaten, die nicht den Bosporus überqueren wollten, werden von byzantinischen Söldnern attackiert, so dass der französische Botschafter eingreifen muss.",
        en: "The first French soldiers, who did not want to cross the Bosporus, were attacked by Byzantine mercenaries, forcing the French ambassador to intervene.",
      },  {
        date: "",
        de: "Verhandlungen zwischen Konrad und Manuel mit Unterstützung der Kaiserin Irene (Bertha von Sulzbach). Ein Truppenaustausch wird diskutiert, Manuel dringt auf die Überquerung nach Klein­asien.",
        en: "Negotiations between Conrad and Manuel with the support of Empress Irene (Bertha von Sulzbach). An exchange of troops is discussed, Manuel insists on crossing to Asia Minor.",
      },  {
        date: "",
        de: "Konrad überquert den Bosporus nach Kleinasien, ohne auf Ludwig zu warten, nimmt jedoch die Lothringer mit (Vorhut von Ludwig).",
        en: "Conrad crosses the Bosporus to Asia Minor without waiting for Louis, but takes the Lorraines with him (Louis' vanguard).",
      },{
        date: "04.10.",
        de: "Ludwig vor Konstantinopel (Philopatium)",
        en: "Louis before Constantinople (Philopatium)",
      }, {
        date: "",
        de: "Bischof von Langres ist dafür, die Stadt einzunehmen, aber Guido von Florenz hält dagegen. Ludwig überquert den Bosporus, nachdem er falsche Berichte über Konrad gehört hat, die von 14.000 toten Türken und der Eroberung Ikoniums sprechen.",
        en: "The Bishop of Langres is in favor of taking the city, but Guido of Florence opposes this. Louis crosses the Bosporus after hearing false reports about Conrad, which speak of 14,000 dead Turks and the conquest of Iconium.",
      }, {
        date: "",
        de: "Konrad teilt in Nikäa den Zug auf: ein Teil der Pilger zieht mit Otto von Freising die Küste entlang, der Rest Richtung marschiert mit griechischen Führern Richtung Ikonium.",
        en: "In Nicaea, Konrad divides the procession: some of the pilgrims travel along the coast with Otto von Freising, while the rest march towards Iconium with Greek guides.",
      },  {
        date: "",
        de: "Bei Doryläum kommt es zu einer furchtbaren Niederlage, daraufhin schwerer, immer wieder attackierter Rückzug nach Nikäa. Nur ein Fünftel des Heeres soll überlebt haben.",
        en: "There is a terrible defeat at Doryläum, followed by a heavy retreat to Nicaea, which is repeatedly attacked. Only a fifth of the army is said to have survived.",
      },  {
        date: "11",
        de: "Die Reste von Konrads Armee in Nikäa lösen sich auf. Der König schreibt an Wibald von Stablo, dass sie sich furchtbar überschätzt  hätten.",
        en: "The remnants of Konrad's army in Nicaea disband. The king writes to Wibald of Stablo that they have terribly overestimated themselves.",
      },  {
        date: "",
        de: "Die Franzosen fangen an zu plündern, die Bewohner des Landes rächen sich an den geschwächten Deutschen, so dass die Franzosen Geleitschutz geben müssen.  ",
        en: "The French begin to plunder, the inhabitants of the country take revenge on the weakened Germans, so that the French have to provide escort.",
      },  {
        date: "",
        de: "Rendezvous zwischen Deutschen und Franzosen in Lopadium: Ama­deo von Savoyen, der Marquis von Montferrat, Bischof von Metz, Graf von Bar und andere sollen Konrad verstärken.  ",
        en: "Rendezvous between Germans and French in Lopadium: Amadeo of Savoy, the Marquis of Montferrat, Bishop of Metz, Count of Bar and others are to reinforce Konrad.",
      },{
        date: "",
        de: "Ludwig in Esseron.",
        en: "Louis in Esseron.",
      }, {
        date: "12",
        de: "Ludwig in Ephesus: Warnung vor türkischem Angriff.",
        en: "Louis in Ephesus: warning of Turkish attack.",
      }, {
        date: "",
        de: "Konrad ist schwer krank und kehrt nach Konstantinopel zurück.",
        en: "Konrad is seriously ill and returns to Constantinople.",
      },  {
        date: "24.12.",
        de: "Erster Kampf der Franzosen gegen die Türken nahe Ephesus, die Kreuz­fahrer behaupten sich.",
        en: "First battle of the French against the Turks near Ephesus, the crusaders hold their ground.",
      }
    ],
  },
  {
    year: "1148",
    event: [
      {
        date: "01",
        de: "Schwerer Weg der Franzosen nach Laodikea und Lycum: die Furt des Flusses Maeander ist durch Türken blockiert, es gibt viele Über­fälle. Die Türken verstecken sich in der griechischen Stadt Carian Antioch.",
        en: "Difficult road for the French to Laodicea and Lycum: the ford of the river Maeander is blocked by Turks, there are many raids. The Turks hide in the Greek town of Carian Antioch.",
      },  {
        date: "",
        de: "Reste von Otto von Freisings Truppe werden von den Franzosen ge­funden, die etwa eine Woche zuvor grausam niedergemacht worden sein müssen.",
        en: "The remains of Otto von Freising's troops are found by the French, who must have been savagely massacred about a week earlier.",
      },  {
        date: "03.01.",
        de: "Kreuzfahrerheer in Laodikea",
        en: "Crusader army in Laodicea",
      },  {
        date: "",
        de: "Vorhut unter Amadeo von Savoyen und Geoffrey von Rancon eilt zu weit voraus; Hauptteil wird von den Türken angegriffen, Ludwig kann sich unter hohen Kosten verteidigen und fliehen, viel Aus­rü­stung geht verloren. Ludwig versucht zu ersetzen. Die Tempelritter stechen durch ihren Mut hervor.",
        en: "Vanguard under Amadeo of Savoy and Geoffrey of Rancon rushes too far ahead; main body is attacked by the Turks, Louis can defend himself at great cost and flee, much equipment is lost. Louis tries to replace it. The Knights Templar stand out for their courage.",
      },{
        date: "20.01.",
        de: "Attalia: Es gibt viele Probleme, das Essen ist sehr teuer, es gibt kein Pferdefutter und die Türken sind außerhalb der Stadt. Winterstürme beginnen, die Zustände in der Stadt sind kaum tragbar, aber zu wenige Schiffe kommen. Nach langem Hin und Her besteigt Ludwig ein Schiff, beauftragt die Grafen von Flandern und Burgund mit der Aufsicht, gibt dem Kommandanten der Stadt Geld, damit Truppen die Kreuzfahrer aus der Stadt hinaus schützen.",
        en: "Attalia: There are many problems, food is very expensive, there is no horse feed and the Turks are outside the city. Winter storms begin, conditions in the city are barely tolerable, but too few ships arrive. After much toing and froing, Louis boards a ship, commissions the Counts of Flanders and Burgundy to supervise it and gives the city commander money to send troops to protect the crusaders from the city.",
      }, {
        date: "",
        de: "Am Morgen nach Ludwigs Abreise erfolgt ein Angriff der Türken, welcher abgewehrt werden kann. Die Griechen weigern sich, im Winter nach Tarsus zu gehen. Es gibt viel Streit, die Gesandten des Königs werden schließlich abgeschoben. Der Rest der Truppen stirbt vermutlich größtenteils in Gefechten, an der Pest oder wird ver­sklavt. Nur ein kleiner Teil erreicht Tarsus und Antiochia.",
        en: "On the morning after Louis' departure, the Turks launch an attack, which is repulsed. The Greeks refuse to go to Tarsus in winter. There is much fighting, and the king's envoys are finally deported. Most of the rest of the troops presumably die in battles, from the plague or are enslaved. Only a small number reach Tarsus and Antioch.",
      }, {
        date: "",
        de: "Auch Ludwigs Seereise gestaltet sich schwierig und bedarf zweier Wochen anstatt der veranschlagten drei Tage.",
        en: "Louis' sea voyage also proves difficult and takes two weeks instead of the planned three days.",
      },  {
        date: "19.03.",
        de: "Ludwig in St. Simeon - Antiochia  ",
        en: "Louis in St. Simeon - Antioch",
      },  {
        date: "",
        de: "Raymund von Antiochia (Eleonores Onkel) will einen Angriff auf Aleppo und Shaizar und dann weiter Richtung Edessa, damit im Nor­den der Kreuzfahrerstaaten Ruhe ist. Ludwig entscheidet sich jedoch dagegen. Fraglich ist, inwieweit die Gerüchte über eine Affäre zwischen Eleonore und Raimund Ausschlag gebend gewe­sen sind. Ludwig lässt Eleonore am Ende mit Gewalt fort­bringen, nachdem Raimund ihr angeboten hat zu bleiben und sich scheiden zu lassen.",
        en: "Raymund of Antioch (Eleonore's uncle) wants to attack Aleppo and Shaizar and then continue towards Edessa so that there is peace in the north of the Crusader states. Louis, however, decides against this. It is questionable to what extent the rumors of an affair between Eleonore and Raimund were decisive. In the end, Louis has Eleanor taken away by force after Raimund offers to stay and divorce her.",
      },  {
        date: "04.04.",
        de: "Der Rest von Bischof Ottos Truppe erreicht Jerusalem. Eine Woche später kommt Konrad per Schiff aus Konstantinopel ebenfalls an.",
        en: "The rest of Bishop Otto's troops reach Jerusalem. A week later, Konrad also arrives by ship from Constantinople.",
      },  {
        date: "04",
        de: "Fulcher von Angoulême, Patriarch von Jerusalem, kommt zu Lud­wig.",
        en: "Fulcher of Angoulême, Patriarch of Jerusalem, comes to Louis.",
      },{
        date: "",
        de: "In Akkon sind Graf Alfonso Jordan von Toulouse und Sohn Bert­ram angekommen, die potentielle Aspiranten für die Grafschaft Tri­po­lis darstellen.",
        en: "Count Alfonso Jordan of Toulouse and his son Bertram have arrived in Acre and are potential candidates for the County of Tripoli.",
      }, {
        date: "",
        de: "Graf Alfonso Jordan stirbt in Caesarea. Es kommen Gerüchte auf, dass Gift im Spiel gewesen ist und dass Melisande von Jerusalem und ihr Schwager, der Graf von Tripolis, schuld daran wären. Bertram zieht zwar weiter und nimmt an der Belagerung von Damaskus teil, aber Tripolis ist danach in Aufruhr.  ",
        en: "Count Alfonso Jordan dies in Caesarea. Rumors spread that poison was involved and that Melisande of Jerusalem and her brother-in-law, the Count of Tripoli, were to blame. Bertram moves on and takes part in the siege of Damascus, but Tripoli is in turmoil afterwards.",
      }, {
        date: "24.06.",
        de: "In Akkon wird Hof gehalten, wobei die Mitglieder der Versamm­lung nur aus Deutschland, Frankreich und Jerusalem kommen. Vermutlich ist niemand aus Antiochia, Edessa oder Tripolis dabei. Konrad überlegt, ob er heimgehen soll, Welf VI tut es auch. Aber Ludwig will kämpfen und so fällt letztendlich die Entscheidung, gegen Damaskus zu ziehen. Die verschiedenen Seiten scheinen sich hinterher alle gegenseitig die Schuld für diese Entscheidung zuzu­schieben.",
        en: "Court is held in Acre, with the members of the assembly coming only from Germany, France and Jerusalem. Presumably no one from Antioch, Edessa or Tripoli is present. Konrad considers whether he should go home, Welf VI does it. But Louis wants to fight and so the decision is finally made to march against Damascus. Afterwards, the various sides all seem to blame each other for this decision.",
      },  {
        date: "07",
        de: "Das Frankenheer ist in Tiberias.",
        en: "The Frankish army is in Tiberias.",
      },  {
        date: "23.07.",
        de: "Das Frankenheer ist in Dâraiyâ, wenige Meilen südwestlich von Da­maskus.",
        en: "The Frankish army is in Dâraiyâ, a few miles southwest of Damascus.",
      },  {
        date: "24.07.",
        de: "Es kommt zu permanenten Angriffen, dann wird der Fluss blockiert, aber Konrad gelingt es, durchzubrechen. Ein guter Lager­platz wird gefunden.",
        en: "There are constant attacks, then the river is blocked, but Konrad manages to break through. A good campsite is found.",
      },  {
        date: "",
        de: "Unur von Damaskus ruft Sultan Zengis Söhne Nur-ad-Din und Saif-ad-Din zur Hilfe. Beide folgen seinem Aufruf, aber Unur, der zwischen allen Stühlen sitzt, will seine Unabhängigkeit nicht verlie­ren. Er hat Angst, dass Zengis Söhne ihm Damaskus wegnehmen und fängt deshalb ebenfalls Verhandlungen mit den Kreuzfahrern an.",
        en: "Unur of Damascus calls on Sultan Zengi's sons Nur-ad-Din and Saif-ad-Din for help. Both respond to his call, but Unur, who is caught between two stools, does not want to lose his independence. He is afraid that Zengi's sons will take Damascus away from him and therefore also starts negotiations with the crusaders.",
      }, {
        date: "27.07.",
        de: "Wechsel der Belagerung durch die Franken zu einem offensichtlich ungünstigeren Platz im Osten der Stadt. Die Lage der Franken verschlimmert sich, Unur bietet Frieden an, Zengis Söhne nähern sich. Letztendlich wird die Belagerung der Stadt abgebrochen.   ",
        en: "The siege by the Franks moves to an obviously less favorable location in the east of the city. The Franks' situation worsens, Unur offers peace, Zengi's sons approach. In the end, the siege of the city is broken.",
      },  {
        date: "08",
        de: "Konrad reist von Akkon ab.",
        en: "Konrad departs from Acre.",
      },  {
        date: "",
        de: "Konrad in Thessaloniki. Friedrich trennt sich von ihm und reitet in halsbrecherischem Tempo nach Norden, um Welf VI Einhalt zu gebieten. Konrad hingegen nimmt die Einladung Manuels an.",
        en: "Konrad in Thessaloniki. Friedrich separates from him and rides north at breakneck speed to put a stop to Welf VI. Conrad, on the other hand, accepts Manuel's invitation.",
      }
    ],
  },
  {
    year: "1149",
    event: [
      {
        date: "",
        de: "	Ludwig und Eleonore von Frankreich verlassen Outremer. Der levan­tinische Teil des Kreuzzuges ist damit beendet. Der Wenden­kreuzzug ist im Grunde ebenfalls gescheitert, nur die spanische Reconquista kann Erfolge verbuchen.",
        en: "Louis and Eleanor of France leave Outremer. This marks the end of the Levantine part of the crusade. The Wendish Crusade has also basically failed, only the Spanish Reconquista can claim success.",
      },  {
        date: "29.07.",
        de: "Nur-ad-Din besiegt und tötet Raimund von Antiochia nahe Inab.",
        en: "Nur-ad-Din defeats and kills Raimund of Antioch near Inab.",
      }, {
        date: "06.09.",
        de: "Saif-ad-Din, Zengis ältester Sohn, stirbt, Nachfolger wird zunächst der Bruder Quib-ad-Din.",
        en: "Saif-ad-Din, Zengi's eldest son, dies and is initially succeeded by his brother Quib-ad-Din.",
      }
    ],
  },
  {
    year: "1150",
    event: [
      {
        date: "04.05.",
        de: "Josselin II. von Edessa wird gefangengenommen (stirbt in Gefangenschaft 1159).",
        en: "Josselin II of Edessa is captured (dies in captivity in 1159).",
      },  {
        date: "",
        de: "Im Sommer: Tell Bashir und andere Festungen werden an Manuel verkauft.",
        en: "In summer: Tell Bashir and other fortresses are sold to Manuel.",
      }
    ],
  },
  {
    year: "1151",
    event: [
      {
        date: "12.07.",
        de: "Nur-ad-Din nimmt Tell Bashir ein, die Grafschaft Edessa ist damit endgültig Geschichte.",
        en: "Nur-ad-Din takes Tell Bashir and the county of Edessa is finally history.",
      },
      {
        date: "",
        de: "Balduin bricht mit Melisande und wird vollständig König.",
        en: "Balduin breaks with Melisande and becomes king in full.",
      }
    ],
  },
  {
    year: "1152",
    event: [
      {
        date: "",
        de: "Raimund II. von Tripolis wird von Assassinen getötet, sein Sohn Raimund III wird Graf unter Regentschaft seiner Mutter Hodierna.",
        en: "Raimund II of Tripoli is killed by assassins, his son Raimund III becomes count under the regency of his mother Hodierna.",
      },
    ],
  },
  {
    year: "1153",
    event: [
      {
        date: "",
        de: "Reginald von Châtillon heiratet Konstanze von Antiochia (Rai­munds Witwe).",
        en: "Reginald of Châtillon marries Constance of Antioch (Raimund's widow).",
      },
      {
        date: "22.08.",
        de: "Askalon ergibt sich Balduin III.",
        en: "Ascalon surrenders to Balduin III.",
      }
    ],
  },
  {
    year: "1154",
    event: [
      {
        date: "25.04.",
        de: "Damaskus ergibt sich Nur-ad-Din.",
        en: "Damascus surrenders to Nur-ad-Din.",
      },
    ],
  }
];
