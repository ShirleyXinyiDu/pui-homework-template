document.addEventListener("DOMContentLoaded", function() {
  const backLink = document.getElementById('back-link');
  
  if (backLink) {
    backLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // Using history.back() to return to the previous page
      history.back();
    });
  }

  // This part assumes you are loading index.html and you need to check the sorting state
  if (window.location.pathname.endsWith('index.html')) {
    const currentSorting = sessionStorage.getItem('currentSorting');
    if (currentSorting) {
      // Apply the sorting mode based on the stored value
      applySorting(currentSorting);
    }
  }
});

function applySorting(sortingMethod) {
  const sortingFunctions = {
    'title': sortMoviesByTitle,
    'year': sortMoviesByYear,
    'ranking': sortMoviesByRanking
  };

  if (sortingMethod in sortingFunctions) {
    const sortedMovies = sortingFunctions[sortingMethod](movies); // assuming 'movies' is available globally
    updateImagesDisplay(sortedMovies);
    updateSortingIcons(sortingMethod); // You would need to implement this function to adjust UI elements
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
