import { useSetRecoilState } from "recoil";
import { layoutStyle } from "../style";

import MyCharacter from "./MyCharacter";

import { AtomLevelStatus } from "../store";

import AnimalsInfo from "./AnimalsInfo";

export default function Animals() {
  return (
    <div className={layoutStyle.animals_wrap}>
      <div className={layoutStyle.grid}>
        <AnimalList />
      </div>
    </div>
  );
}
const AnimalList = () => {
  const setLevelStatus = useSetRecoilState(AtomLevelStatus);

  return (
    <div style={{ cursor: "pointer", paddingBottom: 60 }}>
      <MyCharacter setLevelStatus={setLevelStatus} />
      <AnimalsInfo />
    </div>
  );
};
