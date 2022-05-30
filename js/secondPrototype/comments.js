Survey.StylesManager.applyTheme("modern");

var currentLevel = localStorage.getItem("currentLevel");
var guid = localStorage.getItem("guid");

if (currentLevel === null || guid === null) {
  window.location.replace('./');
  throw '';
}

fetch('questionnaire/secondPrototype/comments.json').then(rsp => { return rsp.json(); }).then(jsonData => {
  const survey = new Survey.Model(jsonData);
  $("#surveyContainer").Survey({
    model: survey,
    goNextPageAutomatic: false,
    onCompleting: (e) => {
      const sheetScriptURL = "https://script.google.com/macros/s/AKfycbw4QiYfu-bw-rFncH2Bnhd6PlvghbJX-2dIDPksACnOcTShkFHBU9_XcbP0u4ewZRmaiA/exec";

      const ID = localStorage.getItem('id');

      const preference = ID % 2 !== 0 && e.data.Preference === "1" ? 2 :
          ID % 2 !== 0 && e.data.Preference === "2" ? 1 :
          e.data.Preference;

      let url = `${sheetScriptURL}?Sheet=${encodeURIComponent("Comments")}&GUID=${encodeURIComponent(guid)}&Preference=${encodeURIComponent(preference)}&Comments=${encodeURIComponent(e.data.Comments || "")}`;

      const elementPreferences = e.data.Preferences_Elements;

      Object.keys(elementPreferences).forEach(key => {
        const data = elementPreferences[key];
        url += `&${key}=${ID % 2 !== 0 && data === "1" ? 2 : ID % 2 !== 0 && data === "2" ? 1 : data}`;
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
    }
  });
});