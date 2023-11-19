let browserLanguage = navigator.language || navigator.userLanguage;
let defaultLanguage = "en";

function init() {
  checkBrowserLanguage();
}

function checkBrowserLanguage() {
  if (browserLanguage.startsWith('de')) {
      defaultLanguage = 'de';
      german();
  } else {
      defaultLanguage = 'en';
      english();
  }
}


function german() {
  //switch text to german
}

function english() {
  //switch text to english
}


function  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
