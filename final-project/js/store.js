// store.js
// Retrieve the stored sorting method from sessionStorage
const currentSorting = sessionStorage.getItem('currentSorting');

// Retrieve the sorted movies based on the stored sorting method
let sortedMovies;
switch (currentSorting) {
  case 'title':
    sortedMovies = sortMoviesByTitle(movies);
    console.log('Current sorting: title');
    break;
  case 'year':
    sortedMovies = sortMoviesByYear(movies);
    console.log('Current sorting: year');
    break;
  case 'ranking':
    sortedMovies = sortMoviesByRanking(movies);
    console.log('Current sorting: ranking');
    break;
  default:
    // Default to sorting by ranking if no valid method is found
    console.log('No valid sorting method found in sessionStorage. Defaulting to ranking.');
    sortedMovies = sortMoviesByRanking(movies);
    break;
}

// Print the sorted movie names
console.log('Current sorted movies list:', sortedMovies.map(([imageName, movie]) => movie.title || imageName));



// Function to sort movies by title
function sortMoviesByTitle(movies) {
    return Object.entries(movies).sort(([key1, val1], [key2, val2]) => {
      return val1.title.localeCompare(val2.title);
    });
  }
  
  // Function to sort movies by year
  function sortMoviesByYear(movies) {
    return Object.entries(movies).sort(([key1, val1], [key2, val2]) => {
      return val1.year - val2.year;
    });
  }
  
  // Function to sort movies by the filename (assuming it has ranking information)
  function sortMoviesByRanking(movies) {
    return Object.entries(movies).sort(([key1], [key2]) => {
      let rank1 = parseInt(key1.split(' ')[0]);
      let rank2 = parseInt(key2.split(' ')[0]);
      return rank1 - rank2;
    });
  }
  
  