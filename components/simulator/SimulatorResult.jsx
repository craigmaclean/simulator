/**
 * SimulatorResult - Server Component
 *
 * Individual simulator result card for JS12 and DD40 results. Props received from SimulatorResults.
 */

export default function SimulatorResult({ label, value, isDeepDiveResult }) {
  return (
    <>
    {isDeepDiveResult ? (
      <div className="bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
        <h3 className="text-[1rem] font-semibold text-white mb-2 tracking-tight">
          {label}
        </h3>
        <p className="text-[2rem] font-semibold text-white tracking-wide">
          {value}
        </p>
      </div>
    ) : (
      <div className="bg-light-gray rounded-lg p-6 text-center transform transition duration-300 hover:scale-105">
        <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">
          {label}
        </h3>
        <p className="text-[2rem] font-semibold text-gray-900 tracking-wide">
          {value}
        </p>
      </div>
    )}
    </>
  );
}
