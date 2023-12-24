import { scoreStyle } from "../../style";

export default function SleepScore({
  currentExp,
  maxExp,
  animal,
}: {
  animal: string;
  currentExp: number;
  maxExp: number;
}) {
  const currentExpHandler = () => {
    // 경험치 초과시 100%로 세팅
    if ((currentExp / maxExp) * 100 > 100) {
      return 100;
    }
    if ((currentExp / maxExp) * 100 > 100) {
      return 100;
    }

    return (currentExp / maxExp) * 100 || 0;
  };
  return (
    <div className={scoreStyle.sleep_score}>
      <div className={scoreStyle.sleep_exp}>
        <span>{animal}</span>
        <span> {`${currentExpHandler().toFixed()}%`}</span>
      </div>
      <ul className={scoreStyle.score_ul}>
        <li className={scoreStyle.sleep_score_bar}>
          <div
            className={`${scoreStyle.sleep_score_innerbar}`}
            style={{
              width: `${currentExpHandler().toFixed(0)}%`,
            }}
          ></div>
        </li>
      </ul>
    </div>
  );
}
