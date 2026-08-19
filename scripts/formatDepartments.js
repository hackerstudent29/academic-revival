import fs from 'fs';
import path from 'path';

const INPUT_DIR = path.resolve('college datas/12 departments');
const OUTPUT_DIR = path.resolve('src/content/departments');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(INPUT_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove those weird <!--ent_038--> tags first
  content = content.replace(/<!--ent_\d+-->/g, '');

  // Fix squashed bullets (Programme Outcomes, PEOs, PSOs)
  // Convert to numbered lists "1. **" instead of bullets "- **"
  content = content.replace(/(\. | )-\s+\*\*/g, '.\n\n1. **');
  content = content.replace(/\n-\s+\*\*/g, '\n1. **');

  // Clean up Faculty Section into a Markdown Table
  const facultyMatch = content.match(/(## 8\. Faculty[^\n]*\n)([\s\S]*?)(?=\n##|$)/);
  if (facultyMatch) {
    const facultyTitle = facultyMatch[1];
    const facultyText = facultyMatch[2];
    
    // Split the text into an array where each element starts with Dr., Mr., or Ms.
    const parts = facultyText.split(/(?=Dr\.|Mr\.|Ms\.)/).map(p => p.trim()).filter(Boolean);
    
    let table = `| Name | Profile Details |\n| --- | --- |\n`;
    
    // If the first part doesn't start with Dr/Mr/Ms, it's introductory text
    let intro = "";
    parts.forEach(part => {
      let name, details;
      const match = part.match(/^(Dr\.|Mr\.|Ms\.)\s+([A-Za-z\.\s]+?)(?=\s+(?:is|serves|who|joined|has)|,|\s*\()/);
      if (match) {
        name = match[1] + " " + match[2].trim();
        details = part.substring(match[0].length).replace(/^[\s,]+/, '').trim();
        // Capitalize the first letter of details if it starts with a lowercase letter
        if (details.length > 0) {
          details = details.charAt(0).toUpperCase() + details.slice(1);
        }
        table += `| **${name}** | ${details} |\n`;
      } else {
        const fallback = part.match(/^(Dr\.|Mr\.|Ms\.)\s+([A-Za-z\.\s]+)/);
        if (fallback) {
          name = fallback[1] + " " + fallback[2].trim();
          details = part.substring(fallback[0].length).replace(/^[\s,]+/, '').trim();
          if (details.length > 0) {
            details = details.charAt(0).toUpperCase() + details.slice(1);
          }
          table += `| **${name}** | ${details} |\n`;
        } else {
          // If it's a floating Mr. or Ms. we just ignore it
          if (part.trim() !== 'Mr.' && part.trim() !== 'Ms.') {
             intro += part + "\n\n";
          }
        }
      }
    });

    content = content.replace(facultyMatch[2], intro + table);
  }

  // Facilities and Laboratories
  const facilitiesMatch = content.match(/(## 9\. Facilities and Laboratories\n)([\s\S]*?)(?=\n##|$)/);
  if (facilitiesMatch) {
    const facilitiesText = facilitiesMatch[2].trim();
    // split by sentences
    const sentences = facilitiesText.split(/\.\s+/).filter(Boolean);
    const bullets = sentences.map(s => `- ${s}${s.endsWith('.') ? '' : '.'}`).join('\n');
    content = content.replace(facilitiesMatch[2], '\n' + bullets + '\n');
  }

  const outPath = path.join(OUTPUT_DIR, file);
  fs.writeFileSync(outPath, content);
  console.log(`Formatted ${file}`);
});
