const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
console.log('starting');
const url = 'https://glitch.com';
const domain = 'glitch.com';
const visited = new Set();
const links = [];

crawl(url);

function crawl(url) {
  if (visited.has(url) || !url.startsWith('http')) {
    return;
  }

  visited.add(url);

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const pageLinks = $('a')
        .map((_, element) => $(element).attr('href'))
        .filter(href => href && typeof href === 'string' && href.startsWith('http'))
        .filter(href => href.includes(domain))
        .get();

      links.push({ url, links: pageLinks });

      pageLinks.forEach(link => {
        crawl(link);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

process.on('exit', () => {
  fs.writeFileSync('data.json', JSON.stringify(links, null, 2));
  console.log(`Crawled ${visited.size} pages and saved data.json`);
});