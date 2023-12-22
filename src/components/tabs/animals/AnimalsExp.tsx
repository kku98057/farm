import { scoreStyle, tabStyle } from "../../../style";

export default function AnimalsExp() {
  return (
    <div className={tabStyle.animals_tab_exp}>
      <div className={tabStyle.animals_tab_msg}>
        <span>0% </span>
      </div>
      <div className={tabStyle.animals_tab_bar}>
        <div className={scoreStyle.sleep_score_innerbar}></div>
      </div>
    </div>
  );
}
