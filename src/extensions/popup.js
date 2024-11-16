document.getElementById('toggleMessage').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleMessageOnPage
      });
    });
});
  
function toggleMessageOnPage() {
    let messageElement = document.getElementById('extension-message');
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.id = 'extension-message';
      messageElement.style.position = 'fixed';
      messageElement.style.top = '10px';
      messageElement.style.right = '10px';
      messageElement.style.padding = '10px';
      messageElement.style.backgroundColor = 'green';
      messageElement.style.zIndex = '1000';
      messageElement.innerText = 'Extension is active';
      document.body.appendChild(messageElement);
    } else {
      messageElement.style.display =
        messageElement.style.display === 'none' ? 'block' : 'none';
    }
}

document.getElementById('changeTextButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'changeText',
        selector: 'h1',
        newText: 'new text from extension'
      });
    });
});

document.getElementById('showNotificationButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'showNotification',
        message: 'it is message from extension'
      });
    });
});
  