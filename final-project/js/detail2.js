
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');

    if (imageUrl) {
        // document.getElementById('poster-detail-img').src = decodeURIComponent(imageUrl);

        // Update any other elements as needed, for example, the movie title
        // If passing the title as a query parameter, use it as below
        // const movieTitle = urlParams.get('title');
        // document.getElementById('movie-title').innerText = decodeURIComponent(movieTitle);
        const imgSrc = decodeURIComponent(imageUrl);
        document.getElementById('poster-detail-img').src = imgSrc;

        console.log(imgSrc);

        const parts = imgSrc.split('/'); // This splits the string into an array by each '/'
        // const fileName = parts.pop(); // This removes and returns the last element of the array
        const fileName = parts[parts.length - 1];

        document.getElementById('movie-title').innerText = movies[fileName].title;
        document.getElementById('year').innerText = movies[fileName].year;
        document.getElementById('region').innerText = movies[fileName].region;
        document.getElementById('director-detail').innerText = movies[fileName].director;
        document.getElementById('producer-detail').innerText = movies[fileName].producer;
        document.getElementById('writer-detail').innerText = movies[fileName].writer;
        document.getElementById('cast-detail').innerText = movies[fileName].cast;
        document.getElementById('time-detail').innerText = movies[fileName].time;


    }
});



// Function to update the recommendations display
function updateRecommendationsDisplay(recImages) {
    const recommendationsDiv = document.querySelector('.recommendations');
    recommendationsDiv.innerHTML = ''; // Clear existing content
    
    recImages.forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = 'Recommended Poster';
        recommendationsDiv.appendChild(imgElement);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');
    
    if (imageUrl) {

        // Get an array of filenames from the movies object
        const filenames = Object.keys(movies).sort();
        console.log(filenames);
        sortImagesByRanking(filenames);
        const imgSrc = decodeURIComponent(imageUrl);
        const parts = imgSrc.split('/');
        const fileName = parts[parts.length - 1];
        const currentIndex = filenames.indexOf(fileName);

        let recImages = [];

        if (filenames.length <= 4) {
            // If there are 4 or less images, return all of them excluding the selected one
            recImages = filenames.filter(f => f !== fileName).map(f => "assets/posters/" + f);
        } else {
            // Determine the correct indices for recommendations
            let indices = [];
            if (currentIndex === 0) {
                // Selected image is the first one, get the first four excluding the selected
                indices = [1, 2, 3, 4];
            } else if (currentIndex === 1) {
                // Selected image is the second one, get the first four excluding the selected
                indices = [0, 2, 3, 4];
            } else if (currentIndex === filenames.length - 1) {
                // Selected image is the last one, get the last four excluding the selected
                indices = [filenames.length - 5, filenames.length - 4, filenames.length - 3, filenames.length - 2];
            } else if (currentIndex === filenames.length - 2) {
                // Selected image is the second last one, get the last four excluding the selected
                indices = [filenames.length - 5, filenames.length - 4, filenames.length - 3, filenames.length - 1];
            } else {
                // General case: get two before and two after the selected image
                indices = [currentIndex - 2, currentIndex - 1, currentIndex + 1, currentIndex + 2];
            }
            
            // Map the indices to actual file paths
            recImages = indices.map(i => "assets/posters/" + filenames[i]);
        }

        // Log or use recImages as needed
        console.log("recImages");
        console.log(recImages);
        
        // Function to update the .recommendations div with these images
        updateRecommendationsDisplay(recImages);
    }
});

// // You would also need the updateRecommendationsDisplay function similar to previous suggestions.
// function updateRecommendationsDisplay(recImages) {
//     const recommendationsDiv = document.querySelector('.recommendations');
//     recommendationsDiv.innerHTML = ''; // Clear out any existing content

//     recImages.forEach((imagePath) => {
//         const imgElement = document.createElement('img');
//         imgElement.src = imagePath;
//         imgElement.alt = 'Recommended Poster';
//         imgElement.classList.add('recommendation-img'); // Add a class for styling if needed
//         recommendationsDiv.appendChild(imgElement);
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const imageUrl = urlParams.get('imageUrl');
//     // ... (existing code)
    
//     if (imageUrl) {
//         // Get an array of filenames (keys) from the movies object
//         const filenames = Object.keys(movies).sort(); // Sort if needed to ensure order
//         const imgSrc = decodeURIComponent(imageUrl);
//         const parts = imgSrc.split('/');
//         const fileName = parts[parts.length - 1]; // Get the filename from the imgSrc
        
//         // Find the index of the current file
//         const currentIndex = filenames.indexOf(fileName);
//         // ... (existing code to set details)
//         document.getElementById('poster-detail-img').src = imgSrc;

//         console.log(imgSrc);

//         document.getElementById('movie-title').innerText = movies[fileName].title;
//         document.getElementById('year').innerText = movies[fileName].year;
//         document.getElementById('region').innerText = movies[fileName].region;
//         document.getElementById('director-detail').innerText = movies[fileName].director;
//         document.getElementById('producer-detail').innerText = movies[fileName].producer;
//         document.getElementById('writer-detail').innerText = movies[fileName].writer;
//         document.getElementById('cast-detail').innerText = movies[fileName].cast;
//         document.getElementById('time-detail').innerText = movies[fileName].time;

        
//         // Calculate indices for the two previous and next images
//         let prevIndex1 = currentIndex - 1 < 0 ? filenames.length - 1 : currentIndex - 1;
//         let prevIndex2 = currentIndex - 2 < 0 ? filenames.length - 2 : currentIndex - 2;
//         let nextIndex1 = currentIndex + 1 >= filenames.length ? 0 : currentIndex + 1;
//         let nextIndex2 = currentIndex + 2 >= filenames.length ? 1 : currentIndex + 2;
        
//         // Ensure that the indices are within bounds
//         prevIndex1 = (prevIndex1 + filenames.length) % filenames.length;
//         prevIndex2 = (prevIndex2 + filenames.length) % filenames.length;
//         nextIndex1 = nextIndex1 % filenames.length;
//         nextIndex2 = nextIndex2 % filenames.length;
        
//         // Construct the recImages array
//         const recImages = [
//             "assets/posters/" + filenames[prevIndex2],
//             "assets/posters/" + filenames[prevIndex1],
//             "assets/posters/" + filenames[nextIndex1],
//             "assets/posters/" + filenames[nextIndex2],
//         ];
        
//         // Log or use recImages as needed
//         console.log(recImages);
//         updateRecommendationsDisplay(recImages);
        
//         // Add code to update the .recommendations div with these images if necessary
//         // updateRecommendationsDisplay(recImages);
//     }
// });




// const src = "./assets/posters/32 psycho.jpg";
// const parts = src.split('/'); // This splits the string into an array by each '/'
// const fileName = parts.pop();


