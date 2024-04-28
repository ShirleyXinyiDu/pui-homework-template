function navigateToDetailPage(imageUrl, currentIndex, listType) {
    const state = {
      currentIndex: currentIndex,
      listType: listType // 'index', 'favorites', 'seen', 'search'
    };
    sessionStorage.setItem('detailViewState', JSON.stringify(state));
    window.location.href = `./poster-detail.html?imageUrl=${encodeURIComponent(imageUrl)}`;
  }


function navigateToMovie(offset) {
  // Retrieve the state from sessionStorage
  const state = JSON.parse(sessionStorage.getItem('detailViewState'));
  const movies = getMoviesArray(state.listType); // Implement this function based on the list type
  const newIndex = (state.currentIndex + offset + movies.length) % movies.length;
  
  // Navigate to the new movie
  const newImageUrl = movies[newIndex];
  navigateToDetailPage(newImageUrl, newIndex, state.listType);
}


function getMoviesArray(listType) {
    switch (listType) {
      case 'index':
        // Assuming 'sortedMovies' is a global variable containing the current sorted array of movie keys.
        return sortedMovies || Object.keys(movies); // Falls back to unsorted if 'sortedMovies' is not defined.
      case 'favorites':
        // Assuming 'myFavoritesList' contains the DOM elements for the favorite posters.
        return Array.from(myFavoritesList.querySelectorAll('img')).map(img => img.src);
      case 'seen':
        // Assuming 'seenBeforeList' contains the DOM elements for the seen posters.
        return Array.from(seenBeforeList.querySelectorAll('img')).map(img => img.src);
      case 'search':
        // Assuming 'searchResults' is a global variable containing the current array of search result movie keys.
        return searchResults || []; // Falls back to an empty array if 'searchResults' is not defined.
      default:
        return [];
    }
}
  


document.querySelector('.before').addEventListener('click', function() {
    navigateToMovie(-1); // Go to the previous movie
  });
  
  document.querySelector('.after').addEventListener('click', function() {
    navigateToMovie(1); // Go to the next movie
  });


