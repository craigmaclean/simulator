export function calculateResults(formData) {
  const { revenue, netMargin, strategies } = formData;

  const currentProfit = revenue * (netMargin / 100);

  let revenueMultiplier = 1;
  let totalProfitIncrease = 0;

  const strategyResults = strategies.map(strategy => {
    const strategyProfitIncrease = currentProfit * (strategy.impact / 100) * strategy.profitMultiplier;

    if (strategy.revenueMultiplier > 0) {
      revenueMultiplier *= (1 + (strategy.impact / 100) * strategy.revenueMultiplier);
    }
    totalProfitIncrease += strategyProfitIncrease;

    return {
      id: strategy.id,
      profitIncrease: strategyProfitIncrease
    };
  });

  const newRevenue = revenue * revenueMultiplier;
  const revenueIncreaseAmount = newRevenue - revenue;
  const profitFromNewRevenue = revenueIncreaseAmount * (netMargin / 100);
  const newProfit = currentProfit + totalProfitIncrease + profitFromNewRevenue;

  return {
    currentRevenue: revenue,
    currentProfit: currentProfit,
    revenueIncrease: revenueIncreaseAmount,
    expectedRevenue: newRevenue,
    profitIncrease: newProfit - currentProfit,
    fiveYearImpact: (newProfit - currentProfit) * 5,
    strategyResults: strategyResults
  };
}
