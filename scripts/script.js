let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = "en";

function init() {
  checkBrowserLanguage();
}

function checkBrowserLanguage() {
  if (browserLanguage.startsWith("de")) {
    defaultLanguage = "de";
    german();
  } else {
    defaultLanguage = "en";
    english();
  }
}

function renderMasks() {
  //renderBookDetails(historicalBooks,"Die Masken von Florenz","maskBottom");
  renderMasksTops();
  renderMasksBottom();
}

function german() {
  defaultLanguage = "de";
  renderMasksTops();
  renderMasksBottom();
}

function english() {
  defaultLanguage = "en";
  renderMasksTops();
  renderMasksBottom();
}


function renderMasksTops() {
  let siteIdToRender = "Die Masken von Florenz";
  let targetDivIdTop = "maskTop";
  renderSiteDetails(topSites, siteIdToRender, targetDivIdTop);
}

function findSiteIndexById(siteArray, siteId) {
  for (let i = 0; i < siteArray.length; i++) {
    if (siteArray[i].siteId === siteId) {
      return i;
    }
  }
  return -1;
}

function renderSiteDetails(siteData, siteId, divId) {
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(siteData, siteId);
  if (siteIndex !== -1) {
    let site = siteData[siteIndex].languages[defaultLanguage];
    let templateHTML = `
      <h3>${site.title}</h3>
      <div class="siteParagraphs">
        ${site.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
      </div>
      <div class="siteNavTop">
        ${site.links.map(link => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`).join('')}
      </div>`;
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
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

function findBookIndexById(bookArray, bookId) {
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].bookId === bookId) {
      return i;
    }
  }
  return -1;
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
