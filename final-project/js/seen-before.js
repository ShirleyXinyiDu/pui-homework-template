
// const images = [];


// images.forEach((imagePath) => {
//     // Create an <img> element
//     const imgElement = document.createElement('img');
//     imgElement.src = imagePath;
//     imgElement.alt = 'my-favorites-poster';
//     imgElement.classList.add('seen-img');
    
//     // Create an <a> element
//     const linkElement = document.createElement('a');
//     // Set the href attribute of <a> to the imagePath or another URL
//     linkElement.href = "./poster-detail.html"; // Or any URL you want the image to link to
//     // Optionally, if you want the link to open in a new tab
//     // linkElement.target = '_blank';
    
//     // Append the <img> to the <a>
//     linkElement.appendChild(imgElement);
    
//     // Finally, append the <a> to the list
//     seenBeforeList.appendChild(linkElement);
// });




const seenBeforeList = document.getElementById('seen-before-posters');
const noSeenTextId = 'no-seen-message'; // A unique ID for the message element

// Try to retrieve the favorites from localStorage or default to an empty array
const seenImages = JSON.parse(localStorage.getItem('seenImages')) || [];


// Function to update the display of favorites on the page
function updateSeenDisplay() {
    // Clear the current display
    seenBeforeList.innerHTML = '';

    if (seenImages.length === 0) {
        // Display a message if there are no favorites
        const noSeenMessage = document.createElement('p');
        noSeenMessage.id = noSeenTextId;
        noSeenMessage.textContent = "You haven't added any posters to Seen Before yet!";
        seenBeforeList.appendChild(noSeenMessage);
    } else {
        // Display each favorite poster
        seenImages.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = 'Seen Poster';
            imgElement.classList.add('seen-img');

            // Create a link element that leads to a detail page with the image as a parameter
            // const detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(imagePath);
            const detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(imagePath) + "&from=seenBefore";
            const linkElement = document.createElement('a');
            linkElement.href = detailPageUrl;
            linkElement.appendChild(imgElement); // Append the <img> to the <a>

            // Append the <a> to the list
            // myFavoritesList.appendChild(linkElement);

            seenBeforeList.appendChild(linkElement);
        });
    }
}

// Initial call to display favorites when the page loads
updateSeenDisplay();


