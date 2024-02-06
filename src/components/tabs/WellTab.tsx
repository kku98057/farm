import { buttonStyle, tabStyle } from "../../style";

import { emotionListType, tabDatasType } from "../../types";
import { useState, useEffect } from "react";
import TabTop from "../layout/TabTop";

import {
  FaHeart,
  FaRegSadTear,
  FaRegSurprise,
  FaRegSmile,
  FaTired,
} from "react-icons/fa";
import { FaFaceAngry } from "react-icons/fa6";
import { MdOutlineSick } from "react-icons/md";
import { BsEmojiFrown } from "react-icons/bs";
import ClickButton from "../buttons/ClickButton";

import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../Loading";
import Popup from "../Popup";
import useUpdate from "../../hooks/useUpdate";

import { MEG } from "../../ennum";
import FormatTimer from "../../Fn/FormatTimer";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AtomAlarmList, AtomLevelPopup } from "../../store";
import useAlarm from "../../hooks/useAlarm";
import BackButton from "../buttons/BackButton";

export default function WellTab({ tabDatas }: { tabDatas: tabDatasType }) {
  const { data, isLoading } = useGetAxios({ url: "/api/game/emotion/list" });
  const [ableEmotion, setAbleEmotion] = useState(true);
  const [clickLmit, setClickLmit] = useState(10);
  const [popup, setPopup] = useRecoilState(AtomLevelPopup);
  const [poupData, setPopupData] = useState("");
  const { mutate } = useUpdate({ url: "/api/game/emotion" });
  const [loading, setLoading] = useState(false);
  const [reaminTime, setRemainTime] = useState(0);

  const [start, setStart] = useState(false);
  const { addAlarmHandler } = useAlarm();
  useEffect(() => {
    if (data && !isLoading) {
      setRemainTime(data.remain_emotion * 1000);
      setClickLmit(data.remain_emotion);
      setStart(true);
    }
  }, [data, isLoading]);

  const clickHandler = (e: any, name: string, id: number) => {
    if (loading) return;
    setLoading(true);

    const divs = document.querySelectorAll(`.${tabStyle.updateWell}`);
    if (divs.length >= 9) {
      setTimeout(() => {
        divs.forEach((list) => {
          list.remove();
        });
        setAbleEmotion(true);
      }, 6000);
      setAbleEmotion(false);
    }
    if (!ableEmotion) {
      setPopup({ popup: true, text: MEG.WAITE_30_MEG });
      return;
    }
    if (clickLmit > 0) {
      mutate(
        { emotion_id: id },
        {
          onSuccess: () => {
            setClickLmit((prev) => prev - 1);
            setPopup({ popup: true, text: MEG.LOGGING_MEG });
            setLoading(false);
            setStart(true);
            // addAlarmHandler({ meg: `${name}${MEG.LOGGING_MEG}` });
            setRemainTime(1000 * 30);
          },
          onError: (error: any) => {
            if (error.response.status === 405)
              setPopup({ popup: true, text: MEG.WAITE_30_MEG });

            setLoading(false);
          },
        }
      );
    } else {
      alert(MEG.LIMT_100_MEG);
    }
  };

  return (
    <>
      <form className={tabStyle.tab_wrap}>
        <BackButton back="" title="감정우물" />

        <div className={tabStyle.well_count}>
          <span>감정우물 남은 횟수 : {!isLoading && clickLmit}회</span>
          {/* <span>{FormatTimer(reaminTime)}</span> */}
        </div>
        <div className={tabStyle.tab_inner}>
          <ul className={tabStyle.well_ul}>
            {!isLoading ? (
              data.emotion_list.map((list: emotionListType, idx: number) => (
                <EmotionList
                  key={`${list.name}_${idx}`}
                  list={list}
                  clickLmit={clickLmit}
                  setClickLmit={setClickLmit}
                  clickHandler={clickHandler}
                />
              ))
            ) : (
              <Loading />
            )}
          </ul>
        </div>
      </form>
    </>
  );
}

function EmotionList({
  list,
  clickLmit,
  clickHandler,
}: {
  list: emotionListType;
  clickLmit: number;
  clickHandler: (e: any, name: string, id: number) => void;
  setClickLmit: (state: number) => void;
}) {
  const transformImage = (name: string) => {
    switch (name) {
      case "사랑":
        return <FaHeart />;
      case "분노":
        return <FaFaceAngry />;
      case "슬픔":
        return <FaRegSadTear />;
      case "놀라움":
        return <FaRegSurprise />;
      case "아픔":
        return <MdOutlineSick />;
      case "고마움":
        return <FaRegSmile />;
      case "걱정":
        return <BsEmojiFrown />;
      case "피곤":
        return <FaTired />;
      default:
        return;
    }
  };
  return (
    <li
      key={`${list.name}_well`}
      className={tabStyle.well_list}
      onClick={(e) => clickHandler(e, list.name, list.id)}
    >
      <div className={tabStyle.well_img}>{transformImage(list.name)}</div>
      <span className={tabStyle.well_name}>{list.name}</span>
    </li>
  );
}
