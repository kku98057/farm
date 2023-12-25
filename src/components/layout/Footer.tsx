import { useRecoilValue, useSetRecoilState } from "recoil";
import { FooterList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType } from "../../types";
import Container from "./Container";
import {
  AtomAlarmLength,
  AtomAlarmReadLength,
  AtomAnimalsList,
  AtomHeaderTab,
  AtomLevelPopup,
  AtomMyCharacter,
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
  const myCharacter = useRecoilValue(AtomMyCharacter);

  const userData = useRecoilValue(AtomUser);
  const setPopup = useSetRecoilState(AtomLevelPopup);

  const alarmLength = useRecoilValue(AtomAlarmLength);
  const alarmReadLength = useRecoilValue(AtomAlarmReadLength);
  console.log(list.name);
  return (
    <li
      className={layoutStyle.list}
      onClick={() => {
        if (list.name === "보관함") {
          setHeaderTab({ name: list.title });
          return;
        }
        setHeaderTab({ name: list.title });
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
