import fs from 'fs';
import path from 'path';

const url = 'https://www.msajce-edu.in/uploads/autonomous/AutonomousR24.pdf';
const targetDir = path.join(process.cwd(), 'public', 'uploads', 'autonomous');
const targetFile = path.join(targetDir, 'AutonomousR24.pdf');

async function download() {
  console.log(`Downloading ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  
  fs.mkdirSync(targetDir, { recursive: true });
  
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  fs.writeFileSync(targetFile, buffer);
  console.log(`Successfully saved to ${targetFile}`);
}

download().catch(console.error);
