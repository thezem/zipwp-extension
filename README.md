# ZipWP Chrome Extension

## Overview

The ZipWP Chrome Extension provides quick access to ZipWP functionalities directly from your browser. With this extension, you can easily create new AI-generated or blank WordPress sites with just a click.

## Features

- **Create AI-Generated Sites**: Quickly create a complete site using AI.
- **Create Blank Sites**: Start with a blank WordPress site.
- **Access Cookies**: View cookies related to ZipWP.
- **Local Storage Access**: View local storage items related to ZipWP.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/zipwp-extension.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `ZipWp` directory from the cloned repository.

## Usage

1. Click on the ZipWP extension icon in the Chrome toolbar.
2. Use the popup to create a new AI-generated site or a blank site.
3. Visit the ZipWP app directly from the extension.

## Development

### Project Structure

- `background.js`: Handles background tasks such as accessing cookies and local storage.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file for handling user interactions in the popup.
- `manifest.json`: The configuration file for the Chrome extension.

### Scripts

- **Start Development**: Open the `ZipWp` directory in Chrome as an unpacked extension to start development.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
