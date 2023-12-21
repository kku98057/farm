export default function UpdateNextLevelExp(level: number, prevExp: number) {
  return Math.ceil(level % 5 === 0 ? prevExp * 3 : prevExp * 1.15);
}
