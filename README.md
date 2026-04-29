# 🔍 XSS Context Finder (Bookmarklet)

[![Security](https://img.shields.io/badge/Security-BugBounty-red.svg)](https://github.com/YourUsername/XSS-Context-Finder)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**XSS Context Finder** is a lightweight JavaScript bookmarklet designed specifically for manual XSS (Cross-Site Scripting) hunting. It scans the "Live DOM" of the current webpage to identify exactly where and how your payload is reflecting in real-time.

---

## 🚀 Why Use This Tool?

When hunting for **DOM-based XSS** or **Reflected XSS**, the standard `View Source (Ctrl+U)` often fails because it only shows the raw server response, not the modifications made by client-side JavaScript. 

This bookmarklet solves that by providing:
- **Deep Scanning:** Recursively traverses through all Text Nodes and Attributes.
- **Context Awareness:** Identifies if the reflection is inside an `HTML Tag`, an `Attribute` (like value, src, href), or a `Script` block.
- **Break-Point Analysis:** Easily check if your special characters (`<`, `>`, `"`, `'`) are being filtered, encoded, or rendered raw.
- **Zero Dependencies:** No extensions, no proxies, no heavy tools—just a single click.

---

## 🛠️ Installation

1. Enable your browser's **Bookmarks Bar** (`Ctrl+Shift+B`).
2. Right-click the bar and select **"Add Page"** or **"Add Bookmark"**.
3. **Name:** `XSS Context Finder 🛡️`
4. **URL:** Copy the minified code from the [bookmark_code.js](./bookmark_code.js) file in this repository and paste it into the URL field.

---

## 📖 How to Use

1. Navigate to your target website.
2. Input a unique string or payload (e.g., `test123` or `">'payload`).
3. Submit the form or let the page render the reflection.
4. Click the **XSS Context Finder** bookmark.
5. Enter your unique string (e.g., `test123`) in the prompt.
6. A new tab will open with a detailed report showing every instance of that reflection in the DOM.

---

## 🛡️ Example Scenario

Suppose you inject: `"/><script>confirm(1)</script>`

The report will show:
- **Type:** ATTRIBUTE
- **Tag:** `<input>`
- **Content:** `"/><script>confirm(1)</script>`
- **Analysis:** This confirms you have successfully broken out of the `input` attribute and injected a new tag.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for features like iFrame support, automated "sink" detection, or bypass suggestions, feel free to open an **Issue** or a **Pull Request**. 

**Happy Hunting!** 🚀
