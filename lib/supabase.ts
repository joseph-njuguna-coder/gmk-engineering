import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL in environment.");
}
if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in environment.");
}

/**
 * Public client. Safe to use in Server Components for read-only queries
 * and in client bundles (anon key + RLS policy scope read access).
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

/**
 * Admin client. Uses the service role key and bypasses RLS.
 * MUST only ever be used on the server (Server Components, Server Actions).
 * Never import this into a client component.
 */

// Only throw an error if we are actively running a production server, 
// bypassing it during the static build phase on Cloudflare.
if (!supabaseServiceRoleKey && process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-server') {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in environment.");
}

export const supabaseAdmin = createClient(
  supabaseUrl, 
  supabaseServiceRoleKey || supabaseAnonKey, 
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);