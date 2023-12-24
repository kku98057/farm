import { useState } from "react";
import { buttonStyle, tabStyle } from "../../../../style";
import { AnimalsType, ClickType, SubmitType } from "../../../../types";
import Loading from "../../../Loading";
import SubmitButton from "../../../buttons/SubmitButton";
import AnimalsList from "../../animals/AnimalsList";
import useGetAxios from "../../../../hooks/useGetAxios";
import { useRecoilState } from "recoil";
import { AtomHeaderTab } from "../../../../store";
import useUpdate from "../../../../hooks/useUpdate";
import ClickButton from "../../../buttons/ClickButton";
import { useQueryClient } from "@tanstack/react-query";

export default function AnimalInventory() {
  const queryClient = useQueryClient();
  const [headerTab, setHeaderTab] = useRecoilState(AtomHeaderTab);
  const { data: animalsData, isLoading: isLoadingAnimalsData } = useGetAxios({
    url: `/api/inventory/animal`,
  });

  const { mutate } = useUpdate({ url: "/api/animal", isAlert: "noAlert" });
  const [animalClicked, setAnimalClicked] = useState<{
    name: string;
    image: string | null;
    id: number | null;
  }>({
    name: "",
    image: null,
    id: null,
  });
  const submitHandler = (e: ClickType) => {
    mutate(
      {
        animal_id: animalClicked.id,
      },

      {
        onSuccess: () => {
          setHeaderTab("");
        },
        onError: (error) => {
          console.error(error);
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/main"] });
        },
      }
    );
  };

  const clickHandler = (name: string, image: string, id: number) => {
    setAnimalClicked({
      name: name,
      image: image,
      id: id,
    });
  };
  return (
    <>
      <div className={tabStyle.tab_inner}>
        <div className={tabStyle.animals_box}>
          {!isLoadingAnimalsData ? (
            animalsData.list.map((list: AnimalsType, idx: number) => (
              <AnimalsList
                list={list}
                key={`${list.name}_${idx}`}
                animalClicked={animalClicked}
                clickHandler={clickHandler}
                idx={idx}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className={`btns3`}>
        <ClickButton
          text="선택하기"
          clickHandler={submitHandler}
          className={buttonStyle.submitBtn}
        />
      </div>
    </>
  );
}
