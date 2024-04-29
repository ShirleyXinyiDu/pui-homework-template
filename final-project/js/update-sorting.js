
// -------------------- update sorting mode and display -------------------- //

const sortingModeText = document.getElementById('sorting-mode');
const sortingIcon = document.getElementById('sorting-icon');
const sortingCircle = document.getElementById('sorting-circle');

sortingCircle.addEventListener('click', updateSortingMode);

function updateSortingMode() {
  let sortedMovies;
  if (sortingIcon.src.includes("ranking.svg")) {
      sortingIcon.src = "./assets/icons/title.svg";
      sortingIcon.style.height = '28px'; 
      sortingModeText.innerText = "Title";
      // Sort images by title when the icon is title
      sortedMovies = sortMoviesByTitle(movies);
      storeSortingState('title');

  } else if (sortingIcon.src.includes("title.svg")) {
      sortingIcon.src = "./assets/icons/year.svg";
      sortingIcon.style.width = '21.5px'; 
      sortingModeText.innerText = "Year";
      // Sort images by year when the icon is year
      sortedMovies = sortMoviesByYear(movies);
      storeSortingState('year');

  } else if (sortingIcon.src.includes("year.svg")) {
      sortingIcon.src = "./assets/icons/ranking.svg";
      sortingIcon.style.width = '22px'; 
      sortingModeText.innerText = "Ranking";
      // Sort images by ranking when the icon is ranking
      sortedMovies = sortMoviesByRanking(movies);
      storeSortingState('ranking');
  }

  // Update the images display
  updateImagesDisplay(sortedMovies);
};


function storeSortingState(sortingMethod) {
  sessionStorage.setItem('currentSorting', sortingMethod);
}

