import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomFeed,
  AtomFeedPopup,
  AtomLevelPopup,
  AtomLevelStatus,
  AtomMyCharacter,
} from "../store";

import { feedType } from "../types";
import { useEffect, useState } from "react";

import useUpdate from "./useUpdate";

export default function useEat() {
  const [myFeed, setMyFeed] = useRecoilState(AtomFeed);
  const setMyCharacter = useSetRecoilState(AtomMyCharacter);
  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const [popupData, setPopupData] = useState("");

  const levelStatus = useRecoilValue(AtomLevelStatus);
  const setFeedPopup = useSetRecoilState(AtomFeedPopup);

  const { mutate } = useUpdate({ url: "/api/animal/feed" });

  const eatHandler = ({
    grade,
    name,
    exp,
  }: {
    grade?: number;
    name: string;
    exp: number;
  }) => {
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
    setMyFeed((prev) =>
      prev.map((item) => ({
        ...item,
        quantity: name === item.name ? item.quantity - 1 : item.quantity,
      }))
    );
    setMyCharacter((prev) => ({
      ...prev,
      acquired_exp: prev.acquired_exp + exp + 1000,
    }));
    // 수량 감소 및 경험치 증가
    // if (grade === 0) {
    //   setFeed((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    //   setMyCharacter((prev) => ({
    //     ...prev,
    //     acquired_exp: prev.acquired_exp + feed.experience,
    //   }));
    // } else if (grade === 1) {
    //   setAnotherFeed((prev) => ({
    //     ...prev,
    //     quantity: prev.quantity - 1,
    //   }));
    //   setMyCharacter((prev) => ({
    //     ...prev,
    //     acquired_exp: prev.acquired_exp + anotherFeed.experience,
    //   }));
    // }

    // 서버업데이트

    // mutate(
    //   {
    //     animal_id: myCharacter.id,
    //     feed_id: grade,
    //   },
    //   {
    //     onError: (error) => {
    //       // setPopup((prev) => ({ ...prev, popup: true }));
    //       console.error(error);
    //     },
    //     onSuccess: (res) => {
    //       // setPopupData("먹었습니다.");
    //       // setPopup((prev) => ({ ...prev, popup: true }));
    //     },
    //   }
    // );
  };

  return { eatHandler, popup, popupData, setPopup };
}
