// function for special site about me

/**
* initializes rendering of about me page
* initializes rendering the navigation at the bottom 
* @param {string} id - needed for nav highlight
*/
function renderAboutMe(id) {
  currentGenre = id;
  let headline = document.getElementById("aboutMeHeadline");
  let aboutMeText = document.getElementById("aboutMeText");
  headline.innerHTML = "";
  aboutMeText.innerHTML = "";
  if (defaultLanguage == "de") {
    headline.innerHTML = templateAboutMeHeadGerman();
    aboutMeText.innerHTML = templateAboutMeTextGerman();
  } else {
    headline.innerHTML = templateAboutMeHeadEnglish();
    aboutMeText.innerHTML = templateAboutMeTextEnglish();
  }
  renderNav(navSites, "general", `aboutMeNav`);
}

/**
* generates the header for the about me page in German
*/
function templateAboutMeHeadGerman() {
  let template = `<h2>Was gibt es über mich zu sagen ...</h2>`;
  return template;
}

/**
* generates the header for the about me page in English
*/
function templateAboutMeHeadEnglish() {
  let template = `<h2>What is there to say about me ...</h2>`;
  return template;
}

/**
* generates the text for the about me page in German
*/
function templateAboutMeTextGerman() {
  let template = /*html*/ `<p>
    Es gab keine Zeit in meinem Leben, in der ich mir nicht Geschichten
    ausgedacht habe. So richtig zu schreiben begann ich mit zwölf, als
    der erste Computer Einzug in unsere Familie hielt und meine Finger
    zum ersten Mal meinen Gedanken folgen konnten. Meine erste
    Geschichte schrieb ich aus einem sicher vielen Lesern vertrauten
    Grund – der Ärger über ein gerade gelesenes Buch und der gute Rat,
    es dann doch eben besser zu machen.
  </p>
  <p>
    In meinen Fall – zwölf Jahre – ärgerte ich mich gerade darüber, dass
    den Helden einer Geschichte immer so viele Steine in den Weg gelegt
    wurden. Ich wollte das Gegenteil: ein Buch schreiben, in dem alles
    glatt ging und nur Gutes passierte. Allerdings musste ich dann
    relativ schnell feststellen, wie unglaublich langweilig solch eine
    Geschichte doch ist. Zudem bemerkte ich, dass ich, wenn ich meinem
    Helden Steine in den Weg legen konnte, als Autorin auch die Macht
    besaß, sie wieder wegzuräumen. Und mit dieser Erkenntnis begann ich
    zu schreiben – und hörte einfach nie wieder auf.
  </p>
  <p>Über lange Jahre schrieb ich nur für mich selbst, schrieb, wie andere Leute lesen, schrieb und gönnte meinen Geschichten eine eigenständige Existenz. Ich war geizig damit, rückte so gut wie nie etwas heraus, und erst die Sänger änderten meine Einstellung: Ich hatte zum ersten Mal eine Geschichte, die ich teilen wollte.</p>
  <p>In meinem „anderen“ Leben habe ich eine naturwissenschaftliche Karriere gemacht, brauche Analytik und Logik und kann der Fantasie nur einen kleinen Platz einräumen. In meinem „anderen“ Leben würden die wenigsten Menschen verstehen, was meine Geschichten mir bedeuten.</p>
  <p>Und deshalb, lieber Leser, verzeih, wenn es nur wenige Informationen über „die“ Anna K. Thomas gibt. Glaube mir einfach, wenn ich sage, ich bin analytisch und emotional, logisch und empathisch, ganz verrückt und ganz normal, schreibe für mein Leben gerne, und lese, lese, lese…</p>`;
  return template;
}

