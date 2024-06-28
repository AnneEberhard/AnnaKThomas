



/**
* determines names of json based on bookId
* @param {string} bookId - id for respective books such as masks
* @returns {object} respective glossary
*/
async function findGlossarybyId(bookId) {
  glossary = await fetchJSON(`/JSONs/glossary/glossary-${bookId}.json`)
  return glossary;
}

/**
* determines names of json based on bookId
* @param {string} bookId - id for respective books such as masks
* @returns {object} respective sources
*/
async function findSourcesbyId(bookId) {
  sources = await fetchJSON(`/JSONs/sources/sources-${bookId}.json`)
  return sources;
}

//async function loadData(url) {
//  try {
//    const response = await fetch(url);
//    const data = await response.json();
//    return data;
//  } catch (error) {
//    console.error('Fehler beim Laden und Rendern der JSON-Datei:', error);
//  }
// }
//
//async function fetchData(path) {
//  try {
//    const response = await fetch(`/JSONs/${path}.json`);
//    if (!response.ok) {
//      throw new Error(`HTTP error! status: ${response.status}`);
//    }
//    const data = await response.json();
//    return data;
//  } catch (error) {
//    console.error("Fehler beim Laden der Menü-Titel:", error);
//  }
//}

let pageFunctionsX = [
  { path: "/fantasy.html", function: renderMainSite, params: ["fantasy"] },
  {
    path: "/historical.html",
    function: renderMainSite,
    params: ["historical"],
  },
  { path: "/novellas.html", function: renderNovellas, params: ["novellas"] },
  { path: "/about-me.html", function: renderAboutMe, params: ["aboutMe"] },
  {
    path: "/booksites/odyssee.html",
    function: renderBookSite,
    params: ["historical", "odyssee", false],
  },
  {
    path: "/booksites/mind-on-fire.html",
    function: renderBookSite,
    params: ["historical", "mind", false],
  },
  {
    path: "/booksites/alster-diamonds.html",
    function: renderBookSite,
    params: ["historical", "alster", false],
  },
  {
    path: "/booksites/masks-of-florence.html",
    function: renderBookSite,
    params: ["historical", "masks", false],
  },
  {
    path: "/booksites/children-of-angels.html",
    function: renderBookSite,
    params: ["fantasy", "children", true],
  },
  {
    path: "/booksites/of-elves-and-wolves.html",
    function: renderBookSite,
    params: ["fantasy", "elves", true],
  },
  {
    path: "/booksites/bards-of-thuran.html",
    function: renderBookSite,
    params: ["fantasy", "bards", true],
  },
  {
    path: "/subsitesElves/elves-persons.html",
    function: renderPersonage,
    params: ["fantasy", "elves", "elvesPersons", "personsElves"],
  },
  {
    path: "/subsitesAlster/alster-persons.html",
    function: renderPersonage,
    params: ["historical", "alster", "alsterPersons", "personsAlster"],
  },
  {
    path: "/subsitesMind/mind-persons.html",
    function: renderPersonage,
    params: ["historical", "mind", "mindPersons", "personsMind"],
  },
  {
    path: "/subsitesOdyssee/odyssee-persons.html",
    function: renderPersonage,
    params: ["historical", "odyssee", "odysseePersons", "personsOdyssey"],
  },
  {
    path: "/subsitesMasks/masks-persons.html",
    function: renderPersonage,
    params: ["historical", "masks", "masksPersons", "personsMasks"],
  },
  {
    path: "/subsitesBards/bards-persons.html",
    function: renderPersonage,
    params: ["fantasy", "bards", "bardsPersons", "personsBards"],
  },
  {
    path: "/subsitesChildren/children-persons.html",
    function: renderPersonage,
    params: ["fantasy", "children", "childrenPersons", "personsChildren"],
  },
  {
    path: "/subsitesAlster/alster-background.html",
    function: renderBackground,
    params: ["historical", "alster", "alsterBackground"],
  },
  {
    path: "/subsitesBards/bards-background.html",
    function: renderBackground,
    params: ["fantasy", "bards", "bardsBackground"],
  },
  {
    path: "/subsitesChildren/children-background.html",
    function: renderBackground,
    params: ["fantasy", "children", "childrenBackground"],
  },
  {
    path: "/subsitesElves/elves-background.html",
    function: renderBackground,
    params: ["fantasy", "elves", "elvesBackground"],
  },
  {
    path: "/subsitesMasks/masks-background.html",
    function: renderBackground,
    params: ["historical", "masks", "masksBackground"],
  },
  {
    path: "/subsitesMind/mind-background.html",
    function: renderBackground,
    params: ["historical", "mind", "mindBackground"],
  },
  {
    path: "/subsitesOdyssee/odyssee-background.html",
    function: renderBackground,
    params: ["historical", "odyssee", "odysseeBackground"],
  },
  {
    path: "/subsitesOdyssee/odyssee-familytrees.html",
    function: renderFamilyTrees,
    params: ["historical", "odyssee", "odysseeFamilyTree"],
  },
  {
    path: "/subsitesMasks/masks-familytrees.html",
    function: renderFamilyTrees,
    params: ["historical", "masks", "masksFamilyTree"],
  },
  {
    path: "/subsitesAlster/alster-familytrees.html",
    function: renderFamilyTrees,
    params: ["historical", "alster", "alsterFamilyTree"],
  },
  {
    path: "/subsitesElves/elves-familytrees.html",
    function: renderFamilyTrees,
    params: ["fantasy", "elves", "elvesFamilyTree"],
  },
  {
    path: "/subsitesMasks/masks-glossary.html",
    function: renderSourcesSite,
    params: ["historical", "masks"],
  },
  {
    path: "/subsitesOdyssee/odyssee.glossary.html",
    function: renderSourcesSite,
    params: ["historical", "odyssee"],
  },
  {
    path: "/subsitesAlster/alster-sources.html",
    function: renderSourcesSite,
    params: ["historical", "alster"],
  },
  {
    path: "/subsitesMind/mind-sources.html",
    function: renderSourcesSite,
    params: ["historical", "mind"],
  },
  {
    path: "/subsitesChildren/children-sources.html",
    function: renderSourcesSiteChildren,
    params: ["fantasy", "children", "childrenSources"],
  },
  {
    path: "/subsitesMasks/masks-timeline.html",
    function: renderTimeline,
    params: ["historical", "masks"],
  },
  {
    path: "/subsitesOdyssee/odyssee-timeline.html",
    function: renderTimeline,
    params: ["historical", "odyssee"],
  },
  {
    path: "/subsitesChildren/children-bonus.html",
    function: renderBonusChapter,
    params: ["fantasy", "children", "zach"],
  },
  {
    path: "/subsitesElves/elves-bonus-diana.html",
    function: renderBonusChapter,
    params: ["fantasy", "elves", "diana"],
  },
  {
    path: "/subsitesElves/elves-bonus-noel.html",
    function: renderBonusChapter,
    params: ["fantasy", "elves", "noel"],
  },
  {
    path: "/subsitesMind/mind-bonus-curtius.html",
    function: renderBonusChapter,
    params: ["historical", "mind", "curtius"],
  },
  {
    path: "/subsitesMind/mind-bonus-danton.html",
    function: renderBonusChapter,
    params: ["historical", "mind", "danton"],
  },
  {
    path: "/subsitesMind/mind-bonus-henri.html",
    function: renderBonusChapter,
    params: ["historical", "mind", "henri"],
  },
  {
    path: "/subsitesOdyssee/odyssee-bonus.html",
    function: renderBonusChapter,
    params: ["historical", "odyssee", "radegunde"],
  },
  {
    path: "/subsitesMasks/masks-bonus.html",
    function: renderBonusChapter,
    params: ["historical", "masks", "susanna"],
  },
  { path: "/imprint.html", function: renderImprint, params: [] },
  { path: "/privacy-policy.html", function: renderprivacyPolicy, params: [] },
];

