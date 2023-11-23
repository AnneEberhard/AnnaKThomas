let personSitesHeader = [
    {
      siteId: 'elvesPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: 'Die Wölfe',
                subHeaderLink: ''
              },
              // Hier könnten weitere Subheaders folgen
            ],
            paragraphs: [
              "Vorsicht! Das hier aufgeführte Personenverzeichnis umfasst alle Charaktere: Die, welche in Lucies Geschichte „Von Elfen und Wölfen“ mitspielen (Teile 1-4), sowie in Binas „Hexen mittendrin im Mix“ (Teil 5-7) und Lenas „Im Namen der Menschen“ (Teil 8-9, eigentlich 10).",
               ""
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
              // Hier könnten weitere Subheaders folgen
            ],
            paragraphs: [
              "Caution! The list of characters listed here includes all the characters in Lucie`s arc (books 1-4), as well as in Bina`s arc (parts 5-7) and Lena`s arc (books 8-9).", 
              ""
            ]
          }
        }
    },
    {
      siteId: 'bardsPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
    },
    {
      siteId: 'childrenPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
              {
                subHeaderText: '',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
      
    },
    {
      siteId: 'odysseePersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: 'Erfundene Personen',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historische Personen',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: 'Fictional Characters',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historical Characters',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
    },
    {
      siteId: 'masksPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: 'Erfundene Personen',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historische Personen',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: 'Fictional Characters',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historical Characters',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
    },
    {
      siteId: 'alsterPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: 'Erfundene Personen',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historische Personen',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: 'Fictional Characters',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historical Characters',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
    },
    {
      siteId: 'mindPersons',
      languages: 
        {
          de: {
            header: 'Personen',
            subHeaders: [
              {
                subHeaderText: 'Erfundene Personen',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historische Personen',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
               "Vorsicht! Enthält SPOILER!"
            ]
          },
          en: {
            header: 'Personage',
            subHeaders: [
              {
                subHeaderText: 'Fictional Characters',
                subHeaderLink: ''
              },
              {
                subHeaderText: 'Historical Characters',
                subHeaderLink: ''
              },
            ],
            paragraphs: [
              "Caution! Includes Spoilers!"
            ]
          }
        }
    }
  ];
  
  let personsBards = [
    { groupId: 'all',
      de: '',
      en: '',
      members : [
        {
            name: 'tbf',
            de: 'tbf',
            en:'tbf',
        },
        {
            name: 'tbf',
            de: 'tbf',
            en:'tbf',
        },
      ]
    }
  ]

  let personsChildren = [
    { groupId: 'all',
      de: '',
      en: '',
      members : [
        {
            name: 'tbf',
            de: 'tbf',
            en:'tbf',
        },
        {
            name: 'tbf',
            de: 'tbf',
            en:'tbf',
        },
      ]
    }
  ]
  
let personsElves = [
    { groupId: 'wolves',
      de: 'Die "Wölfe"',
      en: 'The "Wolves"',
      members : [
        {
            name: 'Lucie Martin',
            de: 'Ein Viertel Wolf, ein Viertel Hexe und ganz viel Mensch, Tochter von Paul und Penelope',
            en:'A quarter wolf, a quarter witch and a whole lot of human, daughter of Paul and Penelope',
        },
        {
            name: 'Paul Martin',
            de: 'Lucies Vater, nur zur Hälfte Wolf (das Gen ist nicht aktiv), unehelicher Sohn des alten Wolfs',
            en:'Lucie`s father, only half wolf (the gene is not active), illegitimate son of the old wolf',
        },
      ]
    },
    { groupId: 'elves',
    de: 'Die "Elfen"',
    en: 'The "Elves"',
    members : [
      {
          name: 'Noel Tyll',
          de: 'Weißhaariger Pflegesohn von Oliver und Sandra, Prinz der Waldelfen, Sohn von Mab',
          en:'White-haired foster son of Oliver and Sandra, Prince of the Wood Elves, son of Mab',
      },
      {
          name: '',
          de: '',
          en:'',
      },
    ]
  },
  { groupId: 'human',
  de: 'Die "Menschen"',
  en: 'The "Humans"',
  members : [
    {
        name: '',
        de: '',
        en:'',
    },
    {
        name: '',
        de: '',
        en:'',
    },
  ]
},
{ groupId: 'witches',
de: 'Die "Hexen"',
en: 'The "Witches"',
members : [
  {
      name: '',
      de: '',
      en:'',
  },
  {
      name: '',
      de: '',
      en:'',
  },
]
},
{ groupId: 'vampires',
de: 'Die "Vampire"',
en: 'The "Vampires"',
members : [
  {
      name: '',
      de: '',
      en:'',
  },
  {
      name: '',
      de: '',
      en:'',
  },
]
},
]

let personsOdyssee = [
  { groupId: "fictional",
    de: "Erfundene Personen",
    en: "Fictional Characters",
    members : [
      {
          name: "a",
          de: "a",
          en:"a",
      },
      {
        name: "a",
        de: "",
        en:"a",
            },
    ]
  },
  { groupId: "historical",
  de: "Historische Personen",
  en: "Historical Characters",
  members : [
    {
      name: "a",
      de: "a",
      en:"a",    
    },
    {
      name: "a",
      de: "a",
      en:"a",    
    },
  ]
},
]

let personsMasks = [
  { groupId: "fictional",
    de: "Erfundene Personen",
    en: "Fictional Characters",
    members : [
      {
          name: "a",
          de: "a",
          en:"a",
      },
      {
        name: "a",
        de: "",
        en:"a",
            },
    ]
  },
  { groupId: "historical",
  de: "Historische Personen",
  en: "Historical Characters",
  members : [
    {
      name: "a",
      de: "a",
      en:"a",    
    },
    {
      name: "a",
      de: "a",
      en:"a",    
    },
  ]
},
]

let personsAlster = [
  { groupId: "fictional",
    de: "Erfundene Personen",
    en: "Fictional Characters",
    members : [
      {
          name: "Sophie Achtmann",
          de: "Hamburger Großbürgertochter",
          en:"Grand burgher daughter of Hamburg",
      },
      {
        name: "Friedrich senior Achtmann ",
        de: "",
        en:"Sophie's grandfather, has founded the company",
            },
    ]
  },
  { groupId: "historical",
  de: "Historische Personen",
  en: "Historical Characters",
  members : [
    {
      name: "August Abendroth",
      de: "Hamburger Jurist, Kaufmann und Philanthrop",
      en:"Hamburg lawyer, merchant, and philanthropist",    
    },
    {
      name: "William Brancker",
      de: "seit 1833 mit Helene Godeffroy   verheiratet, ging 1837 Bankrott, gründete danach mit Kapital von J. C. Godeffroy   in New York die Firma Brancker, Godeffroy & Co.",
      en:"Married to Helene Godeffroy since 1833, went bankrupt in 1837, then founded Brancker, Godeffroy & Co. in New York with capital from J. C. Godeffroy",    
    },
  ]
},
]

let personsMind = [
  { groupId: "fictional",
    de: "Erfundene Personen",
    en: "Fictional Characters",
    members : [
      {
          name: "a",
          de: "a",
          en:"a",
      },
      {
        name: "a",
        de: "",
        en:"a",
            },
    ]
  },
  { groupId: "historical",
  de: "Historische Personen",
  en: "Historical Characters",
  members : [
    {
      name: "a",
      de: "a",
      en:"a",    
    },
    {
      name: "a",
      de: "a",
      en:"a",    
    },
  ]
},
]