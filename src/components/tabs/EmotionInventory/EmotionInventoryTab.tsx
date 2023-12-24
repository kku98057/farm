import { tabStyle } from "../../../style";

import { useState } from "react";

import { tabDatasType } from "../../../types";
import TabTop from "../../layout/TabTop";
import useGetAxios from "../../../hooks/useGetAxios";

import SwiperTab from "./SwiperTab";
import CharactorInventory from "../../characterInventroy/CharactorInventory";
import Loading from "../../Loading";
import { EmotionFilter } from "./EmotionFilter";
import BackButton from "../../buttons/BackButton";

export default function EmotionInventoryTab({
  tabDatas,
}: {
  tabDatas: tabDatasType;
}) {
  const [tab, setTab] = useState({
    type: "all",
    animal_id: 0,
    emotion: "all",
  });

  const { data: animalCategory, isLoading } = useGetAxios({
    url: "/api/inventory/animal-category",
  });

  const { data: emotionItem, isLoading: itemLoading } = useGetAxios({
    url: "/api/inventory/animal-action",
    params: {
      animal_id: 0,
      emotion_id: 0,
    },
  });

  return (
    <>
      <div className={tabStyle.tab_wrap}>
        <BackButton back="" title="감정 보관함" />

        {!isLoading && !itemLoading ? (
          <>
            <SwiperTab
              setTab={setTab}
              tab={tab}
              emotionItem={emotionItem.list}
              animalCategory={animalCategory.list}
            />
            <EmotionFilter
              emotionItem={emotionItem.list}
              tab={tab}
              setTab={setTab}
            />
            <div className={tabStyle.tab_inner}>
              <CharactorInventory tab={tab} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
