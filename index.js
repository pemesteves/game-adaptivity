Survey.StylesManager.applyTheme("modern");

var surveyJSON, levels, levelsOrder, currentLevel = 0;

const gamePage = {"name": "game","elements": [{"type": "html","name": "Game","html": "<canvas id=\"canvas\" width=\"640\" height=\"480\"> \n\t\t\t <p>Your browser does not support the canvas element.</p>\n\t\t</canvas>\n<script>$(document).ready(function (){new Engine.Application().Initialize(new LoadingState(), 320, 240);});</script>"}]};

fetch('levels/levels.json').then(rsp => { return rsp.json(); }).then(jsonData => { 
  levels = jsonData; 
  levelsOrder = Array.from(Array(jsonData.length).keys()).sort(() => Math.random() - 0.5);

  fetch('questionnaire/pages.json').then(rsp => { return rsp.json(); }).then(jsonData => { 
    surveyJSON = jsonData;
    
    for (let i = 0; i < levels.length; i++)  {
      let page = Object.assign({}, gamePage);
      page.name = `Game_${i}`;
      surveyJSON.pages.push(page);
    }

    console.log(surveyJSON);
    const survey = new Survey.Model(surveyJSON);
    $("#surveyContainer").Survey({
      model: survey,
      onComplete: sendDataToServer
    });
  });
});

let guid;
if ((guid = localStorage.getItem("guid")) !== null) {
  console.error("User already tried the game - Handle this case");
} else {
  guid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  localStorage.setItem("guid", guid);
}

// Send AJAX request to your web server
function sendDataToServer(survey) {
  // Server is a Google spreadsheet 
  let url = `https://script.google.com/macros/s/AKfycbym0N_gk71EJgRuFozPkJzV78dIdNvcYxLiaRhBypCBWFIyL311B1R80btiMIJQKdV_/exec?GUID=${encodeURIComponent(guid)}`;

  // Create XMLHttpRequest
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status === 200) console.log(req.responseText);
      else console.error('There was a problem with the request.');
    }
  };

  // Create url parameters
  Object.keys(survey.data).forEach(key => {
    const data = survey.data[key];
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { url += `&${key}=${data[key]}`; });
    else url += `&${key}=${data}`;
  });

  req.open('GET', url, true);
  req.send();
}