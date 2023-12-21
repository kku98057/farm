import { useRecoilValue } from "recoil";
import { buttonStyle, tabStyle } from "../style";
import SleepScore from "./score/SleepScore";
import { AtomMyCharacter, AtomUser } from "../store";

import EvolutionBtns from "./tabs/animals/EvolutionBtns";
import { useState } from "react";
import Popup from "./Popup";
import ClickButton from "./buttons/ClickButton";

export default function AnimalsInfo() {
  const myCharacter = useRecoilValue(AtomMyCharacter);
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const userDatas = useRecoilValue(AtomUser);
  const [albeEat, setAbleEat] = useState(true);

  const { acquired_exp, next_exp } = myCharacter;

  return (
    <div className={tabStyle.animal_status_wrap}>
      <SleepScore
        animal={myCharacter.name}
        currentExp={acquired_exp}
        maxExp={next_exp}
      />
      <div className={tabStyle.animal_status}>
        <AnimalStatList title="동물레벨" status={myCharacter.level} />
        <AnimalStatList title="누적 수면점수" status={userDatas.total_exp} />
      </div>
      <div className="btns" style={{ marginTop: 10, minHeight: 40 }}>
        <EvolutionBtns
          albeEat={albeEat}
          setAbleEat={setAbleEat}
          text={"먹이"}
          type={"basic"}
        />
      </div>

      {popup && (
        <Popup sentence={popupText}>
          <div className="btns">
            <ClickButton
              text="닫기"
              className={buttonStyle.buyBtn}
              clickHandler={() => setPopup(false)}
            />
          </div>
        </Popup>
      )}
    </div>
  );
}
function AnimalStatList({
  title,

  status,
}: {
  title: string;
  status: number | string;
}) {
  const unit = (title: string) => {
    switch (title) {
      case "동물레벨":
        return "Lv";
      case "동물상태":
        return "상태";
      case "누적 수면점수":
        return "점";
      case "계정 레벨":
        return "Lv";
      case "포인트":
        return "P";
      default:
        return;
    }
  };

  return (
    <div className={tabStyle.animal_status_list}>
      <p className={tabStyle.animal_status_title}>{title}</p>
      <p className={tabStyle.animal_status_data}>
        {status?.toLocaleString()}
        {unit(title)}
      </p>
    </div>
  );
}
