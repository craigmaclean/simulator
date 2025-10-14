// app/test-supabase/page.jsx

'use client';

import { useEffect, useState } from 'react';
import { testSupabaseConnection } from '@/lib/db/testConnection';

export default function TestSupabasePage() {
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    testSupabaseConnection().then(setConnected);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      {connected === null && <p>Testing connection...</p>}
      {connected === true && <p className="text-green-600">✅ Connected!</p>}
      {connected === false && <p className="text-red-600">❌ Connection failed</p>}
    </div>
  );
}
