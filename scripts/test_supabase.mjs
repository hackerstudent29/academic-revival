import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ounikqjoupdiewkyjusw.supabase.co';
const supabaseKey = 'sb_publishable_o9wk5wyRrKYa0G7ASD3eCA_WViR6FNG';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("Fetching buckets...");
  const { data, error } = await supabase.storage.listBuckets();
  if (error) {
    console.error("Error fetching buckets:", error.message);
  } else {
    console.log("Buckets:", data.map(b => b.name));
  }
}

main();
