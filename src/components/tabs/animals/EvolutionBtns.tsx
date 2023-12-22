import { useRecoilState, useSetRecoilState } from "recoil";
import { buttonStyle } from "../../../style";
import {
  AtomFeedPopup,
  AtomLevelPopup,
  AtomLevelStatus,
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
  const queryClient = useQueryClient();
  const { mutate: evolutionMutate } = useUpdate({ url: "" });
  const [levelStatus, setLevelStatus] = useRecoilState(AtomLevelStatus);
  const [myCharacter, setMyCharacter] = useRecoilState(AtomMyCharacter);
  const [userData, setUserData] = useRecoilState(AtomUser);
  const [feedTime, setFeedTime] = useRecoilState(AtomMyFeedTime);
  const setPopup = useSetRecoilState(AtomLevelPopup);

  const EVOLUTION_LEVEL_UNIT = 5;
  const LAST_EVOLUTION_LEVEL_UNIT = 20;

  const { addAlarmHandler } = useAlarm();

  const evolutionHandler = () => {
    //진화 시간
    const evolutionTime = () => {
      switch (myCharacter.level) {
        case 5:
          return 1000 * 60 * 3; // 3분
        case 10:
          return 1000 * 60 * 6; //6분
        case 15:
          return 1000 * 60 * 10; //10분
        case 20:
          return 1000 * 60 * 30; //30분
        default:
          return 0;
      }
    };
    setFeedTime((prev) => ({
      ...prev,
      use_feed: 1000,

      // accountLevelModel[
      //   nextLevel(myCharacter.level) as keyof typeof accountLevelModel
      // ].time,
    }));
    if (myCharacter.level < LAST_EVOLUTION_LEVEL_UNIT) {
      setLevelStatus({
        expTimer: "starting",
        levelStatus: "evolution",
      });
      return;
    } else if (myCharacter.level === LAST_EVOLUTION_LEVEL_UNIT) {
      setLevelStatus({
        expTimer: "starting",
        levelStatus: "last_evolution",
      });
      return;
    }
  };
  // 진화상태 변경
  // useEffect(() => {
  //   // if (levelStatus.levelStatus === "evolution") {
  //   //   setPopup({ popup: true, text: "이제 진화를 할 수 있습니다." });
  //   // } else if (levelStatus.levelStatus === "last_evolution") {
  //   //   setPopup({ popup: true, text: "이제 최종진화를 할 수 있습니다." });
  //   // }
  // }, [levelStatus.levelStatus]);
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

  useEffect(() => {
    // 레벨 + 1
    if (
      myCharacter.acquired_exp >= myCharacter.next_exp &&
      (myCharacter.level % EVOLUTION_LEVEL_UNIT !== 0 || myCharacter.level > 20)
    ) {
      setMyCharacter((prev) => ({
        ...prev,
        level: prev.level + 1,
        acquired_exp: 0,

        next_exp: UpdateNextLevelExp(myCharacter.level + 1, prev.next_exp),
      }));
      setUserData((prev) => ({
        ...prev,
        currency: UpdateNextCurrency(myCharacter.level + 1, prev.currency),
      }));
      return;
    }
    // 5레벨 단위마다 진화
    if (
      myCharacter.acquired_exp >= myCharacter.next_exp &&
      myCharacter.level % EVOLUTION_LEVEL_UNIT === 0 &&
      myCharacter.level !== LAST_EVOLUTION_LEVEL_UNIT &&
      myCharacter.level < 20
    ) {
      setLevelStatus({ expTimer: "stop", levelStatus: "evolution" });
    }
    // 20레벨일때 최종진화
    if (
      myCharacter.acquired_exp >= myCharacter.next_exp &&
      myCharacter.level === LAST_EVOLUTION_LEVEL_UNIT
    ) {
      setLevelStatus({ expTimer: "stop", levelStatus: "last_evolution" });
    }
  }, [myCharacter.acquired_exp, myCharacter.level]);
  // 진화 완료 및 보상
  const completeEvolution = () => {
    evolutionMutate(
      {},
      {
        onError: (error) => {
          console.error(error);
          alert(error);
        },
        onSuccess: () => {
          setLevelStatus({
            expTimer: "stop",
            levelStatus: "normal",
          });
          // addAlarmHandler({ meg: "축하드립니다.\n진화에 성공하셨습니다." });
          setPopup({
            popup: true,
            text: "축하드립니다. 진화에 성공하셨습니다.",
          });
          switch (myCharacter.level) {
            // 5레벨 진화
            case 5:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              console.log(myCharacter.level);
              return;
            // 10레벨 진화
            case 10:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              return;
            // 15레벨 진화
            case 15:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              return;
            // 20레벨 진화
            case 20:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              return;
            // 25레벨 진화
            case 25:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              return;
            // 30레벨 진화
            case 30:
              setMyCharacter((prev) => ({
                ...prev,
                level: prev.level + 1,
                acquired_exp: 0,
                next_exp: UpdateNextLevelExp(
                  myCharacter.level + 1,
                  prev.next_exp
                ),
              }));
              setUserData((prev) => ({
                ...prev,
                currency: prev.currency + 500,
              }));
              return;
            default:
              console.log("default");
              return;
          }
        },
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: ["/api/main"],
          });
        },
      }
    );

    // 진화 캐릭터 변경
  };
  // 최종진화 완료 및 보상
  // 진화 및 최종진화시 500크리스탈
  const completeLastEvolution = () => {
    setLevelStatus({
      expTimer: "stop",
      levelStatus: "normal",
    });
    setMyCharacter((prev) => ({
      ...prev,
      level: prev.level + 1,
      acquired_exp: 0,
      next_exp: UpdateNextLevelExp(myCharacter.level + 1, prev.next_exp),
    }));
    setUserData((prev) => ({
      ...prev,
      currency: prev.currency + 500,
    }));
    // addAlarmHandler({ meg: "축하드립니다!\n최종진화에 성공하셨습니다." });
    setPopup({ popup: true, text: "축하드립니다. 최종진화에 성공하셨습니다." });
    // 진화 캐릭터 변경
  };

  return (
    <>
      {levelStatus.levelStatus === "normal" && <StatePending />}
      {(levelStatus.levelStatus === "evolution" ||
        levelStatus.levelStatus === "last_evolution") &&
        levelStatus.expTimer === "starting" && <ViewTimer />}
      {(levelStatus.levelStatus === "evolution" ||
        levelStatus.levelStatus === "last_evolution") &&
        levelStatus.expTimer === "stop" && (
          <StateEvolution
            evolutionHandler={evolutionHandler}
            levelStatus={levelStatus}
          />
        )}
      {levelStatus.levelStatus === "evolution_complete" && (
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
      )}
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
  levelStatus,
}: {
  levelStatus: LevelStatusType;
  evolutionHandler: () => void;
}) => {
  const text = () => {
    switch (levelStatus.levelStatus) {
      case "evolution":
        return "진화";
      case "last_evolution":
        return "최종진화";
      default:
        return "";
    }
  };
  return (
    <ClickButton
      className={buttonStyle.evolutionBtn}
      text={text()}
      clickHandler={evolutionHandler}
    />
  );
};
