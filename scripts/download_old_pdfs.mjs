import fs from 'fs';
import path from 'path';
import https from 'https';
import { createClient } from '@supabase/supabase-js';

const urls = [
  'https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf',
  'https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf'
];

const supabaseUrl = 'https://ounikqjoupdiewkyjusw.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key-here';
const supabase = createClient(supabaseUrl, supabaseKey);

const targetDir = path.join(process.cwd(), 'public', 'uploads', 'academics');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Server responded with ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(err.message);
    });
  });
}

async function main() {
  for (const url of urls) {
    const filename = url.split('/').pop();
    const dest = path.join(targetDir, filename);
    
    try {
      console.log(`Downloading ${filename}...`);
      await downloadFile(url, dest);
      console.log(`✓ Saved ${filename}`);
      
      console.log(`Uploading ${filename} to Supabase...`);
      const fileBuffer = fs.readFileSync(dest);
      const supabasePath = `academics/${filename}`;
      
      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(supabasePath, fileBuffer, {
          contentType: 'application/pdf',
          upsert: true
        });
        
      if (error) {
        console.error(`✗ Error uploading ${filename}:`, error.message);
      } else {
        console.log(`✓ Successfully uploaded ${filename} to Supabase`);
      }
      
    } catch (err) {
      console.error(`✗ Failed on ${filename}:`, err);
    }
  }
}

main();
