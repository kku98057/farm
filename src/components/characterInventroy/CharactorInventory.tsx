import { buttonStyle, tabStyle } from "../../style";

import { useEffect, useState } from "react";
import ClickButton from "../buttons/ClickButton";
import { ClickType, ActionType, MyAnimalType } from "../../types";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../Loading";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomEmotionList,
  AtomLevelPopup,
  AtomLoading,
  AtomMyCharacter,
} from "../../store";
import useUpdate from "../../hooks/useUpdate";
import { useQueryClient } from "@tanstack/react-query";
import { AnimalListStatus, AnimalSkinModel } from "../../config/constant";
import Lottie from "lottie-react";
import { AnyCnameRecord } from "dns";
import { lock } from "../../asset";

export default function EmotionCharactorInventory({
  tab,
}: {
  tab: { type: string; animal_id: number; emotion: string };
}) {
  const [equip, setEquip] = useState<ActionType[]>([]);
  const [clicked, setClicked] = useState<null | number>(null);

  const [ivnentoryLength, setIvnentoryLength] = useState(0);
  const [emotionList, setEmotionList] = useRecoilState(AtomEmotionList);

  const { data: ActionItem, isLoading } = useGetAxios({
    url: "/api/game/inventory/animal-action",
    params: {
      animal_id: tab.animal_id,
      action_id: 0,
    },
  });

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
                key={`${list.name}_${idx}`}
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
  const { mutate } = useUpdate({ url: "/api/game/inventory/animal-action" });
  const clickHandler = (e: ClickType, id: number) => {
    e.stopPropagation();
    setClicked(id);
  };

  // 장착하기
  const equipHandler = (e: ClickType, list: ActionType) => {
    e.stopPropagation();

    setEquip((prev) => [...prev, list]);
    mutate(
      {
        action_id: list.action_id,
        category_id: list.category_id,
      },
      {
        onSuccess: (res: any) => {
          setGlobalLoading(false);
          setPopup({ text: res.data.message, popup: true });
        },
        onError: (error) => {
          setGlobalLoading(false);
        },
        onSettled: () => {
          setGlobalLoading(false);
          queryClient.invalidateQueries({ queryKey: ["/api/game/main"] });
          queryClient.invalidateQueries({
            queryKey: ["/api/game/inventory/animal-action"],
          });
        },
      }
    );

    setClicked(null);
  };
  // 장착해제
  const equipClearHandler = (e: ClickType, list: ActionType) => {
    e.stopPropagation();
    setEquip((prev: ActionType[]) =>
      prev.filter((item) => item.action !== list.action)
    );
    setClicked(null);
  };
  // 장착시 스타일
  const euipedStyle = () => {
    return list.is_equip && <div className={tabStyle.equip_active}></div>;
  };
  //잠금시 스타일
  const lockedStyle = () => {
    return (
      list.is_lock && (
        <div className={tabStyle.lock_active}>
          <img src={lock} alt="잠금" />
        </div>
      )
    );
  };

  function getImageSrc(list: any): string {
    const { animal, skin_code, action } = list;

    return AnimalSkinModel[animal]?.[action]?.[skin_code.toString()].toString();
  }

  return (
    <li
      className={`${tabStyle.tab_box} ${tabStyle.item_list} `}
      onClick={(e) => {
        if (!list.is_lock) {
          clickHandler(e, list.action_id);
        }
      }}
    >
      <img src={getImageSrc(list)} alt="" />
      {euipedStyle()} {lockedStyle()}
      <span>{list.action}</span>
      <span>{list.name}</span>
      <div
        className={`${tabStyle.equip_tab} ${
          clicked === list.action_id ? `${tabStyle.active}` : ""
        }`}
      >
        {/* 기본스킨 장착해제 불가능 */}
        {list.name !== "기본" && (
          <ClickButton
            className={buttonStyle.equipBtn}
            text={list.is_equip ? "장착해제" : "장착하기"}
            clickHandler={(e) => equipHandler(e, list)}
          />
        )}

        <ClickButton
          className={buttonStyle.equipCancelBtn}
          text="취소하기"
          clickHandler={(e) => equipClearHandler(e, list)}
        />
      </div>
    </li>
  );
};
