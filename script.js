const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const resultsContainer = document.querySelector('#results-container');
const noResults = document.querySelector('#no-results');

searchButton.addEventListener('click', function() {
  let searchValue = searchInput.value;
  let results = '';
  let found = false;

  fetch('words.txt')
    .then(response => response.text())
    .then(text => {
      let words = text.split('\n');
      for (let i = 0; i < words.length; i++) {
        if (words[i].includes(searchValue)) {
          found = true;
          results += `<p>${words[i]}</p>`;
        }
      }
      if (found) {
        resultsContainer.innerHTML = results;
        noResults.style.display = 'none';
      } else {
        resultsContainer.innerHTML = '';
        noResults.style.display = 'block';
      }
    });
});
