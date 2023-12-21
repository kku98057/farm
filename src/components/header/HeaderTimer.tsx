import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { AtomMyFeedTime } from "../../store";
import FormatTimer from "../../Fn/FormatTimer";

export default function HeaderTimer({ limit_feed }: { limit_feed: number }) {
  // const [myFeedTime, setMyFeedTime] = useRecoilState(AtomMyFeedTime);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (myFeed.quantity >= limit_feed) {
  //       clearInterval(timer);
  //       setMyFeedTime((prev) => ({
  //         ...prev,
  //         gain_feed: 0,
  //       }));
  //       return;
  //     }
  //     setMyFeedTime((prev) => {
  //       if (prev.gain_feed <= 0) {
  //         return {
  //           ...prev,
  //           gain_feed: 3600 * 1000,
  //         };
  //       }
  //       return {
  //         ...prev,
  //         gain_feed: prev.gain_feed - 1000,
  //       };
  //     });
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   // 먹이 업데이트
  // }, []);

  return <p style={{ fontSize: 12, color: "#757575" }}></p>;
}
