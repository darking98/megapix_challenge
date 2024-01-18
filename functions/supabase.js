import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true
    }
  }
)

export async function signInWithEmail(email) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo:
        process.env.NEXT_PUBLIC_ENV === 'local'
          ? 'http://localhost:3000/dashboard'
          : process.env.NEXT_PUBLIC_ENV === 'production' &&
            'https://megapix-challenge.vercel.app/dashboard'
    }
  })

  return { data, error }
}
