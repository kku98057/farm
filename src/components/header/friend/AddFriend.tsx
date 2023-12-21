import { tabStyle } from "../../../style";
import TabTop from "../../layout/TabTop";
import { useState } from "react";
import Tab from "../../tabs/Tab";
import { SearchFriend } from "./SearchFriend";
import useText from "../../../hooks/useText";
import { SubmitType } from "../../../types";
import { cat, horse } from "../../../asset";
import FriendApprovalList from "./FriendApprovalList";
import { useRecoilValue } from "recoil";
import { AtomRecommend } from "../../../store";
import BackButton from "../../buttons/BackButton";

export default function AddFriend({
  HeaderTabDatas,
}: {
  HeaderTabDatas: { [key: string]: string };
}) {
  const friendsData = useRecoilValue(AtomRecommend);
  const submitHandler = (e: SubmitType) => {
    e.preventDefault();
    // 검색
  };
  const { text, handleText } = useText();

  return (
    <form className={tabStyle.tab_wrap} onSubmit={submitHandler}>
      <BackButton back="friend" title="친구추가" />

      <div className={tabStyle.tab_inner}>
        <ul className={tabStyle.friend_ul}>
          {/* {friendsData.map((list) => (
            <FriendList
              key={`${list.name}_recommend_friend`}
              list={list}
              types="add"
            />
          ))} */}
        </ul>
      </div>
      <div className="btns2" style={{ marginTop: 30 }}>
        <SearchFriend name="search" text={text} changeHandler={handleText} />
      </div>
    </form>
  );
}
