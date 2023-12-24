import { useRecoilValue, useSetRecoilState } from "recoil";
import { FooterList, HeaderList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType } from "../../types";
import Container from "./Container";
import {
  AtomAlarmLength,
  AtomAlarmReadLength,
  AtomHeaderTab,
  AtomLevelPopup,
  AtomUser,
} from "../../store";
import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className={layoutStyle.footer}>
      <Container>
        <div className={layoutStyle.footer_ul}>
          {FooterList.map((list, idx) => (
            <FooterListUi list={list} key={list.name} />
          ))}
        </div>
      </Container>
    </footer>
  );
}

const FooterListUi = ({ list }: { list: ConstantType }) => {
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);

  const userData = useRecoilValue(AtomUser);
  const setPopup = useSetRecoilState(AtomLevelPopup);

  const alarmLength = useRecoilValue(AtomAlarmLength);
  const alarmReadLength = useRecoilValue(AtomAlarmReadLength);
  return (
    <li
      className={layoutStyle.list}
      onClick={() => {
        setHeaderTab(list.title);
      }}
    >
      {list.title === "alarm" && alarmLength > 0 && alarmReadLength > 0 ? (
        <span className={tabStyle.alarm_length}>
          {alarmReadLength < alarmLength ? alarmReadLength : alarmLength}
        </span>
      ) : (
        ""
      )}

      <div>
        <img src={list.image} alt={list.name} />
      </div>

      {/* <span style={{ fontSize: 12, whiteSpace: "nowrap" }}>{list.name}</span> */}
    </li>
  );
};
