const sortingModeText = document.getElementById('sorting-mode');
const sortingIcon = document.getElementById('sorting-icon');
const sortingCircle = document.getElementById('sorting-circle');
const imagesContainer = document.querySelector('#poster-gallery'); // Adjust if the actual ID is different

// Importing the sortImagesByTitle function from the sort-by-title.js script
// Make sure this import aligns with how you are structuring your scripts.
// import { sortImagesByTitle } from './sort-by-title.js';

sortingCircle.addEventListener('click', updateSortingMode);

function updateSortingMode() {
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
        fetchImagesAndSortByTitle();

    } else if (sortingIcon.src.includes("title.svg")) {
        sortingIcon.src = "./assets/icons/year.svg";
        sortingIcon.style.width = '21.5px'; // Reset width to original
        sortingModeText.innerText = "Year";
        fetchImagesAndSortByYear();
    } else if (sortingIcon.src.includes("year.svg")) {
        sortingIcon.src = "./assets/icons/ranking.svg";
        sortingIcon.style.width = '22px'; // Reset width to original
        sortingIcon.style.height = '22px'; // Reset height to original
        sortingModeText.innerText = "Ranking";
        fetchImagesAndSortByRanking();
    }
};

function fetchImagesAndSortByTitle() {
    // Fetching images from your source, sorting them, and updating the display
    fetch(folder)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        let images = [];
        const links = htmlDocument.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            let val = links[i].getAttribute("href");
            if (val.match(/\.(jpg)$/)) {
                images.push(val);
            }
        }
        images = sortImagesByTitle(images); // Sort images by title
        updateImagesDisplay(images);
    })
    .catch(error => console.error("Failed to load folder content", error));
}

function updateImagesDisplay(sortedFilenames) {
    imagesContainer.innerHTML = ''; // Clear current images
    sortedFilenames.forEach(function(filename) {
        const imgElement = document.createElement("img");
        imgElement.src = filename;

        const linkElement = document.createElement("a");
        linkElement.href = "./poster-detail.html?imageUrl=" + encodeURIComponent(filename);
        linkElement.appendChild(imgElement);

        imagesContainer.appendChild(linkElement);
    });
}


function fetchImagesAndSortByYear() {
    // Fetching images from your source, sorting them, and updating the display
    fetch(folder)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        let images = [];
        const links = htmlDocument.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            let val = links[i].getAttribute("href");
            if (val.match(/\.(jpg)$/)) {
                images.push(val);
            }
        }
        images = sortImagesByYear(images); // Sort images by title
        updateImagesDisplay(images);
    })
    .catch(error => console.error("Failed to load folder content", error));
}

function fetchImagesAndSortByRanking() {
    // Fetching images from your source, sorting them, and updating the display
    fetch(folder)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        let images = [];
        const links = htmlDocument.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            let val = links[i].getAttribute("href");
            if (val.match(/\.(jpg)$/)) {
                images.push(val);
            }
        }
        images = sortImagesByRanking(images); // Sort images by title
        updateImagesDisplay(images);
    })
    .catch(error => console.error("Failed to load folder content", error));
}