import { useRecoilValue } from "recoil";
import { AtomMyCharacter } from "../store";

import { AnimalStatus, LevelStatusType } from "../types";

import { AnimalListStatus } from "../config/constant";

import Lottie from "lottie-react";
import { sheep } from "../asset";

export default function MyCharacter({
  setLevelStatus,
}: {
  setLevelStatus: (state: LevelStatusType) => void;
}) {
  const myCharacter = useRecoilValue(AtomMyCharacter);

  // const animal =
  //   myCharacter.name !== "" && myCharacter.status !== ""
  //     ? AnimalListStatus[myCharacter.name][
  //         myCharacter.status as keyof AnimalStatus
  //       ]
  //     : "";

  return (
    <>
      <div style={{ position: "relative", width: 240, margin: "0 auto" }}>
        <Lottie animationData={sheep} loop={true}></Lottie>
      </div>
    </>
  );
}
