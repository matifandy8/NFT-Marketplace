import { createClient } from '@supabase/supabase-js';

const supabaseUrl:any = "https://nvysduuiawpysuhaancj.supabase.co";
const supabaseKey:any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjg4MTY4NCwiZXhwIjoxOTQ4NDU3Njg0fQ.3n5J27mg4bh2LdrARZXcW3yF27DJ1_P3eCfwFBZMcS8";

export const supabase = createClient(supabaseUrl, supabaseKey);



