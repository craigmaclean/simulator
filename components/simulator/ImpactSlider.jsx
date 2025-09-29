import React from "react";

export default function ImpactSlider({
  value = 0,
  onChange,
  label = "Set % Impact Across All Areas",
  id = "impactSlider",
}) {
  // clamp + coerce
  const v = Math.min(10, Math.max(0, Number(value) || 0));
  const percent = (v / 10) * 100;

  const handle = (e) => {
    const n = parseFloat(e.target.value);
    onChange(Number.isFinite(n) ? n : 0);
  };

  return (
    <div className="py-6">
      <h3 id={`${id}-label`} className="text-lg font-semibold text-navy text-center mb-4">
        {label}
      </h3>

      <div className="flex items-center gap-4 justify-center">
        <div className="flex-1 max-w-[70%]">
          <input
            id={id}
            type="range"
            className="impact-slider w-full"
            min={0}
            max={10}
            step={0.1}
            value={v}
            onChange={handle}
            // drives your gradient fill
            style={{ "--value": `${percent}%` }}
            aria-labelledby={`${id}-label`}
            aria-valuemin={0}
            aria-valuemax={10}
            aria-valuenow={v}
          />
        </div>

        <span className="text-2xl font-semibold text-navy min-w-[60px]">
          {v.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
