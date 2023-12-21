import Notice from "../Notice";
import { watermelon, salad, medal } from "../../asset";
import { buttonStyle, layerStyle, tabStyle } from "../../style";
import { ItemType } from "../../types";
import { useState } from "react";

import { tabDatasType } from "../../types";
import TabTop from "../layout/TabTop";
import Tab from "./Tab";
import Popup from "../Popup";
import ClickButton from "../buttons/ClickButton";

export default function MissionTab({ tabDatas }: { tabDatas: tabDatasType }) {
  const [popup, setPopup] = useState(false);

  const notice_list = [
    "쿠폰은 발급 후 7일 이내 사용할 수 있습니다.",
    "계절 상품은 조기 종료 될 수 있습니다.",
  ];

  // 아이템 픽

  return (
    <>
      <div className={tabStyle.tab_wrap}></div>
    </>
  );
}
