import { useEffect, useState } from "react";
import { buttonStyle, layerStyle, tabStyle } from "../../../../style";
import { feed, rare_feed, ticket } from "../../../../asset";

import { useRecoilState, useSetRecoilState } from "recoil";
import { AtomFeed, AtomLevelPopup, AtomLoading } from "../../../../store";

import useGetAxios from "../../../../hooks/useGetAxios";
import useUpdate from "../../../../hooks/useUpdate";
import Popup from "../../../Popup";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FeedType, MarketItemType } from "../../../../types";
import ClickButton from "../../../buttons/ClickButton";
import { useQueryClient } from "@tanstack/react-query";

export default function FeedInventory() {
  const queryClient = useQueryClient();
  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);
  const setPopup2 = useSetRecoilState(AtomLevelPopup);
  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);
  const [popup, setPopup] = useState<boolean>(false);

  const [pickItem, setPickItem] = useState<FeedType>({
    exp: 0,
    grade: 0,
    name: "",
    quantity: 0,
    item_id: 0,
  });

  const { mutate } = useUpdate({ url: "/api/game/inventory/feed-item" });

  const buyTicketHandler = (list: FeedType) => {
    setPopup(true);
    setPickItem(list);
  };
  const cancleHandler = () => {
    setPopup(false);
    setPickItem({ exp: 0, grade: 0, name: "", quantity: 0, item_id: 0 });
  };

  const buyHandler = () => {
    if (pickItem.quantity <= 0) {
      alert("교환권이 부족합니다.");
    } else {
      setGlobalLoading(true);
      mutate(
        {
          item_id: pickItem.item_id,
        },

        {
          onError: (error) => {
            setGlobalLoading(false);
          },
          onSuccess: () => {
            setGlobalLoading(false);
            setPopup2({ text: "교환하였습니다.", popup: true });
          },
          onSettled: () => {
            queryClient.invalidateQueries({
              queryKey: ["/api/game/inventory/feed"],
            });
            queryClient.invalidateQueries({
              queryKey: ["/api/game/main"],
            });
          },
        }
      );
    }
  };
  return (
    <>
      {myFeed.map((list) => (
        <li
          className={tabStyle.feed_list}
          key={`${list.name}_feedInventory`}
          onClick={() => list.name === "교환권" && buyTicketHandler(list)}
        >
          <div className={tabStyle.feed_data}>
            <div className={tabStyle.feed_tab_img}>
              <img
                src={
                  list.name === "일반먹이"
                    ? feed
                    : list.name === "고급먹이"
                    ? rare_feed
                    : ticket
                }
                alt={`${list.name}_inventor`}
              />
            </div>
            <div className={tabStyle.feed_tab_data}>
              <h3>
                {list.name}
                {list.name === "교환권" ? "" : <span>({list.exp}exp)</span>}
              </h3>
              <span>수량 : {list.quantity}개</span>
            </div>
          </div>
          {popup && (
            <Popup sentence="교환권으로 먹이를 구매하시겠습니까?">
              <div className="btns">
                <ClickButton
                  text="취소하기"
                  clickHandler={cancleHandler}
                  className={buttonStyle.buyBtn}
                />
                <ClickButton
                  text="교환하기"
                  clickHandler={buyHandler}
                  className={buttonStyle.buyBtn}
                />
              </div>
            </Popup>
          )}
        </li>
      ))}
    </>
  );
}
