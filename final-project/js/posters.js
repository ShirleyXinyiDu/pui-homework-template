// Function to create and append image elements to the gallery
function createAndAppendPosterElements(movies) {
    const gallery = document.querySelector("#poster-gallery");
  
    // Loop through each movie in the movies object
    for (const imageName in movies) {
      if (movies.hasOwnProperty(imageName)) {
        const val = imageName; // The image name is the key in the movies object
        const detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(val);
  
        // Create img element for poster
        const imgElement = document.createElement("img");
        imgElement.src = "./assets/posters/" + val;
        imgElement.alt = movies[imageName].title; // Optional: add alt text for accessibility
  
        // Create anchor element wrapping the image
        const linkElement = document.createElement("a");
        linkElement.href = detailPageUrl;
        linkElement.appendChild(imgElement);
  
        // Append the anchor element to the gallery
        gallery.appendChild(linkElement);
      }
    }
  }
  
  // Assuming the movies data is structured as provided in the `movieData.js` file,
  // and that `movieData.js` is correctly linked before this script in your HTML,
  // you can call the function to populate the gallery.
  createAndAppendPosterElements(movies);
  