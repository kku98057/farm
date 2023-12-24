import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomFeed,
  AtomFeedPopup,
  AtomLevelPopup,
  AtomLevelStatus,
  AtomLoading,
  AtomMyCharacter,
} from "../store";

import { feedType } from "../types";
import { useEffect, useState } from "react";

import useUpdate from "./useUpdate";
import { useQueryClient } from "@tanstack/react-query";

export default function useEat() {
  const queryClient = useQueryClient();
  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);
  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const [popupData, setPopupData] = useState("");
  const [globalLoading, setGlobalLoading] = useRecoilState(AtomLoading);

  const levelStatus = useRecoilValue(AtomLevelStatus);
  const setFeedPopup = useSetRecoilState(AtomFeedPopup);
  const { mutate } = useUpdate({ url: "/api/animal/feed" });

  const eatHandler = ({
    feedId,
    name,
    exp,
  }: {
    feedId: number;
    name: string;
    exp: number;
  }) => {
    setGlobalLoading(true);
    mutate(
      {
        animal_id: myCharacter.id,
        feed_id: feedId,
      },
      {
        onError: (error: any) => {
          setGlobalLoading(false);
          setPopup((prev) => ({
            text: error.response.data.message,
            popup: true,
          }));
          console.error(error);
          alert(error);
          return;
        },
        onSuccess: (res) => {
          console.log(res);
          setGlobalLoading(false);
          if (
            levelStatus.levelStatus === "evolution" ||
            levelStatus.levelStatus === "evolution_complete"
          ) {
            setPopup({ text: "진화를 먼저 해주세요.", popup: true });
            setFeedPopup(false);
            return;
          }
          if (
            levelStatus.levelStatus === "last_evolution" ||
            levelStatus.levelStatus === "last_evolution_complete"
          ) {
            setPopup({ text: "최종진화를 먼저 해주세요.", popup: true });
            setFeedPopup(false);
            return;
          }
          // setMyFeed((prev) =>
          //   prev.map((item) => ({
          //     ...item,
          //     quantity: name === item.name ? item.quantity - 1 : item.quantity,
          //   }))
          // );
          // setMyCharacter((prev) => ({
          //   ...prev,
          //   acquired_exp: prev.acquired_exp + exp + 1000,
          // }));

          // setPopup((prev) => ({ ...prev, popup: true }));
        },

        onSettled: (data, a) => {
          queryClient.invalidateQueries({
            queryKey: ["/api/inventory/feed"],
          });
          queryClient.invalidateQueries({
            queryKey: ["/api/main"],
          });
          queryClient.invalidateQueries({
            queryKey: ["/api/inventory/animal"],
          });
        },
      }
    );
  };

  return { eatHandler, popup, popupData, setPopup };
}
