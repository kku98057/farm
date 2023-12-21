export default function UpdateNextCurrency(
  level: number,
  prevCurrency: number
) {
  //   return prevCurrency + Math.ceil(level % 10 === 1 ? 500 : 100);
  return prevCurrency + 100;
}
