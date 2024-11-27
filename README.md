# ZipWP Chrome Extension  

## Overview  
The ZipWP Chrome Extension simplifies the process of creating test sites for ZipWP by providing quick-access buttons. With just a single click, you can either create a new blank site or a complete site using advanced options.  

## Features  
- **Create New Site**: Instantly navigate to `https://try.new/` to create a blank site.  
- **Create New Site with Advanced Options**: Access the advanced site creation page at `https://app.zipwp.com/create-complete-site/type?source=zipwp&medium=firstfold`.  

## Installation  
1. Download or clone the extension code to your local machine.  
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer Mode** (toggle in the top right corner).  
4. Click on **Load unpacked** and select the folder containing the extension files.  
5. The ZipWP Chrome Extension will now be available in your browser toolbar.  

## Usage  
1. Click on the ZipWP Extension icon in your browser toolbar.  
2. Use the available buttons:  
   - **Create New**: Opens `https://try.new/` in a new tab to create a blank site.  
   - **Create New with Advanced Options**: Opens `https://app.zipwp.com/create-complete-site/type?source=zipwp&medium=firstfold` in a new tab for advanced site creation.  

## Code Explanation  
The main functionality of the extension is provided by the following script:  

```javascript  
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
```

## Notes  
- Ensure the buttons `create-new-btn` and `create-new-with-advanced-btn` exist in your extension's popup HTML file.  
- This extension does not store user data or require any special permissions beyond opening new tabs.  

## License  
This project is open-source and available under the MIT License.  