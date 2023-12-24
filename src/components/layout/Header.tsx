import "swiper/css";

import { gamestone, stone } from "../../asset";

import { HeaderList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType } from "../../types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomAlarm,
  AtomAlarmLength,
  AtomAlarmReadLength,
  AtomCurrency,
  AtomHeaderTab,
  AtomLevelPopup,
  AtomUser,
} from "../../store";

export default function Header() {
  const [userData, setUserData] = useRecoilState(AtomUser);
  const [mainCurrencyData, setMainCurrencyData] = useRecoilState(AtomCurrency);
  console.log(mainCurrencyData);
  return (
    <header className={layoutStyle.header}>
      <div className={layoutStyle.header_ul}>
        {HeaderList.map((list, idx) => (
          <HeaderListUi list={list} key={`${list.name}_header_ui_${idx}`} />
        ))}
        <div className={layoutStyle.header_user}>
          <div className={layoutStyle.myCurrency}>
            <img src={stone} alt="수면포인트" />
            <span>{mainCurrencyData.point.toLocaleString()}</span>
          </div>
          <div className={layoutStyle.myCurrency}>
            <img src={gamestone} alt="crystal" />
            <span>{mainCurrencyData.crystal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

const HeaderListUi = ({ list }: { list: ConstantType }) => {
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);

  const setPopup = useSetRecoilState(AtomLevelPopup);
  const [mainAlarmData, setMainyAlarmData] = useRecoilState(AtomAlarm);
  const alarmLength = useRecoilValue(AtomAlarmLength);
  const alarmReadLength = useRecoilValue(AtomAlarmReadLength);

  return (
    <li className={layoutStyle.list} onClick={() => setHeaderTab(list.title)}>
      {mainAlarmData.count > 0 ? (
        <span className={tabStyle.alarm_length}>{alarmLength}</span>
      ) : (
        ""
      )}

      <div>
        <img src={list.image} alt={list.name} />
      </div>
    </li>
  );
};