function renderContentBasedOnPage2() {
  let pageFunctions = [
      { path: "/index.html", function: renderHomePage, params: ['home'] },
      { path: "/fantasy.html", function: renderMainSite, params: ['fantasy'] },
      { path: "/historical.html", function: renderMainSite, params: ['historical'] },
      { path: "/novellas.html", function: renderNovellas, params: ['novellas'] },
      { path: "/about-me.html", function: renderAboutMe, params: ['aboutMe'] },
      { path: "/booksites/odyssee.html", function: renderBookSite, params: ['historical', 'odyssee', false] },
      { path: "/booksites/mind-on-fire.html", function: renderBookSite, params: ['historical', 'mind', false] },
      { path: "/booksites/alster-diamonds.html", function: renderBookSite, params: ['historical', 'alster', false] },
      { path: "/booksites/masks-of-florence.html", function: renderBookSite, params: ['historical', 'masks', false] },
      { path: "/booksites/children-of-angels.html", function: renderBookSite, params: ['fantasy','children', true] },
      { path: "/booksites/of-elves-and-wolves.html", function: renderBookSite, params: ['fantasy','elves', true] },
      { path: "/booksites/bards-of-thuran.html", function: renderBookSite, params: ['fantasy','bards', true] },
      { path: "/subsitesElves/elves-persons.html", function: renderPersonage, params: ['fantasy','elves', 'elvesPersons', personsElves] },
      { path: "/subsitesAlster/alster-persons.html", function: renderPersonage, params: ['historical','alster', 'alsterPersons', personsAlster] },
      { path: "/subsitesMind/mind-persons.html", function: renderPersonage, params: ['historical','mind', 'mindPersons', personsMind] },
      { path: "/subsitesOdyssee/odyssee-persons.html", function: renderPersonage, params: ['historical','odyssee', 'odysseePersons', personsOdyssee] },
      { path: "/subsitesMasks/masks-persons.html", function: renderPersonage, params: ['historical','masks', 'masksPersons', personsMasks] },
      { path: "/subsitesBards/bards-persons.html", function: renderPersonage, params: ['fantasy','bards', 'bardsPersons', personsBards] },
      { path: "/subsitesChildren/children-persons.html", function: renderPersonage, params: ['fantasy','children', 'childrenPersons', personsChildren] },
      { path: "/subsitesAlster/alster-background.html", function: renderBackground, params: ['historical','alster', 'alsterBackground'] },
      { path: "/subsitesBards/bards-background.html", function: renderBackground, params: ['fantasy','bards', 'bardsBackground'] },
      { path: "/subsitesChildren/children-background.html", function: renderBackground, params: ['fantasy','children', 'childrenBackground'] },
      { path: "/subsitesElves/elves-background.html", function: renderBackground, params: ['fantasy','elves', 'elvesBackground'] },
      { path: "/subsitesMasks/masks-background.html", function: renderBackground, params: ['historical','masks', 'masksBackground'] },
      { path: "/subsitesMind/mind-background.html", function: renderBackground, params: ['historical','mind', 'mindBackground'] },
      { path: "/subsitesOdyssee/odyssee-background.html", function: renderBackground, params: ['historical','odyssee', 'odysseeBackground'] },
      { path: "/subsitesOdyssee/odyssee-familytrees.html", function: renderFamilyTrees, params: ['historical','odyssee', 'odysseeFamilyTree'] },
      { path: "/subsitesMasks/masks-familytrees.html", function: renderFamilyTrees, params: ['historical','masks', 'masksFamilyTree'] },
      { path: "/subsitesAlster/alster-familytrees.html", function: renderFamilyTrees, params: ['historical','alster', 'alsterFamilyTree'] },
      { path: "/subsitesElves/elves-familytrees.html", function: renderFamilyTrees, params: ['fantasy','elves', 'elvesFamilyTree'] },
      { path: "/subsitesMasks/masks-glossary.html", function: renderSourcesSite, params: ['historical','masks'] },
      { path: "/subsitesOdyssee/odyssee.glossary.html", function: renderSourcesSite, params: ['historical','odyssee'] },
      { path: "/subsitesAlster/alster-sources.html", function: renderSourcesSite, params: ['historical','alster'] },
      { path: "/subsitesMind/mind-sources.html", function: renderSourcesSite, params: ['historical','mind'] },
      { path: "/subsitesChildren/children-sources.html", function: renderSourcesSiteChildren, params: ['fantasy','children','childrenSources'] },
      { path: "/subsitesMasks/masks-timeline.html", function: renderTimeline, params: ['historical','masks'] },
      { path: "/subsitesOdyssee/odyssee-timeline.html", function: renderTimeline, params: ['historical','odyssee'] },
      { path: "/subsitesChildren/children-bonus.html", function: renderBonusChapter, params: ['fantasy','children', 'zach'] },
      { path: "/subsitesElves/elves-bonus-diana.html", function: renderBonusChapter, params: ['fantasy','elves', 'diana'] },
      { path: "/subsitesElves/elves-bonus-noel.html", function: renderBonusChapter, params: ['fantasy','elves', 'noel'] },
      { path: "/subsitesMind/mind-bonus-curtius.html", function: renderBonusChapter, params: ['historical','mind', 'curtius'] },
      { path: "/subsitesMind/mind-bonus-danton.html", function: renderBonusChapter, params: ['historical','mind', 'danton'] },
      { path: "/subsitesMind/mind-bonus-henri.html", function: renderBonusChapter, params: ['historical','mind', 'henri'] },
      { path: "/subsitesOdyssee/odyssee-bonus.html", function: renderBonusChapter, params: ['historical','odyssee', 'radegunde'] },
      { path: "/subsitesMasks/masks-bonus.html", function: renderBonusChapter, params: ['historical','masks', 'susanna'] },
      { path: "/imprint.html", function: renderImprint, params: [] },
      { path: "/privacy-policy.html", function: renderprivacyPolicy, params: [] },

    ];
  const path = window.location.pathname;
  const matchingFunction = pageFunctions.find(entry => path.includes(entry.path));
  if (matchingFunction) {
    const { function: renderFunction, params } = matchingFunction;
    renderFunction(...params);
  }
  console.log('currentGenre', currentGenre); 
  console.log('currentSiteId', currentSiteId);
}


