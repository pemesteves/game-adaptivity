function getBrowser() {
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  const isEdge = !isIE && !!window.StyleMedia;
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
  const isBlink = (isChrome || isOpera) && !!window.CSS;

  return encodeURIComponent(isFirefox ? "Firefox" : isChrome ? "Chrome" : isSafari ? "Safari" : isOpera ? "Opera" : 
         isIE ? "IE" : isEdge ? "Edge" : isEdgeChromium ? "EdgeChromium" : isBlink ? "Chromium-based" : "Unknown");
}

Survey.StylesManager.applyTheme("modern");

fetch('https://api.countapi.xyz/create?key=xpto&namespace=pemesteves.github.io&enable_reset=1', {
  method: 'GET',
  contentType: 'application/json',
}).then(_ => {
  return;
}).then(_ => {
  fetch('https://api.countapi.xyz/hit/pemesteves.github.io/xpto', {
    method: 'GET',
    contentType: 'application/json',
  }).then(rsp => {
    return rsp.json();
  }).then(data => {
    localStorage.setItem('id', data.value);
  });
});

let guid;
if ((guid = localStorage.getItem("guid")) === null) {
  guid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  localStorage.setItem("guid", guid);
}

localStorage.setItem("currentLevel", 0);

fetch('questionnaire/secondPrototype/main.json').then(rsp => { return rsp.json(); }).then(jsonData => {
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

      let url = `https://script.google.com/macros/s/AKfycbw4QiYfu-bw-rFncH2Bnhd6PlvghbJX-2dIDPksACnOcTShkFHBU9_XcbP0u4ewZRmaiA/exec?Sheet=${encodeURIComponent("Demographics")}&GUID=${encodeURIComponent(guid)}&Browser=${getBrowser()}`;

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