// function for special sites
function renderAboutMe() {
    let headline = document.getElementById('aboutMeHeadline');
    let aboutMeText = document.getElementById('aboutMeText');
    headline.innerHTML = '';
    aboutMeText.innerHTML = '';
    if (defaultLanguage == 'de') {
      headline.innerHTML = templateAboutMeHeadGerman();
      aboutMeText.innerHTML = templateAboutMeTextGerman();
    } else {
      headline.innerHTML = templateAboutMeHeadEnglish();
      aboutMeText.innerHTML = templateAboutMeTextEnglish();
    }
    renderNav(navSites, 'general', `aboutMeNav`);
  }

  function templateAboutMeHeadGerman() {
    let template = `<h2>Was gibt es über mich zu sagen ...</h2>`;
    return template
  }

  function templateAboutMeHeadEnglish() {
    let template = `<h2>What is there to say about me ...</h2>`;
    return template
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
  return template
  }

  function templateAboutMeTextEnglish() {
    let template = `
    <p>
    There was never a time in my life when I didn't make up stories.
    made up stories. I really started writing when I was twelve, when the first computer
    when the first computer arrived in our family and my fingers could
    could follow my thoughts for the first time. I wrote my first
    I wrote my first story for a reason that I'm sure is familiar to many readers
    readers - anger about a book I had just read and the good advice
    to do it better after all.  </p>
    <p>
    In my case - twelve years - I was just annoyed by the fact that
    that so many obstacles were always put in the way of the heroes of a story.
    were always put in the way. I wanted to write the opposite: a book in which everything went
    went smoothly and only good things happened. However, I then realised
    quickly realised how incredibly boring such a story is.
    story is. I also realised that if I could put obstacles in my hero's
    obstacles in my hero's path, as an author I also had the power to
    to clear them away again. And with this realisation, I began
    writing - and simply never stopped.
  </p>
  <p>For many years I only wrote for myself, wrote like other people read, wrote and gave my stories an independent existence. I was stingy with it, hardly ever giving anything away, and it was only the singers who changed my attitude: For the first time, I had a story I wanted to share.</p>
  <p>In my "other" life, I have made a career in science, need analytics and logic and can only give a small place to fantasy. In my "other" life, very few people would understand what my stories mean to me.</p>
  <p>And so, dear reader, forgive me if there is little information about "the" Anna K. Thomas. Just believe me when I say that I am analytical and emotional, logical and empathetic, completely crazy and completely normal, love to write for a living, and read, read, read...</p>
  `;
    return template
  }


  function renderNovellas(genre, divId) {
    currentSiteId = genre;
    currentGenre = genre;
    renderMainSite(genre, divId);
    renderNovellasBottom(genre);
  }
  
  function renderNovellasBottom(genre) {

    let bookData = findBooksByGenre(genre);
    if (!bookData) {
      console.log(`Unknown genre: ${genre}`);
      return;
    }
    let bottomDiv = document.getElementById('novellasBottom');
    let templateHTML = '';
    let novellasGenre = bookData.find(genre => genre.genre === 'novellas');
  
    if (novellasGenre && novellasGenre.books) {
      // Loop through the novellas and render each one
      for (let novella of novellasGenre.books) {
        let novellaInfo = novella.languages[defaultLanguage];
  
        templateHTML += `
          <div class="bookContainer">
            <img class="cover" src="${novellaInfo.imageURL}" alt="">
            <div class="bookContainerText">
              <h3>${novellaInfo.title}</h3> 
              <p>${novellaInfo.paragraphs[0]}</p>
              <p>${novellaInfo.paragraphs[1]}</p>
              <a class="amazonLink" href="${novellaInfo.externalLink}">Link to Amazon</a>
            </div>
          </div>`;
      }
    }
  
    bottomDiv.innerHTML = templateHTML;
  }