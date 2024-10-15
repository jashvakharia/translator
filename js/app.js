let debounceTimer;

function debounce(func, delay) {
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

const debouncedTranslate = debounce(function() {
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;
  const sourceText = document.getElementById("sourceText").value;

  if (sourceText.trim()) {
    const encodedText = encodeURIComponent(sourceText);
    fetch(`http://127.0.0.1:5000/translate?source=${sourceLang}&target=${targetLang}&text=${encodedText}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("translatedText").value = data.translation;
      })
      .catch(error => console.error('Error:', error));
  } else {
    document.getElementById("translatedText").value = "";
  }
}, 300);

function translateText() {
  debouncedTranslate();
}



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']('dark-mode');
    toggleSwitch.checked = currentTheme === 'dark';
}