/**
* generates the text for the about me page in German
*/
function templateAboutMeTextEnglish() {
  let template = /*html*/`
    <p>
    There was never a time in my life when I didn't make up stories. I started writing for real when I was twelve, when the first computer arrived in our family and my fingers could
    could follow my thoughts for the first time. 
    I wrote my first story for a reason that I'm sure is familiar to many readers - anger about a book I had just read and the good advice
    to do it better.  </p>
    <p>
    In my case - twelve years - I was annoyed by the fact that
    so many obstacles were put in the way of the heroes of a story.
    I wanted to write the opposite: a book in which everything went
    smoothly and only good things happened. However, I quickly realised how incredibly boring such a story is.
    I also realised that if I could put obstacles in my hero's path, as an author I also had the power to
    to remove them. And with this realisation, I began writing - and simply never stopped.
  </p>
  <p>For many years I only wrote for myself, wrote like other people read, wrote and gave my stories an independent existence. I was stingy with them, hardly ever giving anything away, and it was only the bards who changed my attitude: For the first time, I had a story I wanted to share.</p>
  <p>In my "other" life, I have made a career in science, need analytics and logic and can only give a small place to fantasy. In my "other" life, very few people would understand what my stories mean to me.</p>
  <p>And so, dear reader, forgive me if there is little information about "the" Anna K. Thomas. Just believe me when I say that I am analytical and emotional, logical and empathetic, completely crazy and completely normal, love to write, and to read, read, read...</p>
  `;
  return template;
}

// function for special site novellas

/**
* initializes rendering the novella page
* @param {string} genre - needed for menu highlight
*/
function renderNovellas(genre) {
  currentGenre = genre;
  let topDivId = genre + "Top";
  let bottomDivID = genre + "Bottom";
  let genreData = findBooksByGenre(genre);
  renderMainSite(genre, topDivId);
  renderBookDetails(genreData, bottomDivID);
}

// function for navMenu on home Page
function renderHomePage() {
  renderMainSite("home");
  renderHomeOverview();
}

function renderHomeOverview() {
  let homeBottom = document.getElementById("homeBottom");
  homeBottom.innerHTML = templateOverview();
  fillOverviewColumns();
}

function templateOverview() {
  let columns = "";
  for (let i = 0; i < overview.length; i++) {
    if (defaultLanguage == "de") {
      columnHeader = overview[i].de;
    } else {
      columnHeader = overview[i].en;
    }
    let genreLink = overview[i].genreLink;
    columns += `<div class="column" id="homeBottomColumn${i}">
      <a class="columnHeader" href="${genreLink}" >${columnHeader}</a> </div>`;
  }
  return columns;
}

function fillOverviewColumns() {
  for (let i = 0; i < overview.length; i++) {
    targetdiv = document.getElementById(`homeBottomColumn${i}`);
    booksArray = overview[i].books;
    for (let j = 0; j < booksArray.length; j++) {
      if (defaultLanguage == "de") {
        bookName = booksArray[j].languages.de;
      } else {
        bookName = booksArray[j].languages.en;
      }
      bookLink = booksArray[j].internalLink;
      targetdiv.innerHTML += /*html*/ `<a class="columnContent" href="${bookLink}" >${bookName}</a>`;
    }
  }
}

function generateOverviewColumns(overviewData) {
  let columnsHTML = "";
  overviewData.forEach((genre) => {
    const genreHTML = generateGenreHTML(genre.genre);
    const booksHTML = generateBooksHTML(genre.genre.books);
    columnsHTML += `<div class="genre-column">${genreHTML}${booksHTML}</div>`;
  });
  return columnsHTML;
}

function generateGenreHTML(genre) {
  return `<h2 class="center"><a href="${genre.genreLink}">${genre[defaultLanguage]}</a></h2>`;
}

function generateBooksHTML(books) {
  let booksHTML = "<ul>";
  books.forEach((book) => {
    const bookHTML = generateBookHTML(
      book.languages[defaultLanguage],
      book.internalLink
    );
    booksHTML += `<li>${bookHTML}</li>`;
  });

  booksHTML += "</ul>";
  return booksHTML;
}

function generateBookHTML(book, link) {
  return `<a href="${link}">${book}</a>`;
}

// functions for personages sites

