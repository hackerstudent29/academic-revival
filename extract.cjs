const fs = require('fs');
const html = fs.readFileSync('iqac_temp2.html', 'utf16le');
['tab3', 'tab4', 'tab5', 'tab6'].forEach(tab => {
    console.log('--- ' + tab + ' ---');
    const match = html.split('id="' + tab + '"')[1];
    if(match) {
        const content = match.split('</div>')[0];
        const regex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
        let m;
        let found = false;
        while ((m = regex.exec(content)) !== null) {
            found = true;
            const text = m[2].replace(/<[^>]+>/g, '').trim();
            console.log(text + ' -> ' + m[1]);
        }
        if(!found) console.log('no links');
    } else {
        console.log('not found');
    }
});
