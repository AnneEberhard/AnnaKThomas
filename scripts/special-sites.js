// function for special sites about me
function renderAboutMe(id) {
  debugger;
  currentSiteId = id;
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

function templateAboutMeHeadGerman() {
  let template = `<h2>Was gibt es über mich zu sagen ...</h2>`;
  return template;
}

function templateAboutMeHeadEnglish() {
  let template = `<h2>What is there to say about me ...</h2>`;
  return template;
}

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

function templateAboutMeTextEnglish() {
  let template = `
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

// function for special sites novellas
function renderNovellas(genre) {
  currentSiteId = genre;
  currentGenre = genre;
  let topDivId = genre + "Top";
  let bottomDivID = genre + "Bottom";
  let genreData = findBooksByGenre(genre);
  let bookId = genreData[0].bookId;
  renderMainSite(genre, topDivId);
  renderBookDetails(genreData, bottomDivID);
}

//function for navMenu on home Page

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

// for personages sites
function renderPersonage(genre, navId, siteId, personageObject) {
  renderPersonageTop(genre, siteId);
  renderPersonageBottom(siteId, personageObject);
  renderNav(navSites, navId, `${siteId}Nav`);
}

function renderPersonageTop(genre, siteId) {
  currentSiteId = siteId;
  currentGenre = genre;
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

function renderPersonageBottom(siteId, personageObject){
  let divId = siteId + 'Bottom';
  let bottomDiv = document.getElementById(divId);
  bottomDiv.innerHTML = '';
  bottomDiv.innerHTML = generatePersonAllTemplate (siteId, personageObject);
}

function generatePersonAllTemplate (siteId, personageId) {
  let templateHTML = '';
for (let i = 0; i < personageId.length; i++) {
  templateHTML += generatePersonTableTemplate(siteId, personageId[i])
}
return templateHTML;
}

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
function renderBackground(genre, bookId, siteId) {
  renderBackgroundTop(genre, bookId, siteId);
  renderNav(navSites, bookId, `${siteId}Nav`);
}

function renderBackgroundTop(genre, bookId, siteId) {
  currentSiteId = siteId;
  currentGenre = genre;
  let divId = siteId + 'Top';
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = '';
  topDiv.innerHTML = generateBackgroundTemplate(bookId)
}

function generateBackgroundTemplate(id) {
  let backgroundInfo = findBackgroundInfoById(id)
  let templateHTML = `<h2 class="personGroup">${backgroundInfo.headline}</h2>`;
  templateHTML += `<h3 class="personGroup">${backgroundInfo.subheader}</h3>`;
  for (let paragraph of backgroundInfo.paragraphs) {
    templateHTML += `<p>${paragraph}</p>`;
  }
  return templateHTML;
}

function findBackgroundInfoById(id) {
  for (let i = 0; i < backgroundInfo.length; i++) {
    if (backgroundInfo[i].backgroundId === id) {
      return backgroundInfo[i].languages[defaultLanguage];
      }
    }
  return null;
}

// function for picture sites such as family trees
function renderFamilyTrees(genre, bookId, siteId) {
  renderFamilyTreeTop(genre, bookId, siteId);
  renderNav(navSites, bookId, `${siteId}Nav`);
}

function renderFamilyTreeTop(genre, bookId, siteId) {
  currentSiteId = siteId;
  currentGenre = genre;
  let divId = siteId + 'Top';
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = '';
  topDiv.innerHTML = generateFamilyTreeTop(bookId)
}

function generateFamilyTreeTop(backgroundId) {
 let familyTreeGroup = findDataById(backgroundId, familyTree);
 let templateHTML = `<h2 class="personGroup">${familyTreeGroup.headline}</h2>`;
 templateHTML += `<p>${familyTreeGroup.subheader}</p>`;
 for (let i = 0; i < familyTreeGroup.images.length; i++) {
   templateHTML += `<div class="pictureContainer"><h3 class="pictureHeader">${familyTreeGroup.images[i].subheaderImages}</h3>
   <img src="${familyTreeGroup.images[i].imageUrl}"></div>`;
 }
 return templateHTML;
}

function findDataById(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].backgroundId === id) {
      return array[i].languages[defaultLanguage];
      }
    }
  return null;
}

//Function for sites with glossaries and/or sources 

function renderSourcesSite(genre, bookId) {
  currentSiteId = bookId + 'Sources';
  currentGenre = genre;
  const booksWithGlossaries = ['odyssee', 'masks'];
  const booksWithSources = ['odyssee', 'masks', 'alster', 'mind'];
if (booksWithGlossaries.includes(bookId)) {
  renderGlossary(bookId);
}
if (booksWithSources.includes(bookId)) {
  renderSources(bookId);
}
  renderNav(navSites, bookId, `${bookId}SourcesNav`);
}


//Function for glossary tables
function renderGlossary(bookId){
  let glossaryId = findGlossarybyId(bookId);
  let divId = bookId + 'Glossary';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateGlossaryTemplate (glossaryId);
}

function findGlossarybyId(bookId) {
  if (bookId == 'masks') {
    return glossaryMasks;
  } else if (bookId == 'odyssee') {
    return glossaryOdyssee;
  } else {
    return null;
  }
}

function generateGlossaryTemplate(glossaryId) {
  let templateHTML = generateGlossaryHeader();
  templateHTML += generateGlossaryTable(glossaryId);
  return templateHTML;
}

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

function generateGlossaryTable(glossaryId) {
  let templateHTML = `
    <table class="contentTable">
      <tr>
        <th class="personageName">Name</th>
        <th>${defaultLanguage === 'de' ? 'Beschreibung' : 'Description'}</th>
      </tr>`;
  for (let term of glossaryId) {
    templateHTML += `
      <tr>
        <td class="personageName">${term.name}</td> 
        <td>${term[defaultLanguage]}</td>
      </tr>`;
  }
  templateHTML += `</table>`;
  return templateHTML;
}

//Function for Sources paragraphs
function renderSources(bookId){
  let sourceId = findSourcesbyId(bookId);
  let divId = bookId + 'Sources';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateSourcesTemplate (sourceId);
}

function findSourcesbyId(bookId) {
  if (bookId == 'odyssee') {
    return sourcesOdyssee;
  } else if (bookId == 'masks') {
    return sourcesMasks;
  } else {if (bookId == 'alster') {
    return sourcesAlster;
  } if (bookId == 'mind') {
    return sourcesMind;
  } 
    return null;
  }
}

function generateSourcesTemplate (sourceId) {
  let templateHTML = generateSourcesHeader();
  templateHTML += generateSourcesText(sourceId);
  return templateHTML;
}


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

function generateSourcesText(sourceId) {
  let templateHTML = '';
   for (let source of sourceId) {
    templateHTML += `
      <p>${source}</p>`;
  }
  return templateHTML;
}

//function for timeline Sites
function renderTimeline(genre, bookId) {
  currentSiteId = bookId + 'Timeline';
  currentGenre = genre;
  renderTimelineTop(bookId);
  renderTimelineBottom(bookId);
  renderNav(navSites, bookId, `${bookId}TimelineNav`);
}

function renderTimelineTop(bookId) {
  let divId = bookId + 'TimelineTop';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateTimelineHeader(bookId);
}

function generateTimelineTemplate(bookId, timelineId) {
  let templateHTML = generateTimelineHeader(bookId);
  templateHTML += generateTimelineTable(timelineId);
  return templateHTML;
}

function generateTimelineHeader(bookId) {
  let templateHTML = '';
  let headline;
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

function renderTimelineBottom(bookId) {
  let timelineId = findTimelinebyId(bookId);
  let divId = bookId + 'TimelineBottom';
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = '';
  targetDiv.innerHTML = generateTimelineTable(timelineId);
}

function findTimelinebyId(bookId) {
  if (bookId == 'odyssee') {
    return timelineOdyssee;
  } else if (bookId == 'masks') {
    return timelineMasks;
  } else { return null;}
}

function generateTimelineTable(timelineData) {
  let templateHTML = `
    <table class="contentTable">
      ${generateTableHeader()}
      ${generateTableRows(timelineData)}
    </table>`;
  return templateHTML;
}

function generateTableHeader() {
  return `
    <tr>
      <th class="timelineYear">${defaultLanguage === 'de' ? 'Jahr' : 'Year'}</th>
      <th class="timelineDate">${defaultLanguage === 'de' ? 'Datum' : 'Date'}</th>
      <th class="timelineEvent">${defaultLanguage === 'de' ? 'Ereignis' : 'Event'}</th>
    </tr>`;
}

function generateTableRows(timelineData) {
  let templateHTML = '';
  let previousYear = null;

  for (let timeline of timelineData) {
    for (let event of timeline.event) {
      templateHTML +=  generateTableRowSingle(previousYear,timeline,event );
      if (previousYear !== timeline.year) {
        previousYear = timeline.year;
      }
    }
  }
  return templateHTML;
}

function generateTableRowSingle(previousYear,timeline,event ) {
  let templateHTML = `
  <tr>
    <td class="timelineYear">${previousYear === timeline.year ? '' : timeline.year}</td>
    <td class="timelineDate">${event.date}</td>
    <td class="timelineEvent">${event[defaultLanguage]}</td>
  </tr>`;
  return templateHTML
}

// für BonusChapters
async function renderBonusChapter(genre, bookId, bonusId) {
  currentSiteId = bonusId;
  currentGenre = genre;
  url = fetchUrl(bonusId);
  targetDiv = bonusId+'Top';
  await loadAndRenderContent(targetDiv, url);
  renderNav(navSites, bookId, `${bonusId}Nav`);
}

async function loadAndRenderContent(targetDiv, url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const languageData = data[defaultLanguage];
    const targetElement = document.getElementById(targetDiv);
    targetElement.innerHTML = `<h2>${languageData.header}</h2>`;
    targetElement.innerHTML += `<h3>${languageData.subheader}</h3>`;
    languageData.text.forEach(paragraph => {
      targetElement.innerHTML += `<p>${paragraph}</p>`;
    });
  } catch (error) {
    console.error('Fehler beim Laden und Rendern der JSON-Datei:', error);
  }
}

function fetchUrl(bonusId) {
  if(bonusId =='zach') {
    return '/JSONs/bonus-zach.json'
  } else if(bonusId =='noel') {
return '/JSONs/bonus-noel.json'
  }else if(bonusId =='diana') {
    return '/JSONs/bonus-diana.json'
  }else if(bonusId =='bina') {
    return '/JSONs/bonus-bina.json'
  }else if(bonusId =='henri') {
    return '/JSONs/bonus-henri-and-ella.json'
  }else if(bonusId =='curtius') {
    return '/JSONs/bonus-curtius.json'
  }else if(bonusId =='danton') {
    return '/JSONs/bonus-danton.json'
  }else if(bonusId =='radegunde') {
    return '/JSONs/bonus-radegunde.json'
  }else if(bonusId =='susanna') {
    return '/JSONs/bonus-susanna.json'
  }else if(bonusId =='') {
    return '/'
  } else {
    return null
  }
}

//For sources Children
async function renderSourcesSiteChildren (genre, bookId, siteId) {
  currentSiteId = siteId;
  currentGenre = genre;
 const sourceData = await loadData('/JSONs/sources.children.json');
 const languageSourceData = sourceData[defaultLanguage];
 const targetElement = document.getElementById("childrenSources");
 targetElement.innerHTML = generateTemplateChildrenSources(languageSourceData);
 renderNav(navSites, bookId, `${siteId}Nav`);
}

 async function loadData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler beim Laden und Rendern der JSON-Datei:', error);
  }
 }

 function generateTemplateChildrenSources(languageSourceData) {
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

//for imprint

function renderImprint() {
  currentSiteId = 'imprint';
  currentGenre = 'support';
  const targetElement = document.getElementById("imprint");
  if (defaultLanguage== 'de') {
    targetElement.innerHTML = generateImprintGerman();
  } else {
    targetElement.innerHTML = generateImprintEnglish();
  }
}

//For privacyPolicy
function renderprivacyPolicy() {
  currentSiteId = 'privacyPolice';
  currentGenre = 'support';
  const targetElement = document.getElementById("privacyPolicy");
  if (defaultLanguage== 'de') {
    targetElement.innerHTML = generatePrivacyPolicyGerman();
  } else {
    targetElement.innerHTML = generatePrivacyPolicyEnglish();
  }
}