/**
* initializes rendering of personage sites
* loads data for personSitesHeader (global variable)
* loads data for personage 
* @param {string} genre - needed for nav highlight
* @param {string} navId - id for rendering nav such as masks
* @param {string} siteId - id for subsite such as masksPersons
* @param {string} JsonId - id for JSON such as personsMasks
*/
async function renderPersonage(genre, navId, siteId, JsonId) {
  currentSiteId = siteId;
  currentGenre = genre;
  personSitesHeader = await fetchJSON('/JSONS/persons/personSitesHeader.json');
  let personsUrl = `/JSONS/persons/${JsonId}.json`;
  let personageObject = await fetchJSON(personsUrl);
  renderPersonageTop(siteId);
  renderPersonageBottom(siteId, personageObject);
  renderNav(navSites, navId, `${siteId}Nav`);
}

/**
* renders top part of personage sites
* @param {string} genre - genre such as historical
* @param {string} siteId - id for subsite such as masksPersons
*/
function renderPersonageTop(siteId) {
  let divId = siteId + 'Top';
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = '';
  let siteIndex = personSitesHeader.findIndex(site => site.siteId === siteId);
  if (siteIndex !== -1) {
    let site = personSitesHeader[siteIndex].languages[defaultLanguage];
    topDiv.innerHTML += `<h2>${site.header}</h2>`;
    for (let subHeader of site.subHeaders) {
      topDiv.innerHTML += `<h3><a href="#${subHeader.subHeaderLink}">${subHeader.subHeaderText}</a></h3>`;
    }
    for (let paragraph of site.paragraphs) {
      topDiv.innerHTML += `<p>${paragraph}</p>`;
    }
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

/**
* renders bottom part of personage sites
* @param {string} siteId - id for subsite such as masksPersons
* @param {Object[]} personageObject - loaded JSON 
*/
function renderPersonageBottom(siteId, personageObject){
  let divId = siteId + 'Bottom';
  let bottomDiv = document.getElementById(divId);
  bottomDiv.innerHTML = '';
  bottomDiv.innerHTML = generatePersonAllTemplate (siteId, personageObject);
}

/**
* generates the overall template bottom part of personage sites
* @param {string} siteId - id for subsite such as masksPersons
* @param {Object[]} personageObject - loaded JSON 
* @returns html template
*/
function generatePersonAllTemplate (siteId, personageObject) {
  let templateHTML = '';
for (let i = 0; i < personageObject.length; i++) {
  templateHTML += generatePersonTableTemplate(siteId, personageObject[i])
}
return templateHTML;
}

/**
* generates the table in of bottom part of personage sites
* @param {string} siteId - id for subsite such as masksPersons
* @param {Object[]} personGroup - subgroup of loaded JSON 
* @returns html template
*/
function generatePersonTableTemplate(siteId, personGroup) {
  let subHeaderId = siteId + personGroup.groupId; // unique ID for each header even if naming in JSON is similar
  let templateHTML = `<h3 class="personGroup" id="${subHeaderId}" >${personGroup[defaultLanguage]}</h3>`;
  templateHTML += `
    <table class="contentTable">
      <tr>
        <th class="personageName">Name</th>
        <th>${defaultLanguage === 'de' ? 'Beschreibung' : 'Description'}</th>
      </tr>`;
  for (let member of personGroup.members) {
    templateHTML += `
      <tr>
        <td class="personageName">${member.name}</td>
        <td>${member[defaultLanguage]}</td>
      </tr>`;
  }
  templateHTML += `</table>`;
  return templateHTML;
}

//Function for background pages

/**
* initializes rendering of the background site
* determines the following functions based on bookId
* initializes rendering the bottom nav based on global variable navSites and bookId
* @param {string} genre - needed for nav highlight
* @param {string} bookId - id for respective books such as masks
*/
function renderBackground(genre, bookId) {
  currentGenre = genre;
  renderBackgroundContent(bookId);
  renderNav(navSites, bookId, `${bookId}BackgroundNav`);
}

/**
* renders of the top of background site
* @param {string} bookId - id for respective books such as masks
*/
async function renderBackgroundContent(bookId) {
  let divId = bookId + 'BackgroundTop';
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = '';
  topDiv.innerHTML = await generateBackgroundContent(bookId)
}

/**
* generate content for top of background page after loading content from json file
* @param {string} bookId - id for respective books such as masks
* @returns {HTMLElement} html template
*/
async function generateBackgroundContent(bookId) {
  let backgroundInfoArray = await findDataById('background', 'info');
  let backgroundInfo = await findDataInArray(bookId, backgroundInfoArray);
  let templateHTML = `<h2 class="personGroup">${backgroundInfo.headline}</h2>`;
  templateHTML += `<h3 class="personGroup">${backgroundInfo.subheader}</h3>`;
  for (let paragraph of backgroundInfo.paragraphs) {
    templateHTML += `<p>${paragraph}</p>`;
  }
  return templateHTML;
}


// function for picture sites such as family trees

/**
* initializes rendering of the family trees site
* determines the following functions based on bookId
* initializes rendering the bottom nav based on global variable navSites and bookId
* @param {string} genre - needed for nav highlight
* @param {string} bookId - id for respective books such as masks
*/
function renderFamilyTrees(genre, bookId) {
  currentGenre = genre;
  renderFamilyTreeContent(bookId);
  renderNav(navSites, bookId, `${bookId}FamilyTreeNav`);
}

/**
* renders of the family tree site
* @param {string} bookId - id for respective books such as masks
*/
async function renderFamilyTreeContent(bookId) {
  let divId = bookId + 'FamilyTreeTop';
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = '';
  topDiv.innerHTML = await generateFamilyTreeTop(bookId)
}

/**
* generates content for the family tree page after loading content from json file
* @param {string} bookId - id for respective books such as masks
* @returns {HTMLElement} html template
*/
async function generateFamilyTreeContent(bookId) {
 let familyTree = await findDataById('familyTree', 'info');
 let familyTreeGroup = findDataInArray(bookId, familyTree);
 let templateHTML = `<h2 class="personGroup">${familyTreeGroup.headline}</h2>`;
 templateHTML += `<p>${familyTreeGroup.subheader}</p>`;
 for (let i = 0; i < familyTreeGroup.images.length; i++) {
   templateHTML += `<div class="pictureContainer"><h3 class="pictureHeader">${familyTreeGroup.images[i].subheaderImages}</h3>
   <img src="${familyTreeGroup.images[i].imageUrl}"></div>`;
 }
 return templateHTML;
}


// functions for sites with glossaries and/or sources 

/**
* initializes rendering of the source and glossary site
* determines the following functions based on bookId
* initializes rendering the bottom nav based on global variable navSites and bookId
* @param {string} genre - needed for nav highlight
* @param {string} bookId - id for respective books such as masks
*/
function renderSourcesSite(genre, bookId) {
  currentSiteId = bookId + 'Sources';
  currentGenre = genre;
  const booksWithGlossaries = ['odyssee', 'masks'];
  const booksWithSources = ['odyssee', 'masks', 'alster', 'mind'];
  const booksWithSpecialSource = ['children'];
if (booksWithGlossaries.includes(bookId)) {
  renderGlossary(bookId);
}
if (booksWithSources.includes(bookId)) {
  renderSources(bookId);
}
if (booksWithSpecialSource.includes(bookId)) {
  renderSpecialSources(bookId);
}
  renderNav(navSites, bookId, `${bookId}SourcesNav`);
}

// functions for glossary tables

/**
* initializes rendering of the glossary
* @param {string} bookId - id for respective books such as masks
*/
async function renderGlossary(bookId){
  let glossary = await findDataById('glossary', bookId);
  let divId = bookId + 'Glossary';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateGlossaryTemplate(glossary);
}

/**
* renders overall template for glossary
* @param {Object[]} glossary - respective glossary
* @returns {HTMLElement} html template
*/
function generateGlossaryTemplate(glossary) {
  let templateHTML = generateGlossaryHeader();
  templateHTML += generateGlossaryTable(glossary);
  return templateHTML;
}

/**
* renders header for glossary based on set language
* @returns {HTMLElement} html template
*/
function generateGlossaryHeader() {
  let templateHTML = '';
  let headline;
  if (defaultLanguage == 'de') {
    headline = 'Begriffsverzeichnis';
  } else {
    headline = 'Glossary';
  }
  templateHTML = /*html*/`
  <h2>${headline}</h2>`;
  return templateHTML;
}

/**
* renders table glossary based on set language
* @param {Object[]} glossary - respective glossary
* @returns {HTMLElement} html template
*/
function generateGlossaryTable(glossary) {
  let templateHTML = `
    <table class="contentTable">
      <tr>
        <th class="personageName">Name</th>
        <th>${defaultLanguage === 'de' ? 'Beschreibung' : 'Description'}</th>
      </tr>`;
  for (let term of glossary) {
    templateHTML += `
      <tr>
        <td class="personageName">${term.name}</td> 
        <td>${term[defaultLanguage]}</td>
      </tr>`;
  }
  templateHTML += `</table>`;
  return templateHTML;
}

// functions for Sources paragraphs

/**
* initializes rendering of the sources
* @param {string} bookId - id for respective books such as masks
*/
async function renderSources(bookId){
  let sourceData = await findDataById('sources', bookId);
  let divId = bookId + 'Sources';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateSourcesTemplate (sourceData);
}

/**
* renders overall template for source
* @param {Object[]} sourceData - respective source
* @returns {HTMLElement} html template
*/
function generateSourcesTemplate (sourceData) {
  let templateHTML = generateSourcesHeader();
  templateHTML += generateSourcesText(sourceData);
  return templateHTML;
}

/**
* renders header for source based on set language
* @returns {HTMLElement} html template
*/
function generateSourcesHeader() {
  let templateHTML = '';
  let headline;
  if (defaultLanguage == 'de') {
    headline = 'Quellen';
  } else {
    headline = 'Sources';
  }
  templateHTML = /*html*/`
  <h2>${headline}</h2>`;
  return templateHTML;
}

/**
* renders source text irrespective of set language
* @param {Object[]} sourceData - respective source data
* @returns {HTMLElement} html template
*/
function generateSourcesText(sourceData) {
  let templateHTML = '';
   for (let paragraph of sourceData) {
    templateHTML += `
      <p>${paragraph}</p>`;
  }
  return templateHTML;
}

/**
* renders the sources for special sites (in this case Children of Angels)
* @param {string} bookId - id for respective books such as children
*/
async function renderSpecialSources(bookId) {
 const sourceData = await findDataById('sources', bookId);
 const languageSourceData = sourceData[defaultLanguage];
 const targetElement = document.getElementById(`${bookId}Sources`);
 targetElement.innerHTML = generateSpecialSourcesContent(languageSourceData);
}

/**
* renders special source text based on set language
* @param {Object[]} languageSourceData - respective source data
* @returns {HTMLElement} html template
*/
function generateSpecialSourcesContent(languageSourceData) {
  let templateHTML = `<h2>${languageSourceData.header}</h2>`;
  languageSourceData.paragraphs.forEach(paragraph => {
    templateHTML += `<p>${paragraph}</p>`;
  });
  languageSourceData.subsections.forEach(subsection => {
    templateHTML += `<h3>${subsection.subheader}</h3>`;
    subsection.text.forEach(text => {
      templateHTML += `<p>${text}</p>`;
    });
    templateHTML += `<a href="${subsection.link}">${subsection.linktext}</a>`;
  });
  return templateHTML;
}


// functions for timeline Sites

/**
* initializes rendering of the timeline site
* determines the following functions based on bookId
* initializes rendering the bottom nav based on global variable navSites and bookId
* async because findDataById() is called twice in short succession
* @param {string} genre - genre such as historical
* @param {string} bookId - id for respective books such as masks
*/
async function renderTimeline(genre, bookId) {
  currentSiteId = bookId + 'Timeline';
  currentGenre = genre;
  await renderTimelineTop(bookId);
  renderTimelineBottom(bookId);
  renderNav(navSites, bookId, `${bookId}TimelineNav`);
}

/**
* initializes rendering of the timeline top part
* @param {string} bookId - id for respective books such as masks
*/
async function renderTimelineTop(bookId) {
  
  let divId = bookId + 'TimelineTop';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = await generateTimelineHeader(bookId);
}

/**
* generate header for timeline based on set language
* @param {string} bookId - id for respective books such as masks
* @returns {HTMLElement} html template
*/
async function generateTimelineHeader(bookId) {
  let templateHTML = '';
  let headline;
  let timelineHeaders = await findDataById('timeline', 'headers');
  let matchingHeader = timelineHeaders.find(header => header.bookId === bookId);
  if (matchingHeader) {
    headline = matchingHeader[defaultLanguage] || ''; 
  } else {
    headline = defaultLanguage === 'de' ? 'Zeittafel' : 'Timeline';
  }
  templateHTML = /*html*/`
    <h2>${headline}</h2>`;
  return templateHTML;
}

/**
* initializes rendering of the timeline bottom part
* @param {string} bookId - id for respective books such as masks
*/
async function renderTimelineBottom(bookId) {
  let timelineData = await findDataById('timeline', bookId);
  let divId = bookId + 'TimelineBottom';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateTimelineTable(timelineData);
}


/**
* generates overall table template for timeline bottom
* @param {json} timelineData - respective timeline json
* @returns {HTMLElement} html template
*/
function generateTimelineTable(timelineData) {
  let templateHTML = `
    <table class="contentTable">
      ${generateTableHeader()}
      ${generateTableRows(timelineData)}
    </table>`;
  return templateHTML;
}

/**
* generates table header based on set language
* @returns {HTMLElement} html template
*/
function generateTableHeader() {
  return `
    <tr>
      <th class="timelineYear">${defaultLanguage === 'de' ? 'Jahr' : 'Year'}</th>
      <th class="timelineDate">${defaultLanguage === 'de' ? 'Datum' : 'Date'}</th>
      <th class="timelineEvent">${defaultLanguage === 'de' ? 'Ereignis' : 'Event'}</th>
    </tr>`;
}

/**
* generates overall table rows for timeline bottom
* @param {json} timelineData - respective timeline json
* @returns {HTMLElement} html template
*/
function generateTableRows(timelineData) {
  let templateHTML = '';
  let previousYear = null;

  for (let timeline of timelineData) {
    for (let event of timeline.event) {
      templateHTML +=  generateTableRowSingle(previousYear, timeline, event);
      if (previousYear !== timeline.year) {
        previousYear = timeline.year;
      }
    }
  }
  return templateHTML;
}

/**
* generates a table row for timeline bottom
* year is only shown if it was not shown before (previous year)
* @param {string} previousYear - the year that was shown in the previous iteration
* @param {string} timelineData - respective timeline json
* @param {string} event - respective event
* @returns {HTMLElement} html template
*/
function generateTableRowSingle(previousYear, timelineData, event) {
  let templateHTML = `
  <tr>
    <td class="timelineYear">${previousYear === timelineData.year ? '' : timelineData.year}</td>
    <td class="timelineDate">${event.date}</td>
    <td class="timelineEvent">${event[defaultLanguage]}</td>
  </tr>`;
  return templateHTML
}

// functions for BonusChapters

/**
* initializes rendering of bonus chapter sites
* initializes getting url based on bonusId
* initializes loading and rendering of content based on bonusId
* initializes rendering the bottom navigation based site parameters
* @param {string} genre - genre such as historical
* @param {string} bookId - id for respective book
* @param {string} bonusId - id for respective bonus content
*/
async function renderBonus(genre, bookId, bonusId) {
  currentSiteId = bonusId;
  currentGenre = genre;
  targetDiv = bonusId+'Top';
  bonusData = await findDataById('bonus', bonusId);
  renderBonusContent(targetDiv, bonusData);
  renderNav(navSites, bookId, `${bonusId}Nav`);
}

/**
* renders of content based on bonusId
* initializes rendering the bottom navigation based site parameters
* @param {string} targetDiv - bonusId+'Top'
* @param {json} bonusData - respective json
*/
function renderBonusContent(targetDiv, bonusData) {
    const languageData = bonusData[defaultLanguage];
    const targetElement = document.getElementById(targetDiv);
    targetElement.innerHTML = `<h2>${languageData.header}</h2>`;
    targetElement.innerHTML += `<h3>${languageData.subheader}</h3>`;
    targetElement.innerHTML += `<a href="${languageData.link}">${languageData.linkText}</a>`;
    languageData.text.forEach(paragraph => {
      targetElement.innerHTML += `<p>${paragraph}</p>`;
    });
}
