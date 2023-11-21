//functions for main sites - some subfunctions are tbf in booksites section
function renderMainSite(siteId, divId) {
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


//Functions for books sites
function renderBookSite(genre, siteId) {
  globalSiteId = siteId;
  globalGenre = genre;
  let bookData = findBooksByGenre(genre);
  if (!bookData) {
    console.log(`Unknown genre: ${genre}`);
    return;
  }
  renderSiteDetails(topSites, siteId, `${siteId}Top`);
  renderBookDetails(bookData, siteId, `${siteId}Bottom`);
  renderNav(navSites, siteId, `${siteId}Nav`);
}

function findBooksByGenre(targetGenre) {
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      return allBooks[i].books;
    }
  }
  return null;
}

function renderSiteDetails(siteData, siteId, divId) {
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

function findBookIndexById(bookArray, bookId) {
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].bookId === bookId) {
      return i;
    }
  }
  return -1;
}

function renderNav(navData, siteId, divId) {
  let navDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(navData, siteId);

  if (siteIndex !== -1) {
    let site = navData[siteIndex].languages[defaultLanguage];
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
