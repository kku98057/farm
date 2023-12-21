import { tabStyle } from "../../style";

export default function ShopListTab({
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
        <span>먹이사기</span>
      </li>
      <li
        onClick={() => setTab("gacha")}
        className={tab === "gacha" ? `${tabStyle.active}` : ""}
      >
        <span>동물뽑기</span>
      </li>
    </ul>
  );
}
