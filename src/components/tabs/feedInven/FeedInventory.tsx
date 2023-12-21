import { useEffect } from "react";
import { tabStyle } from "../../../style";
import { feed } from "../../../asset";

import { useRecoilState } from "recoil";
import { AtomFeed } from "../../../store";

import useGetAxios from "../../../hooks/useGetAxios";

export default function FeedInventory() {
  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);

  return (
    <>
      {myFeed.map((list) => (
        <li className={tabStyle.feed_list} key={`${list.name}_feedInventory`}>
          <div className={tabStyle.feed_tab_img}>
            <img src={feed} alt={`${list.name}_inventor`} />
          </div>
          <div className={tabStyle.feed_tab_data}>
            <h3>
              {list.name}
              {list.name === "교환권" ? "" : <span>({list.exp}exp)</span>}
            </h3>
            <span>수량 : {list.quantity}개</span>
          </div>
        </li>
      ))}
    </>
  );
}
