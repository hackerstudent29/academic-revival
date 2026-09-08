const https = require('https');
https.get('https://www.msajce-edu.in/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const regex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
        let m;
        const links = [];
        while ((m = regex.exec(data)) !== null) {
            const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
            const href = m[1];
            if (text.toLowerCase().includes('ariia') || href.toLowerCase().includes('ariia')) {
                links.push({ title: text, url: href });
            }
        }
        
        console.log("Found links:");
        links.forEach(l => console.log(`${l.title} -> ${l.url}`));
    });
});
