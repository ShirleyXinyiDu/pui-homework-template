const folder = "assets/posters";
const images = [];

// Using fetch to load the content of the folder
fetch(folder)
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, "text/html");

    // Collect all image URLs
    const links = htmlDocument.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      let val = links[i].getAttribute("href");
      if (val.match(/\.(jpg)$/)) {  // Checking if the link is for a .jpg image
        // console.log('val');
        // console.log(val);
        images.push(val);
        // images.push(folder + val);  // Appending the full path to the images array
      }
    }

    // images.sort();  // Sorting images array; modify sorting logic as needed

    sortImagesByRanking(images);
    console.log(images);


    const flipbook = document.createElement('div');
    flipbook.id = 'flipbook';
    document.querySelector("#poster-gallery").appendChild(flipbook);


    images.forEach(function(val) {
      const page = document.createElement('div');
      page.style.backgroundImage = 'url(' + val + ')';
      page.className = 'page'; // A class for styling your page

      // Create an anchor and image element
      const linkElement = document.createElement('a');
      linkElement.href = './poster-detail.html?imageUrl=' + encodeURIComponent(val);

      const imgElement = document.createElement('img');
      imgElement.src = val;

      // Append the image to the link, then the link to the page
      linkElement.appendChild(imgElement);
      page.appendChild(linkElement);

      // Add the page to the flipbook
      document.getElementById('flipbook').appendChild(page);
    });

  })
  .catch(error => console.error("Failed to load folder content", error));


// $(document).ready(function() {
//   $('#flipbook').turn({
//     // width and height of the flipbook
//     width: 800,
//     height: 600,

//     // Elevation will move the peeling corner above other layers
//     elevation: 50,

//     // Enable gradients
//     gradients: true,

//     // Auto center the flipbook
//     autoCenter: true
//   });
// });

// // Using fetch to load the content of the folder
// fetch(folder)
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const htmlDocument = parser.parseFromString(data, "text/html");

//     // Collect all image URLs
//     const links = htmlDocument.getElementsByTagName("a");
//     for (let i = 0; i < links.length; i++) {
//       let val = links[i].getAttribute("href");
//       if (val.match(/\.(jpg)$/)) {  // Checking if the link is for a .jpg image
//         // console.log('val');
//         // console.log(val);
//         images.push(val);
//         // images.push(folder + val);  // Appending the full path to the images array
//       }
//     }

//     // Create the peel-press structure
//     // const peelPressDiv = document.createElement("div");
//     // peelPressDiv.id = "peel-press";
//     // peelPressDiv.className = "book peel";

//     // // Append peelPressDiv to the poster-gallery
//     const peelPressDiv = document.querySelector("#peel-press");

//     // Create and append the peel-top, peel-back, and peel-bottom divs to peelPressDiv

//     // const peelTopDiv = document.createElement("div");
//     // peelTopDiv.className = 'peel-top';
//     // peelTopDiv.textContent = 'Top';


//     // const peelTopDiv = createPeelDiv('peel-top', 'Top');
//     // const peelBackDiv = createPeelDiv('peel-back', 'Back');
//     // const peelBottomDiv = createPeelDiv('peel-bottom', 'Bottom');
    
//     // peelPressDiv.appendChild(peelTopDiv);
//     // peelPressDiv.appendChild(peelBackDiv);
//     // peelPressDiv.appendChild(peelBottomDiv);

//     sortImagesByRanking(images);
//     console.log(images);

//     // Append images to peel-top
//     images.forEach(function(val) {
//       const detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(val);

//       const peelTopDiv = document.createElement("div");
//       peelTopDiv.className = 'peel-top';
//       peelTopDiv.textContent = 'Top';

      
//       const imgElement = document.createElement("img");
//       imgElement.src = val;

//       const linkElement = document.createElement("a");
//       linkElement.href = detailPageUrl;
//       linkElement.appendChild(imgElement);

//       peelTopDiv.appendChild(linkElement); // Append linkElement to peelTopDiv

//       peelPressDiv.appendChild(peelTopDiv);
//     });
//     })
//     .catch(error => console.error("Failed to load folder content", error));



// // Helper function to create peel divs
// function createPeelDiv(className, textContent) {
//   const div = document.createElement("div");
//   div.className = className;
//   div.textContent = textContent;
//   return div;
// }



function sortImagesByRanking(filenames) {
    return filenames.sort(function(a, b) {
        // Extract the numerical part of the filename after the last '/' and decode it
        let numberA = parseInt(decodeURIComponent(a).match(/(\d+)/)[0], 10);
        let numberB = parseInt(decodeURIComponent(b).match(/(\d+)/)[0], 10);

        // Compare the numbers to determine the order
        return numberA - numberB;
    });
}




