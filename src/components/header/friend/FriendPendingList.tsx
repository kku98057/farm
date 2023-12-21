import { dog, stone } from "../../../asset";
import { buttonStyle, tabStyle } from "../../../style";

import { useState } from "react";
import { FriendType } from "../../../types";
import ClickButton from "../../buttons/ClickButton";
import useUpdate from "../../../hooks/useUpdate";
import { useSetRecoilState } from "recoil";
import {
  AtomApprovalFriendList,
  AtomPendingFriendList,
  AtomRejectFriendList,
} from "../../../store";
export default function FriendPendingList({ list }: { list: FriendType }) {
  const [sendItemState, setSendItemState] = useState<boolean>(true);

  const { mutate: approvalMutate } = useUpdate({ url: "/api/friend/approval" });
  const { mutate: rejectMutate } = useUpdate({ url: "/api/friend/reject" });
  const setApprovalFriendList = useSetRecoilState(AtomApprovalFriendList);
  const setPendingFriendList = useSetRecoilState(AtomPendingFriendList);

  const approvalHandler = (friend: FriendType) => {
    approvalMutate(
      { friend_id: friend.friend_id },
      {
        onError: (error) => console.error(error),
        onSuccess: (res) => {
          console.log(res);
          setApprovalFriendList((prev) => [...prev, friend]);
          setPendingFriendList((prev) =>
            prev.filter((item) => item.friend_id !== friend.friend_id)
          );
        },
      }
    );
  };
  const rejectHandler = (friend: FriendType) => {
    rejectMutate(
      { friend_id: friend.friend_id },
      {
        onError: (error) => console.error(error),
        onSuccess: (res) => {
          console.log(res);
          setPendingFriendList((prev) =>
            prev.filter((item) => item.friend_id !== friend.friend_id)
          );
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
          <li>
            <ClickButton
              text={"수락"}
              clickHandler={() => approvalHandler(list)}
              className={buttonStyle.approvalBtn}
            />
          </li>
          <li>
            <ClickButton
              text={"거절"}
              clickHandler={() => rejectHandler(list)}
              className={buttonStyle.rejectBtn}
            />
          </li>
        </ul>
      </div>
    </li>
  );
}
