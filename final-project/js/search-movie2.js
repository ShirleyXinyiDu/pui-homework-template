document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const popupContainer = document.getElementById('popup-container');
    const closePopup = document.getElementById('close-circle');
    const body = document.body;
    const searchResultTitle = document.getElementById('search-result-title'); 

    function disableScroll() {
        body.style.overflow = 'hidden'; // Disable scrolling on the body
    }

    function enableScroll() {
        body.style.overflow = 'auto'; // Enable scrolling on the body
    }
  
    function showPopup(matchedMovies) {
        const popupPosters = document.getElementById('popup-posters');
        popupPosters.innerHTML = ''; // Clear previous results
  
        // Generate poster elements for each matched movie
        Object.keys(matchedMovies).forEach((imageFileName) => {
            const movie = matchedMovies[imageFileName];
            const img = document.createElement('img');
            img.src = `assets/posters/${imageFileName}`; // Update this path
            img.style.width = '25%'; // The image width as a percentage of its container
            img.style.height = 'auto'; // Keep the aspect ratio
            popupPosters.appendChild(img);
        });

        // Show the popup window
        popupContainer.style.display = 'flex';

        // After setting up the popup, disable scrolling on the main page
        disableScroll();
    }
  
    searchIcon.addEventListener('click', () => {
      const searchText = searchInput.value.toLowerCase();
      // Filter the movies object based on the search input
      const matchedMovies = Object.keys(movies).filter((key) => {
        const movie = movies[key];
        return (
          movie.title.toLowerCase().includes(searchText) ||
          movie.year.toString().includes(searchText) ||
          movie.director.toLowerCase().includes(searchText)
        );
      }).reduce((obj, key) => {
        obj[key] = movies[key];
        return obj;
      }, {});
  
      showPopup(matchedMovies);
    });
  
    closePopup.addEventListener('click', () => {
      popupContainer.style.display = 'none'; // Hide the popup window
      enableScroll(); // Re-enable scrolling when the popup is closed
    });
  });
  