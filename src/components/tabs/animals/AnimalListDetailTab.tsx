import Lottie from "lottie-react";
import { tabStyle } from "../../../style";
import { tabDatasType } from "../../../types";
import BackButton from "../../buttons/BackButton";
import { sheep } from "../../../asset";
import CharactorInventory from "../../characterInventroy/CharactorInventory";
import { useEffect, useState } from "react";

export default function AnimalListDetailTab({
  tabDatas,
  currentAniamlTabId,
}: {
  tabDatas: tabDatasType;
  currentAniamlTabId: number | null;
}) {
  const [tab, setTab] = useState({
    type: "all",
    animal_id: 0,
    emotion: "all",
  });
  useEffect(() => {
    if (currentAniamlTabId) {
      setTab((prev) => ({ ...prev, animal_id: currentAniamlTabId }));
    }
  }, [currentAniamlTabId]);
  return (
    <div className={tabStyle.tab_wrap}>
      <BackButton back={"animals"} title="동물 상세정보" />
      {/* <div className={tabStyle.animal_detail}>
        <div className={tabStyle.animal_detail_img}>
          <Lottie animationData={sheep}></Lottie>
        </div>
        <div className={tabStyle.animal_detail_data}>
          <h3>이름</h3>
          <span>어쩌고 저쩌고</span>
        </div>
      </div> */}
      <div className={tabStyle.tab_inner}>
        <CharactorInventory tab={tab} />
      </div>
    </div>
  );
}
