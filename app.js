let count = 1;

function viewLocal() {
  console.log("Appended");
  document.appendChild(document.createElement('p', {innerHTML: count.toString()}));
  count++;
  browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "viewLocal"
    })
  });
}

browser.tabs.executeScript({file: "/injection.js"}).then(() => {
  viewLocal();
});

// function viewAsLocal() {
//   window.location.href = "https://google.com/";
// }

// document.addEventListener("ready", () => {
//   console.log("Ready");
// })
