document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const popupContainer = document.getElementById('popup-container');
    const closePopup = document.getElementById('close-circle');
    const body = document.body;
    const searchResultTitle = document.getElementById('search-result-title'); // Make sure this exists in your HTML
  
    function disableScroll() {
      body.style.overflow = 'hidden';
    }
  
    function enableScroll() {
      body.style.overflow = 'auto';
    }
  
    function showPopup(matchedMovies, searchText) {
      const popupPosters = document.getElementById('popup-posters');
      popupPosters.innerHTML = '';
  
      if (Object.keys(matchedMovies).length > 0) {
        Object.keys(matchedMovies).forEach((imageFileName) => {
          const movie = matchedMovies[imageFileName];
          const img = document.createElement('img');
          img.src = `assets/posters/${imageFileName}`;
          img.style.width = '25%';
          img.style.height = 'auto';
          popupPosters.appendChild(img);
        });
        searchResultTitle.textContent = searchText; // Display the input text
      } else {
        searchResultTitle.textContent = 'No results'; // Display 'No results' if nothing is found
      }
  
      popupContainer.style.display = 'flex';
      disableScroll();
    }
  
    searchIcon.addEventListener('click', () => {
      const searchText = searchInput.value.toLowerCase();
      if (searchText.trim() === '') {
        showPopup({}, ''); // No input text provided
      } else {
        const matchedMovies = Object.keys(movies).filter((key) => {
          const movie = movies[key];
          return (
            movie.title.toLowerCase().includes(searchText) ||
            movie.year.toString().includes(searchText) ||
            movie.director.toLowerCase().includes(searchText) ||
            movie.producer.toLowerCase().includes(searchText) ||
            movie.writer.toLowerCase().includes(searchText) ||
            movie.cast.toLowerCase().includes(searchText)
          );
        }).reduce((obj, key) => {
          obj[key] = movies[key];
          return obj;
        }, {});
    
        showPopup(matchedMovies, searchText);
      }
    });
  
    closePopup.addEventListener('click', () => {
      popupContainer.style.display = 'none';
      enableScroll();
      searchResultTitle.textContent = ''; // Clear the search result title when closing the popup
    });
});


// // Get the input field
// var inputField = document.querySelector('#search-input'); // Replace with the correct selector for your input field

// // Get the next sibling element which might be the dropdown
// var dropdown = inputField.nextElementSibling;

// // Apply styles if the dropdown is found
// if (dropdown) {
//   dropdown.style.backgroundColor = 'black';
//   dropdown.style.color = 'white';
//   dropdown.style.border = '1px solid white';
// }


