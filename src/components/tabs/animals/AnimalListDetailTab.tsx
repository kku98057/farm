import Lottie from "lottie-react";
import { tabStyle } from "../../../style";
import { tabDatasType } from "../../../types";
import BackButton from "../../buttons/BackButton";

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

      <div className={tabStyle.tab_inner}>
        <CharactorInventory tab={tab} />
      </div>
    </div>
  );
}
