document.addEventListener("DOMContentLoaded", function () {
	const createNewBtn = document.getElementById("create-new-btn");
	const createNewWithAdvancedBtn = document.getElementById("create-new-with-advanced-btn");

	createNewBtn.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://try.new/" });
	});

	createNewWithAdvancedBtn.addEventListener("click", function () {
		chrome.tabs.create({ url: "https://app.zipwp.com/create-complete-site/type?source=zipwp&medium=firstfold" });
	});
});