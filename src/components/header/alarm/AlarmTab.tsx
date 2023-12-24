import { useEffect, useState } from "react";
import { buttonStyle, tabStyle } from "../../../style";
import { MdDeleteOutline } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  AtomAlarmLength,
  AtomAlarmList,
  AtomAlarmReadLength,
} from "../../../store";
import ClickButton from "../../buttons/ClickButton";
import { ClickType } from "../../../types";
import { AlarmType } from "../../../types";
import TabTop from "../../layout/TabTop";
import BackButton from "../../buttons/BackButton";
import useGetAxios from "../../../hooks/useGetAxios";

export default function AlarmTab({
  HeaderTabDatas,
}: {
  HeaderTabDatas: { [key: string]: string };
}) {
  const { data, isLoading } = useGetAxios({ url: "/api/alarm/list" });
  const [alarmList, setAlarmList] = useRecoilState(AtomAlarmList);
  const setAlarmLength = useSetRecoilState(AtomAlarmLength);
  const setAlarmReadLength = useSetRecoilState(AtomAlarmReadLength);
  const [alarmListData, setAlarmListData] = useRecoilState(AtomAlarmList);

  useEffect(() => {
    setAlarmList(alarmListData);
  }, []);
  useEffect(() => {
    setAlarmLength(alarmList.length);
    setAlarmReadLength(
      alarmList.filter((item) => item.is_read === false).length
    );
  }, [alarmList]);

  const deleteAlarmHandler = (e: any, list: AlarmType, idx: number) => {
    setAlarmList((prev) => prev.filter((item) => item !== list));
  };
  const readAlarmHandler = (e: ClickType, list: AlarmType, idx: number) => {
    e.stopPropagation();
    if (!list.is_read)
      setAlarmList((prev) =>
        prev.map((item) => ({
          ...item,
          is_read: list === item ? true : item.is_read,
        }))
      );
    return;
  };
  // const allDeleteHandler = () => {
  //   setAlarmList([]);
  // };
  // const allReadHandler = () => {
  //   setAlarmList((prev: any) =>
  //     prev.map((item: any) => ({ ...item, is_read: true }))
  //   );
  // };
  useEffect(() => {
    if (data && !isLoading) {
      data.list.map((item: AlarmType) => ({
        ...item,
        is_read: true,
      }));
    }
    // setAlarmList((prev: any) =>
    //   prev.map((item: any) => ({ ...item, is_read: true }))
    // );
  }, [data, isLoading]);

  return (
    <div className={tabStyle.tab_wrap}>
      <BackButton back="" title="알람" />

      <div className={`${tabStyle.tab_inner} `}>
        {!isLoading && data && (
          <ul className={tabStyle.alarm_tab_inner}>
            {data.list.length > 0 ? (
              data.list.map((list: AlarmType, idx: number) => (
                <AlarmList
                  list={list}
                  idx={idx}
                  key={`${list.message}_${list.change_time}_${idx}`}
                  deleteAlarmHandler={deleteAlarmHandler}
                  readAlarmHandler={readAlarmHandler}
                />
              ))
            ) : (
              <p
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                알람이 없습니다.
              </p>
            )}
          </ul>
        )}
      </div>
      {/* <div className="btns2">
        <ClickButton
          className={buttonStyle.timerBtn}
          text="모두 읽음"
          clickHandler={allReadHandler}
        />
        <ClickButton
          className={buttonStyle.evolutionBtn}
          text="전체삭제"
          clickHandler={allDeleteHandler}
        />
      </div> */}
    </div>
  );
}

const AlarmList = ({
  list,
  idx,
  deleteAlarmHandler,
  readAlarmHandler,
}: {
  list: AlarmType;
  idx: number;
  deleteAlarmHandler: (e: any, list: AlarmType, idx: number) => void;
  readAlarmHandler: (e: any, list: AlarmType, idx: number) => void;
}) => {
  // ${
  //   list.is_read === false ? `${tabStyle.active}` : ""
  // }
  return (
    <li
      onClick={(e) => readAlarmHandler(e, list, idx)}
      className={`${tabStyle.alarm_list}  `}
    >
      <div className={tabStyle.alarm_list_des}>
        <h4>{list.message}</h4>
        <span>{list.change_time}</span>
      </div>
      {/* <span onClick={(e) => deleteAlarmHandler(e, list, idx)}>
        <MdDeleteOutline style={{ fontSize: 25 }} />
      </span> */}
    </li>
  );
};
