// global variables
let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = "de";
let currentSiteId;
let currentGenre;
let menuTitles;
let navSites;
let mainSites;
let overview;
let personSitesHeader;
let pageData;
const functionMap = {
  "/fantasy.html": renderMainSite,
  "/historical.html": renderMainSite,
  "/novellas.html": renderNovellas,
  "/about-me.html": renderAboutMe,
  "/booksites": renderBookSite,
  "persons": renderPersonage,
  "background": renderBackground,
  "familytrees": renderFamilyTrees,
  "sources": renderSourcesSite,
  "timeline": renderTimeline,
  "bonus": renderBonusChapter
};

/**
 * initializes all sites
 * initializes loading HTML templates
 * initializes loading general data needed for most sites
 * initializes browser language check
 * initializes rendering content based on the respective page
 * initializes rendering shared content for all pages
 */
async function init() {
  await includeHTML();
  await loadGeneralData();
  await checkBrowserLanguage();
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
  //jsonify();
}

/**
 * loads data for the global variables
 * menuTitles, navSites, mainSites, overview, pageFunctions
 */
async function loadGeneralData() {
  menuTitles = await fetchJSON("/JSONs/general/menuTitles.json");
  navSites = await fetchJSON("/JSONs/general/navSites.json");
  mainSites = await fetchJSON("/JSONs/general/mainSites.json");
  overview = await fetchJSON("/JSONs/general/overview.json");
  pageData = await fetchJSON("/JSONs/general/pageFunctions.json");
}

/**
 * checks the browser language and sets default language accordingly
 */
async function checkBrowserLanguage() {
  if (browserLanguage.startsWith("de")) {
    defaultLanguage = "de";
  } else {
    defaultLanguage = "en";
  }
}

/**
 * sets default language to german as chosen by user via button
 */
function german() {
  defaultLanguage = "de";
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
}

/**
 * sets default language to english as chosen by user via button
 */
function english() {
  defaultLanguage = "en";
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
}

/**
 * starts the rendering of content equal for all pages - e.g. header
 */
function renderSharedContent() {
  renderMenu();
  renderMobileMenu();
  renderSubHeaderBottom();
}

/**
 * loads json data from the folder jsons
 * @param {string} path - path to respective json
 */
async function fetchJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Laden der JSON Datei:", error);
  }
}


/**
 * renders the menu bar using the global variable menuTitles based on default language
 */
async function renderMenu() {
  const navElement = document.getElementById("desktopNav");
  navElement.innerHTML = "";

  // Burger-Menu (Hamburger-Menü) hinzufügen
  const burgerMenu = document.createElement("div");
  burgerMenu.id = "burgerMenu";
  burgerMenu.onclick = showMobileMenu;
  burgerMenu.innerHTML = `<img class="burgerMenuImage" src="/assets/img/icons/burger-menu.png">`;
  navElement.appendChild(burgerMenu);

  // Menüpunkte hinzufügen
  menuTitles.forEach((menuItem) => {
    const title = menuItem[defaultLanguage];
    const link = document.createElement("a");
    link.classList.add("navLink");
    link.href = menuItem.link;
    link.innerHTML = title;

    if (menuItem.id === currentGenre) {
      link.classList.add("highlighted");
    }
    navElement.appendChild(link);
  });
}

/**
 * adds the burger menu symbol to the header
 */
function renderBurgerMenu() {
  const burgerMenu = document.createElement("div");
  burgerMenu.id = "burgerMenu";
  burgerMenu.onclick = showMobileMenu;
  burgerMenu.innerHTML = `<img class="burgerMenuImage" src="/assets/img/icons/burger-menu.png">`;
  navElement.appendChild(burgerMenu);
}

/**
 * renders the mobile menu using the global variable menuTitles based on default language
 */
function renderMobileMenu() {
  const mobileNavElement = document.getElementById("mobileNav");
  mobileNavElement.innerHTML = "";

  // Close-Button hinzufügen
  const closeButton = document.createElement("span");
  closeButton.id = "closeButton";
  closeButton.innerHTML = `<img src="/assets/img/icons/close.png" onclick="closeMobileMenu()">`;
  mobileNavElement.appendChild(closeButton);

  // Menüpunkte hinzufügen
  menuTitles.forEach((menuItem) => {
    const title = menuItem[defaultLanguage];
    const link = document.createElement("a");
    link.classList.add("mobileNavLink");
    link.href = `${menuItem.link}`;
    link.innerHTML = title;
    if (menuItem.id === currentGenre) {
      link.classList.add("highlighted");
    }
    mobileNavElement.appendChild(link);
  });
}

/**
 * renders the bottom part of the menu based on default language
 */
function renderSubHeaderBottom() {
  let subHeaderBottom = document.getElementById("subHeaderBottom");
  subHeaderBottom.innerHTML = "";
  if (defaultLanguage == "de") {
    subHeaderBottom.innerHTML = "Geschichten - Hintergründe - Bonuskapitel";
  } else {
    subHeaderBottom.innerHTML = "Stories - Backgrounds - Bonus chapter";
  }
}

/**
 * initializes rendering the the content of a respective page based on url and default language
 * uses global variable pageData (loaded at init)
 * uses global variable functionMap
 */
async function renderContentBasedOnPage() {
  let path = window.location.pathname;
  if (path === "/" || path === "/index.html") {
    renderHomePage("home");
    return;
  }
  let matchingEntry = pageData.mainSites.find(entry => path.includes(entry.path)) ||
                      pageData.bookSites.find(entry => path.includes(entry.path)) ||
                      pageData.personSites.find(entry => path.includes(entry.path)) ||
                      pageData.backgroundSites.find(entry => path.includes(entry.path)) ||
                      pageData.familyTreeSites.find(entry => path.includes(entry.path)) ||
                      pageData.sourcesSites.find(entry => path.includes(entry.path)) ||
                      pageData.timelineSites.find(entry => path.includes(entry.path)) ||
                      pageData.bonusChapterSites.find(entry => path.includes(entry.path));

  if (matchingEntry) {
    let renderFunction;
    if (matchingEntry.path.includes("person")) {
      renderFunction = functionMap["persons"];
    } else if (matchingEntry.path.includes("background")) {
      renderFunction = functionMap["background"];
    } else if (matchingEntry.path.includes("familytrees")) {
      renderFunction = functionMap["familytrees"];
    }else if (matchingEntry.path.includes("sources")) {
      renderFunction = functionMap["sources"];
    }else if (matchingEntry.path.includes("timeline")) {
      renderFunction = functionMap["timeline"];
    }else if (matchingEntry.path.includes("bonus")) {
      renderFunction = functionMap["bonus"];
    }else {
      renderFunction = functionMap[matchingEntry.path] || functionMap["/booksites"];
    }
    
    if (renderFunction) {
      renderFunction(...matchingEntry.params);
    }
  }
}

/**
 * includes the HTML templates
 */
async function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      await fetch(file)
        .then((response) => response.text())
        .then((data) => {
          elmnt.innerHTML = data;
          elmnt.removeAttribute("w3-include-html");
        })
        .catch((error) => {
          console.error(`Error fetching HTML: ${error}`);
        });
    }
  }
}
