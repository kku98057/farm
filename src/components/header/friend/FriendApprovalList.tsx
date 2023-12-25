import { dog, friend, stone } from "../../../asset";
import { tabStyle } from "../../../style";

import { useState } from "react";
import { FriendType } from "../../../types";
import useUpdate from "../../../hooks/useUpdate";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AtomHeaderTab, AtomLevelPopup, AtomLoading } from "../../../store";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
export default function FriendApprovalList({ list }: { list: FriendType }) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);

  const TOKEN = searchParams.get("token");
  const queryClient = useQueryClient();
  const [sendItemState, setSendItemState] = useState<boolean>(true);
  const setPopup = useSetRecoilState(AtomLevelPopup);
  const setGlobalLoading = useSetRecoilState(AtomLoading);
  const { mutate } = useUpdate({ url: "/api/friend/like" });
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);

  const gotoFriend = () => {
    setHeaderTab({ name: "friendView", params: { friend_id: list.friend_id } });
  };

  const sendTicket = (id: number) => {
    setGlobalLoading(true);
    mutate(
      { friend_id: id },
      {
        onSuccess: (res) => {
          setPopup({ text: "먹이교환권을 보냈습니다.", popup: true });
          setGlobalLoading(true);
        },
        onError: (error: any) => {
          setGlobalLoading(true);
          setPopup({ text: error.response.data.message, popup: true });
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/friend/list"] });
          queryClient.invalidateQueries({ queryKey: ["/api/main"] });
        },
      }
    );
  };
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
          <li
            className={`${tabStyle.friend_btn} ${
              !sendItemState ? `${tabStyle.active}` : ""
            }`}
            key={`${list.friend_name}_approval_btns`}
            onClick={() => sendTicket(list.friend_id)}
          >
            <img src={stone} alt={"교환권주기"} />
            <span></span>
          </li>
          <li
            className={`${tabStyle.friend_btn} ${
              !sendItemState ? `${tabStyle.active}` : ""
            }`}
            key={`${list.friend_name}_approval_btns`}
            onClick={gotoFriend}
          >
            <img src={stone} alt={"놀러가기"} />
            <span></span>
          </li>
        </ul>
      </div>
    </li>
  );
}
