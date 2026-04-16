const searchForm = document.querySelector('#search-form');
const wordInput = document.querySelector('#word-input');
const resultDisplay = document.querySelector('#result-display');
const errorDiv = document.querySelector('#error-message');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const word = wordInput.value.trim();
    if (word) fetchWord(word);
});

async function fetchWord(word) {
    // Reset UI for new search
    errorDiv.classList.add('hidden');
    resultDisplay.classList.add('hidden');
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("We couldn't find that word.");

        const data = await response.json();
        renderResult(data[0]);
    } catch (err) {
        errorDiv.textContent = err.message;
        errorDiv.classList.remove('hidden');
    }
}

function renderResult(data) {
    document.querySelector('#word-title').textContent = data.word;
    document.querySelector('#phonetic-text').textContent = data.phonetic || "";
    
    const meaningDiv = document.querySelector('#meaning-content');
    meaningDiv.innerHTML = ""; // Clear old meanings

    data.meanings.forEach(meaning => {
        const section = document.createElement('div');
        section.innerHTML = `
            <h3>${meaning.partOfSpeech}</h3>
            <p>${meaning.definitions[0].definition}</p>
            ${meaning.definitions[0].example ? `<i style="color: gray;">Example: "${meaning.definitions[0].example}"</i>` : ""}
        `;
        meaningDiv.appendChild(section);
    });

    // Audio logic
    const audioBtn = document.querySelector('#audio-btn');
    const audioUrl = data.phonetics.find(p => p.audio)?.audio;
    
    if (audioUrl) {
        audioBtn.classList.remove('hidden');
        audioBtn.onclick = () => new Audio(audioUrl).play();
    } else {
        audioBtn.classList.add('hidden');
    }

    resultDisplay.classList.remove('hidden');
}