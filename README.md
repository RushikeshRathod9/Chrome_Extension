# YouTube Auto Pause/Play Chrome Extension

## Overview
The **YouTube Auto Pause/Play** Chrome extension automatically pauses a YouTube video when you switch to a different tab and resumes playback when you return. This ensures you never miss a moment while multitasking.

## Features
- **Auto Pause**: Pauses the video when the user switches to another tab.
- **Auto Play**: Resumes the video when the user returns to the YouTube tab.
- **Lightweight**: Runs efficiently in the background without affecting browser performance.
- **Simple UI**: No unnecessary settings—just install and use.

## Installation
1. **Download or Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/youtube-auto-pause-play.git
   ```
2. **Open Chrome and Navigate to Extensions Page**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** (top right corner).
3. **Load the Extension**
   - Click **Load unpacked**.
   - Select the cloned/downloaded project folder.
4. **Start Using**
   - Open YouTube and switch tabs to see the extension in action.

## Usage
- Open YouTube and play a video.
- Switch to another tab, and the video will **pause** automatically.
- Return to the YouTube tab, and the video will **resume** playing.

## How It Works
The extension uses Chrome's **tabs API** and JavaScript event listeners to detect tab switches and control YouTube’s built-in player via the **YouTube IFrame API**.

## Technologies Used
- **JavaScript** (for core logic)
- **Manifest v3** (Chrome Extension API)
- **HTML & CSS** (for UI, if applicable)

## Future Improvements
- Toggle switch to enable/disable the extension.
- Customization options (e.g., pause delay, sound notifications).
- Support for other video platforms like Netflix.

## Contributing
Feel free to submit **pull requests** or **open issues** for enhancements and bug fixes.

---
Developed with ❤️ by [ Rushikesh ]
