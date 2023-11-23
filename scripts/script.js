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
     } else if (translationExists === "progress") {
      return defaultLanguage === "de"
      ? '<p>Eine Übersetzung ins Englische ist in Arbeit.</p>'
      :  '<p>A translation into English is in progress.</p>'
     }  else if (translationExists === "planned") {
      return defaultLanguage === "de"
      ? '<p>Eine Übersetzung ins Englische ist geplant.</p>'
      :  '<p>A translation into English is planned.</p>'
     }
     else {
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
function renderBookSite(genre, id, seriesExists) {
  console.log(genre, id, seriesExists)
  currentSiteId = id;
  currentGenre = genre;
  if (seriesExists == true) {
    data = findBooksBySeries(genre, id);
    bookId = data[0].bookId;
  } else {
    //data = findBooksByGenre(genre);
    data = findBookById(genre, id);
    bookId = id;
  }
  console.log('data found:', data);
  if (!data) {
    console.log(`Unknown book: ${id}`);
    return;
  }
  if(defaultLanguage == 'en' && id =='elves') {
    renderSeriesEnglish(data, `${id}Bottom`);
  } else {
    renderBookDetails(data,`${id}Bottom`);
  }
  renderBookSiteTop(topSites, id, `${id}Top`);
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

function renderSeriesEnglish(seriesData, divId) {
  console.log('data for english series:', seriesData)
  let bottomDiv = document.getElementById(divId);
  let templateHTML ='';
  for (let i = 0; i < seriesData.length; i++) {
    let bookEnglishArray = seriesData[i].languages[defaultLanguage];
        for (let seriesEnglishBook of bookEnglishArray) {
          console.log('english book:', seriesEnglishBook);
          templateHTML += generateBookDetailsTemplate(seriesEnglishBook);
        }
    bottomDiv.innerHTML = templateHTML;
  }
}


function renderBookDetails(bookData, divId) {
  console.log('exists', bookData);
  let bottomDiv = document.getElementById(divId);
  let templateHTML ='';
  if (bookData.length > 0 && bookData[0].seriesId) {
    let seriesBooks = bookData.filter(
      (b) => b.seriesId === bookData[0].seriesId);
    for (let seriesBook of seriesBooks) {
      templateHTML += generateBookDetailsTemplate(seriesBook.languages[defaultLanguage]);
    }
  } else {
    let book = bookData.languages[defaultLanguage];
    templateHTML = generateBookDetailsTemplate(book);
    }
    bottomDiv.innerHTML = templateHTML;
}


function generateBookDetailsTemplate(book) {
  console.log('generating data:',book);
  console.log(book.title);
  let paragraphsHTML = book.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

  return `
    <div class="bookContainer">
      <img class="cover" src="${book.imageURL}" alt="">
      <div class="bookContainerText">
        <h3>${book.title}</h3> 
        ${paragraphsHTML}
        <a class="amazonLink" href="${book.externalLink}">Link to Amazon</a>
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
