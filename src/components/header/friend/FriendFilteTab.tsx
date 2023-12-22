import { tabStyle } from "../../../style";

export default function FriendFilteTab({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (state: string) => void;
}) {
  const tabList = ["친구목록", "친구등록"];
  return (
    <ul className={tabStyle.animals_tab}>
      {tabList.map((data) => (
        <li
          key={data}
          onClick={() => setTab(data)}
          className={tab === data ? `${tabStyle.active}` : ""}
        >
          <span>{data}</span>
        </li>
      ))}
      {/* <li
    onClick={() => setTab("feed")}
    className={tab === "feed" ? `${tabStyle.active}` : ""}
  >
    <span>먹이 보관함</span>
  </li>
  <li
    onClick={() => setTab("animals")}
    className={tab === "animals" ? `${tabStyle.active}` : ""}
  >
    <span>동물 보관함</span>
  </li> */}
    </ul>
  );
}
