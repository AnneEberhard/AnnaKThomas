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
    german();
  } else {
    console.log(browserLanguage);
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
        { path: "/index.html", function: renderHomePage, params: [] },
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
        { path: "/booksites/bards-of-thuran.html", function: renderBookSite, params: ['fantasy','bards', true] }
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
  




  