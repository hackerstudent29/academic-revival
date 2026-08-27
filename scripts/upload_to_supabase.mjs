import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ounikqjoupdiewkyjusw.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key-here';
const supabase = createClient(supabaseUrl, supabaseKey);

const sourceDir = path.join(process.cwd(), 'public', 'uploads', 'autonomous');

async function main() {
  const files = fs.readdirSync(sourceDir);
  console.log(`Found ${files.length} files to upload...`);

  for (const file of files) {
    if (!file.endsWith('.pdf')) continue;
    
    const filePath = path.join(sourceDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    
    const supabasePath = `autonomous/${file}`;
    
    console.log(`Uploading ${file} to Supabase bucket 'uploads'...`);
    
    const { data, error } = await supabase.storage
      .from('uploads')
      .upload(supabasePath, fileBuffer, {
        contentType: 'application/pdf',
        upsert: true
      });
      
    if (error) {
      console.error(`✗ Error uploading ${file}:`, error.message);
    } else {
      console.log(`✓ Successfully uploaded ${file}`);
    }
  }
}

main();
