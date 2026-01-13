import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const isValidUrl = (url: string | undefined) => {
  if (!url) return false
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

// Check if configuration is valid
const isConfigured = isValidUrl(supabaseUrl) && supabaseAnonKey

if (!isConfigured) {
  console.warn(
    'Supabase is not configured properly. Using mock client.\n' +
    'Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
  )
}

type SupabaseLike = {
  from: (_table: string) => {
    select: () => Promise<{ data: unknown; error: { message: string } | null }>;
    insert: (_rows?: unknown) => Promise<{ data: unknown; error: { message: string } | null }>;
  };
  auth: {
    getSession: () => Promise<{ data: { session: unknown }; error: null }>;
    onAuthStateChange: () => { data: { subscription: { unsubscribe: () => void } } };
  };
};

const mockSupabase: SupabaseLike = {
  from: (_table: string) => ({
    select: () => Promise.resolve({ data: [], error: { message: 'Supabase not configured' } }),
    insert: (_rows?: unknown) => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
  }),
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
};

export const supabase = isConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : mockSupabase
