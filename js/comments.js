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
      const sheetScriptURL = "https://script.google.com/macros/s/AKfycbxCZXcEBl7ExpUSOmZEv3O-V3TG4Lcm4rP3Lj3FAfJmgKJI5hNcmMgp95XNQEYcoPVlbA/exec";

      let guid;
      if ((guid = localStorage.getItem("guid")) === null) {
        guid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        localStorage.setItem("guid", guid);
      }

      let url = `${sheetScriptURL}?Sheet=${encodeURIComponent("Demographics")}&GUID=${encodeURIComponent(guid)}&Comments=${encodeURIComponent(e.data.Comments || "")}`;

      questionnaire = JSON.parse(questionnaire);
      Object.keys(questionnaire).forEach(key => {
        const data = questionnaire[key];
        if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { url += `&${key}=${data[key]}`; });
        else url += `&${key}=${data}`;
      });

      let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          if (req.status === 200) console.log(req.responseText);
          else console.error('There was a problem with the request.');
        }
      };

      req.open('GET', url, true);
      req.send();

      for (let i = 0; i < levelsOrder.length; i++) {
        const level = levelsOrder[i];

        url = sheetScriptURL;
        let parameters = { Sheet: `Level_${(level + 1)}`, Order: (i + 1) };

        const level_data = JSON.parse(localStorage.getItem(`level_${level}_game`));
        Object.keys(level_data.metrics).forEach(key => {
          const data = level_data.metrics[key];
          if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { parameters[key] = data; });
          else parameters[key] = data;
        });

        parameters.actions = JSON.stringify(level_data.actions);

        const level_questionnaire = JSON.parse(localStorage.getItem(`level_${level}_questionnaire`));

        Object.keys(level_questionnaire.LevelQuestionnaire).forEach(key => {
          const data = level_questionnaire.LevelQuestionnaire[key];
          if (typeof data === 'object' && !Array.isArray(data) && data !== null) Object.keys(data).forEach(key => { parameters[key] = data; });
          else parameters[key] = data;
        });

        fetch(sheetScriptURL, {
          method: "POST",
          body: JSON.stringify(parameters),
          contentType: 'application/json',
        }).then(rsp => {
          return rsp.json();
        }).then(data => {
          console.log(JSON.stringify(data));
        });
      }
    }
  });
});