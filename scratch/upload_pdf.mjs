import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://ounikqjoupdiewkyjusw.supabase.co';
const supabaseKey = 'sb_publishable_o9wk5wyRrKYa0G7ASD3eCA_WViR6FNG';
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadFile() {
  const filePath = path.join(process.cwd(), 'public', 'uploads', 'autonomous', 'AutonomousR24.pdf');
  const fileBuffer = fs.readFileSync(filePath);
  
  const targetBucket = 'uploads';

  console.log(`Uploading to bucket: ${targetBucket}`);
  const { data, error } = await supabase.storage
    .from(targetBucket)
    .upload('autonomous/AutonomousR24.pdf', fileBuffer, {
      contentType: 'application/pdf',
      upsert: true
    });
    
  if (error) {
    console.error('Error uploading file:', error);
  } else {
    console.log('Upload successful!', data);
    const { data: publicUrlData } = supabase.storage.from(targetBucket).getPublicUrl('autonomous/AutonomousR24.pdf');
    console.log('Public URL:', publicUrlData.publicUrl);
  }
}

uploadFile();
