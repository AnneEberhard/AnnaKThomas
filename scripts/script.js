//functions used by several sections

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
     ? '<p>Eine Übersetzung ins Englische ist vorhanden.</p>'
    :  '<p>An English translation is available.</p>'
     } else {
    return defaultLanguage === "de"
      ? "<p>Bis jetzt ist keine Übersetzung ins Englische verfügbar.</p>"
      : "<p>There is no English translation available yet.</p>";
  }
}

//functions for main sites

function renderMainSite(siteId) {
  currentSiteId = siteId;
  currentGenre = siteId;
  let divId = siteId + 'Top';
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(mainSites, siteId);
  if (siteIndex !== -1) {
    let site = mainSites[siteIndex].languages[defaultLanguage];
    let templateHTML = generateSiteTitle(site.title) + generateSiteParagraphs(site.paragraphs);
    for (let section of site.sections) {
      templateHTML += generateSection(section);
    }
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
  renderNav(navSites, 'general', `${siteId}Nav`);
}

function generateSiteTitle(title) {
  return `<h2>${title}</h2>`;
}

function generateSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>`;
}

function generateSection(section) {
  return `
    <h3>${section.subtitle}</h3>
    <div class="sectionParagraphs">
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <div class="siteNavTop">
      ${section.links.map((link) => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`).join("")}
    </div>`;
}


//Functions for books sites
function renderBookSite(genre, bookId) {
  console.log(genre, bookId)
  currentSiteId = bookId;
  currentGenre = genre;
  let bookData = findBookById(genre, bookId);
  let genreData = findBooksByGenre(genre);
  console.log(bookData);
  console.log(genreData);
  if (!bookData) {
    console.log(`Unknown book: ${genre}`);
    return;
  }
  renderBookSiteTop(topSites, bookId, `${bookId}Top`);
  renderBookDetails(genreData, bookId, `${bookId}Bottom`);
  renderNav(navSites, bookId, `${bookId}Nav`);
}

function findBooksByGenre(targetGenre) {

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      return allBooks[i].books;
    }
  }
  return null;
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

function renderBookSiteTop(siteData, siteId, divId) {
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(siteData, siteId);

  if (siteIndex !== -1) {
    let site = siteData[siteIndex].languages[defaultLanguage];
    let translationExists = siteData[siteIndex].translationExists
    topDiv.innerHTML  =
      generateBookSiteTitle(site.title) +
      generateBookSiteParagraphs(site.paragraphs) +
      getTranslationStatusText(translationExists,defaultLanguage) +
      generateBookSiteNavTop(site.links);
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

function generateBookSiteTitle(title) {
  return `<h3>${title}</h3>`;
}

function generateBookSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>`;
}

function generateBookSiteNavTop(links) {
  return `<div class="siteNavTop">${links.map((link) => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`).join("")}</div>`;
}


function renderBookDetails(bookData, bookId, divId) {
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

function generateBookDetailsTemplate(book) {
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
