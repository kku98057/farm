import { buttonStyle, tabStyle } from "../../style";
import { cat, dog, horse } from "../../asset";
import { useEffect, useState } from "react";
import ClickButton from "../buttons/ClickButton";
import { ClickType, ActionType } from "../../types";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../Loading";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AtomEmotionList, AtomLevelPopup, AtomLoading } from "../../store";
import useUpdate from "../../hooks/useUpdate";
import { useQueryClient } from "@tanstack/react-query";

export default function EmotionCharactorInventory({
  tab,
}: {
  tab: { type: string; animal_id: number; emotion: string };
}) {
  const [equip, setEquip] = useState<ActionType[]>([]);
  const [clicked, setClicked] = useState<null | number>(null);
  // 기린,사자,판다,양

  const [ivnentoryLength, setIvnentoryLength] = useState(0);
  const [emotionList, setEmotionList] = useRecoilState(AtomEmotionList);

  const { data: ActionItem, isLoading } = useGetAxios({
    url: "/api/inventory/animal-action",
    params: {
      animal_id: tab.animal_id,
      action_id: 0,
    },
  });
  const { data } = useGetAxios({ url: "/api/inventory/action-category" });
  console.log(ActionItem, data);
  useEffect(() => {
    if (ActionItem && !isLoading) {
      setIvnentoryLength(
        ActionItem.list.length % 2 === 1
          ? ActionItem.list.length + 1
          : ActionItem.list.length
      );

      setEmotionList([...ActionItem.list]);
    }
  }, [ActionItem, isLoading]);

  const filteredEmotion = (data: { type: string; animal_id: number }) => {
    if (data.type === "all") {
      return emotionList.map((list: ActionType, idx: number) => (
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
        .filter((item: ActionType) => item.animal === data.type)
        .map((list: ActionType, idx: number) => (
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
  console.log(emotionList);

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
            {emotionList.map((list: ActionType, idx: number) => (
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
  list: ActionType;
  setEquip: React.Dispatch<React.SetStateAction<ActionType[]>>;
  equip: ActionType[];
  clicked: number | null;
  setClicked: (state: number | null) => void;
}) => {
  const setGlobalLoading = useSetRecoilState(AtomLoading);
  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const queryClient = useQueryClient();
  const { mutate } = useUpdate({ url: "/api/inventory/animal-action" });
  const clickHandler = (e: ClickType, id: number) => {
    e.stopPropagation();
    setClicked(id);
  };

  // 장착하기
  const equipHandler = (e: ClickType, list: ActionType) => {
    //갯수체크

    e.stopPropagation();
    // setGlobalLoading(true);
    console.log(list);
    setEquip((prev) => [...prev, list]);
    mutate(
      {
        action_id: list.action_id,
        category_id: list.category_id,
      },
      {
        onSuccess: (res: any) => {
          console.log(res);
          setGlobalLoading(false);
          setPopup({ text: res.data.message, popup: true });
        },
        onError: (error) => {
          console.error(error);
          setGlobalLoading(false);
        },
        onSettled: () => {
          setGlobalLoading(false);
          queryClient.invalidateQueries({ queryKey: ["/api/main"] });
          queryClient.invalidateQueries({
            queryKey: ["/api/inventory/animal-action"],
          });
        },
      }
    );

    setClicked(null);
  };
  const euipedHandler = () => {
    // 같은 종류의 아이템 장착x

    return !list.is_equip ? (
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
  const equipClearHandler = (e: ClickType, list: ActionType) => {
    e.stopPropagation();
    setEquip((prev: ActionType[]) =>
      prev.filter((item) => item.action !== list.action)
    );
    setClicked(null);
  };
  const euipedStyle = () => {
    return list.is_equip && <div className={tabStyle.equip_active}></div>;
  };
  const lockedStyle = () => {
    return list.is_lock && <div className={tabStyle.lock_active}>잠금</div>;
  };
  return (
    <li
      className={`${tabStyle.tab_box} ${tabStyle.item_list} `}
      onClick={(e) => {
        if (!list.is_lock) {
          clickHandler(e, list.action_id);
        }
      }}
    >
      {euipedStyle()} {lockedStyle()}
      <span>{list.action}</span>
      <span>{list.animal}</span>
      <div
        className={`${tabStyle.equip_tab} ${
          clicked === list.action_id ? `${tabStyle.active}` : ""
        }`}
      >
        <ClickButton
          className={buttonStyle.equipBtn}
          text={list.is_equip ? "장착해제" : "장착하기"}
          clickHandler={(e) => equipHandler(e, list)}
        />

        <ClickButton
          className={buttonStyle.equipCancelBtn}
          text="취소하기"
          clickHandler={(e) => equipClearHandler(e, list)}
        />
      </div>
    </li>
  );
};
