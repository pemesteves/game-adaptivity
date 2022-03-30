Survey.StylesManager.applyTheme("modern");

fetch('levels/levels.json').then(rsp => { return rsp.json(); }).then(jsonData => {
  localStorage.setItem("levels", JSON.stringify(jsonData));
  localStorage.setItem("levelsOrder", JSON.stringify(Array.from(Array(jsonData.length).keys()).sort(() => Math.random() - 0.5)));
  localStorage.setItem("currentLevel", 0);

  fetch('questionnaire/main.json').then(rsp => { return rsp.json(); }).then(jsonData => {
    const surveyJSON = jsonData;

    const survey = new Survey.Model(surveyJSON);
    $("#surveyContainer").Survey({
      model: survey,
      goNextPageAutomatic: false,
      showNavigationButtons: true,
      showCompletedPage: false,
      onCompleting: (e) => {
        e.allowComplete = false;
        localStorage.setItem("questionnaire", JSON.stringify(e.data));
        window.location.href = "/mario.html";
      },
      completeText: "Play",
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