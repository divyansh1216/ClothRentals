import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://krzrjlmnrivyvoakylhb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyenJqbG1ucml2eXZvYWt5bGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NTA4ODksImV4cCI6MjA2NDMyNjg4OX0.0O6_qWvbHmlS_yLJ6bYMiBIQuSyWDWMivHJ4I_3MAFA";

export const supabase = createClient(supabaseUrl, supabaseKey);
