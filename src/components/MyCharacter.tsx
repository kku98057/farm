import { useRecoilValue } from "recoil";
import { AtomMyCharacter } from "../store";

import { AnimalStatus, LevelStatusType, MyAnimalType } from "../types";

import { AnimalListStatus } from "../config/constant";

import Lottie from "lottie-react";
import { sheep } from "../asset";

export default function MyCharacter({
  setLevelStatus,
}: {
  setLevelStatus: (state: LevelStatusType) => void;
}) {
  const myCharacter = useRecoilValue(AtomMyCharacter);

  const animal =
    myCharacter.name !== "" && myCharacter.status !== ""
      ? AnimalListStatus[myCharacter.name][
          myCharacter.status as keyof AnimalStatus
        ]
      : "";
  function getImageSrc(myCharacter: MyAnimalType): string {
    const { name, status, evolution_status } = myCharacter;

    return AnimalListStatus[name]?.[status]?.[evolution_status] ?? "";
  }
  return (
    <>
      <div style={{ position: "relative", width: 240, margin: "0 auto" }}>
        {myCharacter.evolution_status === "final" && (
          <Lottie animationData={getImageSrc(myCharacter)} loop={true}></Lottie>
        )}
        {myCharacter.evolution_status !== "final" && (
          <img src={getImageSrc(myCharacter)} alt={myCharacter.name} />
        )}
      </div>
    </>
  );
}
