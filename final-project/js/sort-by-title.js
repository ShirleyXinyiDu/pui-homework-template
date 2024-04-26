
function sortImagesByTitle(filenames) {
    // Sorting filenames based on the titles from the movies object
    return filenames.sort((a, b) => {
        // Decode filenames and strip the path before accessing the movies object
        let filenameA = decodeURIComponent(a.split('/').pop());
        let filenameB = decodeURIComponent(b.split('/').pop());

        // Check if the movies object has an entry for these filenames
        if (!movies[filenameA] || !movies[filenameB]) {
            console.error(`One of the filenames "${filenameA}" or "${filenameB}" does not exist in the movies object.`);
            return 0;
        }

        // Extract the title from the movies object using the decoded filename as key
        let titleA = movies[filenameA].title.toUpperCase(); // Convert to uppercase to ensure case-insensitive comparison
        let titleB = movies[filenameB].title.toUpperCase();

        // Move titles starting with non-letter characters to the end
        const regex = /^[^A-Z]/i;
        if (regex.test(titleA) && !regex.test(titleB)) {
            return 1; // a goes after b
        } else if (!regex.test(titleA) && regex.test(titleB)) {
            return -1; // a goes before b
        }

        // If both titles start with a letter or non-letter, sort alphabetically
        return titleA.localeCompare(titleB);
    });
}
