import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
const supabaseUrl = 'https://fepszpuddspszxsavzac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlcHN6cHVkZHNwc3p4c2F2emFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NzMxNDMsImV4cCI6MjA1NjU0OTE0M30.DKwUNaMa85u5WN0kO1BBFdF6aHJfSFht7sxduKb3CsQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 