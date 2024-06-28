/**
* 
* @param {string} form - entered data
* @returns boolean
*/

All books with details for booksites are in the JSON allBooks in the books.js
    Also in that file are: for booksites top part: let topSites

All other JSONs for the sites on first level are in the template.js
    for header: let menuTitles
    for booksites top part: let topSites
    for all sites bottom nav: let navSites
    for pages on first level content: let mainSites
    for the homepage navigation content: let overview
    for the background pages: let backgroundInfo
    for familyTreeTopSites: let familyTree
    for glossaries: let glossaryMasks und let glossaryOdyssee
    for sources: individual for sites with sources
    for timelines: let timelineHeaders plus individual timeline JSOns

ALL JSONs for bonus chapters as well as sources children are in the JSONs folder

All main sites will be started with onload=init()

Init (init.js) includes footer, header, background and mobile templates, then checks for browser language
    for german default language will be set to de and the function german will be called
    for all other languages, default language will be set to en and function english will be called
    functions english and german render 
        the shared content (templates, using the JSON menuTitles) and 
        the individual content in the default language
            renderContentBasedOnPage() works on the basis of the windows.path and assigns the respective function
            (This could also be solved by assigning different onload functions to the pages and change init())

Script.js includes the functions used by several sites 
    such as the
        renderNav for the bottom navigation (using the JSON navSites )
    as well as
        main sites (using the JSON mainSites) 
        book sites (using the JSON topSites and allBooks)

special-sites.js contains the logic for
    the about-me page, including the translation
    the special logic for novellas, interlinked with booksites ( renderMainSite and renderBookDetails )
    the special logic for the homepage (using the JSON overview)
    the special logic for personage (using the persons.js with the JSON personSitesHeader und INDIVDUAL JSONs per story)
    the special logic for family trees (using the JSON familyTree)
    the special logic for background info (using the JSON backgroundInfo in the books.js)
    the source sites containing glossaries, sources and extras (using individual JSONs/Arrays in template.JS)
    the timeline sites (using timelineHeaders JSON and individual JSON in template.js)

For Bonus Chapter text:
    convert in word all " into '
    convert in Word all ^p into ","
    convert in editor all formatted " into clean "
    check for  „, and convert into  ",
    Add some line breaks in editor as it is easier as in VS Code and too long lines lead to errors
 