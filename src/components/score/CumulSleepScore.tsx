import { scoreStyle } from "../../style";

export default function CumulSleepScore({
  title,
  color,
  everyExp,
}: {
  title: string;
  color: string;
  everyExp: number;
}) {
  return (
    <div className={scoreStyle.sleep_score}>
      <span>{title}</span>
      <span>{everyExp}</span>
    </div>
  );
}
