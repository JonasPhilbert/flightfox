(function() {
  if (window.FlightFox_hasRun) {
    return;
  }
  window.FlightFox_hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    console.log("Received message: ");
    console.log(message);
    if (message.command === "viewLocal") {
      let href = window.location.href.toString();
      href.replace(/staging\./i, '');
      href.replace(/beta\./i, '');
      href.replace(/\.net/i, '.test:3000');
      window.location.href = href;
    }
  });

  console.log("Injected FlightFox successfully.");
})();
