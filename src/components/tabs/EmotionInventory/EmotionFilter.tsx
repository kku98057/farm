import { useSetRecoilState } from "recoil";
import { EmotionAnimalType, EmotionTabType, EmotionType } from "../../../types";
import useGetAxios from "../../../hooks/useGetAxios";
import { AtomEmotionList } from "../../../store";
import { tabStyle } from "../../../style";

export function EmotionFilter({
  emotionItem,
  tab,
  setTab,
}: {
  emotionItem: EmotionType[];
  tab: { animal_id: number; type: string; emotion: string };
  setTab: React.Dispatch<React.SetStateAction<EmotionTabType>>;
}) {
  const { data: emotionCategory, isLoading } = useGetAxios({
    url: "/api/inventory/emotion-category",
  });

  const setEmotionList = useSetRecoilState(AtomEmotionList);

  const selelctHandler = (e: any) => {
    const { value } = e.target;
    setTab((prev) => ({ ...prev, emotion: value }));
    if (tab.type === "all") {
      setEmotionList(() =>
        emotionItem.filter((item) => {
          if (value === "all") {
            return item;
          }
          return item.emotion === value && tab.type === "all";
        })
      );
    } else {
      setEmotionList(() =>
        emotionItem.filter((item) => {
          if (value === "all") {
            return tab.type === item.animal;
          }
          return item.emotion === value && tab.type === item.animal;
        })
      );
    }
  };
  if (isLoading) {
    return <span></span>;
  }

  return (
    <select
      onChange={selelctHandler}
      value={tab.emotion}
      className={tabStyle.emotionSelector}
    >
      <option value={"all"}>전체</option>
      {emotionCategory.list.map((item: EmotionAnimalType) => (
        <option key={`${item.name}_${item.id}_emotion`} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
