import { createClient } from '@supabase/supabase-js'



if (!SUPABASE_URL) {
  throw new Error("Missing env.SUPABASE_URL");
}

if (!SUPABASE_KEY) {
  throw new Error("Missing env.SUPABASE_KEY");
}
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

