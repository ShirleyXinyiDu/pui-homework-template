// function getDominantColor(canvas) {
//     const context = canvas.getContext('2d');
//     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;
//     const colorCounts = {};
//     const colorThreshold = 10; // Threshold for considering colors as similar

//     function colorKey(r, g, b) {
//         // Reduce color space by grouping similar colors
//         const rk = Math.round(r / colorThreshold) * colorThreshold;
//         const gk = Math.round(g / colorThreshold) * colorThreshold;
//         const bk = Math.round(b / colorThreshold) * colorThreshold;
//         return `${rk},${gk},${bk}`;
//     }

//     // Count occurrences of these generalized color buckets
//     for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const key = colorKey(r, g, b);
//         colorCounts[key] = (colorCounts[key] || 0) + 1;
//     }

//     // Determine the most frequent color bucket
//     let maxCount = 0;
//     let mostFrequentBucket = null;
//     for (let key in colorCounts) {
//         if (colorCounts[key] > maxCount) {
//             maxCount = colorCounts[key];
//             mostFrequentBucket = key;
//         }
//     }

//     // Calculate the average color of the most frequent bucket
//     let totalR = 0;
//     let totalG = 0;
//     let totalB = 0;
//     let totalCount = 0;
//     const [baseR, baseG, baseB] = mostFrequentBucket.split(',').map(Number);
//     for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         if (Math.abs(r - baseR) < colorThreshold && Math.abs(g - baseG) < colorThreshold && Math.abs(b - baseB) < colorThreshold) {
//             totalR += r;
//             totalG += g;
//             totalB += b;
//             totalCount++;
//         }
//     }

//     const averageR = Math.round(totalR / totalCount);
//     const averageG = Math.round(totalG / totalCount);
//     const averageB = Math.round(totalB / totalCount);

//     return `rgb(${averageR}, ${averageG}, ${averageB})`;
// }

function getDominantColor(canvas) {
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorThreshold = 10; // Threshold for considering colors as similar
    const greyScaleThreshold = 50; // Threshold for determining if a color is grey-scale

    function colorKey(r, g, b) {
        // Reduce color space by grouping similar colors
        const rk = Math.round(r / colorThreshold) * colorThreshold;
        const gk = Math.round(g / colorThreshold) * colorThreshold;
        const bk = Math.round(b / colorThreshold) * colorThreshold;
        return `${rk},${gk},${bk}`;
    }

    const colorCounts = {};
    const greyCounts = {};
    let totalNonGreyCount = 0;

    // Count occurrences of these generalized color buckets and track non-grey colors
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (Math.abs(r - g) <= greyScaleThreshold && Math.abs(g - b) <= greyScaleThreshold && Math.abs(r - b) <= greyScaleThreshold) {
            // Count grey colors separately
            const key = colorKey(r, g, b);
            greyCounts[key] = (greyCounts[key] || 0) + 1;
        } else {
            totalNonGreyCount++;
            const key = colorKey(r, g, b);
            colorCounts[key] = (colorCounts[key] || 0) + 1;
        }
    }

    if (totalNonGreyCount === 0) { // If no non-grey colors are found
        // Find the most frequent grey color
        let maxCount = 0;
        let mostFrequentGrey = null;
        for (let key in greyCounts) {
            if (greyCounts[key] > maxCount) {
                maxCount = greyCounts[key];
                mostFrequentGrey = key;
            }
        }
        return `rgb(${mostFrequentGrey})`; // Return the dominant grey-tone color
    }

    // Determine the most frequent color bucket among non-grey colors
    let maxCount = 0;
    let mostFrequentBucket = null;
    for (let key in colorCounts) {
        if (colorCounts[key] > maxCount) {
            maxCount = colorCounts[key];
            mostFrequentBucket = key;
        }
    }

    // Calculate the average color of the most frequent bucket
    let totalR = 0, totalG = 0, totalB = 0, totalCount = 0;
    const [baseR, baseG, baseB] = mostFrequentBucket.split(',').map(Number);
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (Math.abs(r - baseR) < colorThreshold && Math.abs(g - baseG) < colorThreshold && Math.abs(b - baseB) < colorThreshold) {
            totalR += r;
            totalG += g;
            totalB += b;
            totalCount++;
        }
    }

    const averageR = Math.round(totalR / totalCount);
    const averageG = Math.round(totalG / totalCount);
    const averageB = Math.round(totalB / totalCount);

    return `rgb(${averageR}, ${averageG}, ${averageB})`;
}
