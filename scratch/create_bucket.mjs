import pg from 'pg';

const connectionString = 'postgresql://postgres.ounikqjoupdiewkyjusw:RAMAZENDRUM2007@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres';

const pool = new pg.Pool({ connectionString });

async function createBucket() {
  const client = await pool.connect();
  try {
    console.log("Connected to DB, creating 'uploads' bucket...");
    await client.query(`
      INSERT INTO storage.buckets (id, name, public) 
      VALUES ('uploads', 'uploads', true)
      ON CONFLICT (id) DO NOTHING;
    `);
    
    // Also create a policy to allow public reads and anon uploads
    await client.query(`
      -- Allow public read access
      CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'uploads');
      -- Allow anon uploads (be careful in production, but needed for anon key upload)
      CREATE POLICY "Anon Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'uploads');
    `).catch(err => {
        console.log("Policies might already exist or had an issue:", err.message);
    });

    console.log("Bucket 'uploads' is ready!");
  } catch (err) {
    console.error("Error creating bucket:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

createBucket();
