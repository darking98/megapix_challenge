import { supabase } from '@/functions/supabase';

export default async function getSession(req, res) {
  //const session = await supabase.auth.getSession();
  //console.log(session)
  return res.status(200).json({ session: 'asd' });
}
