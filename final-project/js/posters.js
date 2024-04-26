// const sortingIcon = document.getElementById('sorting-icon');


// const folder = "assets/posters";

const folder = "assets/icons";
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
        console.log(val);
        images.push(val);
        // images.push(folder + val);  // Appending the full path to the images array
      }
    }


    sortImagesByRanking(images);
    console.log(images);

    images.forEach(function(val) {
      const detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(val);

      const imgElement = document.createElement("img");
      imgElement.src = val;

      const linkElement = document.createElement("a");
      linkElement.href = detailPageUrl;
      linkElement.appendChild(imgElement);

      document.querySelector("#poster-gallery").appendChild(linkElement);
    });
  })
  .catch(error => console.error("Failed to load folder content", error));



function sortImagesByRanking(filenames) {
    return filenames.sort(function(a, b) {
        // Extract the numerical part of the filename after the last '/' and decode it
        let numberA = parseInt(decodeURIComponent(a).match(/(\d+)/)[0], 10);
        let numberB = parseInt(decodeURIComponent(b).match(/(\d+)/)[0], 10);

        // Compare the numbers to determine the order
        return numberA - numberB;
    });
}




