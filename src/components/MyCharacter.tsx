import { useRecoilState } from "recoil";
import { AtomMyCharacter } from "../store";

import { AnimalStatus, LevelStatusType } from "../types";

import { AnimalListStatus } from "../config/constant";

import Lottie from "lottie-react";

export default function MyCharacter({
  setLevelStatus,
}: {
  setLevelStatus: (state: LevelStatusType) => void;
}) {
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);

  const animal =
    myCharacter.name !== "" && myCharacter.status !== ""
      ? AnimalListStatus[myCharacter.name][
          myCharacter.status as keyof AnimalStatus
        ]
      : "";

  return (
    <>
      <div style={{ position: "relative", width: 240, margin: "0 auto" }}>
        <Lottie animationData={animal} loop={true}></Lottie>
      </div>
    </>
  );
}
