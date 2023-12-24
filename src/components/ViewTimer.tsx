import { useRecoilState, useRecoilValue } from "recoil";
import FormatTimer from "../Fn/FormatTimer";
import { AtomLevelStatus, AtomMyCharacter, AtomMyFeedTime } from "../store";
import { buttonStyle } from "../style";
import { useEffect } from "react";

export default function ViewTimer() {
  const [eatTimer, setEatTimer] = useRecoilState(AtomMyFeedTime);
  const [levelStatus, setLevelStatus] = useRecoilState(AtomLevelStatus);
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);

  useEffect(() => {
    const timer = setInterval(() => {
      setMyCharacter((prev) => {
        if (prev.remain_next_level_time > 0) {
          return {
            ...prev,
            remain_next_level_time: prev.remain_next_level_time - 1000,
          };
        } else {
          clearInterval(timer);
          return {
            ...prev,
            remain_next_level_time: 0,
          };
        }
      });
    }, 1000);
  }, [myCharacter.next_exp]);

  return (
    <div className={buttonStyle.evolutionBtn}>
      {FormatTimer(myCharacter.remain_next_level_time)}
    </div>
  );
}
