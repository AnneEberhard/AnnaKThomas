let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = "en";
let globalSiteId;
let globalGenre;

async function init() {
  await includeHTML();
  checkBrowserLanguage();
}

function checkBrowserLanguage() {
  if (browserLanguage.startsWith("de")) {
    console.log(browserLanguage);
    defaultLanguage = "de";
    german();
  } else {
    console.log(browserLanguage);
    defaultLanguage = "en";
    english();
  }
}

function german() {
    defaultLanguage = "de";
    renderSharedContent();
    renderContentBasedOnPage();
  }
  
  function english() {
    defaultLanguage = "en";
    renderSharedContent();
    renderContentBasedOnPage();
  }
  
  function renderSharedContent() {
    renderMenu();
    renderMobileMenu();
  }

function renderMenu() {
  const navElement = document.getElementById("desktopNav");
  navElement.innerHTML = "";

  menuTitles.forEach((menuItem) => {
    const title = menuItem[defaultLanguage];
    const link = document.createElement("a");
    link.classList.add("navLink");
    link.href = menuItem.link;
    link.innerHTML = title;

    navElement.appendChild(link);
  });
}

function renderMobileMenu() {
    const mobileNavElement = document.getElementById("mobileNav");
    mobileNavElement.innerHTML = "";
    const logoLink = document.createElement("a");
    logoLink.href = `/${menuTitles[0].link}`;
    logoLink.innerHTML = `<img class="mobileLogo" src="/assets/img/logo/Anna-reverse-transparent.png"/>`;
    mobileNavElement.appendChild(logoLink);
    menuTitles.forEach((menuItem) => {
      const title = menuItem[defaultLanguage];
      const link = document.createElement("a");
      link.classList.add("mobileNavLink");
      link.href = `/${menuItem.link}`;
      link.innerHTML = title;
      mobileNavElement.appendChild(link);
    });
  }
  

  function renderContentBasedOnPage() {
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
    } else if (path === "/booksites/odyssee.html") {
    renderBookSite(globalGenre, globalSiteId);
  }
}

  async function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        await fetch(file)
          .then(response => response.text())
          .then(data => {
            elmnt.innerHTML = data;
            elmnt.removeAttribute("w3-include-html");
          })
          .catch(error => {
            console.error(`Error fetching HTML: ${error}`);
          });
      }
    }
  }
  




  