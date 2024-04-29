
// -------------------- clicking the back icon -------------------- //

document.addEventListener("DOMContentLoaded", function() {
    const backLink = document.getElementById("back-link");
    
    if (backLink) {
      backLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Save the current scroll position to sessionStorage
        sessionStorage.setItem('scrollPosition', window.scrollY);
        // Navigate back in history
        window.history.back();
      });
    }
  
    // Restoring previous state only on the index page
    if (document.getElementById('poster-gallery')) {
      restorePreviousState();
    }
  });
  
  function restorePreviousState() {
    // Restore the sorting state and scroll position
    const sortingMethod = sessionStorage.getItem('currentSorting');
    const scrollPosition = sessionStorage.getItem('scrollPosition');
  
    // Restore the sorting of movies and update the display accordingly
    if (sortingMethod) {
      let sortedMovies;
      switch (sortingMethod) {
        case 'title':
          sortedMovies = sortMoviesByTitle(movies);
          break;
        case 'year':
          sortedMovies = sortMoviesByYear(movies);
          break;
        case 'ranking':
          sortedMovies = sortMoviesByRanking(movies);
          break;
        default:
          // Default sorting
          sortedMovies = Object.entries(movies); 
      }
  
      if (sortedMovies) {
        // Clear the current images and update the display with sorted movies
        document.getElementById('poster-gallery').innerHTML = '';
        updateImagesDisplay(sortedMovies);
        updateSortingIcons(sortingMethod);
      }
    }
  
    // Restore the scroll position
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
      }, 0); 
    }
  }

  function updateSortingIcons(sortingMethod) {
    // Update the UI elements based on sortingMethod
    const sortingIcon = document.getElementById('sorting-icon');
    const sortingText = document.getElementById('sorting-mode');
  
    // Update icon and text based on sorting method
    switch (sortingMethod) {
      case 'title':
        sortingIcon.src = './assets/icons/title.svg';
        sortingText.textContent = 'Title';
        sortingIcon.style.height = '28px';
        break;
      case 'year':
        sortingIcon.src = './assets/icons/year.svg';
        sortingIcon.style.width = '21.5px';
        sortingText.textContent = 'Year';
        break;
      case 'ranking':
        sortingIcon.src = './assets/icons/ranking.svg';
        sortingIcon.style.width = '22px';
        sortingText.textContent = 'Ranking';
        break;
    }
  }