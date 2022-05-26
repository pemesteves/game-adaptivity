Survey.StylesManager.applyTheme("modern");

const NUM_LEVELS = 2;

var currentLevel = parseInt(localStorage.getItem("currentLevel"));
var guid = localStorage.getItem("guid");
var levelData = {};

if (currentLevel === null || guid === null || currentLevel >= NUM_LEVELS) {
    window.location.replace('./');
    throw '';
}

let progress = (currentLevel + 1) * 100 / NUM_LEVELS;
const progressBar = document.getElementsByClassName("progress-bar")[0];
progressBar.style.width = `${progress}%`;
progressBar.innerHTML = `${currentLevel + 1}/${NUM_LEVELS}`;

var survey;

fetch('questionnaire/secondPrototype/level.json').then(rsp => { return rsp.json(); }).then(jsonData => {
    survey = new Survey.Model(jsonData);
    $("#surveyContainer").Survey({
        model: survey,
        goNextPageAutomatic: false,
        showNavigationButtons: false,
        showPrevButton: false,
        showCompletedPage: false,
        onCompleting: (e) => {
            e.allowComplete = false;

            let parameters = { GUID: guid, Sheet: `Level_${(localStorage.getItem('id') % 2 === currentLevel ? 1 : 2)}`, Order: (currentLevel + 1) };

            Object.keys(levelData).forEach(key => {
              const data = levelData[key];
              if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { parameters[key] = JSON.stringify(data); });
              else parameters[key] = JSON.stringify(data);
            });
    
            fetch("https://script.google.com/macros/s/AKfycbw4QiYfu-bw-rFncH2Bnhd6PlvghbJX-2dIDPksACnOcTShkFHBU9_XcbP0u4ewZRmaiA/exec", {
              method: "POST",
              body: JSON.stringify(parameters),
              contentType: 'application/json',
            }).then(rsp => {
              return rsp.json();
            }).then(data => {
              console.log(JSON.stringify(data));

              window.location.replace(currentLevel >= NUM_LEVELS ? "./comments.html" : "./mario.html");
            });
            
            currentLevel++;
            localStorage.setItem("currentLevel", currentLevel);
        },
        completeText: "Next",
    });
});