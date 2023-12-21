import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { AtomMyCharacter, Atomlevel } from "../../../store";
import { type } from "os";
import { useEffect, useState } from "react";
import { start } from "repl";
import { buttonStyle, tabStyle } from "../../../style";
import { LevelStatusType } from "../../../types";
import FormatTimer from "../../../Fn/FormatTimer";

export default function EvolutionTimer({
  levelStatus,
  setLevelStatus,
}: {
  levelStatus: string;
  setLevelStatus: (state: LevelStatusType) => void;
}) {
  // const level = useRecoilValue(Atomlevel);
  // const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);
  // const [currntTime, setCurrntTime] = useState<number>(0);
  // const [endTimer, setEndTimer] = useState(false);
  // function formatTime() {
  //   const totalSeconds = Math.floor(currntTime / 1000);
  //   const minutes = Math.floor(totalSeconds / 60);
  //   const seconds = totalSeconds % 60;

  //   // 분과 초를 두 자리 숫자로 포맷팅 (예: 05분 09초)
  //   const formattedMinutes = String(minutes).padStart(2, "0");
  //   const formattedSeconds = String(seconds).padStart(2, "0");

  //   return `${formattedMinutes}:${formattedSeconds}`;
  // }

  // useEffect(() => {
  //   setCurrntTime(level[myCharacter.level as keyof typeof level].evol_time);
  // }, [myCharacter.level]);

  // useEffect(() => {
  //   if (endTimer && myCharacter.level === 6) {
  //     setLevelStatus("last_evolution");
  //   } else if (endTimer && myCharacter.level !== 6) {
  //     setLevelStatus("evolution");
  //   }
  // }, [endTimer]);

  // return <div className={buttonStyle.timerBtn}>{FormatTimer(currntTime)}</div>;
  return;
}
