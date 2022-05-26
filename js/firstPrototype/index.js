Survey.StylesManager.applyTheme("modern");

let guid;
if ((guid = localStorage.getItem("guid")) === null) {
  guid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  localStorage.setItem("guid", guid);
}

fetch('levels/levels.json').then(rsp => { return rsp.json(); }).then(jsonData => {
  localStorage.setItem("levels", JSON.stringify(jsonData));
  localStorage.setItem("levelsOrder", JSON.stringify(Array.from(Array(jsonData.length).keys()).sort(() => Math.random() - 0.5)));
  localStorage.setItem("currentLevel", 0);

  fetch('questionnaire/firstPrototype/main.json').then(rsp => { return rsp.json(); }).then(jsonData => {
    const surveyJSON = jsonData;

    const survey = new Survey.Model(surveyJSON);
    $("#surveyContainer").Survey({
      model: survey,
      goNextPageAutomatic: false,
      showNavigationButtons: true,
      showCompletedPage: false,
      onCurrentPageChanging: e => {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
      },
      onCompleting: (e) => {
        e.allowComplete = false;

        let url = `https://script.google.com/macros/s/AKfycbxCZXcEBl7ExpUSOmZEv3O-V3TG4Lcm4rP3Lj3FAfJmgKJI5hNcmMgp95XNQEYcoPVlbA/exec?Sheet=${encodeURIComponent("Demographics")}&GUID=${encodeURIComponent(guid)}`;

        const questionnaire = e.data;
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

            window.location.replace("./mario.html");
          }
        };

        req.open('GET', url, true);
        req.send();
      },
      completeText: "Play",
    });
  });
});