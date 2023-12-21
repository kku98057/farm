import { buttonStyle, tabStyle } from "../../style";
import { cat, dog, horse } from "../../asset";
import { useEffect, useState } from "react";
import ClickButton from "../buttons/ClickButton";
import { ClickType, EmotionType } from "../../types";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../Loading";
import { useRecoilState } from "recoil";
import { AtomEmotionList } from "../../store";
import useUpdate from "../../hooks/useUpdate";

export default function CharactorInventory({
  tab,
}: {
  tab: { type: string; animal_id: number; emotion: string };
}) {
  const [equip, setEquip] = useState<EmotionType[]>([]);
  const [clicked, setClicked] = useState<null | number>(null);
  // 기린,사자,판다,양

  const [ivnentoryLength, setIvnentoryLength] = useState(0);
  const [emotionList, setEmotionList] = useRecoilState(AtomEmotionList);

  const { data: emotionItem, isLoading } = useGetAxios({
    url: "/api/inventory/animal-emotion",
    params: {
      animal_id: tab.animal_id,
      emotion_id: 0,
    },
  });

  useEffect(() => {
    if (emotionItem && !isLoading) {
      setIvnentoryLength(
        emotionItem.list.length % 2 === 1
          ? emotionItem.list.length + 1
          : emotionItem.list.length
      );

      setEmotionList([
        ...emotionItem.list,
        { emotion_id: 34, animal: "기린", emotion: "슬픔", is_equip: false },
        { emotion_id: 35, animal: "기린", emotion: "슬픔", is_equip: false },
        { emotion_id: 36, animal: "기린", emotion: "슬픔", is_equip: false },
        { emotion_id: 37, animal: "기린", emotion: "슬픔", is_equip: false },
      ]);
    }
  }, [emotionItem, isLoading]);
  useEffect(() => {
    if (emotionList) {
      setEquip(emotionList.filter((item) => item.is_equip === true));
    }
  }, [emotionList]);

  const filteredEmotion = (data: { type: string; animal_id: number }) => {
    if (data.type === "all") {
      return emotionList.map((list: EmotionType, idx: number) => (
        <List
          list={list}
          equip={equip}
          setEquip={setEquip}
          clicked={clicked}
          setClicked={setClicked}
        />
      ));
    } else {
      return emotionList
        .filter((item: EmotionType) => item.animal === data.type)
        .map((list: EmotionType, idx: number) => (
          <List
            list={list}
            setEquip={setEquip}
            equip={equip}
            clicked={clicked}
            setClicked={setClicked}
          />
        ));
    }
  };

  return (
    <div className={tabStyle.charactorInventory_wrap}>
      <div className={tabStyle.charactorInventory}>
        <div className={tabStyle.inventory_box}>
          {Array.from({ length: ivnentoryLength }, (_, idx) => (
            <div className={tabStyle.tab_box} key={`inven_${idx}`}></div>
          ))}
        </div>
        {!isLoading ? (
          <div className={tabStyle.inventory_items}>
            {emotionList.map((list: EmotionType, idx: number) => (
              <List
                list={list}
                equip={equip}
                setEquip={setEquip}
                clicked={clicked}
                setClicked={setClicked}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

const List = ({
  list,
  setEquip,
  equip,
  clicked,
  setClicked,
}: {
  list: EmotionType;
  setEquip: React.Dispatch<React.SetStateAction<EmotionType[]>>;
  equip: EmotionType[];
  clicked: number | null;
  setClicked: (state: number | null) => void;
}) => {
  // 클릭
  const { mutate } = useUpdate({ url: "/api/inventory/animal-emotion" });
  const clickHandler = (e: ClickType, id: number) => {
    e.stopPropagation();
    setClicked(id);
  };
  // 장착하기
  const equipHandler = (e: ClickType, list: EmotionType) => {
    //갯수체크

    e.stopPropagation();

    const result = equip.some((item: EmotionType) => {
      return item.emotion === list.emotion;
    });
    if (result) {
      return;
    }
    setEquip((prev) => [...prev, list]);
    mutate(
      {
        emotion_id: list.emotion_id,
      },
      {
        onError: (error) => {
          console.error(error);
        },
      }
    );

    setClicked(null);
  };
  const euipedHandler = () => {
    // 같은 종류의 아이템 장착x

    const result = equip.some((item: EmotionType) => {
      return item.emotion_id === list.emotion_id;
    });

    return !result ? (
      <ClickButton
        className={buttonStyle.equipBtn}
        text="장착하기"
        clickHandler={(e) => equipHandler(e, list)}
      />
    ) : (
      <ClickButton
        className={buttonStyle.equipBtn}
        text="해제하기"
        clickHandler={(e) => equipClearHandler(e, list)}
      />
    );
  };
  const equipClearHandler = (e: ClickType, list: EmotionType) => {
    e.stopPropagation();
    setEquip((prev: EmotionType[]) =>
      prev.filter((item) => item.emotion !== list.emotion)
    );
    setClicked(null);
  };
  const euipedStyle = () => {
    const result = equip.some((item: EmotionType) => {
      return item.emotion_id === list.emotion_id;
    });

    return equip.map(
      (item) =>
        item.emotion_id === list.emotion_id && (
          <div className={tabStyle.equip_active}>장착중</div>
        )
    );
  };
  return (
    <li
      className={`${tabStyle.tab_box} ${tabStyle.item_list} `}
      onClick={(e) => clickHandler(e, list.emotion_id)}
    >
      {euipedStyle()}
      <span>{list.emotion}</span>
      <span>{list.animal}</span>
      <div
        className={`${tabStyle.equip_tab} ${
          clicked === list.emotion_id ? `${tabStyle.active}` : ""
        }`}
      >
        {euipedHandler()}

        <ClickButton
          className={buttonStyle.equipCancelBtn}
          text="취소하기"
          clickHandler={(e) => equipClearHandler(e, list)}
        />
      </div>
    </li>
  );
};
