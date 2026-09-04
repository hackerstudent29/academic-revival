const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('naac.html', 'utf8');
const $ = cheerio.load(html);

const criteriaList = [];
let currentCriterion = null;

$('table.table-striped.table-bordered').each((i, table) => {
    $(table).find('tr').each((j, row) => {
        const $row = $(row);
        
        // Check if it's a criterion header row
        if ($row.hasClass('bg-theme-colored2')) {
            const headerText = $row.text().trim();
            // e.g. "Criteria 1 - Curricular Aspects (75)" or "Curricular Criteria 2 - Teaching Learning and Evaluation (225)"
            const match = headerText.match(/(?:Criteria\s*\d+\s*-)?\s*(.*?)\s*\((\d+)\)/i);
            
            let title = headerText;
            let score = 0;
            
            if (match) {
                title = match[1].replace(/Criteria\s*\d+\s*-\s*/i, '').trim();
                score = parseInt(match[2], 10);
            } else {
                 // Try another regex if it didn't match the parens for score
                 const match2 = headerText.match(/(?:Criteria\s*\d+\s*-)?\s*(.*)/i);
                 if (match2) {
                     title = match2[1].trim();
                 }
            }
            
            currentCriterion = {
                id: (criteriaList.length + 1).toString(),
                number: (criteriaList.length + 1).toString().padStart(2, '0'),
                title: title,
                score: score,
                metrics: []
            };
            criteriaList.push(currentCriterion);
            return;
        }
        
        // It's a metric row
        const cols = $row.find('td');
        if (cols.length === 3 && currentCriterion) {
            const metricNumber = $(cols[0]).text().trim();
            const metricScore = parseInt($(cols[2]).text().trim(), 10) || 0;
            
            // Extract the main description and links
            const $contentCol = $(cols[1]);
            let description = '';
            const links = [];
            
            // For description, we get the text of the first P tag, or general text if no P tags exist
            const pTags = $contentCol.find('p');
            if (pTags.length > 0) {
                description = $(pTags[0]).text().trim();
            } else {
                description = $contentCol.text().trim();
            }
            
            // Clean up description if it starts with the text of an A tag inside it (due to weird formatting)
            const firstA = $(pTags[0]).find('a');
            if (firstA.length > 0 && description === firstA.text().trim()) {
                 // It's fine, the description IS the link text
            }
            
            // Extract all links
            $contentCol.find('a').each((k, a) => {
                const $a = $(a);
                const href = $a.attr('href');
                const text = $a.text().trim();
                if (href && href !== '#' && text) {
                    links.push({
                        title: text,
                        url: href.startsWith('http') ? href : `https://www.msajce-edu.in/${href}`
                    });
                }
            });
            
            if (metricNumber) {
                currentCriterion.metrics.push({
                    number: metricNumber,
                    description: description,
                    score: metricScore,
                    links: links
                });
            }
        }
    });
});

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/naac.json', JSON.stringify({ criteria: criteriaList }, null, 2));
console.log('Successfully extracted NAAC data to src/data/naac.json');
console.log(`Extracted ${criteriaList.length} criteria.`);
