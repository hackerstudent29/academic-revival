import { allCourses } from '../src/lib/courseData';
// @ts-ignore
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const connectionString = 'postgresql://postgres.ounikqjoupdiewkyjusw:RAMAZENDRUM2007@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres';

const pool = new Pool({
  connectionString,
});

async function run() {
  const client = await pool.connect();
  console.log("Connected to database for migration...");

  try {
    for (const course of allCourses) {
      console.log(`Migrating department: ${course.name}`);
      
      // 1. Insert into departments
      await client.query(`
        INSERT INTO public.departments (name, short_name, slug, intake, govt_quota, management_quota, level, department, description, image, details)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (slug) DO UPDATE SET
          name = EXCLUDED.name,
          details = EXCLUDED.details
      `, [
        course.name,
        course.shortName || null,
        course.slug,
        course.intake?.toString() || null,
        course.govtQuota?.toString() || null,
        course.managementQuota?.toString() || null,
        course.level,
        course.department,
        course.description,
        course.image,
        JSON.stringify(course.details)
      ]);

      // 2. Read markdown file if exists and insert into site_content
      const mdFilename = `msajce_${course.slug.replace(/-/g, '_')}.md`;
      const mdPath = path.join(process.cwd(), 'src/content/departments', mdFilename);
      
      let markdownContent = '';
      try {
        markdownContent = fs.readFileSync(mdPath, 'utf8');
      } catch (err) {
        // Fallback for some names like msajce_cse.md
        const shortName = course.shortName?.toLowerCase() || '';
        try {
          if (shortName) {
             markdownContent = fs.readFileSync(path.join(process.cwd(), `src/content/departments/msajce_${shortName}.md`), 'utf8');
          }
        } catch (err2) {
           console.log(`Could not find markdown file for ${course.slug}`);
        }
      }

      if (markdownContent) {
        // Insert into site_content with page_name = 'departments.[slug]'
        const pageName = `departments.${course.slug}`;
        const contentJson = {
           heroQuote: course.details.heroQuote || '',
           overview: course.details.overview || '',
           markdownContent: markdownContent
        };
        
        await client.query(`
          INSERT INTO public.site_content (page_name, content)
          VALUES ($1, $2)
          ON CONFLICT (page_name) DO UPDATE SET
            content = EXCLUDED.content
        `, [
          pageName,
          JSON.stringify(contentJson)
        ]);
        console.log(`Migrated site_content for ${course.slug}`);
      }
    }

    console.log("Migration complete!");
  } catch (err) {
    console.error("Migration error:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

run();
