import { tabStyle } from "../../../style";

import { useState } from "react";

import { tabDatasType } from "../../../types";

import BackButton from "../../buttons/BackButton";

import FeedInventory from "./feedInven/FeedInventory";
import InventoryListTab from "../animals/InventoryListTab";
import AnimalInventory from "./animalInven/AnimalInventory";

export default function Inventory({ tabDatas }: { tabDatas: tabDatasType }) {
  const [tab, setTab] = useState("animals");

  return (
    <form className={tabStyle.tab_wrap} style={{ gap: 0 }}>
      <BackButton back="" title="보관함" />
      <InventoryListTab setTab={setTab} tab={tab} />
      {tab === "animals" ? (
        <AnimalInventory />
      ) : (
        <div className={tabStyle.tab_inner} style={{ gap: 10 }}>
          <FeedInventory />
        </div>
      )}
    </form>
  );
}
