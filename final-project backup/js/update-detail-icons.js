

// --------------------download-------------------- //

// Get the element that will be clicked to trigger the download
const downloadIcon = document.getElementById('download-icon');
// Get the element that represents the image to be downloaded
const posterDetailImg = document.getElementById('poster-detail-img');
// Get the element that contains the movie title
const movieTitleElement = document.getElementById('movie-title');

// Set up the click event listener for the download icon
downloadIcon.addEventListener('click', function() {
    // Create an anchor (<a>) element
    const anchor = document.createElement('a');
    // Use the 'src' attribute of the poster image as the href for the anchor
    anchor.href = posterDetailImg.src;
    // The download attribute will be the inner text of the movie title element
    // const movieTitleForFilename = movieTitleElement.innerText.trim().replace(/\s+/g, '_');
    anchor.download = movieTitleElement.innerText + '.jpg'; // Add the appropriate file extension
    // Append the anchor to the body
    document.body.appendChild(anchor);
    // Programmatically trigger a click on the anchor
    anchor.click();
    // Remove the anchor from the body after triggering the download
    // document.body.removeChild(anchor);
});

// --------------------add to favorites-------------------- //

// Try to retrieve the favorites from localStorage or default to an empty array
const starImages = JSON.parse(localStorage.getItem('starImages')) || [];
const starIcon = document.getElementById('my-favorites-icon');
starIcon.addEventListener('click', updateStarIcon);

function updateStarIcon() {
    const posterImage = document.getElementById('poster-detail-img'); // Change to the correct way you get the poster image
    const posterSrc = posterImage.src; // This is the source of the poster image

    if (starIcon.src.includes("star.svg")) {
        starIcon.src = "./assets/icons/star-solid.svg"; // Change to solid star
        console.log("Added to Favorites");
        addPosterToFavorites(posterSrc); // Add the poster to favorites
    } else if (starIcon.src.includes("star-solid.svg")) {
        starIcon.src = "./assets/icons/star.svg"; // Change back to the regular star
        console.log("Removed from Favorites");
        removePosterFromFavorites(posterSrc); // Remove the poster from favorites
    }
}


// Function to add a poster to the favorites and save to localStorage
function addPosterToFavorites(posterSrc) {
    if (!starImages.includes(posterSrc)) {
        starImages.push(posterSrc);
        localStorage.setItem('starImages', JSON.stringify(starImages)); // Save to localStorage
        console.log(starImages);
        // updateFavoritesDisplay();
    }
}

// Function to remove a poster from the favorites and save to localStorage
function removePosterFromFavorites(posterSrc) {
    const index = starImages.indexOf(posterSrc);
    if (index > -1) {
        starImages.splice(index, 1);
        localStorage.setItem('starImages', JSON.stringify(starImages)); // Save to localStorage
        console.log(starImages);
        // updateFavoritesDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // const starIcon = document.getElementById('my-favorites-icon');
    const posterDetailImg = document.getElementById('poster-detail-img');
    // Check if the current poster is in the favorites array
    if (starImages.includes(posterDetailImg.src)) {
        // If the poster is already a favorite, show the solid star
        starIcon.src = './assets/icons/star-solid.svg';
    } else {
        // If the poster is not a favorite, show the empty star
        starIcon.src = './assets/icons/star.svg';
    }
});

// --------------------seen before-------------------- //

// Try to retrieve the favorites from localStorage or default to an empty array
const seenImages = JSON.parse(localStorage.getItem('seenImages')) || [];
const seenIcon = document.getElementById('seen-before-icon');
seenIcon.addEventListener('click', updateSeenIcon);

function updateSeenIcon() {
    const posterImage = document.getElementById('poster-detail-img'); // Change to the correct way you get the poster image
    const posterSrc = posterImage.src; // This is the source of the poster image

    if (seenIcon.src.includes("seen.svg")) {
        seenIcon.src = "./assets/icons/seen-solid.svg"; // Change to solid star
        console.log("Added to Seen");
        addPosterToSeen(posterSrc); // Add the poster to favorites
    } else if (seenIcon.src.includes("seen-solid.svg")) {
        seenIcon.src = "./assets/icons/seen.svg"; // Change back to the regular star
        console.log("Removed from Seen");
        removePosterFromSeen(posterSrc); // Remove the poster from favorites
    }
}


// Function to add a poster to the favorites and save to localStorage
function addPosterToSeen(posterSrc) {
    if (!seenImages.includes(posterSrc)) {
        seenImages.push(posterSrc);
        localStorage.setItem('seenImages', JSON.stringify(seenImages)); // Save to localStorage
        console.log(seenImages);
    }
}

// Function to remove a poster from the favorites and save to localStorage
function removePosterFromSeen(posterSrc) {
    const index = seenImages.indexOf(posterSrc);
    if (index > -1) {
        seenImages.splice(index, 1);
        localStorage.setItem('seenImages', JSON.stringify(seenImages)); // Save to localStorage
        console.log(seenImages);
        // updateFavoritesDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // const starIcon = document.getElementById('my-favorites-icon');
    const posterDetailImg = document.getElementById('poster-detail-img');
    // Check if the current poster is in the favorites array
    if (seenImages.includes(posterDetailImg.src)) {
        // If the poster is already a favorite, show the solid star
        seenIcon.src = './assets/icons/seen-solid.svg';
    } else {
        // If the poster is not a favorite, show the empty star
        seenIcon.src = './assets/icons/seen.svg';
    }
});