function renderMasks() {
    renderMasksTops();
    renderMasksBottom();
    renderMasksNav();
  }

  function renderMasks2() {
    renderBookSite("mask");
  }
  

function renderMasksTops() {
    let siteIdToRender = "Die Masken von Florenz";
    let targetDivIdTop = "maskTop";
    renderSiteDetails(topSites, siteIdToRender, targetDivIdTop);
  }
  
  function renderMasksBottom() {
    let bookIdToRender = "Die Masken von Florenz";
    let targetDivId = "maskBottom";
    renderBookDetails(
      historicalBooks,
      bookIdToRender,
      targetDivId
    );
  }
  
  function renderMasksNav() {
    let siteIdToRenderNav = "Die Masken von Florenz";
  let targetDivIdNav = "maskNav";
  renderNav(navSites, siteIdToRenderNav, targetDivIdNav);
  }
  

  function findSiteIndexById(siteArray, siteId) {
    for (let i = 0; i < siteArray.length; i++) {
      if (siteArray[i].siteId === siteId) {
        return i;
      }
    }
    return -1;
  }
  
  function getTranslationStatusText(translationExists, defaultLanguage) {
    if (translationExists === "true") {
      return defaultLanguage === "de"
        ? "Eine Übersetzung ins Englische ist vorhanden."
        : "An English translation is available.";
    } else {
      return defaultLanguage === "de"
        ? "Bis jetzt ist keine Übersetzung ins Englische verfügbar."
        : "There is no English translation available yet.";
    }
  }

  function renderSiteDetails(siteData, siteId, divId) {
    let topDiv = document.getElementById(divId);
    let siteIndex = findSiteIndexById(siteData, siteId);
    if (siteIndex !== -1) {
      let site = siteData[siteIndex].languages[defaultLanguage];
      let translationStatusText = getTranslationStatusText(siteData[siteIndex].translationExists, defaultLanguage);
      let templateHTML = `
        <h3>${site.title}</h3>
        <div class="siteParagraphs">
          ${site.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
        <p>${translationStatusText}</p>
        <div class="siteNavTop">
          ${site.links.map(link => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`).join('')}
        </div>`;
      topDiv.innerHTML = templateHTML;
    } else {
      console.log(`SiteId '${siteId}' not found`);
    }
  }

  function renderBookDetails(bookData, bookId, divId) {
    let bottomDiv = document.getElementById(divId);
    let bookIndex = findBookIndexById(bookData, bookId);
    if (bookIndex !== -1) {
      let book = bookData[bookIndex].languages[defaultLanguage];
      let templateHTML = `
        <div class="bookContainer">
          <img class="cover" src="${book.imageURL}" alt="">
          <div class="bookContainerText">
            <h3>${book.title}</h3> 
            <p>${book.paragraphs[0]}</p>
            <p>${book.paragraphs[1]}</p>
            <a class="amazonLink" href="${book.externalLink}">Link zu Amazon</a>
          </div>
        </div>`;
      bottomDiv.innerHTML = templateHTML;
    } else {
      console.log(`BookID '${bookId}' not found`);
    }
  }

  async function includeHTML2() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

  function renderMainSite2(siteId, divId) {
    let topDiv = document.getElementById(divId);
    let siteIndex = findSiteIndexById(mainSites, siteId);
  
    if (siteIndex !== -1) {
      let site = mainSites[siteIndex].languages[defaultLanguage];
      let templateHTML = `
        <h2>${site.title}</h2>
        <div class="siteParagraphs">
          ${site.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
        <h3>${site.subtitle}</h3>
        <div class="siteNavTop">
          ${site.links.map(link => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`).join('')}
        </div>`;
      topDiv.innerHTML = templateHTML;
    } else {
      console.log(`SiteId '${siteId}' not found`);
    }
  }

  

function renderMainSite2(siteId) {
  currentSiteId = siteId;
  currentGenre = siteId;
  let divId = siteId+'Top';
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(mainSites, siteId);
  if (siteIndex !== -1) {
    let site = mainSites[siteIndex].languages[defaultLanguage];
    let templateHTML = `
      <h2>${site.title}</h2>
      <div class="siteParagraphs">
        ${site.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>`;
    for (let section of site.sections) {
      templateHTML += `
        <h3>${section.subtitle}</h3>
          <div class="sectionParagraphs">
            ${section.paragraphs
              .map((paragraph) => `<p>${paragraph}</p>`)
              .join("")}
          </div>
          <div class="siteNavTop">
            ${section.links
              .map(
                (link) =>
                  `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`)
              .join("")}
          </div>
        </div>`;
    }
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
  renderNav(navSites, 'general', `${siteId}Nav`);
}

function renderBookSiteDetails2(siteData, siteId, divId) {
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(siteData, siteId);
  if (siteIndex !== -1) {
    let site = siteData[siteIndex].languages[defaultLanguage];
    let translationStatusText = getTranslationStatusText(
      siteData[siteIndex].translationExists,
      defaultLanguage
    );
    let templateHTML = `
      <h3>${site.title}</h3>
      <div class="siteParagraphs">
        ${site.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <p>${translationStatusText}</p>
      <div class="siteNavTop">
        ${site.links
          .map(
            (link) =>
              `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`
          )
          .join("")}
      </div>`;
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

function renderBookDetails2(bookData, bookId, divId) {
  let bottomDiv = document.getElementById(divId);
  let bookIndex = findBookIndexById(bookData, bookId);

  if (bookIndex !== -1) {
    let book = bookData[bookIndex].languages[defaultLanguage];
    let templateHTML = `
      <div class="bookContainer">
        <img class="cover" src="${book.imageURL}" alt="">
        <div class="bookContainerText">
          <h3>${book.title}</h3> 
          <p>${book.paragraphs[0]}</p>
          <p>${book.paragraphs[1]}</p>
          <a class="amazonLink" href="${book.externalLink}">Link to Amazon</a>`;

    // Check if the book is part of a series
    if (bookData[bookIndex].seriesId) {
      templateHTML += `<p>Part of series with ID: ${bookData[bookIndex].seriesId}</p>`;
    }

    templateHTML += `</div>
      </div>`;

    bottomDiv.innerHTML = templateHTML;
  } else {
    console.log(`BookID '${bookId}' not found`);
  }
}
  
function renderSeries(genre, series) {
  currentSiteId = series;
  currentGenre = genre;
  let seriesData = findBooksBySeries(genre, series);
  console.log(seriesData);
  let bookId = seriesData[0].bookId;
  renderBookSite(genre, series);
}


function generateBookDetailsTemplate2(book) {
  return `
    <div class="bookContainer">
      <img class="cover" src="${book.imageURL}" alt="">
      <div class="bookContainerText">
        <h3>${book.title}</h3> 
        <p>${book.paragraphs[0]}</p>
        <p>${book.paragraphs[1]}</p>
        <a class="amazonLink" href="${book.externalLink}">Link to Amazon</a>
      </div>
    </div>`;
}

function renderBookDetails4(bookData, bookId, divId) {
  console.log(bookData);
  let bottomDiv = document.getElementById(divId);
  let bookIndex = findBookIndexById(bookData, bookId);

  if (bookIndex !== -1) {
    let book = bookData[bookIndex].languages[defaultLanguage];
    let templateHTML = generateBookDetailsTemplate(book);

    if (bookData[bookIndex].seriesId) {
      let seriesBooks = bookData.filter(
        (b) => b.seriesId === bookData[bookIndex].seriesId && b.bookId !== bookId
      );
      for (let seriesBook of seriesBooks) {
        templateHTML += generateBookDetailsTemplate(seriesBook.languages[defaultLanguage]);
      }
    }
    bottomDiv.innerHTML = templateHTML;
  } else {
    console.log(`BookID '${bookId}' not found`);
  }
}

function renderBookDetails3(bookData, bookId, divId) {
  let bottomDiv = document.getElementById(divId);
  let bookIndex = findBookIndexById(bookData, bookId);
  if (bookIndex !== -1) {
    let book = bookData[bookIndex].languages[defaultLanguage];
    let templateHTML = `
      <div class="bookContainer">
        <img class="cover" src="${book.imageURL}" alt="">
        <div class="bookContainerText">
          <h3>${book.title}</h3> 
          <p>${book.paragraphs[0]}</p>
          <p>${book.paragraphs[1]}</p>
          <a class="amazonLink" href="${book.externalLink}">Link zu Amazon</a>
        </div>
      </div>`;
    bottomDiv.innerHTML = templateHTML;
  } else {
    console.log(`BookID '${bookId}' not found`);
  }
}



function renderContentBasedOnPage2() {
  const path = window.location.pathname;
  if (path === "/index.html") {
      renderMainSite('home', 'homeTop');
  } else if (path === "/fantasy.html") {
      renderMainSite('fantasy', 'fantasyTop')
  } else if (path === "/historical.html" ) {
      renderMainSite('historical', 'historicalTop')
  } else if (path === "/novellas.html") {
      renderMainSite('novellas', 'novellasTop');
      renderNovellas(); 
  } else if (path === "/about-me.html") {
      renderAboutMe();
  } else if (path === "/booksites/odyssee.html" || path === "/booksites/mind-on-fire.html" || path === "/booksites/alster-diamonds.html" || path === "/booksites/masks-of-florence.html") {
      
  renderBookSite(globalGenre, globalSiteId);
}
}



function generatePersonTableTemplate2(siteId, personGroup, defaultLanguage) {
  let subHeaderId = siteId + personGroup.groupId; //unique ID for each header even if naming in JSON is similiar
  let templateHTML = `<h3 class="personGroup" id="${subHeaderId}" >${personGroup[defaultLanguage]}</h3>`;
  for (let member of personGroup.members) {
    templateHTML += `
      <table class="personageTable">
        <tr>
          <td class="personageName">${member.name}</td>
          <td>${member[defaultLanguage]}</td>
        </tr>
      </table>`;
  }
  return templateHTML;
}