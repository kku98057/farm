import { scoreStyle } from "../../style";

export default function AccSleepScore() {
  return (
    <div className={scoreStyle.sleep_score}>
      <span>누적 수면 점수</span>
      <div className={scoreStyle.sleep_score_bar}>
        <div className={scoreStyle.sleep_score_innerbar}></div>
      </div>
    </div>
  );
}
