// for path navigation


let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = "en";
let currentSiteId;
let currentGenre;

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
    renderSubHeaderBottom();
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
  
function renderSubHeaderBottom () {
    let subHeaderBottom = document.getElementById('subHeaderBottom');
    subHeaderBottom.innerHTML = '';
    if (defaultLanguage == 'de') {
        subHeaderBottom.innerHTML = 'Geschichten - Hintergründe - Bonuskapitel';
    } else {
        subHeaderBottom.innerHTML = 'Stories - Backgrounds - Bonus chapter';
    }
}

function renderContentBasedOnPage() {
    let pageFunctions = [
        { path: "/index.html", function: renderMainSite, params: ['home', 'homeTop'] },
        { path: "/fantasy.html", function: renderMainSite, params: ['fantasy', 'fantasyTop'] },
        { path: "/historical.html", function: renderMainSite, params: ['historical', 'historicalTop'] },
        { path: "/novellas.html", function: renderNovellas, params: ['novellas', 'novellasTop'] },
        { path: "/about-me.html", function: renderAboutMe, params: [] },
        { path: "/booksites/odyssee.html", function: renderBookSite, params: ['historical', 'odyssee'] },
        { path: "/booksites/mind-on-fire.html", function: renderBookSite, params: ['historical', 'mind'] },
        { path: "/booksites/alster-diamonds.html", function: renderBookSite, params: ['historical', 'alster'] },
        { path: "/booksites/masks-of-florence.html", function: renderBookSite, params: ['historical', 'masks'] }
      ];
    const path = window.location.pathname;
    const matchingFunction = pageFunctions.find(entry => path.includes(entry.path));
    if (matchingFunction) {
      const { function: renderFunction, params } = matchingFunction;
      renderFunction(...params);
    }
    console.log(currentGenre, currentSiteId);
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
  




  