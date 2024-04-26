// posters.js

const folder = "./assets/posters";
const images = []; 

$.ajax({
    url: folder,
    success: function (data) {
        // var images = [];

        // Collect all image URLs
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpg)$/)) {
                console.log('val');
                console.log(val);
                images.push(val);
            }
        });

        sortImagesByTitle(images);
        console.log(images);

        images.forEach(function(val) {
            var detailPageUrl = "./poster-detail.html?imageUrl=" + encodeURIComponent(val);
        
            var imgElement = $("<img>").attr("src", val);
            var linkElement = $("<a>").attr("href", detailPageUrl).append(imgElement);
        
            $("#poster-gallery").append(linkElement);
        });


    }
});



function sortImagesByTitle(filenames) {
    return filenames.sort(function(a, b) {
        // Extract the numerical part of the filename after the last '/' and decode it
        let numberA = parseInt(decodeURIComponent(a).match(/(\d+)/)[0], 10);
        let numberB = parseInt(decodeURIComponent(b).match(/(\d+)/)[0], 10);

        // Compare the numbers to determine the order
        return numberA - numberB;
    });
}

