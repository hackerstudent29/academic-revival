const https = require('https');
https.get('https://www.msajce-edu.in/iqac.php', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const parts = data.split('id="tab6"');
        if (parts.length > 1) {
            const t6html = parts[1].split('<div class="tab-pane fade" id="tab7">')[0];
            const regex = /<h4[^>]*>\s*<span[^>]*>(.*?)<\/span>.*?href="(.*?)"/gs;
            let m;
            while ((m = regex.exec(t6html)) !== null) {
                console.log(m[1].trim() + ' -> ' + m[2].trim());
            }
        }
    });
});
