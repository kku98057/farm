import { tabStyle } from "../../../style";

import { tabDatasType } from "../../../types";

import FeedInventory from "./FeedInventory";
import BackButton from "../../buttons/BackButton";

export default function FeedInventoryTab({
  tabDatas,
}: {
  tabDatas: tabDatasType;
}) {
  // 아이템 픽

  return (
    <>
      <div className={tabStyle.tab_wrap}>
        <BackButton back="" title="먹이 보관함" />

        <div className={tabStyle.tab_inner}>
          <FeedInventory />
        </div>
      </div>
    </>
  );
}
