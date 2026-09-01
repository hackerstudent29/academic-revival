import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import https from 'https';

const supabaseUrl = 'https://ounikqjoupdiewkyjusw.supabase.co';
const supabaseKey = 'sb_publishable_o9wk5wyRrKYa0G7ASD3eCA_WViR6FNG';
const supabase = createClient(supabaseUrl, supabaseKey);

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  const url = 'https://msajce-edu.in/uploads/College-Prospectus.pdf';
  const tempPath = path.join(process.cwd(), 'scratch', 'College-Prospectus.pdf');
  
  if (!fs.existsSync(path.dirname(tempPath))) {
    fs.mkdirSync(path.dirname(tempPath), { recursive: true });
  }

  console.log(`Downloading ${url}...`);
  await downloadFile(url, tempPath);
  console.log(`Downloaded to ${tempPath}`);

  const fileBuffer = fs.readFileSync(tempPath);
  const supabasePath = `admission/College-Prospectus.pdf`; // Since previous was admission/brochure_2026.pdf
  
  console.log(`Uploading to Supabase bucket 'uploads' at ${supabasePath}...`);
  
  const { data, error } = await supabase.storage
    .from('uploads')
    .upload(supabasePath, fileBuffer, {
      contentType: 'application/pdf',
      upsert: true
    });
    
  if (error) {
    console.error(`✗ Error uploading:`, error.message);
  } else {
    console.log(`✓ Successfully uploaded`);
    const publicUrl = supabase.storage.from('uploads').getPublicUrl(supabasePath).data.publicUrl;
    console.log(`Public URL: ${publicUrl}`);
  }
}

main().catch(console.error);
