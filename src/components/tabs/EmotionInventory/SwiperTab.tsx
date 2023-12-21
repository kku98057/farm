import { Swiper, SwiperSlide } from "swiper/react";
import { tabStyle } from "../../../style";
import "swiper/css";

import { EmotionAnimalType, EmotionTabType, EmotionType } from "../../../types";
import { AtomEmotionList } from "../../../store";
import { useSetRecoilState } from "recoil";

export default function SwiperTab({
  setTab,
  tab,
  animalCategory,
  emotionItem,
}: {
  emotionItem: EmotionType[];
  animalCategory: EmotionAnimalType[];
  setTab: React.Dispatch<React.SetStateAction<EmotionTabType>>;
  tab: EmotionTabType;
}) {
  const setEmotionList = useSetRecoilState(AtomEmotionList);

  const FilterNameHandler = (type: string) => {
    setEmotionList((prev) => {
      if (type === "all") {
        return emotionItem;
      }
      return emotionItem.filter((data: EmotionType) => data.animal === type);
    });
  };

  return (
    <div className={tabStyle.swiperTab}>
      <Swiper slidesPerView={"auto"} spaceBetween={40}>
        <SwiperSlide className="slide-item">
          <div
            className={`${tabStyle.swiper_inner} ${
              "all" === tab.type ? `${tabStyle.active}` : ""
            } `}
            onClick={() => {
              setTab((prev) => ({
                emotion: "all",
                type: "all",
                animal_id: 0,
              }));
              FilterNameHandler("all");
            }}
          >
            <span>전체</span>
          </div>
        </SwiperSlide>
        {animalCategory.map((item, index) => {
          return (
            <SwiperSlide
              className="slide-item"
              key={`swiper_${index}_${item.name}`}
            >
              <div
                className={`${tabStyle.swiper_inner} ${
                  item.name === tab.type ? `${tabStyle.active}` : ""
                } `}
                onClick={() => {
                  setTab((prev) => ({
                    emotion: "all",
                    type: item.name,
                    animal_id: item.id,
                  }));
                  FilterNameHandler(item.name);
                }}
              >
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
