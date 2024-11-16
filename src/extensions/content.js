function changeText(selector, newText) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = newText;
    } else {
      console.warn(`Element with selector ${selector} has not been found.`);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '10px';
    notification.style.right = '10px';
    notification.style.padding = '10px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    notification.style.color = '#fff';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.textContent = message;
  
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 3000);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeText') {
      changeText(request.selector, request.newText);
      sendResponse({ status: 'Text changed successfully' });
    }
  
    if (request.action === 'showNotification') {
      showNotification(request.message);
      sendResponse({ status: 'Notification displayed successfully' });
    }
});
  