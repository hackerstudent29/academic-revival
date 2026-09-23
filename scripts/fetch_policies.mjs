import fs from 'fs';

async function fetchPolicies() {
  try {
    const res = await fetch('https://www.msajce-edu.in/msajcepolicy.php');
    const html = await res.text();
    fs.writeFileSync('scripts/policies.html', html);
    console.log('Saved policies.html, size:', html.length);

    const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const policies = [];
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (href.includes('.pdf') || text.toLowerCase().includes('policy') || text.toLowerCase().includes('governance') || text.toLowerCase().includes('learner') || text.toLowerCase().includes('ragging') || text.toLowerCase().includes('responsibility')) {
        policies.push({ text, href });
      }
    }
    console.log('Found policies:', JSON.stringify(policies, null, 2));
  } catch (err) {
    console.error(err);
  }
}

fetchPolicies();
