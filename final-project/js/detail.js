
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');

    if (imageUrl) {

        const imgSrc = decodeURIComponent(imageUrl);
        document.getElementById('poster-detail-img').src = imgSrc;

        // console.log(imgSrc);

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
