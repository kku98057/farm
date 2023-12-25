import { tabStyle } from "../../../style";

import FriendApprovalList from "./FriendApprovalList";
import BackButton from "../../buttons/BackButton";
import FriendFilteTab from "./FriendFilteTab";
import { useState } from "react";

import FriendInvite from "./FriendInvite";
import useGetAxios from "../../../hooks/useGetAxios";
import { FriendType } from "../../../types";
export default function FriendTab({
  HeaderTabDatas,
}: {
  HeaderTabDatas: { [key: string]: string };
}) {
  const { data: friendApprovalData, isLoading: isLoadingFriendApprovalData } =
    useGetAxios({
      url: "/api/friend/list",
      params: { status: "approval" },
    });
  const [tab, setTab] = useState("친구목록");
  console.log(friendApprovalData);
  return (
    <div className={tabStyle.tab_wrap}>
      <BackButton back="" title="친구목록" />
      <FriendFilteTab tab={tab} setTab={setTab} />
      {tab === "친구목록" && (
        <>
          {friendApprovalData && (
            <>
              <div>남은 교환권 : {friendApprovalData.friend_feed}/2</div>
              <div
                className={`${tabStyle.tab_inner} ${tabStyle.friend_tab_inner}`}
                style={{
                  border: "1px solid rgb(var(--color-border))",
                  borderRadius: "10px",
                }}
              >
                <div className={tabStyle.friend_ul}>
                  {friendApprovalData.list.length > 0 ? (
                    friendApprovalData.list.map(
                      (item: FriendType, idx: number) => (
                        <FriendApprovalList
                          list={item}
                          key={`${item.friend_name}_approval_friend_${idx}`}
                        />
                      )
                    )
                  ) : (
                    <p className="ready">아직 친구가 없어요.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
      {tab === "친구등록" && <FriendInvite />}
    </div>
  );
}
