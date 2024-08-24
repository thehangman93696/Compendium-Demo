function devLoad() {

}

const version = "Demo1";

var currentAudio;

var currentAudioNode;

var audioPlaying = false;




const siteBody = document.querySelector('body');

const keyV1 = "liturgy97+gen93696";

const CryptoV1 = new SimpleCrypto(keyV1);

const typography = {
  openingSingleQuote : "&lsquo;", 
  closingSingleQuote : "&rsquo;", 
  openingDoubleQuote : "&ldquo;",
  closingDoubleQuote : "&rdquo;"
}

var sections;

var rows;

var parts;

var savePrefix = "data"

var setChapterIndex = ()=>{}

var currentChapterIndex;

var storyImageAddress;

var baseScriptFolder = "";

var baseImagesFolder = "";

var passagePath = "";

var loadPage;

const wordsPerSecond = 4;

var currentContainer;

var currentScenery;

var currentChapter = null;

var currentStory= null;

var loadedScripts = [];

var data = {};

var gameLoaded = false;



if (version.toLowerCase().includes('demo')) savePrefix = 'datademo'

data.version = version;

data.patreonCodes =  {};

data.patreonCode =  "";

var resetGame = true;

var currentHeaderMode = "Old";

var hideLogoUponScroll = true;

if (localStorage.getItem(savePrefix + "0")) {
  console.log(savePrefix + "0")
  resetGame = false;

  data = JSON.parse(localStorage.getItem(savePrefix + "0")) ;


}




var currentPage = "MainPage";

const isPatreonVersion = version.includes("P");

const MainPageFilters = ["Available", "Complete", "Favorites", "Concepts", "All Stories"];


const totalSavesCount = 6;

const gamePages = ["MainPage", "StoryHolder", "AchievementsPage", "SavesPage", "StoryPage"];




var Swipers = {};

const MainPageFiltersID = {
  "Available" : "Available-Stories", 
  "Complete": "Complete-Stories", 
  "Favorites": "Favorite-Stories", 
  "Concepts": "Concept-Stories", 
  "All Stories": "All-Stories",
}

function init() {


  
  data.StoryObj = {};

  data.CurrentlyReading = "";


  initStories();

  initAchievements();

  

}
  



function HideIntroBannerUponScrollingAway() {
  window.addEventListener('scroll', HideIntroBanner);
}

function HideIntroBanner() {

  let loc = window.scrollY;

    let triggerHeight = document.getElementById("intro").offsetHeight-1;

    if (document.querySelector('.s-intro')) {
      let triggerHeight2 = document.querySelector('.s-intro').offsetHeight-1;

      if (loc > triggerHeight2) {
        document.querySelector('.s-intro').style.display = "none";
  
        window.removeEventListener('scroll', HideIntroBanner);
  
      }
    }

    if (loc > triggerHeight) {
      document.getElementById("intro").style.display = "none";

      if (hideLogoUponScroll) {
        
      document.getElementById("s-header__logo").style.display = "none";
      }

      window.removeEventListener('scroll', HideIntroBanner);

    }

 
}

function showIntroBanner() {
  document.getElementById("intro").style.display = "none";
  HideIntroBannerUponScrollingAway();

}


function saveCleanup() {
  for (let ach in data.AchievementObj) {
    
    ['dateStr','filename','hasVariants','isPatreon','legacy','postDescription','preDescription','rarity','requirement','variantEarned','variants'].forEach(
      name=>{

      if (data.AchievementObj[ach].hasOwnProperty(name)) {
        
        delete data.AchievementObj[ach][name]
      } 
    }) 

    
      
    if ((typeof data.AchievementObj[ach].date === "string")) data.AchievementObj[ach].date = new Date(data.AchievementObj[ach].date)

    
      if (!achievementNames.includes(ach)) {
        delete data.AchievementObj[ach]
        
      } 
    }
    AutoSave();
  storyNames.forEach( storyName => {
    const story = data.StoryObj[storyName]; 
    if (getStorySubtitle=='Patreon Exclusive') story.isLocked = true;
    
    if (!story.hasOwnProperty('vars')) story.vars = {};
    if (story.hasOwnProperty('CurrentChapter')) delete story.CurrentChapter;
    if (story.hasOwnProperty('currentSectionID')) delete story.currentSectionID;
    if (!story.hasOwnProperty('currentChapter')) story.currentChapter = story.chapters[0];
    if (story.name=='Boyhood' && story.chapters[0].name.includes('Demo')) story = new Story('Boyhood')
    story.chapters.forEach(ch=> {
      if (!isChapterAvailable(ch)) ch.isUnlocked = false;
      if (!ch.isRead) story.isRead= false;
      if (!ch.isComplete) story.isComplete= false;

      if (ch.hasOwnProperty('CurrentSection')) {
        delete ch.CurrentSection;

      }
      if (!ch.hasOwnProperty('currentSectionID') || !ch.currentSectionID) {
        ch.currentSectionID = 'section1';

      if (!ch.hasOwnProperty('isSeen')) {
        ch.isSeen = false;
        if (ch.isRead) ch.isSeen = true;

      }

      if (!ch.hasOwnProperty('sections')) ch.sections = {};

        
    }
    updateChapterObj(ch);
    })
    updateStoryObj(story);
  })
}


function loadMainPageBricks() {
  const container = document.getElementById('main-page-bricks')
  const storyList = arrayDifference(storyNames, ['Elf'])
  const no_desc = arrayDifference(storyList, ['The Hanging Man'])
  for(let i=0; i<storyList.length; i++) {
    
    const storyName = storyList[i]
    const storyOrigin= stories[storyName]
    var desc = storyOrigin.overview
    if (storyName in no_desc) desc = ''
    var str = '4-5'
    if (i%6 == 0) str = '4-5';
    if (i%6 == 1) str = '1-1';
    if (i%6 == 2) str = '1-1';
    if (i%6 == 3) str = '1-1';
    if (i%6 == 4) str = '4-5';
    if (i%6 == 5) str = '1-1';
    container.innerHTML += `
      <div class="brick folio-item"   data-animate-el>

        <div class="folio-item__thumb">
            <a class="folio-item__thumb-link" href="assets/images/stories/${storyOrigin.num}/base/cover3-2.jpg" Title="${storyName}" data-size="1050x700">
                <img src="assets/images/stories/${storyOrigin.num}/base/cover${str}.jpg">
            </a>
        </div>
        <div class="folio-item__info">
            <div class="folio-item__cat">Story #${storyOrigin.num}</div>
            <h4 class="folio-item__title">${storyName}</h4>
        </div>
        <div class="folio-item__caption">
            <p>${desc}</p>
        </div>
        
    </div> <!-- end brick-->
    `
  }
}

function isDemo() {
  return version.toLowerCase().includes('demo')
}