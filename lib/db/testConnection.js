// lib/db/testConnection.js

import { supabase } from '@/lib/db/supabase';

export async function testSupabaseConnection() {
  try {
    // Try to query the simulations table
    const { data, error } = await supabase
      .from('simulations')
      .select('count')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return false;
    }

    console.log('Supabase connected successfully');
    return true;
  } catch (error) {
    console.error('Failed to connect to Supabase:', error);
    return false;
  }
}
