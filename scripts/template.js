let topSites = [
  {
    "siteId": "Die Masken von Florenz",
    "translationExists": "yes",
    "languages": {
      "de": {
        "title": "Die Masken von Florenz - Historischer Roman zur Zeit der Renaissance",
        "paragraphs": [
          "Mein zweiter historischer Roman."
        ],
        "links": [
          {"text": "HintergrundInfo", "url": "/"},
          {"text": "Bonuskapitel", "url": "/"},
          {"text": "Personenverzeichnis", "url": "/"},  
          {"text": "Zeittafel", "url": "/"}, 
          {"text": "Stammbaum der Medici", "url": "/"},  
          {"text": "Begriffe und Quellen", "url": "/"}
        ]
      },
      "en": {
        "title": "The Masks of Florence - Historical novel set during the Renaissance",
        "paragraphs": [
          "My second historical novel."
        ],
        "links": [
          {"text": "Background info", "url": "/"},
          {"text": "Bonus chapter", "url": "/"},
          {"text": "Personage", "url": "/"},  
          {"text": "Timeline", "url": "/"}, 
          {"text": "Family tress of the Medici", "url": "/"},  
          {"text": "Glossary and Sources", "url": "/"}
        ]
      }
    }
  },
];




function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

