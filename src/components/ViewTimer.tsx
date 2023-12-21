import { useRecoilState } from "recoil";
import FormatTimer from "../Fn/FormatTimer";
import { AtomLevelStatus, AtomMyFeedTime } from "../store";
import { buttonStyle } from "../style";
import { useEffect } from "react";

export default function ViewTimer() {
  const [eatTimer, setEatTimer] = useRecoilState(AtomMyFeedTime);
  const [levelStatus, setLevelStatus] = useRecoilState(AtomLevelStatus);

  useEffect(() => {
    if (levelStatus.expTimer === "starting") {
      const timer = setInterval(() => {
        setEatTimer((prev) => {
          if (prev.use_feed > 0) {
            return {
              ...prev,
              use_feed: prev.use_feed - 1000,
            };
          } else {
            clearInterval(timer);
            return {
              ...prev,
              use_feed: 0,
            };
          }
        });
      }, 1000);
    }
  }, [levelStatus.expTimer]);

  return (
    <div className={buttonStyle.evolutionBtn}>
      {FormatTimer(eatTimer.use_feed)}
    </div>
  );
}
