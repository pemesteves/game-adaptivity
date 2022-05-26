Survey.StylesManager.applyTheme("modern");

var levels = JSON.parse(localStorage.getItem("levels"));
var levelsOrder = JSON.parse(localStorage.getItem("levelsOrder"));
var currentLevel = localStorage.getItem("currentLevel");
var guid = localStorage.getItem("guid");

if (levels === null || levelsOrder === null || currentLevel === null || guid === null) {
  window.location.replace('./');
  throw '';
}

fetch('questionnaire/firstPrototype/comments.json').then(rsp => { return rsp.json(); }).then(jsonData => {
  const survey = new Survey.Model(jsonData);
  $("#surveyContainer").Survey({
    model: survey,
    goNextPageAutomatic: false,
    onCompleting: (e) => {
      const sheetScriptURL = "https://script.google.com/macros/s/AKfycbxCZXcEBl7ExpUSOmZEv3O-V3TG4Lcm4rP3Lj3FAfJmgKJI5hNcmMgp95XNQEYcoPVlbA/exec";

      let url = `${sheetScriptURL}?Sheet=${encodeURIComponent("Comments")}&GUID=${encodeURIComponent(guid)}&Comments=${encodeURIComponent(e.data.Comments || "")}`;

      let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          if (req.status === 200) console.log(req.responseText);
          else console.error('There was a problem with the request.');
        }
      };

      req.open('GET', url, true);
      req.send();
    }
  });
});