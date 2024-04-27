const sortingModeText = document.getElementById('sorting-mode');
const sortingIcon = document.getElementById('sorting-icon');
const imagesContainer = document.querySelector('#poster-gallery');
const sortingCircle = document.getElementById('sorting-circle');

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

// Function to update the images display based on the sorted array
function updateImagesDisplay(sortedArray) {
  imagesContainer.innerHTML = ''; // Clear current images
  sortedArray.forEach(([imageName, movie]) => {
    const imgElement = document.createElement("img");
    imgElement.src = "./assets/posters/" + imageName;
    imgElement.alt = movie.title; // Optional: add alt text for accessibility

    const linkElement = document.createElement("a");
    linkElement.href = "./poster-detail.html?imageUrl=" + encodeURIComponent("./assets/posters/" + imageName);
    linkElement.appendChild(imgElement);

    imagesContainer.appendChild(linkElement);
  });
}



sortingCircle.addEventListener('click', updateSortingMode);

function updateSortingMode() {
    let sortedMovies;
    if (sortingIcon.src.includes("ranking.svg")) {
        sortingIcon.src = "./assets/icons/color.jpg";
        sortingIcon.style.width = '45px';
        sortingIcon.style.height = '45px';
        sortingIcon.style.border = '1px solid rgb(255, 255, 255)';
        sortingIcon.style.borderRadius = '50%';
        sortingModeText.innerText = "Color";

    } else if (sortingIcon.src.includes("color.jpg")) {
        sortingIcon.src = "./assets/icons/title.svg";
        sortingIcon.style.width = '28px'; // Reset width to original
        sortingIcon.style.height = '28px'; // Reset height to original
        sortingIcon.style.border = 'none';
        sortingIcon.style.borderRadius = '0';
        sortingModeText.innerText = "Title";
        // Call to sort images by title when this icon is selected
        sortedMovies = sortMoviesByTitle(movies);

    } else if (sortingIcon.src.includes("title.svg")) {
        sortingIcon.src = "./assets/icons/year.svg";
        sortingIcon.style.width = '21.5px'; // Reset width to original
        sortingModeText.innerText = "Year";
        sortedMovies = sortMoviesByYear(movies);

    } else if (sortingIcon.src.includes("year.svg")) {
        sortingIcon.src = "./assets/icons/ranking.svg";
        sortingIcon.style.width = '22px'; // Reset width to original
        sortingModeText.innerText = "Ranking";
        sortedMovies = sortMoviesByRanking(movies);
    }
    updateImagesDisplay(sortedMovies);
};

