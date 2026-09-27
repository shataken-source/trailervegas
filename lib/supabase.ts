import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function usersDb(): SupabaseClient | null {
  const url = process.env.SUPABASE_USERS_URL;
  const key = process.env.SUPABASE_USERS_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
