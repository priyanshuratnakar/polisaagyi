chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "alert") {
      chrome.notifications.create({
        type: "basic",
        title: "Adult Website Alert",
        message: "Police aa gayi Pollice ",
        iconUrl: "icon.png"
      });
      var audio = new Audio("polis.mp3");
      audio.play();
    }
  });
  