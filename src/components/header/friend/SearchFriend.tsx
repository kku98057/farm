import useText from "../../../hooks/useText";
import { buttonStyle, tabStyle } from "../../../style";
import { useEffect, useState } from "react";
import { ChangeType } from "../../../types";
import { CiSearch } from "react-icons/ci";
export function SearchFriend({
  className,
  title,
  name,
  changeHandler,
  text,
}: {
  className?: string;
  title?: string;
  name: string;
  text: string;
  changeHandler: (e: ChangeType) => void;
}) {
  return (
    <div className={`${tabStyle.friendInput}`}>
      <input
        name={name}
        type="text"
        value={text}
        onChange={changeHandler}
        placeholder="이름으로 검색하세요"
      />
      <button type="submit" className={buttonStyle.searchFriendBtn}>
        <CiSearch />
      </button>
    </div>
  );
}
