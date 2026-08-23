import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courseDataPath = path.join(__dirname, '../src/lib/courseData.ts');
const courseDataStr = fs.readFileSync(courseDataPath, 'utf-8');

const courseMappings = [];

// Split by object brackets
const blocks = courseDataStr.split('slug:');
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slugMatch = block.match(/^\s*["']([^"']+)["']/);
  const mdMatch = block.match(/markdownFile:\s*["']([^"']+)["']/);
  if (slugMatch && mdMatch) {
    courseMappings.push({ slug: slugMatch[1], mdFile: mdMatch[1] });
  }
}

console.log("Mappings found:", courseMappings.length);

const facultyData = [];
let fId = 1;

for (const { slug, mdFile } of courseMappings) {
  const mdPath = path.join(__dirname, '../src/content/departments', mdFile);
  if (!fs.existsSync(mdPath)) {
    console.log(`Skipping ${mdFile} (not found)`);
    continue;
  }

  const content = fs.readFileSync(mdPath, 'utf-8');
  const lines = content.split('\n');

  let inFacultySection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('## Faculty')) {
      inFacultySection = true;
      continue;
    }
    
    if (inFacultySection && line.startsWith('## ')) {
      inFacultySection = false;
      break;
    }

    if (inFacultySection && line.startsWith('|') && !line.includes('---') && !line.includes('| Name |')) {
      const parts = line.split('|').map(p => p.trim()).filter(p => p);
      if (parts.length >= 5) {
        let name = parts[0].replace(/\*\*/g, '');
        let designation = parts[1];
        let dateOfJoining = parts[2];
        let qualification = parts[3];
        let association = parts[4];
        
        let photoName = encodeURIComponent(name.replace(/^Dr\.\s*|^Mr\.\s*|^Mrs\.\s*|^Ms\.\s*/i, '').trim().replace(/\s+/g, '+'));

        facultyData.push({
          id: `f${fId++}`,
          name,
          designation,
          qualification,
          experience: "10 Years", // Default fallback
          specialization: "Core Engineering",
          dateOfJoining,
          association,
          bio: "Committed to delivering high-quality engineering education and research.",
          photo: `https://ui-avatars.com/api/?name=${photoName}&background=random&size=400`,
          departmentSlug: slug
        });
      }
    }
  }
}

let outContent = `export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string;
  dateOfJoining: string;
  association: string;
  bio: string;
  photo: string;
  departmentSlug: string;
}

export const allFaculty: FacultyMember[] = ${JSON.stringify(facultyData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/facultyData.ts'), outContent);
console.log("Successfully extracted", facultyData.length, "faculty members!");
