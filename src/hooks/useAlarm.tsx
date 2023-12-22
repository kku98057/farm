import { useRecoilState, useSetRecoilState } from "recoil";
import { AtomAlarmLength, AtomAlarmList, AtomAlarmReadLength } from "../store";

export default function useAlarm() {
  const setAlarmList = useSetRecoilState(AtomAlarmList);
  const alarmReadLength = useSetRecoilState(AtomAlarmReadLength);
  const alarmLength = useSetRecoilState(AtomAlarmLength);
  const addAlarmHandler = ({ meg }: { meg: string }) => {
    const years = new Date().getFullYear();
    const month = new Date().getMonth().toString().padStart(2, "0");
    const day = new Date().getDate().toString().padStart(2, "0");
    const hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    const second = new Date().getSeconds().toString().padStart(2, "0");
    const date = `${years}-${month}-${day} ${hours}:${minutes}:${second}`;

    setAlarmList((prev: any) => [
      {
        id: 0,
        message: meg,
        change_time: date,
        is_read: false,
      },
      ...prev,
    ]);
    alarmReadLength((prev) => prev + 1);
    alarmLength((prev) => prev + 1);
  };
  return { addAlarmHandler };
}
