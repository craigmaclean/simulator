export function formatCurrency(value, currency = 'USD') {
  const symbols = {
    USD: '$',
    CAD: 'CA$',
    EUR: '€',
    GBP: '£'
  };

  const symbol = symbols[currency] || '$';
  return `${symbol}${Math.round(value).toLocaleString()}`;
}
