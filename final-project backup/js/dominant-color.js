function getDominantColor(canvas) {
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorCounts = {};
    let dominantColor = '';
    let maxCount = 0;
  
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Skip pixels that are white, black, or grey variants by checking if the RGB values are close to each other
      if (!(Math.abs(r - g) <= 15 && Math.abs(g - b) <= 15 && Math.abs(r - b) <= 15)) {
        const color = `rgb(${r}, ${g}, ${b})`;
        colorCounts[color] = (colorCounts[color] || 0) + 1;
  
        if (colorCounts[color] > maxCount) {
          maxCount = colorCounts[color];
          dominantColor = color;
        }
      }
    }
  
    // If the most dominant color found is empty, it means the image is mostly grey/black/white tones.
    if (dominantColor === '') {
      for (let i = 0; i < data.length; i += 4) {
        const color = `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`;
        colorCounts[color] = (colorCounts[color] || 0) + 1;
  
        if (colorCounts[color] > maxCount) {
          maxCount = colorCounts[color];
          dominantColor = color;
        }
      }
    }
    return dominantColor;
}
  
  
// // Export the function to be used in other files
// export { getDominantColor };



