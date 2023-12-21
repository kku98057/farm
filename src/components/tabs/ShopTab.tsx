import Notice from "../Notice";

import { buttonStyle, layerStyle, tabStyle } from "../../style";

import { FoodItemsType, MarketItemType } from "../../types";
import { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { tabDatasType, ShopCategories } from "../../types";
import TabTop from "../layout/TabTop";
import Tab from "./Tab";
import Popup from "../Popup";
import ClickButton from "../buttons/ClickButton";
import MyPointTab from "../MyPoint";

import useGetAxios from "../../hooks/useGetAxios";
import useUpdate from "../../hooks/useUpdate";
import Cookies from "js-cookie";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomCurrency,
  AtomMyFood,
  AtomMyFoodList,
  AtomShopTab,
} from "../../store";

import { ShopCategory } from "../../config/constant";
import BackButton from "../buttons/BackButton";
import ShopListTab from "../shop/ShopListTab";
import SubmitButton from "../buttons/SubmitButton";
import FeedInventory from "./feedInven/FeedInventory";
import ShopFeedInventory from "../shop/ShopFeedInventory";

export default function ShopTab({ tabDatas }: { tabDatas: tabDatasType }) {
  const [popup, setPopup] = useState(false);
  const TOKEN = Cookies.get("sleep_token");

  // 아이템 픽
  const { data: cateogryDatas, isLoading: loadingCategory } = useGetAxios({
    url: "/api/category",
  });

  const [tab, setTab] = useState("feed");

  return (
    <>
      <div className={tabStyle.tab_wrap} style={{ gap: 0 }}>
        <BackButton back={""} title="상점" />
        <ShopListTab setTab={setTab} tab={tab} />
        {tab === "feed" ? (
          <>
            <ul className={tabStyle.tab_inner} style={{ gap: 10 }}>
              <ShopFeedInventory />
            </ul>
          </>
        ) : (
          <div className={tabStyle.tab_inner} style={{ gap: 10 }}>
            <div className="ready">준비중입니다.</div>
          </div>
        )}
      </div>
    </>
  );
}
