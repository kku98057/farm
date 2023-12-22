import { dog, stone } from "../../../asset";
import { tabStyle } from "../../../style";

import { useState } from "react";
import { FriendType } from "../../../types";
export default function FriendApprovalList({ list }: { list: FriendType }) {
  const btn = [
    {
      img: stone,
      name: "item",
      title: "먹이권",
    },
    {
      img: stone,
      name: "item",
      title: "놀러가기",
    },
  ];

  const [sendItemState, setSendItemState] = useState<boolean>(true);

  return (
    <li className={tabStyle.friend_list}>
      <div className={tabStyle.friend_left}>
        <div className={tabStyle.friend_img}>
          <img src={dog} alt={list.friend_name} />
        </div>
        <span className={tabStyle.friend_name}>{list.friend_name}</span>
      </div>

      <div className={tabStyle.friend_right}>
        <ul className="btns" style={{ margin: 0 }}>
          {btn.map((btns, idx) => (
            <li
              className={`${tabStyle.friend_btn} ${
                !sendItemState ? `${tabStyle.active}` : ""
              }`}
              key={`${list.friend_name}_approval_btns`}
            >
              <img
                src={btns.name}
                alt={btns.name}
                onClick={() => setSendItemState(false)}
              />
              <span>{btns.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
