// Listen for tab activation (when the user switches tabs within the same or different Chrome profiles)
chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
      if (tab.url && (tab.url.includes("youtube.com/watch") || tab.url.includes("youtube.com/shorts"))) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: resumeVideoOrShort
        });
      } else {
        chrome.tabs.query({ url: ["*://*.youtube.com/watch*", "*://*.youtube.com/shorts*"] }, tabs => {
          tabs.forEach(tab => {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              function: pauseVideoOrShort
            });
          });
        });
      }
    });
  });
  
  // Listen for window focus change (when the user switches between Chrome and another application)
  chrome.windows.onFocusChanged.addListener(windowId => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
      // The user switched to another application outside of Chrome
      chrome.tabs.query({ url: ["*://*.youtube.com/watch*", "*://*.youtube.com/shorts*"] }, tabs => {
        tabs.forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: pauseVideoOrShort
          });
        });
      });
    } else {
      // The user returned to Chrome
      chrome.tabs.query({ active: true, windowId: windowId }, tabs => {
        if (tabs.length > 0 && (tabs[0].url.includes("youtube.com/watch") || tabs[0].url.includes("youtube.com/shorts"))) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: resumeVideoOrShort
          });
        }
      });
    }
  });
  
  function pauseVideoOrShort() {
    let video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  function resumeVideoOrShort() {
    let video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  }
  