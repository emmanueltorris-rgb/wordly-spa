# Wordly: Interactive Dictionary SPA

Wordly is a lightweight Single Page Application (SPA) designed for quick language reference. It allows users to search for English words and retrieve instant data including definitions, parts of speech, and audio pronunciations without ever refreshing the page.

## Features

* **Dynamic Search:** Fetch real-time data from the Free Dictionary API.
* **Audio Pronunciation:** Integrated audio playback for word phonetics.
* **Contextual Details:** Displays parts of speech and example sentences where available.
* **Error Handling:** Graceful feedback for misspelled words or network connection issues.
* **Modern UI:** A clean, responsive interface built with semantic HTML and custom CSS.

## Tech Stack

* **HTML5:** Semantic structure for accessibility.
* **CSS3:** Custom styling with a focus on user experience.
* **JavaScript (ES6+):** Asynchronous Fetch API, DOM manipulation, and Event handling.
* **API:** [Free Dictionary API](https://dictionaryapi.dev/)

## Project Structure

```text
wordly-spa/
├── index.html     # Application structure
├── styles.css     # UI styling and layout
├── index.js       # API integration and DOM logic
└── README.md      # Project documentation
