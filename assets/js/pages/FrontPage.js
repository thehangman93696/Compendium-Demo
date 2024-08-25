


  const updateNav = function() {

    document.getElementById("s-header__nav-list").innerHTML = `
    
    <li><a href="#" id="MenuHomeLink">Home</a></li>
    <li><a href="#" id="MenuAchievementsLink">Achievements</a></li>
    <li><a href="#" id="MenuSavesLink">Saves</a></li>
    `;

    document.getElementById("s-header").querySelector('.logo').href= "#";

    document.getElementById("s-header").querySelector('.logo').addEventListener('click', ()=> {
      switchToPage("MainPage");
    });

    
    

  }

  const displayMainSection = function() {
    

    gamePages.forEach(i => {
      const element = document.getElementById(i);

      element.style.display = "none";

      if (!element.classList.contains("position-absolute-horizontally-centered")) {
        element.classList.add("position-absolute-horizontally-centered")
    }

    if (element.classList.contains("position-relative")) {
        element.classList.remove("position-relative")
    }
  })

    document.getElementById("MainSection").style.display = "block";

    removeChild("content", "OuterPage");

    currentPage = "MainPage";

    
    switchToPageSlow("MainPage");

  }


const startGame = function() {

    loadGameData();

    data.version = version;

    gameLoaded = true;


    
    updateNav();

    ssMoveTo();

    displayMainSection();

    
    HideIntroBannerUponScrollingAway();

    document.getElementById("MenuHomeLink").addEventListener('click', ()=> {
        switchToPage("MainPage");
    });

    document.getElementById("MenuAchievementsLink").addEventListener('click', ()=> {
        switchToPage("AchievementsPage");
    });
    
    document.getElementById("MenuSavesLink").addEventListener('click', ()=> {
        switchToPage("SavesPage");
    });

    
    ssSwiper();

    if(!data.StoryObj["Elf"].isComplete) {
      console.log("new save")
      openStory(data.StoryObj["Elf"]);

    }
    
    

    devLoad();

    saveCleanup();

  }


  function loadGameData() {
    
    checkForUpdates();

    loadStoryList();

    loadAchievementsPage();

    loadSavesPage();
    

}

function updateGameStartButton() {
  const button = document.getElementById("trial-button-area");

  button.innerHTML = "";

  const anchor = document.createElement('a');
  anchor.className = "smoothscroll btn btn--stroke s-intro__more-btn";
  anchor.href = "#MainSection";
  anchor.innerHTML = "Start Game";

  anchor.addEventListener('click', ()=> {startGame()});

  button.appendChild(anchor);

}