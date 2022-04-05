Survey.StylesManager.applyTheme("modern");

var levels = JSON.parse(localStorage.getItem("levels"));
var levelsOrder = JSON.parse(localStorage.getItem("levelsOrder"));
var currentLevel = parseInt(localStorage.getItem("currentLevel"));
var guid = localStorage.getItem("guid");
var levelData = {};

if (levels === null || levelsOrder === null || currentLevel === null || guid === null || currentLevel >= levels.length) {
    window.location.replace('./');
    throw '';
}

let progress = (currentLevel + 1) * 100 / levels.length;
const progressBar = document.getElementsByClassName("progress-bar")[0];
progressBar.style.width = `${progress}%`;
progressBar.innerHTML = `${currentLevel + 1}/${levels.length}`;

var survey;

fetch('questionnaire/level.json').then(rsp => { return rsp.json(); }).then(jsonData => {
    survey = new Survey.Model(jsonData);
    $("#surveyContainer").Survey({
        model: survey,
        goNextPageAutomatic: false,
        showNavigationButtons: false,
        showPrevButton: false,
        showCompletedPage: false,
        onCompleting: (e) => {
            e.allowComplete = false;

            let parameters = { GUID: guid, Sheet: `Level_${(parseInt(levelsOrder[currentLevel]) + 1)}`, Order: (currentLevel + 1) };

            console.log(levelData);
            Object.keys(levelData).forEach(key => {
              const data = levelData[key];
              if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { parameters[key] = JSON.stringify(data); });
              else parameters[key] = JSON.stringify(data);
            });
    
            const level_questionnaire = e.data;
            Object.keys(level_questionnaire.LevelQuestionnaire).forEach(key => {
              const data = level_questionnaire.LevelQuestionnaire[key];
              if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { parameters[key] = data; });
              else parameters[key] = data;
            });
    
            fetch("https://script.google.com/macros/s/AKfycbxCZXcEBl7ExpUSOmZEv3O-V3TG4Lcm4rP3Lj3FAfJmgKJI5hNcmMgp95XNQEYcoPVlbA/exec", {
              method: "POST",
              body: JSON.stringify(parameters),
              contentType: 'application/json',
            }).then(rsp => {
              return rsp.json();
            }).then(data => {
              console.log(JSON.stringify(data));

              window.location.replace(currentLevel >= levels.length ? "./comments.html" : "./mario.html");
            });
            
            currentLevel++;
            localStorage.setItem("currentLevel", currentLevel);
        },
        completeText: "Next",
    });
});