// background.js

// Accessing cookies
chrome.cookies.getAll({ domain: 'zipwp.com' }, function (cookies) {
  console.log(cookies);
});

// Accessing local storage
chrome.storage.local.get(null, function (items) {
  console.log(items);
});
