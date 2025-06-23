// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://lcymnrtijbpuymftcwaz.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeW1ucnRpamJwdXltZnRjd2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MDAxNzQsImV4cCI6MjA2NjI3NjE3NH0.x2A5U5NuA4JXLGE4TjETC6VVh7xSDrxO6UWcoPk8_ms';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
