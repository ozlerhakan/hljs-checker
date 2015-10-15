var lastTabId = 0;
chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    if (tab.active === true && 
      tab.url === "https://highlightjs.org/download/" && 
      tab.title === "Getting highlight.js" && 
      tab.status === "complete"){
      lastTabId = tab.tabId;
      chrome.pageAction.show(activeInfo.tabId);
    }
    else {
      if (tab.tabId) chrome.pageAction.hide(tab.tabId);
    }
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  if (lastTabId == tab.tabId){
    chrome.tabs.executeScript({
      file: './js/select.js'
    }); 
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.active === true && 
      tab.url === "https://highlightjs.org/download/" && 
      tab.title === "Getting highlight.js" && 
      tab.status === "complete"){
      lastTabId = tab.tabId;
      chrome.pageAction.show(tabId);
    }
    else {
      if (tabId) chrome.pageAction.hide(tabId);
    }
});
