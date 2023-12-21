import { buttonStyle, tabStyle } from "../../../style";

import ClickButton from "../../buttons/ClickButton";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomApprovalFriendList,
  AtomHeaderTab,
  AtomPendingFriendList,
  AtomRejectFriendList,
} from "../../../store";

import FriendApprovalList from "./FriendApprovalList";
import BackButton from "../../buttons/BackButton";
import FriendFilteTab from "./FriendFilteTab";
import { useState } from "react";
import FriendPendingList from "./FriendPendingList";
export default function FriendTab({
  HeaderTabDatas,
}: {
  HeaderTabDatas: { [key: string]: string };
}) {
  const friendPendingList = useRecoilValue(AtomPendingFriendList);
  const friendRejectList = useRecoilValue(AtomRejectFriendList);
  const friendApprovalList = useRecoilValue(AtomApprovalFriendList);
  console.log(friendPendingList);

  const [tab, setTab] = useState("친구목록");
  return (
    <div className={tabStyle.tab_wrap}>
      <BackButton back="" title="친구목록" />
      <FriendFilteTab tab={tab} setTab={setTab} />
      <div
        className={`${tabStyle.tab_inner} ${tabStyle.friend_tab_inner}`}
        style={{
          border: "2px solid rgb(var(--color-9))",
          borderRadius: "10px",
        }}
      >
        <div className={tabStyle.friend_ul}>
          {tab === "친구목록" && (
            <>
              {friendApprovalList.length > 0 ? (
                friendApprovalList.map((item, idx) => (
                  <FriendApprovalList list={item} />
                ))
              ) : (
                <p className="ready">아직 친구가 없어요.</p>
              )}
            </>
          )}
          {tab === "요청목록" && (
            <>
              {friendPendingList.length > 0 ? (
                friendPendingList.map((item, idx) => (
                  <FriendPendingList list={item} />
                ))
              ) : (
                <p className="ready">요청받은 친구가 없어요.</p>
              )}
            </>
          )}
          {tab === "친구검색" && (
            <>
              {friendApprovalList.length > 0 ? (
                friendApprovalList.map((item, idx) => (
                  <FriendApprovalList list={item} />
                ))
              ) : (
                <p className="ready">해당 이름의 친구가 없어요.</p>
              )}
            </>
          )}
        </div>
      </div>
      {/* <div className="btns2">
        <ClickButton
          text="친구추가"
          className={buttonStyle.addFriendBtn}
          clickHandler={addFriend}
        />
      </div> */}
    </div>
  );
}
