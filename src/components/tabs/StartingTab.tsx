import { useRecoilState, useSetRecoilState } from "recoil";
import { tabStyle } from "../../style";
import { AtomMyCharacter, AtomFooterTab, Atomlevel } from "../../store";
import { useState, useEffect, Suspense } from "react";

import { tabDatasType, SubmitType } from "../../types";

import TabTop from "../layout/TabTop";
import useGetAxios from "../../hooks/useGetAxios";
import { AnimalList } from "../../config/constant";
import SubmitButton from "../buttons/SubmitButton";
import Loading from "../Loading";
import useUpdate from "../../hooks/useUpdate";
import Cookies from "js-cookie";

export default function StartingTab({
  tabDatas,
  setStartingTab,
  refetch,
}: {
  tabDatas: tabDatasType;
  setStartingTab: (state: boolean) => void;
  refetch: any;
}) {
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);

  const username = Cookies.get("username");

  const { data, isLoading } = useGetAxios({ url: `/api/game/animal/list` });
  const [footerTab, setFooterTab] = useRecoilState(AtomFooterTab);
  const [levelState, setLevelState] = useRecoilState(Atomlevel);

  const [animalClicked, setAnimalClicked] = useState<{
    name: string;

    image: string | null;
    animal_id: number | null;
  }>({
    name: "",

    image: null,
    animal_id: null,
  });

  const clickHandler = (name: string, image: string, animal_id: number) => {
    setAnimalClicked({
      name: name,
      image: image,
      animal_id: animal_id,
    });
  };

  const { mutate, isSuccess } = useUpdate({
    url: "/api/game/animal",
    isAlert: "noAlert",
  });
  useEffect(() => {}, []);
  const submitHandler = (e: SubmitType, name: string) => {
    e.preventDefault();
    const setItem = {
      ...myCharacter,
      name: name,
      animal_id: animalClicked.animal_id,
      maxExp: levelState[myCharacter.level as keyof typeof levelState].exp,
    };
    localStorage.setItem("my_character", JSON.stringify(setItem));
    setMyCharacter((prev) => ({
      ...prev,
      name: name,
      maxExp: levelState[myCharacter.level as keyof typeof levelState].exp,
      animal_id: animalClicked.animal_id,
    }));

    mutate(
      {
        animal_id: animalClicked.animal_id,
      },
      {
        onSuccess: () => {
          refetch();

          setFooterTab("");
        },
      }
    );
  };

  const engName = (name: string) => {
    switch (name) {
      case "고양이":
        return <h4>Cat</h4>;
      case "강아지":
        return <h4>Dog</h4>;
      case "말":
        return <h4>Horse</h4>;
      case "호랑이":
        return <h4>Tiger</h4>;
    }
  };

  return (
    <form
      className={tabStyle.tab_wrap}
      style={{ gap: 30, zIndex: 6 }}
      onSubmit={(e) => submitHandler(e, animalClicked.name)}
    >
      <div className={tabStyle.tab_inner}>
        {isLoading && <Loading relative />}
        <div className={tabStyle.animals_box}>
          {data?.list.map((list: any, idx: number) => (
            <div
              className={`${tabStyle.animal_list} ${
                animalClicked.name === list.name
                  ? `${tabStyle.clickAnimal}`
                  : undefined
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
                  <div className={tabStyle.animals_tab_names}>
                    <h4>{list.name}</h4>
                    {engName(list.name)}
                  </div>
                </div>
                <div className={tabStyle.animals_tab_bottom}>
                  <div className={tabStyle.animals_tab_exp}>
                    <div className={tabStyle.animals_tab_bar}>
                      <div style={{ width: 0 }}></div>
                    </div>
                    <div className={tabStyle.animals_tab_msg}>
                      <span></span>
                      <span>0% complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="btns2">
        <SubmitButton text="선택하기" />
      </div>
    </form>
  );
}
