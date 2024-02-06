import "swiper/css";

import { gamestone, point } from "../../asset";

import { HeaderList } from "../../config/constant";
import { layoutStyle, tabStyle } from "../../style";
import { ConstantType } from "../../types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AtomAlarm, AtomCurrency, AtomHeaderTab } from "../../store";

export default function Header() {
  const [mainCurrencyData, setMainCurrencyData] = useRecoilState(AtomCurrency);

  return (
    <header className={layoutStyle.header}>
      <div className={layoutStyle.header_ul}>
        {HeaderList.map((list, idx) => (
          <HeaderListUi list={list} key={`${list.name}_header_ui_${idx}`} />
        ))}
        <div className={layoutStyle.header_user}>
          <div className={layoutStyle.myCurrency}>
            <img src={point} alt="수면포인트" />
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

  const [mainAlarmData, setMainyAlarmData] = useRecoilState(AtomAlarm);

  return (
    <li
      className={layoutStyle.list}
      onClick={() => setHeaderTab({ name: list.title })}
    >
      {mainAlarmData.is_alarm ? (
        <span className={tabStyle.alarm_length}>{mainAlarmData.count}</span>
      ) : (
        ""
      )}
      <div>
        <img src={list.image} alt={list.name} style={{ width: 30 }} />
      </div>
    </li>
  );
};
