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