function inject() {
  browser.tabs.executeScript({file: "/injection.js"}).then(addListeners).catch(reportError);
}

function sendCommand(name, payload) {
  browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {
      command: name,
      ...payload,
    })
  });
}

let listenersAdded = false;
function addListeners() {
  if (listenersAdded) return;
  listenersAdded = true;

  document.querySelector("#view-local").addEventListener("click", () => {sendCommand("viewLocal")});
  document.querySelector("#view-beta").addEventListener("click", () => {sendCommand("viewBeta")});
  document.querySelector("#view-staging").addEventListener("click", () => {sendCommand("viewStaging")});
  document.querySelector("#view-prod").addEventListener("click", () => {sendCommand("viewProd")});
}

function reportError(err) {
  const e = document.querySelector("#error-content");
  e.classList.remove("hidden");
  e.innerHTML = err;
  console.error(err);
}

inject();
