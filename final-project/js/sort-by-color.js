// function rgbToHsv(r, g, b) {
//     r /= 255, g /= 255, b /= 255;

//     let max = Math.max(r, g, b), min = Math.min(r, g, b);
//     let h, s, v = max;

//     let d = max - min;
//     s = max == 0 ? 0 : d / max;

//     if (max == min) {
//         h = 0; // achromatic
//     } else {
//         switch (max) {
//             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//             case g: h = (b - r) / d + 2; break;
//             case b: h = (r - g) / d + 4; break;
//         }
//         h /= 6;
//     }

//     return [h, s, v];
// }

// function sortByColor(imagesInfo) {
//     return imagesInfo.sort((a, b) => {
//         // Extract the RGB values from the color strings
//         let rgbA = a.color.match(/\d+/g).map(Number);
//         let rgbB = b.color.match(/\d+/g).map(Number);

//         // Convert RGB to HSV
//         let hsvA = rgbToHsv(...rgbA);
//         let hsvB = rgbToHsv(...rgbB);

//         // Sort by hue, then saturation, then value
//         return hsvA[0] - hsvB[0] || hsvA[1] - hsvB[1] || hsvA[2] - hsvB[2];
//     });
// }

// // This function can be exported and then imported in `posters.js` if using modules


function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // Adjust hue for sorting: Red starts at 0, we move it to the end for correct sorting
    h = (h + 0.5) % 1.0; // Shift hue range to start at green (around 0.33), wrap around at 1
    return [h, s, v];
}

function sortByColor(imagesInfo) {
    return imagesInfo.sort((a, b) => {
        let rgbA = a.color.match(/\d+/g).map(Number);
        let rgbB = b.color.match(/\d+/g).map(Number);
        let hsvA = rgbToHsv(...rgbA);
        let hsvB = rgbToHsv(...rgbB);

        // Sort by hue, then prioritize saturation, and then value
        // Achromatic colors (black, white) at the end
        if (hsvA[0] === 0 && hsvA[1] === 0) hsvA[0] = 1; // Set black and white to max hue for sorting to the end
        if (hsvB[0] === 0 && hsvB[1] === 0) hsvB[0] = 1;

        return hsvA[0] - hsvB[0] || hsvB[1] - hsvA[1] || hsvB[2] - hsvA[2]; // Reverse s and v sort to prioritize high values
    });
}
