import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const urls = [
  'https://www.msajce-edu.in/uploads/autonomous/202CSBS24-25.pdf'
];

const targetDir = path.join(process.cwd(), 'public', 'uploads', 'autonomous');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // Handle both http and https
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', (err) => {
      reject(err.message);
    });
  });
}

async function main() {
  console.log(`Downloading ${urls.length} PDFs...`);
  
  for (const url of urls) {
    const filename = url.split('/').pop();
    const dest = path.join(targetDir, filename);
    
    try {
      console.log(`Downloading ${filename}...`);
      await downloadFile(url, dest);
      console.log(`✓ Saved ${filename}`);
    } catch (err) {
      console.error(`✗ Failed to download ${filename}:`, err);
    }
  }
  
  console.log("Finished downloading all PDFs.");
}

main();
