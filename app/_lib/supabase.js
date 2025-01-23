import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
 process.env.SUPABASE_URL,
 process.env.SUPABASE_KEY
);
// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Check the database connection when the app starts
