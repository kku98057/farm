import { scoreStyle, tabStyle } from "../../../style";

export default function AnimalsExp({ percent_exp }: { percent_exp: number }) {
  return (
    <div className={tabStyle.animals_tab_exp}>
      <div className={tabStyle.animals_tab_msg}>
        <span>{percent_exp}% </span>
      </div>
      <div className={tabStyle.animals_tab_bar}>
        <div
          className={scoreStyle.sleep_score_innerbar}
          style={{ width: `${percent_exp}%` }}
        ></div>
      </div>
    </div>
  );
}
