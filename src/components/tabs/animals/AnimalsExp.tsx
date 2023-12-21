import { tabStyle } from "../../../style";

export default function AnimalsExp() {
  return (
    <div className={tabStyle.animals_tab_exp}>
      <div className={tabStyle.animals_tab_bar}>
        <div></div>
      </div>
      <div className={tabStyle.animals_tab_msg}>
        <span>0% complete</span>
      </div>
    </div>
  );
}
