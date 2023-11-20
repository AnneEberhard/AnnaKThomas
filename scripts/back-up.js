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
  