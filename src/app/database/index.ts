import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://bvggfsfhutjrebefuxhh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Z2dmc2ZodXRqcmViZWZ1eGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3MTM3NTUsImV4cCI6MjA0OTI4OTc1NX0.9HZWlRe53I9VGQPUzP06g1dtZnAclEP5syBxptwErCc");

export { supabase };