import { tabStyle } from "../../../style";

export default function InventoryListTab({
  setTab,
  tab,
}: {
  setTab: (state: string) => void;
  tab: string;
}) {
  return (
    <ul className={tabStyle.animals_tab}>
      <li
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
      </li>
    </ul>
  );
}
