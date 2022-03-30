Survey.StylesManager.applyTheme("modern");

var levels = JSON.parse(localStorage.getItem("levels"));
var levelsOrder = JSON.parse(localStorage.getItem("levelsOrder"));
var currentLevel = localStorage.getItem("currentLevel");

if (levels === null || levelsOrder === null || currentLevel === null) {
    window.location.href = '/';
    throw '';
}

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
            localStorage.setItem(`level_${levelsOrder[currentLevel]}_questionnaire`, JSON.stringify(e.data));
            currentLevel++;
            localStorage.setItem("currentLevel", currentLevel);

            window.location.href = currentLevel >= levels.length ? "/comments.html" : "/mario.html";
        },
        completeText: "Next",
    });
});