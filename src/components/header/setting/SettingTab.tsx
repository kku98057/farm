import { tabStyle } from "../../../style";

export default function SettingTab({
  HeaderTabDatas,
}: {
  HeaderTabDatas: { [key: string]: string };
}) {
  return (
    <div className={tabStyle.tab_wrap} style={{ gap: 30 }}>
      <div className={tabStyle.tab_top}>
        <h4>세팅</h4>
      </div>
      <div
        className={`${tabStyle.tab_inner} ${tabStyle.friend_tab_inner}`}
      ></div>
    </div>
  );
}
