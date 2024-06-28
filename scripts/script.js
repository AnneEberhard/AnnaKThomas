//functions used by several sections

/**
* scrolls to top of the page
*/
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
* renders the navigation part at the bottom of each page
* @param {Object[]} siteArray - loaded jsonArray such as navSites, mainSites
* @param {string} siteId - id for site
* @returns {number} index of the site in the respective array or, if not found, -1
*/
function findSiteIndexById(siteArray, siteId) {
  for (let i = 0; i < siteArray.length; i++) {
    if (siteArray[i].siteId === siteId) {
      return i;
    }
  }
  return -1;
}

/**
* checks if a translation is true, progress or planned and genereates respective div with text
* @param {string} translationExists - information for the respective book out of topSites json
* @param {string} defaultLanguage - global variable that is checked depending on browser and user input
* @returns {HTMLElement} respective HTML 
*/
function getTranslationStatusText(translationExists, defaultLanguage) {
  if (translationExists === "true") {
    return defaultLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist vorhanden.</p>"
      : "<p>An English translation is available.</p>";
  } else if (translationExists === "progress") {
    return defaultLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist in Arbeit.</p>"
      : "<p>A translation into English is in progress.</p>";
  } else if (translationExists === "planned") {
    return defaultLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist geplant.</p>"
      : "<p>A translation into English is planned.</p>";
  } else {
    return defaultLanguage === "de"
      ? "<p>Bis jetzt ist keine Übersetzung ins Englische verfügbar.</p>"
      : "<p>There is no English translation available yet.</p>";
  }
}


/**
* renders the navigation part at the bottom of each page
* @param {Object[]} navSites - loaded jsonArray of navSites
* @param {string} siteId - id for site
* @param {string} divId - id for div in which to render
*/
function renderNav(navSites, siteId, divId) {
  let navDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(navSites, siteId);

  if (siteIndex !== -1) {
    let site = navSites[siteIndex].languages[defaultLanguage];
    let templateHTML = `
      <div class="siteNav">
        <h3>Navigation</h3>
        ${site.links
          .map((link) => `<a href="${link.url}">${link.text}</a>`)
          .join("")}
      </div>`;
    navDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found in navigation data`);
  }
}


/**
* determines names of json based on bookId
* @param {string} reference - id for respective references such as sources
* @param {string} id - id for respective books such as masks or for special cases such as info
* @returns {object} respective data
*/
async function findDataById(reference, id) {
    data = await fetchJSON(`/JSONs/${reference}/${reference}-${id}.json`);
    console.log(data);
    return data;
}

/**
* gets a subgroup out of a JsonArray based on id
* id is compared to backgroundId of the JsonArray
* @param {string} id - id for respective book such as mind
* @param {Object[]} array - respective JsonArray such as Familytrees
* @returns {Object[]} respective subgroup of the overarching JsonArray
*/
function findDataInArray(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].backgroundId === id) {
      return array[i].languages[defaultLanguage];
      }
    }
  return null;
}

function showMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.remove("dNone");
}

function closeMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.add("dNone");
}

//functions for main sites

function renderMainSite(siteId) {
  currentSiteId = siteId;
  currentGenre = siteId;
  let divId = siteId + "Top";
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(mainSites, siteId);
  if (siteIndex !== -1) {
    let site = mainSites[siteIndex].languages[defaultLanguage];
    let templateHTML =
      generateSiteTitle(site.title) + generateSiteParagraphs(site.paragraphs);
    for (let section of site.sections) {
      templateHTML += generateSection(section);
    }
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
  renderNav(navSites, "general", `${siteId}Nav`);
}

function generateSiteTitle(title) {
  return `<h2>${title}</h2>`;
}

function generateSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")}</div>`;
}

function generateSection(section) {
  return `
    <h3>${section.subtitle}</h3>
    <div class="sectionParagraphs">
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <div class="siteNavTop">
      ${section.links
        .map(
          (link) =>
            `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`
        )
        .join("")}
    </div>`;
}

//Functions for books sites
function renderBookSite(genre, id, seriesExists) {
  currentSiteId = id;
  currentGenre = genre;
  if (seriesExists == true) {
    data = findBooksBySeries(genre, id);
    bookId = data[0].bookId;
  } else {
    data = findBookById(genre, id);
    bookId = id;
  }
  if (!data) {
    console.log(`Unknown book: ${id}`);
    return;
  }
  if (defaultLanguage == "en" && id == "elves") {
    renderSeriesEnglish(data, `${id}Bottom`);
  } else {
    renderBookDetails(data, `${id}Bottom`);
  }
  renderBookSiteTop(id, `${id}Top`);
  renderNav(navSites, id, `${id}Nav`);
}

function findBooksByGenre(targetGenre) {
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      return allBooks[i].books;
    }
  }
  return null;
}

