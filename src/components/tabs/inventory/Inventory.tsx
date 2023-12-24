import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tabStyle } from "../../../style";
import {
  AtomMyCharacter,
  AtomFooterTab,
  AtomAnimalsList,
  AtomHeaderTab,
} from "../../../store";
import { useEffect, useState } from "react";

import { tabDatasType, SubmitType, AnimalsType } from "../../../types";
import Notice from "../../Notice";
import TabTop from "../../layout/TabTop";
import useGetAxios from "../../../hooks/useGetAxios";

import SubmitButton from "../../buttons/SubmitButton";
import Loading from "../../Loading";
import useUpdate from "../../../hooks/useUpdate";
import Cookies from "js-cookie";
import AnimalsList from "../animals/AnimalsList";
import BackButton from "../../buttons/BackButton";
import InventoryTab from "../animals/InventoryListTab";
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
