chrome.tabs.onCreated.addListener(function(tab) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: '../images/spoon_icon16.png',
    title: 'Új lap nyitva',
    message: tab.url
  });
});