function findBooksBySeries(targetGenre, targetSeries) {
  let seriesArray = [];
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      for (let j = 0; j < allBooks[i].books.length; j++) {
        if (allBooks[i].books[j].seriesId === targetSeries) {
          let seriesBook = allBooks[i].books[j];
          seriesArray.push(seriesBook);
        }
      }
    }
  }
  return seriesArray.length > 0 ? seriesArray : null;
}

function findBookById(targetGenre, targetBook) {
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      for (let j = 0; j < allBooks[i].books.length; j++)
        if (allBooks[i].books[j].bookId === targetBook) {
          return allBooks[i].books[j];
        }
    }
  }
  return null;
}

function renderBookSiteTop(siteId, divId) {
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(topSites, siteId);

  if (siteIndex !== -1) {
    let site = topSites[siteIndex].languages[defaultLanguage];
    let translationExists = topSites[siteIndex].translationExists;
    topDiv.innerHTML =
      generateBookSiteTitle(site.title) +
      generateBookSiteParagraphs(site.paragraphs) +
      getTranslationStatusText(translationExists, defaultLanguage) +
      generateBookSiteNavTop(site.links);
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

function generateBookSiteTitle(title) {
  return `<h2>${title}</h2>`;
}

function generateBookSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")}</div>`;
}

function generateBookSiteNavTop(links) {
  return `<div class="siteNavTop">${links
    .map(
      (link) => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`
    )
    .join("")}</div>`;
}

function renderSeriesEnglish(seriesData, divId) {
  let bottomDiv = document.getElementById(divId);
  let templateHTML = "";
  for (let i = 0; i < seriesData.length; i++) {
    let bookEnglishArray = seriesData[i].languages[defaultLanguage];
    for (let seriesEnglishBook of bookEnglishArray) {
      templateHTML += generateBookDetailsTemplate(seriesEnglishBook);
    }
    bottomDiv.innerHTML = templateHTML;
  }
}

function renderBookDetails(bookData, divId) {
  let bottomDiv = document.getElementById(divId);
  let templateHTML = "";
  if (bookData.length > 0 && bookData[0].seriesId) {
    let seriesBooks = bookData.filter(
      (b) => b.seriesId === bookData[0].seriesId
    );
    for (let seriesBook of seriesBooks) {
      templateHTML += generateBookDetailsTemplate(
        seriesBook.languages[defaultLanguage]
      );
    }
  } else {
    let book = bookData.languages[defaultLanguage];
    templateHTML = generateBookDetailsTemplate(book);
  }
  bottomDiv.innerHTML = templateHTML;
}

function generateBookDetailsTemplate(book) {
  let paragraphsHTML = book.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  return `
    <div class="bookContainer">
      <img class="cover" src="${book.imageURL}" alt="">
      <div class="bookContainerText">
        <h3>${book.title}</h3> 
        ${paragraphsHTML}
        <a target="_blank" class="amazonLink" href="${book.externalLink}">Link to Amazon</a>
      </div>
    </div>`;
}

function findBookIndexById(bookArray, bookId) {
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].bookId === bookId) {
      return i;
    }
  }
  return -1;
}
