function sortImagesByYear(filenames) {
    // Sorting filenames based on the year from the movies object
    return filenames.sort((a, b) => {
      // Decode filenames and strip the path before accessing the movies object
      let filenameA = decodeURIComponent(a.split('/').pop());
      let filenameB = decodeURIComponent(b.split('/').pop());
  
      // Check if the movies object has an entry for these filenames
      if (!movies[filenameA] || !movies[filenameB]) {
        console.error(`One of the filenames "${filenameA}" or "${filenameB}" does not exist in the movies object.`);
        return 0;
      }
  
      // Extract the year from the movies object using the decoded filename as key
      let yearA = movies[filenameA].year;
      let yearB = movies[filenameB].year;
  
      // Compare the years first
      if (yearA !== yearB) {
        return yearA - yearB;
      }
  
      // If years are the same, then sort by title
      let titleA = movies[filenameA].title.toUpperCase(); // to ensure case-insensitive comparison
      let titleB = movies[filenameB].title.toUpperCase();
      return titleA.localeCompare(titleB);
    });
  }
  
  // Example usage:
  // let filenames = ["assets/posters/1.jpg", "assets/posters/2.jpg", ...];
  // let sortedFilenames = sortImagesByYear(filenames);
  // console.log(sortedFilenames);
  