import { useRecoilValue, useSetRecoilState } from "recoil";
import { FooterList, HeaderList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType } from "../../types";
import Container from "./Container";
import {
  AtomAlarmLength,
  AtomAlarmReadLength,
  AtomFooterTab,
  AtomHeaderTab,
  AtomLevelPopup,
  AtomMyFarm,
  AtomUser,
} from "../../store";
import { useState, useEffect } from "react";

export default function Footer() {
  const setFooterTab = useSetRecoilState(AtomFooterTab);
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);

  const handleActiveFilterTab = (title: string) => {
    setFooterTab(title === "home" ? "" : title);
    setHeaderTab("");
  };
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
        if (userData.level < 2 && list.title === "feed_inventory") {
          setPopup({ text: "레벨2부터 사용가능합니다.", popup: true });
          return;
        }
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
        <img
          src={list.image}
          alt={list.name}
          style={{
            filter:
              userData.level < 2 && list.name === "먹이 보관함"
                ? "grayscale(1)"
                : "grayscale(0)",
          }}
        />
      </div>

      {/* <span style={{ fontSize: 12, whiteSpace: "nowrap" }}>{list.name}</span> */}
    </li>
  );
};
