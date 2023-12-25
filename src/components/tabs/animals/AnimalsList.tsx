import { useRecoilValue, useSetRecoilState } from "recoil";
import { AnimalList } from "../../../config/constant";
import { buttonStyle, tabStyle } from "../../../style";
import ClickButton from "../../buttons/ClickButton";
import AnimalsExp from "./AnimalsExp";
import AnimalsName from "./AnimalsName";
import {
  AtomAnimalTabCurrentTabAnimal,
  AtomHeaderTab,
  AtomMyCharacter,
} from "../../../store";

interface AnimalListType {
  list: any;
  animalClicked: any;
  clickHandler: any;

  idx: number;
}

export default function AnimalsList({
  list,
  animalClicked,
  clickHandler,

  idx,
}: AnimalListType) {
  const setAnimalTabCurrentTabAnimal = useSetRecoilState(
    AtomAnimalTabCurrentTabAnimal
  );
  const setHeaderTab = useSetRecoilState(AtomHeaderTab);
  const myCharacter = useRecoilValue(AtomMyCharacter);
  return (
    <li
      className={`${tabStyle.animal_list} ${
        animalClicked.name === list.name ? `${tabStyle.clickAnimal}` : undefined
      }`}
      onClick={() =>
        clickHandler(
          list.name,
          AnimalList[list.name as keyof typeof AnimalList],
          list.id
        )
      }
      key={`${list.name}_${idx}`}
    >
      <div className={tabStyle.animals_tab_img}>
        <img
          src={AnimalList[list.name as keyof typeof AnimalList]}
          alt={list.name}
        />
      </div>
      <div className={tabStyle.animals_tab_data}>
        <div className={tabStyle.animals_tab_top}>
          <AnimalsName name={list.name} level={list.level} />

          <ClickButton
            className={buttonStyle.detailBtn}
            text="행동 목록"
            clickHandler={() => {
              setHeaderTab({ name: "animals_detail" });
              setAnimalTabCurrentTabAnimal(list.id);
            }}
          />
        </div>
        <div className={tabStyle.animals_tab_bottom}>
          <AnimalsExp percent_exp={list.percent_exp} />
        </div>
      </div>
    </li>
  );
}
