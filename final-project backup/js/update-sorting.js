
const sortingModeText = document.getElementById('sorting-mode');
const sortingIcon = document.getElementById('sorting-icon');
sortingIcon.addEventListener('click', updateSortingMode);

function updateSortingMode() {
    if (sortingIcon.src.includes("ranking.svg")) { // Use includes to match the end of the path
        sortingIcon.src = "./assets/icons/color.jpg"; // Use single = for assignment
        sortingIcon.style.width = '45px'; // Set the width to 26px
        sortingIcon.style.height = '45px'; // Set the height to 26px
        sortingIcon.style.border = '1px solid rgb(255, 255, 255)'; // Add border styling
        sortingIcon.style.borderRadius = '50%'; // Set the border-radius (corrected property name and percentage value)
        sortingModeText.innerText = "Color"
        console.log("Color mode");
    } elif 
}

