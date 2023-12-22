import "swiper/css";

import { gamestone, stone } from "../../asset";

import { HeaderList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType, userType } from "../../types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomAlarmLength,
  AtomAlarmReadLength,
  AtomHeaderTab,
  AtomLevelPopup,
  AtomUser,
} from "../../store";

export default function Header() {
  const [userData, setUserData] = useRecoilState(AtomUser);

  return (
    <header className={layoutStyle.header}>
      <div className={layoutStyle.header_ul}>
        {HeaderList.map((list, idx) => (
          <HeaderListUi list={list} key={`${list.name}_header_ui_${idx}`} />
        ))}
        <div className={layoutStyle.header_user}>
          <div className={layoutStyle.myCurrency}>
            <img src={stone} alt="수면포인트" />
            <span>{userData.total_exp.toLocaleString()}</span>
          </div>
          <div className={layoutStyle.myCurrency}>
            <img src={gamestone} alt="crystal" />
            <span>{userData.currency.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

const HeaderListUi = ({ list }: { list: ConstantType }) => {
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
        <img src={list.image} alt={list.name} />
      </div>
    </li>
  );
};
