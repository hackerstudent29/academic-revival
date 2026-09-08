const https = require('https');
https.get('https://www.msajce-edu.in/iqac.php', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        ['tab4', 'tab5', 'tab6'].forEach(tab => {
            console.log('=== ' + tab + ' ===');
            const parts = data.split('id="' + tab + '"');
            if (parts.length > 1) {
                console.log(parts[1].split('</div>')[0]);
            }
        });
    });
});
