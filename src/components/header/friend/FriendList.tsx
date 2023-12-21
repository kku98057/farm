import { useRecoilState, useSetRecoilState } from "recoil";
import { stone, tiger } from "../../../asset";
import { tabStyle } from "../../../style";
import { FriendType } from "../../../types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AtomRecommend } from "../../../store";
import { useState } from "react";
export default function FriendList({
  list,
  types,
}: {
  list: FriendType;
  types: string;
}) {
  const btn = [
    {
      img: stone,
      name: "item",
    },
  ];

  return (
    <li className={tabStyle.friend_list}>
      <div className={tabStyle.friend_left}>
        <div className={tabStyle.friend_img}>
          <img src={tiger} alt={list.friend_name} />
        </div>
        <span className={tabStyle.friend_name}>{list.friend_name}</span>
      </div>

      <div className={tabStyle.friend_right}></div>
    </li>
  );
}
