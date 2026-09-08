const https = require('https');
https.get('https://www.msajce-edu.in/ariia.php', (res) => {
    console.log("Status: " + res.statusCode);
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        if (res.statusCode === 200) {
            const regex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
            let m;
            const links = [];
            while ((m = regex.exec(data)) !== null) {
                const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                const href = m[1];
                if (href.includes('ariia') || text.includes('ARIIA')) {
                    links.push({ title: text, url: href });
                }
            }
            console.log("Found links on ariia.php:");
            links.forEach(l => console.log(`${l.title} -> ${l.url}`));
        } else {
            console.log("No ariia.php found.");
        }
    });
});
