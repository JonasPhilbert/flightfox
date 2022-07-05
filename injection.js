(function() {
  if (window.FlightFox_hasRun) {
    return;
  }
  window.FlightFox_hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    let href = window.location.href.toString();
    const expr = /\.?((beta)|(staging))?\.flightlogger\.((net)|(test:3000))/i;

    switch (message.command) {
      case "viewLocal":
        href = href.replace(/https?:\/\//i, 'http://');
        href = href.replace(expr, '.flightlogger.test:3000');
        window.location.href = href;
        break;
      case "viewBeta":
        href = href.replace(/https?:\/\//i, 'http://');
        href = href.replace(expr, '.beta.flightlogger.net');
        window.location.href = href;
        break;
      case "viewStaging":
        href = href.replace(/https?:\/\//i, 'https://');
        href = href.replace(expr, '.staging.flightlogger.net');
        window.location.href = href;
        break;
      case "viewProd":
        href = href.replace(/https?:\/\//i, 'https://');
        href = href.replace(expr, '.flightlogger.net');
        window.location.href = href;
        break;
      default:
        console.error('Invalid FlightFox command.');
    }
  });

  console.log("Injected FlightFox successfully.");
})();
