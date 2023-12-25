import { useRecoilValue } from "recoil";
import { AtomMyCharacter } from "../store";

import { LevelStatusType, MyAnimalType } from "../types";

import { AnimalListStatus } from "../config/constant";

import Lottie from "lottie-react";

export default function MyCharacter({
  setLevelStatus,
}: {
  setLevelStatus: (state: LevelStatusType) => void;
}) {
  const myCharacter = useRecoilValue(AtomMyCharacter);

  function getImageSrc(myCharacter: MyAnimalType): string {
    const { name, status, evolution_status, action } = myCharacter;
    const skinFilter = action?.filter(
      (item) => item.category === transformStatus(myCharacter.status)
    )[0];
    const skincode = skinFilter?.properties[0]?.skin_code || 1;

    return (
      AnimalListStatus[name]?.[status]?.[evolution_status]?.[
        skincode.toString()
      ] ?? ""
    );
  }
  const transformStatus = (status: string) => {
    console.log(status);
    switch (status) {
      case "wakeup":
        return "기본";
      case "active":
        return "활동";
      case "sleep":
        return "잠든";
      default:
        return;
    }
  };

  return (
    <>
      <div style={{ position: "relative", width: 240, margin: "0 auto" }}>
        {myCharacter.evolution_status === "final" && (
          <Lottie animationData={getImageSrc(myCharacter)} loop={true}></Lottie>
        )}
        {myCharacter.evolution_status !== "final" && (
          <img src={getImageSrc(myCharacter)} alt={myCharacter.name} />
        )}
        {/* <img src={getImageSrc(myCharacter)} alt={myCharacter.name} /> */}
      </div>
    </>
  );
}
