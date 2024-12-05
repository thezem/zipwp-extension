document.addEventListener('DOMContentLoaded', function () {
  const createBlankSiteBtn = document.getElementById('create-new-blank-site');
  const createAiSiteBtn = document.getElementById('create-new-ai-site');

  createAiSiteBtn.addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://app.zipwp.com/create-complete-site/type?source=zipwp&medium=zipwp-browser-extension' });
  });

  createBlankSiteBtn.addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://try.new/' });
  });
});
