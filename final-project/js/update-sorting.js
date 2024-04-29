const sortingModeText = document.getElementById('sorting-mode');
const sortingIcon = document.getElementById('sorting-icon');
const sortingCircle = document.getElementById('sorting-circle');



sortingCircle.addEventListener('click', updateSortingMode);

function updateSortingMode() {
  let sortedMovies;
  if (sortingIcon.src.includes("ranking.svg")) {
      sortingIcon.src = "./assets/icons/title.svg";
      sortingIcon.style.height = '28px'; // Reset height to original
      // sortingIcon.style.border = 'none';
      // sortingIcon.style.borderRadius = '0';
      sortingModeText.innerText = "Title";
      // Call to sort images by title when this icon is selected
      sortedMovies = sortMoviesByTitle(movies);
      storeSortingState('title');

  } else if (sortingIcon.src.includes("title.svg")) {
      sortingIcon.src = "./assets/icons/year.svg";
      sortingIcon.style.width = '21.5px'; // Reset width to original
      sortingModeText.innerText = "Year";
      sortedMovies = sortMoviesByYear(movies);
      storeSortingState('year');

  } else if (sortingIcon.src.includes("year.svg")) {
      sortingIcon.src = "./assets/icons/ranking.svg";
      sortingIcon.style.width = '22px'; // Reset width to original
      sortingModeText.innerText = "Ranking";
      sortedMovies = sortMoviesByRanking(movies);
      storeSortingState('ranking');
  }
  updateImagesDisplay(sortedMovies);
};

function storeSortingState(sortingMethod) {
  sessionStorage.setItem('currentSorting', sortingMethod);
}

