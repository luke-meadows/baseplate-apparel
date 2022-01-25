const formatter = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
});

export default function formatMoney(pennys: number) {
  const pounds = pennys / 100;
  return formatter.format(pounds);
}
