import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { feed, rare_feed } from "../asset";
import Popup from "./Popup";
import { AtomFeed, AtomFeedPopup, AtomLoading } from "../store";
import { buttonStyle, tabStyle } from "../style";
import ClickButton from "./buttons/ClickButton";
import { useState } from "react";
import useEat from "../hooks/useEat";

export default function FeedPopup() {
  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);
  const setFeedPopup = useSetRecoilState(AtomFeedPopup);
  const [delay, setDelay] = useState(false);
  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);

  const { eatHandler, popup, popupData, setPopup } = useEat();

  const giveToFeed = (
    grade: number,
    quantity: number,
    name: string,
    exp: number
  ) => {
    if (globalLoading) {
      return;
    }
    if (quantity <= 0) {
      setPopup({ popup: true, text: "먹이가 부족합니다." });
      return;
    }
    eatHandler({ feedId: grade, name, exp });
  };

  const myFeedList = () => {
    return myFeed.map((list) => {
      if (list.name === "교환권") return;
      return (
        <div className="btns2" key={`${list.name}_feedPopup`}>
          <div
            className={tabStyle.feed_select}
            onClick={() =>
              giveToFeed(list.item_id, list.quantity, list.name, list.exp)
            }
          >
            <img
              src={list.name === "일반먹이" ? feed : rare_feed}
              alt={list.name}
            />
            <div className={tabStyle.feed_select_data}>
              <span>수량:{list.quantity}</span>
              <span>
                {list.name}
                <strong>(+{list.exp}exp)</strong>
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Popup sentence={"먹이를 선택해주세요."}>
      <div className="btns">{myFeedList()}</div>
      <div className="btns2">
        <ClickButton
          text="닫기"
          className={buttonStyle.buyBtn}
          clickHandler={() => setFeedPopup(false)}
        />
      </div>
    </Popup>
  );
}
