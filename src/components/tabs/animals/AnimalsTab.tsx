import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tabStyle } from "../../../style";
import {
  AtomMyCharacter,
  AtomFooterTab,
  AtomAnimalsList,
  AtomHeaderTab,
} from "../../../store";
import { useEffect, useState } from "react";

import { tabDatasType, SubmitType, AnimalsType } from "../../../types";
import Notice from "../../Notice";
import TabTop from "../../layout/TabTop";
import useGetAxios from "../../../hooks/useGetAxios";

import SubmitButton from "../../buttons/SubmitButton";
import Loading from "../../Loading";
import useUpdate from "../../../hooks/useUpdate";
import Cookies from "js-cookie";
import AnimalsList from "./AnimalsList";
import BackButton from "../../buttons/BackButton";
import InventoryTab from "./InventoryListTab";
import FeedInventory from "../feedInven/FeedInventory";
import InventoryListTab from "./InventoryListTab";

export default function AnimalsTab({ tabDatas }: { tabDatas: tabDatasType }) {
  const username = Cookies.get("username");

  const animalsList = useRecoilValue(AtomAnimalsList);
  const [headerTab, setHeaderTab] = useRecoilState(AtomHeaderTab);
  const setMyCharacter = useSetRecoilState(AtomMyCharacter);
  const [tab, setTab] = useState("animals");

  const [animalClicked, setAnimalClicked] = useState<{
    name: string;
    image: string | null;
    id: number | null;
  }>({
    name: "",
    image: null,
    id: null,
  });

  const clickHandler = (name: string, image: string, id: number) => {
    setAnimalClicked({
      name: name,
      image: image,
      id: id,
    });
  };

  const { mutate } = useUpdate({ url: "/api/animal", isAlert: "noAlert" });
  const submitHandler = (e: SubmitType, name: string) => {
    e.preventDefault();

    setHeaderTab("");
    mutate({
      id: animalClicked.id,
      username: username,
    });
  };

  return (
    <form
      className={tabStyle.tab_wrap}
      style={{ gap: 0 }}
      onSubmit={(e) => submitHandler(e, animalClicked.name)}
    >
      <BackButton back="" title="보관함" />
      <InventoryListTab setTab={setTab} tab={tab} />
      {tab === "animals" ? (
        <>
          <div className={tabStyle.tab_inner}>
            <div className={tabStyle.animals_box}>
              {animalsList.map((list: AnimalsType, idx: number) => (
                <AnimalsList
                  list={list}
                  key={`${list.name}_${idx}`}
                  animalClicked={animalClicked}
                  clickHandler={clickHandler}
                  idx={idx}
                />
              ))}
            </div>
          </div>
          <div className={`btns2`}>
            <SubmitButton text="선택하기" />
          </div>
        </>
      ) : (
        <div className={tabStyle.tab_inner} style={{ gap: 10 }}>
          <FeedInventory />
        </div>
      )}
    </form>
  );
}
