import { tabStyle } from "../../style";

import { useState } from "react";

import { tabDatasType } from "../../types";

import BackButton from "../buttons/BackButton";
import ShopListTab from "../shop/ShopListTab";

import ShopFeedInventory from "../shop/ShopFeedInventory";

export default function ShopTab({ tabDatas }: { tabDatas: tabDatasType }) {
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
