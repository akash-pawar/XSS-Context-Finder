# 🔍 XSS Context Finder (Bookmarklet)

A simple, powerful, and lightweight JavaScript bookmarklet designed for Bug Bounty hunters and Pentesters. It helps you find exactly where your payload is reflecting in the live DOM, including hidden attributes and deep-nested elements.

### ✨ Features
- **Deep Scan:** Recursively searches through all DOM nodes (Text and Attributes).
- **Context Awareness:** Tells you if the reflection is in a `tag`, `attribute`, or `script` block.
- **Bypass Filters:** Helps you identify which characters are being filtered or encoded by the application.
- **Clean UI:** Opens a new tab with a highlighted report of all reflections.

### 🚀 How to Install
1. Create a new bookmark in your browser.
2. Name it: `XSS Context Finder 🛡️`
3. Paste the following code into the **URL/Address** field:

[PASTE THE DEEP SCAN JAVASCRIPT CODE FROM bookmark_code.js]

### 🛠️ How to Use
1. Visit the target website.
2. Inject a unique string or payload (e.g., `akash123` or `/'}">akash`).
3. Click the bookmark.
4. Enter your unique string in the prompt.
5. Analyze the report to find breaking points for XSS!

### 🤝 Contributing
Contributions are welcome! If you have ideas to improve the scanner (like iFrame support or automated payload testing), feel free to open an issue or PR.
