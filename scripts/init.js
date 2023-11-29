// for path navigation

let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = 'de';
let currentSiteId ;
let currentGenre;

async function init() {
  await includeHTML();
  checkBrowserLanguage();
}

function checkBrowserLanguage() {
  if (browserLanguage.startsWith("de")) {
    german();
  } else {
    english();
  }
}

function german() {
    defaultLanguage = "de";
    renderContentBasedOnPage(); //CAVE First because of genre/site identification
    renderSharedContent();  
  }
  
  function english() {
    defaultLanguage = "en";
    renderContentBasedOnPage(); //CAVE First because of genre/site identification
    renderSharedContent();
  }
  
  function renderSharedContent() {
    renderMenu();
    renderMobileMenu();
    renderSubHeaderBottom();
  }

  function renderMenu() {
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
  
  function renderBurgerMenu() {
    const burgerMenu = document.createElement("div");
    burgerMenu.id = "burgerMenu";
    burgerMenu.onclick = showMobileMenu;
    burgerMenu.innerHTML = `<img class="burgerMenuImage" src="/assets/img/icons/burger-menu.png">`;
    navElement.appendChild(burgerMenu);
  }
  


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
  let path = window.location.pathname;
  if (path === "/" || path === "/index.html") {
      renderHomePage('home');
      return;
  }
  let pageFunctions = [
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
    { path: "/booksites/bards-of-thuran.html", function: renderBookSite, params: ['fantasy','bards', true] },
    { path: "/subsitesElves/elves-persons.html", function: renderPersonage, params: ['fantasy','elves', 'elvesPersons', personsElves] },
    { path: "/subsitesAlster/alster-persons.html", function: renderPersonage, params: ['historical','alster', 'alsterPersons', personsAlster] },
    { path: "/subsitesMind/mind-persons.html", function: renderPersonage, params: ['historical','mind', 'mindPersons', personsMind] },
    { path: "/subsitesOdyssee/odyssee-persons.html", function: renderPersonage, params: ['historical','odyssee', 'odysseePersons', personsOdyssee] },
    { path: "/subsitesMasks/masks-persons.html", function: renderPersonage, params: ['historical','masks', 'masksPersons', personsMasks] },
    { path: "/subsitesBards/bards-persons.html", function: renderPersonage, params: ['fantasy','bards', 'bardsPersons', personsBards] },
    { path: "/subsitesChildren/children-persons.html", function: renderPersonage, params: ['fantasy','children', 'childrenPersons', personsChildren] },
    { path: "/subsitesAlster/alster-background.html", function: renderBackground, params: ['historical','alster', 'alsterBackground'] },
    { path: "/subsitesBards/bards-background.html", function: renderBackground, params: ['fantasy','bards', 'bardsBackground'] },
    { path: "/subsitesChildren/children-background.html", function: renderBackground, params: ['fantasy','children', 'childrenBackground'] },
    { path: "/subsitesElves/elves-background.html", function: renderBackground, params: ['fantasy','elves', 'elvesBackground'] },
    { path: "/subsitesMasks/masks-background.html", function: renderBackground, params: ['historical','masks', 'masksBackground'] },
    { path: "/subsitesMind/mind-background.html", function: renderBackground, params: ['historical','mind', 'mindBackground'] },
    { path: "/subsitesOdyssee/odyssee-background.html", function: renderBackground, params: ['historical','odyssee', 'odysseeBackground'] },
    { path: "/subsitesOdyssee/odyssee-familytrees.html", function: renderFamilyTrees, params: ['historical','odyssee', 'odysseeFamilyTree'] },
    { path: "/subsitesMasks/masks-familytrees.html", function: renderFamilyTrees, params: ['historical','masks', 'masksFamilyTree'] },
    { path: "/subsitesAlster/alster-familytrees.html", function: renderFamilyTrees, params: ['historical','alster', 'alsterFamilyTree'] },
    { path: "/subsitesElves/elves-familytrees.html", function: renderFamilyTrees, params: ['fantasy','elves', 'elvesFamilyTree'] },
    { path: "/subsitesMasks/masks-glossary.html", function: renderSourcesSite, params: ['historical','masks'] },
    { path: "/subsitesOdyssee/odyssee.glossary.html", function: renderSourcesSite, params: ['historical','odyssee'] },
    { path: "/subsitesAlster/alster-sources.html", function: renderSourcesSite, params: ['historical','alster'] },
    { path: "/subsitesMind/mind-sources.html", function: renderSourcesSite, params: ['historical','mind'] },
    { path: "/subsitesChildren/children-sources.html", function: renderSourcesSiteChildren, params: ['fantasy','children','childrenSources'] },
    { path: "/subsitesMasks/masks-timeline.html", function: renderTimeline, params: ['historical','masks'] },
    { path: "/subsitesOdyssee/odyssee-timeline.html", function: renderTimeline, params: ['historical','odyssee'] },
    { path: "/subsitesChildren/children-bonus.html", function: renderBonusChapter, params: ['fantasy','children', 'zach'] },
    { path: "/subsitesElves/elves-bonus-diana.html", function: renderBonusChapter, params: ['fantasy','elves', 'diana'] },
    { path: "/subsitesElves/elves-bonus-noel.html", function: renderBonusChapter, params: ['fantasy','elves', 'noel'] },
    { path: "/subsitesMind/mind-bonus-curtius.html", function: renderBonusChapter, params: ['historical','mind', 'curtius'] },
    { path: "/subsitesMind/mind-bonus-danton.html", function: renderBonusChapter, params: ['historical','mind', 'danton'] },
    { path: "/subsitesMind/mind-bonus-henri.html", function: renderBonusChapter, params: ['historical','mind', 'henri'] },
    { path: "/subsitesOdyssee/odyssee-bonus.html", function: renderBonusChapter, params: ['historical','odyssee', 'radegunde'] },
    { path: "/subsitesMasks/masks-bonus.html", function: renderBonusChapter, params: ['historical','masks', 'susanna'] },
    { path: "/imprint.html", function: renderImprint, params: [] },
    { path: "/privacy-policy.html", function: renderprivacyPolicy, params: [] },
  ];

  const matchingFunction = pageFunctions.find(entry => path.includes(entry.path));

  if (matchingFunction) {
      const { function: renderFunction, params } = matchingFunction;
      renderFunction(...params);
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
  




  