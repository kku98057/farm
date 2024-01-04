import { useRecoilState, useSetRecoilState } from "recoil";
import { buttonStyle } from "../../../style";
import {
  AtomFeedPopup,
  AtomLevelPopup,
  AtomLevelStatus,
  AtomLoading,
  AtomMyCharacter,
  AtomMyFeedTime,
  AtomUser,
} from "../../../store";
import { useEffect, useState } from "react";
import ClickButton from "../../buttons/ClickButton";

import { LevelStatusType } from "../../../types";
import ViewTimer from "../../ViewTimer";

import { accountLevelModel } from "../../../config/constant";
import useAlarm from "../../../hooks/useAlarm";
import MyCharacter from "../../MyCharacter";
import { nextLevel } from "../../../Fn/nextLevel";
import UpdateNextLevelExp from "../../../Fn/UpdateNextLevelExp";
import UpdateNextCurrency from "../../../Fn/UpdateNextCurrency";
import useUpdate from "../../../hooks/useUpdate";
import { useQueryClient } from "@tanstack/react-query";

export default function EvolutionBtns({
  albeEat,
  setAbleEat,
  text,
  type,
}: {
  albeEat: boolean;
  setAbleEat: (state: boolean) => void;
  text: string;
  type: string;
}) {
  const setLoading = useSetRecoilState(AtomLoading);
  const queryClient = useQueryClient();
  const { mutate: evolutionMutate } = useUpdate({
    url: "/api/animal/revolution",
  });
  const [levelStatus, setLevelStatus] = useRecoilState(AtomLevelStatus);
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);

  const [feedTime, setFeedTime] = useRecoilState(AtomMyFeedTime);
  const setPopup = useSetRecoilState(AtomLevelPopup);

  const evolutionHandler = () => {
    setLoading(true);
    evolutionMutate(
      { animal_id: myCharacter.id },

      {
        onSuccess: (res) => {
          console.log(res);
          setLoading(false);
        },
        onError: (error) => {
          console.error(error);
          setLoading(false);
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/main"] });
        },
      }
    );
  };

  // 타이머 상태변경
  useEffect(() => {
    // 진화 타이머
    if (
      feedTime.use_feed <= 0 &&
      levelStatus.levelStatus === "evolution" &&
      levelStatus.expTimer === "starting"
    ) {
      setLevelStatus({
        levelStatus: "evolution_complete",
        expTimer: "stop",
      });
      return;
    }
    // 최종진화 타이머
    if (
      feedTime.use_feed <= 0 &&
      levelStatus.levelStatus === "last_evolution" &&
      levelStatus.expTimer === "starting"
    ) {
      setLevelStatus({
        levelStatus: "last_evolution_complete",
        expTimer: "stop",
      });
      return;
    }
  }, [feedTime.use_feed]);

  return (
    <>
      {myCharacter.remain_next_level_time <= 0 &&
        myCharacter.is_growth === false &&
        myCharacter.acquired_exp < myCharacter.next_exp &&
        myCharacter.level < 15 && <StatePending />}
      {myCharacter.remain_next_level_time > 0 &&
        myCharacter.is_growth === true && <ViewTimer />}

      {myCharacter.remain_next_level_time <= 0 &&
        myCharacter.is_growth === true && (
          <StateEvolution evolutionHandler={evolutionHandler} text="레벨업" />
        )}

      {/* {levelStatus.levelStatus === "evolution_complete" && (
        <ClickButton
          clickHandler={completeEvolution}
          text="진화 완료"
          className={buttonStyle.evolutionBtn}
        />
      )}
      {levelStatus.levelStatus === "last_evolution_complete" && (
        <ClickButton
          clickHandler={completeLastEvolution}
          text="최종진화 완료"
          className={buttonStyle.evolutionBtn}
        />
      )} */}
    </>
  );
}

const StatePending = () => {
  const setFeedPopup = useSetRecoilState(AtomFeedPopup);

  return (
    <>
      <ClickButton
        className={buttonStyle.feedBtn}
        text={"밥먹기"}
        clickHandler={() => setFeedPopup(true)}
      />
    </>
  );
};

const StateEvolution = ({
  evolutionHandler,
  text,
}: {
  evolutionHandler: () => void;
  text: string;
}) => {
  return (
    <ClickButton
      className={buttonStyle.evolutionBtn}
      text={text}
      clickHandler={evolutionHandler}
    />
  );
};
