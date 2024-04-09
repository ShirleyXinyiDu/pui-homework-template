const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function fetchAndParseURL(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const data = [];

        // Extract elements with the specific class
        $(".QuickFacts__Outer-sc-1o0ai8b-0.fIMeHG").each((index, element) => {
            const text = $(element).text();
            // You can also extract other attributes or child elements if needed
            data.push(text);
        });

        return data;
    } catch (error) {
        console.error('Error fetching and parsing URL:', error);
        return null;
    }
}

// Use the function and save the results to a JS file
const url = 'https://www.bfi.org.uk/sight-and-sound/greatest-films-all-time';
fetchAndParseURL(url).then(data => {
    const jsContent = `module.exports = ${JSON.stringify(data, null, 2)};`;
    fs.writeFileSync('posterData.js', jsContent, 'utf-8');
    console.log('Data saved to posterData.js');
});
