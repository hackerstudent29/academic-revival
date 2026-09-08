const https = require('https');
https.get('https://www.msajce-edu.in/iqac.php', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        ['tab3', 'tab4', 'tab5', 'tab6'].forEach(tab => {
            console.log('=== ' + tab + ' ===');
            const parts = data.split('id="' + tab + '"');
            if (parts.length > 1) {
                const content = parts[1].split('</div>')[0];
                const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                console.log(text.substring(0, 1000));
            } else {
                console.log('not found');
            }
        });
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});
