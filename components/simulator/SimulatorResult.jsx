"use client";

export default function SimulatorResult({ label, value }) {
  return (
    <div className="bg-light-gray rounded-lg p-6 text-center">
      <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">
        {label}
      </h3>
      <p className="text-[2rem] font-semibold text-navy tracking-wide">
        {value}
      </p>
    </div>
  );
}
