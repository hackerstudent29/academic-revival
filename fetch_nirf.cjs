const https = require('https');
https.get('https://www.msajce-edu.in/nirf.php', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const regex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
        let m;
        const links = [];
        while ((m = regex.exec(data)) !== null) {
            const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
            const href = m[1];
            if (text.includes('NIRF') || href.includes('nirf') || href.includes('NIRF') || text.includes('Engineering') || text.includes('2024') || text.includes('2023')) {
                // only keep relevant main content links, exclude header/footer
                if(!href.endsWith('.php') && !href.startsWith('http') && !href.includes('mail.google.com')) {
                    links.push({ title: text, url: href });
                }
            }
        }
        
        // Also we can just look for the main content area. Usually it's in a <section> or a specific div.
        console.log("Found links:");
        links.forEach(l => console.log(`${l.title} -> ${l.url}`));
    });
});
