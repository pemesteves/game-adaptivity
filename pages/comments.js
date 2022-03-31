Survey.StylesManager.applyTheme("modern");

var levels = JSON.parse(localStorage.getItem("levels"));
var levelsOrder = JSON.parse(localStorage.getItem("levelsOrder"));
var currentLevel = localStorage.getItem("currentLevel");
var questionnaire = localStorage.getItem("questionnaire");

if (levels === null || levelsOrder === null || currentLevel === null || questionnaire === null) {
    window.location.replace('./');
    throw '';
}

fetch('questionnaire/comments.json').then(rsp => { return rsp.json(); }).then(jsonData => {
    const survey = new Survey.Model(jsonData);
    $("#surveyContainer").Survey({
        model: survey,
        goNextPageAutomatic: false,
        onCompleting: (e) => {
          console.log("TODO SEND DATA TO SERVER");
          /*localStorage.setItem(`level_${levelsOrder[currentLevel]}_questionnaire`, JSON.stringify(e.data));
          currentLevel++;
          localStorage.setItem("currentLevel", currentLevel);

          window.location.replace(currentLevel >= levels.length ? "/comments.html" : "/mario.html");*/

          let guid;
          if ((guid = localStorage.getItem("guid")) === null) {
            guid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
            localStorage.setItem("guid", guid);
          }
          
          let url = `https://script.google.com/macros/s/AKfycbym0N_gk71EJgRuFozPkJzV78dIdNvcYxLiaRhBypCBWFIyL311B1R80btiMIJQKdV_/exec?GUID=${encodeURIComponent(guid)}`;
      
          Object.keys(survey.data).forEach(key => {
            const data = survey.data[key];
            if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { url += `&${key}=${data[key]}`; });
            else url += `&${key}=${data}`;
          });
        }
    }); 
});

// Send AJAX request to your web server
function sendDataToServer() {
  // Server is a Google spreadsheet 
 

  // Create XMLHttpRequest
 /*P let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status === 200) console.log(req.responseText);
      else console.error('There was a problem with the request.');
    }
  };*/

  // Create url parameters

  console.log(url);

  //req.open('GET', url, true);
  //req.send();
}