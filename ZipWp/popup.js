document.addEventListener("DOMContentLoaded", function () {
	const createNewBtn = document.getElementById("create-new-btn");
	const loginBtn = document.getElementById("login-btn");
	const newAccountBtn = document.getElementById("new-account-btn");

	createNewBtn.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://try.new/" });
	});

	loginBtn.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://app.zipwp.com/login" });
	});

	newAccountBtn.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://app.zipwp.com/register" });
	});
});