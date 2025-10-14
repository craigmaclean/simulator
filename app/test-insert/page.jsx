// app/test-insert/page.jsx

'use client';

import { useState } from 'react';
import { saveSimulation } from '@/lib/db/saveSimulation';
import { calculateResults } from '@/lib/calc/calculateResults';
import { STRATEGIES_12 } from '@/data/strategies';

export default function TestInsertPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestInsert = async () => {
    setLoading(true);

    // Sample data
    const inputs = {
      revenue: 247000,
      grossMargin: 10,
      netMargin: 3,
      globalImpact: 1,
      currency: 'USD',
    };

    // Calculate Table One results
    const tableOneResults = calculateResults({
      revenue: inputs.revenue,
      grossMargin: inputs.grossMargin,
      netMargin: inputs.netMargin,
      strategies: STRATEGIES_12.map(s => ({ ...s, impact: inputs.globalImpact })),
    });

    // Save to database
    const saveResult = await saveSimulation({
      userData: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
      inputs,
      tableOneResults,
      deepDiveResults: null,
      tableOneStrategies: STRATEGIES_12.map(s => ({
        id: s.id,
        name: s.name,
        impact: inputs.globalImpact,
      })),
      deepDiveStrategies: null,
      metadata: {
        ipAddress: '192.168.1.1',
        userAgent: navigator.userAgent,
      },
    });

    setResult(saveResult);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Database Insert</h1>

      <button
        onClick={handleTestInsert}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Saving...' : 'Test Insert Simulation'}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">Result:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
