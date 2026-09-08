const https = require('https');
https.get('https://www.msajce-edu.in/iqac.php', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const parts = data.split('id="tab6"');
        if (parts.length > 1) {
            console.log(parts[1].split('</div>')[3]);
        }
    });
});
