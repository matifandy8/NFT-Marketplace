import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://nvysduuiawpysuhaancj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjg4MTY4NCwiZXhwIjoxOTQ4NDU3Njg0fQ.3n5J27mg4bh2LdrARZXcW3yF27DJ1_P3eCfwFBZMcS8";

if (!SUPABASE_URL) {
  throw new Error("Missing env.SUPABASE_URL");
}

if (!SUPABASE_KEY) {
  throw new Error("Missing env.SUPABASE_KEY");
}
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

